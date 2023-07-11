<template>
    <div>
        <h3>计数器,当前求和为：{{ $store.state.sum }}</h3>
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
export default {
    name: 'Count',
    data() {
        return {
            num: 1 // 用户选择的数字
        };
    },
    methods: {
        increment() {
            this.$store.dispatch('jiafa', this.num)
        },
        decrement() {
            this.$store.dispatch('jianfa', this.num)
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
    }
}
</script>

<style scoped>
button {
    margin-left: 4px;
}
</style>