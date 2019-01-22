const defaultState = {
  todoItems: [
      "A",
      "B"
  ],
  inputValue : ''
};
import { UPDATE_TODO_ITEMS} from './actions';


export default function reducer(state = defaultState , action){
    if(action.type === UPDATE_TODO_ITEMS){
        let newState = state;
        newState.todoItems = action.data;
        return newState;
    }
    return state;
}
