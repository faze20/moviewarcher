(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},65:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(13),r=c.n(i),a=(c(37),c(38),c(39),c(12)),l=c(2);var j=function(){return Object(l.jsx)("div",{className:"nav",children:Object(l.jsxs)("div",{className:"heading_container",children:[Object(l.jsx)("div",{className:"route_links",children:Object(l.jsxs)("ul",{className:"route",children:[Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{to:"/",children:"Movie Watcher "})}),Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{to:"/like",children:"Liked Movies "})}),Object(l.jsx)("li",{children:"Disliked"})]})}),Object(l.jsx)("div",{className:"user_links",children:Object(l.jsxs)("ul",{className:"link",children:[Object(l.jsx)("li",{children:"Join"}),Object(l.jsx)("li",{children:" Login"})]})})]})})},o=c(3);var d=function(){return Object(l.jsx)("div",{className:"liked",children:Object(l.jsx)("h2",{children:"List of Interested movies."})})},u=c(18),b=c.n(u),h=c(29),O=c(19),x=c(30),p=c.n(x).a.create({baseURL:"https://api.themoviedb.org/3"}),v=(c(65),c(31)),f=c.n(v);var m=function(e){var t=e.title,c=e.fetchUrl,s=e.isLargeRow,i=Object(n.useState)([]),r=Object(O.a)(i,2),a=r[0],j=r[1],o=Object(n.useState)([]),d=Object(O.a)(o,2),u=d[0],x=d[1];return Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(c,{crossdomain:!0});case 2:return t=e.sent,j(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"row_items",children:[Object(l.jsxs)("h2",{children:[" ",t]}),Object(l.jsxs)("div",{className:"poster_container",children:[Object(l.jsx)("div",{className:"row__posters",children:a.map((function(e){return Object(l.jsx)("img",{onClick:function(){return function(e){s=!1,x(u?"":e.title)}(e)},className:s?"row__poster":"row__posterLarge",src:"".concat("https://image.tmdb.org/t/p/original/").concat(s?e.poster_path:e.backdrop_path),alt:e.title},e.id)}))}),Object(l.jsxs)("div",{className:"clicked_img",children:[u," ",Object(l.jsx)(f.a,{})]})]})]})})},g={fetchPopular:"/movie/popular?api_key=".concat("d0f5f2e135336200362af8a1a73acb17","&language=en-US")};var _=function(){return Object(l.jsx)("div",{className:"moviecard",children:Object(l.jsx)(m,{title:"Popular Movies",fetchUrl:g.fetchPopular,isLargeRow:!0})})};var k=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(a.a,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"movie_list",children:Object(l.jsx)(_,{})}),Object(l.jsx)(o.a,{path:"/like",children:Object(l.jsx)(d,{})})]})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),N()}},[[71,1,2]]]);
//# sourceMappingURL=main.3592bbd7.chunk.js.map