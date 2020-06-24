export default{
    prop:['emails'],
    template:`
    <div class="email-list">
        <table>
            <email-preview v-for="email in emails" @click.native="selectEmail(email)" :email="email" :key="email.id"/>
        </table>
    </div>
    `
}