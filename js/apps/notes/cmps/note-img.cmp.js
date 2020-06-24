export default {
    props: ['info'],
    template: `
        <div class="note-img-container">
        <img :src="info.url" class="note-img"/>
        <p>{{info.title}}</p>
        </div>
    `
}