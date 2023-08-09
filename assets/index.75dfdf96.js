var $=Object.defineProperty,B=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var C=(o,e,d)=>e in o?$(o,e,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[e]=d,m=(o,e)=>{for(var d in e||(e={}))I.call(e,d)&&C(o,d,e[d]);if(x)for(var d of x(e))q.call(e,d)&&C(o,d,e[d]);return o},A=(o,e)=>B(o,E(e));import{s as F,o as i,c,i as l,u as v,v as D,x as M,y as f,z as h,A as y,k as w,B as H,C as N,b as k,e as g,t as b,r as p,F as S,D as V,G as j,H as L,a as T}from"./vendor.4caff946.js";import{_}from"./index.bb721044.js";import{g as z}from"./axios.1fccf6a4.js";const O={name:"header",props:{add:{type:Function,required:!0}},setup(o){const e=F("");return{title:e,addTodo:()=>{const t=e.value;if(console.log(t),!t.trim())return;const a={id:Date.now(),title:t,isCompleted:!1};o.add(a),e.value=""}}}},U={class:"header"},G={class:"todo-header"};function J(o,e,d,t,a,r){return i(),c("div",U,[l("div",G,[v(l("input",{type:"text",placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u4EFB\u52A1\u540D\u79F0\uFF0C\u6309\u56DE\u8F66\u952E\u786E\u8BA4","onUpdate:modelValue":e[0]||(e[0]=n=>t.title=n),onKeyup:e[1]||(e[1]=M((...n)=>t.addTodo&&t.addTodo(...n),["enter"]))},null,544),[[D,t.title]])])])}var K=_(O,[["render",J],["__scopeId","data-v-e8b83a76"]]);const R={name:"footer",props:{todos:{type:Array,required:!0},checkAll:{type:Function,required:!0},clearAllCompletedTodos:{type:Function,required:!0}},setup(o){const e=f(()=>o.todos.reduce((t,a,r)=>t+(a.isCompleted?1:0),0)),d=f({get(){return e.value>0&&o.todos.length===e.value},set(t){o.checkAll(t)}});return{count:e,isCheckAll:d}}},P={class:"footer"},Q={class:"todo-footer"};function W(o,e,d,t,a,r){return i(),c("div",P,[l("div",Q,[l("label",null,[v(l("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=n=>t.isCheckAll=n)},null,512),[[h,t.isCheckAll]])]),l("span",null,[l("span",null,"\u5DF2\u5B8C\u6210"+y(t.count),1),w(" / \u5168\u90E8"+y(d.todos.length),1)]),l("button",{class:"btn btn-danger",onClick:e[1]||(e[1]=(...n)=>d.clearAllCompletedTodos&&d.clearAllCompletedTodos(...n))},"\u6E05\u9664\u5DF2\u5B8C\u6210\u4EFB\u52A1")])])}var X=_(R,[["render",W],["__scopeId","data-v-9c2beeb2"]]);const Y={name:"item",props:{todo:{type:Object,required:!0},del:{type:Function,required:!0},updateTodo:{type:Function,required:!0}},data(){return{mouse:0}},setup(o){const{del:e,todo:d}=o;let t=F(!1);const a=s=>{t.value=s},r=()=>{window.confirm("\u786E\u5B9A\u5220\u9664\u5417\uFF1F")&&e(d.id)},n=f({get(){return d.isCompleted},set(s){o.updateTodo(d,s)}});return{isActive:t,onMouseHandler:a,delTodo:r,isCompleted:n}}},Z={class:"item todo-main"};function ee(o,e,d,t,a,r){return i(),c("div",Z,[l("li",{onMouseenter:e[2]||(e[2]=n=>t.onMouseHandler(!0)),onMouseleave:e[3]||(e[3]=n=>t.onMouseHandler(!1)),class:N({active:t.isActive})},[l("label",null,[v(l("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=n=>t.isCompleted=n)},null,512),[[h,t.isCompleted]]),l("span",null,y(d.todo.title),1)]),l("button",{class:"btn btn-danger",style:H({display:t.isActive?"block":"none"}),onClick:e[1]||(e[1]=(...n)=>t.delTodo&&t.delTodo(...n))},"\u5220\u9664",4)],34)])}var oe=_(Y,[["render",ee],["__scopeId","data-v-7a0b52f1"]]);const te={name:"",props:{todos:{type:Array,default:()=>[]},del:{type:Function,required:!0},updateTodo:{type:Function,required:!0}},components:{Item:oe},setup(){const o=k({});return g(()=>{}),m({},b(o))}},de={class:"list"},ne={className:"todo-main"};function se(o,e,d,t,a,r){const n=p("Item");return i(),c("div",de,[l("ul",ne,[(i(!0),c(S,null,V(d.todos,(s,u)=>(i(),j(n,{key:s.id,todo:s,del:d.del,updateTodo:d.updateTodo},null,8,["todo","del","updateTodo"]))),128))])])}var le=_(te,[["render",se],["__scopeId","data-v-8aef1536"]]);function ae(o){localStorage.setItem("todos_key",JSON.stringify(o))}function re(){return JSON.parse(localStorage.getItem("todos_key")||"[]")}const ue={name:"",components:{Header:K,List:le,Footer:X},setup(){const o=k({todos:[]});g(()=>{setTimeout(()=>{o.todos=re()},1e3)});const e=s=>{o.todos.unshift(s)},d=s=>{o.todos=o.todos.filter(u=>u.id!==s)},t=(s,u)=>{s.isCompleted=u},a=s=>{o.todos.forEach(u=>{u.isCompleted=s})},r=()=>{o.todos=o.todos.filter(s=>!s.isCompleted)};L(()=>o.todos,ae,{deep:!0});const n=()=>{z("/api/test",{}).then(s=>{console.log(s)})};return A(m({},b(o)),{testGet:n,add:e,del:d,updateTodo:t,checkAll:a,clearAllCompletedTodos:r})}},ie={class:"todolist"},ce={class:"todo-container"},_e={class:"todo-wrap"};function pe(o,e,d,t,a,r){const n=p("Header"),s=p("List"),u=p("Footer");return i(),c("div",ie,[l("div",ce,[l("div",_e,[T(n,{add:t.add},null,8,["add"]),T(s,{todos:o.todos,del:t.del,updateTodo:t.updateTodo},null,8,["todos","del","updateTodo"]),T(u,{todos:o.todos,checkAll:t.checkAll,clearAllCompletedTodos:t.clearAllCompletedTodos},null,8,["todos","checkAll","clearAllCompletedTodos"])])])])}var Te=_(ue,[["render",pe],["__scopeId","data-v-7133fc68"]]);export{Te as default};
