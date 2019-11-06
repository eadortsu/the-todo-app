import Vue from 'vue';
import App from './App.vue';
import './main.html';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

const vuetify = new Vuetify({})
Meteor.startup(() => {
  new Vue({
    el: '#app',
    vuetify,
    ...App,
  });
});

