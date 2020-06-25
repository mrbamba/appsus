export default {
  template: `
     <header class="app-header ">
        <input class="main-search" placeholder="Search"/>
        <nav class="main-nav">
                <router-link to="/" exact><i class="fas fa-igloo"></i></router-link>
                <router-link to="/email"><i class="far fa-envelope"></i></router-link>
                <router-link to="/notes"><i class="far fa-sticky-note"></i></i></router-link>
                <router-link to="/books"><i class="fas fa-book"></i></router-link>
                <router-link to="/about"><i class="far fa-address-card"></i></router-link>
        </nav>
    </header>
    `,
};
