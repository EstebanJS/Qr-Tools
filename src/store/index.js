import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid';
import { addItemQr, getListQr, removeItemQr,addItemQrCreate, getListQrCreate, removeItemQrCreate } from '../lib/localStorage';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listQr: [],
    listQrCreate: []
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
    },
    MtaInitialiceListQrCreate(state, data) {
      state.listQrCreate = data
    },
    MtaAddItemQrCreate(state, data) {
      state.listQrCreate.push(data)
    },
    MtaRemoveItemQrCreate(state, id) {
      state.listQrCreate = state.listQrCreate.filter(item => item.id !== id)
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
      removeItemQr(id)
      context.commit('MtaRemoveItemQr', id)
    },
    ActIntialiceListQrCreate(context) {
      const data = getListQrCreate()
      context.commit('MtaInitialiceListQrCreate', data)
    },
    ActAddItemQrCreate(context, data) {
      const Item = {
        id: uuidv4(),
        ...data
      }
      addItemQrCreate(Item)
      context.commit('MtaAddItemQrCreate', Item)
    },
    ActRemoveItemQrCreate(context, id) {
      removeItemQrCreate(id)
      context.commit('MtaRemoveItemQrCreate', id)
    }
  },
  getters: {
    getListQr: state => {
      return state.listQr
    },
    getListQrCreate: state => {
      return state.listQrCreate
    }
  }
})
