import { noteService } from '../services/notes.service.js';



export default {
    name: 'note-todos',
    props: ['info', 'id', 'note'],
    template: `
        <div class="note" :style="{backgroundColor: note.color}" > 
        <ul class="todo-list"> 
        <p class="note-title"> {{info.label}} </p>
        <li class="todo" v-for="todo in info.todos" :class="{done: todo.doneAt}" @click.stop="todo.doneAt = !todo.doneAt">{{todo.txt}}</li>
        </ul>
        <div class="icons">
        <i class="fas fa-palette icon-color"></i>
        <input type="color" class="color" @blur.stop="changeBgc($event, id)">
        <i :class="{pinned: note.isPinned}" class="fas fa-thumbtack" @click="pinNote(id)"></i>
        <i class="fas fa-trash-alt" @click.stop="deleteNote(id)"></i>
        </div>
        </div>
    `,
    methods: {
        toggleTodo(x) {
            var doneAt = x;
            if (!doneAt) this.isDone = true;
            else this.isDone = false;
        },
        changeBgc(ev) {
            const color = ev.target.value;
            noteService.changeColor(color, id);
         },
         deleteNote(id) {
             noteService.deleteNote(id);
         },
         pinNote(id) {
            noteService.pinNote(id);
        }
    },
}