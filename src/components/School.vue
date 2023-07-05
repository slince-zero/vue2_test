<template>
    <div class="demo">
        <h2>学校名称: {{ name }}</h2>
        <h2>学校地址: {{ add }}</h2>
    </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name: '北京大学',
            add: '北京'
        }
    }
}
</script>

<style>
.demo{
    background-color: orange;
}
</style>