export default {
    props: ['info'],
    template: `
        <section>
        <ul> {{info.label}}
        <li v-for="todo in info.todos">{{todo.txt}}</li>
        </ul>
        </section>
    ` 
}