import {eventBus} from '../services/event-bus.service.js';

export default {
    name: 'user-msg',
    template: `
    <section v-if="msg" class="user-msg">
        {{msg}}
    </section>
    `,
    data() {
        return {
            msg: ''
        }
    },
    created() {
        eventBus.$on('user-msg', msg => {
            this.msg = msg;
            setTimeout(() => this.msg = '', 3000);
        });
    }
    
}