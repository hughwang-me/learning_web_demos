import React , { Component } from 'react';

import { Input , Button , List } from "antd";

import store from '../../store/store';
import { getTodoListFromNetAction } from '../../store/actions';

import './TodoList.css';

class TodoList extends Component {

    constructor(porps){
        super(porps);
        this.state = store.getState();

        this.subStoreChange = this.subStoreChange.bind(this);

        store.subscribe(this.subStoreChange);
    }

    subStoreChange(){
        this.setState(store.getState());
    }

    componentDidMount() {
        store.dispatch(getTodoListFromNetAction());
    }

    render() {
        return (
            <div>
                <Input
                    className='todo-list-input'
                    placeholder="输入 Item"
                />
                <Button
                    className='todo-list-button'
                    type='primary'
                >
                    增加
                </Button>
                <div>
                    <List
                        className='todo-list-list'
                        bordered
                        dataSource={this.state.todoItems}
                        renderItem={
                            (item) => (
                                <List.Item>
                                    {item}
                                </List.Item>
                            )
                        }
                    />
                </div>
            </div>
        );
    }
}

export default TodoList;
