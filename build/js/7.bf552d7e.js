(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{185:function(t,e,n){"use strict";n.r(e);n(56),n(57),n(52),n(53),n(30),n(40),n(54),n(55);var r=n(0),o=r.createContext({count:0,setCount:function(t){console.log(t)}}),u=n(6),a=r.useContext,l=function(){var t=a(o),e=t.count,n=t.setCount;return r.createElement("div",null,r.createElement("h4",null,"Page Child"),r.createElement(u.Button,{onClick:function(){return n(e+1)}},"Add"))};function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,u=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,u=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw u}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var f=r.useState;e.default=function(){var t=c(f(0),2),e=t[0],n=t[1];return r.createElement(r.Fragment,null,r.createElement(o.Provider,{value:{count:e,setCount:n}},r.createElement("h4",null,"根组件 cont: ",e),r.createElement(l,null)))}}}]);