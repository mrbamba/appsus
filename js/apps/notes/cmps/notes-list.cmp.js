import noteText from '../cmps/note-text.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
// import noteVideo from '../cmps/note-video.cmp.js';
import noteTodos from './note-todos.cmp.js';


export default {
    props: ['notes'],
    template: `
        <div>
        <router-view v-if="noteId"/>
        <ul class="notes-list">
            <li class="note" v-for="note in notes" @click="selectNote(note)" :note="note" :key="note.id">
            <component :is="note.type" :info="note.info"></component>
            <router-link :to="'/notes/' + note.id" :note="note">Edit</router-link>
            </li>
        </ul>
        </div>
    `,
    data() {
        return {
            noteId: null
        }
    },
    methods: {
        selectNote() {
            console.log('select note')
        },
        selectNote(note) {
            this.$emit('selected', note);
            this.noteId = note.id;
            console.log(note)
        }
    },
    components: {
        noteText,
        noteImg,
        noteTodos
    }
}