"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[961],{961:function(e,t,r){r.r(t);var n=r(165),a=r(861),c=r(439),s=r(791),i=r(689),u=r(87),o=r(419),p=r(184);t.default=function(){var e,t,r=(0,i.UO)().movieId,v=(0,i.TH)(),l=(0,s.useRef)(null!==(e=null===(t=v.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),d=(0,s.useState)(),f=(0,c.Z)(d,2),h=f[0],g=f[1];return(0,s.useEffect)((function(){if(r){var e=new AbortController,t=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.z.getMovieByMovieId(r,e);case 3:a=t.sent,g(a),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){return e.abort()}}}),[r]),(0,p.jsx)(p.Fragment,{children:h&&(0,p.jsxs)("div",{children:[(0,p.jsx)(u.rU,{to:l.current,children:"Back to "}),(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/original/").concat(h.poster_path),alt:""}),(0,p.jsx)("p",{children:h.title}),(0,p.jsx)("p",{children:h.id}),(0,p.jsx)("p",{children:h.vote_average}),(0,p.jsx)("p",{children:h.vote_count}),(0,p.jsx)("p",{children:h.status}),(0,p.jsx)("p",{children:h.release_date}),(0,p.jsx)("p",{children:h.popularity}),(0,p.jsx)("p",{children:h.homepage}),(0,p.jsx)("p",{children:h.overview})]}),(0,p.jsx)(u.rU,{to:"cast",children:"Cast"}),(0,p.jsx)(u.rU,{to:"reviews",children:"Reviews"}),(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading subpage..."}),children:(0,p.jsx)(i.j3,{})})]})})}},419:function(e,t,r){r.d(t,{z:function(){return l}});var n=r(165),a=r(861),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="267e0ef2e56c2254d403c0d4ffe19052",i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/".concat(t,"?api_key=").concat(s),{signal:r.signal});case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(s),{signal:r.signal});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s),{signal:r.signal});case 2:return a=e.sent,e.abrupt("return",a.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s),{signal:r.signal});case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(t),{signal:r.signal});case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),l={getTrendMovieByParam:i,getMovieByMovieId:u,getMovieReviewsByMovieId:p,getMovieCastByMovieId:o,searchMovieByQuery:v}}}]);
//# sourceMappingURL=961.cff3764a.chunk.js.map