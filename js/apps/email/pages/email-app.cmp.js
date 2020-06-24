import emailNavBar from '../cmps/email-nav-bar.cmp.js';
import emailList from '../cmps/email-list.cmp.js';


export default {
    template: `
        <div class="mail-main">
        <h1>Email</h1>
        <email-nav-bar></email-nav-bar>
        <email-list></email-list>

        </div>

    `,
    components:{
        emailNavBar,
        emailList
    }
}