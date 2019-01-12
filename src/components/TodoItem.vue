<template>
    <ul>
      <li>{{todo.text}}</li>
    </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['todo']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0px;
}
li {
  display: inline-block;
  background-color: white;
  padding: 10px 2px;
  width: 90%;
  margin-bottom: 5px;
}
a {
  color: #42b983;
}
</style>
