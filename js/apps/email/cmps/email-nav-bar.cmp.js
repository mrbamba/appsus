import emailStatus from './email-status.cmp.js'
import { emailService } from "../services/email-service.js";


export default{
    name:'email-nav-bar',
    props:['emails','count'],

    template: `
    <div class="mail-nav-bar">
    <button class="compose-button" v-on:click="compose"><i class="fa fa-plus" title="Compose new Email"></i>  Compose</button>
    <ul class="email-nav-list">
        <li><router-link class="router-link flex space-between" to="/email/inbox"><span>Inbox </span><span>&nbsp; {{count}}</span> </router-link></li>
        <li><router-link class="router-link" to="/email/starred">Starred</router-link></li>
        <li><router-link class="router-link" to="/email/sent">Sent</router-link></li>
        <li><router-link class="router-link" to="/email/spam">Spam</router-link></li>
        <li><router-link class="router-link" to="/email/trash">Trash</router-link></li>
        <li><router-link class="router-link" to="/email/all">All</router-link></li>

    </ul>
    </div>
    `,
    methods:{
        compose(){
            this.$emit('compose');
        },
        onToggleMenu() {
            document.body.classList.toggle('menu-open');
          }
    },
    components:{
    },
    computed:{
        

    }
}
