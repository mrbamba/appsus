
import bookList from '../cmps/book-list.cmp.js';
import bookFilter from '../cmps/book-filter.cmp.js';

import { bookService } from '../services/book.service.js';

export default {
    template: `
    <main class="book-app">
        <book-filter @filter="setFilter"></book-filter>
        <book-list :books="booksToShow" ></book-list>
    </main>
    `,
    data() {
        return {
            books: [],
            filterBy: {
                searchStr: '',
                fromPrice: 0,
                toPrice: Infinity
            },
            selectedBook: null
        }
    },
    computed: {
        booksToShow() {
            const filterBy = this.filterBy;
            if (!filterBy) return this.books;

            var filteredBooks = this.books.filter(book => {
                return book.title.toLowerCase().includes(filterBy.searchStr.toLowerCase());
            });
            filteredBooks = filteredBooks.filter(book => {
                if(!filterBy.toPrice) return true;
                return filterBy.fromPrice <= book.listPrice.amount && filterBy.toPrice >= book.listPrice.amount;
            });
            return filteredBooks;
        }
    },
    methods: {
        selectBook(book) {
            this.selectedBook = book;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }
    },
    created() {
        bookService.getBooks()
            .then(books => {
                this.books = books;
            })
    },
    components: {
        bookList,
        bookFilter
    }
}