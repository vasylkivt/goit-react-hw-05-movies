"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{9544:function(e,t,n){n.r(t);var r=n(4165),a=n(5861),c=n(9439),u=n(2549),s=n(2791),i=n(419),o=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,c.Z)(e,2),n=t[0],p=t[1],f=(0,s.useState)(!1),v=(0,c.Z)(f,2),g=v[0],d=v[1],l=(0,s.useState)(!1),Z=(0,c.Z)(l,2),h=Z[0],m=Z[1];return(0,s.useEffect)((function(){var e=new AbortController,t=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),t.prev=1,t.next=4,i.z.getTrendMovieByParam("day",e);case 4:n=t.sent,p(n),d(!1),m(!1),t.next=16;break;case 10:if(t.prev=10,t.t0=t.catch(1),"canceled"!==t.t0.message){t.next=14;break}return t.abrupt("return");case 14:d(t.t0.message),m(!1);case 16:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){return e.abort()}}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(u.P_,{$marginBottom:"25px",children:[!g&&"In trend Today",g&&"\u274c Something went wrong - ".concat(g)]}),!h&&(0,o.jsx)(u.eW,{movies:n}),h&&(0,o.jsx)(u.hT,{})]})}},419:function(e,t,n){n.d(t,{z:function(){return v}});var r=n(4165),a=n(5861),c=n(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="267e0ef2e56c2254d403c0d4ffe19052",s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/".concat(t,"?api_key=").concat(u),{signal:n.signal});case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(u),{signal:n.signal});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u),{signal:n.signal});case 2:return a=e.sent,e.abrupt("return",a.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u),{signal:n.signal});case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(t,"&page=").concat(n),{signal:a.signal});case 2:return s=e.sent,e.abrupt("return",s.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),v={getTrendMovieByParam:s,getMovieByMovieId:i,getMovieReviewsByMovieId:p,getMovieCastByMovieId:o,searchMovieByQuery:f}}}]);
//# sourceMappingURL=544.a00e23b4.chunk.js.map