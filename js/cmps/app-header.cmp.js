export default {
  template: `
     <header class="app-header ">
        <input class="main-search" placeholder="Search"/>
        <nav class="main-nav">
                <router-link to="/"><i class="fa fa-home"></i></router-link>
                <router-link to="/email"><i class="fa fa-envelope"></i></router-link>
                <router-link to="/notes"><i class="fa fa-sticky-note"></i></i></router-link>
                <router-link to="/books"><i class="fa fa-book"></i></router-link>
                <router-link to="/about"><i class="fa fa-address-card"></i></router-link>
        </nav>
    </header>
    `,
};
