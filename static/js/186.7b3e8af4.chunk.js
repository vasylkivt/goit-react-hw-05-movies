"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(e,t,r){r.r(t);var n=r(165),a=r(861),c=r(439),u=r(791),i=r(689),s=r(419),o=r(184);t.default=function(){var e=(0,i.UO)().movieId,t=(0,u.useState)(),r=(0,c.Z)(t,2),p=r[0],v=r[1];return(0,u.useEffect)((function(){if(e){var t=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.z.getMovieReviewsByMovieId(e);case 2:r=t.sent,v(r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[e]),(0,o.jsx)(o.Fragment,{children:p&&(0,o.jsx)("div",{children:p.map((function(e){var t=e.author,r=e.content,n=e.id;return(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:["Author: ",t]}),(0,o.jsxs)("p",{children:["Desk:",r," "]})]},n)}))})})}},419:function(e,t,r){r.d(t,{z:function(){return f}});var n=r(165),a=r(861),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="267e0ef2e56c2254d403c0d4ffe19052",i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/".concat(t,"?api_key=").concat(u));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(u));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f={getTrendMovieByParam:i,getMovieByMovieId:s,getMovieReviewsByMovieId:p,getMovieCastByMovieId:o,searchMovieByQuery:v}}}]);
//# sourceMappingURL=186.7b3e8af4.chunk.js.map