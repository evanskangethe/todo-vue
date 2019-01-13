<template>
    <ul>
      <li>{{todo.text}}</li>
      <button id='btn'></button>
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
  margin:0;
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
#btn{
  width: 40px;
  height: 40px;
  background-image: url('../assets/remove.svg');
  background-repeat: no-repeat;
}
</style>
