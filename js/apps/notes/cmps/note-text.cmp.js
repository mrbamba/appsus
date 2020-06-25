import { noteService } from '../services/notes.service.js';
// :style="{backgroundColor: bgc}
export default {
    props:['info', 'id', 'note'],
    template: `
        <div class="note" :style="{backgroundColor: note.color}"> 
        <p>{{info.txt}}</p>
        <div class="icons">
        <i class="fas fa-palette icon-color"></i>
        <input type="color" class="color" @blur.stop="changeBgc($event, id)">
        <i :class="{pinned: note.isPinned}" class="fas fa-thumbtack" @click.stop="pinNote(id)"></i>
        <i class="fas fa-trash-alt" @click.stop="deleteNote(id)"></i>
        </div>
         </div>
    `,
    methods: {
        changeBgc(ev, id) {
            const color = ev.target.value;
            noteService.changeColor(color, id);

 
         },
         deleteNote(id) {
            console.log(id)
            noteService.deleteNote(id);
        },
        pinNote(id) {
            noteService.pinNote(id);
        }
    }
}


// <select id="colorPickerBackground" @change="changeBgc($event)">

// <option value="transparent">None</option>
// <option value="yellow">Yellow</option>
// <option value="salmon">Salmon</option>
// <option value="lightblue">Light Blue</option>
// <option value="limegreen">Lime Green</option>
// <option value="cyan">Cyan</option>
// <option value="violet">Violet</option>
// <option value="red">Red</option>
// </select>

/* <input type="color" class="color" @blur="onSetFillColor(value)"> */