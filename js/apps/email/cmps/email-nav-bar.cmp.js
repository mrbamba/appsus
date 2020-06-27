import emailStatus from './email-status.cmp.js'

export default{
    name:'email-nav-bar',
    props:['emails'],

    template: `
    <div class="mail-nav-bar">
    <button class="compose-button" v-on:click="compose"><i class="fa fa-plus" title="Compose new Email"></i>  Compose</button>
    <ul class="email-nav-list">
        <li><router-link class="router-link" to="/email/inbox">Inbox</router-link><email-status v-bind:emails="emails"/></li>
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
        emailStatus,
    }
}