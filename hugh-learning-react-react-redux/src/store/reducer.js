const defaultState = {
  todos: ['a','b'],
  inputValue: ''
};

import {
        INPUT_CHANGE_ACTION,
        ADD_CLICKED_ACTION,
        UPDATE_TODO_LIST_ACTION
        } from "./actions";

export default function reducer(state = defaultState , action){
    if(action.type === INPUT_CHANGE_ACTION){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_CLICKED_ACTION){
        let newState = JSON.parse(JSON.stringify(state));
        newState.todos.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === UPDATE_TODO_LIST_ACTION){
        let newState = JSON.parse(JSON.stringify(state));
        newState.todos = action.value;
        return newState;
    }
    return state;
}
