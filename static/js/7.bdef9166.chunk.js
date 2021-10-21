(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[7],{56:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return j}));var a=n(54),i=n.n(a),r=n(55),s=n(60),c=n.n(s).a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"67e32eac52b358cb1bf13e724f501ef6"}}),o=function(e){return c.get("/search/movie",{params:{query:e}})},u=function(){var e=Object(r.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(e){return c.get("/movie/".concat(e),{params:{language:"ru-RU"}})},d=function(e){return c.get("/movie/".concat(e,"/credits"),{params:{language:"ru-RU"}})},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.get("/movie/".concat(e,"/reviews"),{params:{language:"en-EN",page:t}})}},62:function(e,t,n){e.exports={Container:"MovieDetailsPage_Container__36RiI",Image:"MovieDetailsPage_Image__KNDyq",InfoTitle:"MovieDetailsPage_InfoTitle__nKzKL",AdditionalInfo:"MovieDetailsPage_AdditionalInfo__25mdg",Link:"MovieDetailsPage_Link__1zoKJ",CastLink:"MovieDetailsPage_CastLink__16Q7e",ReviewItem:"MovieDetailsPage_ReviewItem__17pFJ",Button:"MovieDetailsPage_Button__WX0Jx"}},96:function(e,t,n){"use strict";n.r(t);var a=n(54),i=n.n(a),r=n(55),s=n(53),c=n(0),o=n(3),u=n(72),l=n(56),d=n(9),j=n(15),v=n(62),b=n.n(v),m=n(1),h=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,93))})),f=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,94))}));t.default=function(){var e=Object(o.g)(),t=Object(o.f)(),n=Object(o.h)().movieId,a=Object(c.useState)(null),v=Object(s.a)(a,2),p=v[0],O=v[1];Object(u.useEffect)((function(){(function(){var e=Object(r.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(l.b)(n);case 3:t=e.sent,a=t.data,O(a),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[n]);return Object(m.jsx)(m.Fragment,{children:p&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{className:b.a.Button,type:"button",onClick:function(){var n;if(null===e||void 0===e||null===(n=e.state)||void 0===n?void 0:n.from){var a=e.state.from;t.push(a)}else t.push("/")},children:"Go back"}),Object(m.jsxs)("div",{className:b.a.Container,children:[Object(m.jsx)("div",{className:b.a.Image,children:Object(m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+p.poster_path,alt:"poster",width:"250"})}),Object(m.jsxs)("section",{className:b.a.Description,children:[Object(m.jsxs)("h2",{className:b.a.Title,children:[p.title," (",p.release_date.slice(0,4),")"]}),Object(m.jsxs)("p",{children:["User Score: ",10*p.vote_average,"%"]}),Object(m.jsx)("h3",{className:b.a.Overview,children:"Overview"}),Object(m.jsx)("span",{children:p.overview}),Object(m.jsx)("h3",{className:b.a.Genres,children:"Genres"}),Object(m.jsx)("span",{children:p.genres.map((function(e){return e.name})).join(" ")})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{className:b.a.InfoTitle,children:"Additional information"}),Object(m.jsxs)("nav",{className:b.a.AdditionalInfo,children:[Object(m.jsxs)(d.c,{to:{pathname:"/movies/".concat(n,"/credits"),state:{from:e.state.from}},className:b.a.Link,children:["Cast"," "]}),Object(m.jsxs)(d.c,{to:{pathname:"/movies/".concat(n,"/reviews"),state:{from:e.state.from}},className:b.a.Link,children:["Reviews"," "]})]})]}),Object(m.jsx)(c.Suspense,{fallback:Object(m.jsx)(j.a,{}),children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/movies/:id/credits",children:Object(m.jsx)(h,{})}),Object(m.jsx)(o.a,{path:"/movies/:id/reviews",children:Object(m.jsx)(f,{})})]})})]})})}}}]);
//# sourceMappingURL=7.bdef9166.chunk.js.map