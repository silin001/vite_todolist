var F=Object.defineProperty,L=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var v=(o,e,t)=>e in o?F(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,c=(o,e)=>{for(var t in e||(e={}))y.call(e,t)&&v(o,t,e[t]);if(p)for(var t of p(e))N.call(e,t)&&v(o,t,e[t]);return o},i=(o,e)=>L(o,R(e));import{R as S,b as m,L as A,t as g,o as k,c as f,x as _,z as B,e as V,M as x,N as b,C as D,s as I,a as w,h as d,O as E,P,J as $,K as j,r as z}from"./vendor.02a9f02b.js";import{_ as C}from"./index.608f79d8.js";const M={name:"navLink",props:i(c({},S.props),{title:String}),setup(o){const e=m({}),{route:t,href:s,isActive:n,isExactActive:r,navigate:u}=A(o);return console.log(t,s,n,r,u),i(c({},g(e)),{route:t,isActive:n,navigate:u})}};function q(o,e,t,s,n,r){return k(),f("div",{class:B(["navLink",{active:s.isActive}])}," \u5C55\u793Aroute\u540D\u79F0+props \u6807\u9898\u53C2\u6570\uFF1A "+_(s.route.name)+"+ "+_(t.title),3)}var J=C(M,[["render",q],["__scopeId","data-v-1ecc53fd"]]);const K={name:"routerVuex",components:{NavLink:J},setup(o){const e=b(),t=E(),s=m({});V(()=>{console.log("1useRoute",x),console.log("2useRouter",b)});const n=x();D(()=>n.query,l=>{console.log(l)});const r=()=>{e.push("/")},u=()=>{console.log(e);let{href:l}=e.resolve({path:"/aaaa"});window.open(l,"_blank")},a=I(()=>c({},P(["num"]))).value.num.bind({$store:t});console.log(a());const h=()=>{t.dispatch("asyncAddNum",1)};return i(c({},g(s)),{goPage:u,add:h,back:r})}},O=o=>($("data-v-5015746a"),o=o(),j(),o),G={class:"routerVuex",style:{height:"1000px"}},H=O(()=>d("br",null,null,-1));function Q(o,e,t,s,n,r){const u=z("NavLink");return k(),f("div",G,[w(u,{to:"/",title:"\u6807\u9898\u53C2\u6570"}),d("button",{onClick:e[0]||(e[0]=(...a)=>s.goPage&&s.goPage(...a))},"\u65B0\u9875\u9762\u8DF3\u8F6C"),d("button",{onClick:e[1]||(e[1]=(...a)=>s.back&&s.back(...a))},"\u8FD4\u56DE\u9875\u9762"),H,d("button",{onClick:e[2]||(e[2]=(...a)=>s.add&&s.add(...a))},"\u70B9\u51FB\uFF0Cstore\u6570\u636E++ "+_(o.$store.state.num),1)])}var X=C(K,[["render",Q],["__scopeId","data-v-5015746a"]]);export{X as default};