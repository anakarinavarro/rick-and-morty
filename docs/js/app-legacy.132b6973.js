(function(){"use strict";var n={8704:function(n,t,r){r(6992),r(8674),r(9601),r(7727);var e=r(9567),o=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",[r("h1",{staticClass:"titulo"},[n._v("Personajes de Ricky and Morty")]),r("div",{staticClass:"contenedor"},n._l(n.personajes,(function(n,t){return r("Avatar",{key:t,attrs:{name:n.name,image:n.image}})})),1)])},i=[],u=r(6166),a=r.n(u),c=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"card container"},[r("img",{attrs:{src:n.image}}),r("p",[n._v(" "+n._s(n.name))])])},s=[],f={props:["name","image"]},l=f,p=r(1001),d=(0,p.Z)(l,c,s,!1,null,null,null),v=d.exports,h={components:{Avatar:v},data:function(){return{personajes:[]}},mounted:function(){this.getTodos()},methods:{getTodos:function(){var n=this;a().get("https://rickandmortyapi.com/api/character/").then((function(t){n.personajes=t.data.results})).catch((function(n){console.log(n)}))}}},m=h,g=(0,p.Z)(m,o,i,!1,null,null,null),y=g.exports;e.Z.config.productionTip=!1,new e.Z({render:function(n){return n(y)}}).$mount("#app")}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,function(){var n=[];r.O=function(t,e,o,i){if(!e){var u=1/0;for(f=0;f<n.length;f++){e=n[f][0],o=n[f][1],i=n[f][2];for(var a=!0,c=0;c<e.length;c++)(!1&i||u>=i)&&Object.keys(r.O).every((function(n){return r.O[n](e[c])}))?e.splice(c--,1):(a=!1,i<u&&(u=i));if(a){n.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=n.length;f>0&&n[f-1][2]>i;f--)n[f]=n[f-1];n[f]=[e,o,i]}}(),function(){r.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(t,{a:t}),t}}(),function(){r.d=function(n,t){for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};r.O.j=function(t){return 0===n[t]};var t=function(t,e){var o,i,u=e[0],a=e[1],c=e[2],s=0;if(u.some((function(t){return 0!==n[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var f=c(r)}for(t&&t(e);s<u.length;s++)i=u[s],r.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return r.O(f)},e=self["webpackChunkrick_and_morty"]=self["webpackChunkrick_and_morty"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(8704)}));e=r.O(e)})();
//# sourceMappingURL=app-legacy.132b6973.js.map