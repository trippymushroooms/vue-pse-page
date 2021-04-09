import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Team from '@/components/Team';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Team',
      name: 'Team',
      component: Team
    }
  ]
});
