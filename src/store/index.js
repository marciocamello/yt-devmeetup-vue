/**
 * Created by banda on 08/10/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'http://www.hotel-discount.com/wp-content/uploads/New_york_times_square-terabass.jpg',
        id: 'edfrgertert123',
        title: 'Meetup in New York',
        date: new Date(),
        location: 'New York',
        description: 'It\'s New York'
      },
      {
        imageUrl: 'https://media.architecturaldigest.com/photos/5931758bf368f9234dedb534/master/pass/Paris_Personalities_GettyImages-546896176-2.jpg',
        id: 'ertert23234234',
        title: 'Meetup in Paris',
        date: new Date(),
        location: 'Paris',
        description: 'It\'s Paris'
      }
    ],
    user: {
      id: 'edfrgertert123',
      registeredMeetups: ['ertert23234234']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: '234werwetert'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
