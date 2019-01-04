var myHeading = document.querySelector('h1');
var btn = document.querySelector('button');

var name = localStorage.getItem('name');
console.log(' name local storage : ' + name);
if (name === null) {
    console.log(' name is null');
    name = 'wanghuan';
}
if(name === undefined){
    console.log(' name is undefined');
    name = '未定义';
}

myHeading.textContent = 'Hello ' + name + '!';
myHeading.onclick = function () {
    alert('clicked');
    var text = myHeading.textContent;
    console.log('text : ' + text);
    if (text.includes('world')) {
        myHeading.textContent = 'Hello Hugh';
        myHeading.fontcolor('#0ff');
    } else {
        myHeading.textContent = 'Hello world!';
        myHeading.fontcolor('#ff0');
    }
}

btn.onclick = function () {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}