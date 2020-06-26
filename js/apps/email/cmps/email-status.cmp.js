// import { emailService } from "../services/email.service.js";

export default{
    name:'email-status',
    props:['emails'],
    template:`
    <div>
        {{unreadCount}}
    </div>
    `,
    computed:{
        unreadCount(){
            let count=0
            emails.forEach((email) => {
                if (email.isRead) count ++
                
            });
        }
    }
}