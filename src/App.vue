<template>
    <div id="root">
        <div class="todo-container">
            <div class="to-warp">
                <MyHeader :addTodo="addTodo" />
                <!-- :todosa="todos"中的:todosa是变量，是通过props配置向子组件传递数据 -->
                <MyList :todosa="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
                <MyFooter />
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import MyList from './components/MyList';
import MyItem from './components/MyItem';

export default {
    name: 'App',
    components: {
        MyFooter,
        MyHeader,
        MyItem,
        MyList
    },
    data() {
        return {
            todos: [
                { id: '001', title: '吃饭', done: true },
                { id: '002', title: '睡觉', done: false },
                { id: '003', title: '打豆豆', done: true }
            ]
        }
    },
    methods: {
        // 添加一个todo
        addTodo(todoObj) {
            this.todos.unshift(todoObj)
        },
        // 勾选或者取消一个todo
        checkTodo(id) {
            this.todos.forEach((todo) => {
                if (todo.id == id) todo.done = !todo.done
            })
        },
        // 删除一个todo
        deleteTodo(id) {
            this.todos = this.todos.filter((todo) => {
                return todo.id !== id
            })
        }
    }

}
</script>

<style></style>