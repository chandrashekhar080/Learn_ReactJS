/*
function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    
    container.appendChild(domElement);
    }
    
    //customRender(reactElement,mainContainer);
    */

const mainContainer = document.querySelector('#root');

const reactElement = {
    type : 'a',
    props : {
        href : "https:/google.com",
        target : "_Blank"
    },
    Children:"Click to visit Google"
}
const domElement = document.createElement(reactElement.type);

domElement.innerHTML = reactElement.Children;
for (const key in reactElement.props) {
    if (key === 'children') continue ; 
    domElement.setAttribute(key, reactElement.props[key]);
}
mainContainer.appendChild(domElement); 
