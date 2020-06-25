import { noteService } from '../services/notes.service.js';

export default {
    template: `
        <div class="add-note">
            <input class="input-title" v-if="type !== noteText" type="text" v-model="title" placeholder="Title" />
            <input class="input-txt"type="text" v-model="input" :placeholder="placeholder"/>
            <input v-if="type === noteImg" type="file" ref="imageUrl"/>
            <button :class="{chosen: type==='noteText'}" @click="type = noteText"><i class="fas fa-font"></i></button>
            <button :class="{chosen: type==='noteTodos'}" @click="type = noteTodos"><i class="fas fa-list"></i></button>
            <button :class="{chosen: type==='noteImg'}" @click="type = noteImg"><i class="far fa-image"></i></button>
            <button class="add-btn" @click="onAddNote" >Add</button>
        </div>


    `,
    data() {
        return {
            title: '',
            input: '',
            type: 'noteText',
            noteText: 'noteText',
            noteImg: 'noteImg',
            noteTodos: 'noteTodos',
        }
    },
    computed: {
        placeholder() {
            if (this.type === 'noteText') return 'Enter a new note';
            else if (this.type === 'noteImg') return 'Enter Image URL';
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