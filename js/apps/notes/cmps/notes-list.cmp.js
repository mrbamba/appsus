import noteText from '../cmps/note-text.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';
import noteTodos from '../cmps/note-todos.cmp.js';
import noteAudio from '../cmps/note-audio.cmp.js';
import noteEdit from './note-edit.cmp.js';
import { noteService } from '../services/notes.service.js';
import { eventBus } from '../../../services/event-bus.service.js';
import notesEditorCmp from './notes-editor.cmp.js';


export default {
    name: 'notes-list',
    props: ['notes'],
    template: `
    <main>
        <note-edit v-if="selectedNote" :note="selectedNote"></note-edit>
        <div>
            <div>
            <p class="pinned-container">Pinned</p>
                <ul class="notes-list">
                    <li v-for="note in pinnedNotes" :note="note" :key="note.id" @click.stop="selectNote(note)">
                    <component :is="note.type" :note="note" :info="note.info" :id="note.id"></component>
                    </li>
                </ul>
            </div>
            <hr class="notes-list-hr"/>
            <div>
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
            bgc: '',
            selectedNote: null,
        }
    },
    computed: {
        pinnedNotes() {
            return noteService.getPinnedNotes();
        },
        unpinnedNotes() {
           return noteService.getUnpinnedNotes();
        }
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
            this.selectedNote = note;
            console.log(this.selectedNote)
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
