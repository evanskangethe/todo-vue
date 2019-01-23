<template>
    <div id="input_layout">
        <input
        v-bind:value="value"
        v-on:input="$emit('input',$event.target.value)"
        @keydown.enter="addItem">
        <button id='btn' @click="addItem"></button>
    </div>
</template>

<script>
export default {
    name: 'add_button',
    props:['value'],
    methods:{
        addItem: function () {
            this.$emit('add')
        }
    }
}
</script>

<style>
    #input_layout{
        display: grid;
        grid-template-columns: 90% 10%;
        margin-bottom: 10px;
        padding: 0;
    }

    input{
        padding: 10px 2px;
        margin-right: 5px;
    }
    #btn{
        width: 40px;
        height: 40px;
        background-image: url('../assets/add.svg');
        background-repeat: no-repeat;
    }
</style>

