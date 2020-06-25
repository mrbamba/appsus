export default{
    name:'email-details',
    props:['email'],
    template:`
    <div class="email-details">
        <h1>test</h1>
<!-- <h1>Email Details</h1> -->
<div class="email-subject">{{email.subject}}</div>
    <div class="email-from-details">From: {{email.fromName}} - {{email.fromAddress}}</div>
    <div class="email-to-details">To: {{email.toName}} - {{email.toAddress}}</div>
    <p class="email-body">{{email.body}}</p>



<!-- <pre>{{email}}</pre> -->
    </div>
    `
}