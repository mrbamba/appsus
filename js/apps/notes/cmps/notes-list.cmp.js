import noteText from '../cmps/note-text.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
// import noteVideo from '../cmps/note-video.cmp.js';
import noteTodos from './note-todos.cmp.js';


export default {
    props: ['notes'],
    template: `
        <div>
        <ul class="notes-list">
            <li class="note" v-for="note in notes" @click="selectNote(note)" :note="note" :key="note.id">
            <component :is="note.type" :info="note.info"></component>
            </li>
        </ul>
        </div>
    `,
    components: {
        noteText,
        noteImg,
        noteTodos
    }
}