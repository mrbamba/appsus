import { eventBus } from '../services/event-bus.service.js';


export default {
  name: 'app-header',
  template: `
     <header class="app-header ">
     <img src="./img/logo.svg" class="logo">

        <input class="main-search" placeholder="Search" v-model="searchStr" @input="filter"/>
        <nav class="main-nav">
                <router-link to="/" exact><i class="fas fa-igloo"></i></router-link>
                <router-link to="/email/inbox"><i class="far fa-envelope"></i></router-link>
                <router-link to="/notes"><i class="far fa-sticky-note"></i></i></router-link>
                <router-link to="/books"><i class="fas fa-book"></i></router-link>
                <router-link to="/about"><i class="far fa-address-card"></i></router-link>
        </nav>
    </header>
    `,
    data() {
      return {
        searchStr: ''
      }
    },
    methods: {
      filter() {
        eventBus.$emit('filter', this.searchStr);
      }
    }
};
