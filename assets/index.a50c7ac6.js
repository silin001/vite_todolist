import{d as I,s as C,e as N,b,T as M,U as T,K as $,V as S,W as X,X as q,c as p,i as l,a as s,w as o,Y as m,F as w,D as k,o as i,G as y,Z as D,A as V,k as f,I as _}from"./vendor.4caff946.js";/* empty css                  */import{p as z}from"./axios.1fccf6a4.js";const G={class:"reptileBox"},K=l("p",null,"https\u7B80\u5355\u722C\u866B\u6D4B\u8BD5",-1),W=l("p",null,"\u793A\u4F8B\uFF1A\u8C46\u74E3top250\uFF0C https://movie.douban.com/top250",-1),Y=l("p",null," \u793A\u4F8B\uFF1A\u77E5\u4E4E\u6392\u884C\u699C .Card .HotList-item HotList-itemTitle HotList-itemMetrics https://www.zhihu.com/billboard ",-1),Z={class:"w-1-1"},J=l("br",null,null,-1),O=f("X"),P=f("\u6DFB\u52A0\u5B57\u6BB5"),Q=f("Submit"),ee=f("Reset"),te=l("br",null,null,-1),ue=l("h4",null,"\u6570\u636E\u5217\u8868\u5C55\u793A\uFF1A",-1),le={class:"flex"},se=["src"],ie=I({setup(oe){const B=C();N(()=>{});const L=b({required:!0,message:"\u5B57\u6BB5\u4E0D\u5F97\u4E3A\u7A7A\uFF01",trigger:"blur"}),d=b({fieldList:[{value:"li .item"},{id:2,value:"title"}]}),x=()=>{const{fieldList:u}=d;if(u.length>=5){_.warning("\u5B57\u6BB5\u4E0D\u5F97\u8D85\u8FC75\u4E2A\uFF01");return}u.push({id:Date.now(),value:""})},U=(u,e)=>{const{fieldList:n}=d;if(n.length<=1)return!1;n.splice(e,1)},R=u=>{const e=h.value;if(e){if(H(e)){if(!u)return;u.validate(F=>{if(F){console.log("submit!");const{model:{fieldList:r}}=u;if(r.length>=2){const v=r.map(a=>a.value);z("/myApi/reptile",{url:e,list:v}).then(a=>{a.code==200&&(console.log(a.list),g.list=a.list)})}else _.error("\u6700\u5C11\u9700\u8981\u4E24\u4E2A\u5B57\u6BB5\uFF01")}else return _.error("error submit!"),!1})}}else _.error("\u7F51\u7AD9\u4E0D\u5F97\u4E3A\u7A7A\uFF01")},j=u=>{!u||u.resetFields()},g=b({list:[]}),h=C("https://movie.douban.com/top250"),H=u=>{const e=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;return new RegExp(e).test(u)?!0:(_.error("\u8BF7\u8F93\u5165http\u3001https\u5F00\u5934\u7684\u7F51\u7AD9\uFF01"),!1)};return(u,e)=>{const n=M,F=T,r=$,v=S,E=X,a=q;return i(),p("div",G,[K,W,Y,l("div",Z,[s(n,{type:"text",placeholder:"\u8BF7\u8F93\u5165\u7F51\u5740",modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=t=>h.value=t)},null,8,["modelValue"]),J,s(a,{ref_key:"ruleFormRef",ref:B,model:m(d),"label-width":"120px",class:"demo-dynamic"},{default:o(()=>[(i(!0),p(w,null,k(m(d).fieldList,(t,c)=>(i(),y(E,{key:t.id,label:c===0?"\u7236\u7EA7\u9009\u62E9\u5668":"\u5B57\u6BB5"+c,prop:"fieldList."+c+".value",rules:m(L)},{default:o(()=>[s(v,{class:"full",gutter:10},{default:o(()=>[s(F,{span:15},{default:o(()=>[s(n,{placeholder:c===0?"\u8BF7\u8F93\u5165\u7236\u7EA7\u5BB9\u5668id\u6216class\u540D\u79F0":"\u8BF7\u8F93\u5165id\u6216class\u540D\u79F0",modelValue:t.value,"onUpdate:modelValue":A=>t.value=A},null,8,["placeholder","modelValue","onUpdate:modelValue"])]),_:2},1024),m(d).fieldList.length>1?(i(),y(F,{key:0,span:4},{default:o(()=>[s(r,{type:"danger",onClick:A=>U(t,c)},{default:o(()=>[O]),_:2},1032,["onClick"])]),_:2},1024)):D("",!0)]),_:2},1024)]),_:2},1032,["label","prop","rules"]))),128)),s(E,null,{default:o(()=>[s(r,{onClick:x},{default:o(()=>[P]),_:1}),s(r,{type:"primary",onClick:e[1]||(e[1]=t=>R(B.value))},{default:o(()=>[Q]),_:1}),s(r,{onClick:e[2]||(e[2]=t=>j(B.value))},{default:o(()=>[ee]),_:1})]),_:1})]),_:1},8,["model"])]),te,l("ul",null,[ue,(i(!0),p(w,null,k(m(g).list,t=>(i(),p("div",{key:t.id},[l("div",le,[t.img?(i(),p("img",{key:0,width:"100",height:"100",src:t.img,alt:""},null,8,se)):D("",!0),l("div",null,[l("div",null,V(t.title),1),l("div",null,V(t.rating_num),1)])])]))),128))])])}}});export{ie as default};