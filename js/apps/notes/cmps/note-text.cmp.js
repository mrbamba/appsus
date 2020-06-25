export default {
    props:['info'],
    template: `
        <div class="note" :style="{backgroundColor: bgc}" > 
        <i class="fas fa-thumbtack"></i>
        <p>{{info.txt}}</p>
        <i class="fas fa-palette icon-color"></i>
        <input type="color" class="color" @blur="onSetFillColor(value)">
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


// <select id="colorPickerBackground" @change="changeBgc($event)">

// <option value="transparent">None</option>
// <option value="yellow">Yellow</option>
// <option value="salmon">Salmon</option>
// <option value="lightblue">Light Blue</option>
// <option value="limegreen">Lime Green</option>
// <option value="cyan">Cyan</option>
// <option value="violet">Violet</option>
// <option value="red">Red</option>
// </select>

/* <input type="color" class="color" @blur="onSetFillColor(value)"> */