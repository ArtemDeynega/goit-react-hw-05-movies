"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[236],{4584:function(n,t,r){r.d(t,{W:function(){return i}});var e,a=r(168),c=r(1223).Z.div(e||(e=(0,a.Z)(["\n  margin: 0 auto;\n  max-width: 1200px;\n"]))),u=r(184),i=function(n){var t=n.children;return(0,u.jsx)(c,{children:t})}},2338:function(n,t,r){r.r(t),r.d(t,{default:function(){return k}});var e,a,c,u=r(4584),i=r(5861),s=r(885),o=r(7757),f=r.n(o),p=r(2791),d=r(6871),l=r(8350),h=r(7025),v=r(168),x=r(1223),m=x.Z.li(e||(e=(0,v.Z)(["\n  border-bottom: solid black;\n  padding-bottom: 8px;\n  margin-bottom: 14px;\n"]))),w=x.Z.ul(a||(a=(0,v.Z)(["\n  margin-top: 20px;\n"]))),g=x.Z.img(c||(c=(0,v.Z)(["\n  margin-top: 4px;\n  width: 40px;\n"]))),b=r(184),Z=function(n){var t=n.reviews;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(w,{children:t.map((function(n){var t=n.id,r=n.content,e=n.author;return(0,b.jsxs)(m,{children:[(0,b.jsxs)("h4",{children:["Author name: ",e]}),(0,b.jsx)(g,{src:h,alt:"author"}),(0,b.jsx)("p",{children:r})]},t)}))})})},k=function(){var n=function(){var n=(0,d.UO)().movieId,t=(0,p.useState)(null),r=(0,s.Z)(t,2),e=r[0],a=r[1],c=(0,p.useState)(null),u=(0,s.Z)(c,2)[1];return(0,p.useEffect)((function(){var t=function(){var t=(0,i.Z)(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.tx)(n).then((function(n){0!==n.length&&n.length>0&&a(n)}));case 3:t.next=9;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0.message),u(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),e}();return(0,b.jsx)(u.W,{children:n?(0,b.jsx)(Z,{reviews:n}):(0,b.jsx)("p",{children:"\u041e\u0442\u0437\u044b\u0432\u043e\u0432 \u0435\u0449\u0435 \u043d\u0435\u0442 :("})})}},8350:function(n,t,r){r.d(t,{Df:function(){return l},V0:function(){return h},TP:function(){return v},zv:function(){return x},tx:function(){return m}});var e=r(5861),a=r(7757),c=r.n(a),u=r(4569).default,i="https://api.themoviedb.org/3/",s="6ec0852e53b9bedf7516e9964c7fa3f3",o="trending",f="movie",p="search",d=u.create({baseURL:i,params:{api_key:s,language:"en-US"}}),l=function(){var n=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d("".concat(o,"/").concat(f,"/day?"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d("".concat(p,"/").concat(f,"?include_adult=false&query=").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d("".concat(f,"/").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d("".concat(f,"/").concat(t,"/credits"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d("".concat(f,"/").concat(t,"/reviews?page=1"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7025:function(n,t,r){n.exports=r.p+"static/media/user-anonim.f2391c217a0a57aa197b.jpeg"}}]);
//# sourceMappingURL=movie-reviews-lazy.11d91648.chunk.js.map