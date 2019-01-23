import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos:[
            {id:1,text:'Learn Vue'},
            {id:2,text:'Make a TODO App'}
          ],
        nextTodoId:3,
    },
    mutations: {
        onDeleteItems(state,todo){
            state.todos = state.todos.filter(item => item !== todo )
        },
        addTodos(state,newTodo) {
           state.todos.push({id: state.nextTodoId,text:newTodo});
           state.nextTodoId += 1;
        }
    },
    actions: {

    }
})
