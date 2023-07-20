"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[278],{278:function(e,t,r){r.r(t);var n=r(165),a=r(861),c=r(439),u=r(3),s=r(791),i=r(87),o=r(419),f=r(184);t.default=function(){var e,t=(0,s.useState)([]),r=(0,c.Z)(t,2),p=r[0],v=r[1],l=(0,s.useState)(!1),d=(0,c.Z)(l,2),g=d[0],h=d[1],m=(0,i.lr)(),Z=(0,c.Z)(m,2),x=Z[0],y=Z[1],w=null!==(e=x.get("query"))&&void 0!==e?e:"";return(0,s.useEffect)((function(){if(!w){var e=new AbortController,t=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.z.getTrendMovieByParam("week",e);case 3:r=t.sent,v(r),h(!1),t.next=13;break;case 8:if(t.prev=8,t.t0=t.catch(0),"canceled"!==t.t0.message){t.next=12;break}return t.abrupt("return");case 12:h(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){return e.abort()}}}),[w]),(0,s.useEffect)((function(){if(w){var e=new AbortController,t=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.z.searchMovieByQuery(w,e);case 3:r=t.sent,v(r),h(!1),t.next=13;break;case 8:if(t.prev=8,t.t0=t.catch(0),"canceled"!==t.t0.message){t.next=12;break}return t.abrupt("return");case 12:h(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){return e.abort()}}}),[w]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.E1,{onSubmit:function(e){y(""!==e?{query:e}:{})}}),!g&&!w&&(0,f.jsx)(u.P_,{$marginBottom:"25px",children:"In this week's trend"}),!g&&w&&0!==(null===p||void 0===p?void 0:p.length)&&(0,f.jsx)(u.P_,{$marginBottom:"25px",children:"Movies by result '".concat(w,"'")}),(0,f.jsx)(u.P_,{$marginBottom:"25px",children:!g&&0===(null===p||void 0===p?void 0:p.length)&&w&&"Sorry. There are no movies by result '".concat(w,"' ... \ud83d\ude2d  ")}),g&&(0,f.jsxs)(u.P_,{children:[" ","\u274c Something went wrong - ".concat(g)]}),(0,f.jsx)(u.eW,{movies:p})]})}},419:function(e,t,r){r.d(t,{z:function(){return v}});var n=r(165),a=r(861),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="267e0ef2e56c2254d403c0d4ffe19052",s=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/".concat(t,"?api_key=").concat(u),{signal:r.signal});case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(u),{signal:r.signal});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u),{signal:r.signal});case 2:return a=e.sent,e.abrupt("return",a.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u),{signal:r.signal});case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(t),{signal:r.signal});case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),v={getTrendMovieByParam:s,getMovieByMovieId:i,getMovieReviewsByMovieId:f,getMovieCastByMovieId:o,searchMovieByQuery:p}}}]);
//# sourceMappingURL=278.419f2726.chunk.js.map