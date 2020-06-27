import { eventBus } from '../../../services/event-bus.service.js';
import { noteService } from '../services/notes.service.js';
import addNoteCmp from './add-note.cmp.js';


export default {
    name: 'note-edit',
    props: ['note'],
    template: `
    <div v-if="isEditing" :note="note" class="note-edit">
    <input class="input-title" v-if="note.type !== 'noteTodos'" type="text" v-model="note.info.title" />
    <input class="input-title" v-if="note.type === 'noteTodos'" type="text" v-model="note.info.label" />
    <input class="input-txt" v-if="note.type === 'noteText'" v-model="note.info.txt"/>
    <input class="input-txt" v-if="note.type === 'noteTodos'" v-model="note.info.todosTxt" @change="convertTodo(note.id, note.info.todosTxt, note.info.label)"/>
    <input class="input-txt" v-if="note.type === 'noteImg' || note.type === 'noteVideo' || note.type === 'noteAudio'" v-model="note.info.url"/>
    <button class="done-btn" @click="unselect()"><i class="fas fa-check fa-2x"></i></button>
    </div>
    `,
    data() {
        return {
            type: '',
            isEditing: null,
        }
    },
    created() {
        const noteId = this.$route.params.noteId;
        this.isEditing = true;
    },
    methods: {
        unselect() {
            this.isEditing = false;
            eventBus.$emit('unselect', '')
            eventBus.$emit('user-msg', 'Note successfully edited');
        },
        convertTodo(id, txt, title) {
            noteService.addNote('noteTodos', txt, title);
            noteService.deleteNote(id);
        }
    },
}
{/* <div v-if="note.type === 'noteTodos'"><input /><span v-for="todo in note.info.todos" v-model="todo.txt">{{todo.txt}}</span></div> */}
{/* <input v-if="note.type === 'noteTodos'" :todos="getTheTodos(note.id)" v-model="todos"/> */}

// :todos="getTheTodos(note.id)" 