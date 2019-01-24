import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {Input, Button, List} from 'antd'

import './TodoList.css';

// import store from '../../store';
import {
    getInputChangeAction,
    getAddClickedAction,
    getRequestTodoListAction
} from "../../store/actions";

import { connect } from 'react-redux';

class TodoList extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = store.getState();
    //
    //     this.handleInputChange = this.handleInputChange.bind(this);
    //     this.handleAddClicked = this.handleAddClicked.bind(this);
    //
    //     this.handleStoreChange = this.handleStoreChange.bind(this);
    //     store.subscribe(this.handleStoreChange);
    // }

    // componentDidMount() {
    //     store.dispatch(getRequestTodoListAction());
    // }
    //
    // handleStoreChange() {
    //     this.setState(store.getState());
    // }
    //
    // handleInputChange(e) {
    //     store.dispatch(getInputChangeAction(e.target.value));
    // }
    //
    // handleAddClicked() {
    //     store.dispatch(getAddClickedAction());
    // }

    render() {
        return (<div>
            <Input
                className='todo-list-input'
                placeholder='输入 Item'
                value={this.props.inputValue}
                onChange={this.props.handleInputChange}
            />
            <Button
                className='todo-list-button'
                type='primary'
                onClick={this.props.handleAddClicked}
            >
                添加
            </Button>
            <div>
                <List
                    className='todo-list-list'
                    bordered
                    dataSource={this.props.items}
                    renderItem={(item) => (<List.Item>{item}</List.Item>)}
                />
            </div>
        </div>)
    }

}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        items: state.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e){
            dispatch(getInputChangeAction(e.target.value));
        },
        handleAddClicked(){
            dispatch(getAddClickedAction());
        }
    }
};

export default connect(mapStateToProps , mapDispatchToProps)(TodoList);
