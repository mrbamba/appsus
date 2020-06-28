import { emailService } from "../services/email-service.js";
import { eventBus } from "../../../services/event-bus.service.js";

export default {
  name: "compose",
  props: ["emailTo"],
  template: `
    <div class="compose flex flex-column space-between">
        <div class="compose-header flex space-between">
            <h2>New Message</h2>
            <button class="composer-close-button" @click="closeComposer" title="Scrap message">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <input class="compose-email-to" placeholder="Recepient Email address" v-model="outboundEmail.toAddress">
        <input class="compose-subject" placeholder="Email subject" v-model="outboundEmail.subject">
        <textarea ref="body" class="compose-body" placeholder="Message Body" rows="30" cols="70" v-model="outboundEmail.body"></textarea>
        <div class="compose-bottom-controls flex space-between">
            <button class="send-button" @click="sendEmail" title="Send Email">Send Email</button>
            <button class="trash-button" @click="closeComposer" title="Scrap message"><i class=" far fa-trash-alt"></i></button>
        </div>
    </div>
    `,
  data() {
    return {
      outboundEmail: {},
    };
  },
  created() {
    emailService.getEmptyEmail().then((email) => {
      if (this.emailTo) {
        (email.toAddress = this.emailTo.address),
          (email.subject = "Re: " + this.emailTo.subject);
        email.body = this.emailTo.body;
      }
      this.outboundEmail = email;
    });
    eventBus.$on("sendNoteAsEmail", (data) => {
      this.outboundEmail.body = data;
      emailService.sendEmail(this.outboundEmail);
    });
  },
  methods: {
    closeComposer() {
      this.$emit("closeCompose");
    },
    sendEmail() {
      emailService.sendEmail(this.outboundEmail);
      this.$emit("closeCompose");
      eventBus.$emit("user-msg", "Email Sent!");
    },
    focusInput() {
        this.$refs.body.focus();
      },
  },
    mounted() {
      this.focusInput();
    },
  
};
