"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[951],{2609:function(n,e,t){t.d(e,{o:function(){return a}});var r,o=t(168),c=(t(2791),t(3081)),i=t(184);e.Z=function(n){var e=n.onClick;return(0,i.jsx)(a,{type:"click",onClick:e,children:"Go back"})};var a=c.Z.button(r||(r=(0,o.Z)(["\ndisplay: block;\n  margin-bottom: ",";\n  padding: "," ",";\n  border: none;\n  outline: none;\n  border-radius: ",";\n  cursor: pointer;\n  font-size: ",";\n  font-weight: 700;\n  background-color: ",";\n  color: ",";\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}))},9951:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r,o,c,i,a=t(9439),u=t(2791),s=t(1087),l=t(7689),f=t(5705),h=t(4390),p=t(954),m=t(168),d=t(3081),g=t(2609),v=(0,d.Z)(g.o)(r||(r=(0,m.Z)(["\ndisplay: inline;\n  margin-left: ",";\n"])),(function(n){return n.theme.spacing(1)})),y=(0,d.Z)(f.gN)(o||(o=(0,m.Z)(["\n  width: 50%;\n  font-size: ",";\n  outline: none;\n  padding-left: ",";\n  padding-right: ",";\n  ::placeholder {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(3.5)})),k=d.Z.li(c||(c=(0,m.Z)(["\n  list-style: none;\n  :not(:last-child) {\n    ",";\n  }\n"])),(function(n){return n.theme.spacing(1)})),Z=(0,d.Z)(s.OL)(i||(i=(0,m.Z)(["\n  font-family: Raleway, sans-serif;\n  font-weight: 500;\n  font-size: ",";\n  line-height: 1.2;\n  color: ",";\n  text-decoration: none;\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.focusColor})),b=t(184),x=function(){var n=(0,u.useState)(null),e=(0,a.Z)(n,2),t=e[0],r=e[1],o=(0,u.useState)(!1),c=(0,a.Z)(o,2),i=c[0],m=c[1],d=(0,l.TH)(),g=(0,l.s0)(),x=(0,s.lr)(),w=(0,a.Z)(x,1)[0].get("query"),_=function(n){m(!0),h.XT(n).then((function(n){n&&(r(n.data.results),m(!1))}))};(0,u.useEffect)((function(){w&&_(w)}),[w]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.J9,{initialValues:{query:""},onSubmit:function(n,e){var t=e.resetForm;_(n.query),g({search:"?query=".concat(n.query)}),t()},children:(0,b.jsxs)(f.l0,{children:[(0,b.jsx)(y,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films"}),(0,b.jsx)(v,{type:"submit",children:"Search"})]})}),i&&(0,b.jsx)(p.$,{}),t&&(0,b.jsx)("ul",{children:t.map((function(n){return(0,b.jsx)(k,{children:(0,b.jsxs)(Z,{to:"/movies/".concat(n.id),state:{from:d,search:w},children:[n.title," (",n.release_date.slice(0,4),")"]})},n.id)}))})]})}},4390:function(n,e,t){t.d(e,{IQ:function(){return d},Jh:function(){return f},TP:function(){return h},XT:function(){return m},e2:function(){return p}});var r=t(5861),o=t(4687),c=t.n(o),i=t(3263),a=t(9014),u="https://api.themoviedb.org/",s="59483ef1407ef779ba79a4ef6c1e5236",l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get(e);case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),a.ZP.error("Sorry, We don`t have this film`s information");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(n){var e="".concat(u,"3/movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1");return l(e)},h=function(n){var e="".concat(u,"3/movie/").concat(n,"?api_key=").concat(s,"&language=en-US&page=1");return l(e)},p=function(){var n="".concat(u,"3/trending/all/day?api_key=").concat(s);return l(n)},m=function(n){var e="".concat(u,"3/search/movie?api_key=").concat(s,"&query=").concat(n,"&language=en-US&page=1&include_adult=false");return l(e)},d=function(n){var e="".concat(u,"3/movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US");return l(e)}}}]);
//# sourceMappingURL=951.9f58d6bb.chunk.js.map