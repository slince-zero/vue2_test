<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Uesers</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyword">&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Search',
    data() {
        return {
            keyword: '',
        };
    },
    methods: {
        searchUsers() {
            // 请求前更新List数据
            this.$bus.$emit('updateListData', { isFirst: false, isLoading: true, errMsg: '', users: [] })
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`)
                .then(
                    response => {
                        console.log('请求成功了');
                        // 请求成功后更新List数据
                        this.$bus.$emit('updateListData', { isLoading: false, errMsg: '', users: response.data.items })
                    },
                    error => {
                        console.log('请求失败了', error.message);
                        // 请求失败后更新List数据
                        this.$bus.$emit('updateListData', { isLoading: false, errMsg: error.message, users: [] })

                    }
                )
        },
    },
}
</script>

<style scoped>
.jumbotron {
    height: 140px;
    background-color: rgb(202, 201, 201);
}

h3,
div {
    text-align: center;
    padding-top: 20px;
}
</style>