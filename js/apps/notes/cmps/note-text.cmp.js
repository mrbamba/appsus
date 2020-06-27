import { noteService } from '../services/notes.service.js';
import { eventBus } from '../../../services/event-bus.service.js';
// import notesEditor from './notes-editor.cmp.js';

export default {
    name: 'note-text',
    props: ['info', 'id', 'note'],
    template: `
        <div :class="{pinnedNote: note.isPinned}" class="note" :style="{backgroundColor: note.color}"> 
        <p class="note-title">{{info.title}}</p>
        <p>{{info.txt}}</p>
        <div class="icons">
        <i class="fas fa-palette icon-color"></i>
        <input type="color" class="color" @blur.stop="changeBgc($event, id)">
        <i :class="{pinned: note.isPinned}" class="fas fa-thumbtack" @click.stop="pinNote(id)"></i>
        <i class="fas fa-trash-alt" @click.stop="deleteNote(id)"></i>
        <i class="far fa-share-square" @click.stop="sendNoteAsEmail(note.info.txt)" title="Send Note as Email"></i>
        </div>
        </div>
    `,
    methods: {
        changeBgc(ev, id) {
            const color = ev.target.value;
            noteService.changeColor(color, id);
        },
        deleteNote(id) {
            noteService.deleteNote(id);
            eventBus.$emit('user-msg', 'Note deleted');
        },
        pinNote(id) {
            noteService.pinNote(id);
            eventBus.$emit('user-msg', 'Note pinned');
        },
        sendNoteAsEmail(txt) {
            eventBus.$emit('sendNoteAsEmail', txt);
            eventBus.$emit('user-msg', 'Action failed :(');
            this.$router.push(`/email/:?subject=${''}&body=${txt}`);
        }
    },
    // components: {
    //     notesEditor
    // }
}