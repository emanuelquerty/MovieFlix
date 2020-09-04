(this.webpackJsonpmovieflix=this.webpackJsonpmovieflix||[]).push([[0],{27:function(e,t,a){e.exports=a(57)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),l=a(9),s=(a(32),a(3)),i=a(2),m=(a(33),a(34),a(35),function(e){return r.a.createElement("div",{className:"banner"},r.a.createElement("h2",{className:"banner__title"},"Welcome"),r.a.createElement("p",{className:"banner__description"},"All your movies and tv shows in one place."))}),u=(a(36),a(37),Object(i.f)((function(e){var t=e.movie,a=e.history;return r.a.createElement("div",{className:"small-card",onClick:function(){var e=t.title?"movie":"tv",n=t.title||t.name;a.push("/".concat(e,"/").concat(t.id,"-").concat(n.replace(/ /gi,"-")))}},r.a.createElement("img",{className:"small-card__image",src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.title+"poster"}),r.a.createElement("div",{className:"small-card__content"},r.a.createElement("h3",{className:"small-card__title"},t.title||t.name),r.a.createElement("p",{className:"small-card__release-date"},r.a.createElement("small",null,t.release_date?"Release Date: "+t.release_date:"First Air Date: "+t.first_air_date)),r.a.createElement("p",{className:"small-card__rating"},r.a.createElement("small",null,"Rating: ",t.vote_average))))}))),p=function(e){var t=e.popular;return r.a.createElement("div",{className:"popular"},t.filter((function(e){return e.poster_path})).map((function(e){return r.a.createElement(u,{key:e.id,movie:e})})))},v=(a(43),function(e){var t=Object(n.useState)([!0,!1,!1]),a=Object(s.a)(t,2),c=a[0],o=a[1];return r.a.createElement("nav",{className:"popular-header__select-category"},function(){var t="select-category__option ",a=e.optionsLabel,n=e.categories;return c.map((function(c,l){return r.a.createElement("span",{key:l,className:c?t+="select-category__option--active":t="select-category__option ",onClick:function(){var t=[!1,!1,!1];t[l]=!0,o(t),e.onSetCategory(n[l])}},a[l])}))}())}),h=a(12),f=a.n(h),d=a(15),_=a(24),E=a(13),b=function(){function e(){Object(_.a)(this,e),this.baseUrl="https://api.themoviedb.org/3",this.apiKey="a5d9da0bec0cbce6fa2abb066af3d2a2",this.misc="include_adult=false&language=en-US&page=1"}return Object(E.a)(e,[{key:"getMoviesFromQuery",value:function(){var e=Object(d.a)(f.a.mark((function e(t,a){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n="".concat(this.baseUrl,"/search/movie?api_key=").concat(this.apiKey,"&query=").concat(a,"&").concat(this.misc),e.prev=2,e.next=5,fetch(n);case 5:return r=e.sent,e.abrupt("return",r.json());case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getAll",value:function(){var e=Object(d.a)(f.a.mark((function e(t,a){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(this.baseUrl,"/").concat(a,"/").concat(t,"?api_key=").concat(this.apiKey,"&").concat(this.misc),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.abrupt("return",r.json());case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getMovieById",value:function(){var e=Object(d.a)(f.a.mark((function e(t,a){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(this.baseUrl,"/").concat(a,"/").concat(t,"?api_key=").concat(this.apiKey,"&").concat(this.misc),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.abrupt("return",r.json());case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getFullCast",value:function(){var e=Object(d.a)(f.a.mark((function e(t,a){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(this.baseUrl,"/").concat(a,"/").concat(t,"/credits?api_key=").concat(this.apiKey,"&").concat(this.misc),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.abrupt("return",r.json());case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),g=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)("popular"),i=Object(s.a)(l,2),u=i[0],h=i[1],f=Object(n.useState)([]),d=Object(s.a)(f,2),_=d[0],E=d[1],g=Object(n.useState)("popular"),N=Object(s.a)(g,2),y=N[0],w=N[1];Object(n.useEffect)((function(){(new b).getAll(u,"movie").then((function(e){o(e.results)}))}),[u]),Object(n.useEffect)((function(){(new b).getAll(y,"tv").then((function(e){e.hasOwnProperty("results")?E(e.results):E([e])}))}),[y]);return r.a.createElement("div",{className:"homepage"},r.a.createElement(m,null),r.a.createElement("main",{className:"homepage__main"},r.a.createElement("h2",{className:"popular-header__popular-title"},"Popular movies right now"),r.a.createElement(v,{onSetCategory:h,optionsLabel:["For Rent","In Theathers","Top Rated"],categories:["popular","now_playing","top_rated"]}),r.a.createElement(p,{popular:c}),r.a.createElement("h2",{className:"popular-header__popular-title"},"Popular tv shows right now"),r.a.createElement(v,{onSetCategory:w,optionsLabel:["For Rent","Latest","Top Rated"],categories:["popular","latest","top_rated"]}),r.a.createElement(p,{popular:_})))},N=(a(45),a(46),function(e){var t=e.movie,a=t.poster_path,n=t.production_countries,c=t.overview,o=t.tagline;return r.a.createElement("div",{className:"movie-details-banner"},r.a.createElement("img",{className:"movie-details-banner__image",src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:t.title||t.name+"poster"}),r.a.createElement("div",{className:"movie-details-banner__content"},r.a.createElement("h2",{className:"movie-details-banner__title"},t.title||t.name),r.a.createElement("p",{className:"movie-details-banner__release-date"},t.release_date||t.first_air_date,n&&n[0]?" (".concat(n[0].iso_3166_1,")"):" ".concat(t.origin_country),t.runtime?" . ".concat(function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(t.runtime)):t.seasons&&" . ".concat(t.seasons.length," seasons")),r.a.createElement("p",{className:"movie-details-banner__tagline"},o),r.a.createElement("h2",{className:"movie-details-banner__overview-title"},"Overview"),r.a.createElement("p",{className:"movie-details-banner__overview"},c)))}),y=(a(47),function(e){var t=e.title,a=e.smallTextArray,n=e.poster_path;return r.a.createElement("div",{className:"generic-card"},r.a.createElement("img",{className:"generic-card__image",src:"https://image.tmdb.org/t/p/w500/".concat(n),alt:t+" poster"}),r.a.createElement("div",{className:"generic-card__content"},r.a.createElement("h3",{className:"generic-card__title"},t),a.map((function(e,t){return r.a.createElement("p",{key:t,className:"generic-card__small-text"},r.a.createElement("small",null,e))}))))}),w=Object(i.f)((function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)([]),i=Object(s.a)(l,2),m=i[0],u=i[1],p=e.location.pathname.split("/"),v=p[1],h=p[2].split("-")[0];return Object(n.useEffect)((function(){(new b).getMovieById(h,v).then((function(e){console.log(e),o(e)}))}),[h,v]),Object(n.useEffect)((function(){(new b).getFullCast(h,v).then((function(e){u(e.cast)}))}),[h,v]),r.a.createElement("div",{className:"movie-details"},r.a.createElement(N,{movie:c}),r.a.createElement("div",{className:"movie-details__cast"},r.a.createElement("h2",{className:"cast__title"},"Top Cast"),r.a.createElement("div",{className:"cast__list"},m.filter((function(e){return e.profile_path})).map((function(e,t){var a=e.name,n=e.character,c=e.profile_path;return r.a.createElement(y,{key:t,title:a,smallTextArray:[n],poster_path:c})})))))})),j=(a(48),a(25)),O=a.n(j),k=Object(i.f)((function(e){return r.a.createElement("nav",{className:"navbar"},r.a.createElement(l.b,{to:"/",className:"navbar__link app-title",id:"app-title"},"MOVIEFLIX"),r.a.createElement(l.b,{to:"/",className:"navbar__link home"},"Home"),r.a.createElement(l.b,{to:e.location.pathname,className:"navbar__link",onClick:function(){e.onOpenSearchMoviesModal()}},r.a.createElement(O.a,{className:"navbar__search-icon"})))}));a(51),a(52),a(53);var M=Object(i.f)((function(e){var t=e.movie,a=e.history;return r.a.createElement("div",{className:"card",onClick:function(){a.push("/movie/".concat(t.id,"-").concat(t.title.replace(" ","-"))),e.onCloseSearchMoviesModal()}},r.a.createElement("img",{className:"card__image",src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.title+"poster",loading:"lazy"}),r.a.createElement("div",{className:"card__content"},r.a.createElement("h3",{className:"content__title"},t.title),r.a.createElement("p",{className:"content__small"},r.a.createElement("small",null,"Release Date: ",t.release_date)),r.a.createElement("p",{className:"content__small"},r.a.createElement("small",null,"Rating: ",t.vote_average)),r.a.createElement("p",{className:"content__description"},"".concat(t.overview.substring(0,100),"..."))))}));function S(e){var t=e.movies;return r.a.createElement("div",{className:"card-list"},t&&0!==t.length?t.filter((function(e){return e.poster_path})).map((function(t){return r.a.createElement(M,{key:t.id,movie:t,onCloseSearchMoviesModal:e.onCloseSearchMoviesModal})})):t&&r.a.createElement("h2",{className:"no-movie-entered-message"},"Enter a valid movie name"))}a(54);function C(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1];return r.a.createElement("form",{className:"form",onSubmit:function(t){var a=new b;c?a.getMoviesFromQuery(t,c).then((function(t){console.log(t),e.onSetMovies(t.results)})):(t.preventDefault(),e.onSetMovies([]))}},r.a.createElement("input",{type:"text",name:"query",placeholder:"i.e jurassic park",onChange:function(e){return o(e.target.value)},value:c}),r.a.createElement("button",{type:"submit",className:"button"},"Search"))}var x=function(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),c=a[0],o=a[1],l="search-movies-modal";return e.show?l+=" search-movies-modal--show":l+=" search-movies-modal--hide",r.a.createElement("div",{className:l},r.a.createElement(C,{onSetMovies:o}),r.a.createElement(S,{movies:c,onCloseSearchMoviesModal:function(){return e.onCloseSearchMoviesModal(!1)}}))},F=(a(55),function(e){var t="backdrop-shadow";return e.show?t+=" backdrop-shadow--show":t+=" backdrop-shadow--hide",r.a.createElement("div",{className:t,onClick:function(){return e.onCloseSearchMoviesModal()}},"Here")});var R=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"app"},r.a.createElement(k,{onOpenSearchMoviesModal:function(){return c(!0)}}),r.a.createElement("main",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",render:function(){return r.a.createElement(g,null)}})),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/movie/:id",render:function(){return r.a.createElement(w,null)}})),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/tv/:id",render:function(){return r.a.createElement(w,null)}}))),r.a.createElement(x,{show:a,onCloseSearchMoviesModal:function(){return c(!1)}}),r.a.createElement(F,{show:a,onCloseSearchMoviesModal:function(){return c(!1)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{basename:"/movieflix"},r.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.0ab8765d.chunk.js.map