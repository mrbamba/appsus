import { bookService } from '../services/book.service.js';
import { utilService } from '../services/util.service.js';


export default {
    props: ['book'],
    template: `
    <div class="review"><span class="review-title">Reviews:</span>
    <div v-for="review in storedReviews">
        <p class="rate">Rate: {{review.rate}} <span class="delete-review" @click="deleteReview(review.id)">x</span></p>
        <p class="review-text">Review: {{review.text}}</p>
        <p class="name">Name: {{review.name}}</p>
        <p class="read-at">Read at: {{review.readAt}}</p>
        <hr/>
        </div>
    </div>
    `,
    data() {
        return {
            storedReviews: []
        }
    },
    methods: {
        deleteReview(id) {
            const reviewIdx = this.storedReviews.findIndex(review => {review.id === id});
            this.storedReviews.splice(reviewIdx, 1);
            utilService.saveToStorage('reviews of' + this.book.id, this.storedReviews);
        }
    },
    created() {
        this.storedReviews = bookService.getReviews(this.book.id);
    }
}