<template>
  <div id="app">
    <img id='logo' alt="Vue logo" src="./assets/logo.png">
    <h2>VUE TO DO</h2>
    <todo-input v-model="newTodo" @add="addTodo"/>
    <todo-item v-for = "todo in todos" :todo = "todo" :key="todo.id" @remove="onDeleteItem"/>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
import TodoInput from './components/TodoInput.vue'

export default {
  name: 'todo',
  components: {
    TodoItem,
    TodoInput
  },
  data(){
    return{
      newTodo: ''
    }
  },
  methods:{
    addTodo:function(){
      if (this.newTodo === '') return

      this.$store.commit('addTodos',this.newTodo)
      this.newTodo = '';
    },
    onDeleteItem(todo){
        this.$store.commit('onDeleteItems',todo)
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
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
  border-radius: 10px;
}
#logo{
  width: 50px;
  height: 50px;
}
</style>
