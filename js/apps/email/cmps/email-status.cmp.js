// import { emailService } from "../services/email.service.js";

export default{
    name:'email-status',
    props:['emails'],
    template:`
    <div :unreadCount="getUnreadCount(emails)">
        {{unreadCount}}
    </div>
    `,
    data() {
        return {
            unreadCount: 0
        }
    },
    // computed:{
    //     unreadCount(){
    //         let count=0
    //         emails.forEach((email) => {
    //             if (email.isRead) count ++
                
    //         });
    //     }
    // },
    methods: {
        getUnreadCount(emails) {
            console.log(emails)
            emails.forEach((email) => {
                if (!email.isRead) this.unreadCount++   
            });
        }
    }
}