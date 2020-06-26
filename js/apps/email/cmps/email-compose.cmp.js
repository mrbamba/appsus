import { emailService } from "../services/email.service.js";

export default{
    name:'compose',
    template:`
    <div class="compose flex flex-column space-between">
        <h2>New Message</h2>
        <input class="compose-email-to" placeholder="Recepient Email address" v-model="outboundEmail.toAddress">
        <input class="compose-subject" placeholder="Email subject" v-model="outboundEmail.subject">
        <textarea class="compose-body" placeholder="Message Body" rows="30" cols="70" v-model="outboundEmail.body"></textarea>
        <div class="compose-bottom-controls flex space-between">
            <button class="send-button" @click="sendEmail" title="Send Email">Send Email</button>
            <button class="trash-button" @click="closeComposer" title="Scrap message"><i class=" far fa-trash-alt"></i></button>
        </div>
    </div>
    `,
    data() {
        return {
            outboundEmail:{},
        } 
    },
    created(){
        
            emailService.getEmptyEmail()
                .then((email)=>{
                    this.outboundEmail=email
                    console.log(this.outboundEmail)
                })
    },
    methods:{
        closeComposer(){
            this.$emit('closeCompose');
        },
        sendEmail(){
            console.log(this.outboundEmail);
            emailService.sendEmail(this.outboundEmail);
            this.$emit('closeCompose');
                }
    },
}