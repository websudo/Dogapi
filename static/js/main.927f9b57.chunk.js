(this.webpackJsonpdogo=this.webpackJsonpdogo||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(7),s=n.n(i),r=(n(13),n(8)),a=(n(14),n(15),n(0)),u=function(e){var t=e.home;return Object(a.jsx)("div",{id:"greet",onClick:function(e){var n=document.getElementById("greet");console.log(n),n.setAttribute("class","display"),t()},children:Object(a.jsx)("h1",{children:'" CLICK HERE TO GET A SMILE "'})})},l=n(2),d=n(3),b=n(5),j=n(4),h=(n(17),n(18),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return console.log(this.props.img),Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:"display-image",src:this.props.img,alt:"no picture",height:"500px"})||Object(a.jsx)("h1",{children:"Loading"})})}}]),n}(c.Component)),m=(n(19),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{id:"button",children:Object(a.jsx)("button",{type:"button",className:"btn btn-dark",onClick:this.props.onButtonClick,children:"Random"})})}}]),n}(c.Component)),p=(n(20),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{class:"wrapper",children:Object(a.jsx)("form",{onSubmit:this.props.onSubmit,children:Object(a.jsxs)("div",{class:"search-input",onSubmit:this.props.onSubmit,children:[Object(a.jsx)("a",{href:"",target:"_blank",hidden:!0}),Object(a.jsx)("input",{type:"text",id:"breed-input",placeholder:"Type breed to search.."}),Object(a.jsx)("div",{class:"icon",onClick:this.props.onSubmit,type:"submit",children:Object(a.jsx)("i",{class:"fas fa-search"})})]})})})})}}]),n}(c.Component)),f=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).onButtonClick=function(){console.log("Button Clicked"),fetch("https://dog.ceo/api/breeds/image/random/1").then((function(e){return e.json()})).then((function(e){console.log(e.message);var t=e.message[0].split("/")[4];c.setState({img:e.message,breed:t}),document.querySelector("#error").innerHTML=""}))},c.onSubmit=function(e){e.preventDefault();var t=document.querySelector("#breed-input").value,n=!1;c.state.breedlist.map((function(e){if(null!==e.match(t)&&!1===n){var o=e;n=!0,c.setState({match:o},(function(){fetch("https://dog.ceo/api/breed/".concat(c.state.match,"/images/random")).then((function(e){return e.json()})).then((function(e){var t=e.message[0].split("/")[4];c.setState({img:e.message,breed:t}),document.querySelector("#error").innerHTML="",console.log(n)})),console.log(n)})),console.log(n)}console.log(n)})),!1===n&&(document.querySelector("#error").innerHTML="Result not found")},c.state={img:"",breed:"",breedlist:[],match:"",found:!1},c}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;!0===this.props.homedisp.display&&document.querySelectorAll("#home")[0].setAttribute("class","home");fetch("https://dog.ceo/api/breeds/image/random/1").then((function(e){return e.json()})).then((function(t){var n=t.message[0].split("/")[4];e.setState({img:t.message,breed:n})})),fetch("https://dog.ceo/api/breeds/list").then((function(e){return e.json()})).then((function(t){t.message.map((function(t){var n=e.state.breedlist.concat(t);e.setState({breedlist:n})}))}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{id:"home",className:"home-none",children:[Object(a.jsx)(p,{onSubmit:this.onSubmit}),Object(a.jsx)("div",{className:"error-div",children:Object(a.jsx)("p",{id:"error"})}),Object(a.jsxs)("div",{className:"image-compo",children:[Object(a.jsx)("h1",{children:this.state.breed}),this.state.img&&Object(a.jsx)(h,{img:this.state.img}),Object(a.jsx)(m,{onButtonClick:this.onButtonClick})]})]})}}]),n}(c.Component),g=(n(21),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Logo-container",children:Object(a.jsx)("img",{src:"dogo5.png"})})}}]),n}(c.Component));var O=function(){var e=Object(c.useState)({display:!1}),t=Object(r.a)(e,2),n=t[0],o=t[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(g,{}),Object(a.jsx)(u,{home:function(){console.log("hello"),o({display:!0})}}),n.display&&Object(a.jsx)(f,{homedisp:n})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),i(e),s(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),v()}],[[22,1,2]]]);
//# sourceMappingURL=main.927f9b57.chunk.js.map