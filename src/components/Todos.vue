<template>
  <div>
    <h3>Todos</h3>
    <button class="btn" @click="goTo">Add new</button>
    <button class="btn" @click="show">View</button>

    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
        <i @click="updateData(todo.id)" class="fa fa-edit"></i>
        <i @click="deleteData(todo.id)" class="fa fa-trash"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchData", "deleteData", "fetchTodo"]),


show(){
    this.fetchData();

},
    goTo() {
      this.$router.push("/todos/addtodo").catch(() => {});
    },
    updateData(id) {
      this.fetchTodo(id);
      this.$router.push(`/todos/${id}/edit`).catch(() => {});
    },
  },

  computed: mapGetters(["allTodos", "todo"]),

  created() {
    // this.fetchData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid;
  background: #faf8f5;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.btn {
  width: 80px;
  height: 30px;
  background-color: #ad825a;
  border: none;
  border-radius: 4px;
  color: wheat;
  font-size: 15px;
  margin: 10px;
}
i[class="fa fa-trash"] {
  position: absolute;
  bottom: 5px;
  right: 10px;
  color: black;
  cursor: pointer;
}
i[class="fa fa-edit"] {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
}

h3 {
  margin: 40px 10px;
}
</style>
