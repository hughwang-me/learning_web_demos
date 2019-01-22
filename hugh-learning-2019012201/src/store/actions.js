export const UPDATE_TODO_ITEMS = 'UPDATE_TODO_ITEMS';

export const GET_TODO_ITEMS_FROM_NET = 'GET_TODO_ITEMS_FROM_NET';


export const getTodoItemsFromNetAction = () => ({
    type: GET_TODO_ITEMS_FROM_NET
});

export const getUpdateTodoItemsAction = (data) => ({
    type: UPDATE_TODO_ITEMS,
    data: data
});

// export const getTodoListFromNetAction = () => {
//     return (dispatch) => {
//         const url = 'http://localhost:8080/getTodoList';
//         axios.get(url).then((resp) => {
//             const data = resp.data.data;
//
//             console.log('data -> ' + data);
//             dispatch({
//                 type : UPDATE_TODO_ITEMS,
//                 data : data
//             })
//         });
//     };
// };
