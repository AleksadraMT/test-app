(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(53)},37:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(24),r=a.n(i),s=a(12),l=a(10),c=a(3),u=a(4),d=a(7),m=a(5),h=a(6),b=a(57),f=(a(37),a(2)),p=a.n(f),g=(a(40),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.header;return o.a.createElement("div",{className:p()("sayer-header")},e.back?o.a.createElement("div",null,o.a.createElement("a",{className:p()("header-back"),href:"/"})):null,e.title?o.a.createElement("h1",null,e.title):"",o.a.createElement("h4",{className:p()({"title-page":e.page})},e.subtitle))}}]),t}(n.Component)),v=Object(l.b)(function(e){return{header:e.header}})(g),y=a(56),w=a(55),k=a(14),O=a(54),j="ADD_TOPIC",C="REMOVE_TOPIC",E="ADD_COMMENT",x="CHANGE_HEADER",N=function(e){return{type:j,text:e}},I=function(e){return{type:C,id:e}},T=function(e,t){return{type:E,id:e,text:t}},S=function(e){return{type:x,header:e}};a(42);var H=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).removePost=e.removePost.bind(Object(k.a)(Object(k.a)(e))),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"removePost",value:function(e){var t=this.props.removeTopic;window.confirm("Do you want to DELETE this topic?")&&t(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.index,n=t.el,i=n.id,r=n.text,s=n.comments;return o.a.createElement("li",{key:a,className:p()("topics-item")},o.a.createElement(O.a,{to:{pathname:"/topic-".concat(i),state:{title:r}}},o.a.createElement("span",{className:p()("topics-title")},r)),o.a.createElement("span",{className:p()("topics-counter")},s.length),o.a.createElement("span",{className:p()("topics-remove"),onClick:function(){return e.removePost(i)}},"Delete"))}}]),t}(n.Component),L=Object(b.a)(Object(l.b)(null,function(e){return{removeTopic:function(t){return e(I(t))}}})(H));a(45);var D=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.changeHeader({back:!1,title:"Sayer",subtitle:"World\u2019s most used time waster",page:!1})}},{key:"render",value:function(){var e=this.props,t=e.list,a=e.history;return o.a.createElement("div",null,o.a.createElement("div",{className:p()("topics-container")},null!==t&&t.length?o.a.createElement("ul",{className:p()("topics")},t.map(function(e,t){return o.a.createElement(L,{key:t,el:e})})):o.a.createElement("div",{className:p()("empty-block")},"No items")),o.a.createElement("div",{className:p()("create-item")},o.a.createElement("button",{className:p()("create-item-button"),onClick:function(){return a.push("/create")}},o.a.createElement("span",{className:p()("create-item-text")},"+"))))}}]),t}(n.Component),A=Object(b.a)(Object(l.b)(function(e){return{list:e.sayer}},function(e){return{changeHeader:function(t){return e(S(t))}}})(D));a(47);var M=function(e){function t(e,a){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e,a))).changeHead=function(){n.props.changeHeader(n.state.defaultHeader)},n.handleSubmit=function(e){var t=n.props,a=t.addTopic,o=t.history,i=n.state.text;e.preventDefault(),a(i),o.push("/"),n.setState({text:""})},n.handleChange=function(e){n.setState({text:e.target.value})},n.state={text:"",defaultHeader:{back:!0,title:"",subtitle:"Create new item",page:!0}},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.changeHead()}},{key:"render",value:function(){var e=this;return o.a.createElement("form",{className:p()("new-item-form"),onSubmit:function(t){return e.handleSubmit(t)}},o.a.createElement("input",{className:p()("new-item-input"),type:"text",id:"title",placeholder:"Type new item name",onChange:function(t){return e.handleChange(t)},required:!0}),o.a.createElement("button",{className:p()("new-item-button")}))}}]),t}(n.Component),W=Object(b.a)(Object(l.b)(null,function(e){return{changeHeader:function(t){return e(S(t))},addTopic:function(t){return e(N(t))}}})(M)),P=a(15),J=a(17),R=(a(49),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.el;return o.a.createElement("li",{className:p()("comments-item")},o.a.createElement("div",{className:p()("comments-avatar",e.avatarClass)}),o.a.createElement("div",{className:p()("comments-text")},e.text))}}]),t}(n.Component)),B=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.newCommentText,a=e.onSubmit,n=e.onChange;return o.a.createElement("form",{className:p()("new-comment-form"),onSubmit:a},o.a.createElement("input",{className:p()("new-comment-input"),type:"text",id:"title",placeholder:"Type new comment",onChange:n,value:t,required:!0}),o.a.createElement("button",{className:p()("new-comment-button")}))}}]),t}(n.Component);a(51);var _=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).changeHead=function(e){var t=a.props.changeHeader,n=a.state.defaultHeader;t(Object(J.a)({},n,{subtitle:e}))},a.scrollTopBottom=function(){a.container.current.scrollTop=a.container.current.scrollHeight},a.handleChange=function(e){a.setState({newCommentText:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.newCommentText,o=t.id,i=t.comments;a.props.addComment(o,n),a.setState(function(){return{comments:[].concat(Object(P.a)(i),[{id:i.reduce(function(e,t){return Math.max(t.id,e)},-1)+1,avatarClass:i.length%2===1?"male":"female",text:n}]),newCommentText:""}}),setTimeout(function(){a.scrollTopBottom()})};var n=a.props,i=n.list,r=n.match,s=n.history,l=i.filter(function(e){return Number(r.params.id)===Number(e.id)});return a.state={comments:l[0].comments,title:s.location.state.title,newCommentText:"",id:r.params.id,defaultHeader:{back:!0,title:"",subtitle:"New Topic",page:!0}},a.container=o.a.createRef(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.state,t=e.title,a=e.comments;this.changeHead(t),a.length&&this.scrollTopBottom()}},{key:"render",value:function(){var e=this,t=this.state,a=t.comments,n=t.newCommentText,i=!!a.length;return o.a.createElement("div",{className:p()("comments-container")},i?o.a.createElement("div",{className:p()("comments-scroll"),ref:this.container},o.a.createElement("ul",{className:p()("comments")},a.map(function(e,t){return o.a.createElement(R,{el:e,index:e.id,key:t})}))):o.a.createElement("div",{className:p()("empty-block")},"No comments"),o.a.createElement(B,{newCommentText:n,onSubmit:function(t){return e.handleSubmit(t)},onChange:function(t){return e.handleChange(t)}}))}}]),t}(n.Component),U=Object(b.a)(Object(l.b)(function(e){return{list:e.sayer}},function(e){return{changeHeader:function(t){return e(S(t))},addComment:function(t,a){return e(T(t,a))}}})(_)),q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).routes=[{path:"/",content:function(){return o.a.createElement(A,null)},exact:!0},{path:"/create",content:function(){return o.a.createElement(W,null)}},{path:"/topic-:id",content:function(){return o.a.createElement(U,null)}}],a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(y.a,null,o.a.createElement("div",{className:p()("container")},this.routes.map(function(e,t){return o.a.createElement(w.a,{key:t,path:e.path,exact:e.exact,component:e.content})})))}}]),t}(n.Component),z=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"sayer"},o.a.createElement(v,null),o.a.createElement(q,null))}}]),t}(n.Component);Object(b.a)(Object(l.b)(null,null)(z));var F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var V=[{id:0,text:"First item with customized long title",comments:[{id:0,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",avatarClass:"male"},{id:1,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..",avatarClass:"female"}]},{id:1,text:"Second item",comments:[]},{id:2,text:"Third item (short one)",comments:[{id:0,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",avatarClass:"male"},{id:1,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..",avatarClass:"female"},{id:2,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..",avatarClass:"female"},{id:3,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",avatarClass:"male"},{id:4,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..",avatarClass:"female"},{id:5,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",avatarClass:"male"},{id:6,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..",avatarClass:"female"},{id:7,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",avatarClass:"male"},{id:8,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..",avatarClass:"female"},{id:9,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",avatarClass:"male"},{id:10,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..",avatarClass:"female"},{id:11,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",avatarClass:"male"},{id:12,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..",avatarClass:"female"},{id:13,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",avatarClass:"male"},{id:14,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..",avatarClass:"female"},{id:15,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..",avatarClass:"female"},{id:16,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",avatarClass:"male"},{id:17,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..",avatarClass:"female"},{id:18,text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..",avatarClass:"female"}]}],$=localStorage.getItem("itemsList"),K=null!==$&&$.length;K||localStorage.setItem("itemsList",JSON.stringify(V));var Q=K?JSON.parse($):V;var X={back:!1,title:"Sayer",subtitle:"World\u2019s most used time waster",page:!1};var Y=Object(s.b)({sayer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,a=void 0,n=function(e){return localStorage.setItem("itemsList",JSON.stringify(e))};switch(t.type){case j:return n(a=[{id:e.reduce(function(e,t){return Math.max(t.id,e)},-1)+1,text:t.text,comments:[]}].concat(Object(P.a)(e))),a;case C:return n(a=e.filter(function(e){return e.id!==t.id})),a;case E:return n(a=e.map(function(e){return Number(e.id)===Number(t.id)?Object.assign({},Object(J.a)({},e,{comments:[].concat(Object(P.a)(e.comments),[{id:e.comments.reduce(function(e,t){return Math.max(t.id,e)},-1)+1,avatarClass:e.comments.length%2===1?"male":"female",text:t.text}])})):e})),JSON.parse(localStorage.getItem("itemsList"));default:return e}},header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object.assign({},e,t.header);default:return e}}}),Z=Object(s.c)(Y);r.a.render(o.a.createElement(l.a,{store:Z},o.a.createElement(z,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/test-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/test-app","/service-worker.js");F?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):G(t,e)})}}()}},[[28,2,1]]]);
//# sourceMappingURL=main.2628dfb3.chunk.js.map