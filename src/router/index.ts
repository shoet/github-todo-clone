import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
import TodoView from '@/views/todo/TodoView.vue';

const routeSettings: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Todo',
    component: TodoView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSettings
})

export default router
