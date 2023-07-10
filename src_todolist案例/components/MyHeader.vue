<template>
  <div class="to-header">
    <input type="text" placeholder="请输入任务名称" v-model="title">
    <button @click="add">添加</button>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'MyHeader',
  data() {
    return {
      title: '',
    };
  },
  props: ['addTodo'],
  methods: {
    add() {
      if (!this.title.trim()) return
      const todoObj = { id: nanoid(), title: this.title, done: false }
      this.addTodo(todoObj)
      this.title = ''
    }
  }
}
</script>

<style></style>