import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueRouter from "vue-router";

//load vuex
Vue.use(Vuex);
Vue.use(VueRouter);

//create store
export default new Vuex.Store({
  state: {
    todos: [],
    todo: {
      title:"",
    },
  },
  getters: {
    allTodos: (state) => state.todos,
    todo: (state) => state.todo,
  },

  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) =>
      (state.todos = state.todos.filter((todo) => todo.id != id)),
    setTodo: (state, todo) => (state.todo = todo),

    // state.todos.filter((todo) => todo.id == todo.id)),

    editTodo: (state, updatedTodo) => {
     const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);


     state.todos[index] = updatedTodo
   
    //  state.todos.push(index)
    //  state.todos = [...updatedTodo]
     
    },
  },
  actions: {
    async fetchData({ commit }) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      commit("setTodos", response.data);
    },
    async fetchTodo({ commit }, id) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      this.todo = response.data;
    
      commit("setTodo", response.data);
    },

    async addTodo({ commit }, title) {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        title 
 );

      commit("newTodo", response.data);
  
    },

    async deleteData({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

      commit("removeTodo", id);
    },

    async updateData({ commit }, updatedTodo) {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
        updatedTodo
      );
      console.log("data:", response.data);

      commit("editTodo", response.data);
    },
  },
  modules: {},
});
