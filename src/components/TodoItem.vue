<template>
    <ul>
      <li>{{todo.text}}</li>
      <remove-button/>
    </ul>
</template>

<script>
import RemoveButton from './BaseRemoveButton.vue'

export default {
  name: 'HelloWorld',
  props: ['todo'],
  components:{
    RemoveButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0px;
  display: grid;
  grid-template-columns:90% 10%;
}
li {
  background-color: white;
  padding: 10px 2px;
  margin-bottom: 5px;
  margin-right: 5px;
}
a {
  color: #42b983;
}
</style>
