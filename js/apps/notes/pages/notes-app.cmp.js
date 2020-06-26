import { noteService } from '../services/notes.service.js';
import { eventBus } from '../../../services/event-bus.service.js';
import notesList from '../cmps/notes-list.cmp.js';
import addNote from '../cmps/add-note.cmp.js';
import noteEdit from '../cmps/note-edit.cmp.js';

export default {
    name: 'notes-app',
    template: `
    <main class="main-notes-container">
    <h1>Notes</h1>
            <add-note></add-note>
            <p v-if="!notes.length"> You don't have any notes </p>
            <notes-list :notes="notesToShow" ></notes-list>
        </main>
    `,
    data() {
        return {
            notes: [],
            searchStr: ''
        }
    },
    computed: {
        notesToShow() {
            if (!this.searchStr) return this.notes;
            var filteredNotes = this.notes.filter(note => {
                if (note.type === 'noteText') return note.info.txt.toLowerCase().includes(this.searchStr.toLowerCase());
                if (note.type === 'noteImg' || note.type === 'noteVideo') return note.info.title.toLowerCase().includes(this.searchStr.toLowerCase());
                if (note.type === 'noteTodos') return note.info.label.toLowerCase().includes(this.searchStr.toLowerCase())
                if (note.type === 'noteTodos') return note.info.todos.map(todo => todo.txt.toLowerCase().includes(this.searchStr.toLowerCase()))                
            });
            return filteredNotes;
        }
    },
    methods: {

        
    },
    created() {
        this.notes = noteService.getNotes();
        eventBus.$on('filter',(data) => {
            this.searchStr = data
        });
    },
    components: {
        notesList,
        addNote,
        noteEdit
    }
}