"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[609],{2609:function(n,e,t){t.d(e,{o:function(){return a}});var r,o=t(168),i=(t(2791),t(3081)),c=t(184);e.Z=function(n){var e=n.onClick;return(0,c.jsx)(a,{type:"click",onClick:e,children:"Go back"})};var a=i.Z.button(r||(r=(0,o.Z)(["\ndisplay: block;\n  margin-bottom: ",";\n  padding: "," ",";\n  border: none;\n  outline: none;\n  border-radius: ",";\n  cursor: pointer;\n  font-size: ",";\n  font-weight: 700;\n  background-color: ",";\n  color: ",";\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}))},6609:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,o,i,c,a,u,s,l=t(9439),f=t(2791),h=t(4390),d=t(168),m=t(3081),g=t(1087),p=m.Z.p(r||(r=(0,d.Z)(["\n  font-family: Raleway, sans-serif;\n  font-weight: 500;\n  font-size: ",";\n  line-height: 1.2;\n  color: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.spacing(2)})),v=m.Z.h3(o||(o=(0,d.Z)(["\n  font-family: Raleway, sans-serif;\n  font-weight: 700;\n  font-size: ",";\n  line-height: 1.2;\n  color: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.titleColor}),(function(n){return n.theme.spacing(1)})),x=m.Z.img(i||(i=(0,d.Z)(["\n  width: ",";\n"])),(function(n){return n.theme.spacing(64)})),j=m.Z.span(c||(c=(0,d.Z)(["\n  :not(:last-child) {\n    padding-right: ",";\n  }\n"])),(function(n){return n.theme.spacing(2)})),Z=m.Z.div(a||(a=(0,d.Z)(["\n  display: flex;\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(3)})),k=m.Z.div(u||(u=(0,d.Z)(["\n  padding: ",";\n"])),(function(n){return n.theme.spacing(4)})),w=(0,m.Z)(g.OL)(s||(s=(0,d.Z)(["\n  display: block;\n  font-family: Raleway, sans-serif;\n  font-weight: 500;\n  font-size: ",";\n  line-height: 1.2;\n  text-decoration: none;\n  color: ",";\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.focusColor})),y=t(954),b=t(7689),_=t(2609),C=t(184),S=function(){var n=(0,b.UO)().movieId,e=(0,f.useState)(null),t=(0,l.Z)(e,2),r=t[0],o=t[1],i=(0,b.s0)(),c=(0,b.TH)();return(0,f.useEffect)((function(){h.TP(n).then((function(n){n?o(n.data):setTimeout((function(){i("/")}),3e3)}))}),[c,n,i]),(0,C.jsxs)(C.Fragment,{children:[r?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(_.Z,{onClick:function(){var n,e;i(null!==(n=null===c||void 0===c||null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")}}),(0,C.jsxs)(Z,{children:[(0,C.jsx)(x,{src:"https://image.tmdb.org/t/p/original".concat(r.poster_path),alt:r.title}),(0,C.jsxs)(k,{children:[(0,C.jsxs)("h2",{children:[r.title," (",r.release_date.slice(0,4),")"]}),(0,C.jsxs)(p,{children:["User score ",r.vote_average]}),(0,C.jsx)(v,{children:"Overview"}),(0,C.jsx)(p,{children:r.overview}),(0,C.jsx)(v,{children:"Genres"}),(0,C.jsx)(p,{children:r.genres.map((function(n){return(0,C.jsx)(j,{children:n.name},n.id)}))})]})]}),(0,C.jsx)(p,{children:"Additional information"}),(0,C.jsxs)("ul",{children:[(0,C.jsx)(w,{to:"/movies/".concat(n,"/cast"),children:"Cast"}),(0,C.jsx)(w,{to:"/movies/".concat(n,"/reviews"),children:"Reviews"})]})]}):(0,C.jsx)(y.$,{}),(0,C.jsx)(b.j3,{})]})},U=function(){return(0,C.jsx)("div",{children:(0,C.jsx)(S,{})})}},4390:function(n,e,t){t.d(e,{IQ:function(){return g},Jh:function(){return f},TP:function(){return h},XT:function(){return m},e2:function(){return d}});var r=t(5861),o=t(4687),i=t.n(o),c=t(3263),a=t(9014),u="https://api.themoviedb.org/",s="59483ef1407ef779ba79a4ef6c1e5236",l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get(e);case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),a.ZP.error("Sorry, We don`t have this film`s information");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(n){var e="".concat(u,"3/movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1");return l(e)},h=function(n){var e="".concat(u,"3/movie/").concat(n,"?api_key=").concat(s,"&language=en-US&page=1");return l(e)},d=function(){var n="".concat(u,"3/trending/all/day?api_key=").concat(s);return l(n)},m=function(n){var e="".concat(u,"3/search/movie?api_key=").concat(s,"&query=").concat(n,"&language=en-US&page=1&include_adult=false");return l(e)},g=function(n){var e="".concat(u,"3/movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US");return l(e)}}}]);
//# sourceMappingURL=609.864a9622.chunk.js.map