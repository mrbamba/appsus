import { noteService } from '../services/notes.service.js';



export default {
    props: ['info'],
    template: `
        <section>
        <ul class="todo-list"> {{info.label}}
        <li class="todo" v-for="todo in info.todos" :class="{done: !todo.doneAt}" @click="todo.doneAt = !todo.doneAt">{{todo.txt}}</li>
        </ul>
        </section>
    `,

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
        }
    },
    components: {
        noteService
    }
}