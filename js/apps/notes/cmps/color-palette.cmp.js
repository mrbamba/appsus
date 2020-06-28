import { noteService } from '../services/notes.service.js';


export default {
    name: 'color-palette',
    props: ['id'],
    template: `
    <div class="color-palette"> 
        <span v-for="color in colors" :style="{backgroundColor: color}" @click.stop="changeBgc(color, id)"></span>
        </div>
    `,
    data() {
        return {
            colors: ['white', 'rgb(250, 252, 167)', 'rgb(170, 209, 245)', 'rgb(97, 214, 208)', 'rgb(248, 205, 124)', 'rgb(226, 183, 252)']
        }
    },
    methods: {
        changeBgc(color, id) {
            noteService.changeColor(color, id);
        },
    }
}