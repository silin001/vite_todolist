var y=Object.defineProperty,F=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var v=(o,e,t)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,c=(o,e)=>{for(var t in e||(e={}))h.call(e,t)&&v(o,t,e[t]);if(p)for(var t of p(e))w.call(e,t)&&v(o,t,e[t]);return o},d=(o,e)=>F(o,L(e));import{R as E,b as m,M as S,t as f,o as g,c as k,A as _,C,e as N,N as b,O as x,H as V,P as A,y as D,a as I,i as l,Q as P,S as j,p as $,j as M,r as q}from"./vendor.4caff946.js";import{_ as B}from"./index.9b1e106b.js";const z={name:"navLink",props:d(c({},E.props),{title:String}),setup(o){const e=m({}),{route:t,href:s,isActive:a,isExactActive:r,navigate:u}=S(o);return console.log(t,s,a,r,u),d(c({},f(e)),{route:t,isActive:a,navigate:u})}};function H(o,e,t,s,a,r){return g(),k("div",{class:C(["navLink",{active:s.isActive}])},_(s.route.name)+"+ "+_(t.title),3)}var O=B(z,[["render",H],["__scopeId","data-v-367d9552"]]);const Q={name:"routerVuex",components:{NavLink:O},setup(o){const e=x(),t=P(),s=m({});N(()=>{console.log("1useRoute",b),console.log("2useRouter",x)});const a=b();V(()=>a.query,i=>{console.log(i)}),A((i,U)=>{if(!window.confirm("\u786E\u5B9A\u79BB\u5F00\u6B64\u9875\u9762\u5417\uFF1F"))return!1});const r=()=>{e.push("/")},u=()=>{console.log(e);let{href:i}=e.resolve({path:"/aaaa"});window.open(i,"_blank")},n=D(()=>c({},j(["num"]))).value.num.bind({$store:t});console.log(n());const R=()=>{t.dispatch("syncaddnum",1)};return d(c({},f(s)),{goPage:u,add:R,back:r})}},G=o=>($("data-v-f2d8355c"),o=o(),M(),o),J={class:"routerVuex",style:{height:"1000px"}},K=G(()=>l("br",null,null,-1));function T(o,e,t,s,a,r){const u=q("NavLink");return g(),k("div",J,[I(u,{to:"/",title:123}),l("button",{onClick:e[0]||(e[0]=(...n)=>s.goPage&&s.goPage(...n))},"\u65B0\u9875\u9762\u8DF3\u8F6C"),l("button",{onClick:e[1]||(e[1]=(...n)=>s.back&&s.back(...n))},"\u8FD4\u56DE\u9875\u9762"),K,l("button",{onClick:e[2]||(e[2]=(...n)=>s.add&&s.add(...n))},"\u83B7\u53D6store\u6570\u636E\u53EF\u4EE5\u70B9\u51FB:"+_(o.$store.state.num),1)])}var ee=B(Q,[["render",T],["__scopeId","data-v-f2d8355c"]]);export{ee as default};