"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[278],{9278:function(e,t,n){n.r(t);var r=n(3433),a=n(4165),c=n(5861),o=n(9439),s=n(9788),u=n(2791),i=n(1087),f=n(419),l=n(184);t.default=function(){var e,t=(0,u.useState)([]),n=(0,o.Z)(t,2),p=n[0],v=n[1],g=(0,u.useState)(!1),d=(0,o.Z)(g,2),h=d[0],Z=d[1],m=(0,u.useState)(!1),x=(0,o.Z)(m,2),w=x[0],y=x[1],k=(0,u.useState)(!1),b=(0,o.Z)(k,2),_=b[0],M=b[1],B=(0,u.useState)(1),j=(0,o.Z)(B,2),S=j[0],C=j[1],P=(0,u.useState)(!1),z=(0,o.Z)(P,2),E=z[0],I=z[1],L=(0,i.lr)(),T=(0,o.Z)(L,2),$=T[0],q=T[1],R=null!==(e=$.get("query"))&&void 0!==e?e:"",A=(0,u.useRef)();(0,u.useEffect)((function(){if(!R){var e=new AbortController,t=function(){var t=(0,c.Z)((0,a.Z)().mark((function t(){var n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!0),t.prev=1,t.next=4,f.z.getTrendMovieByParam("week",e);case 4:n=t.sent,v(n),Z(!1),y(!1),t.next=16;break;case 10:if(t.prev=10,t.t0=t.catch(1),"canceled"!==t.t0.message){t.next=14;break}return t.abrupt("return");case 14:Z(t.t0.message),y(!1);case 16:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){return e.abort()}}}),[R]),(0,u.useEffect)((function(){if(R){1===S&&(v([]),y(!0));var e=new AbortController,t=function(){var t=(0,c.Z)((0,a.Z)().mark((function t(){var n,c,o,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,M(!0),t.next=4,f.z.searchMovieByQuery(R,S,e);case 4:n=t.sent,c=n.total_pages,o=n.results,s=n.page,console.log("response:",o),v((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(o))})),I(s<c),Z(!1),M(!1),y(!1),t.next=22;break;case 16:if(t.prev=16,t.t0=t.catch(0),"canceled"!==t.t0.message){t.next=20;break}return t.abrupt("return");case 20:Z(t.t0.message),M(!1);case 22:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){return e.abort()}}}),[S,R]),(0,u.useEffect)((function(){var e;1!==S&&window.scrollBy({top:(null===(e=A.current)||void 0===e?void 0:e.scrollHeight)||0,behavior:"smooth"})}),[S,p]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.E1,{onSubmit:function(e){q(""!==e?{query:e}:{})}}),!w&&!h&&!R&&(0,l.jsx)(s.P_,{$marginBottom:"25px",children:"In this week's trend"}),!w&&!h&&R&&0!==(null===p||void 0===p?void 0:p.length)&&(0,l.jsx)(s.P_,{$marginBottom:"25px",children:"Movies by result '".concat(R,"'")}),(0,l.jsx)(s.P_,{$marginBottom:"25px",children:!w&&!h&&0===(null===p||void 0===p?void 0:p.length)&&R&&"Sorry. There are no movies by result '".concat(R,"' ... \ud83d\ude2d  ")}),h&&(0,l.jsxs)(s.P_,{children:[" ","\u274c Something went wrong - ".concat(h)]}),!w&&(0,l.jsx)(s.eW,{ref:A,movies:p}),w&&(0,l.jsx)(s.hT,{}),E&&R&&(0,l.jsx)(s.zx,{onClick:function(){console.log("click"),C(S+1)},$marginLeft:"auto",children:_?"Loading...":"Load More"})]})}},419:function(e,t,n){n.d(t,{z:function(){return p}});var r=n(4165),a=n(5861),c=n(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="267e0ef2e56c2254d403c0d4ffe19052",s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/".concat(t,"?api_key=").concat(o),{signal:n.signal});case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(o),{signal:n.signal});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o),{signal:n.signal});case 2:return a=e.sent,e.abrupt("return",a.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o),{signal:n.signal});case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(o,"&query=").concat(t,"&page=").concat(n),{signal:a.signal});case 2:return s=e.sent,e.abrupt("return",s.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p={getTrendMovieByParam:s,getMovieByMovieId:u,getMovieReviewsByMovieId:f,getMovieCastByMovieId:i,searchMovieByQuery:l}}}]);
//# sourceMappingURL=278.81a9ec1e.chunk.js.map