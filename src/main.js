import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import moment from 'moment'

import { routes } from './routes';


Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
  mode: 'history',
  routes
})

var filter = function(text, length, clamp){
    clamp = clamp || '...';
    var node = document.createElement('div');
    node.innerHTML = text;
    var content = node.textContent;
    return content.length > length ? content.slice(0, length) + clamp : content;
};

var date = function(value) {
  if (value) {
    return moment(String(value)).format(' dddd | MM/DD/YYYY ');
  }
}


Vue.filter('truncate', filter);

Vue.filter('formatDate', date );




new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
