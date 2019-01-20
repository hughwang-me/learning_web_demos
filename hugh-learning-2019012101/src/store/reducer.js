import {
        TODO_ON_INPUT_CHANGE,
        TODO_ADD_TODO_ITEM,
        TODO_ON_ITEM_CLICK
        } from './actions';

const defaultState = {
    inputValue: '',
    todos: []
};

export default (state = defaultState, action) => {
    if(action.type === TODO_ON_INPUT_CHANGE){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.inputValue;
        return newState;
    }
    if(action.type === TODO_ADD_TODO_ITEM){
        let newState = JSON.parse(JSON.stringify(state));
        newState.todos.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === TODO_ON_ITEM_CLICK){
        let newState = JSON.parse(JSON.stringify(state));
        newState.todos.splice(action.index , 1);
        return newState;
    }
    return state;
}
