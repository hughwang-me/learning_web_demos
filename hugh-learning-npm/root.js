require('./index');  
var a = require('./a');

import b from './b';

var oApp = document.getElementById('app');
oApp.innerHTML = "新增内容" + a  + " + " + b.a + " - " + b.b;