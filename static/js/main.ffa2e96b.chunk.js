(this["webpackJsonpmodal-demo"]=this["webpackJsonpmodal-demo"]||[]).push([[0],{36:function(e,t,a){e.exports=a.p+"static/media/robo.5189f593.png"},62:function(e,t,a){e.exports=a(72)},67:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(5),s=a.n(c),o=(a(67),a(13)),r=a(94),m=a(95),i=a(96),u=a(12),d=a(43),p=a(98),h=a(36),E=a.n(h),f=a(7),b=a(42),g=a(97);function y(e){e.chilren;var t=e.closeModal,a=Object(d.a)(e,["chilren","closeModal"]),c=Object(l.useState)(!1),s=Object(o.a)(c,2),r=s[0],m=s[1],i=Object(l.useState)(new Date),h=Object(o.a)(i,2),y=h[0],v=h[1],N=Object(l.useState)(1),w=Object(o.a)(N,2),k=w[0],C=w[1],O=Object(l.useState)({step1:!1,step2:!1}),j=Object(o.a)(O,2),x=j[0],D=j[1],M=Object(l.useState)(0),S=Object(o.a)(M,2),A=S[0],I=S[1],P=["January","February","March","April","May","June","July","August","September","November","December"],F=Object(l.useState)({}),T=Object(o.a)(F,2),H=T[0],J=T[1],W=Object(l.useRef)(),B=[{title:"How can I help you, Emmanuel?",message:"Schedule a call with your monitor, solve your issues, get all the helps that you need."},{title:"Schedule a conversation with Ms. Jane Wayne?",message:""},{title:"Congratulations!",message:"Your schedule has been successfully created. "}];function Y(e){var t={1:"st",2:"nd",3:"rd"},a=new Date;a.setDate((new Date).getDate()+1);var l=e.toDateString()===(new Date).toDateString()?"Today, ":a.toDateString()===e.toDateString()?"Tomorrow, ":"";return"".concat(l," ").concat(P[e.getMonth()]," ").concat(e.getDate()).concat(t[e.getDate()]?t[e.getDate()]:"th")}function q(e){H[e.target.name]=e.target.value,J(Object(u.a)({},H))}return n.a.createElement(p.a,Object.assign({},a,{size:"md",backdrop:"static",keyboard:!1,"aria-labelledby":"contained-modal-title-vcenter"}),n.a.createElement(p.a.Header,{className:"pt-4 px-4 pb-0 d-flex justify-content-between"},n.a.createElement("div",{className:"content-left"},n.a.createElement("button",{className:"btn label-doctor btn-sm px-4"},"I'm Dr. H"),n.a.createElement("h4",{className:"my-2"},k<=3?B[k-1].title:""),n.a.createElement("p",null,k<=3?B[k-1].message:"")),n.a.createElement("div",{className:"content-right"},n.a.createElement("img",{src:E.a,alt:"robo",className:"img-fluid",style:{height:"10rem"}}))),n.a.createElement(p.a.Body,null,n.a.createElement("div",{className:"line",style:{width:A>0?"calc(".concat(A+"% + 2em",")"):0}}),n.a.createElement("form",{className:"py-4 appointment-form",ref:W},n.a.createElement("div",{className:"step1",style:{display:1===k?"block":"none"}},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"help-needed"},"Help Needed:"),n.a.createElement("select",{name:"help-needed",id:"help-needed",className:"form-control custom-select",onChange:function(e){return q(e)}},n.a.createElement("option",{value:"I need to speak to a counselor"},"I need to speak to a counselor"),n.a.createElement("option",{value:"My technology"},"My technology"),n.a.createElement("option",{value:"I need help with STEMuli"},"MI need help with STEMuli"),n.a.createElement("option",{value:"I need to ask my teacher for help on Assignment"},"I need to ask my teacher for help on Assignment"),n.a.createElement("option",{value:"I need help with a college course"},"I need help with a college course"),n.a.createElement("option",{value:"I need more time on an assignment"},"I need more time on an assignment")),!H["help-needed"]&&!0===x.step1&&n.a.createElement("div",{className:"text-danger"},"Plese select One of The option")),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"help-assignment"},"Select assignment:"),n.a.createElement("select",{name:"help-assignment",id:"help-assignment",className:"form-control custom-select",onChange:function(e){return q(e)},disabled:!H["help-needed"]},n.a.createElement("option",{value:"101"},"Course 101"),n.a.createElement("option",{value:"101"},"Course 102"),n.a.createElement("option",{value:"101"},"Course 103")),!H["help-assignment"]&&!0===x.step1&&n.a.createElement("div",{className:"text-danger"},"Plese select One of The option")),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"help-details"},"Add Details:"),n.a.createElement("textarea",{class:"form-control",name:"help-details",id:"help-details",rows:"7",className:"form-control",placeholder:"I want people to |",onChange:function(e){return q(e)}}),!H["help-details"]&&!0===x.step1&&n.a.createElement("div",{className:"text-danger"},"Please Add Some Details"))),n.a.createElement("div",{className:"step2",style:{display:2===k?"block":"none"}},!H["schedule-call"]&&!0===x.step2&&n.a.createElement("div",{className:"text-danger"},"Please Choose Your Prefared Option from below"),n.a.createElement("div",{class:"custom-control custom-radio custom-control-inline"},n.a.createElement("input",{type:"radio",id:"schedule-call1",name:"schedule-call",class:"custom-control-input",value:"no",onChange:function(e){return q(e)},checked:!H["schedule-call"]||"no"===H["schedule-call"]}),n.a.createElement("label",{class:"custom-control-label",htmlFor:"schedule-call1"},"No, I don\u2019t need to schedule a call")),n.a.createElement("div",{class:"custom-control custom-radio custom-control-inline"},n.a.createElement("input",{type:"radio",id:"schedule-call2",name:"schedule-call",class:"custom-control-input",value:"yes",onChange:function(e){return q(e)},checked:"yes"===H["schedule-call"]}),n.a.createElement("label",{class:"custom-control-label",htmlFor:"schedule-call2"},"Yes, I want to schedule a call")),n.a.createElement("div",{className:"row pl-4 mt-4"},n.a.createElement("div",{className:"col-md-12"},H["schedule-call"]&&"yes"===H["schedule-call"]&&!H["call-type"]&&!0===x.step2&&n.a.createElement("div",{className:"text-danger"},"Choose A Call Option")),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row",style:{display:"yes"===H["schedule-call"]?null:"none"}},n.a.createElement("div",{className:"col-md-6 form-group"},n.a.createElement("div",{className:"custom-button"},n.a.createElement("input",{type:"radio",name:"call-type",id:"call-type1",value:"phone-call",onChange:function(e){return q(e)}}),n.a.createElement("label",null,n.a.createElement("i",{class:"fas fa-phone-alt"}),n.a.createElement("small",null,"Call my cell phone")))),n.a.createElement("div",{className:"col-md-6 form-group"},n.a.createElement("div",{className:"custom-button"},n.a.createElement("input",{type:"radio",name:"call-type",id:"call-type2",value:"video-call",onChange:function(e){return q(e)}}),n.a.createElement("label",null,n.a.createElement("i",{class:"fas fa-video"}),n.a.createElement("small",null,"Schedule a video call")))),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("label",null,"When:")),n.a.createElement("div",{className:"col-md-6 form-group"},!H["schedule-date"]&&!0===x.step2&&n.a.createElement("div",{className:"text-danger"},"Choose Schedule Date"),n.a.createElement("select",{name:"schedule-date",id:"schedule-date",className:"form-control custom-select",onClick:function(e){return function(e){e.preventDefault(),m(!0)}(e)}},n.a.createElement("option",{defaultValue:Y(y)},Y(y))),n.a.createElement(f.a,{utils:b.a,hidden:!0},n.a.createElement(g.a,{fullWidth:!0,format:"MM/dd/yyyy",margin:"normal",id:"date-picker-dialog",label:"Pick A Date",value:y,open:r,onChange:function(e){v(e),H["schedule-date"]=e},onDismiss:function(){return m(!1)},onAccept:function(e){return m(!1)},showTodayButton:!0,disablePast:!0}))),n.a.createElement("div",{className:"col-md-6 form-group"},!H["schedule-time"]&&!0===x.step2&&n.a.createElement("div",{className:"text-danger"},"Choose Schedule time"),n.a.createElement("select",{name:"schedule-time",id:"schedule-time",className:"form-control custom-select",onChange:function(e){return q(e)}},n.a.createElement("option",{value:"10AM-11:00AM"},"10AM - 11:00AM"),n.a.createElement("option",{value:"11AM-12:00AM"},"11AM - 12:00AM"))))),n.a.createElement("div",{className:"col-md-12 form-group",style:{display:"phone-call"===H["call-type"]&&"yes"===H["schedule-call"]?"block":"none"}},"phone-call"===H["call-type"]&&!H.phone&&!0===x.step2&&n.a.createElement("div",{className:"text-danger"},"please Insert Phone Number"),n.a.createElement("label",{htmlFor:"phone"},"Your Phone Number"),n.a.createElement("input",{type:"text",placeholder:"+1 234 909 1123",className:"form-control",name:"phone",onChange:function(e){return q(e)}})))),n.a.createElement("div",{className:"step3",style:{display:3===k?"block":"none"}},n.a.createElement("h4",null,"Help needed:"),n.a.createElement("p",null,H["help-needed"]," //  Course ",H["help-assignment"]),n.a.createElement("div",{className:"schedule-details"},n.a.createElement("h4",null,"Schedule Details"),n.a.createElement("p",null,"We have notified your monitor about your request, hang on tight"),H["schedule-date"]&&n.a.createElement("div",{className:"d-flex"},n.a.createElement("p",{className:"icon"},n.a.createElement("i",{class:"fas fa-calendar-check"})),n.a.createElement("p",{className:"text"},Y(H["schedule-date"]))),H["schedule-time"]&&n.a.createElement("div",{className:"d-flex"},n.a.createElement("p",{className:"icon"},n.a.createElement("i",{class:"fas fa-clock"})),n.a.createElement("p",{className:"text"},H["schedule-time"])),n.a.createElement("div",{className:"d-flex"},n.a.createElement("p",{className:"icon"},n.a.createElement("i",{class:"fas fa-user-alt"})),n.a.createElement("p",{className:"text"},"Test User")),H.phone&&n.a.createElement("div",{className:"d-flex"},n.a.createElement("p",{className:"icon"},n.a.createElement("i",{class:"fas fa-phone-alt"})),n.a.createElement("p",{className:"text"},H.phone," ",n.a.createElement("a",{href:"#",onClick:function(e){return function(e){e.preventDefault(),C(2),I(50)}(e)},className:"d-inline ml-4"},"Update Phone"))))))),n.a.createElement(p.a.Footer,{className:"d-flex justify-content-between"},n.a.createElement("button",{className:"btn btn-white",onClick:function(){t()},style:{display:k>=3?"none":""}},"Cancel"),n.a.createElement("button",{className:"btn btn-purple",onClick:function(){1===k&&(Object.keys(H).length>=3?(C(k+1),D(Object(u.a)(Object(u.a)({},x),{},{step1:!1})),I(50)):D(Object(u.a)(Object(u.a)({},x),{},{step1:!0}))),2===k&&(!H["schedule-call"]&&"yes"===H["schedule-call"]&&Object.keys(H).length>=4?D(Object(u.a)(Object(u.a)({},x),{},{step2:!0})):(C(k+1),D(Object(u.a)(Object(u.a)({},x),{},{step2:!1})),I(100)))},style:{display:k>=3?"none":""}},"Continue"),n.a.createElement("button",{className:"btn btn-white",onClick:function(){C(1),I(0),J({}),W.current.reset()},style:{display:k>=3?"block":"none"}},"+ New Request"),n.a.createElement("button",{className:"btn btn-purple",onClick:function(){J({}),t(),C(1),I(0)},style:{display:k>=3?"block":"none"}},"Complete")))}var v=function(){var e=n.a.useState(!1),t=Object(o.a)(e,2),a=t[0],l=t[1];return n.a.createElement(r.a,null,n.a.createElement(m.a,null,n.a.createElement(i.a,null,n.a.createElement("button",{class:"absbtn",onClick:function(){l(!0)}},n.a.createElement("i",{class:"fas fa-question-circle "})),n.a.createElement(y,{show:a,onHide:function(){return l(!1)},closeModal:function(){l(!1)}}))))};a(71),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.ffa2e96b.chunk.js.map