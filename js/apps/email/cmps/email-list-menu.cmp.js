

export default{
    props:['emailCount'],
    template:`
    <tr><th colspan="4" class="email-list-menu flex space-between">
        <h2>Email-List-Menu - Needs work {{emailCount}}</h2>
        <div class="email-list-menu-filters">
            <button class="Show-unread-emails" title="Show Unread Emails">
                <i class="fas fa-envelope fa-2x"></i>
            </button>
            <button class="Show-read-emails" title="Show Read Emails">
                <i class="fas fa-envelope-open-text fa-2x"></i>
            </button>
        </div>
    </th></tr>
    `
}