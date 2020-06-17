(this["webpackJsonpwhere-in-the-world"]=this["webpackJsonpwhere-in-the-world"]||[]).push([[0],{15:function(e,t,a){},27:function(e,t,a){e.exports=a(40)},32:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(32),a(3)),i=a.n(o),s=a(7),u=a(10),m=(a(15),a(8)),d=a(1);var p=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),d=Object(u.a)(o,2),p=d[0],h=d[1];Object(n.useEffect)((function(){f()}),[]);var f=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,l(t),h(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"light"===e.uiState?"light-mode-bg padding-x":"dark-mode-bg padding-x"},r.a.createElement("div",{className:"search-container"},r.a.createElement("input",{className:"light"===e.uiState?"light-mode-el":"dark-mode-el",id:"search-counrty",type:"text",placeholder:"\uf002 \xa0 \xa0 Search for a country",onChange:function(){var e=document.getElementById("search-counrty"),t=p.filter((function(t){if(t.name.toLowerCase().includes(e.value.toLowerCase()))return t}));l(t)}}),r.a.createElement("select",{className:"light"===e.uiState?"light-mode-el":"dark-mode-el",defaultValue:"DEFAULT",name:"region",id:"region",onChange:function(){var e=document.getElementById("region"),t=p.filter((function(t){if(t.region.toLowerCase().includes(e.value))return t}));l(t)}},r.a.createElement("option",{disabled:!0,value:"DEFAULT"},"Filter By Region"),r.a.createElement("option",{value:"africa"},"Africa"),r.a.createElement("option",{value:"america"},"America"),r.a.createElement("option",{value:"asia"},"Asia"),r.a.createElement("option",{value:"europe"},"Europe"),r.a.createElement("option",{value:"oceania"},"Oceania"),r.a.createElement("option",{value:""},"All"))),r.a.createElement("div",{className:"countries-container"},c.map((function(t){return r.a.createElement(m.b,{className:"country-link",to:"/".concat(t.name),key:t.alpha3Code},r.a.createElement("div",{className:"light"===e.uiState?"light-mode-el country":"dark-mode-el country"},r.a.createElement("img",{src:t.flag,alt:"image"}),r.a.createElement("p",{className:"country-name padding-left"},t.name),r.a.createElement("p",{className:"padding-left margin-0"},r.a.createElement("span",null,"Population:")," ",t.population),r.a.createElement("p",{className:"padding-left margin-0"},r.a.createElement("span",null,"Region:")," ",t.region),r.a.createElement("p",{className:"padding-left margin-0"},r.a.createElement("span",null,"Capital:")," ",t.capital)))}))))},h=a(25),f=a(22),g=a(23),E=a(26),v=a(24),b=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(f.a)(this,a),(e=t.call(this)).fetchCountry=Object(s.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://restcountries.eu/rest/v2/name".concat(e.props.match.url,"?fullText=true"));case 2:return t.next=4,t.sent.json();case 4:a=t.sent,e.setState({data:a[0]});case 6:case"end":return t.stop()}}),t)}))),e.getBorderFullName=Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({borders:[]}),e.state.data.borders.map(function(){var t=Object(s.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://restcountries.eu/rest/v2/alpha/".concat(a));case 2:return t.next=4,t.sent.json();case 4:n=t.sent,e.setState((function(e){return{borders:[].concat(Object(h.a)(e.borders||[]),[n.name])}}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)}))),e.handleClick=function(){e.forceUpdate()},e.state={data:{},borders:[],value:0},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchCountry();case 2:this.getBorderFullName();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillReceiveProps",value:function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({data:{}});case 2:return e.next=4,this.fetchCountry();case 4:this.getBorderFullName();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"light"===this.props.uiState?"light-mode-bg padding-x country-page":"dark-mode-bg padding-x country-page"},r.a.createElement(m.b,{to:"/"},r.a.createElement("button",{className:"light"===this.props.uiState?"light-mode-el light-mode-button":"dark-mode-el dark-mode-button"},r.a.createElement("i",{class:"fa fa-long-arrow-left","aria-hidden":"true"})," Back")),r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"flex-container"},r.a.createElement("img",{className:"country-flag",src:this.state.data.flag,alt:"",width:"400px"})),r.a.createElement("div",{className:"light"===this.props.uiState?"light-mode-bg flex-container":"dark-mode-bg flex-container"},r.a.createElement("h2",null,this.state.data.name),r.a.createElement("div",{className:"country-details-container"},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",null,"Native Name:"),"  ",this.state.data.nativeName),r.a.createElement("p",null,r.a.createElement("span",null,"Population:"),"  ",this.state.data.population),r.a.createElement("p",null,r.a.createElement("span",null,"Region:"),"  ",this.state.data.region),r.a.createElement("p",null,r.a.createElement("span",null,"Sub Region:"),"  ",this.state.data.subregion),r.a.createElement("p",null,r.a.createElement("span",null,"Capital:"),"  ",this.state.data.capital)),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",null,"Top Level Domain:"),"  ",this.state.data.topLevelDomain),r.a.createElement("p",null,r.a.createElement("span",null,"Currencies:")," ",this.state.data.currencies&&this.state.data.currencies[0].name),r.a.createElement("p",null,r.a.createElement("span",null,"Languages:")," ",this.state.data.languages&&this.state.data.languages.map((function(t){return t.name===e.state.data.languages[e.state.data.languages.length-1].name?t.name:t.name+", "}))))),r.a.createElement("div",{className:"border-container"},r.a.createElement("p",null,r.a.createElement("span",null,"Border Countries: "),this.state.data.borders&&this.state.borders.map((function(t){return r.a.createElement(m.b,{className:"light"===e.props.uiState?"light-mode-el border light-mode-button":"dark-mode-el border dark-mode-button",key:t,to:"/".concat(t)},t)})))))))}}]),a}(r.a.Component);var k=function(){var e=Object(n.useState)("light"),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("Dark Mode"),o=Object(u.a)(l,2),h=o[0],f=o[1],g=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("light"===a?"dark":"light");case 2:f("Dark Mode"===h?"Light Mode":"Dark Mode");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"padding-x navbar",style:{backgroundColor:"light"===a?"#fff":"#2B3743"}},r.a.createElement("h1",{style:{color:"light"===a?"#000":"#fff"}},"Where In The World"),r.a.createElement("div",{style:{color:"light"===a?"#000":"#fff"},className:"ui-mode-toggle",onClick:g},"Dark Mode"===h?r.a.createElement("i",{className:"fa fa-moon-o  ",style:{color:"black",fontSize:"1rem",fontWeight:"600"}}):r.a.createElement("i",{className:"fa fa-sun-o  ",style:{color:"white",fontSize:"1rem",fontWeight:"600"}})," ",h)),r.a.createElement(m.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:function(){return r.a.createElement(p,{uiState:a})}}),r.a.createElement(d.a,{path:"/:id",exact:!0,render:function(e){return r.a.createElement(b,Object.assign({},e,{uiState:a}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.ff4c3473.chunk.js.map