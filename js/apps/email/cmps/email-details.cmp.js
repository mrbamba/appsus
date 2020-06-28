import { emailService } from "../services/email-service.js";
import { eventBus } from '../../../services/event-bus.service.js';
import { noteService } from '../../notes/services/notes.service.js';
import emailCompose from "../cmps/email-compose.cmp.js";
import notesEditorCmp from "../../notes/cmps/notes-editor.cmp.js";


export default {
  name: "email-details",
  props: ["email"],
  template: `
    <div class="email-details">
<div class="email-details-tool-bar flex space-between"> 
    <div class="email-details-left-tool-bar">
        <button class="back-button" @click="navigateBack" title="Back">
                <i class="fas fa-long-arrow-alt-left fa-2x" ></i>
        </button>
        <button class="trash-button" @click="deleteEmail(email)" title="Delete Email">
            <i class=" far fa-trash-alt fa-2x"></i>
        </button> 
        <button class="spam-button" @click="markAsSpam(email)" title="Mark as Spam">
            <i class="fas fa-ban fa-2x"></i>
        </button>
        <button class="mark-as-unread-button" @click="markAsUnread(email)" title="Mark as Unread">
            <i class="fas fa-envelope fa-2x"></i>
        </button>
        <button class="add-email-to-notes" @click="addToNotes(email)" title="Add to Notes">
            <span class="fa-stack">
                <i class="far fa-sticky-note fa-stack-2x"></i>
                <i class="fas fa-plus fa-stack-1x fa-1x"></i>
            </span>
        </button>
    </div>
    <div class="email-details-right-tool-bar">
        <button class="reply-to-button" @click="replyToEmail" title="Reply to Email">
            <i class="fas fa-reply fa-2x"></i>
        </button>
    </div>
</div>
<div class="email-details-header">
    <div class="email-details-header-left">
        <div class="email-subject">{{email.subject}}</div><br>
        <div class="email-details-contact-image flex ">
            <i class="fas fa-user"></i>
        </div>
        <div class="email-to-details">{{email.toName}} - <{{email.toAddress}}></div>
        <div class="email-from-details">{{email.fromName}} - <{{email.fromAddress}}></div>

    </div>
    <div class="email-details-header-right">
</div>

</div>
    <p class="email-body"><pre class="email-details-email-body-pre">{{email.body}}</pre></p>



<email-compose v-if="replyTo" :emailTo="replyTo" v-on:closeCompose="closeCompose"/>
    </div>
    `,
    data(){
        return{
            replyTo:null
        }
    },
    methods:{
        navigateBack(){
            this.$router.go(-1)
        },
        deleteEmail(email){
            emailService.deleteEmail(email.id);
            eventBus.$emit('user-msg', 'Email deleted');
            this.$router.go(-1)
        },
        markAsSpam(email){
            emailService.markAsSpam(email.id);
            eventBus.$emit('user-msg', 'Email moved to spam');
            this.$router.go(-1)
        },
        markAsUnread(email){
            console.log('marking as unread at details')
            emailService.markAsUnread(email.id);
            this.$router.go(-1)
        },
        replyToEmail(email){
            let emailAddress;
            if(email.direction==='inbound'){
                emailAddress=this.email.fromAddress
            }else emailAddress=this.email.toAddress;
            this.replyTo={address:emailAddress,subject:this.email.subject,body:''}
            // console.log('replyto',replyTo)

        },
        closeCompose(){
            this.replyTo=null;
        },
        addToNotes(email) {
            noteService.addNote('noteText', email.body, email.subject);
            eventBus.$emit('user-msg', 'Email saved as note');
            this.$router.push('/notes');
        }
    },
    components:{
        emailCompose,
    }
};
