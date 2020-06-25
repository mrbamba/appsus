import { noteService } from '../services/notes.service.js';



export default {
    props: ['info', 'id'],
    template: `
        <div class="note" :style="{backgroundColor: bgc}" > 
        <ul class="todo-list"> {{info.label}}
        <li class="todo" v-for="todo in info.todos" :class="{done: !todo.doneAt}" @click="todo.doneAt = !todo.doneAt">{{todo.txt}}</li>
        </ul>
        <div class="icons">
        <i class="fas fa-palette icon-color"></i>
        <input type="color" class="color" @blur="changeBgc($event)">
        <i class="fas fa-thumbtack"></i>
        <i class="fas fa-trash-alt" @click.stop="deleteNote(id)"></i>
        </div>
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
            // console.log('toggle',this.isDone)
        },
        changeBgc(ev) {
            const color = ev.target.value;
            this.bgc = color;
 
         },
         deleteNote(id) {
             noteService.deleteNote(id);
         }
    },
    components: {
        noteService
    }
}