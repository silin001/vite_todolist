var T=Object.defineProperty,y=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var f=(t,e,a)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,D=(t,e)=>{for(var a in e||(e={}))w.call(e,a)&&f(t,a,e[a]);if(m)for(var a of m(e))S.call(e,a)&&f(t,a,e[a]);return t},g=(t,e)=>y(t,I(e));import{t as h,o as C,c as v,i as n,A as l,k,b as F,e as G,K as N,a as j,w as P,L as V,p as L,j as M,r as O}from"./vendor.4caff946.js";/* empty css                  */import{_ as x}from"./index.bb721044.js";import{g as R,p as U}from"./axios.1fccf6a4.js";const K={props:{propData:{type:Object,default:()=>({})}},setup(t){return h(t),{}}},W={class:"aBox"},$=k(" \u6211\u662Fa\u7EC4\u4EF6\u5C55\u793A\u4F20\u8FDB\u6765\u7684data\u6570\u636E: ");function q(t,e,a,o,s,i){return C(),v("div",W,[$,n("li",null,l(a.propData.name),1),n("li",null,l(a.propData.value),1),n("li",null,l(a.propData.unit),1)])}var z=x(K,[["render",q]]);let p=F({a:{name:"aaa",value:"1000",unit:""},b:{name:"bbb",value:"2000",unit:""}});function H(){G(()=>{t()});const t=()=>{setTimeout(()=>{const s=[{name:"\u6539\u53D8\u540E\u7684\u503Caaa",value:10,unit:"\u4E2A"},{name:"\u6539\u53D8\u540E\u7684\u503Cbbb",value:20,unit:"\u4E2A"}];e(s[0]),a(s[1])},2e3)};function e(s){console.log(s),p.a=s}const a=s=>p.b=s,o=()=>{alert("\u6211\u662Ftest.js\u7684test\u65B9\u6CD5")};return g(D({},h(p)),{testClick:o})}function J(){const t=F({list:[]});return setTimeout(()=>{t.list=[1,2,3]},1e3),t}const Q={name:"Test",components:{Acomponent:z},data(){return{num:100}},setup(t){const a=V().appContext.config.globalProperties.$fetchPostData;let{a:o,b:s,testClick:i}=H();return{obj1:J(),getData:()=>{R("/myApi/list",{}).then(c=>{console.log(c)})},getData2:()=>{U("/myApi/postTest",{id:111}).then(c=>{console.log(c)})},a:o,b:s,testClick:i,fetchGetData:()=>{const c="GDWISDOM",A="gdjg",B="6cb02d133bea4b02aa2c9c788d673dcf",b=new URLSearchParams;b.append("platNo",c),a({url:"/video/api/open/token/foreignGet",data:b,headers:{__u__:A,__s__:B,"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(E=>{console.log("res====",E)})}}}},r=t=>(L("data-v-06de7d41"),t=t(),M(),t),X={class:"Test"},Y=r(()=>n("h2",null,"test page",-1)),Z=k("fetch\u8BF7\u6C42\u7B2C\u4E09\u65B9\u6570\u636E"),tt=r(()=>n("br",null,null,-1)),et=r(()=>n("br",null,null,-1)),at=r(()=>n("h2",null,"hooks\u4F7F\u7528\uFF1A",-1)),ot=r(()=>n("br",null,null,-1));function nt(t,e,a,o,s,i){const d=N,_=O("Acomponent");return C(),v("div",X,[Y,n("button",{onClick:e[0]||(e[0]=(...u)=>o.getData&&o.getData(...u))},"axios-get\u8BF7\u6C42\u670D\u52A1\u5668\u6570\u636E"),n("button",{onClick:e[1]||(e[1]=(...u)=>o.getData2&&o.getData2(...u))},"axios-post\u8BF7\u6C42\u670D\u52A1\u5668\u6570\u636E"),j(d,{type:"primary",onClick:o.fetchGetData},{default:P(()=>[Z]),_:1},8,["onClick"]),tt,et,at,n("p",null,"hooks b.js\u6570\u636E\uFF1A "+l(o.obj1.list),1),ot,n("p",null,"test.js\u6570\u636Eb: "+l(o.b),1),n("button",{onClick:e[2]||(e[2]=(...u)=>o.testClick&&o.testClick(...u))},"click test!"),j(_,{propData:o.a},null,8,["propData"])])}var dt=x(Q,[["render",nt],["__scopeId","data-v-06de7d41"]]);export{dt as default};
