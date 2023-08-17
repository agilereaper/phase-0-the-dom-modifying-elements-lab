const element = document.getElementById("main");

element.remove();

const newHeader = document.createElement("h1");

const node = document.createTextNode("dillon is the champion");

newHeader.setAttribute('id', 'victory');

newHeader.appendChild(node);