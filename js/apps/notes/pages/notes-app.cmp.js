import { noteService } from '../services/notes.service.js';

import notesList from '../cmps/notes-list.cmp.js';
import addNote from '../cmps/add-note.cmp.js';
import noteEdit from '../pages/note-edit.cmp.js';

export default {
    template: `

    <main>
    <h1>Notes</h1>
            <add-note></add-note>
            <p v-if="!notes.length"> You don't have any notes </p>
            <notes-list :notes="notes"></notes-list>
        </main>
    `,
    data() {
        return {
            notes: [],
            // 
            // pinnedNotes: [],
            // unpinnedNotes: []
        }
    },
    methods: {
        // selectNote(note) {
        //     this.selectedNote = note;
        //     console.log(note)
        // },
    },
    created() {
        this.notes = noteService.getNotes()
        // this.pinnedNotes = noteService.getPinnedNotes();
        // this.unpinnedNotes = noteService.getUnpinnedNotes();
    },
    components: {
        noteService,
        notesList,
        addNote,
        noteEdit
    }
}