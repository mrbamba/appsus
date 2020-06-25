export default{
    name:'email-nav-bar',

    template: `
    <div class="mail-nav-bar">
    <button class="compose-button"><i class="fa fa-plus"></i>  Compose</button>
    <ul class="mail-nav-list">
        <li><router-link to="inbox">Inbox</router-link></li>
        <li><router-link to="starred">Starred</router-link></li>
        <li><router-link to="sent">Sent</router-link></li>
        <li><router-link to="spam">Spam</router-link></li>
        <li><router-link to="trash">Trash</router-link></li>
    </ul>
    </div>
    `
}