import {createStore} from 'vuex'


export default createStore({
  
    state: {
        limit: 4,
        currentIndex: 0,
        storage: [],
        cards: [],
        url: 'https://layout.solvintech.ru/nuxt/api/',
        isPopup: false,
        popupInfo: {}
    },
    mutations: {
        closePopup(state) {
            state.isPopup = false
        },
        showPopup(state) {
            state.isPopup = true
        },
        getPopupInfo(state, card) {
            state.popupInfo = {...card}
        },
        getData(state, data) {
            state.storage = data
        },
        loadMoreCard(state) {
            for(let i = 0; i < state.limit; i++) {
              if(state.currentIndex === state.storage.length) {
                return
              }
                state.cards.push(state.storage[state.currentIndex])
                state.currentIndex++
            }
      }
    },
    actions: {
        fetchCards({state, commit}) {
            fetch(state.url, {
              method: 'GET',
            })
            .then(response => response.json())
            .then(response => {
              commit('getData', response)
              for(let i = 0; i < state.limit; i++) {
                  state.cards.push(state.storage[i])
                  state.currentIndex++
              }
            })  
        },
    }


})