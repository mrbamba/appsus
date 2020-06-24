


export default {
    props: ['notes'],
    template: `
        <section>
        <ul class="notes-list">
            <li v-for="note in notes" @click="selectNote(note)" :note="note" :key="note.id"> {{note.info}}

            </li>
        </ul>
        </section>
    `,

}