import { noteService } from '../services/notes.service.js';

export default {
    name: 'add-note',
    template: `
        <div class="add-note">
            <input class="input-title" v-if="type !== 'noteText'" type="text" v-model="title" placeholder="Title" />
            <input class="input-txt" type="text" v-model="input" :placeholder="placeholder"/>
            <button :class="{chosen: type==='noteText'}" @click="type = 'noteText'"><i class="fas fa-font fa-2x"></i></button>
            <button :class="{chosen: type==='noteTodos'}" @click="type = 'noteTodos'"><i class="fas fa-list fa-2x"></i></button>
            <button :class="{chosen: type==='noteImg'}" @click="type = 'noteImg'"><i class="far fa-image fa-2x"></i></button>
            <button :class="{chosen: type==='noteVideo'}" @click="type = 'noteVideo'"><i class="fas fa-video fa-2x"></i></button>
            <button :class="{chosen: type==='noteAudio'}" @click="type = 'noteAudio'"><i class="fas fa-music fa-2x"></i></button>
            <button  class="add-btn" @click="onAddNote" >
                <span class="fa-stack">
                    <i class="far fa-sticky-note fa-stack-2x"></i>
                    <i class="fas fa-plus fa-stack-1x fa-1x"></i>
                </span>
            </button>
        </div>


    `,
    data() {
        return {
            title: '',
            input: '',
            type: 'noteText',
        }
    },
    computed: {
        placeholder() {
            if (this.type === 'noteText') return 'Enter a new note';
            else if (this.type === 'noteImg') return 'Enter Image URL';
            else if (this.type === 'noteVideo') return 'Enter Video URL';
            else if (this.type === 'noteAudio') return 'Enter Audio URL';
            else if (this.type === 'noteTodos') return 'Enter items separated by commas';

        },
    },
    methods: {
        onAddNote() {
            noteService.addNote(this.type, this.input, this.title);
            this.input = '';
            this.title = '';
        }
    }

}