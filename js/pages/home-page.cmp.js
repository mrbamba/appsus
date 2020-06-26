

export default {
    template: `
    <section class="home-page">
        <h1>Appsus </h1>
        <main class="flex space-around wrap">
            <div class="home-icon">
            <router-link to="/email/inbox"><i class="far fa-envelope fa-5x"></i></router-link>
            <p> Email </p>
            </div>
            <div class="home-icon">
            <router-link to="/notes"><i class="far fa-sticky-note fa-5x"></i></i></router-link>
            <p> Notes </p>
            </div>
            <div class="home-icon">
            <router-link to="/books"><i class="fas fa-book fa-5x"></i></router-link>
            <p> Books </p>
            </div>
        </main>

    </section>
    `
}