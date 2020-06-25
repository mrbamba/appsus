import { noteService } from '../services/notes.service.js';

export default {
    template: `
    <section v-if="isEditing" class="note-edit">
    <textarea v-model="note.info.txt"></textarea>
    <button @click="endEdit()">Done</button>
    </section>

    `,
    data() {
        return {
            note: null,
            isEditing: true
        }
    },
    created() {
        const noteId = this.$route.params.noteId;
        this.note = noteService.getNoteById(noteId);
        this.isEditing = true;

    },
    methods: {
        endEdit() {
            this.$router.push('/notes');
            this.isEditing = false;
        }
    }
}