

export default {
    template: `
    <section class="home-page">
        <h1>AppWheel </h1>
        <main class="flex space-around wrap">
            <div class="home-icon">
                <h4 class="home-titles"> Email </h4>
            <router-link to="/email/inbox"><i class="far fa-envelope fa-5x"></i></router-link>
            </div>
            <div class="home-icon">
                <h4 class="home-titles"> Notes </h4>
            <router-link to="/notes"><i class="far fa-sticky-note fa-5x"></i></i></router-link>
            </div>
            <div class="home-icon">
                <h4 class="home-titles"> Books </h4>
            <router-link to="/books"><i class="fas fa-book fa-5x"></i></router-link>
            </div>
        </main>

    </section>
    `
}