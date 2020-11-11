const React = require("react");
const ReactDOM = require("react-dom");
const SSR = <div onClick={() => alert("hello")}>Hello World</div>;

if (typeof documnet === "undefined") {
    module.exports = SSR;
} else {
    ReactDOM.hydrate(SSR, document.getElementById("app"));
}