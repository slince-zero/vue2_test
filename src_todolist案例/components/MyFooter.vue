<template>
  <div class="todo-footer">
    <label for="">
      <!-- <input type="checkbox" :checked="isAll"> -->
      <input type="checkbox" v-model="isAll">
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清楚已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['todos', 'checkAllTodo', 'removeAllTodo'],
  computed: {
    total() {
      return this.todos.length
    },
    doneTotal() {
      let i = 0
      this.todos.forEach((todo) => {
        if (todo.done) i++
      })
      return i
    },
    isAll: {
      get() {
        return this.total === this.doneTotal && this.total > 0
      },
      set(value) {
        this.checkAllTodo(value)
      }
    }
  },
  methods: {
    clearAll() {
      this.removeAllTodo()
    }
  }
}
</script>

<style></style>