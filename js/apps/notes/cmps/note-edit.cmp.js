import { eventBus } from '../../../services/event-bus.service.js';
import { noteService } from '../services/notes.service.js';


export default {
    name: 'note-edit',
    props: ['note'],
    template: `
    <div v-if="isEditing" :note="note" class="note-edit">
    <input v-if="note.type === 'noteImg' || note.type === 'noteVideo'" type="text" v-model="note.info.title" />
    <input v-if="note.type === 'noteTodos'" type="text" v-model="note.info.label" />
    <input v-if="note.type === 'noteText'" v-model="note.info.txt"/>
    <input v-if="note.type === 'noteTodos'" :todos="getTheTodos(note.id)" v-model="todos"/>
    <input v-if="note.type === 'noteImg' || note.type === 'noteVideo'" v-model="note.info.url"/>
    <button @click="unselect()">Done</button>
    </div>
    `,
    data() {
        return {
            type: '',
            isEditing: null,
            todos: null,
        }
    },
    computed: {
        
    },
    created() {
        const noteId = this.$route.params.noteId;
        this.isEditing = true;
       
    },
 
    methods: {
        unselect() {
            this.isEditing = false;
            eventBus.$emit('unselect', '')
        },
        getTheTodos(id) {
            this.todos = noteService.getTodos(id);
        }
    },
}
{/* <div v-if="note.type === 'noteTodos'"><input /><span v-for="todo in note.info.todos" v-model="todo.txt">{{todo.txt}}</span></div> */}
{/* <input v-if="note.type === 'noteTodos'" :todos="getTheTodos(note.id)" v-model="todos"/> */}