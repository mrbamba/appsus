export default {
    props: ['info'],
    template: `
        <div class="note-img-container note" :style="{backgroundColor: bgc}">
        <i class="fas fa-thumbtack"></i>
        <img :src="info.url" class="note-img"/>
        <p>{{info.title}}</p>
        <i class="fas fa-palette"></i>
        <select id="colorPickerBackground" @change="changeBgc($event)">
        <option value="transparent"><span></span></option>
        <option value="yellow">Yellow</option>
        <option value="salmon">Salmon</option>
        <option value="lightblue">Light Blue</option>
        <option value="limegreen">Lime Green</option>
        <option value="cyan">Cyan</option>
        <option value="violet">Violet</option>
        <option value="red"><div style="{backgroundColor: red}"></div></option>
        </select>
        <i class="fas fa-trash-alt"></i>
        </div>
    `,
    data() {
        return {
            bgc: ''
        }
    },
    methods: {
        changeBgc(ev) {
            const color = ev.target.value;
            this.bgc = color;
 
         }
    }
}