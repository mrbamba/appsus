export default {
    name:'email-preview',

  props: ["email"],
  template: `
        <tr class="email-table-row">
            <td>
                <input type="checkbox" >
            </td>
            <td>
                {{email.starred}}
            </td>
            <td>
                {{email.fromName}}
            </td>
            <td>
                {{email.subject}}
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
        return `${emailTime.getHours()}:${emailTime.getMinutes()}`;
      } else if (this.timeInMs - emailTime < 31536000000) {
        return `${emailTime.getDate()}/${emailTime.getMonth()+1}`;
      } else return `${emailTime.getMonth()+1}/${emailTime.getYear()}`;
    },
  },
};
