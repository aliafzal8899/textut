(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(o.jsx)("li",{className:"nav-item active",children:Object(o.jsxs)("a",{className:"nav-link",href:"#",children:["Home ",Object(o.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(o.jsx)("li",{className:"nav-item"}),Object(o.jsxs)("li",{className:"nav-item dropdown",children:[Object(o.jsx)("a",{className:"nav-link dropdown-toggle",href:"/",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Dropdown"}),Object(o.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(o.jsx)("a",{className:"dropdown-item",href:"/",children:"Action"}),Object(o.jsx)("a",{className:"dropdown-item",href:"/",children:"Another action"}),Object(o.jsx)("div",{className:"dropdown-divider"}),Object(o.jsx)("a",{className:"dropdown-item",href:"/",children:"Something else here"})]})]}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link disabled",href:"/",children:"Disabled"})})]}),Object(o.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(o.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]}),Object(o.jsxs)("div",{className:"form-check form-switch mx-3 text-".concat("dark"===e.mode?"light":"dark"),children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.togglemode}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})}function d(e){var t=Object(n.useState)("Enter Text Here"),a=Object(l.a)(t,2),c=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:e.title}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"exampleFormControlTextarea1",children:"Text"}),Object(o.jsx)("textarea",{value:c,onChange:function(e){s(e.target.value)},className:"form-control",id:"exampleFormControlTextarea1",rows:"8",style:{resize:"none"}})]}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){var t=c.toUpperCase();s(t),e.showalert("Converted to Upper Case","success")},children:"UpperCase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){s(c.toLowerCase()),e.showalert("Converted to Lower Case","success")},children:"LowerCase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=document.getElementById("exampleFormControlTextarea1");t.focus(),t.select(),navigator.clipboard.writeText(t.value),e.showalert("Text Copied to Clipboard","success")},children:"Select"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.split(/[ ]+/);s(t.join(" ")),e.showalert("Extra Spaces Removes","success")},children:"Remove Extra Scpaces"}),Object(o.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(){s("Enter Text Here"),e.showalert("All text Cleared","success")},children:"Clear"})]}),Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h2",{children:"Summary"}),Object(o.jsxs)("p",{children:[c.split(" ").length," words and ",c.length," Letters"]}),Object(o.jsxs)("p",{children:[.007*c.split(" ").length," time Read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:"Enter Text Here"!==c?c:"Enter something Above in the Textbox to preview"})]})]})}function b(e){var t;return e.alert&&Object(o.jsxs)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsxs)("strong",{children:[(t=e.alert.type,(t=t.toLowerCase())[0].toUpperCase()+t.slice(1))," : "]})," ",e.alert.msg]})}i.defaultProps={title:"blog"};var j=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(l.a)(s,2),j=r[0],m=r[1],h=function(e,t){m({msg:e,type:t}),setTimeout((function(){m(null)}),3e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"Textutils",mode:a,togglemode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#06001b",h("Dark Mode Enable","success")):(c("light"),document.body.style.backgroundColor="white")}}),Object(o.jsx)(b,{alert:j}),Object(o.jsx)(d,{title:"Enter Text To Convert",mode:a,showalert:h})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),m()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.2ab4b932.chunk.js.map