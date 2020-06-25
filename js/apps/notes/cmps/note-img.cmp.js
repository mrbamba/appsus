import { noteService } from '../services/notes.service.js';


export default {
    props: ['info', 'id'],
    template: `
        <div class="note-img-container note" :style="{backgroundColor: bgc}">
        <img :src="info.url" class="note-img"/>
        <p>{{info.title}}</p>
        <div class="icons">
        <i class="fas fa-palette icon-color"></i>
        <input type="color" class="color" @blur="changeBgc($event)">
        <i class="fas fa-thumbtack"></i>
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
            this.bgc = color;
 
         },
         deleteNote(id) {
            noteService.deleteNote(id);
        }
    }
}