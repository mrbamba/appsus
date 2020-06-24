

export default {
    props: ['book'],
    template: `
        <li class="book-preview">
            <p class="book-title">{{ book.title }}</p>
            <p v-bind:class="priceClass">{{ price }}</p>
            <router-link :to="'/book/' + book.id">Details</router-link>
        </li>
    `,
    computed: {
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
    }
};