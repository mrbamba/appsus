

export default {
    template: `
     <header class="app-header">
            <h1> Miss Book </h1>
            <nav>
                <router-link to="/">Home</router-link>|
                <router-link to="/book">Books</router-link>|
                <router-link to="/add">Add Books</router-link>|
                <router-link to="/about">About</router-link>

            </nav>
        </header>
    `
}