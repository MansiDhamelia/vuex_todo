<template>
  <div id="app">
   
   <!-- <Todos /> -->
    <router-view/>
  </div>
</template>



<script>

import Todos from "./components/Todos.vue"

export default {
components: {
  // Todos
}


}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
