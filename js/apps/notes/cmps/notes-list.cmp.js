import noteText from '../cmps/note-text.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';
import noteTodos from '../cmps/note-todos.cmp.js';
import noteAudio from '../cmps/note-audio.cmp.js';
import noteEdit from './note-edit.cmp.js';
import { noteService } from '../services/notes.service.js';
import { eventBus } from '../../../services/event-bus.service.js';
// import notesEditorCmp from './notes-editor.cmp.js';


export default {
    name: 'notes-list',
    props: ['notes', 'unpinnedNotes', 'pinnedNotes'],
    template: `
    <main>
        <note-edit v-if="selectedNote" :note="selectedNote"></note-edit>
        <div>
            <div>
            <h5 class="pinned-title">Pinned</h5>
                <ul class="notes-list">
                    <li v-for="note in pinnedNotes" :note="note" :key="note.id" @click.stop="selectNote(note)">
                    <component :is="note.type" :note="note" :info="note.info" :id="note.id"></component>
                    </li>
                </ul>
            </div>
            <!-- <hr class="notes-list-hr"/> -->
            <div>
            <h5 class="pinned-title">Others</h5>
                <ul class="notes-list">
                    <li v-for="note in unpinnedNotes" :note="note" :key="note.id" @click.stop="selectNote(note)">
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
            selectedNote: null,
        }
    },
    computed: {
    },
    created() {
        eventBus.$on('unselect', (note) => {
           this.selectedNote = null;
        });
    },
  
    methods: {
        selectNote(note) {
            this.selectedNote = note;
            this.noteId = note.id;
        },    
    },
    components: {
        noteText,
        noteImg,
        noteTodos,
        noteEdit,
        noteVideo,
        noteAudio
    }
}
