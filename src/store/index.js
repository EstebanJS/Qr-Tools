import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid';
import { addItemQr, getListQr, removeItem } from '../lib/localStorage';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listQr: []
  },
  mutations: {
    MtaInitialiceListQr(state, data) {
      state.listQr = data
    },
    MtaAddItemQr(state, data) {
      state.listQr.push(data)
    },
    MtaRemoveItemQr(state, id) {
      state.listQr = state.listQr.filter(item => item.id !== id)
    }
  },
  actions: {
    ActIntialiceListQr(context) {
      const data = getListQr()
      context.commit('MtaInitialiceListQr', data)
    },
    ActAddItemQr(context, data) {
      const Item = {
        id: uuidv4(),
        ...data
      }
      addItemQr(Item)
      context.commit('MtaAddItemQr', Item)
    },
    ActRemoveItemQr(context, id) {
      removeItem(id)
      context.commit('MtaRemoveItemQr', id)
    }
  },
  getters:{
    getListQr: state =>{
      return state.listQr
    }
  }
})
