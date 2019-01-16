import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';

class CommonLayout extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name : 'wanghuan'
        }
    }

    render() {

        return <div>
            你好: {this.state.name}
            <DatePicker/>
        </div>
    }
}

export default CommonLayout;