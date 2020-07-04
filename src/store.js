import Vue from 'vue'
import {appCommDefaultExpandRes,login} from './libs/responseHandler.js';
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken:'',

  },
  mutations: {
    setAccessToken(state,accessToken){
     state.accessToken=accessToken;
    }
  },
  actions:{
    handleLogin({commit},{username,password}){
       username =username.trim();
       return new Promise((resolve,reject)=>{
         appCommDefaultExpandRes(login({
           username,
           password
         })).then(data=>{
           commit('setAccessToken',data.access_token);
           resolve();
         })
       })
     },
    getLoginSuccessUserInfo({commit,}){}
  }
})
