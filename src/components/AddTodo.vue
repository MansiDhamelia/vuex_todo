<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit.prevent="onSubmit">
        <input
          type="text"
          v-model="$store.state.todo.title"
          placeholder="Add Todo..."
        />
        <button class="btn" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },

  computed: mapGetters(["todo", "isEdit"]),

  methods: {
    ...mapActions(["addTodo", "fetchData", "fetchTodo", "updateData"]),

    onSubmit() {
      if (this.$route.name == "todo.create") {
        this.addTodo(this.todo);
        this.$router.push("/todos").catch(() => {});
      } else {
        const updatedTodo = {
          id: this.todo.id,
          title: this.todo.title,
        };
        this.updateData(updatedTodo);
        this.$router.push("/todos").catch(() => {});
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #faf8f5;
  outline: 0;
}
.btn {
  flex: 2;
  background: #ad825a;
  border: 1px solid #faf8f5;
  cursor: pointer;
  color: #fff;
}
</style>