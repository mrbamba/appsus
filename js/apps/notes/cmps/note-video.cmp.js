import { noteService } from '../services/notes.service.js';


export default {
    props: ['info', 'id', 'note'],
    template: `
        <div class="note-img-container note" :style="{backgroundColor: bgc}">
        <video
        :key="info.url"
        width="350"
        controls autoplay
      >
        <source
          :src="info.url"
          type="video/mp4"
        >
      </video>
       
       
        <p>{{info.title}}</p>
        <div class="icons">
        <i class="fas fa-palette icon-color"></i>
        <input type="color" class="color" @blur="changeBgc($event)">
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
            this.bgc = color;

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

/* <video width="320" height="240" controls class="note-video">
<source :src="info.url" type="video/mp4">
</video> */

// <iframe width="420" height="315"
//         :src="{{info.url}}">
//         </iframe>

{/* <video width="320" height="240" controls class="note-video">
<source :src="info.url" type="video/mp4"/>
</video> */}

{/* <video width="450" controls :src="info.url"></video> */}