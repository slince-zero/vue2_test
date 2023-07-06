<template>
    <!-- :todo="item"是为了向MyItem组件传递数据 -->
    <ul class="to-main">
        <MyItem v-for="item in todosa" :key="item.id" :todo="item"/>
    </ul>
</template>

<script>
import MyItem from './MyItem';
export default {
    name: 'MyList',
    components: { MyItem },
    props:['todosa']
}
</script>

<style></style>