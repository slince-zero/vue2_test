<template>
    <div class="demo">
        <h2>学校名称: {{ name }}</h2>
        <h2>学校地址: {{ add }}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'School',
    data() {
        return {
            add: '北京',
            name: '北京大学'
        }
    },
    mounted() {
        this.$bus.$on('hello', (data) => {
            console.log('我是school组件，我收到了数据', data);
        })

        // 消息订阅发布技术

        this.pubId = pubsub.subscribe('hello2', (a, b) => {
            console.log('有人发布了hello2消息，hello2的回调函数被调用了', a, b);
        })
    },
    beforeDestroy() {
        this.$bus.$off('hello')
        pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style>
.demo {
    background-color: orange;
}
</style>