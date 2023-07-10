<template>
    <!-- :todo="item"是为了向MyItem组件传递数据 -->
    <ul class="to-main">
        <MyItem 
        v-for="item in todosa" 
        :key="item.id" 
        :todo="item" 
        :checkTodo="checkTodo" 
        :deleteTodo="deleteTodo" />
    </ul>
</template>

<script>
import MyItem from './MyItem';
export default {
    name: 'MyList',
    components: { MyItem },
    props: ['todosa', 'checkTodo', 'deleteTodo']
}
</script>

<style scoped></style>