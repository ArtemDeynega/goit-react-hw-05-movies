"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[114],{3850:function(n,t,r){r.r(t),r.d(t,{TrendingTitle:function(){return u},default:function(){return d}});var e,a=r(168),u=r(1223).Z.h1(e||(e=(0,a.Z)(["\n  text-align: center;\n  margin-bottom: 20px;\n"]))),c=r(5861),i=r(885),o=r(7757),s=r.n(o),f=r(2791),p=r(8350),l=r(3904),v=r(184),d=function(){var n=function(){var n=(0,f.useState)(null),t=(0,i.Z)(n,2),r=t[0],e=t[1];return(0,f.useEffect)((function(){var n=function(){var n=(0,c.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.Df)();case 3:return t=n.sent,e(t),n.abrupt("return");case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),r}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u,{children:"Trending today"}),n&&(0,v.jsx)(l.uA,{movies:n})]})}},8350:function(n,t,r){r.d(t,{Df:function(){return v},V0:function(){return d},TP:function(){return h},zv:function(){return m},tx:function(){return x}});var e=r(5861),a=r(7757),u=r.n(a),c=r(4569).default,i="https://api.themoviedb.org/3/",o="6ec0852e53b9bedf7516e9964c7fa3f3",s="trending",f="movie",p="search",l=c.create({baseURL:i,params:{api_key:o,language:"en-US"}}),v=function(){var n=(0,e.Z)(u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l("".concat(s,"/").concat(f,"/day?"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l("".concat(p,"/").concat(f,"?include_adult=false&query=").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l("".concat(f,"/").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l("".concat(f,"/").concat(t,"/credits"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l("".concat(f,"/").concat(t,"/reviews?page=1"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3904:function(n,t,r){r.d(t,{Ei:function(){return l},HC:function(){return v},uA:function(){return s},Dx:function(){return d}});var e,a,u,c=r(501),i=r(6871),o=r(184),s=function(n){var t=n.movies,r=(0,i.TH)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{children:t.map((function(n){var t=n.id,e=n.title,a=n.poster_path;return(0,o.jsx)(v,{children:(0,o.jsxs)(c.rU,{to:"/movies/".concat(t),state:{from:r},children:[(0,o.jsx)(d,{children:e}),(0,o.jsx)(l,{src:"https://image.tmdb.org/t/p/w300/".concat(a),alt:"poster film"})]})},t)}))})})},f=r(168),p=r(1223),l=p.Z.img(e||(e=(0,f.Z)(["\n  width: 200px;\n"]))),v=p.Z.li(a||(a=(0,f.Z)(["\n  margin-bottom: 24px;\n  margin-left: 20px;\n"]))),d=p.Z.h3(u||(u=(0,f.Z)(["\n  margin-bottom: 4px;\n"])))}}]);
//# sourceMappingURL=trending-lazy.ff7dec0b.chunk.js.map