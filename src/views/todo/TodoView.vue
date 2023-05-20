<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

import TodoList from './TodoList.vue';

const header = ref(null);
const headerVhPercentage = ref(0.0);
const diffHeaderHeight = ref('height: 100vh');
const marginHeaderVh = 3;

watch(headerVhPercentage, (newValue) => {
  const ret = Math.round(newValue*100);
  console.log(ret);
  diffHeaderHeight.value = `height: calc(100vh - ${ret}vh - ${marginHeaderVh}vh)`
})

const headerVhLoad = (): void => {
  if (header.value) {
    // calc header ViewPort HeightPercentage
    const element = header.value as HTMLElement;
    const headerHeight = element.offsetHeight;
    const viewportHeight = window.innerHeight;
    const percentage = headerHeight / viewportHeight;
    headerVhPercentage.value = percentage;
  }
}

onMounted(() => {
  headerVhLoad();
  window.addEventListener('resize', headerVhLoad);
})

</script>

<template>
  <div class="multi-view__header" ref="header">
    <div class="multi-view__title">
      GitHub TODO Clone
    </div>
  </div>
  <div class="multi-view__todo" v-bind:style="diffHeaderHeight">
    <div class="multi-view__todo-list">
      <div class="multi-view__todo-list__title">
        Todo
      </div>
      <TodoList/>
    </div>
    <div class="multi-view__todo-list">
      <div class="multi-view__todo-list__title">
        InProgress
      </div>
      <TodoList/>
    </div>
    <div class="multi-view__todo-list">
      <div class="multi-view__todo-list__title">
        Done
      </div>
      <TodoList/>
    </div>
  </div>
</template>

<style scoped>
.multi-view__header {
  height: 4rem;
}
.multi-view__title {
  color: white;
  font-size: 2rem;
}
.multi-view__content {
  flex-grow: 1;
  display: flex;
}
.multi-view__todo {
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  border: 1px solid rgba(128, 128, 128, 0.817);
  background-color: rgb(39, 43, 50);
}
.multi-view__todo-list {
  flex-grow: 1;
  margin: 5px;
  border: 1px solid rgba(128, 128, 128, 0.817);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: black;
  border-radius: 3px;
}
.multi-view__todo-list__title {
  font-weight: bold;
  padding: 8px 0px 0px 10px;
  color: white;
}
</style>