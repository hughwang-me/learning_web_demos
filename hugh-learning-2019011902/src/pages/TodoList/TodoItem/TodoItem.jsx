import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(){
        const { todoItemClicked , item } = this.props;
        todoItemClicked(item);
    }

    render() {
        return (
            <div
                onClick={this.delete}
            >
            {
                this.props.text
            }
            </div>
        );
    }

}

export default TodoItem;
