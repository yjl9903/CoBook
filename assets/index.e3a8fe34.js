import{v as ie,a as ue,d as A,b as S,r as v,c as P,o as p,e as F,u as s,f as w,w as d,N as le,g as G,h as l,F as C,i as ce,j as de,p as fe,k as h,l as u,t as y,I as pe,P as me,m as B,L as _e,n as R,q as ge,A as ve,s as O,x as K,y as he,C as q,z as ye,B as we,D as be,E as T,T as ke,G as Ee,H as I,J as xe,K as Fe,M as De,O as Le,Q as J,R as Q,S as Ce,U as Se,V as $e,W as Be,X as Pe}from"./vendor.a5df7e50.js";const Oe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};Oe();function Re(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:a,onRegistered:o,onRegisterError:r}=t;let i;const m=async(c=!0)=>{};return"serviceWorker"in navigator&&(i=new ie("/sw.js",{scope:"/",type:"classic"}),i.addEventListener("activated",c=>{c.isUpdate?window.location.reload():a==null||a()}),i.register({immediate:e}).then(c=>{o==null||o(c)}).catch(c=>{r==null||r(c)})),m}const j="Coin Book",X="https://cobook-worker.yjl9903.workers.dev",Te=[{name:"Breakfast",icon:"/img/breakfast.svg",category:"Food",tags:["Food","Breakfast"],amount:10},{name:"Lunch",icon:"/img/lunch.svg",category:"Food",tags:["Food","Lunch"],amount:10},{name:"Dinner",icon:"/img/dinner.svg",category:"Food",tags:["Food","Dinner"],amount:10},{name:"Tea",icon:"/img/tea.svg",category:"Drink",tags:["Drink"]}],je=[{name:"Food",color:"#7dd3fc"},{name:"Drink",color:"#fda4af"},{name:"Breakfast",color:"#fdba74"},{name:"Lunch",color:"#86efac"},{name:"Dinner",color:"#f9a8d4"}],$=[{name:"Food",color:"#7dd3fc"},{name:"Drink",color:"#93c5fd"}];var Ve=Object.defineProperty,Ae=Object.defineProperties,Ne=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,M=(t,e,n)=>e in t?Ve(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,U=(t,e)=>{for(var n in e||(e={}))Ie.call(e,n)&&M(t,n,e[n]);if(H)for(var n of H(e))He.call(e,n)&&M(t,n,e[n]);return t},z=(t,e)=>Ae(t,Ne(e)),x=class{constructor(t,e,n){this.errorHandler=[],this.fingerprint=n,this.api=ue.create({baseURL:t,headers:{Authorization:e}})}async validate(){try{return await this.api.get("/"),!0}catch{return!1}}async create(t){const{data:e}=await this.api.post("/account",z(U({},t),{timestamp:new Date().getTime(),fingerprint:this.fingerprint}));if(x.isResponseError(e))throw await this.handleError(e),e;return e}async update(t,e){const{data:n}=await this.api.put("/account",z(U({},e),{timestamp:t,fingerprint:this.fingerprint}));if(x.isResponseError(n))throw await this.handleError(n),n;return n}async delete(t){const{data:e}=await this.api.delete(`/account/${t}`);return!x.isResponseError(e)}async list(){const{data:t}=await this.api.get("/accounts");if(x.isResponseError(t))throw await this.handleError(t),t;return t.accounts}static isResponseError(t){return!t||t.status==="ERROR"}onError(t){this.errorHandler.push(t)}async handleError(t){await Promise.all(this.errorHandler.map(e=>e(t)))}};const Me="modulepreload",W={},Ue="/",V=function(e,n){return!n||n.length===0?e():Promise.all(n.map(a=>{if(a=`${Ue}${a}`,a in W)return;W[a]=!0;const o=a.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":Me,o||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),o)return new Promise((m,c)=>{i.addEventListener("load",m),i.addEventListener("error",c)})})).then(()=>e())};async function Y(){return await(await(await V(()=>import("./fp.esm.27f96b96.js"),[])).load()).get()}const ze=Y();async function We(){try{return await ze}catch{return await Y()}}const L=A("authorization",{state:()=>({fingerprint:"",pass:""}),getters:{client:t=>new x(X,t.pass,t.fingerprint)},persist:!0}),Z=A("authorization/valid",{state:()=>({ok:!1})});async function ee(){const t=Z();if(t.ok)return!0;const e=L(),n=e.pass!==""&&e.fingerprint!==""&&await e.client.validate();return t.ok=n,n}async function kt(t){const e=Z(),n=L();return n.fingerprint=(await We()).visitorId,await new x(X,t,n.fingerprint).validate()?(e.ok=!0,n.pass=t,!0):!1}const te="EnterHome";const Ge={style:{"font-weight":"bold"}},Ke=S({setup(t){const e=ce(),n=de(),a=v(!1);fe(te,a),ee().then(c=>a.value=c);const o=P(()=>e.name==="Login"),r=v(!1),i=[{text:"\u8BB0\u5F55",icon:"home-o"},{text:"\u5173\u4E8E",icon:"info-o"}],m=c=>{c.text===i[0].text?n.push({name:"Home"}):c.text===i[1].text&&n.push({name:"About"})};return(c,b)=>{const k=h("router-view");return p(),F(C,null,[!s(o)&&a.value?(p(),w(s(le),{key:0,fixed:"",placeholder:""},{title:d(()=>[u("span",Ge,y(s(j)),1)]),right:d(()=>[l(s(me),{show:r.value,"onUpdate:show":b[0]||(b[0]=D=>r.value=D),actions:i,onSelect:m,placement:"bottom-end","show-arrow":!1,offset:[8,12]},{reference:d(()=>[l(s(pe),{name:"ellipsis",color:"black",mr:"1"})]),_:1},8,["show"])]),_:1})):G("",!0),l(k,{id:"main-view",h:"full"})],64)}}}),ne=A("account",{state(){return{accounts:[]}},actions:{async init(){const e=await L().client.list();this.accounts=e},async push(t){const n=await L().client.create({amount:t.amount,category:t.category,tags:t.tags,description:t.description});this.accounts.push(n)},async delete(t){const n=await L().client.delete(t.timestamp);if(n){const a=this.accounts.findIndex(o=>o.timestamp===t.timestamp);return a!==-1&&this.accounts.splice(a,1),n}else return!1}},persist:!0});const qe={flex:"",justify:"between",items:"center"},Je={"inline-block":"",mr:"2",text:"gray-400"},Qe={px:"4",pb:"8"},Xe={flex:"",justify:"between"},Ye=u("span",null,"\u91D1\u989D",-1),Ze={flex:"",justify:"between"},et=u("span",null,"\u5206\u7C7B",-1),tt={flex:"",justify:"between"},nt=u("span",null,"\u6807\u7B7E",-1),ot={flex:"",justify:"between"},at=u("span",null,"\u65F6\u95F4",-1),rt={flex:"",justify:"between"},st=u("span",null,"\u5907\u6CE8",-1),it={mt:"4",text:"right"},ut=O("\u5220\u9664"),lt=S({setup(t){const e=ne();e.init();const n=v(),a=P({get(){return!!n.value},set(){n.value=void 0}}),o=async r=>{r&&(await e.delete(r),n.value=void 0,K({message:"\u5220\u9664\u6210\u529F",type:"success"}))};return(r,i)=>{const m=h("Category"),c=h("van-cell"),b=h("Tag"),k=h("van-cell-group"),D=h("van-button");return p(),w(k,{inset:""},{default:d(()=>[l(s(_e),null,{default:d(()=>[(p(!0),F(C,null,B(s(e).accounts.slice().reverse(),f=>(p(),w(c,{key:f.timestamp,clickable:"",onClick:g=>n.value=f},{default:d(()=>[u("div",qe,[u("span",null,[u("span",Je,y(s(R)(new Date(f.timestamp),"yyyy-MM-dd hh:mm")),1),l(m,{category:f.category},null,8,["category"])]),u("span",null,"\uFFE5 "+y(f.amount),1)])]),_:2},1032,["onClick"]))),128))]),_:1}),l(s(ve),{show:s(a),"onUpdate:show":i[1]||(i[1]=f=>ge(a)?a.value=f:null),title:n.value&&s(R)(new Date(n.value.timestamp),"yyyy-MM-dd hh:mm"),duration:.2,"overlay-style":{background:"rgba(0, 0, 0, .1)"}},{default:d(()=>[u("div",Qe,[n.value?(p(),w(k,{key:0},{default:d(()=>[l(c,null,{default:d(()=>[u("div",Xe,[Ye,u("span",null,"\uFFE5 "+y(n.value.amount),1)])]),_:1}),l(c,null,{default:d(()=>[u("div",Ze,[et,l(m,{category:n.value.category},null,8,["category"])])]),_:1}),l(c,null,{default:d(()=>[u("div",tt,[nt,u("span",null,[(p(!0),F(C,null,B(n.value.tags,f=>(p(),w(b,{ml:"1",tag:f},null,8,["tag"]))),256))])])]),_:1}),l(c,null,{default:d(()=>[u("div",ot,[at,u("span",null,y(s(R)(new Date(n.value.timestamp),"yyyy-MM-dd hh:mm")),1)])]),_:1}),l(c,null,{default:d(()=>[u("div",rt,[st,u("span",null,y(n.value.description),1)])]),_:1})]),_:1})):G("",!0),u("div",it,[l(D,{round:"",icon:"delete",type:"danger",onClick:i[0]||(i[0]=f=>o(n.value))},{default:d(()=>[ut]),_:1})])])]),_:1},8,["show","title","duration","overlay-style"])]),_:1})}}});const ct={id:"home",h:"full",pt:"4"},dt={flex:"",justify:"between"},ft=u("span",null,"\u5206\u7C7B",-1),pt={flex:"","flex-col":"",items:"center",justify:"center"},mt={class:"van-grid-item__text mt-2"},_t={style:{margin:"16px"}},gt=O("\u8BB0\u5F55"),vt=S({setup(t){he(te).value=!0;const e=ne(),n=v(),a=v(!1),o=v(),r=v(""),i=f=>(r.value="",/\d+\.\d\d\d+$/.test(f)?Number.parseFloat(f).toFixed(2):f),m=v($.length>0?$[0].name:""),c=v([]),b=v(""),k=f=>{m.value=f.category,f.amount&&(o.value=f.amount),f.tags&&(c.value=f.tags),f.description&&(b.value="")},D=async()=>{if(!o.value||o.value===""){r.value="\u8BF7\u8F93\u5165\u91D1\u989D";return}await e.push({amount:+o.value,category:m.value,tags:c.value,description:b.value}),K({message:"\u8BB0\u5F55\u6210\u529F",type:"success"}),o.value="",c.value=[],b.value=""};return(f,g)=>{const ae=h("Category"),re=h("van-image"),se=h("van-button");return p(),F("div",ct,[l(s(q),{inset:""},{default:d(()=>[l(s(we),{modelValue:o.value,"onUpdate:modelValue":g[0]||(g[0]=_=>o.value=_),label:"\u91D1\u989D",readonly:"",clickable:"",clearable:"",formatter:i,maxlength:10,"error-message":r.value,"error-message-align":"right",onTouchstart:g[1]||(g[1]=be(_=>a.value=!0,["stop"])),"input-align":"right"},null,8,["modelValue","error-message"]),l(s(T),null,{default:d(()=>[u("div",dt,[ft,l(ae,{category:m.value},null,8,["category"])])]),_:1}),l(s(T),null,{default:d(()=>[l(s(ke),{active:n.value,"onUpdate:active":g[2]||(g[2]=_=>n.value=_)},{default:d(()=>[(p(!0),F(C,null,B(s($),_=>(p(),w(s(Fe),{key:_.name,title:_.name},{default:d(()=>[l(s(Ee),{border:!1,clickable:""},{default:d(()=>[l(s(I),{icon:"success",text:"\u4F7F\u7528",onClick:E=>k({category:_.name})},null,8,["onClick"]),(p(!0),F(C,null,B(s(Te).filter(E=>E.category===_.name),E=>(p(),w(s(I),{onClick:wt=>k(E)},{default:d(()=>[u("div",pt,[l(re,{src:E.icon,height:"50%",width:"50%"},{loading:d(()=>[l(s(xe),{type:"spinner",size:"20"})]),_:2},1032,["src"]),u("span",mt,y(E.name),1)])]),_:2},1032,["onClick"]))),256))]),_:2},1024)]),_:2},1032,["title"]))),128))]),_:1},8,["active"])]),_:1})]),_:1}),u("div",_t,[l(se,{round:"",block:"",type:"success",onClick:D},{default:d(()=>[gt]),_:1})]),l(lt),l(s(ye),{modelValue:o.value,"onUpdate:modelValue":g[3]||(g[3]=_=>o.value=_),"extra-key":".",show:a.value,maxlength:10,onBlur:g[4]||(g[4]=_=>a.value=!1)},null,8,["modelValue","show"])])}}}),N=De({history:Le(),routes:[{path:"/",name:"Home",component:vt},{path:"/login",name:"Login",component:()=>V(()=>import("./Login.ed76846d.js"),["assets/Login.ed76846d.js","assets/Login.79953f6d.css","assets/vendor.a5df7e50.js","assets/vendor.b7162192.css"]),meta:{title:"\u767B\u9646"}},{path:"/about",name:"About",component:()=>V(()=>import("./About.c6d044e4.js"),["assets/About.c6d044e4.js","assets/About.1be23510.css","assets/vendor.a5df7e50.js","assets/vendor.b7162192.css"]),meta:{title:"\u5173\u4E8E"}}],scrollBehavior(t,e,n){return n||{top:0}}});N.beforeEach(async t=>t.name==="Login"||await ee()?!0:{name:"Login"});N.beforeEach(t=>{t.meta.title?document.title=t.meta.title+" - "+j:document.title=j});const ht=S({props:{tag:null},setup(t){const e=t,n=P(()=>{var a,o;return typeof e.tag=="string"?{name:e.tag,color:(o=(a=je.find(r=>r.name===e.tag))==null?void 0:a.color)!=null?o:"#F2F3F5"}:e.tag});return(a,o)=>(p(),w(s(J),{color:s(n).color},{default:d(()=>[Q(a.$slots,"default",{},()=>[O(y(s(n).name),1)])]),_:3},8,["color"]))}}),yt=S({props:{category:null},setup(t){const e=t,n=P(()=>{var a,o;return typeof e.category=="string"?{name:e.category,color:(o=(a=$.find(r=>r.name===e.category))==null?void 0:a.color)!=null?o:"#F2F3F5"}:e.category});return(a,o)=>(p(),w(s(J),{color:s(n).color},{default:d(()=>[Q(a.$slots,"default",{},()=>[O(y(s(n).name),1)])]),_:3},8,["color"]))}});Re({});const oe=Ce();oe.use(Se);$e(Ke).component("Category",yt).component("Tag",ht).use(T).use(q).use(Be).use(Pe).use(N).use(oe).mount("#app");{document.addEventListener("gesturestart",function(e){e.preventDefault()}),document.addEventListener("dblclick",function(e){e.preventDefault()}),document.addEventListener("touchstart",function(e){e.touches.length>1&&e.preventDefault()});let t=0;document.addEventListener("touchend",function(e){const n=new Date().getTime();n-t<=300&&e.preventDefault(),t=n},!1)}export{kt as l,j as n};
