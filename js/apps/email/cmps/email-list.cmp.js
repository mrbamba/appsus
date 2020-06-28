import emailPreview from './email-preview.cmp.js'
import emailListMenu from './email-list-menu.cmp.js'

export default {
    name:'email-list',

    props:['emails','emailCount'],
    template:`
    <div class="email-list">
        <table style="height:100%; width:100%">
            <email-list-menu :emailCount='emailCount' v-on:filtered="emitFilter"  v-on:sorted="emitSort"></email-list-menu>
            <email-preview v-for="email in emails" @click.native="selectEmail(email.id)"  :email="email" :key="email.id"/>
        </table>
    </div>
    `,
    methods:{
        selectEmail(emailId){
            this.$emit('emailSelected',emailId);
        },
        emitFilter(filterBy){
            this.$emit('filtered',filterBy);
        },
        emitSort(sortBy){
            this.$emit('sorted',sortBy);
        },


    },
    components:{
        emailPreview,
        emailListMenu
    },
    created() {
        // console.log('email list created - count unread', this.emailCount);
        
    }
}