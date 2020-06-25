import { noteService } from '../services/notes.service.js';

import { eventBus } from '../../../services/event-bus.service.js';
import noteText from '../cmps/note-text.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
// import noteVideo from '../cmps/note-video.cmp.js';
import noteTodos from '../cmps/note-todos.cmp.js';
// import addNote from '../cmps/add-note.cmp.js';

export default {
    props: ['note'],
    template: `
    
    <div v-if="isEditing" class="note-edit">
    <input v-if="note.type === 'noteImg' || note.type === 'noteTodos'" type="text" v-model="note.info.title" />
    <input v-if="note.type === 'noteText' || note.type === 'noteTodos'" type="text" v-model="note.info.txt"/>
    <input v-if="note.type === 'noteImg'" type="file" ref="imageUrl"/>
    <button @click="unselect()">Done</button>
    </div>

    `,
    data() {
        return {
            // input: note.info.txt,
            // note: null,
            isEditing: null
        }
    },
    created() {
        const noteId = this.$route.params.noteId;
        // this.note = noteService.getNoteById(noteId);
        this.isEditing = true;

    },
    methods: {
        unselect() {
            // this.$emit('unselect', '')
            // this.$router.push('/notes');
            this.isEditing = false;
            eventBus.$emit('unselect', '')
        },

    },
    components: {
        noteText,
        noteImg,
        noteTodos,
        // addNote
    }
}

{/* <button @click="type = noteText" >Text</button>
<button @click="type = noteImg" >Image</button>
<button @click="type = noteTodos">ToDo</button> */}