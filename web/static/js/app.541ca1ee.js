(function(e){function n(n){for(var a,c,u=n[0],i=n[1],l=n[2],s=0,f=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);h&&h(n);while(f.length)f.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,c=1;c<t.length;c++){var u=t[c];0!==r[u]&&(a=!1)}a&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},c={app:0},r={app:0},o=[];function u(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-6d567ea6":"e91dad8a","chunk-a8b22314":"9848829d","chunk-c8ef88a0":"663d37ac","chunk-fa1c8ac0":"4f951bee","chunk-5c578ace":"c27302ef","chunk-912bb898":"ab05a66e","chunk-a055ac96":"c7815251","chunk-20bf9868":"23a25691","chunk-7821cf33":"151e4500","chunk-9f63a316":"c253acbb","chunk-19b764f8":"b7258f27","chunk-f74c571a":"fb020146","chunk-b0db1926":"d57d9c70"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-6d567ea6":1,"chunk-a8b22314":1,"chunk-c8ef88a0":1,"chunk-fa1c8ac0":1,"chunk-5c578ace":1,"chunk-912bb898":1,"chunk-a055ac96":1,"chunk-20bf9868":1,"chunk-7821cf33":1,"chunk-9f63a316":1,"chunk-19b764f8":1,"chunk-f74c571a":1,"chunk-b0db1926":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="static/css/"+({}[e]||e)+"."+{"chunk-6d567ea6":"e46d7fdf","chunk-a8b22314":"9981f903","chunk-c8ef88a0":"3ae59619","chunk-fa1c8ac0":"c880b8ce","chunk-5c578ace":"f723233c","chunk-912bb898":"68ef32cf","chunk-a055ac96":"265b8427","chunk-20bf9868":"509272a8","chunk-7821cf33":"82e43959","chunk-9f63a316":"f3ebc744","chunk-19b764f8":"c4a762d6","chunk-f74c571a":"97271e58","chunk-b0db1926":"a6f75298"}[e]+".css",r=i.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===r))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===a||s===r)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var a=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],h.parentNode.removeChild(h),t(o)},h.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(n,t){a=r[e]=[n,t]}));n.push(a[2]=o);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var f=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(h);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",f.name="ChunkLoadError",f.type=a,f.request=c,t[1](f)}r[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var h=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("Header"),t("v-main",[t("Home")],1),t("Footer")],1)},r=[],o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view",{staticClass:"template-main"})},u=[],i={name:"Home",data:function(){return{}}},l=i,s=(t("9d3d"),t("2877")),f=Object(s["a"])(l,o,u,!1,null,"8ca0aa70",null),h=f.exports,p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",[t("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[t("v-app-bar-nav-icon",{on:{click:function(n){e.drawer=!0}}}),t("v-toolbar-title",[e._v("KunLun平台")])],1),t("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(n){e.drawer=n},expression:"drawer"}},[t("v-list",{attrs:{nav:""}},[t("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:e.group,callback:function(n){e.group=n},expression:"group"}},[t("v-list-item",{on:{click:function(n){return e.toRouter("/kunlun")}}},[t("v-list-item-icon",[t("v-icon",[e._v("mdi-apps")])],1),t("v-list-item-title",[e._v("KunLun平台")])],1),t("v-list-item",{on:{click:function(n){return e.toRouter("/test-data")}}},[t("v-list-item-icon",[t("v-icon",[e._v("mdi-chart-bell-curve")])],1),t("v-list-item-title",[e._v("测试记录查询")])],1)],1),t("v-list-item",[t("v-list-item-icon",[t("v-icon",[e._v("mdi-chart-pie")])],1),t("v-list-item-title",[e._v("测试数据统计")])],1),t("v-list-item",{on:{click:e.openDocs}},[t("v-list-item-icon",[t("v-icon",[e._v("book")])],1),t("v-list-item-title",[e._v("帮助文档")])],1)],1)],1)],1)},d=[],m={name:"Header",data:function(){return{drawer:!1,group:null}},methods:{toRouter:function(e){this.$router.push(e)},openDocs:function(){window.open("http://localhost:9000/static/html/index.html")}}},b=m,v=t("6544"),k=t.n(v),g=t("40dc"),y=t("5bc1"),_=t("a523"),w=t("132d"),P=t("8860"),x=t("da13"),O=t("1baa"),j=t("34c3"),C=t("5d23"),S=t("f774"),V=t("2a7f"),E=Object(s["a"])(b,p,d,!1,null,"5ea12c0e",null),A=E.exports;k()(E,{VAppBar:g["a"],VAppBarNavIcon:y["a"],VContainer:_["a"],VIcon:w["a"],VList:P["a"],VListItem:x["a"],VListItemGroup:O["a"],VListItemIcon:j["a"],VListItemTitle:C["b"],VNavigationDrawer:S["a"],VToolbarTitle:V["a"]});var L=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-footer",{attrs:{padless:""}},[t("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" 自动化测试平台 — "),t("strong",[e._v("Kunlun @"+e._s((new Date).getFullYear()))])]),t("v-snackbar",{attrs:{timeout:e.timeout},scopedSlots:e._u([{key:"action",fn:function(n){var a=n.attrs;return[t("v-btn",e._b({attrs:{color:"blue",text:""},on:{click:function(n){return e.store.commit("setMessage","")}}},"v-btn",a,!1),[e._v(" Close ")])]}}]),model:{value:e.message,callback:function(n){e.message=n},expression:"message"}},[e._v(" "+e._s(e.message)+" ")])],1)},T=[],B=t("bddc"),D={name:"Footer",components:{},computed:{message:function(){return B["a"].state.message}},data:function(){return{timeout:3e3}}},I=D,N=t("8336"),F=t("62ad"),H=t("553a"),M=t("2db4"),$=Object(s["a"])(I,L,T,!1,null,"c00b45fc",null),K=$.exports;k()($,{VBtn:N["a"],VCol:F["a"],VFooter:H["a"],VSnackbar:M["a"]});var q={name:"App",components:{Home:h,Header:A,Footer:K},data:function(){return{}}},R=q,J=t("7496"),G=t("f6c4"),U=Object(s["a"])(R,c,r,!1,null,null,null),Y=U.exports;k()(U,{VApp:J["a"],VMain:G["a"]});t("d1e78"),t("5363");var z=t("f309");a["a"].use(z["a"]);var Q=new z["a"]({icons:{iconfont:"mdi"}}),W=(t("45fc"),t("ac1f"),t("5319"),t("8c4f")),X=t("323e"),Z=t.n(X),ee=t("2b27"),ne=t.n(ee),te=t("2909"),ae=(t("d3b7"),[{path:"*",meta:{public:!0},redirect:{path:"/404"}},{path:"/",meta:{public:!0},redirect:{path:"/kunlun"}},{path:"/404",meta:{public:!0},name:"NotFound",component:function(){return t.e("chunk-a8b22314").then(t.bind(null,"be4d"))}},{path:"/403",meta:{public:!0},name:"AccessDenied",component:function(){return t.e("chunk-6d567ea6").then(t.bind(null,"bc31"))}},{path:"/500",meta:{public:!0},name:"ServerError",component:function(){return t.e("chunk-c8ef88a0").then(t.bind(null,"3fb9"))}}]),ce=[{path:"/kunlun",meta:{public:!0},name:"StationPage",component:function(){return Promise.all([t.e("chunk-fa1c8ac0"),t.e("chunk-5c578ace")]).then(t.bind(null,"565f"))}},{path:"/kunlun/:station",meta:{public:!0},name:"ContainerPage",component:function(){return Promise.all([t.e("chunk-fa1c8ac0"),t.e("chunk-912bb898"),t.e("chunk-a055ac96"),t.e("chunk-9f63a316"),t.e("chunk-19b764f8")]).then(t.bind(null,"126f"))}},{path:"/kunlun/:station/:container",meta:{public:!0},name:"ConnectionPage",component:function(){return Promise.all([t.e("chunk-fa1c8ac0"),t.e("chunk-912bb898"),t.e("chunk-a055ac96"),t.e("chunk-9f63a316"),t.e("chunk-f74c571a")]).then(t.bind(null,"da62"))}},{path:"/set-configuration",meta:{public:!0},name:"ConfigPage",component:function(){return Promise.all([t.e("chunk-fa1c8ac0"),t.e("chunk-912bb898"),t.e("chunk-a055ac96"),t.e("chunk-20bf9868")]).then(t.bind(null,"1577"))}},{path:"/test-data",meta:{public:!0},name:"TestDataPage",component:function(){return Promise.all([t.e("chunk-fa1c8ac0"),t.e("chunk-912bb898"),t.e("chunk-a055ac96"),t.e("chunk-7821cf33")]).then(t.bind(null,"56a3"))}},{path:"/set-container/:station",meta:{public:!0},name:"SetContainerPage",component:function(){return Promise.all([t.e("chunk-fa1c8ac0"),t.e("chunk-912bb898"),t.e("chunk-b0db1926")]).then(t.bind(null,"c2ad"))}}],re=[];re.push.apply(re,Object(te["a"])(ae)),re.push.apply(re,Object(te["a"])(ce));var oe=re;a["a"].use(W["a"]);var ue=new W["a"]({base:"/",mode:"hash",linkActiveClass:"active",routes:oe});ue.beforeEach((function(e,n,t){if(e.matched.some((function(e){return e.meta.requireAuth}))){var a=ne.a.get("username");a||(ue.replace("/login"),t(!1))}Z.a.start(),t()})),ue.afterEach((function(){Z.a.done()}));var ie=ue,le=t("8f94"),se=t.n(le);t("a7be");a["a"].use(se.a),a["a"].use(ne.a),a["a"].$cookies.config("8h"),a["a"].config.productionTip=!1,new a["a"]({router:ie,vuetify:Q,render:function(e){return e(Y)}}).$mount("#app")},"907b":function(e,n,t){},"9d3d":function(e,n,t){"use strict";t("907b")},bddc:function(e,n,t){"use strict";var a=t("2b0e"),c=t("2f62");a["a"].use(c["a"]),n["a"]=new c["a"].Store({state:{sernum:"",message:"",snackBar:!1},mutations:{setSernum:function(e,n){e.sernum=n},showSnackBar:function(e){e.snackBar=!0},setMessage:function(e,n){e.message=n}}})}});
//# sourceMappingURL=app.541ca1ee.js.map