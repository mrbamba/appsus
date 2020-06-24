import emailPreview from './email-preview.cmp.js'

export default {
    props:['emails'],
    template:`
    <div class="email-list">
        <table>
            <email-preview v-for="email in emails" @click.native="selectEmail(email)" :email="email" :key="email.id"/>
        </table>
    </div>
    `,
    components:{
        emailPreview
    }
}