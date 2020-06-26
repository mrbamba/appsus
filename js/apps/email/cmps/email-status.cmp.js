import { emailService } from "../services/email.service.js";

export default {
  name: "email-status",
  // props:['emails'],
  template: `
    <span >
        {{unreadCount}}
</span>
    `,
  data() {
    return {
      // unreadCount:null,
      emails: null,
    };
  },
  computed: {
    unreadCount() {
      emailService.getCleanEmails()
        .then((emails) => {
            this.emails = emails;
            emailService.getUnreadCount(emails)
                .then((count) => {
                    console.log(count)
                    return count
        });
      });
    },
  },
  created() {},
};
