(function(t){function e(e){for(var r,o,a=e[0],u=e[1],h=e[2],d=0,c=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&c.push(n[o][0]),n[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(c.length)c.shift()();return s.push.apply(s,h||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],r=!0,a=1;a<i.length;a++){var u=i[a];0!==n[u]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=r,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(i,r,function(e){return t[e]}.bind(null,r));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/minesweeper/dist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var h=0;h<a.length;h++)e(a[h]);var l=u;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0274":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}},[i("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),i("router-view")],1)},s=[],o=(i("5c0b"),i("2877")),a={},u=Object(o["a"])(a,n,s,!1,null,null,null),h=u.exports,l=i("8c4f"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Minesweeper",{attrs:{size:{width:10,height:8},bombsNumber:10}})],1)},c=[],f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"minesweeper"},[i("BoardHeader",{attrs:{startTime:t.startTime,isFinished:t.isFinished,result:t.result},on:{restart:t.restartHandler}}),i("Board",{attrs:{board:t.board},on:{tile:t.tileHandler,flag:t.flagHandler}})],1)},b=[],v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"board-header"},[i("button",{on:{click:function(e){return t.$emit("restart")}}},[t._v("Restart")]),i("div",{staticClass:"board-header__result"},["victory"===t.result?i("p",[t._v("Congratulation you won!!!")]):t._e(),"loose"===t.result?i("p",[t._v("You loose :(")]):t._e()]),i("div",{staticClass:"board-header__timer"},[""===t.result&&0===t.startTime?i("p",[t._v(" Waiting for start. ")]):i("p",[t._v("Time: "),i("Timer",{attrs:{startTime:t.startTime,isFinished:t.isFinished}})],1)])])},m=[],p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[t._v(t._s(t.time))])},g=[],w={name:"Timer",props:["startTime","isFinished"],data:function(){return{currentTime:0}},methods:{updateCurrentTime:function(){this.isFinished||(this.currentTime=Math.floor(performance.now()/1e3),window.requestAnimationFrame(this.updateCurrentTime))}},computed:{time:function(){return this.currentTime-this.startTime}},mounted:function(){this.updateCurrentTime()}},y=w,_=Object(o["a"])(y,p,g,!1,null,null,null),k=_.exports,T={name:"BoardHeader",components:{Timer:k},props:["startTime","isFinished","result"]},F=T,O=(i("df5a"),Object(o["a"])(F,v,m,!1,null,"1fc51616",null)),S=O.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"minesweeper-board",style:t.cssVars},t._l(this.board,(function(e,r){return i("div",{key:r+"",staticClass:"minesweeper-board__row"},t._l(e,(function(e,n){return i("div",{key:r+"-"+n,staticClass:"minesweeper-board__tile",class:t.classes(r,n),on:{click:function(e){return t.$emit("tile",r,n)},contextmenu:function(e){return e.preventDefault(),t.handleRightClick(r,n)}}},[i("p",[t._v(t._s(e))])])})),0)})),0)},x=[],P={name:"Board",props:["board"],methods:{classes:function(t,e){return{hidden:""===this.board[t][e],bomb:"💣"===this.board[t][e],flag:"🚩"===this.board[t][e]}},handleRightClick:function(t,e){this.$emit("flag",t,e)}},computed:{width:function(){return this.board[0].length},height:function(){return this.board.length},cssVars:function(){var t=30;return{"--board-columns":this.width,"--board-rows":this.height,"--cell-size":"".concat(t,"px")}}}},N=P,B=(i("7c14"),Object(o["a"])(N,j,x,!1,null,"4609da30",null)),C=B.exports,M=(i("a4d3"),i("e01a"),i("d28b"),i("d81d"),i("fb6a"),i("4e82"),i("d3b7"),i("3ca3"),i("ddb0"),i("9f12")),H=i("53fe"),$=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.width,r=void 0===i?10:i,n=e.height,s=void 0===n?8:n,o=e.bombsNumber,a=void 0===o?10:o;Object(M["a"])(this,t),this.width=r,this.height=s,this.bombsNumber=a,this.board=E(this.width,this.height),this._init=!1,this._finish=!1}return Object(H["a"])(t,[{key:"init",value:function(t,e){var i=V({width:this.width,height:this.height,blockedX:t,blockedY:e,bombsNumber:this.bombsNumber}),r=!0,n=!1,s=void 0;try{for(var o,a=i[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var u=o.value;this.board[u.x][u.y].setType("bomb")}}catch(d){n=!0,s=d}finally{try{r||null==a.return||a.return()}finally{if(n)throw s}}for(var h=0;h<this.height;h++)for(var l=0;l<this.width;l++)this.board[l][h].isBomb()||(this.board[l][h].setType("safe"),this.board[l][h].value=this._getNumberOfBombNeighbours(l,h));this._init=!0}},{key:"finish",value:function(){this._finish=!0}},{key:"isFinished",value:function(){return this._finish}},{key:"getResult",value:function(){return this.isFinished()?this.isVictory?"victory":"loose":"in progress"}},{key:"showPosition",value:function(t,e){if(!this.isFinished()&&!(t<0||t>this.width-1||e<0||e>this.height-1)&&!this.board[t][e].isShown()&&!this.board[t][e].isFlagged()){this._init||this.init(t,e);var i=this.board[t][e].show();i<0?this.finish():0===i&&this.showNeighbours(t,e),0===this._getNumberOfSafeTiles()&&(this.isVictory=!0,this.finish())}}},{key:"showNeighbours",value:function(t,e){this.showPosition(t-1,e),this.showPosition(t-1,e-1),this.showPosition(t,e-1),this.showPosition(t+1,e-1),this.showPosition(t+1,e),this.showPosition(t+1,e+1),this.showPosition(t,e+1),this.showPosition(t-1,e+1)}},{key:"toggleFlag",value:function(t,e){this.board[t][e].toggleFlag()}},{key:"getView",value:function(){for(var t=[],e=0;e<this.board[0].length;e++){t[e]=[];for(var i=0;i<this.board.length;i++)this.board[i][e].isFlagged()?t[e][i]="🚩":this.board[i][e].isShown()?this.board[i][e].isBomb()?t[e][i]="💣":t[e][i]=this.board[i][e].value:t[e][i]=""}return t}},{key:"isShown",value:function(t,e){return this.board[t][e].isShown()}},{key:"isFlagged",value:function(t,e){return this.board[t][e].isFlagged()}},{key:"_getNumberOfSafeTiles",value:function(){for(var t=0,e=0;e<this.board.length;e++)for(var i=0;i<this.board[0].length;i++){var r=this.board[e][i];r.isShown()||r.isBomb()||t++}return t}},{key:"_getNumberOfBombNeighbours",value:function(t,e){for(var i=[t-1,t,t+1],r=[e-1,e,e+1],n=0,s=0,o=i;s<o.length;s++){var a=o[s],u=!0,h=!1,l=void 0;try{for(var d,c=r[Symbol.iterator]();!(u=(d=c.next()).done);u=!0){var f=d.value;a===t&&f===e||(a<0||a>this.width-1||f<0||f>this.height-1||this.board[a][f].isBomb()&&n++)}}catch(b){h=!0,l=b}finally{try{u||null==c.return||c.return()}finally{if(h)throw l}}}return n}}]),t}();function V(t){for(var e=t.width,i=t.height,r=t.blockedX,n=t.blockedY,s=t.bombsNumber,o=[],a=r+e*n,u=0;u<e*i;u++)u!==a&&o.push(u);o.sort((function(){return.5-Math.random()}));var h=o.slice(0,s);return h.map((function(t){var i=Math.floor(t/e),r=t%e;return{x:r,y:i}}))}function E(t,e){for(var i=[],r=0;r<t;r++){i[r]=[];for(var n=0;n<e;n++)i[r][n]=new R}return i}var R=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";Object(M["a"])(this,t),this.hidden=!0,this.flagged=!1,this.type=e}return Object(H["a"])(t,[{key:"setType",value:function(t){Object.defineProperty(this,"type",{value:t,writable:!1})}},{key:"show",value:function(){return this.hidden=!1,this.isBomb()?-1:this.value}},{key:"toggleFlag",value:function(){this.flagged=!this.flagged}},{key:"isShown",value:function(){return!this.hidden}},{key:"isBomb",value:function(){return"bomb"===this.type}},{key:"isFlagged",value:function(){return this.flagged}}]),t}(),z=new $,Y={name:"Minesweeper",props:["size","bombsNumber"],components:{BoardHeader:S,Board:C},data:function(){return{board:z.getView(),isStarted:!1,isFinished:!1,startTime:0,result:""}},methods:{tileHandler:function(t,e){this.isFinished||this.isStarted||(this.startTime=Math.floor(performance.now()/1e3),this.isStarted=!0),z.isFlagged(e,t)||(z.showPosition(e,t),this.board=z.getView(),z.isFinished()&&(this.isStarted=!1,this.isFinished=!0,this.result=z.getResult()))},restartHandler:function(){z=new $,this.board=z.getView(),this.isStarted=!1,this.isFinished=!1,this.startTime=0,this.result=""},flagHandler:function(t,e){z.isShown(e,t)||(z.toggleFlag(e,t),this.board=z.getView())}}},J=Y,X=Object(o["a"])(J,f,b,!1,null,null,null),q=X.exports,A={name:"home",components:{Minesweeper:q}},D=A,W=Object(o["a"])(D,d,c,!1,null,null,null),G=W.exports;r["a"].use(l["a"]);var I=[{path:"/",name:"home",component:G}],K=new l["a"]({routes:I}),L=K;r["a"].config.productionTip=!1,new r["a"]({router:L,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var r=i("9c0c"),n=i.n(r);n.a},"7c14":function(t,e,i){"use strict";var r=i("0274"),n=i.n(r);n.a},9540:function(t,e,i){},"9c0c":function(t,e,i){},df5a:function(t,e,i){"use strict";var r=i("9540"),n=i.n(r);n.a}});
//# sourceMappingURL=app.1514dc5f.js.map