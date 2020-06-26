export default {
  name: "email-details",
  props: ["email"],
  template: `
    <div class="email-details">
<div class="email-details-tool-bar flex"> 
    <button class="trash-button" @click="deleteEmail">
        <i class=" far fa-trash-alt fa-2x"></i>
    </button> 
    <button class="spam-button" @click="markAsSpam">
        <i class="fas fa-ban fa-2x"></i>
    </button>
    <button class="mark-as-unread-button" @click="markAsUnread">
    <i class="fas fa-envelope fa-2x"></i>
    </button>
    <button class="add-email-to-notes" @click="addToNotes">
        <span class="fa-stack">
        <i class="far fa-sticky-note fa-stack-2x"></i>
        <i class="fas fa-plus fa-stack-1x fa-1x"></i>
</span>
    </button>
</div>
<div class="email-subject">{{email.subject}}</div>
    <div class="email-from-details">From: {{email.fromName}} - {{email.fromAddress}}</div>
    <div class="email-to-details">To: {{email.toName}} - {{email.toAddress}}</div>
    <p class="email-body">{{email.body}}</p>



<!-- <pre>{{email}}</pre> -->
    </div>
    `,
};
