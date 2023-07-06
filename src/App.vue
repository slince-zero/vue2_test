<template>
    <div>
        <School name="北京大学"></School>
        <Student ref="sch"></Student>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDom">点我看看</button>
        <hr>
    </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
    name: 'App',
    components: {
        School,
        Student
    },
    data() {
        return {
            msg: '你好呀',
        };
    },
    methods:{
        showDom(){
            console.log(this.$refs);
        }
    }
}
</script>

<style></style>