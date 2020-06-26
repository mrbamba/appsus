import emailPreview from './email-preview.cmp.js'
import emailListMenu from './email-list-menu.cmp.js'

export default {
    name:'email-list',

    props:['emails','emailCount'],
    template:`
    <div class="email-list">
        <table>
            <email-list-menu :emailCount='emailCount'/>
            <email-preview v-for="email in emails" @click.native="selectEmail(email.id)" :email="email" :key="email.id"/>
        </table>
    </div>
    `,
    methods:{
        selectEmail(emailId){
            this.$emit('emailSelected',emailId);
        }
    },
    components:{
        emailPreview,
        emailListMenu
    }
}