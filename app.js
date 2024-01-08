import React from "react";
import  ReactDOM  from "react-dom/client";

// const newheading = React.createElement("h1",{},"hello everyone fro react");
// console.log(newheading);

//const header1=React.createElement("tag name ",{props},"content ");
const header1=React.createElement("h1",{key:"heading 1"},"namaste React 1st heading");
const header2=React.createElement("h1",{key:"heading 2"},"2nd second heading");

const container = React.createElement(
    "div",{},
    [header1,header2]
);



const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(container);