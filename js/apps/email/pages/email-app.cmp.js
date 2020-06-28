import emailNavBar from "../cmps/email-nav-bar.cmp.js";
import emailList from "../cmps/email-list.cmp.js";
import emailDetalis from "../cmps/email-details.cmp.js";
import emailCompose from "../cmps/email-compose.cmp.js";

import { emailService } from "../services/email-service.js";
import { eventBus } from "../../../services/event-bus.service.js";

export default {
  name: "email-app",
  //   prop: "selectedEmail",
  template: `
        <div class="mail-main ">
        <email-nav-bar v-on:compose="compose" v-bind:emails="emails" v-bind:count="counter"></email-nav-bar>
        <email-list  v-if="!selectedEmail && emails" v-bind:emails="emailsToShow" 
          :emailCount="emailCount"  v-on:emailSelected="emailSelected($event)" 
          v-on:filtered="setFilter" v-on:sorted="setSort"></email-list>
        <email-detalis :email="selectedEmail" v-if="selectedEmail"/>
        <email-compose v-if="composing" v-on:closeCompose="closeCompose" />
        </div>
    `,
  data() {
    return {
      emails: null,
      filterBy: {
        searchStr: "",
        readStatus: "both",
      },
      sortBy: "reverseChronological",
      selectedEmail: null,
      composing: false,
      emailTo: null,
      counter: 0
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
          email.fromAddress
            .toLowerCase()
            .includes(filterBy.searchStr.toLowerCase()) ||
          email.fromName
            .toLowerCase()
            .includes(filterBy.searchStr.toLowerCase()) ||
          email.toAddress
            .toLowerCase()
            .includes(filterBy.searchStr.toLowerCase()) ||
          email.toName.toLowerCase().includes(filterBy.searchStr.toLowerCase())
        );
      });
      filteredEmails = filteredEmails.filter((email) => {
        if (filterBy.readStatus === "both") {
          return filteredEmails;
        } else if (filterBy.readStatus === "read") {
          return email.isRead === true;
        } else return email.isRead === false;
      });

      if (this.sortBy === "reverseChronological") {
        filteredEmails.sort((emailA, emailB) => {
          return emailB.timestamp - emailA.timestamp;
        });
      } else {
        filteredEmails.sort((emailA, emailB) => {
          var subjectA = emailA.subject.toLowerCase();
          var subjectB = emailB.subject.toLowerCase();
          if (subjectA < subjectB) {
            return -1;
          }
          if (subjectA > subjectB) {
            return 1;
          }
          return 0;
        });
      }

      return filteredEmails;
    },
    emailCount() {
      const unreadCounter = this.emails.reduce((acc, email) => {
        if (!email.isRead) {
          return acc + 1;
        } else return acc;
      }, 0);
      return unreadCounter;
    },

  },
  created() {
    
    emailService.syncEmailsWithStorage()
    this.selectedEmail = null;

    const emailId = this.$route.params.emailID;
    if (emailId) {
      emailService.getById(emailID).then((email) => {
        this.selectedEmail = email;
      });
    } else {
      emailService.getCleanEmails().then((emails) => {
        this.emails = emails;
        this.countUnread()
      });
    }

    eventBus.$on("filter", (data) => {
      this.filterBy.searchStr = data;
    });
    eventBus.$on("sendNoteAsEmail", () => {
      this.composing = true;
    });
  },
  methods: {
    // setFilter(filterBy) {
    //   this.filterBy = filterBy;
    // },
    emailSelected(emailId) {
      emailService.getById(emailId).then((email) => {
        this.selectedEmail = email;
        emailService.setAsRead(emailId)
      })
      .then(() => {
            this.countUnread()
            
            
          });
          this.$router.push(`/email/${emailId}`);

    },
    countUnread() {
      const inboxEmails = this.emails.filter(email => {
        return !email.spam && !email.deleted
      })
      this.counter = inboxEmails.reduce((acc, email) => {
        if (!email.isRead) acc++
        return acc
      }, 0)
    },
    compose() {
      this.composing = !this.composing;
    },
    closeCompose() {
      this.composing = false;
    },
    setFilter(filterBy) {
      this.filterBy.readStatus = filterBy;
    },
    setSort(sortBy) {
      this.sortBy = sortBy;
    },

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
      const params = this.$route.params;

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
