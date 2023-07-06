<template>
    <li>
        <label for="">
            <input type="checkbox" :checked="todo.done">
            <span>{{ todo.title }}</span>
        </label>
    </li>
</template>

<script>
export default {
    name: 'MyItem',
    props:['todo']
}
</script>

<style></style>