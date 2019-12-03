<template>
    <div>
       <div v-for="todo in todos" v-bind:key="todo.id">
           <TodoItem v-bind:todo="todo" v-on:del-todo="deleteTodo(todo.id)" />
       </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
    name: "Todos",
    components: {
        TodoItem
    },
    props: [
        "todos"
    ],
    methods: {
        deleteTodo(id) {
            this.$emit('del-todo', id)
        }
    }
}
</script>

<style scoped>

</style>
