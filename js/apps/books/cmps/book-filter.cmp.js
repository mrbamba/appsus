

export default {
    template: `
        <section class="filter-section">
            <input type="text" placeholder="Search Title" v-model="filterBy.searchStr" @input="filter"/> 
            <input type="number" placeholder="Min Price" v-model.number="filterBy.fromPrice" @input="filter"/>
            <input type="number" placeholder="Max Price" v-model.number="filterBy.toPrice" @input="filter"/>
            <button @click="filter">Filter</button>
        </section>
    `,
    data() {
        return {
            filterBy: {
                searchStr: '',
                fromPrice: 0,
                toPrice: 1000000
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy);
        }
    }
}