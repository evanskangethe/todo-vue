<template>
    <div id="input_layout">
        <input
        v-bind:value="value"
        v-on:input="$emit('input',$event.target.value)">
        <base-add-button/>
    </div>
</template>

<script>
import BaseAddButton from './BaseAddButton.vue'
export default {
    name: 'add_button',
    components:{
        BaseAddButton
    },
    props:['value']
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
</style>

