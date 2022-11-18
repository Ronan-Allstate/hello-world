import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// VERSION 1
// const p1 = React.createElement("p",{id : "firstPara"} , "This is paragraph 1");
// const p2 = React.createElement("p",null, "This is paragraph 2");

// const myList = React.createElement("ul", null, [
//   React.createElement("li",null, "item 1"),
//   React.createElement("li",null, "item 2"),
//   React.createElement("li",null, "item 3")
// ]);

// const mainDiv = React.createElement("div", {name : "myDiv", id : "firstDiv"}, [p1, p2, myList]);
// root.render(mainDiv);

// VERSION 2
// const p1 = <p id="firstPara">This is paragraph 1</p>
// const p2 = <p>This is paragraph 2</p>

// const myList = <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

// const mainDiv = <div>

//   {p1}{p2}{myList}

// </div>

// VERSION 3
// const myName = "Ronan"
// const mainDiv = <div id="main" className="firstDiv">
//   <p>This is parahraph 1, Hello {myName}</p>
//   <p>This is parahraph 2</p>
//   <ul>
//     <li>First Item</li>
//     <li>Second Item</li>
//     <li>Third Item</li>
//   </ul>

// <label htmlFor="firstName">First name</label>
// <input id="firstName" type="text" required="true"></input>
// <p>THe total of 7 + 9 is {7 + 9}</p>
// </div>

// root.render(mainDiv);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
