// import React from "react";
// import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "childOne" }, [
    React.createElement("h1", {}, "I am an h1 Tag"),
    React.createElement("h2", {}, "I am an h2 Tag"),
  ]),
  React.createElement("div", { id: "childTwo" }, [
    React.createElement("h1", {}, "I am an h1 Tag"),
    React.createElement("h2", {}, "I am an h2 Tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
