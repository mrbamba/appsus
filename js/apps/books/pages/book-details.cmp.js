
import longTxt from '../cmps/book-long-txt.cmp.js';
import reviewAdd from '../cmps/review-add.cmp.js';
import storedReviews from '../cmps/stored-reviews.cmp.js';
import { bookService } from '../services/book.service.js';

export default {
    template: `
        <section class="book-details" v-if="book" >
            <router-link class="previous-book" :to="'/book/' + prevBookId">Previous Book</router-link>
            <img v-bind:src="book.thumbnail"/>
            <router-link class="next-book" :to="'/book/' + nextBookId">Next Book</router-link>
            <!-- <img class="sale-img" v-if="book.listPrice.isOnSale" v-bind:src="/../img/sale.png"/> -->
            <p class="book-title">Title: <span>{{ book.title }}</span> </p>
            <p>Subtitle: <span>{{ book.subtitle }}</span> </p>
            <ul> Authors:
                <li v-for="author in book.authors">{{ author }} </li>
            </ul>
            <p v-bind:class="priceClass">{{ price }}</p>
            <p>Published: {{ book.publishedDate }} {{ bookAge }} </p>
            <long-txt v-bind:txt="book.description" ></long-txt>
            <p>Pages: {{ book.pageCount }} {{ pageCountCategory }}</p>
            <ul class="book-categories">Categories: 
                <li v-for="category in book.categories"> {{ category }}  </li>
            </ul>
            <p>Language: {{ book.language }} </p>
            <button class="add-review-btn" @click="addReview">Add review</button>
            <review-add v-if="isAddingReview" :book="book"></review-add>
            <stored-reviews :book="book"></stored-reviews>
            <button class="close-btn" @click="close">Back</button>
        </section>
    `,
    data() {
        return {
            book: null,
            isAddingReview: false,
            nextBookId: null,
            prevBookId: null
            // isOnSale: this.book.listPrice.isOnSale,
            // saleImgSrc: '../img/sale.png',
            
        }
    },
    computed: {
        bookAge() {
            if ((2020 - this.book.publishedDate) > 10) return '- Veteran Book';
            else if ((2020 - this.book.publishedDate) < 1) return '- New!';
        },
        pageCountCategory() {
            if (this.book.pageCount > 500) return '- Long Reading';
            else if (this.book.pageCount > 200) return '- Decent Reading';
            else if (this.book.pageCount < 100) return '- Light Reading';
        },
        price() {
            const price = this.book.listPrice.amount;
            const currency =  this.book.listPrice.currencyCode;
            if (currency === 'USD') return '$' + price;
            else if (currency === 'ILS') return '₪' + price;
            else if (currency === 'EUR') return price + '€';
        },
        priceClass() {
            if (this.book.listPrice.amount < 20) return 'cheap';
            else if(this.book.listPrice.amount > 150) return 'expensive';
        }
    },
    created() {
        this.loadBook();
    },
    methods: {
        close() {
            // this.$emit('close', null);
            this.$router.push('/book');
        },
        addReview() {
            this.isAddingReview = true
        },
        loadBook() {
            const { bookId } = this.$route.params;
            bookService.getBookById(bookId)
                .then(book=> {
                    this.book = book;
                    bookService.getNextBookId(this.book.id)
                        .then(bookId => {
                            this.nextBookId = bookId;
                        })
                    bookService.getPrevBookId(this.book.id)
                        .then(bookId => {
                            this.prevBookId = bookId;
                        })
                })
        }
    },
    watch: {
        '$route.params.bookId'(newBookId) {
            this.loadBook();
        }
    },
    components: {
        longTxt,
        reviewAdd,
        storedReviews
    }
}