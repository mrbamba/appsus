import { noteService } from '../services/notes.service.js';
import { eventBus } from '../../../services/event-bus.service.js';

export default {
    name: 'note-text',
    props:['info', 'id', 'note'],
    template: `
        <div :class="{pinnedNote: note.isPinned}" class="note" :style="{backgroundColor: note.color}"> 
        <p>{{info.txt}}</p>
        <div class="icons">
        <i class="fas fa-palette icon-color"></i>
        <input type="color" class="color" @blur.stop="changeBgc($event, id)">
        <i :class="{pinned: note.isPinned}" class="fas fa-thumbtack" @click.stop="pinNote(id)"></i>
        <i class="fas fa-trash-alt" @click.stop="deleteNote(id)"></i>
        <i class="far fa-share-square" @click.stop="sendNoteAsEmail(note.info.txt)"></i>
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
        },
        pinNote(id) {
            noteService.pinNote(id);
        },
        sendNoteAsEmail(txt) {
           this.$router.push(`/email/:?subject=${''}&body=${txt}`);
           
        }
    }
}