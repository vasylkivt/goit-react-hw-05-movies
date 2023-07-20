"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[767],{767:function(n,e,r){r.r(e),r.d(e,{default:function(){return T}});var t,a,c,i,o,s,u,p,l,d,v=r(165),f=r(861),h=r(439),g=r(3),Z=r(524),x=r(791),m=r(689),w=r(419),b=r(768),y=r(216),k=r(168),_=r(867),j=_.ZP.ul(t||(t=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  padding: 30px;\n  border-radius: 10px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.backgroundColorDark})),P=_.ZP.li(a||(a=(0,k.Z)([""]))),M=_.ZP.div(c||(c=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-radius: 10px;\n  padding: 5px;\n  margin-bottom: 10px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.backgroundColorLight})),C=_.ZP.img(i||(i=(0,k.Z)(["\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  object-fit: cover;\n"]))),B=_.ZP.div(o||(o=(0,k.Z)([""]))),I=_.ZP.p(s||(s=(0,k.Z)([""]))),R=_.ZP.p(u||(u=(0,k.Z)([""]))),S=_.ZP.div(p||(p=(0,k.Z)([""]))),L=_.ZP.p(l||(l=(0,k.Z)(["\n  margin-bottom: 5px;\n  color: ",";\n"])),(function(n){return n.theme.colors.textColorLight})),z=_.ZP.p(d||(d=(0,k.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.yellow})),A=r(184),T=function(){var n=(0,m.UO)().movieId,e=(0,x.useState)(),r=(0,h.Z)(e,2),t=r[0],a=r[1],c=(0,x.useState)(!1),i=(0,h.Z)(c,2),o=i[0],s=i[1];return(0,x.useEffect)((function(){if(n){var e=new AbortController,r=function(){var r=(0,f.Z)((0,v.Z)().mark((function r(){var t;return(0,v.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,w.z.getMovieReviewsByMovieId(n,e);case 3:t=r.sent,a(t),s(!1),r.next=13;break;case 8:if(r.prev=8,r.t0=r.catch(0),"canceled"!==r.t0.message){r.next=12;break}return r.abrupt("return");case 12:s(r.t0.message);case 13:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}();return r(),function(){return e.abort()}}}),[n]),(0,A.jsxs)(A.Fragment,{children:[t&&(0,A.jsx)(j,{children:t.map((function(n){var e=n.content,r=n.id,t=n.updated_at,a=n.author_details,c=a.rating,i=a.name,o=a.avatar_path,s=null!==o&&void 0!==o&&o.includes("https")?b:o?"".concat(Z.b).concat(o):b;return(0,A.jsxs)(P,{children:[(0,A.jsxs)(M,{children:[(0,A.jsx)(C,{src:s,alt:""}),(0,A.jsxs)(B,{children:[(0,A.jsxs)(I,{children:["Author: ",i]}),(0,A.jsxs)(R,{children:["Rating: ",c]})]})]}),(0,A.jsxs)(S,{children:[(0,A.jsxs)(L,{children:[e," "]}),(0,A.jsx)(z,{children:(0,y.p)(t)})]})]},r)}))}),(0,A.jsxs)(g.P_,{children:[!o&&0===(null===t||void 0===t?void 0:t.length)&&"Sorry. There are no reviews... \ud83d\ude2d. You can view the cast \ud83d\ude0e. ",o&&"\u274c Something went wrong - ".concat(o)]})]})}},419:function(n,e,r){r.d(e,{z:function(){return d}});var t=r(165),a=r(861),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="267e0ef2e56c2254d403c0d4ffe19052",o=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/".concat(e,"?api_key=").concat(i),{signal:r.signal});case 2:return a=n.sent,n.abrupt("return",a.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(i),{signal:r.signal});case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i),{signal:r.signal});case 2:return a=n.sent,n.abrupt("return",a.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i),{signal:r.signal});case 2:return a=n.sent,n.abrupt("return",a.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(e),{signal:r.signal});case 2:return a=n.sent,n.abrupt("return",a.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),d={getTrendMovieByParam:o,getMovieByMovieId:s,getMovieReviewsByMovieId:p,getMovieCastByMovieId:u,searchMovieByQuery:l}}}]);
//# sourceMappingURL=767.aa38f1c8.chunk.js.map