import { bookService } from '../services/book.service.js';


export default {
    template: `
        <section class="add-book">
        <input type="text" placeholder="Search Title" v-model="searchStr" /> 
        <div v-if="searchStr">
        <p v-for="book in booksToShow">{{book.volumeInfo.title}} <span class="add-book-btn" @click="addBook(book.id)">+</span></p>
        </div>
</section>
    `,  
    data() {
        return {
            books: [],
            searchStr: ''
        }
    },
    computed: {
        booksToShow() {
            const searchBy = this.searchStr;
            if (!searchBy) return this.books;

            var filteredBooks = this.books.filter(book => {
                return book.volumeInfo.title.toLowerCase().includes(searchBy.toLowerCase());
            });
            return filteredBooks;
        }
    },
    created() {
        bookService.getGoogleBooks()
            .then(res => {
                this.books = res.data.items;
            })
    },
    methods: {
        addBook(id) {
            bookService.getGoogleBookById(id);

        }
    }
}