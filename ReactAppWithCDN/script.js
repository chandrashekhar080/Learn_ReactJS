// var divBox = document.querySelector('.div-Box');

// console.log(divBox);

// var h1 = document.createElement('h1');


// h1.innerHTML = "Hello !";

// divBox.appendChild(h1);

// console.log(h1);

//console.log(React);

var h1 = React.createElement("h1", null, "Hello From React!");
//console.log(h1);


var parent = document.querySelector('.div-Box');
console.log(parent);


var root = ReactDOM.createRoot(parent);
//console.log(root);


root.render(h1);

//ReactDOM.render(h1, parent); //react 18 support before