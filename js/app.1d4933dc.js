(function(e){function t(t){for(var a,r,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},s={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/DyescapeBingo/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5672:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.ready?n("div",{style:e.appStyle,attrs:{id:"app"}},[e.card?e._e():n("div",{staticClass:"card center rounded"},[e._m(0),n("div",{staticClass:"content"},[n("button",{on:{click:e.generateCard}},[e._v("Generate your card")])])]),null!==e.card?n("div",{staticStyle:{display:"flex","flex-direction":"row",height:"100%"}},[n("div",{staticClass:"card "},[n("div",{staticClass:"title"},[n("h1",[e._v("Dyescape "),n("span",{on:{click:function(t){return e.easter(1)}}},[e._v("B")]),n("span",{on:{click:function(t){return e.easter(2)}}},[e._v("i")]),n("span",{on:{click:function(t){return e.easter(3)}}},[e._v("n")]),n("span",{on:{click:function(t){return e.easter(4)}}},[e._v("g")]),n("span",{on:{click:function(t){return e.easter(5)}}},[e._v("o")])])]),n("div",{staticClass:"content"},[n("div",{staticClass:"statContainer",staticStyle:{"margin-bottom":"2rem"}},[e._v("Started At: "),n("span",{staticClass:"stat"},[e._v(e._s(e.formatDate(e.card.started)))])]),e._v(" Found:"),n("br"),n("div",{staticClass:"statContainer"},[e._v("Columns: "),0===e.winstate.cols.length?n("span",{staticClass:"stat"},[e._v("None")]):n("span",{staticClass:"stat"},[e._v(e._s(e.winstate.cols.join(", ")))])]),n("div",{staticClass:"statContainer"},[e._v("Rows: "),0===e.winstate.rows.length?n("span",{staticClass:"stat"},[e._v("None")]):n("span",{staticClass:"stat"},[e._v(e._s(e.winstate.rows.join(", ")))])]),n("div",{staticClass:"statContainer"},[e._v("Full Card: "),n("span",{staticClass:"stat"},[e._v(e._s(e.winstate.fullCard))])]),n("br"),n("br"),n("div",[n("button",{on:{click:e.resetCard}},[e._v("Reset")])])])]),n("bingo-card",{attrs:{card:e.card}})],1):e._e()]):e._e()},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h1",[e._v("Dyescape Bingo")])])}],r=(n("c975"),n("fb6a"),n("0d03"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bingo-card"},[n("div",{staticClass:"titleSpan"},[n("div",{on:{click:function(t){return e.$root.$emit("esa",6)}}},[e._v("D")]),n("div",[e._v("E")]),n("div",{on:{click:function(t){return e.$root.$emit("esa",7)}}},[e._v("L")]),n("div",[e._v("A")]),n("div",{on:{click:function(t){return e.$root.$emit("esa",8)}}},[e._v("Y")])]),e._l(e.chunk(e.card.card,5),(function(t,a){return n("div",{key:a,staticClass:"row"},e._l(t,(function(t,a){return n("div",{key:a,staticClass:"item",class:{completed:0!=t.completed},on:{click:function(n){return e.completeAction(t)}}},[n("div",{staticClass:"phrase"},[e._v(" "+e._s(t.phrase)+" ")])])})),0)}))],2)}),i=[],c={name:"bingo-card",props:["card"],methods:{chunk:function(e,t){var n=[],a=0,s=e.length;while(a<s)n.push(e.slice(a,a+=t));return n},completeAction:function(e){!1===e.completed&&this.$root.$emit("completeAction",e)}}},l=c,d=(n("5c7c"),n("2877")),u=Object(d["a"])(l,r,i,!1,null,"1580de9f",null),p=u.exports;n("99af");function h(e,t,n){if("Build"===e){var a={background:null,color:null};if(null==n)a.background="#ffcd00",a.color="#000";else switch(n){case"error":a.background="#c0392b",a.color="#fff";break;case"warn":a.background="#d35400",a.color="#fff";break;case"success":a.background="#2ecc71",a.color="#000";break;default:a=n}console.log("%c ".concat(e," %c ").concat(t," "),"background: ".concat(a.background,"; color: ").concat(a.color,"; border-radius: 3px 0 0 3px;"),"background: #333; color: #fff; border-radius: 0 3px 3px 0;")}}var f={methods:{log:h},log:h};function g(e,t){var n=[],a=0,s=e.length;while(a<s)n.push(e.slice(a,a+=t));return n}function m(e){for(var t in e){var n=e[t];if(!1===n.completed)return!1}return!0}var v={name:"app",components:{BingoCard:p},data:function(){return{ready:!1,alert:null,card:null,winstate:{rows:[],cols:[],fullCard:!1},appStyle:{backgroundImage:null},cardChoices:["Choco posts 2 rocket league clips in a day","KingAlter uses :pepe_kek: for the 15th time in a day","Dennis posts some random shit that happened at work","Someone posts a car in #cars that they can't afford and shit on it for no reason","MiniDigger defends a company","Michael yells at Dennis for his piss poor pc choices","Droei eats lasagna for the third time in a week","Someone posts cursed material in a topic related channel","Aekalix posts some nice builds",":dyescape_goodbusy: is used","Welcome or leave messages wont work","Delayscape.com gets an update","WalmartWelcomer.com gets posted","Some dumb Spigot member is mentioned","A person suggests something already implemented","Perotin recruits a member to his guild on join","Someone shits on America","Cooking show happens in #food","KingAlter laughs at something that isn't funny","Jay yells at Dennis for absolutely anything","Zirker posts more than 10 messages in a day","Stefan posts 3 coubs in a day","Dennis ignores the advice that Michael gives him in #tech and goes to his own conclusion","Zirker rants about maths","Jay welcomes a user","Wiki Team gets called a non staff rank","Someone bullies Jay","Raiding a spigot thread","Someone shits on others code","The #lore channel is used","Some guy posts a gringery gif","Aekalix makes a fancy devlog","Euvrounin false mutes","A dutch person shits on Belgium for no reason","Droei posts lasagna","A delay meme is posted","Michael false mutes","Someone mistakes helper for builder","Someone left because their app got denied","Someone discusses #programming in #general","Someone mentions hytale","Droei brags about his PC","Droei wants to buy more tech","Michael attempts to stop Droei from buying more tech","MiniDigger gets drunk","Dennis uses ShareX","Dennis takes a picture of his monitor instead of screenshotting","Dennis spams :dutch_omega_lul: in one message"]}},methods:{formatDate:function(e){return e.toLocaleString()},easter:function(e){this.appStyle.backgroundImage="url('./img/"+e+".png')"},generateCard:function(){var e=[],t=[],n=0;while(n<25)if(12!==n){var a=Math.floor(Math.random()*this.cardChoices.length);if(-1===e.indexOf(a)){var s=this.cardChoices[a];e.push(a),t.push({id:a,index:t.length,phrase:s,completed:!1}),n++}}else t.push({id:-1,index:t.length,phrase:"FREE",completed:!0}),n++;this.card={card:t,started:new Date},this.saveCard()},saveCard:function(){localStorage.setItem("dye-bingoCard",JSON.stringify(this.card))},resetCard:function(){this.card=null,localStorage.removeItem("dye-bingoCard")},completeAction:function(e){this.card.card[e.index].completed=new Date,this.saveCard(),this.winstate=this.findWinStates()},findWinStates:function(){for(var e={rows:[],cols:[],fullCard:!1},t=g(this.card.card,5),n=0;n<t.length;n++){var a=m(t[n]);a&&e.rows.push(n+1)}for(var s=0;s<t.length;s++){for(var o=[],r=0;r<t.length;r++)o.push(t[r][s]);var i=m(o);i&&e.cols.push(s+1)}return 5===e.rows.length&&(e.fullCard=!0),e}},created:function(){if(f.log("Cards","Loaded ".concat(this.cardChoices.length," cards to choose from!"),"success"),!localStorage)return this.alert={type:"danger",message:"Your browser doesn't support LocalStorage, progress wont be saved."},void(this.ready=!0);f.log("Events","Registering...","success"),this.$root.$on("completeAction",this.completeAction),this.$root.$on("saveCard",this.saveCard),this.$root.$on("esa",this.easter),f.log("Events","Registered","success");var e=localStorage.getItem("dye-bingoCard");e&&(this.card=JSON.parse(e),this.card.started=new Date(this.card.started),this.winstate=this.findWinStates()),this.ready=!0}},b=v,y=(n("5c0b"),Object(d["a"])(b,s,o,!1,null,null,null)),_=y.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(_)},created:function(){f.log("Build","Running in production mode","warn")}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),s=n.n(a);s.a},"5c7c":function(e,t,n){"use strict";var a=n("5672"),s=n.n(a);s.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.1d4933dc.js.map