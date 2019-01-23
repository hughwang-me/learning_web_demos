export const INPUT_CHANGE_ACTION = "todo-list-input-change";
export const ADD_CLICKED_ACTION = "todo-list-add-clicked";
export const REQUEST_TODO_LIST_ACTION = "request-todo-list";
export const UPDATE_TODO_LIST_ACTION = "update-todo-list";

export function getInputChangeAction(inputValue) {
    return {
        type: INPUT_CHANGE_ACTION,
        value: inputValue
    }
}

export function getAddClickedAction() {
    return {
        type: ADD_CLICKED_ACTION
    }
}

export function getRequestTodoListAction() {
    return {
        type: REQUEST_TODO_LIST_ACTION
    }
}

export function getUpdateTodoListAction(list) {
    return {
        type: UPDATE_TODO_LIST_ACTION,
        value: list
    }
}
