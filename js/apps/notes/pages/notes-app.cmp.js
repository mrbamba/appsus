import { noteService } from '../services/notes.service.js';

import notesList from '../cmps/notes-list.cmp.js';


export default {
    template: `

    <main>
    <h1>Notes</h1>
            <notes-list :notes="notes"></notes-list>
        </main>
    `,
    data() {
        return {
            notes: []
        }
    },
    created() {
        this.notes = noteService.getNotes()
    },
    components: {
        noteService,
        notesList
    }
}