
import {myRouter} from './routes.js';

import appHeader from '../books/js/cmps/app-header.cmp.js';
import userMsg from '../books/js/cmps/user-msg.cmp.js';
// import {eventBus} from './services/event-bus.service.js'
// import bookApp from './cmps/book-app.cmp.js';
// eventBus.$emit('someEv', 64)



new Vue({
    el: '#app',
    router: myRouter,
    template: `
    <div>
       <user-msg/>
        <app-header></app-header>
        <main>
            <router-view />
        </main>
    </div>
    `,
    components: {
        appHeader,
        userMsg
    }
});