import Vue from 'vue';
import Todo from './Todo.vue';
import store from './store/store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Todo),
}).$mount('#app')
