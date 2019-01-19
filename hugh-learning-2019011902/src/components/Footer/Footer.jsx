import React , { Component } from 'react';
import ReactDOM from 'react-dom';

import LogUtil from '../../utils/LogUtil';
import StorageUtil from '../../utils/StorageUtil';
import TextUtil from '../../utils/TextUtil';

import './Footer.css';

class Footer extends Component{

    constructor(){
        super();
    }

    render(){
        return <div className='footer-content'>
            Footer
        </div>;
    }
}

export default Footer;
