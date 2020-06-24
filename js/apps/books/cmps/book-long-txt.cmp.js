export default {
    props:['txt'],
    template: `
        <section class="long-txt">
        Description: 
        <p>{{ shortText }}
            <span v-if="showMore"> {{ longText }}</span>
            <button class="more-btn" v-if="!showMore && isLong" @click="showMore = true">...more</button>
            <button class="less-btn" v-if="showMore" @click="showMore = false">less</button>
        </p>
        </section>
    `,
    data() {
        return {
            showMore: false,
            text: this.txt
        }
    },
    computed: {
        shortText() {
            return this.text.slice(0, 100);
        },
        longText() {
            return this.text.slice(100)
        },
        isLong() {
            return this.text.length > 100;
        }
    }
}