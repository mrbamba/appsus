import emailNavBar from '../cmps/email-nav-bar.cmp.js';
import emailList from '../cmps/email-list.cmp.js';
import { emailService } from '../services/email.service.js';


export default {
    template: `
        <div class="mail-main">
        <h1>Email</h1>
        <email-nav-bar></email-nav-bar>
        <email-list v-if="emails" :emails="emailsToShow"></email-list>

        </div>

    `,
    data(){
        return{
            emails:[],
            filterBy:{
                searchStr:'',
            }
        }
    },
    computed:{
        emailsToShow(){
            const filterBy=this.filterBy;
            if(!filterBy) return this.emails;

            let filteredEmails = this.emails.filter(email=>{
                return email.subject.toLowerCase().includes(filterBy.searchStr.toLowerCase()) ||
                email.body.toLowerCase().includes(filterBy.searchStr.toLowerCase()) ||
                email.from.toLowerCase().includes(filterBy.searchStr.toLowerCase()) ||
                email.to.toLowerCase().includes(filterBy.searchStr.toLowerCase())
            });
        }
    },
    created(){
        emailService.getEmails()
            .then(emails=>{
                this.emails=emails;
            })
    },
    methods:{
        setFilter(filterBy){
            this.filterBy = filterBy
        }
    },
    components:{
        emailNavBar,
        emailList
    }
}