(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{104:function(e,t,n){e.exports=n.p+"static/media/oslometsvart.3b9b0cc3.png"},105:function(e,t,n){e.exports=n.p+"static/media/oslomethvit.2c306d99.png"},107:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),i=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(45),l=n(22),c=n(11),s=n(47),d=n(16),m=n(17),p=n(19),f=n(18),g=n(6),E=(n(84),n(64)),h=n.n(E),v=n(28),b=function(e,t){return Object(v.a)(Object(v.a)({},e),t)},_=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e},y=_("http://localhost:8080/api/","https://orakelqueueservice.herokuapp.com/api/"),k=y+"resources/userguide",C=h.a.create({baseURL:y}),T=function(e){return{type:"AUTH_SUCCESS",token:e.token,userId:e.userId,userRoles:e.roles}},O=function(){return localStorage.removeItem("user"),{type:"AUTH_LOGOUT"}},S=function(){return function(e){var t=JSON.parse(localStorage.getItem("user"));t&&t.token?C.post("auth/isTokenValid",t.token).then((function(n){!0===n.data?e(T(t)):e(O())})):e(O())}},U=function(e){return{type:"TOGGLE_LOGIN_MODAL",visible:e}};function D(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}var j=function(){return function(e){e({type:"FETCH_QUEUE_START"}),C.get("queue/").then((function(t){e({type:"FETCH_QUEUE_SUCCESS",queueData:t.data})})).catch((function(t){e(function(e){return{type:"FETCH_QUEUE_FAIL",error:e}}(t.response))}))}},A=n(112),N=n(33),L=n(29),I=n.n(L),H=n(65),F=n.n(H),w=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=document.createElement("div");return n&&a&&(r.innerHTML='<strong><a href="'.concat(n,'" target="_blank">').concat(a,"</a></strong>")),F()({title:e,text:t,content:n&&a?r:null,icon:"info",button:{text:"Ok",className:"btn btn-primary"}})},M=Object(c.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{showLoginModal:function(){return e(U(!1))},logoutHandler:function(){return e(O())}}}))((function(e){var t=e.isAuthenticated?I.a.authenticatedLinkText:I.a.defaultLinkText,a=e.isAuthenticated?{bg:"warning",expand:"lg"}:{bg:"primary",variant:"dark",expand:"lg"},o=r.a.createElement(N.a.Link,{className:t,onClick:e.isAuthenticated?e.logoutHandler:e.showLoginModal},e.isAuthenticated?"Logg Ut":"Admin");return r.a.createElement(A.a,a,r.a.createElement(A.a.Brand,{className:I.a.invisibleOnMobile},r.a.createElement("img",{className:I.a.brandImage,alt:"OsloMet Logo",src:n(e.isAuthenticated?104:105)})),r.a.createElement(A.a.Brand,{className:e.isAuthenticated?I.a.authenticatedBrandText:I.a.brandText},"Orakel"),r.a.createElement(A.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(A.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(N.a,null,r.a.createElement(N.a.Link,{className:t,onClick:function(){w("Discord","For digital veiledning benytter vi oss av Discord, og har v\xe5r egen server til dette. Inne p\xe5 serveren setter vi pris p\xe5 om du leser informasjonen i tekstkanalen kalt informasjon, og vi anbefaler alle \xe5 laste ned klienten deres i stedet for \xe5 bruke tjenesten gjennom nettleseren.","https://discord.gg/jgzqYpX","Orakel Discord")}},"Discord"),r.a.createElement(N.a.Link,{className:t,onClick:function(){w("Feilrapportering","Orakels k\xf8system er et fritidsprosjekt som er bygget og vedlikeholdt av en person. Det er derfor en viss fare for bugs og feil. Disse kan rapporteres ved \xe5 legge inn en issue p\xe5 GitHub-repoet, eller ved \xe5 ta kontakt med Fredrik Pedersen. Vi setter ogs\xe5 pris p\xe5 \xf8nsker om tilleggsfunksjonalitet :) ","https://github.com/OrakelOsloMet/Orakel_Queue_Client/issues","GitHub Repo")}},"Feilrapportering"),r.a.createElement(N.a.Link,{className:t,onClick:function(){w("Om Orakels K\xf8system","Coming Soon!",k,"Brukerveiledning")}},"Om"),o)))})),Q=n(68),R=n.n(Q),x=n(38),q=function(e,t,n){var a=b(n[t],{value:e.target.value,valid:V(e.target.value,n[t].validation),touched:!0}),r=b(n,Object(x.a)({},t,a)),o=!0;for(var i in r)o=r[i].valid&&o;return{form:r,formIsValid:o}},V=function(e,t){var n=!0;return!t||(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n)},B=function(e){var t=Object(v.a)({},e);for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&"input"===t[n].inputType&&(t[n].value="");return t},J=function(e){var t=null;switch(e.inputType){case"input":t=r.a.createElement("input",Object.assign({className:"form-control ml-2 mr-2 mt-2",value:e.value,onChange:e.changed},e.inputConfig));break;case"select":t=r.a.createElement("select",{className:"form-control ml-2 mr-2 mt-2",value:e.value,onChange:e.changed},e.inputConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",{className:"form-control"})}return r.a.createElement(r.a.Fragment,null,t)},G=function(){return r.a.createElement("div",{className:"spinner-border text-primary"})},P=n(32),z=n(73),K=function(e){return r.a.createElement("button",{type:"Submit",disabled:e.disabled,className:"btn btn-primary ".concat(e.className),onClick:e.onClick},e.children)},W=function(e){return r.a.createElement("button",{disabled:e.disabled,className:"btn btn-danger ".concat(e.className),onClick:e.onClick},e.children)},X=function(e){return r.a.createElement("button",{disabled:e.disabled,className:"btn btn-success ".concat(e.className),onClick:e.onClick},e.children)},Y=function(e){return r.a.createElement("button",{disabled:e.disabled,className:"btn btn-danger ".concat(e.className),onClick:e.onClick},e.children)},Z=function(e){return r.a.createElement(P.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(P.a.Header,{closeButton:!0},r.a.createElement(P.a.Title,{id:"contained-modal-title-vcenter"},"Innlogging")),r.a.createElement(P.a.Body,{className:"show-grid"},r.a.createElement(z.a,null,e.form,r.a.createElement("p",{className:"mt-4"},r.a.createElement("strong",null,"Denne innloggingssiden er kun ment for Orakler p\xe5 jobb. Er du student og skal stelle deg i k\xf8 trenger du IKKE \xe5 logge inn her :)")))),r.a.createElement(P.a.Footer,null,r.a.createElement(W,{onClick:e.onHide},"Lukk"),r.a.createElement(K,{disabled:!e.formIsValid,onClick:e.loginHandler},"Logg Inn")))},$=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={form:{username:{inputType:"input",inputConfig:{type:"text",placeholder:"Brukernavn"},value:"",label:"Brukernavn",validation:{required:!0,maxLength:30},valid:!1,touched:!1},password:{inputType:"input",inputConfig:{type:"password",placeholder:"Passord"},value:"",label:"Passord",validation:{required:!0,maxLength:150},valid:!1,touched:!1}},formIsValid:!1},e.submitHandler=function(){e.props.onLoginSubmit(e.state.form.username.value,e.state.form.password.value);var t=B(e.state.form);e.setState({form:t})},e.inputChangedHandler=function(t,n){e.setState(q(t,n,e.state.form))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.form)t.push({id:n,config:this.state.form[n]});var a=this.props.loading?r.a.createElement(G,null):r.a.createElement("form",{className:"form-inline"},t.map((function(t){return r.a.createElement(J,{key:t.id,inputType:t.config.inputType,inputConfig:t.config.inputConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,label:t.config.label,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),this.props.error?r.a.createElement("p",{className:"mt-4 ".concat(R.a.errorMessage)},this.props.error):null);return r.a.createElement(Z,{form:a,formIsValid:this.state.formIsValid,loginHandler:this.submitHandler,show:this.props.showModal,onHide:this.props.hideLoginModal})}}]),n}(a.Component),ee=Object(c.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,showModal:e.auth.showModal}}),(function(e){return{onLoginSubmit:function(t,n){return e(function(e,t){return function(n){n({type:"AUTH_START"}),C.post("auth/signin",{username:e,password:t}).then((function(e){e.data.token&&(localStorage.setItem("user",JSON.stringify(e.data)),n(T(e.data)))})).catch((function(e){n(function(e){return{type:"AUTH_FAIL",error:e}}(e.response.data.message))}))}}(t,n))},hideLoginModal:function(){return e(U(!0))}}}))($),te=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement("main",{className:"mb-5"},r.a.createElement(ee,null),this.props.children))}}]),n}(a.Component),ne=n(111),ae=function(e){var t=[];return e.defaultColumns.forEach((function(e){t.push(r.a.createElement("th",{key:"".concat(e," Header"),scope:"col"},e))})),e.isAuthenticated&&e.loggedInColumns.forEach((function(e){t.push(r.a.createElement("th",{key:"".concat(e," Header"),scope:"col"},e))})),r.a.createElement("thead",{key:"tableHead",className:"thead-dark"},r.a.createElement("tr",null,t))},re=function(e){for(var t=[],n=function(n){var a="row"+n,o=[];o.push(r.a.createElement("td",{key:"entry"+n,id:"entry"+n},"# ",n+1)),o.push(r.a.createElement("td",{key:"name"+n,id:"name"+n},e.queueData[n].name)),o.push(r.a.createElement("td",{key:"subject"+n,id:"subject"+n},e.queueData[n].subject)),o.push(r.a.createElement("td",{key:"discord"+n,id:"discord"+n},!1===e.queueData[n].digitalConsultation?"Datatorget":"Discord"));var i=r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{onClick:function(){return e.confirmDoneEntity(e.queueData[n].id)}},"Ferdig"),r.a.createElement(Y,{className:"ml-2",onClick:function(){return e.deleteQueueEntity(e.queueData[n].id)}},"Slett"));e.isAuthenticated&&(i=e.userRoles.includes("ROLE_ADMIN")?i:null,o.push(r.a.createElement("td",{key:"actions"+n,id:"action"+n},i))),t.push(r.a.createElement("tr",{key:n,id:a},o))},a=0;a<e.queueData.length;a++)n(a);var o=r.a.createElement(ae,{defaultColumns:e.defaultColumns,loggedInColumns:e.loggedInColumns,isAuthenticated:e.isAuthenticated}),i=r.a.createElement("tbody",null,t);return r.a.createElement(ne.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"mb-4"},o,i)},oe=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={form:{name:{inputType:"input",inputConfig:{type:"text",placeholder:"Fornavn"},value:"",label:"Navn",validation:{required:!0,minLength:3,maxLength:30},valid:!1,touched:!1},subject:{inputType:"select",inputConfig:{options:[]},value:"Programmering",label:"Velg Emne",validation:{},valid:!0},year:{inputType:"select",inputConfig:{options:[{value:1,displayValue:"1. \xe5r"},{value:2,displayValue:"2. \xe5r"},{value:3,displayValue:"3. \xe5r"}]},value:1,label:"\xc5rstrinn",validation:{},valid:!0},discord:{inputType:"select",inputConfig:{options:[{value:!1,displayValue:"Fysisk Veiledning (Datatorget)"},{value:!0,displayValue:"Digital Veiledning (Discord)"}]},value:0,label:"Veiledningsform",validation:{},valid:!0}},formIsValid:!1},e.fillSubjectSelector=function(){var t=Object(v.a)({},e.state.form);e.props.subjects.forEach((function(e){t.subject.inputConfig.options.push({value:e,displayValue:e})})),e.setState({form:t})},e.inputChangedHandler=function(t,n){e.setState(q(t,n,e.state.form))},e.registrationHandler=function(t){t.preventDefault();var n={};for(var a in e.state.form)n[a]=e.state.form[a].value;e.postNewQueueEntry(n);var r=B(e.state.form);e.setState({form:r,formIsValid:!1})},e.postNewQueueEntry=function(t){var n={name:t.name,subject:t.subject,digitalConsultation:t.discord,studyYear:t.year};e.props.addQueueEntity(n)},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.fillSubjectSelector()}),1e3)}},{key:"render",value:function(){var e=this,t=r.a.createElement(re,{defaultColumns:["Plassering","Navn","Emne","Arena"],loggedInColumns:["Handlinger"],queueData:this.props.queueData,isAuthenticated:this.props.isAuthenticated,userRoles:this.props.userRoles,confirmDoneEntity:this.props.confirmDoneEntity,deleteQueueEntity:this.props.deleteQueueEntity}),n=[];for(var a in this.state.form)n.push({id:a,config:this.state.form[a]});var o=r.a.createElement("form",{onSubmit:this.registrationHandler,className:"form-inline mt-3"},n.map((function(t){return r.a.createElement(J,{key:t.id,inputType:t.config.inputType,inputConfig:t.config.inputConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,label:t.config.label,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),r.a.createElement(K,{className:"ml-2 mr-2 mt-2",disabled:!this.state.formIsValid},"Registrer"));return r.a.createElement(r.a.Fragment,null,t,r.a.createElement("h1",{className:"text-left ml-2 mr-2 mt-5"},"K\xf8registrering: "),o)}}]),n}(a.Component),ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e4;return function(n){return Object(c.b)(null,(function(t){return{pollingAction:function(){return t(e)}}}))(function(e){Object(p.a)(o,e);var a=Object(f.a)(o);function o(){return Object(d.a)(this,o),a.apply(this,arguments)}return Object(m.a)(o,[{key:"componentDidMount",value:function(){var e=this;this.props.pollingAction(),this.dataPolling=setInterval((function(){e.props.pollingAction()}),t)}},{key:"componentWillUnmount",value:function(){clearInterval(this.dataPolling)}},{key:"render",value:function(){return r.a.createElement(n,this.props)}}]),o}(r.a.Component))}}(j())(Object(c.b)((function(e){return{isAuthenticated:null!=e.auth.token,userRoles:e.auth.userRoles,queueData:e.queue.queueData,subjects:e.queue.subjectData,loading:e.queue.loading,error:e.queue.error}}),(function(e){return{addQueueEntity:function(t){return e(function(e){return function(t){t({type:"ADD_TO_QUEUE_START"}),C.post("queue/",e).then((function(){t({type:"ADD_TO_QUEUE_SUCCESS"}),t(j())})).catch((function(e){t(function(e){return{type:"ADD_TO_QUEUE_FAIL",error:e}}(e.response))}))}}(t))},deleteQueueEntity:function(t){return e(function(e){return function(t){t({type:"DELETE_FROM_QUEUE_START"}),C.delete("queue/"+e,{headers:D()}).then((function(){t({type:"DELETE_FROM_QUEUE_SUCCESS"}),t(j())})).catch((function(e){t(function(e){return{type:"DELETE_FROM_QUEUE_FAIL",error:e}}(e.response))}))}}(t))},confirmDoneEntity:function(t){return e(function(e){return function(t){t({type:"DONE_IN_QUEUE_START"}),C.post("queue/confirmdone/"+e,null,{headers:D()}).then((function(){t({type:"DONE_IN_QUEUE_SUCCESS"}),t(j())})).catch((function(e){t(function(e){return{type:"DONE_IN_QUEUE_FAIL",error:e}}(e.response))}))}}(t))}}}))(oe)),ue=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.autoSignIn(),this.props.getSubjectData()}},{key:"render",value:function(){var e=r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/Orakel_Queue_Client/",exact:!0,render:function(){return r.a.createElement(ie,null)}}),r.a.createElement(g.a,{to:"/Orakel_Queue_Client/"}));return r.a.createElement("div",{className:"App"},r.a.createElement(te,null,e))}}]),n}(a.Component),le=Object(g.g)(Object(c.b)(null,(function(e){return{autoSignIn:function(){return e(S())},getSubjectData:function(){return e((function(e){e({type:"FETCH_SUBJECTS_START"}),C.get("subjects/").then((function(t){e({type:"FETCH_SUBJECTS_SUCCESS",subjectData:t.data})})).catch((function(t){e(function(e){return{type:"FETCH_SUBJECTS_FAIL",error:e}}(t.response))}))}))}}}))(ue)),ce={token:null,userId:null,userRoles:null,error:null,loading:!1,showModal:!1},se=function(e,t){return b(e,{error:null,loading:!0})},de=function(e,t){return b(e,{token:t.token,userId:t.userId,userRoles:t.userRoles,error:null,loading:!1,showModal:!1})},me=function(e,t){return b(e,{error:t.error,loading:!1,showModal:!0})},pe=function(e,t){return b(e,{token:null,userId:null,userRoles:null})},fe=function(e,t){return b(e,{showModal:!t.visible})},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return se(e);case"AUTH_SUCCESS":return de(e,t);case"AUTH_FAIL":return me(e,t);case"AUTH_LOGOUT":return pe(e);case"TOGGLE_LOGIN_MODAL":return fe(e,t);default:return e}},Ee={queueData:[],subjectData:[],error:null,loading:!1},he=function(e,t){return b(e,{error:null,loading:!0})},ve=function(e,t){return b(e,{error:t.error,loading:!1})},be=function(e,t){return b(e,{queueData:t.queueData,error:null,loading:!1})},_e=function(e,t){return b(e,{error:null,loading:!1})},ye=function(e,t){return b(e,{subjectData:t.subjectData,error:null,loading:!1})},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_QUEUE_START":case"ADD_TO_QUEUE_START":case"DELETE_FROM_QUEUE_START":case"DONE_IN_QUEUE_START":case"FETCH_SUBJECTS_START":return he(e);case"FETCH_QUEUE_FAIL":case"ADD_TO_QUEUE_FAIL":case"DELETE_FROM_QUEUE_FAIL":case"DONE_IN_QUEUE_FAIL":case"FETCH_SUBJECTS_FAIL":return ve(e,t);case"FETCH_QUEUE_SUCCESS":return be(e,t);case"ADD_TO_QUEUE_SUCCESS":case"DELETE_FROM_QUEUE_SUCCESS":case"DONE_IN_QUEUE_SUCCESS":return _e(e);case"FETCH_SUBJECTS_SUCCESS":return ye(e,t);default:return e}},Ce=(n(107),n(108),Object(l.c)({auth:ge,queue:ke})),Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,Oe=_(Object(l.e)(Ce,Te(Object(l.a)((function(e){return function(t){return function(n){console.log("[Middleware] Dispatching: ",n);var a=t(n);return console.log("[Middleware] next state: ",e.getState()),a}}}),s.a))),Object(l.e)(Ce,Te(Object(l.a)(s.a)))),Se=r.a.createElement(c.a,{store:Oe},r.a.createElement(u.a,null,r.a.createElement(le,null)));i.a.render(Se,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,n){e.exports={brandText:"Navbard_brandText__2MwPD",brandImage:"Navbard_brandImage__3nrgi",defaultLinkText:"Navbard_defaultLinkText__1iNn6",authenticatedBrandText:"Navbard_authenticatedBrandText__lz557",authenticatedLinkText:"Navbard_authenticatedLinkText__14n68",invisibleOnMobile:"Navbard_invisibleOnMobile__1ZL5-"}},68:function(e,t,n){e.exports={errorMessage:"globalStyles_errorMessage__3H29n"}},75:function(e,t,n){e.exports=n(109)},84:function(e,t,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.9bde228f.chunk.js.map