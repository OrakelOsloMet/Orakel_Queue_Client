(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{20:function(e,t,n){e.exports={brandText:"navbar_brandText__uhLqH",brandImage:"navbar_brandImage__2U5MH",defaultLinkText:"navbar_defaultLinkText__1Aqdo",authenticatedBrandText:"navbar_authenticatedBrandText__1r223",authenticatedLinkText:"navbar_authenticatedLinkText__2YEed",invisibleOnMobile:"navbar_invisibleOnMobile__2hWB6"}},57:function(e,t,n){e.exports={queueForm:"queue_queueForm__2uTDQ"}},60:function(e,t,n){e.exports=n(95)},89:function(e,t,n){e.exports=n.p+"static/media/oslometsvart.3b9b0cc3.png"},90:function(e,t,n){e.exports=n.p+"static/media/oslomethvit.2c306d99.png"},93:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(14),o=n.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u,l,c=n(34),s=n(8),E=n(17),d=n(50);!function(e){e.AUTH_START="AUTH_START",e.AUTH_SUCCESS="AUTH_SUCCESS",e.AUTH_FAIL="AUTH_FAIL",e.AUTH_LOGOUT="AUTH_LOGOUT",e.CLEAR_ERROR="CLEAR_ERROR"}(u||(u={})),function(e){e.FETCH_QUEUE_START="FETCH_QUEUE_START",e.FETCH_QUEUE_SUCCESS="FETCH_QUEUE_SUCCESS",e.FETCH_QUEUE_FAIL="FETCH_QUEUE_FAIL",e.ADD_TO_QUEUE_START="ADD_TO_QUEUE_START",e.ADD_TO_QUEUE_SUCCESS="ADD_TO_QUEUE_SUCCESS",e.ADD_TO_QUEUE_FAIL="ADD_TO_QUEUE_FAIL",e.DELETE_FROM_QUEUE_START="DELETE_FROM_QUEUE_START",e.DELETE_FROM_QUEUE_SUCCESS="DELETE_FROM_QUEUE_SUCCESS",e.DELETE_FROM_QUEUE_FAIL="DELETE_FROM_QUEUE_FAIL",e.DONE_IN_QUEUE_START="DONE_IN_QUEUE_START",e.DONE_IN_QUEUE_SUCCESS="DONE_IN_QUEUE_SUCCESS",e.DONE_IN_QUEUE_FAIL="DONE_IN_QUEUE_FAIL",e.FETCH_SUBJECTS_START="FETCH_SUBJECTS_START",e.FETCH_SUBJECTS_SUCCESS="FETCH_SUBJECTS_SUCCESS",e.FETCH_SUBJECTS_FAIL="FETCH_SUBJECTS_FAIL"}(l||(l={}));var _,m=n(11),f=n(22),p=function(e,t){return Object(f.a)(Object(f.a)({},e),t)},g={user:null,error:null,loading:!1},T=function(e,t){return p(e,{error:null,loading:!0})},U=function(e,t){return p(e,{user:t.user,error:null,loading:!1})},S=function(e,t){return p(e,{error:t.error,loading:!1})},C=function(e,t){return p(e,{user:null})},b=function(e,t){return p(e,{error:null})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.AUTH_START:return T(e);case u.AUTH_SUCCESS:return U(e,t);case u.AUTH_FAIL:return S(e,t);case u.AUTH_LOGOUT:return C(e);case u.CLEAR_ERROR:return b(e);default:return e}},h={queueData:[],subjectData:[],error:null,loading:!1},O=function(e,t){return p(e,{error:null,loading:!0})},A=function(e,t){return p(e,{error:t.error,loading:!1})},y=function(e,t){return p(e,{queueData:t.queueData,error:null,loading:!1})},k=function(e,t){return p(e,{error:null,loading:!1})},D=function(e,t){return p(e,{subjectData:t.subjectData,error:null,loading:!1})},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.FETCH_QUEUE_START:case l.ADD_TO_QUEUE_START:case l.DELETE_FROM_QUEUE_START:case l.DONE_IN_QUEUE_START:case l.FETCH_SUBJECTS_START:return O(e);case l.FETCH_QUEUE_FAIL:case l.ADD_TO_QUEUE_FAIL:case l.DELETE_FROM_QUEUE_FAIL:case l.DONE_IN_QUEUE_FAIL:case l.FETCH_SUBJECTS_FAIL:return A(e,t);case l.FETCH_QUEUE_SUCCESS:return y(e,t);case l.ADD_TO_QUEUE_SUCCESS:case l.DELETE_FROM_QUEUE_SUCCESS:case l.DONE_IN_QUEUE_SUCCESS:return k(e);case l.FETCH_SUBJECTS_SUCCESS:return D(e,t);default:return e}},F=Object(s.c)({auth:v,queue:L}),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,I=n(3),j=n(51),N=n.n(j),Q=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e}("http://localhost:8080/api/","https://orakelqueueservice.herokuapp.com/api/"),H=Q+"resources/userguide";!function(e){e.SELECT="select",e.INPUT="input"}(_||(_={}));var x=N.a.create({baseURL:Q}),q=function(e){return{type:u.AUTH_SUCCESS,user:e}},w=function(){return localStorage.removeItem("user"),{type:u.AUTH_LOGOUT}},B=function(){return function(e){var t=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null;t&&t.token?x.post("auth/isTokenValid",t.token).then((function(n){!0===n.data?e(q(t)):e(w())})):e(w())}},M=function(e,t){return function(n){n({type:u.AUTH_START}),x.post("auth/signin",{username:e,password:t}).then((function(e){e.data.token&&(localStorage.setItem("user",JSON.stringify(e.data)),n(q(e.data)))})).catch((function(e){n(function(e){return{type:u.AUTH_FAIL,error:e}}(e.response.data.message))}))}},J=function(){return{type:u.CLEAR_ERROR}},V=function(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}},P=function(){return function(e){e({type:l.FETCH_QUEUE_START}),x.get("queue/").then((function(t){var n;e((n=t.data,{type:l.FETCH_QUEUE_SUCCESS,queueData:n}))})).catch((function(t){e(function(e){return{type:l.FETCH_QUEUE_FAIL,error:e}}(t.response))}))}},G=function(e){return function(t){t({type:l.ADD_TO_QUEUE_START}),x.post("queue/",e).then((function(){t({type:l.ADD_TO_QUEUE_SUCCESS}),t(P())})).catch((function(e){t(function(e){return{type:l.ADD_TO_QUEUE_FAIL,error:e}}(e.response))}))}},W=function(e){return function(t){t({type:l.DELETE_FROM_QUEUE_START}),x.delete("queue/"+e,{headers:V()}).then((function(){t({type:l.DELETE_FROM_QUEUE_SUCCESS}),t(P())})).catch((function(e){t(function(e){return{type:l.DELETE_FROM_QUEUE_FAIL,error:e}}(e.response))}))}},X=function(e){return function(t){t({type:l.DONE_IN_QUEUE_START}),x.post("queue/confirmdone/"+e,null,{headers:V()}).then((function(){t({type:l.DONE_IN_QUEUE_SUCCESS}),t(P())})).catch((function(e){t(function(e){return{type:l.DONE_IN_QUEUE_FAIL,error:e}}(e.response))}))}},Y=function(){return function(e){e({type:l.FETCH_SUBJECTS_START}),x.get("subjects/").then((function(t){var n;e((n=t.data,{type:l.FETCH_SUBJECTS_SUCCESS,subjectData:n}))})).catch((function(t){e(function(e){return{type:l.FETCH_SUBJECTS_FAIL,error:e}}(t.response))}))}},z=n(98),K=n(23),$=n(20),Z=n.n($),ee=n(28),te=n.n(ee),ne=n(29),ae=n.n(ne),re=function(e){var t=e.title,n=e.contentText,a=e.url,r=e.hyperlinkText,i=ae()(te.a),o=document.createElement("div");return a&&r&&(o.innerHTML='<strong><a href="'.concat(a,'" target="_blank">').concat(r,"</a></strong>")),i.fire({title:t,html:n,footer:a&&r?o:null,icon:"info",confirmButtonText:"Lukk"})},ie=function(e){var t=e.onLoginSubmit,n=e.clearLoginError,a=e.errorMessage,r=ae()(te.a);return r.fire({title:"Orakel Innlogging",html:'<input type="text" id="login" class="swal2-input" placeholder="Brukernavn">\n                        <input type="password" id="password" class="swal2-input" placeholder="Passord">',confirmButtonText:"Logg Inn",showLoaderOnConfirm:!0,showCancelButton:!0,cancelButtonColor:"#d33",cancelButtonText:"Avbryt",allowOutsideClick:function(){return!r.isLoading()},didOpen:function(){a&&r.showValidationMessage("Ugyldig brukernavn eller passord!")},preConfirm:function(){var e=r.getPopup().querySelector("#login"),n=r.getPopup().querySelector("#password"),a=e.value.trim(),i=n.value.trim();if(a&&i)return t(a,i),{username:a,password:i};r.showValidationMessage("Oppgi brukernavn og passord!")}}).then((function(e){e.isDismissed&&n()}))},oe=function(e){var t=function(){ie({onLoginSubmit:e.onLoginSubmit,clearLoginError:e.clearLoginError,errorMessage:e.loginFailed?e.loginFailed:null})},a=e.isAuthenticated?Z.a.authenticatedLinkText:Z.a.defaultLinkText,i=e.isAuthenticated?{expand:"lg",bg:"warning"}:{variant:"dark",expand:"lg",bg:"primary"},o=r.a.createElement(K.a.Link,{className:a,onClick:e.isAuthenticated?e.logoutHandler:t},e.isAuthenticated?"Logg Ut":"Admin");return e.loginFailed&&t(),r.a.createElement(z.a,i,r.a.createElement(z.a.Brand,{className:Z.a.invisibleOnMobile},r.a.createElement("img",{className:Z.a.brandImage,alt:"OsloMet Logo",src:n(e.isAuthenticated?89:90)})),r.a.createElement(z.a.Brand,{className:e.isAuthenticated?Z.a.authenticatedBrandText:Z.a.brandText},"Orakel"),r.a.createElement(z.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(z.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(K.a,null,r.a.createElement(K.a.Link,{className:a,onClick:function(){return re({title:"Discord",contentText:"For digital veiledning benytter vi oss av Discord, og har v\xe5r egen server til dette. Inne p\xe5 serveren setter vi pris p\xe5 om du leser informasjonen i tekstkanalen kalt informasjon, og vi anbefaler alle \xe5 laste ned klienten deres i stedet for \xe5 bruke tjenesten gjennom nettleseren.",url:"https://discord.gg/jgzqYpX",hyperlinkText:"Orakel Discord"})}},"Discord"),r.a.createElement(K.a.Link,{className:a,onClick:function(){return re({title:"Feilrapportering",contentText:"Orakels k\xf8system er et fritidsprosjekt som er bygget og vedlikeholdt av en person. Det er derfor en viss fare for bugs og feil. Disse kan rapporteres ved \xe5 legge inn en issue p\xe5 GitHub-repoet, eller ved \xe5 ta kontakt med Fredrik Pedersen. Vi setter ogs\xe5 pris p\xe5 \xf8nsker om tilleggsfunksjonalitet :)",url:"https://github.com/OrakelOsloMet/Orakel_Queue_Client/issues",hyperlinkText:"GitHub Repo"})}},"Feilrapportering"),r.a.createElement(K.a.Link,{className:a,onClick:function(){return re({title:"Om Orakels K\xf8system",contentText:"Coming Soon!",url:H,hyperlinkText:"Brukerveiledning"})}},"Om"),o)))},ue=Object(E.b)((function(e){var t;return{isAuthenticated:void 0!==(null===(t=e.auth.user)||void 0===t?void 0:t.token),loginFailed:e.auth.error}}),(function(e){return Object(s.b)({onLoginSubmit:M,clearLoginError:J,logoutHandler:w},e)}))(oe),le=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null),r.a.createElement("main",{className:"mb-5"},e.children))},ce=n(58),se=n(57),Ee=n.n(se),de=n(97),_e=function(e){var t=[];return e.defaultColumns.forEach((function(e){t.push(r.a.createElement("th",{key:"".concat(e," Header"),scope:"col"},e))})),e.isAuthenticated&&e.loggedInColumns.forEach((function(e){t.push(r.a.createElement("th",{key:"".concat(e," Header"),scope:"col"},e))})),r.a.createElement("thead",{key:"tableHead",className:"thead-dark"},r.a.createElement("tr",null,t))},me=function(e){return r.a.createElement("button",{type:"submit",disabled:e.disabled,className:"btn btn-primary ".concat(e.className),onClick:e.onClick},e.children)},fe=function(e){return r.a.createElement("button",{disabled:e.disabled,className:"btn btn-success ".concat(e.className),onClick:e.onClick},e.children)},pe=function(e){return r.a.createElement("button",{disabled:e.disabled,className:"btn btn-danger ".concat(e.className),onClick:e.onClick},e.children)},ge=function(e){for(var t=e.queueData,n=e.confirmDoneEntity,a=e.deleteQueueEntity,i=e.isAuthenticated,o=e.userRoles,u=e.defaultColumns,l=e.loggedInColumns,c=[],s=function(e){var u="row"+e,l=[];l.push(r.a.createElement("td",{key:"entry"+e,id:"entry"+e},"# ",e+1)),l.push(r.a.createElement("td",{key:"name"+e,id:"name"+e},t[e].name)),l.push(r.a.createElement("td",{key:"subject"+e,id:"subject"+e},t[e].subject)),l.push(r.a.createElement("td",{key:"discord"+e,id:"discord"+e},t[e].digitalConsultation?"Discord":"Datatorget")),i&&o.includes("ROLE_ADMIN")&&l.push(r.a.createElement("td",{key:"actions"+e,id:"action"+e},r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,{onClick:function(){return n(t[e].id)}},"Ferdig"),r.a.createElement(pe,{className:"ml-2",onClick:function(){return a(t[e].id)}},"Slett")))),c.push(r.a.createElement("tr",{key:e,id:u},l))},E=0;E<t.length;E++)s(E);var d=r.a.createElement(_e,{defaultColumns:u,loggedInColumns:l,isAuthenticated:i}),_=r.a.createElement("tbody",null,c);return r.a.createElement(de.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"mb-4"},d,_)},Te=Object(a.forwardRef)((function(e,t){var n,a,i=e.formElement,o=e.error,u="form-control ml-2 mr-2 mt-2 ";switch(i.inputType){case _.INPUT:a=i,o&&(u+="is-invalid"),n=r.a.createElement("input",Object.assign({name:a.name,ref:t,className:u},a.inputConfig));break;case _.SELECT:a=i,n=r.a.createElement("select",{name:i.name,ref:t,className:u},a.inputConfig.options.map((function(e){return r.a.createElement("option",{key:String(e.value),value:String(e.value)},e.displayValue)})));break;default:n=r.a.createElement("input",{className:"form-control"})}return r.a.createElement(r.a.Fragment,null,n)})),Ue=function(){return r.a.createElement("div",{className:"spinner-border text-primary"})},Se=function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e})),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){"undefined"!==typeof(null===n||void 0===n?void 0:n.current)&&(null===n||void 0===n||n.current())}),t);return function(){return clearInterval(e)}}}),[t])},Ce=function(e){var t=Object(ce.a)(),n=t.register,i=t.handleSubmit,o=t.reset,u=t.errors,l=t.formState.isSubmitSuccessful;Se((function(){e.pollingFunction()}),5e3);var c=Object(a.useState)({name:"firstname",inputType:_.INPUT,inputConfig:{type:"text",placeholder:"Fornavn"},validation:{minLength:3,errorMessage:"Vennligst oppgi et fornavn p\xe5 minst 3 bokstaver"}}),s=Object(m.a)(c,2),E=s[0],d=(s[1],Object(a.useState)({name:"subject",inputType:_.SELECT,inputConfig:{options:[{value:"Loading",displayValue:"Loading"}]}})),p=Object(m.a)(d,2),g=p[0],T=p[1],U=Object(a.useState)({name:"year",inputType:_.SELECT,inputConfig:{options:[{value:1,displayValue:"1. \xe5r"},{value:2,displayValue:"2. \xe5r"},{value:3,displayValue:"3. \xe5r"}]}}),S=Object(m.a)(U,2),C=S[0],b=(S[1],Object(a.useState)({name:"digitalConsultation",inputType:_.SELECT,inputConfig:{options:[{value:!1,displayValue:"Fysisk Veiledning (Datatorget)"},{value:!0,displayValue:"Digital Veiledning (Discord)"}]}})),v=Object(m.a)(b,2),h=v[0];v[1];Object(a.useEffect)((function(){e.pollingFunction(),e.subjects.length>0&&O()}),[e.subjects]),Object(a.useEffect)((function(){l&&o()}),[l,o]);var O=function(){var t,n=Object(f.a)({},g);n.inputConfig.options=[],null===(t=e.subjects)||void 0===t||t.forEach((function(e){n.inputConfig.options.push({value:e,displayValue:e})})),T(n)},A=void 0===e.queueData?r.a.createElement(Ue,null):r.a.createElement(ge,{defaultColumns:["Plassering","Navn","Emne","Arena"],loggedInColumns:["Handlinger"],queueData:e.queueData,isAuthenticated:e.isAuthenticated,userRoles:e.userRoles,confirmDoneEntity:e.confirmDoneEntity,deleteQueueEntity:e.deleteQueueEntity}),y={nameInput:E,subjectSelect:g,yearSelect:C,digitalConsultationSelect:h},k=r.a.createElement("form",{onSubmit:i((function(t){var n=function(e){for(var t=Object(f.a)({},e),n=0,a=Object.entries(t);n<a.length;n++){var r=Object(m.a)(a[n],2),i=r[0],o=r[1];"string"==typeof o&&("true"!==o&&"false"!==o||(t[i]="true"==o),isNaN(o)||(t[i]=parseFloat(o)))}return t}(t),a={name:n.firstname,subject:n.subject,digitalConsultation:n.digitalConsultation,studyYear:n.year};e.addQueueEntity(a)})),className:"form-inline mt-5 mb-5 "+Ee.a.queueForm,style:{margin:"auto",width:"50%"}},Object.values(y).map((function(e){var t=n;if(e.inputType===_.INPUT){var a=e;t=n({required:a.validation.errorMessage,minLength:{value:a.validation.minLength,message:a.validation.errorMessage}})}return r.a.createElement(Te,{key:e.name,formElement:e,ref:t,error:u.firstname})})),r.a.createElement(me,{className:"ml-2 mr-2 mt-2"},"Registrer"));return r.a.createElement(r.a.Fragment,null,k,A)},be=Object(E.b)((function(e){var t;return{isAuthenticated:null!=(null===(t=e.auth.user)||void 0===t?void 0:t.token),userRoles:e.auth.user?e.auth.user.roles:[],queueData:e.queue.queueData,subjects:e.queue.subjectData,loading:e.queue.loading,error:e.queue.error}}),(function(e){return Object(s.b)({addQueueEntity:G,deleteQueueEntity:W,confirmDoneEntity:X,pollingFunction:P},e)}))(Ce),ve=Object(I.g)(Object(E.b)(null,(function(e){return Object(s.b)({autoLogin:B,getSubjectData:Y},e)}))((function(e){var t=e.autoLogin,n=e.getSubjectData;Object(a.useEffect)((function(){t(),n()}),[]);var i=r.a.createElement(I.d,null,r.a.createElement(I.b,{path:"/Orakel_Queue_Client/",exact:!0,render:function(){return r.a.createElement(be,null)}}),r.a.createElement(I.a,{to:"/Orakel_Queue_Client/"}));return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(le,null,i))}))),he=(n(93),n(94),Object(s.e)(F,R(Object(s.a)(d.a)))),Oe=r.a.createElement(E.a,{store:he},r.a.createElement(c.a,null,r.a.createElement(ve,null)));o.a.render(Oe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.fea62071.chunk.js.map