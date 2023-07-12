<template>
    <div>
        <h2>我是Home</h2>
        <router-link to="/Home/News">Home里面的内容</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import News from './News.vue';
export default {
    name: 'Home',
    components:{
        News
    }
}
</script>

