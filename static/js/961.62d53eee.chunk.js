"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[961],{961:function(e,t,n){n.r(t),n.d(t,{BtnWrap:function(){return g}});var r,a=n(168),c=n(165),s=n(861),i=n(439),u=n(3),o=n(867),p=n(791),v=n(689),f=n(87),l=n(419),d=n(184),g=o.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  gap: 30px;\n  margin-bottom: 30px;\n"])));t.default=function(){var e,t,n=(0,v.UO)().movieId,r=(0,v.TH)(),a=(0,p.useRef)(null!==(e=null===(t=r.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),o=(0,p.useState)(),h=(0,i.Z)(o,2),x=h[0],Z=h[1],m=(0,p.useState)(!1),w=(0,i.Z)(m,2),y=w[0],k=w[1];return(0,p.useEffect)((function(){if(n){var e=new AbortController,t=function(){var t=(0,s.Z)((0,c.Z)().mark((function t(){var r;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.z.getMovieByMovieId(n,e);case 3:r=t.sent,Z(r),k(!1),t.next=13;break;case 8:if(t.prev=8,t.t0=t.catch(0),"canceled"!==t.t0.message){t.next=12;break}return t.abrupt("return");case 12:k(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){return e.abort()}}}),[n]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f.rU,{to:a.current,children:(0,d.jsx)(u.zx,{$marginBottom:"20px",children:"Back"})}),x&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u.UA,{movie:x}),(0,d.jsxs)(g,{children:[(0,d.jsx)(f.rU,{to:"cast",children:(0,d.jsx)(u.zx,{children:"Cast"})}),(0,d.jsx)(f.rU,{to:"reviews",children:(0,d.jsx)(u.zx,{children:"Reviews"})})]}),(0,d.jsx)(p.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading subpage..."}),children:(0,d.jsx)(v.j3,{})})]}),y&&(0,d.jsx)(u.P_,{children:"\u274c Something went wrong - ".concat(y)})]})}},419:function(e,t,n){n.d(t,{z:function(){return f}});var r=n(165),a=n(861),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="267e0ef2e56c2254d403c0d4ffe19052",i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/".concat(t,"?api_key=").concat(s),{signal:n.signal});case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(s),{signal:n.signal});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s),{signal:n.signal});case 2:return a=e.sent,e.abrupt("return",a.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s),{signal:n.signal});case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(t),{signal:n.signal});case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f={getTrendMovieByParam:i,getMovieByMovieId:u,getMovieReviewsByMovieId:p,getMovieCastByMovieId:o,searchMovieByQuery:v}}}]);
//# sourceMappingURL=961.62d53eee.chunk.js.map