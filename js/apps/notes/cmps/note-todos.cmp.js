import { noteService } from '../services/notes.service.js';
import { eventBus } from '../../../services/event-bus.service.js';
import emailCompose from'../../email/cmps/email-compose.cmp.js';



export default {
    name: 'note-todos',
    props: ['info', 'id', 'note'],
    template: `
        <div :class="{pinnedNote: note.isPinned}" class="note" :style="{backgroundColor: note.color}" > 
        <ul class="todo-list"> 
        <p class="note-title"> {{info.label}} </p>
        <li class="todo" v-for="todo in info.todos" :class="{done: todo.doneAt}" @click.stop="todo.doneAt = !todo.doneAt">{{todo.txt}}</li>
        </ul>
        <div class="icons">
        <i class="fas fa-palette icon-color"></i>
        <input type="color" class="color" @blur.stop="changeBgc($event, id)">
        <i :class="{pinned: note.isPinned}" class="fas fa-thumbtack" @click="pinNote(id)"></i>
        <i class="fas fa-trash-alt" @click.stop="deleteNote(id)"></i>
        <i class="far fa-share-square" @click.stop="sendNoteAsEmail(note.info.todosTxt, note.info.label)" title="Send Note as Email"></i>
        </div>
        <email-compose v-if="replyTo" :emailTo="replyTo" v-on:closeCompose="closeCompose"/>
        </div>
    `,
    data() {
        return {
            email: {
                fromAddress: 'samakofler@gmail.ch',
            },
            replyTo: null,
            isComposingEmail: false
        }
    },
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
             eventBus.$emit('user-msg', 'Note deleted');
         },
         pinNote(id) {
            noteService.pinNote(id);
            eventBus.$emit('user-msg', 'Note pinned');
        },
        sendNoteAsEmail(txt, title) {
            this.isComposingEmail = true;
            let emailAddress;
            emailAddress = this.email.fromAddress
            this.replyTo = { address: emailAddress, subject: title, body: txt }
            eventBus.$emit('user-msg', 'Note sent as Email');
        },
        closeCompose() {
            this.replyTo = null;
        }
    },
    components: {
        emailCompose
    }
}