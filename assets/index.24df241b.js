var _e=Object.defineProperty;var X=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var Y=(t,e,n)=>e in t?_e(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Z=(t,e)=>{for(var n in e||(e={}))he.call(e,n)&&Y(t,n,e[n]);if(X)for(var n of X(e))ye.call(e,n)&&Y(t,n,e[n]);return t};import{v as we,a as be,d as G,b as V,u as ke,c as xe,r as _,e as I,f as w,o as g,g as k,h as l,i as x,w as d,j as p,t as $,k as u,I as $e,P as Ee,N as Ve,l as z,F as E,p as Ce,m as De,n as Fe,q as L,C as Se,s as Be,x as W,y as Le,A as q,z as T,B as U,D as K,E as re,G as H,H as Pe,J as Oe,K as P,L as j,M as Re,O as Te,Q as N,T as Ie,R as le,S as Ae,U as ee,V as Ue,W as He,X as je,Y as Ne,Z as ue,_ as Me,$ as Ge,a0 as ze,a1 as We,a2 as qe}from"./vendor.6183e4c9.js";const Ke=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};Ke();function Je(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:a,onRegistered:o,onRegisterError:s}=t;let i;const f=async(r=!0)=>{};return"serviceWorker"in navigator&&(i=new we("/sw.js",{scope:"/",type:"classic"}),i.addEventListener("activated",r=>{r.isUpdate?window.location.reload():a==null||a()}),i.register({immediate:e}).then(r=>{o==null||o(r)}).catch(r=>{s==null||s(r)})),f}const M="Coin Book",ie="https://cobook-worker.yjl9903.workers.dev",Qe=[{name:"Breakfast",icon:"/img/breakfast.svg",category:"Food",tags:["Breakfast"]},{name:"Lunch",icon:"/img/lunch.svg",category:"Food",tags:["Lunch"]},{name:"Dinner",icon:"/img/dinner.svg",category:"Food",tags:["Dinner"]},{name:"Tea",icon:"/img/tea.svg",category:"Drink",tags:["Tea"],amount:10},{name:"Moon",icon:"/img/Intertwined.png",category:"Game",tags:["Genshin Impact"],amount:30}],ce=[{name:"Breakfast",color:"#d6d3d1"},{name:"Lunch",color:"#5eead4"},{name:"Dinner",color:"#5eead4"},{name:"Genshin Impact",color:"#fcd34d"},{name:"Tea",color:"#93c5fd"}],O=[{name:"Food",color:"#f9a8d4"},{name:"Drink",color:"#86efac"},{name:"Game",color:"#6ee7b7"}];var Xe=Object.defineProperty,Ye=Object.defineProperties,Ze=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable,ne=(t,e,n)=>e in t?Xe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,oe=(t,e)=>{for(var n in e||(e={}))et.call(e,n)&&ne(t,n,e[n]);if(te)for(var n of te(e))tt.call(e,n)&&ne(t,n,e[n]);return t},ae=(t,e)=>Ye(t,Ze(e)),S=class{constructor(t,e,n){this.errorHandler=[],this.fingerprint=n,this.api=be.create({baseURL:t,headers:{Authorization:e}})}async validate(){try{return await this.api.get("/"),!0}catch{return!1}}async create(t){const{data:e}=await this.api.post("/account",ae(oe({},t),{timestamp:new Date().toISOString(),fingerprint:this.fingerprint}));if(S.isResponseError(e))throw await this.handleError(e),e;return e}async update(t,e){const{data:n}=await this.api.put(`/account/${t}`,ae(oe({},e),{fingerprint:this.fingerprint}));if(S.isResponseError(n))throw await this.handleError(n),n;return n}async delete(t){const{data:e}=await this.api.delete(`/account/${t}`);return!S.isResponseError(e)}async list(){const{data:t}=await this.api.get("/accounts");if(S.isResponseError(t))throw await this.handleError(t),t;return t.accounts}static isResponseError(t){return!t||t.status==="ERROR"}onError(t){this.errorHandler.push(t)}async handleError(t){await Promise.all(this.errorHandler.map(e=>e(t)))}};const nt="modulepreload",se={},ot="/",R=function(e,n){return!n||n.length===0?e():Promise.all(n.map(a=>{if(a=`${ot}${a}`,a in se)return;se[a]=!0;const o=a.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${s}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":nt,o||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),o)return new Promise((f,r)=>{i.addEventListener("load",f),i.addEventListener("error",r)})})).then(()=>e())};async function de(){return await(await(await R(()=>import("./fp.esm.27f96b96.js"),[])).load()).get()}const at=de();async function st(){try{return await at}catch{return await de()}}const B=G("authorization",{state:()=>({fingerprint:"",pass:""}),getters:{client:t=>new S(ie,t.pass,t.fingerprint)},persist:!0}),me=G("authorization/valid",{state:()=>({ok:!1})});async function pe(){const t=me();if(t.ok)return!0;const e=B(),n=e.pass!==""&&e.fingerprint!==""&&await e.client.validate();return t.ok=n,n}async function Gt(t){const e=me(),n=B();return n.fingerprint=(await st()).visitorId,await new S(ie,t,n.fingerprint).validate()?(e.ok=!0,n.pass=t,!0):!1}const fe="EnterHome";const rt={style:{"font-weight":"bold"}},lt=V({setup(t){const e=ke(),n=xe(),a=_(!1);Ce(fe,a),pe().then(r=>a.value=r);const o=I(()=>e.name==="Login"),s=_(!1),i=[{text:"\u8BB0\u5F55",icon:"home-o"},{text:"\u6240\u6709",icon:"orders-o"},{text:"\u5173\u4E8E",icon:"info-o"}],f=r=>{r.text===i[0].text?n.push({name:"Home"}):r.text===i[1].text?n.push({name:"Account"}):r.text===i[2].text&&n.push({name:"About"})};return(r,c)=>{const m=w("router-view");return g(),k(E,null,[!l(o)&&a.value?(g(),x(l(Ve),{key:0,fixed:"",placeholder:""},{title:d(()=>[p("span",rt,$(l(M)),1)]),right:d(()=>[u(l(Ee),{show:s.value,"onUpdate:show":c[0]||(c[0]=C=>s.value=C),actions:i,onSelect:f,placement:"bottom-end","show-arrow":!1,offset:[8,12]},{reference:d(()=>[u(l($e),{name:"ellipsis",color:"black",mr:"1"})]),_:1},8,["show"])]),_:1})):z("",!0),u(m,{id:"main-view",h:"full"})],64)}}});const J=G("account",{state(){return{accounts:[]}},actions:{async init(){const e=await B().client.list();this.accounts=e},async push(t){const n=await B().client.create({amount:t.amount,category:t.category,tags:t.tags,description:t.description});this.accounts.push(n)},async update(t,e){const a=await B().client.update(t,e),o=this.accounts.findIndex(s=>s.timestamp===t);return o!==-1&&(this.accounts.splice(o,1),this.accounts.push(a),this.accounts.sort((s,i)=>s.timestamp.localeCompare(i.timestamp))),a},async delete(t){const n=await B().client.delete(t.timestamp);if(n){const a=this.accounts.findIndex(o=>o.timestamp===t.timestamp);return a!==-1&&this.accounts.splice(a,1),n}else return!1}},persist:!0}),ut={flex:"",justify:"between"},it=p("span",null,"\u6807\u7B7E",-1),ct={px:"4",pb:"8"},dt={flex:"",items:"center"},ve=V({props:{modelValue:null},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,{modelValue:a}=De(n),o=_(!1),s=_([]);Fe(()=>{s.value=[]});const i=f=>{s.value[f].toggle()};return(f,r)=>{const c=w("Tag"),m=w("van-cell"),C=w("van-cell-group");return g(),k(E,null,[u(m,{clickable:"",onClick:r[0]||(r[0]=v=>o.value=!0)},{default:d(()=>[p("div",ut,[it,p("span",null,[(g(!0),k(E,null,L(l(a),v=>(g(),x(c,{ml:"1",tag:v},null,8,["tag"]))),256))])])]),_:1}),u(l(q),{show:o.value,"onUpdate:show":r[3]||(r[3]=v=>o.value=v),title:"\u6807\u7B7E",duration:.2,"overlay-style":{background:"rgba(0, 0, 0, .1)"}},{default:d(()=>[p("div",ct,[u(l(Se),{"model-value":l(a),"onUpdate:modelValue":r[2]||(r[2]=v=>e("update:modelValue",v))},{default:d(()=>[u(C,null,{default:d(()=>[(g(!0),k(E,null,L(l(ce),(v,h)=>(g(),x(m,{clickable:"",key:v.name,onClick:D=>i(h)},{"right-icon":d(()=>[u(l(Be),{name:v.name,ref_for:!0,ref:D=>s.value[h]=D,onClick:r[1]||(r[1]=W(()=>{},["stop"])),shape:"square"},null,8,["name"])]),default:d(()=>[p("div",dt,[p("span",{h:"4",w:"4",mr:"2","inline-block":"",rounded:"full",style:Le({background:v.color})},null,4),p("span",null,$(v.name),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["model-value"])])]),_:1},8,["show","duration","overlay-style"])],64)}}}),mt={px:"4",pb:"8"},pt=V({props:{title:null},setup(t){const e=_(!1);return(n,a)=>{const o=w("van-cell");return g(),k(E,null,[u(o,{clickable:"",onClick:a[0]||(a[0]=s=>e.value=!0)},{default:d(()=>[T(n.$slots,"cell")]),_:3}),u(l(q),{show:e.value,"onUpdate:show":a[1]||(a[1]=s=>e.value=s),title:t.title,duration:.2,"overlay-style":{background:"rgba(0, 0, 0, .1)"}},{default:d(()=>[p("div",mt,[T(n.$slots,"default",{close:()=>e.value=!1})])]),_:3},8,["show","title","duration","overlay-style"])],64)}}}),ft=V({props:{modelValue:null},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,a=_(!1),o=_(""),s=_("");U(()=>n.modelValue,f=>{o.value=String(f)},{immediate:!0}),U(o,f=>{e("update:modelValue",+f)});const i=f=>(s.value="",/\d+\.\d\d\d+$/.test(f)?Number.parseFloat(f).toFixed(2):f);return(f,r)=>(g(),k(E,null,[u(l(K),{font:"mono",modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=c=>o.value=c),label:"\u91D1\u989D",readonly:"",clickable:"",clearable:"",formatter:i,maxlength:10,"error-message":s.value,"error-message-align":"right",onTouchstart:r[1]||(r[1]=W(c=>a.value=!0,["stop"])),"input-align":"right"},null,8,["modelValue","error-message"]),u(l(re),{modelValue:o.value,"onUpdate:modelValue":r[2]||(r[2]=c=>o.value=c),"extra-key":".",show:a.value,maxlength:10,onBlur:r[3]||(r[3]=c=>a.value=!1)},null,8,["modelValue","show"])],64))}}),vt={px:"4",pb:"8"},gt={flex:"",justify:"between"},_t=p("span",null,"\u5206\u7C7B",-1),ht={flex:"",justify:"between"},yt=p("span",null,"\u65F6\u95F4",-1),wt={mt:"4",text:"right"},bt=P("\u4FDD\u5B58"),kt=P("\u5220\u9664"),xt=V({props:{account:null},emits:["close"],setup(t,{emit:e}){const n=t,a=_(n.account),o=_(!1),s=I({get(){var c,m;return((c=a.value)==null?void 0:c.timestamp)?new Date((m=a.value)==null?void 0:m.timestamp):new Date},set(c){var m;((m=a.value)==null?void 0:m.timestamp)&&(a.value.timestamp=c.toISOString())}});U(()=>n.account,c=>{c&&(a.value=Z({},c),o.value=!0)});const i=J(),f=async()=>{a.value&&(await i.update(n.account.timestamp,a.value),o.value=!1,j({message:"\u66F4\u65B0\u6210\u529F",type:"success"}))},r=async()=>{a.value&&(await i.delete(a.value),o.value=!1,j({message:"\u5220\u9664\u6210\u529F",type:"success"}))};return(c,m)=>{const C=w("Category"),v=w("van-cell"),h=w("van-cell-group"),D=w("van-button");return g(),x(l(q),{show:o.value,"onUpdate:show":m[6]||(m[6]=y=>o.value=y),title:t.account&&l(H)(new Date(t.account.timestamp),"yyyy-MM-dd HH:mm"),duration:.2,"overlay-style":{background:"rgba(0, 0, 0, .1)"},onClose:m[7]||(m[7]=y=>e("close"))},{default:d(()=>[p("div",vt,[a.value?(g(),x(h,{key:0},{default:d(()=>[u(ft,{modelValue:a.value.amount,"onUpdate:modelValue":m[0]||(m[0]=y=>a.value.amount=y)},null,8,["modelValue"]),u(v,null,{default:d(()=>[p("div",gt,[_t,u(C,{category:a.value.category},null,8,["category"])])]),_:1}),u(ve,{modelValue:a.value.tags,"onUpdate:modelValue":m[1]||(m[1]=y=>a.value.tags=y)},null,8,["modelValue"]),u(pt,{title:"\u65F6\u95F4"},{cell:d(()=>[p("div",ht,[yt,p("span",null,$(l(H)(new Date(a.value.timestamp),"yyyy-MM-dd HH:mm:ss")),1)])]),default:d(({close:y})=>[u(l(Pe),{modelValue:l(s),"onUpdate:modelValue":m[2]||(m[2]=A=>Oe(s)?s.value=A:null),type:"datetime","max-date":new Date(new Date().getTime()+3600*1e3),onConfirm:y,onCancel:()=>(s.value=new Date(t.account.timestamp),y())},null,8,["modelValue","max-date","onConfirm","onCancel"])]),_:1}),u(l(K),{modelValue:a.value.description,"onUpdate:modelValue":m[3]||(m[3]=y=>a.value.description=y),rows:"2",autosize:"",label:"\u5907\u6CE8",type:"textarea",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1})):z("",!0),p("div",wt,[u(D,{round:"",icon:"guide-o",type:"success",mr:"4",onClick:m[4]||(m[4]=y=>f())},{default:d(()=>[bt]),_:1}),u(D,{round:"",icon:"delete",type:"danger",onClick:m[5]||(m[5]=y=>r())},{default:d(()=>[kt]),_:1})])])]),_:1},8,["show","title","duration","overlay-style"])}}});const $t={flex:"",justify:"between",items:"center"},Et={"inline-flex":"",items:"center"},Vt={"inline-block":"",mr:"2",text:"gray-400"},Ct={key:0,ml:"2"},Dt={font:"mono"},Ft=V({setup(t){const e=J();e.init();const n=_(),a=o=>o?o.length<=10&&o.replace(/[^\n]/g,"").length===0:!1;return(o,s)=>{const i=w("Category"),f=w("van-cell"),r=w("van-cell-group");return g(),x(r,{inset:""},{default:d(()=>[u(l(Re),null,{default:d(()=>[(g(!0),k(E,null,L(l(e).accounts.slice().reverse(),c=>(g(),x(f,{key:c.timestamp,clickable:"",onClick:m=>n.value=c},{default:d(()=>[p("div",$t,[p("span",Et,[p("span",Vt,$(l(H)(new Date(c.timestamp),"yyyy-MM-dd HH:mm")),1),u(i,{category:c.category},null,8,["category"]),a(c.description)?(g(),k("span",Ct,$(c.description),1)):z("",!0)]),p("span",Dt,"\uFFE5"+$(c.amount),1)])]),_:2},1032,["onClick"]))),128))]),_:1}),u(xt,{account:n.value,onClose:s[0]||(s[0]=c=>n.value=void 0)},null,8,["account"])]),_:1})}}});const St={id:"home",h:"full",pt:"4"},Bt={flex:"",justify:"between"},Lt=p("span",null,"\u5206\u7C7B",-1),Pt={flex:"","flex-col":"",items:"center",justify:"center",class:"content-center justify-items-center"},Ot={h:"full",w:"full"},Rt={class:"van-grid-item__text",mt:"2",text:"center"},Tt={style:{margin:"16px"}},It=P("\u8BB0\u5F55"),At=V({setup(t){Te(fe).value=!0;const e=J(),n=_(),a=_(!1),o=_(),s=_(""),i=v=>(s.value="",/\d+\.\d\d\d+$/.test(v)?Number.parseFloat(v).toFixed(2):v),f=_(O.length>0?O[0].name:""),r=_([]),c=_(""),m=v=>{f.value=v.category,v.amount?o.value=String(v.amount):o.value="",v.tags?r.value=v.tags:r.value=[],v.description,c.value=""},C=async()=>{if(!o.value||o.value===""){s.value="\u8BF7\u8F93\u5165\u91D1\u989D";return}await e.push({amount:+o.value,category:f.value,tags:r.value,description:c.value}),j({message:"\u8BB0\u5F55\u6210\u529F",type:"success"}),o.value="",r.value=[],c.value=""};return(v,h)=>{const D=w("Category"),y=w("van-image"),A=w("van-button");return g(),k("div",St,[u(l(le),{inset:""},{default:d(()=>[u(l(K),{modelValue:o.value,"onUpdate:modelValue":h[0]||(h[0]=b=>o.value=b),label:"\u91D1\u989D",readonly:"",clickable:"",clearable:"",formatter:i,maxlength:10,"error-message":s.value,"error-message-align":"right",onTouchstart:h[1]||(h[1]=W(b=>a.value=!0,["stop"])),"input-align":"right"},null,8,["modelValue","error-message"]),u(l(N),null,{default:d(()=>[p("div",Bt,[Lt,u(D,{category:f.value},null,8,["category"])])]),_:1}),u(ve,{modelValue:r.value,"onUpdate:modelValue":h[2]||(h[2]=b=>r.value=b)},null,8,["modelValue"]),u(l(N),null,{default:d(()=>[u(l(Ie),{active:n.value,"onUpdate:active":h[3]||(h[3]=b=>n.value=b)},{default:d(()=>[(g(!0),k(E,null,L(l(O),b=>(g(),x(l(He),{key:b.name,title:b.name},{default:d(()=>[u(l(Ae),{border:!1,clickable:""},{default:d(()=>[u(l(ee),{icon:"success",text:"\u9ED8\u8BA4",onClick:F=>m({category:b.name})},null,8,["onClick"]),(g(!0),k(E,null,L(l(Qe).filter(F=>F.category===b.name),F=>(g(),x(l(ee),{onClick:jt=>m(F)},{default:d(()=>[p("div",Pt,[u(y,{src:F.icon,fit:"scale-down",class:"max-h-[50%] max-w-[50%]"},{loading:d(()=>[p("div",Ot,[u(l(Ue),{type:"spinner",size:"20"})])]),_:2},1032,["src"]),p("span",Rt,$(F.name),1)])]),_:2},1032,["onClick"]))),256))]),_:2},1024)]),_:2},1032,["title"]))),128))]),_:1},8,["active"])]),_:1})]),_:1}),p("div",Tt,[u(A,{round:"",block:"",type:"success",onClick:C},{default:d(()=>[It]),_:1})]),u(Ft),u(l(re),{modelValue:o.value,"onUpdate:modelValue":h[4]||(h[4]=b=>o.value=b),"extra-key":".",show:a.value,maxlength:10,onBlur:h[5]||(h[5]=b=>a.value=!1)},null,8,["modelValue","show"])])}}}),Q=je({history:Ne(),routes:[{path:"/",name:"Home",component:At},{path:"/account",name:"Account",component:()=>R(()=>import("./index.0f68f4d2.js"),["assets/index.0f68f4d2.js","assets/index.97d966c7.css","assets/vendor.6183e4c9.js","assets/vendor.8c17d8b4.css"])},{path:"/login",name:"Login",component:()=>R(()=>import("./Login.b336aab2.js"),["assets/Login.b336aab2.js","assets/Login.79953f6d.css","assets/vendor.6183e4c9.js","assets/vendor.8c17d8b4.css"]),meta:{title:"\u767B\u9646"}},{path:"/about",name:"About",component:()=>R(()=>import("./About.edffb443.js"),["assets/About.edffb443.js","assets/About.393076f1.css","assets/vendor.6183e4c9.js","assets/vendor.8c17d8b4.css"]),meta:{title:"\u5173\u4E8E"}}],scrollBehavior(t,e,n){return n||{top:0}}});Q.beforeEach(async t=>t.name==="Login"||await pe()?!0:{name:"Login"});Q.beforeEach(t=>{t.meta.title?document.title=t.meta.title+" - "+M:document.title=M});const Ut=V({props:{tag:null},setup(t){const e=t,n=I(()=>{var a,o;return typeof e.tag=="string"?{name:e.tag,color:(o=(a=ce.find(s=>s.name===e.tag))==null?void 0:a.color)!=null?o:"#F2F3F5"}:e.tag});return(a,o)=>(g(),x(l(ue),{color:l(n).color},{default:d(()=>[T(a.$slots,"default",{},()=>[P($(l(n).name),1)])]),_:3},8,["color"]))}}),Ht=V({props:{category:null},setup(t){const e=t,n=I(()=>{var a,o;return typeof e.category=="string"?{name:e.category,color:(o=(a=O.find(s=>s.name===e.category))==null?void 0:a.color)!=null?o:"#F2F3F5"}:e.category});return(a,o)=>(g(),x(l(ue),{color:l(n).color},{default:d(()=>[T(a.$slots,"default",{},()=>[P($(l(n).name),1)])]),_:3},8,["color"]))}});Je({});const ge=Me();ge.use(Ge);ze(lt).component("Category",Ht).component("Tag",Ut).use(N).use(le).use(We).use(qe).use(Q).use(ge).mount("#app");{document.addEventListener("gesturestart",function(e){e.preventDefault()}),document.addEventListener("dblclick",function(e){e.preventDefault()}),document.addEventListener("touchstart",function(e){e.touches.length>1&&e.preventDefault()});let t=0;document.addEventListener("touchend",function(e){const n=new Date().getTime();n-t<=300&&e.preventDefault(),t=n},!1)}export{Ft as _,st as f,Gt as l,M as n};
