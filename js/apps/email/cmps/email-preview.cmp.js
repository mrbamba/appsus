import longTxt from '../../../cmps/long-txt.cmp.js'

export default {
    name:'email-preview',

  props: ["email"],
  template: `
        <tr class="email-table-row" :class="emailTableRowClass">
            <td>
                <input type="checkbox" @click.stop >
            </td>
            <td :class="emailStarred" @click.stop="starStatus" title="Star/Unstar Email">
            
            </td>
            <td>
                <b>{{email.fromName}}</b>
            </td>
            <td>
                <b>{{email.subject}}</b>
            </td>
            <td class="email-body">
                <!-- <div class="email-preview-td-body"> -->
                    <long-txt :txt='email.body'/>
                <!-- </div> -->
            </td>
            <td>
                {{timeFormatted}}
            </td>
        </tr>
        `,
  data() {
    return {
      timeInMs: new Date(),
    };
  },
  computed: {
    timeFormatted() {
      let emailTime = this.email.timestamp;
      if (this.timeInMs - emailTime < 86400000) {
          if(emailTime.getMinutes()<=9){
              return `${emailTime.getHours()}:0${emailTime.getMinutes()}`;
          }else{ return `${emailTime.getHours()}:${emailTime.getMinutes()}`;}
      } else if (this.timeInMs - emailTime < 31536000000) {
        return `${emailTime.getDate()}/${emailTime.getMonth()+1}`;
      } else return `${emailTime.getMonth()+1}/${emailTime.getYear()}`;
    },
    emailStarred(){
        if (this.email.isStarred) {
        return `fas fa-star`
    } else return `far fa-star`
    },
    emailTableRowClass(){
        if(this.email.isRead===true)return 'email-row-is-read'
    }
  },
  methods:{
      starStatus(){
          this.email.isStarred=!this.email.isStarred;
      }
  },
  components:{
    longTxt,
  }
};
