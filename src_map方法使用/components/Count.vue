<template>
    <div>
        <h3>计数器,当前求和为：{{ sum }}</h3>
        <h3>我在{{ school }},學習{{ subject }}</h3>
        <h3>下方的人员数量是  {{ personList.length }}</h3>
        <select v-model="num">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">是奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Count',
    data() {
        return {
            num: 1 // 用户选择的数字
        };
    },
    methods: {
        increment() {
            // this.$store.dispatch('jiafa', this.num)
            this.$store.commit('JIAFA', this.num)
        },
        decrement() {
            // this.$store.dispatch('jianfa', this.num)
            this.$store.commit('JIANFA', this.num)

        },
        incrementOdd() {
            if (this.$store.state.sum % 2) {
                this.$store.dispatch('jiafa', this.num)
            }
        },
        incrementWait() {
            setTimeout(() => {
                this.$store.dispatch('jiafa', this.num)
            }, 500)
        },
    },
    computed: {
        // sum(){
        //     return this.$store.state.sum
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // subject(){
        //     return this.$store.state.subject
        // },

        ...mapState(['sum', 'school', 'subject','personList'])
    },

}
</script>

<style scoped>
button {
    margin-left: 4px;
}
</style>