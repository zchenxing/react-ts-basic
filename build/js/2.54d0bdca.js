(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{77:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n(80);var o=n(0),r=n.n(o),c=n(4),u=(n(78),function(t){return r.a.createElement("li",{className:"todo-item"},r.a.createElement("div",null,r.a.createElement("div",null,t.todo.name),r.a.createElement("div",null,t.todo.desc)),r.a.createElement(c.Space,null,r.a.createElement(c.Button,{type:"primary",onClick:function(){return t.switchStatus(t.todo.id)}},t.todo.done?"Undone":"Done"),r.a.createElement(c.Button,{danger:!0,onClick:function(){return t.onRemove(t.todo.id)}},"Delete")))})},78:function(t,e,n){var o=n(31),r=n(79);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var c={insert:"head",singleton:!1};o(r,c);t.exports=r.locals||{}},79:function(t,e,n){},85:function(t,e,n){var o=n(32);o(o.S,"Object",{setPrototypeOf:n(86).set})},86:function(t,e,n){var o=n(10),r=n(15),c=function(t,e){if(r(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=n(53)(Function.call,n(56).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return c(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:c}},90:function(t,e,n){"use strict";n.r(e);n(54),n(55),n(85);var o=n(0),r=n(33),c=n(29),u=n(77),i=n(4);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l,p=(l=function(t,e){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}l(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),f=function(t,e,n,o){var r,c=arguments.length,u=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(u=(c<3?r(u):c>3?r(e,n,u):r(e,n))||u);return c>3&&u&&Object.defineProperty(e,n,u),u},d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.addNewTodo=function(){e.props[c.a].addNewTodo()},e}return p(e,t),e.prototype.componentDidMount=function(){},e.prototype.render=function(){var t=this,e=this.props[c.a],n=e.todos,r=e.doneCount,a=e.undoneCount;return o.createElement("div",null,o.createElement("header",null,o.createElement("h4",null,"Class"),o.createElement(i.Button,{onClick:this.addNewTodo},"Add New"),o.createElement("div",null,"Done: ",r),o.createElement("div",null,"Undone: ",a)),o.createElement("ul",null,n.map((function(e){return o.createElement(u.a,{key:e.id,todo:e,onRemove:t.props[c.a].removeById,switchStatus:t.props[c.a].toggleStatusById})}))))},e=f([Object(r.inject)(c.a),r.observer],e)}(o.Component);e.default=d}}]);