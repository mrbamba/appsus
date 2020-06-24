import { bookService } from '../services/book.service.js';
import {eventBus} from '../../../services/event-bus.service.js';

export default {
    props: ['book'],
    template: `
    <section class="review-add">
        <form v-on:submit="saveReview(book.id)">
            <label>Full Name: </label>
            <input class="input-name" type="text" placeholder="Books Reader" v-model="name"/> 
            <label>Rate: </label>
            <input type="number" min="1" max="5" v-model="rate"/>
            <label for="date">Read at: </label>
            <input type="date" id="date" class="read-at" v-model="readAt">
            <label>Review: </label>
            <textarea class="review-textarea" v-model="review"></textarea>
            <input class="submit-btn" :disabled="!isValid" type="submit">
        </form>
       
    </section>
    `,
    data() {
        return {
            name: 'Books Reader',
            rate: null,
            readAt: null,
            review: '',
            isAddingReview: true,
        }
    },
    computed: {
        isValid() {
            return (this.review && this.rate) ? true : false;
        }
    },
    methods: {
        saveReview(bookId) {
            console.log('save')
            this.isAddingReview = false;
            bookService.saveBookReview(bookId, this.name, this.readAt, this.rate, this.review);
            eventBus.$emit('user-msg', 'review successfully added');
        }
    }
}