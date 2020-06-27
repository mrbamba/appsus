import { eventBus } from '../services/event-bus.service.js';


export default {
  name: 'app-header',
  template: `
     <header class="app-header ">
     <img src="./img/logo.svg" class="logo">

        <input class="main-search" placeholder="Search" v-model="filterBy.searchStr" @input="filter"/>
        <button class="btn-menu" @click="onToggleMenu()">☰</button>
        <nav class="main-nav">
                <router-link to="/" exact><i class="fas fa-igloo" @click="onToggleMenu"></i></router-link>
                <router-link to="/email/inbox"><i class="far fa-envelope" @click="onToggleMenu"></i></router-link>
                <router-link to="/notes"><i class="far fa-sticky-note" @click="onToggleMenu"></i></i></router-link>
                <router-link to="/books"><i class="fas fa-book" @click="onToggleMenu"></i></router-link>
                <router-link to="/about/"><i class="far fa-address-card" @click="onToggleMenu"></i></router-link>
        </nav>
    </header>
    `,
    data() {
      return {
        filterBy: {
          searchStr: ''
        }
      }
    },
    methods: {
      filter() {
        eventBus.$emit('filter', this.filterBy.searchStr);
      },
      onToggleMenu() {
        document.body.classList.toggle('menu-open');
    }
    }
};
