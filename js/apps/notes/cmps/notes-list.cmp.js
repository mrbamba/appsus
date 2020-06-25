import noteText from '../cmps/note-text.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';
import noteTodos from '../cmps/note-todos.cmp.js';
import noteEdit from '../pages/note-edit.cmp.js';
import { noteService } from '../services/notes.service.js';
import { eventBus } from '../../../services/event-bus.service.js';


export default {
    props: ['notes'],
    template: `
    <main>
    <note-edit v-if="selectedNote" :note="selectedNote"></note-edit>
    <div>
    <div>
    <ul class="notes-list">
            <li v-for="note in notes" :note="note" :key="note.id" @click="selectNote(note)">
 
            <component :is="note.type" :note="note" :info="note.info" :id="note.id"></component>

            </li>
        </ul>
        </div>
        </div>
        </main>
    `,
    data() {
        return {
            noteId: null,
            bgc: '',
            selectedNote: null,
            // pinnedNotes: [],
            // unpinnedNotes: []
        }
    },
    computed: {
        // pinnedNotes() {
        //     return noteService.getPinnedNotes();
        // },
        // unpinnedNotes() {
        //     return noteService.getUnpinnedNotes();
        // }
    },
    created() {
        eventBus.$on('unselect', (data) => {
            this.selectedNote = data
        });
        // this.pinnedNotes = noteService.getPinnedNotes();
        // this.unpinnedNotes = noteService.getUnpinnedNotes();
    },
  
    methods: {
        selectNote(note) {
            // this.$emit('selected', note);
            // this.noteId = note.id;
            // console.log(note)
            this.selectedNote = note;
            console.log(this.selectedNote)
        },
        // unselect(selNote) {
        //     this.noteId = selNote;
        //     console.log(this.selectedNote)
        // },
    
    },
    components: {
        noteText,
        noteImg,
        noteTodos,
        noteEdit,
        noteVideo
    }
}

        //  // <router-link :to="'/notes/' + note.id" :note="note">

    //     <div>
    // <ul class="pinned-notes">
    //     <li v-for="note in pinnedNotes" :note="note" :key="note.id" @click="selectNote(note)">
    //     <component :is="note.type" :info="note.info" :id="note.id"></component>

    //     </li>
    // </ul>
    // </div>