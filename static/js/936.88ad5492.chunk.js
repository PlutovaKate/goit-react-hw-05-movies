"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{719:function(n,e,t){t.d(e,{MW:function(){return s},XT:function(){return o},YJ:function(){return r},yo:function(){return a},zi:function(){return u}});var c="e5e20b17de62d5a60669623e09d8690f",i="https://api.themoviedb.org/3/";function o(){return fetch("".concat(i,"trending/movie/day?api_key=").concat(c)).then((function(n){return n.json()}))}function r(n){return fetch("".concat(i,"movie/").concat(n,"?api_key=").concat(c)).then((function(n){return n.json()}))}function u(n){return fetch("".concat(i,"search/movie?api_key=").concat(c,"&query=").concat(n,"&language=en-US")).then((function(n){return n.json()}))}function a(n){return fetch("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(c)).then((function(n){return n.json()}))}function s(n){return fetch("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(c)).then((function(n){return n.json()}))}},936:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var c=t(439),i=t(791),o=t(719),r=t(689),u=t(87),a={trendsTitle:"Home_trendsTitle__IBuVp",movie:"Home_movie__RMLud"},s=t(184),f=function(n){var e=n.movies,t=(0,r.TH)(),f=(0,i.useState)(null),l=(0,c.Z)(f,2),h=l[0],d=l[1];return(0,i.useEffect)((function(){(0,o.XT)().then((function(n){d(n.results)})).catch(console.log)}),[]),(0,s.jsxs)("div",{children:[h&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{className:a.trendsTitle,children:"Trending movies today"}),(0,s.jsx)("ul",{children:h.map((function(n){var e=n.title,c=n.id;return(0,s.jsx)("li",{className:a.movie,children:(0,s.jsx)(u.rU,{to:"/movies/".concat(c),state:{from:t},children:e})},c)}))})]}),e&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{children:e.map((function(n){var e=n.title,c=n.id;return(0,s.jsx)("li",{className:a.movie,children:(0,s.jsx)(u.rU,{className:a.movieLink,to:"/movies/".concat(c),state:{from:t},children:e})},c)}))})})]})}}}]);
//# sourceMappingURL=936.88ad5492.chunk.js.map