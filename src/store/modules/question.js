import axios from 'axios'

const state = {
  list: []
}

const mutations = {
  getQuestions (state, payload) {
    state.list = payload.data
  }
}

const actions = {
  getQuestions: function ({commit}, option) {
    const url = '../static/data/' + option.type + '_paper' + option.id + '.json'
    axios.get(url).then(function (response) {
      commit({
        type: 'getQuestions',
        data: response.data.list
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
