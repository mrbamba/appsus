import { noteService } from '../services/notes.service.js';

export default {
    template: `
        <div class="add-note">
            <input v-if="type !== noteText" type="text" v-model="title" placeholder="Title" />
            <input type="text" v-model="input" placeholder="Enter your notes"/>
            <input v-if="type === noteImg" type="file" ref="imageUrl"/>
            <button @click="type = noteText" >Text</button>
            <button @click="type = noteImg" >Image</button>
            <button @click="type = noteTodos">ToDo</button>
            <button @click="onAddNote" >Add</button>
            <pre>{{input}}, {{type}}</pre>
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
            if (this.type === noteText) return 'Type your note';
            else if (this.type === noteImg) return 'Enter Image URL';
            else if (this.type === noteTodos) return 'Enter list items separated by comma';
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