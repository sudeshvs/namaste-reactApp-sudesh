import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "This is namaste react app"),
      React.createElement("h2", {}, "By Sudesh"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h3", {}, "I'm h3 tag"),
      React.createElement("h4", {}, "I'm h4 tag"),
    ]),
  ]
);

console.log(parent, "parent");
//react element is nothing but a javascript object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
