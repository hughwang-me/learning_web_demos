export const TODO_ON_INPUT_CHANGE =  'todo-on-input-change';
export const TODO_ADD_TODO_ITEM =  'todo-on-add-todo-item';
export const TODO_ON_ITEM_CLICK =  'todo-on-item-click';

export const getOnIuputChangeAction = inputValue => {
    return {
        type: TODO_ON_INPUT_CHANGE,
        inputValue: inputValue
    };
};

export const getAddTodoItemAction = () => {
    return {
        type: TODO_ADD_TODO_ITEM
    };
};

export const getTodoItemClickAction = index => {
    return {
        type: TODO_ON_ITEM_CLICK,
        index: index
    };
};
