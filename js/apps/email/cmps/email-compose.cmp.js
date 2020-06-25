export default{
    name:'compose',
    template:`
    <div class="compose flex flex-column space-between">
        <h2>New Message</h2>
        <input class="compose-email-to" placeholder="Recepient Email address">
        <input class="compose-subject" placeholder="Email subject">
        <textarea class="compose-body" placeholder="Message Body" rows="30" cols="70">
    </div>
    `
}