<script setup lang="ts">
import { ref } from 'vue';

interface Todo {
  id: number,
  name: string,
}

const todoList = ref<Todo[]>([
  {id: 1, name: "aaaa"},
  {id: 2, name: "bbbb"},
  {id: 3, name: "cccc"},
  {id: 4, name: "dddd"},
  {id: 5, name: "dddd"},
  {id: 6, name: "dddd"},
  {id: 7, name: "dddd"},
  {id: 8, name: "dddd"},
  {id: 9, name: "dddd"},
  {id: 10, name: "dddd"},
  {id: 11, name: "dddd"},
]);

</script>

<template>
  <ul class="todo-list__list">
    <li 
      class="todo-list__item" 
      v-for="todo in todoList" 
      v-bind:key="todo.id">
      {{ todo.name }}
    </li>
  </ul>
</template>

<style scoped>
.todo-list__list {
  padding-left: 0px;
  overflow-y: auto;
}
.todo-list__item {
  background-color: rgb(39, 43, 50);
  border: 1px solid rgba(128, 128, 128, 0.817);
  color: white;
  height: 80px;
  list-style: none;
  padding: 10px;
  margin: 5px;
  border-radius: 3px;
}
</style>