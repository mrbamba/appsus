import emailPreview from './email-preview.cmp.js'

export default {
    name:'email-list',

    props:['emails'],
    template:`
    <div class="email-list">
        <table>
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
        emailPreview
    }
}