import Vue from "vue";
import VueRouter from "vue-router";
import AddTodo from "../components/AddTodo.vue";
import Todos from "../components/Todos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/todos",
    name: "Todos",
    component: Todos,
  },
  {
    path: "/",
    name: "Todos",
    component: Todos,
  },
  {
    path: "/todos/addtodo",
    name: "todo.create",
    component: AddTodo,
  },
  {
    path: "/todos/:id/edit",
    name: "todo.edit",
    component: AddTodo,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
