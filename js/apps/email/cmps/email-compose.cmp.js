import { emailService } from "../services/email.service.js";

export default{
    name:'compose',
    template:`
    <div class="compose flex flex-column space-between">
        <h2>New Message</h2>
        <input class="compose-email-to" placeholder="Recepient Email address">
        <input class="compose-subject" placeholder="Email subject">
        <textarea class="compose-body" placeholder="Message Body" rows="30" cols="70"></textarea>
        <div class="compose-bottom-controls flex space-between">
            <button class="send-button">Send Email</button>
            <button class="trash-button"><i class=" far fa-trash-alt"></i></button>
        </div>
    </div>
    `,
    computed:{
        // outboundEmail:null
    },
    methods:{
        sendEmail(){
            let outboundEmail=null;
            emailService.getEmptyEmail()
                .then((email)=>{
                    this.outboundEmail=email
                })
                // outboundEmail.toAddress=
                
        }
    }
}