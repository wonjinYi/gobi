(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{88:function(e,n,t){},89:function(e,n,t){"use strict";t.r(n);var r=t(6),o=t(0),a=t.n(o),c=t(10),i=t.n(c),s=t(15),l=t(17),u=t(16),d=t(51),j=t.n(d),b=t(41),p=t(35),f=t(122),m=t(136),O=t(137),h=t(134);function x(){var e=Object(s.a)(["\n    display : flex;\n    flex-direction : column;\n    justify-content : center;\n    align-items : center;\n\n    border-radius : 5px;\n    color : white;\n\n    @media(max-width : 768px){\n        width : 90%;\n        max-width : 90%;\n    }\n"]);return x=function(){return e},e}function v(e){var n=e.passUserSettings,t=Object(o.useState)({forDiscord:!0,snowstorm:!0,autoCopy:!0}),a=Object(l.a)(t,2),c=a[0],i=a[1];Object(o.useEffect)((function(){console.log(c),n(c)}));var s=function(e){i(Object(p.a)(Object(p.a)({},c),{},Object(b.a)({},e.target.name,e.target.checked)))};return Object(r.jsx)(g,{className:"UserSetting",children:Object(r.jsxs)(f.a,{children:[Object(r.jsx)(h.a,{title:"Generate Output up to 2000 characters",placement:"left",children:Object(r.jsx)(m.a,{control:Object(r.jsx)(O.a,{checked:c.forDiscord,onChange:s,name:"forDiscord",color:"primary"}),label:"For Discord",labelPlacement:"start"})}),Object(r.jsx)(h.a,{title:"Stoooooooorrrrrrrrm",placement:"left",children:Object(r.jsx)(m.a,{control:Object(r.jsx)(O.a,{checked:c.snowstorm,onChange:s,name:"snowstorm",color:"primary"}),label:"Snow Storm",labelPlacement:"start"})}),Object(r.jsx)(h.a,{title:"Copy automatically without click [Do Copy]",placement:"left",children:Object(r.jsx)(m.a,{control:Object(r.jsx)(O.a,{checked:c.autoCopy,onChange:s,name:"autoCopy",color:"primary"}),label:"Auto Copy",labelPlacement:"start"})})]})})}var g=u.a.div(x()),w=t(56),y=t.n(w),C=t(130),k=t(131),S=t(129),N=t(135),D=t(132);function I(){var e=Object(s.a)(["\n    display : flex;\n    flex-direction : column;\n    \n    padding : 1rem;\n    margin : 1rem;\n    \n    background-color : rgba(255,255,255,0.1);\n    border-radius : 5px;\n\n    @media(max-width : 768px){\n        width : 95%;\n        max-width : 95%;\n    }\n"]);return I=function(){return e},e}var T=function(e,n,t,r,o){return n=parseInt(n),console.log("text : ".concat(e," ").concat(typeof n,"/ reps : ").concat(n," ").concat(typeof n)),""===e||""===n?(console.warn("[Validate Issue] Empty input : InputSection.js"),void o(!0)):Number.isNaN(n)?(console.warn("[Validate Issue] reps is NaN : InputSection.js"),void o(!0)):(t(e),void r(n))};function E(e){var n=e.passText,t=e.passReps,a=B(),c=Object(o.useState)(""),i=Object(l.a)(c,2),s=i[0],u=i[1],d=Object(o.useState)(""),j=Object(l.a)(d,2),b=j[0],p=j[1],f=Object(o.useState)(!1),m=Object(l.a)(f,2),O=m[0],h=m[1];return Object(r.jsxs)(P,{children:[Object(r.jsx)(k.a,{id:"text-input",className:a.textfield,inputProps:{className:a.input},label:"Text",onChange:function(e){u(e.target.value)},onKeyPress:function(e){"Enter"==e.key&&T(s,b,n,t,h)}}),Object(r.jsx)(k.a,{id:"reps-input",className:a.textfield,inputProps:{className:a.input},label:"Reps",onChange:function(e){p(e.target.value)},onKeyPress:function(e){"Enter"==e.key&&T(s,b,n,t,h)}}),Object(r.jsx)(S.a,{variant:"contained",className:a.button,onClick:function(e){T(s,b,n,t,h)},children:"DO REPEAT"}),Object(r.jsx)(N.a,{open:O,autoHideDuration:3e3,anchorOrigin:{vertical:"bottom",horizontal:"left"},onClose:function(){h(!1)},children:Object(r.jsx)(D.a,{elevation:6,variant:"filled",severity:"error",onClose:function(){h(!1)},children:"Please check your Input"})}),Object(r.jsx)(y.a,{handleKeys:["enter"],onKeyEvent:function(e,r){T(s,b,n,t,h)}})]})}var P=u.a.div(I()),B=Object(C.a)({root:{},textfield:{padding:"0.5rem",color:"white","& label":{color:"white"},"& label.Mui-focused":{color:"white"},"& .MuiInput-underline:before":{borderBottom:"none"},"& .MuiInput-underline:hover::before":{borderBottomColor:"white"},"& .MuiInput-underline:after":{borderBottomColor:"white"}},input:{color:"white"},button:{marginTop:"0.5rem",marginBottom:"0.5rem"}}),M=t(57);function R(){var e=Object(s.a)(["\n    color : black;\n    \n    word-break: break-all;\n    overflow-wrap: break-word; \n"]);return R=function(){return e},e}function K(){var e=Object(s.a)(["\n    display : inherit;\n    justify-content : center;\n\n    background-color : white;\n    border-radius : 5px;\n\n    margin-top : 0.5rem;\n    margin-bottom : 0.5rem;\n\n    padding-left : 0.5rem;\n    padding-right : 0.5rem;\n"]);return K=function(){return e},e}function z(){var e=Object(s.a)(["\n    display : flex;\n    flex-direction : column;\n\n    padding : 1rem;\n    margin : 1rem;\n\n    background-color : rgba(255,255,255,0.1);\n    border-radius : 5px;\n\n    @media(max-width : 768px){\n        max-width : 95%;\n        width : 95%;\n    }\n"]);return z=function(){return e},e}function A(e){var n=e.text,t=e.reps,a=e.forDiscord,c=e.autoCopy,i=Object(o.useState)(!1),s=Object(l.a)(i,2),u=s[0],d=s[1],j=Object(o.useState)(""),b=Object(l.a)(j,2),p=b[0],f=b[1],m=J(n,t,a,2e3),O=H();return Object(o.useEffect)((function(){c&&(U(m.length,d,f),navigator.clipboard.writeText(m))}),[c,m.length]),Object(r.jsxs)(Y,{children:[Object(r.jsx)(M.CopyToClipboard,{text:m,children:Object(r.jsx)(S.a,{variant:"contained",className:O.button,onClick:function(){U(m.length,d,f)},children:"COPY IT"})}),Object(r.jsx)(N.a,{open:u,autoHideDuration:3e3,anchorOrigin:{vertical:"bottom",horizontal:"left"},onClose:function(){V(d)},children:Object(r.jsx)(G,{severity:p,onClose:function(){V(d)},children:"info"===p?"Copied!":"There is no content"})}),Object(r.jsx)(F,{children:Object(r.jsx)(L,{children:m})})]})}var J=function(e,n,t,r){for(var o="",a=0;a<n;a++)if(o+=e,t&&o.length>r){o=o.slice(0,2e3);break}return o},U=function(e,n,t){e>0?(console.log("copied"),t("info")):(console.warn("[Validate Issue] The result is Empty String : OutputSection.js"),t("warning")),n(!0)},V=function(e){e(!1)};function G(e){return Object(r.jsx)(D.a,Object(p.a)({elevation:6,variant:"filled"},e))}var H=Object(C.a)({button:{marginTop:"0.5rem",marginBottom:"0.5rem"}}),Y=u.a.div(z()),F=u.a.div(K()),L=u.a.p(R());function W(){var e=Object(s.a)(["\n    font-size : 50px;\n"]);return W=function(){return e},e}function q(){var e=Object(s.a)(["\n"]);return q=function(){return e},e}function Q(){var e=Object(s.a)(["\n    display : inherit;\n    flex-direction : column;\n    justify-content : center;\n    align-items : center;\n    \n    @media(max-width : 768px){\n        max-width : 90%;\n        width : 90%;\n    }\n"]);return Q=function(){return e},e}function X(){var e=Object(s.a)(["\n    display : inherit;\n"]);return X=function(){return e},e}function Z(){var e=Object(s.a)(["\n    display : flex;\n    flex-direction : column;\n    justify-content : center;\n    align-items : center;\n\n    color : white;\n    \n"]);return Z=function(){return e},e}function $(){var e=Object(o.useState)(""),n=Object(l.a)(e,2),t=n[0],a=n[1],c=Object(o.useState)(0),i=Object(l.a)(c,2),s=i[0],u=i[1],d=Object(o.useState)({forDiscord:!0,snowstorm:!0,autoCopy:!0}),b=Object(l.a)(d,2),p=b[0],f=b[1];return Object(r.jsxs)(_,{className:"App",children:[Object(r.jsx)(ee,{children:Object(r.jsx)(re,{children:"RepeJin"})}),Object(r.jsx)(v,{passUserSettings:f}),Object(r.jsxs)(ne,{children:[Object(r.jsx)(E,{passText:a,passReps:u}),Object(r.jsx)(A,{text:t,reps:s,forDiscord:p.forDiscord,autoCopy:p.autoCopy})]}),Object(r.jsx)(te,{children:"Wonjin Yi"}),p.snowstorm?Object(r.jsx)(j.a,{excludeMobile:!1}):""]})}var _=u.a.div(Z()),ee=u.a.div(X()),ne=u.a.div(Q()),te=u.a.div(q()),re=u.a.h1(W());t(88);i.a.render(Object(r.jsxs)(a.a.StrictMode,{children:[Object(r.jsx)("a",{href:"https://lab.wonj.in/",className:"wonjinlab-link",children:"Go to wonjinLab"}),Object(r.jsx)($,{})]}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.ce7c5e29.chunk.js.map