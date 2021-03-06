import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import App from "../App";
import HelloWorld from "../components/HelloWorld";
import Register1 from "../components/Register1";
import Register2 from "../components/Register2";
import Register3 from "../components/Register3";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/hello',
      name: '/hello',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register1',
      name: 'register1',
      component: Register1
    },
    {
      path: '/register2',
      name: 'register2',
      component: Register2
    },
    {
      path: '/register3',
      name: 'register3',
      component: Register3
    }
  ]
})
