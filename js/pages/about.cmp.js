

export default {
    template: `
        <section>
            <h2>About {{$route.params.who}}</h2>
            <nav>
                <router-link to="team">Our Team</router-link> | 
                <router-link to="service">Our Service</router-link> | 
            </nav>
            <router-view />
            <hr/>
            <h4>This is us</h4>
    </section>
    `
}

