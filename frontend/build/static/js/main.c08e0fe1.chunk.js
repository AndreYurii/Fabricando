(this["webpackJsonpprova-react-mirante"]=this["webpackJsonpprova-react-mirante"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),o=a.n(l),c=(a(14),a(8)),u=a(1),m=a(2),i=a(3),s=a(4),f=(a(15),function(){return r.a.createElement("nav",null,r.a.createElement("div",{class:"nav-wrapper light-blue darken-3"},r.a.createElement("a",{href:"/",class:"brand-logo"},"COPERFORTE"),r.a.createElement("ul",{class:"right"},r.a.createElement("li",null,r.a.createElement("a",{href:"/nome"},"Cadastrar")),r.a.createElement("li",null,r.a.createElement("a",{href:"/nome"},"Login")),r.a.createElement("li",null,r.a.createElement("a",{href:"/nome"},"Sobre")))))}),d=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nome"),r.a.createElement("th",null,"telefone"),r.a.createElement("th",null,"cpf"),r.a.createElement("th",null,"endereco")))},E=function(e){var t=e.autores.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.nome),r.a.createElement("td",null,t.telefone),r.a.createElement("td",null,t.cpf),r.a.createElement("td",null,t.endereco),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){e.removeAutor(a)},className:"waves-effect waves-light btn light-blue darken-3"},"Remover")))}));return r.a.createElement("tbody",null,t)},p=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.autores,a=e.removeAutor;return r.a.createElement("table",null,r.a.createElement(d,null),r.a.createElement(E,{autores:t,removeAutor:a}))}}]),a}(n.Component),h=a(7),v=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).submitFormulario=function(){n.props.escutadorDeSubmit(n.state),n.setState(n.stateInicial)},n.escutadorDeInput=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(h.a)({},a,r))},n.stateInicial={nome:"",telefone:"",cpf:"",endereco:""},n.state=n.stateInicial,n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.nome,a=e.telefone,n=e.cpf,l=e.endereco;return r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s3"},r.a.createElement("label",{htmlFor:"nome"},"Nome"),r.a.createElement("input",{id:"nome",type:"text",name:"nome",value:t,onChange:this.escutadorDeInput})),r.a.createElement("div",{className:"input-field col s3"},r.a.createElement("label",{htmlFor:"telefone"},"Telefone"),r.a.createElement("input",{id:"telefone",type:"text",name:"telefone",value:a,onChange:this.escutadorDeInput})),r.a.createElement("div",{className:"input-field col s3"},r.a.createElement("label",{htmlFor:"cpf"},"CPF"),r.a.createElement("input",{id:"cpf",type:"text",name:"cpf",value:n,onChange:this.escutadorDeInput})),r.a.createElement("div",{className:"input-field col s3"},r.a.createElement("label",{htmlFor:"endereco"},"Endereco"),r.a.createElement("input",{id:"endereco",type:"text",name:"endereco",value:l,onChange:this.escutadorDeInput}))),r.a.createElement("button",{type:"button",onClick:this.submitFormulario,className:"waves-effect waves-light btn light-blue darken-3"},"Salvar"))}}]),a}(n.Component),b=(a(16),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={autores:[{nome:"Paulo",telefone:"React",cpf:"1000",endereco:"ssu"},{nome:"Paulo",telefone:"React",cpf:"1000",endereco:"ssu"},{nome:"Paulo",telefone:"React",cpf:"1000",endereco:"ssu"},{nome:"Paulo",telefone:"React",cpf:"1000",endereco:"ssu"}]},e.removeAutor=function(t){var a=e.state.autores;e.setState({autores:a.filter((function(e,a){return a!==t}))})},e.escutadorDeSubmit=function(t){e.setState({autores:[].concat(Object(c.a)(e.state.autores),[t])})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(f,null),r.a.createElement("div",{className:"container mb-10"},r.a.createElement(p,{autores:this.state.autores,removeAutor:this.removeAutor}),r.a.createElement(v,{escutadorDeSubmit:this.escutadorDeSubmit})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.c08e0fe1.chunk.js.map