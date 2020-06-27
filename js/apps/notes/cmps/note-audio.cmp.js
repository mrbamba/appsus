import { noteService } from '../services/notes.service.js';


export default {
    name: 'note-audio',
    props: ['info', 'id', 'note'],
    template: `
        <div class="note-img-container note" :style="{backgroundColor: note.color}">
        <audio controls class="note-audio">
        <source :src="info.url" type="audio/mp3">
        </audio>       
        <p>{{info.title}}</p>
        <div class="icons">
        <i class="fas fa-palette icon-color"></i>
        <input type="color" class="color" @blur.stop="changeBgc($event, id)">
        <i :class="{pinned: note.isPinned}" class="fas fa-thumbtack" @click.stop="pinNote(id)"></i>
        <i class="fas fa-trash-alt" @click.stop="deleteNote(id)"></i>
        </div>
        </div>
    `,
    data() {
        return {
            bgc: ''
        }
    },
    methods: {
        changeBgc(ev) {
            const color = ev.target.value;
            noteService.changeColor(color, id);

        },
        deleteNote(id) {
            console.log('delete')
            noteService.deleteNote(id);
        },
        pinNote(id) {
            noteService.pinNote(id);
        }
    }
}