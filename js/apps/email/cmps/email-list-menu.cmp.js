

export default{
    props:['emailCount'],
    template:`
    <tr><th colspan="4" class="email-list-menu flex space-between">
        <div class="email-list-menu-sort">
            <button class="email-list-menu-sort-date" title="Sort by latest on Top" @click="sorted('reverseChronological')">
                <i class="far fa-clock fa-2x"></i>
            </button>
            <button class="email-list-menu-sort-subject" title="Sort by subject" @click="sorted('alphabetical')">
            <i class="fas fa-sort-alpha-down fa-2x"></i>
            </button>
        </div>
        <div class="email-list-menu-email-count">{{emailCount}} unread</div>
        <div class="email-list-menu-filters">
            <button class="Show-unread-emails" title="Show Unread Emails"  @click="filtered('unread')">
                <i class="fas fa-envelope fa-2x"></i>
            </button>
            <button class="Show-read-emails" title="Show Read Emails" @click="filtered('read')">
                <i class="fas fa-envelope-open-text fa-2x"></i>
            </button>
        </div>
    </th></tr>
    `,
    created(){
        console.log('Email count on list menu',this.emailCount)
    },
    methods:{
        filtered(filterBy){
            this.$emit('filtered',filterBy)
        },
        sorted(sortBy){
            this.$emit('sorted',sortBy)
        }
    }
}