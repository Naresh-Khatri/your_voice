(()=>{"use strict";var e={4001:(e,t,r)=>{var o=r(8880),n=(r(71),r(9592)),a=r(3673);function s(e,t,r,o,n,s){const i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(i)}const i=(0,a.aZ)({name:"App"});var c=r(4260);const d=(0,c.Z)(i,[["render",s]]),l=d;var u=r(4584),p=r(3340),h=r(9582);const v=[{path:"/",component:()=>Promise.all([r.e(736),r.e(969)]).then(r.bind(r,969)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(328)]).then(r.bind(r,1328))},{path:"/recog",component:()=>Promise.all([r.e(736),r.e(684)]).then(r.bind(r,7684))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(614)]).then(r.bind(r,5614))}],f=v,m=(0,p.BC)((function(){const e=h.r5,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("")});return t}));async function g(e,t){const o="function"===typeof u["default"]?await(0,u["default"])({}):u["default"],{storeKey:a}=await Promise.resolve().then(r.bind(r,4584)),s="function"===typeof m?await m({store:o}):m;o.$router=s;const i=e(l);return i.use(n.Z,t),{app:i,store:o,storeKey:a,router:s}}var y=r(2085),b=r(9058),w=r(6417),T=r(3972),x=r(6395);const Z={config:{},plugins:{Dialog:y.Z,Dark:b.Z,Notify:w.Z,Screen:T.Z,LocalStorage:x.Z}};async function k({app:e,router:t,store:r,storeKey:o}){e.use(t),e.use(r,o),e.mount("#q-app")}g(o.ri,Z).then(k)},4584:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var o=r(3340),n=r(741),a=r(6395);const s=(0,o.h)((function(){const e=(0,n.MT)({state(){return{voice:a.Z.getItem("voice")||null,rate:a.Z.getItem("rate")||1,voices:[],savedTexts:["మీ ఆరోగ్యం త్వరలో కుదుట పడాలని కోరుకుంటున్నాను","మీరు(నువ్వు) ఆంగ్లం(ఆంగ్ల భాష) మాట్లాడగలరా(వా)?","His ultimate dream fantasy consisted of being content and sleeping eight hours in a row.","He decided to fake his disappearance to avoid jail.","There were white out conditions in the town; subsequently, the roads were impassable.","She wasn't sure whether to be impressed or concerned that he folded underwear in neat little packages.","There is no better feeling than staring at a wall with closed eyes.","Tomorrow will bring something new, so leave today as a memory.","Nobody has encountered an explosive daisy and lived to tell the tale."]}},mutations:{updateRate(e,t){e.rate=t,a.Z.set("rate",t)},updateVoice(e,t){e.voice=t,a.Z.set("voice",t)},updateVoiceList(e,t){e.voices=t},updateTexts(e,t){e.savedTexts=t},addText(e,t){e.savedTexts.push(t),Array.isArray(a.Z.getItem("savedTexts"))?a.Z.set("savedTexts",e.savedTexts):a.Z.set("savedTexts",[t]),console.log(a.Z.getItem("savedTexts"))},removeText(e,t){if(e.savedTexts[t]){const r=e.savedTexts.splice(t,1);a.Z.set("savedTexts",e.savedTexts),console.log(r)}}},actions:{getSavedTexts({commit:e}){const t=a.Z.getItem("savedTexts");t&&e("updateTexts",t)},populateVoiceList({commit:e}){speechSynthesis.onvoiceschanged=()=>{const t=speechSynthesis.getVoices().map((e=>Object.assign(e,{label:e.name})));e("updateVoiceList",t),typeof a.Z.getItem("voice")!==window.SpeechSynthesisVoice&&e("updateVoice",t[0])}}},modules:{},strict:!1});return e}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var s=1/0;for(l=0;l<e.length;l++){for(var[o,n,a]=e[l],i=!0,c=0;c<o.length;c++)(!1&a||s>=a)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(i=!1,a<s&&(s=a));if(i){e.splice(l--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{328:"617a6376",614:"bde81e50",684:"2e1458dc",969:"135c0a2e"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"71cd5df5",328:"9b40fd3a",684:"5102c637",736:"55f5e7f8",969:"a52ae869"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="your_voice:";r.l=(o,n,a,s)=>{if(e[o])e[o].push(n);else{var i,c;if(void 0!==a)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+a){i=u;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+a),i.src=o),e[o]=[n];var p=(t,r)=>{i.onerror=i.onload=null,clearTimeout(h);var n=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,n.parentNode.removeChild(n),o(c)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){n=s[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var s=r.miniCssF(o),i=r.p+s;if(t(s,i))return n();e(o,i,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={328:1,684:1,969:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var s=r.p+r.u(t),i=new Error,c=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,n[1](i)}};r.l(s,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[s,i,c]=o,d=0;if(s.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var l=c(r)}for(t&&t(o);d<s.length;d++)a=s[d],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},o=self["webpackChunkyour_voice"]=self["webpackChunkyour_voice"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(4001)));o=r.O(o)})();