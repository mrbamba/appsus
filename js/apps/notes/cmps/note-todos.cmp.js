import { noteService } from '../services/notes.service.js';



export default {
    props: ['info'],
    template: `
        <div class="note" :style="{backgroundColor: bgc}" > 
        <i class="fas fa-thumbtack"></i>
        <ul class="todo-list"> {{info.label}}
        <li class="todo" v-for="todo in info.todos" :class="{done: !todo.doneAt}" @click="todo.doneAt = !todo.doneAt">{{todo.txt}}</li>
        </ul>
        <i class="fas fa-palette"></i>
        <select id="colorPickerBackground" @change="changeBgc($event)">

        <option value="transparent">None</option>
        <option value="yellow">Yellow</option>
        <option value="salmon">Salmon</option>
        <option value="lightblue">Light Blue</option>
        <option value="limegreen">Lime Green</option>
        <option value="cyan">Cyan</option>
        <option value="violet">Violet</option>
        <option value="red">Red</option>
        </select>
        <i class="fas fa-trash-alt"></i>
        </div>
    `,
    data() {
        return {
            bgc: ''
        }
    },  
    // data() {
    //     // return {
    //     //     isDone:
    //     // }
    // },
    computed: {
        // isDone() {
        //     if(!isDone) return false;
        //     else return true;
        // }
        // :isDone="todo.doneAt" 
        // :class="{done: isDone}"
    },
    methods: {
        toggleTodo(x) {
            var doneAt = x;
            if (!doneAt) this.isDone = true;
            else this.isDone = false;
            // noteService.toggleDoneStatus()
            console.log('toggle',this.isDone)
        },
        changeBgc(ev) {
            const color = ev.target.value;
            this.bgc = color;
 
         }
    },
    components: {
        noteService
    }
}