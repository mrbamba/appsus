import { eventBus } from '../../../services/event-bus.service.js';


export default {
    name: 'note-edit',
    props: ['note'],
    template: `
    
    <div v-if="isEditing" class="note-edit">
    <input v-if="note.type === 'noteImg' || note.type === 'noteTodos' || note.type === 'noteVideo'" type="text" v-model="note.info.title" />
    <input v-if="note.type === 'noteText' || note.type === 'noteTodos'" v-model="note.info.txt"/>
    <input v-if="note.type === 'noteImg' || note.type === 'noteVideo'" v-model="note.info.url"/>
    <button @click="unselect()">Done</button>
    </div>

    `,
    data() {
        return {
            type: '',
            isEditing: null
        }
    },
    created() {
        const noteId = this.$route.params.noteId;
        this.isEditing = true;

    },
 
    methods: {
        unselect() {
            this.isEditing = false;
            eventBus.$emit('unselect', '')
        },

    },
}
