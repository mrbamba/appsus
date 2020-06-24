
import bookPreview from './book-preview.cmp.js';

export default {
    props: ['books'],
    template: `
        <ul class="book-list">
            <book-preview v-for="book in books" @click.native="selectBook(book)" :book="book" :key="book.id"></book-preview>
        </ul>
    `,
    methods: {
        selectBook(book) {
            this.$emit('selected', book);
        }
    },
    components: {
        bookPreview
    }
}