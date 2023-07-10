<template>
    <li>
        <label for="">
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
            <span>{{ todo.title }}</span>
            <button @click="handleDelete(todo.id)">删除</button>
        </label>
    </li>
</template>

<script>
export default {
    name: 'MyItem',
    props: ['todo', 'checkTodo', 'deleteTodo'],
    methods: {
        handleCheck(id) {
            // 通知App组件，将对应的todo对象的done值取反
            this.checkTodo(id)
        },
        handleDelete(id) {
            if (confirm('确定要删除吗？')) {
                this.deleteTodo(id)
            }
        }
    }
}
</script>
<style scoped>
li:hover {
    background: rgb(182, 179, 179);
}
</style>