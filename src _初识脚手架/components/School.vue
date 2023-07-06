<template>
    <div class="demo">
        <h2>学校名称: {{ myNname }}</h2>
        <h2>学校地址: {{ add }}</h2>
        <button @click="update">更新学校名称</button>
    </div>
    
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            add: '北京',
            myNname: this.name
        }
    },
    props: ['name'],
    methods: {
        update(){
            this.myNname = '清华大学'
        }
    }
}
</script>

<style>
.demo {
    background-color: orange;
}
</style>