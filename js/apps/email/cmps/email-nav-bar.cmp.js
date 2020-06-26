import emailStatus from './email-status.cmp.js'

export default{
    name:'email-nav-bar',
    props:['emails'],

    template: `
    <div class="mail-nav-bar">
    <button class="compose-button" v-on:click="compose"><i class="fa fa-plus"></i>  Compose</button>
    <ul class="mail-nav-list">
        <li><router-link to="/email/inbox">Inbox</router-link><email-status v-bind:emails="emails"/></li>
        <li><router-link to="/email/starred">Starred</router-link></li>
        <li><router-link to="/email/sent">Sent</router-link></li>
        <li><router-link to="/email/spam">Spam</router-link></li>
        <li><router-link to="/email/trash">Trash</router-link></li>
        <li><router-link to="/email/all">All Emails</router-link></li>

    </ul>
    </div>
    `,
    methods:{
        compose(){
            this.$emit('compose');
        }
    },
    components:{
        emailStatus,
    }
}