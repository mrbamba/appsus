import emailNavBar from "../cmps/email-nav-bar.cmp.js";
import emailList from "../cmps/email-list.cmp.js";
import emailDetalis from "../cmps/email-details.cmp.js";
import emailCompose from "../cmps/email-compose.cmp.js";

import { emailService } from "../services/email.service.js";

export default {
  name: "email-app",
  prop: "selectedEmail",
  template: `
        <div class="mail-main ">
        <email-nav-bar v-on:compose="compose"></email-nav-bar>
        <email-list v-if="!selectedEmail && emails" :emails="emailsToShow" v-on:emailSelected="emailSelected($event)"></email-list>
        <!-- <email-details v-else :email="selectedEmail"></email-details> -->
        <email-detalis :email="selectedEmail" v-if="selectedEmail"/>
        <email-compose v-if="composing" :closeCompose="closeCompose"/>

        </div>

    `,
  data() {
    return {
      emails: null,
      filterBy: {
        searchStr: "",
      },
      selectedEmail: null,
      composing:null,
    };
  },
  computed: {
    emailsToShow() {
      const filterBy = this.filterBy;
      if (!filterBy) return this.emails;

      let filteredEmails = this.emails.filter((email) => {
        return (
          email.subject
            .toLowerCase()
            .includes(filterBy.searchStr.toLowerCase()) ||
          email.body.toLowerCase().includes(filterBy.searchStr.toLowerCase()) ||
          email.from.toLowerCase().includes(filterBy.searchStr.toLowerCase()) ||
          email.to.toLowerCase().includes(filterBy.searchStr.toLowerCase())
        );
      });
      console.log(filteredEmails);
      return filteredEmails;
    },
  },
  created() {
    console.log("created", Date.now);
    this.selectedEmail = null;

    const emailId = this.$route.params.emailID;
    console.log(emailId);
    if (emailId) {
      emailService.getById(emailID).then((email) => {
        this.selectedEmail = email;
      });
    } else {
      emailService.getCleanEmails().then((emails) => {
        this.emails = emails;
      });
    }
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    emailSelected(emailId) {
      emailService.getById(emailId).then((email) => {
        this.selectedEmail = email;
        emailService.setAsRead(emailId);
      });
      console.log(this.selectedEmail);
      this.$router.push(`/email/${emailId}`);
    },
    compose(){
        this.composing=true;
    },
    closeCompose(){
        this.composing=false;
    }
  },
  components: {
    emailNavBar,
    emailList,
    emailDetalis,
    emailCompose,
  },
  watch: {
    $route(to, from) {
      this.selectedEmail = null;

      const emailId = this.$route.params.emailId;
    //   const params = this.$route.params;
    //   console.log('params',params)

      if (emailId) {
        if (emailId === "inbox") {
          emailService.getCleanEmails().then((emails) => {
            this.emails = emails;
          });
        } else if (emailId === "starred") {
          emailService.getStarredEmails().then((emails) => {
            this.emails = emails;
          });
        } else if (emailId === "sent") {
          emailService.getSentEmails().then((emails) => {
            this.emails = emails;
          });
        } else if (emailId === "spam") {
          emailService.getSpamEmails().then((emails) => {
            this.emails = emails;
          });
        } else if (emailId === "trash") {
          emailService.getTrashEmails().then((emails) => {
            this.emails = emails;
          });
        } else if (emailId === "all") {
          emailService.getAllEmails().then((emails) => {
            this.emails = emails;
          });
        } else {
          emailService.getById(emailId).then((email) => {
            this.selectedEmail = email;
          });
        }
      } else {
        emailService.getAllEmails().then((emails) => {
          this.emails = emails;
        });
      }
    },
  },
};
