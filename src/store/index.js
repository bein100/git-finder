import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: null,
    repositories: null,
    url: 'https://api.github.com/users',
    error: '',
    currentSort: 'name'
  },
  mutations: {
    sort(state, payload){
      state.currentSort = payload
    },
    userInfo(state, payload){
      state.user = payload
    },
    clearUserInfo(state){
      state.user = state.repositories = state.error = null
    },
    getError(state, error){
        if (error.response.status == 404) {
          state.error = 'Пользователь не найден...'
          state.user = state.repositories = null
        }else{
          state.error = error.response.data.message
          state.user = null
          state.repositories = null
        }
      },
      userRepos(state, payload){
        state.repositories = payload
      }
  },
  actions: {
    async userInfo({commit, state}, search){
      try {
        const res = await axios.get(`${state.url}/${search}`)
        const repos = await axios.get(`${state.url}/${search}/repos`)
        commit('userInfo', res.data)
        commit('userRepos', repos.data)
      } catch (error) {
        commit('getError', error)
        console.error('Произошла ошибка при получении данных');
        console.error(error);
      }
    }
  },
  getters: {
    getReposSort(state){
      if (state.repositories != null) {
        return state.repositories.sort((next,prev) => {
          let mod = 1
          if (prev[state.currentSort] > next[state.currentSort]) {
            return 1
          }
          if (prev[state.currentSort] < next[state.currentSort]) {
            return -1
          }
          else{
            return 0 }

        })
      }
    }
  }
})
