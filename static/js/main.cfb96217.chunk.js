(this.webpackJsonpadaptive=this.webpackJsonpadaptive||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a(1),i=a.n(l),s=a(6),c=a.n(s),u=a(3),r=(a(12),a(13),function(e){var t=e.value,a=e.valid,l=e.message;return""===t||a?null:Object(n.jsx)("p",{className:"sign-up__error-message",children:l})}),d=function(e){var t=e.value,a=e.valid,l=e.onChange,i=e.type,s=e.id,c=e.label,u=e.placeholder;return Object(n.jsxs)("div",{className:"sign-up__text-input",children:[Object(n.jsx)("label",{htmlFor:s,className:"sign-up__text-input_label",children:c}),Object(n.jsx)("input",{value:t,onChange:l,name:s,id:s,type:i,placeholder:u,className:"sign-up__text-input_input"}),Object(n.jsx)(r,{value:t,valid:a,message:"\u0412\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0435 \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"})]})},j=function(e){var t=e.value,a=e.onChange,i=e.id,s=e.label,c=e.placeholder,r=e.options,d=Object(l.useState)(!1),j=Object(u.a)(d,2),o=j[0],b=j[1];return Object(n.jsxs)("div",{className:"sign-up__text-input sign-up__list-input",children:[Object(n.jsx)("label",{htmlFor:i,className:"sign-up__text-input_label",children:s}),Object(n.jsx)("input",{onClick:function(){b(!o)},autoComplete:"off",value:t,type:"text",onChange:a,name:i,id:i,placeholder:c,className:"sign-up__text-input_input sign-up__text-input_list "}),Object(n.jsx)("div",{className:"sign-up__list-input__list",style:o?{opacity:1,visibility:"visible"}:{opacity:0,visibility:"hidden"},children:r.map((function(e,t){return Object(n.jsx)("div",{className:"sign-up__list-input__list_item",onClick:function(){a({target:{value:e}})},children:e},"".concat(t,"+option"))}))})]})},o=function(e){var t=e.checked,a=void 0!==t&&t,l=e.onChange;return Object(n.jsxs)("div",{className:"sign-up__rules",children:[Object(n.jsx)("input",{checked:a,onChange:l,id:"accept-rules",className:"sign-up__rules_accept-checkbox",type:"checkbox"}),Object(n.jsxs)("label",{htmlFor:"accept-rules",className:"sign-up__rules_accept-text",children:["\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u044e"," ",Object(n.jsx)("a",{className:"sign-up__link",href:"/#",children:"\u0443\u0441\u043b\u043e\u0432\u0438\u044f"})," ","\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"]})]})},b=function(){return Object(n.jsxs)(l.Fragment,{children:[Object(n.jsx)("p",{className:"sign-up__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(n.jsxs)("div",{className:"sign-up__subtitle",children:[Object(n.jsx)("p",{className:"sign-up__subtitle_question",children:"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?"}),Object(n.jsx)("a",{className:"sign-up__subtitle_login sign-up__link",href:"/#",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},m=function(e){var t=e.text,a=e.disabled,l=void 0!==a&&a;return Object(n.jsx)("button",{disabled:l,type:"submit",className:"sign-up__button",children:t})},p=a(4),h=a(2),g=function(){var e=Object(l.useState)({name:"",email:"",tel:"",lang:"",nameValid:!1,emailValid:!1,telValid:!1,rules:!1,formValid:!1}),t=Object(u.a)(e,2),a=t[0],n=t[1],i=a.nameValid,s=a.emailValid,c=a.telValid,r=a.lang,d=a.rules;return{formData:a,formValid:i&&s&&c&&r&&d,setForm:function(e){var t=e.target.name,a=e.target.value;n((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(p.a)({},t,a))}));var l=function(e,t){switch(e){case"email":return{validName:"emailValid",validValue:/^\w+@\w+[.]\w+$/.test(t)};case"name":return{validName:"nameValid",validValue:/^[a-zA-Z\u0410-\u042f\u0430-\u044f\s-]+$/.test(t)};case"tel":return{validName:"telValid",validValue:/^[+]?([\d]{1})[- ]?\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{2})[- ]?([0-9]{2})$/.test(t)}}}(t,a);n((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(p.a)({},l.validName,l.validValue))}))},setLang:function(e){n((function(t){return Object(h.a)(Object(h.a)({},t),{},{lang:e.target.value})}))},setRules:function(){return n((function(e){return Object(h.a)(Object(h.a)({},e),{},{rules:!a.rules})}))}}},v=(a(14),["\u0420\u0443\u0441\u0441\u043a\u0438\u0439","\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439","\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439","\u0418\u0441\u043f\u0430\u043d\u0441\u043a\u0438\u0439"]),_=function(e){var t=e.handleSubmit,a=g(),l=a.formData,i=a.setForm,s=a.setLang,c=a.setRules,u=a.formValid;return Object(n.jsx)("div",{className:"sign-up",children:Object(n.jsxs)("form",{onSubmit:function(e){t(e,l)},children:[Object(n.jsx)(b,{}),Object(n.jsx)(d,{value:l.name,valid:l.nameValid,onChange:i,id:"name",type:"text",label:"\u0418\u043c\u044f",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0418\u043c\u044f"}),Object(n.jsx)(d,{value:l.email,valid:l.emailValid,onChange:i,id:"email",type:"text",label:"Email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email"}),Object(n.jsx)(d,{value:l.tel,valid:l.telValid,onChange:i,id:"tel",type:"tel",label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(n.jsx)(j,{value:l.lang,onChange:s,id:"lang",label:"\u042f\u0437\u044b\u043a",placeholder:"\u042f\u0437\u044b\u043a",options:v}),Object(n.jsx)(o,{checked:l.rules,onChange:c}),Object(n.jsx)(m,{text:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",disabled:!u})]})})};var O=function(){var e=Object(l.useState)({}),t=Object(u.a)(e,2),a=t[0],i=t[1];return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)("main",{className:"main",children:Object(n.jsx)(_,{handleSubmit:function(e,t){e.preventDefault(),i({name:t.name,email:t.email,tel:t.tel,lang:t.lang,rules:t.rules})}})}),a.name&&Object(n.jsxs)("div",{className:"result",children:[Object(n.jsxs)("p",{children:["Name: ",a.name]}),Object(n.jsxs)("p",{children:["Email: ",a.email]}),Object(n.jsxs)("p",{children:["Tel: ",a.tel]}),Object(n.jsxs)("p",{children:["Languge: ",a.lang]})]})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),l(e),i(e),s(e)}))};c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.cfb96217.chunk.js.map