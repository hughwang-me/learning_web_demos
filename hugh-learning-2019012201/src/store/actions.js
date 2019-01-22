export const UPDATE_TODO_ITEMS = 'UPDATE_TODO_ITEMS';

import axios from 'axios';

export const getTodoListFromNetAction = () => {
    return (dispatch) => {
        const url = 'http://localhost:8080/getTodoList';
        axios.get(url).then((resp) => {
            const data = resp.data.data;

            console.log('data -> ' + data);
            dispatch({
                type : UPDATE_TODO_ITEMS,
                data : data
            })
        });
    };
};
