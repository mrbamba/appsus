import { noteService } from '../services/notes.service.js';
import { eventBus } from '../../../services/event-bus.service.js';
import emailCompose from '../../email/cmps/email-compose.cmp.js';
import longTxt from '../../../cmps/long-txt.cmp.js';
import colorPalette from '../cmps/color-palette.cmp.js';


export default {
    name: 'note-video',
    props: ['info', 'id', 'note'],
    template: `
        <div :class="{pinnedNote: note.isPinned}" class="note-img-container note" :style="{backgroundColor: note.color}">
        <video width="320" height="240" controls class="note-video">
        <source :src="info.url" type="video/mp4">
        </video>       
        <long-txt :txt='info.title'/>
        <color-palette v-if="isColorsOpen" :id="id"></color-palette>
        <div class="icons">
        <i class="fas fa-palette icon-color" @click.stop="isColorsOpen = !isColorsOpen"></i>
        <i :class="{pinned: note.isPinned}" class="fas fa-thumbtack" @click.stop="pinNote(id)"></i>
        <i class="fas fa-trash-alt" @click.stop="deleteNote(id)"></i>
        <i class="far fa-share-square" @click.stop="sendNoteAsEmail(note.info.url, note.info.title)" title="Send Note as Email"></i>
        </div>
        <email-compose v-if="replyTo" :emailTo="replyTo" v-on:closeCompose="closeCompose"/>
        </div>
    `,
    data() {
        return {
            email: {
                fromAddress: 'samakofler@gmail.ch',
            },
            replyTo: null,
            isComposingEmail: false,
            isColorsOpen: false
        }
    },
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
        sendNoteAsEmail(txt, title) {
            this.isComposingEmail = true;
            let emailAddress;
            emailAddress = this.email.fromAddress
            this.replyTo = { address: emailAddress, subject: title, body: txt }
        },
        closeCompose() {
            this.replyTo = null;
        }
    },
    components: {
        emailCompose,
        colorPalette,
        longTxt
    }

}
