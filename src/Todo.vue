<template>
  <div id="app">
    <img id='logo' alt="Vue logo" src="./assets/logo.png">
    <h2>VUE TO DO</h2>
    <todo-item/>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'app',
  components: {
    TodoItem
  }
}
</script>

<style>
body{
  background-color:rgb(25, 219, 171); 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 5% auto;
  max-width: 500px;
  padding: 20px;
  background-color:rgb(224, 227, 231);
  border-radius: 5px;
}
#logo{
  width: 50px;
  height: 50px;
}
</style>
