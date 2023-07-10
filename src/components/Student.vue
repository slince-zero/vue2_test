<template>
    <div>
        <h2>学生姓名: {{ name }}</h2>
        <h2>年龄: {{ age }}</h2>
        <button @click="sendStudentName">把学生姓名传递给School组件</button>
        <button @click="sendStudentName2">把学生姓名传递给School组件</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name: 'Student',
    data() {
        return {
            name: '小明',
            age: '22'
        }
    },
    methods:{
        sendStudentName(){
            this.$bus.$emit('hello',66)
        },
        sendStudentName2(){
            pubsub.publish('hello2',66)
        }
    }
}
</script>

<style></style>