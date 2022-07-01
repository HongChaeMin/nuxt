// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: false,
  mini: false,
  color: '#4CAF50',
  items: [
    {
      title: 'Java',
      icon: 'mdi-view-dashboard',
      to: '/step/java/',
    },
    {
      title: 'MySQL',
      icon: 'mdi-chart-bubble',
      to: '/step/my-sql/',
    },
    {
      title: 'Spring Boot',
      icon: 'mdi-clipboard-outline',
      to: '/step/spring-boot/',
    },
    {
      title: 'Spring Data Jpa',
      icon: 'mdi-format-font',
      to: '/step/spring-data-jpa/',
    },
    /* {
      title: 'Icons',
      icon: 'mdi-chart-bubble',
      to: '/components/icons/',
    },
    {
      title: 'Google Maps',
      icon: 'mdi-map-marker',
      to: '/maps/google/',
    },
    {
      title: 'Notifications',
      icon: 'mdi-bell',
      to: '/components/notifications/',
    }, */
  ],
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
