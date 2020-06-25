export default{
    name:'email-nav-bar',

    template: `
    <div class="mail-nav-bar">
    <button class="compose-button" v-on:click="compose"><i class="fa fa-plus"></i>  Compose</button>
    <ul class="mail-nav-list">
        <li><router-link to="/email/inbox">Inbox</router-link></li>
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
    }
}