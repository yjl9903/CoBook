var De=Object.defineProperty;var te=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var ne=(t,e,n)=>e in t?De(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,N=(t,e)=>{for(var n in e||(e={}))Ce.call(e,n)&&ne(t,n,e[n]);if(te)for(var n of te(e))Be.call(e,n)&&ne(t,n,e[n]);return t};import{r as y,v as Se,a as Fe,d as K,b as B,w as A,u as Re,c as Le,e as M,f as x,o as v,g as $,h as r,i as D,j as c,k as f,t as C,l,I as G,P as Pe,N as Te,m as Q,F as V,p as Oe,D as Ue,n as ue,q as Ae,s as R,C as Ie,x as Ne,y as X,z as ie,A as z,B as O,R as He,E as je,G as Y,H as ce,J as j,K as P,L as Me,M as ze,O as q,Q as We,S as Ge,T as qe,U as de,V as Je,W as me,X as Ke,Y as Qe,Z as oe,_ as Xe,$ as Ye,a0 as Ze,a1 as et,a2 as tt,a3 as nt,a4 as pe,a5 as ot,a6 as at,a7 as st,a8 as rt,a9 as lt}from"./vendor.6acf3243.js";const ut=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const m of u.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerpolicy&&(u.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?u.credentials="include":a.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}};ut();function it(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:o,onRegistered:a,onRegisterError:u}=t;let m;const p=async(s=!0)=>{};return"serviceWorker"in navigator&&(m=new Se("/sw.js",{scope:"/",type:"classic"}),m.addEventListener("activated",s=>{s.isUpdate?window.location.reload():o==null||o()}),m.register({immediate:e}).then(s=>{a==null||a(s)}).catch(s=>{u==null||u(s)})),p}function ct(t={}){const{immediate:e=!0,onNeedRefresh:n,onOfflineReady:o,onRegistered:a,onRegisterError:u}=t,m=y(!1),p=y(!1);return{updateServiceWorker:it({immediate:e,onNeedRefresh(){m.value=!0,n==null||n()},onOfflineReady(){p.value=!0,o==null||o()},onRegistered:a,onRegisterError:u}),offlineReady:p,needRefresh:m}}const J="Coin Book",fe="https://cobook-worker.yjl9903.workers.dev",dt=[{name:"Breakfast",icon:"/img/breakfast.svg",category:"Food",tags:["Breakfast"]},{name:"Lunch",icon:"/img/lunch.svg",category:"Food",tags:["Lunch"]},{name:"Dinner",icon:"/img/dinner.svg",category:"Food",tags:["Dinner"]},{name:"Tea",icon:"/img/tea.svg",category:"Drink",tags:["Tea"],amount:10},{name:"Moon",icon:"/img/Intertwined.png",category:"Game",tags:["Genshin Impact"],amount:30}],Z=[{name:"Breakfast",color:"#fcd34d"},{name:"Lunch",color:"#86efac"},{name:"Dinner",color:"#6ee7b7"},{name:"Hamburger",color:"#f9a8d4"},{name:"Pizza",color:"#c4b5fd"},{name:"Noodle",color:"#cbd5e1"},{name:"Juice",color:"#d8b4fe"},{name:"Milk",color:"#fca5a5"},{name:"Genshin Impact",color:"#fca5a5"},{name:"Tea",color:"#fde047"}],T=[{name:"Food",color:"#f0abfc"},{name:"Drink",color:"#d8b4fe"},{name:"Game",color:"#fde047"}];var mt=Object.defineProperty,pt=Object.defineProperties,ft=Object.getOwnPropertyDescriptors,ae=Object.getOwnPropertySymbols,vt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable,se=(t,e,n)=>e in t?mt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,U=(t,e)=>{for(var n in e||(e={}))vt.call(e,n)&&se(t,n,e[n]);if(ae)for(var n of ae(e))gt.call(e,n)&&se(t,n,e[n]);return t},_t=(t,e)=>pt(t,ft(e)),ve="INSERT",ge="UPDATE",_e="DELETE",F=class{constructor(t,e,n){this.errorHandler=[],this.fingerprint=n,this.api=Fe.create({baseURL:t,headers:{Authorization:e}})}async validate(){try{return await this.api.get("/"),!0}catch{return!1}}makeInsertLog(t){const e=new Date().toISOString();return{command:ve,timestamp:e,fingerprint:this.fingerprint,item:_t(U({},t),{timestamp:e})}}makeUpdateLog(t,e){return{command:ge,timestamp:new Date().toISOString(),fingerprint:this.fingerprint,item:U(U({},t),e),old:U({},t)}}makeDeleteLog(t){return{command:_e,timestamp:new Date().toISOString(),fingerprint:this.fingerprint,old:U({},t)}}async log(t){const{data:e}=await this.api.post("/account/log",t);if(F.isResponseError(e))throw await this.handleError(e),e;return e}async create(t){const{data:e}=await this.api.post("/account/log",t);if(F.isResponseError(e))throw await this.handleError(e),e;return e}async update(t){const{data:e}=await this.api.post("/account/log",t);if(F.isResponseError(e))throw await this.handleError(e),e;return e}async delete(t){const{data:e}=await this.api.post("/account/log",t);if(F.isResponseError(e))throw e;return e}async list(){const{data:t}=await this.api.get("/account/log");if(F.isResponseError(t))throw await this.handleError(t),t;return t.logs}static isResponseError(t){return!t||t.status==="ERROR"}onError(t){this.errorHandler.push(t)}async handleError(t){await Promise.all(this.errorHandler.map(e=>e(t)))}};const ht="modulepreload",re={},yt="/",H=function(e,n){return!n||n.length===0?e():Promise.all(n.map(o=>{if(o=`${yt}${o}`,o in re)return;re[o]=!0;const a=o.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${u}`))return;const m=document.createElement("link");if(m.rel=a?"stylesheet":ht,a||(m.as="script",m.crossOrigin=""),m.href=o,document.head.appendChild(m),a)return new Promise((p,s)=>{m.addEventListener("load",p),m.addEventListener("error",s)})})).then(()=>e())};async function he(){return await(await(await H(()=>import("./fp.esm.27f96b96.js"),[])).load()).get()}const wt=he();async function kt(){try{return await wt}catch{return await he()}}const L=K("authorization",{state:()=>({fingerprint:"",pass:""}),getters:{client:t=>new F(fe,t.pass,t.fingerprint)},persist:!0}),ye=K("authorization/valid",{state:()=>({ok:!1})});async function we(){const t=ye();if(t.ok)return!0;const e=L(),n=e.pass!==""&&e.fingerprint!==""&&await e.client.validate();return t.ok=n,n}async function mn(t){const e=ye(),n=L();return n.fingerprint=(await kt()).visitorId,await new F(fe,t,n.fingerprint).validate()?(e.ok=!0,n.pass=t,!0):!1}const ke="EnterHome";const bt={style:{"font-weight":"bold"}},xt=f("div",{id:"popup-container"},null,-1),Et=B({setup(t){const{needRefresh:e,updateServiceWorker:n}=ct();A(e,i=>{i&&Ue.confirm({title:"\u66F4\u65B0",message:"\u6709\u66F4\u65B0\u53EF\u7528, \u70B9\u51FB\u786E\u8BA4\u5237\u65B0."}).then(()=>{n()}).catch(()=>{})});const o=Re(),a=Le(),u=y(!1);Oe(ke,u),we().then(i=>u.value=i);const m=M(()=>o.name==="Login"),p=y(!1),s=[{text:"\u8BB0\u5F55",icon:"home-o"},{text:"\u6240\u6709",icon:"orders-o"},{text:"\u5173\u4E8E",icon:"info-o"}],d=i=>{i.text===s[0].text?a.push({name:"Home"}):i.text===s[1].text?a.push({name:"Account"}):i.text===s[2].text&&a.push({name:"About"})};return(i,_)=>{const E=x("router-view");return v(),$(V,null,[!r(m)&&u.value?(v(),D(r(Te),{key:0,fixed:"",placeholder:""},{title:c(()=>[f("span",bt,C(r(J)),1)]),right:c(()=>[l(r(Pe),{show:p.value,"onUpdate:show":_[0]||(_[0]=g=>p.value=g),actions:s,onSelect:d,placement:"bottom-end","show-arrow":!1,offset:[8,12]},{reference:c(()=>[l(r(G),{name:"ellipsis",color:"black",mr:"1"})]),_:1},8,["show"])]),_:1})):Q("",!0),l(E,{id:"main-view","min-h":"full",pb:"8"}),xt],64)}}});const le=new Set(Z.map(t=>t.name)),be=K("account",{state(){return{_accounts:[],logs:[]}},getters:{accounts(){return this._accounts.sort((t,e)=>t.timestamp.localeCompare(e.timestamp))},groupBy(){return t=>{const e=new Map;for(const n of this.accounts){const o=t(n);e.has(o)?e.get(o).push(n):e.set(o,[n])}return e}}},actions:{excute(t){if(this.logs.push(t),t.command===ve)return t.item.tags=t.item.tags.filter(e=>le.has(e)),this._accounts.push(N({},t.item)),t.item;if(t.command===ge){for(let e=this._accounts.length-1;e>=0;e--)if(this._accounts[e].timestamp===t.old.timestamp)return t.item.tags=t.item.tags.filter(o=>le.has(o)),this._accounts[e]=N({},t.item),t.item;return}else if(t.command===_e){for(let e=this._accounts.length-1;e>=0;e--)if(this._accounts[e].timestamp===t.old.timestamp){this._accounts.splice(e,1);return}return}},async init(){const t=L(),e=await t.client.list();let n=0;for(;n<e.length&&n<this.logs.length&&this.logs[n].timestamp===e[n].timestamp;)n++;if(n===this.logs.length)for(;n<e.length;)this.excute(e[n]),n++;else if(n===e.length)for(;n<this.logs.length;)t.client.log(this.logs[n]),n++},async push(t){const e=L(),n=e.client.makeInsertLog({amount:t.amount,category:t.category,tags:t.tags,description:t.description});this.excute(n),await e.client.create(n)},async update(t,e){const n=L(),o=this._accounts.find(a=>a.timestamp===t);if(o){const a=n.client.makeUpdateLog(o,e);this.excute(a),await n.client.update(a)}},async delete(t){const e=L(),n=e.client.makeDeleteLog(t);this.excute(n),await e.client.delete(n)}},persist:!0}),$t={flex:"",justify:"between"},Vt=f("span",null,"\u6807\u7B7E",-1),Dt={px:"4",pb:"8"},Ct={flex:"",items:"center"},Bt={mt:"4",flex:"",justify:"center"},St=O("\u786E\u8BA4"),xe=B({props:{modelValue:null},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,{modelValue:o}=ue(n),a=y(!1),u=y([]);Ae(()=>{u.value=[]});const m=s=>{u.value[s].toggle()},p=()=>{o.value=[],e("update:modelValue",[])};return(s,d)=>{const i=x("Tag"),_=x("van-cell"),E=x("van-cell-group"),g=x("van-button");return v(),$(V,null,[l(_,{clickable:"",onClick:d[0]||(d[0]=k=>a.value=!0)},{default:c(()=>[f("div",$t,[Vt,f("span",null,[(v(!0),$(V,null,R(r(o),k=>(v(),D(i,{ml:"1",tag:k},null,8,["tag"]))),256))])])]),_:1}),l(r(z),{show:a.value,"onUpdate:show":d[4]||(d[4]=k=>a.value=k),title:"\u6807\u7B7E",teleport:"#popup-container",duration:.2,"overlay-style":{background:"rgba(0, 0, 0, .1)"}},{default:c(()=>[f("div",Dt,[l(r(Ie),{"model-value":r(o),"onUpdate:modelValue":d[3]||(d[3]=k=>e("update:modelValue",k))},{default:c(()=>[l(E,null,{default:c(()=>[(v(!0),$(V,null,R(r(Z),(k,I)=>(v(),D(_,{clickable:"",key:k.name,onClick:h=>m(I)},{"right-icon":c(()=>[l(r(Ne),{name:k.name,ref_for:!0,ref:h=>u.value[I]=h,onClick:d[1]||(d[1]=X(()=>{},["stop"])),shape:"square"},null,8,["name"])]),default:c(()=>[f("div",Ct,[f("span",{h:"4",w:"4",mr:"2","inline-block":"",rounded:"full",style:ie({background:k.color})},null,4),f("span",null,C(k.name),1)])]),_:2},1032,["onClick"]))),128))]),_:1}),f("div",Bt,[l(g,{type:"success",block:"",mr:"2",onClick:d[2]||(d[2]=k=>a.value=!1)},{default:c(()=>[St]),_:1}),l(g,{type:"danger",icon:"cross",rounded:"full",round:"",onClick:p})])]),_:1},8,["model-value"])])]),_:1},8,["show","duration","overlay-style"])],64)}}}),Ft={flex:"",justify:"between"},Rt=f("span",null,"\u5206\u7C7B",-1),Lt={px:"4",pb:"8"},Pt={flex:"",items:"center"},Ee=B({props:{modelValue:null},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,{modelValue:o}=ue(n),a=y(!1),u=m=>{e("update:modelValue",T[m].name)};return(m,p)=>{const s=x("Category"),d=x("van-cell"),i=x("van-cell-group");return v(),$(V,null,[l(d,{clickable:"",onClick:p[0]||(p[0]=_=>a.value=!0)},{default:c(()=>[f("div",Ft,[Rt,f("span",null,[l(s,{category:r(o)},null,8,["category"])])])]),_:1}),l(r(z),{show:a.value,"onUpdate:show":p[2]||(p[2]=_=>a.value=_),title:"\u5206\u7C7B",teleport:"#popup-container",duration:.2,"overlay-style":{background:"rgba(0, 0, 0, .1)"}},{default:c(()=>[f("div",Lt,[l(r(He),{"model-value":r(o),"onUpdate:modelValue":p[1]||(p[1]=_=>e("update:modelValue",_))},{default:c(()=>[l(i,null,{default:c(()=>[(v(!0),$(V,null,R(r(T),(_,E)=>(v(),D(d,{clickable:"",key:_.name,onClick:g=>u(E)},{"right-icon":c(()=>[l(r(je),{name:_.name},null,8,["name"])]),default:c(()=>[f("div",Pt,[f("span",{h:"4",w:"4",mr:"2","inline-block":"",rounded:"full",style:ie({background:_.color})},null,4),f("span",null,C(_.name),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["model-value"])])]),_:1},8,["show","duration","overlay-style"])],64)}}}),Tt=B({props:{modelValue:null},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,o=y(!1),a=y(""),u=y("");A(()=>n.modelValue,p=>{a.value=String(p)},{immediate:!0}),A(a,p=>{e("update:modelValue",+p)});const m=p=>(u.value="",/\d+\.\d\d\d+$/.test(p)?Number.parseFloat(p).toFixed(2):p);return(p,s)=>(v(),$(V,null,[l(r(Y),{font:"mono",modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=d=>a.value=d),label:"\u91D1\u989D",readonly:"",clickable:"",clearable:"","input-align":"right","error-message-align":"right",formatter:m,maxlength:10,"error-message":u.value,onTouchstart:s[1]||(s[1]=X(d=>o.value=!0,["stop"]))},null,8,["modelValue","error-message"]),l(r(ce),{modelValue:a.value,"onUpdate:modelValue":s[2]||(s[2]=d=>a.value=d),theme:"custom","close-button-text":"\u786E\u8BA4","extra-key":".",show:o.value,maxlength:10,onBlur:s[3]||(s[3]=d=>o.value=!1)},null,8,["modelValue","show"])],64))}}),Ot={px:"4",pb:"8"},Ut=B({props:{title:null},setup(t){const e=y(!1);return(n,o)=>{const a=x("van-cell");return v(),$(V,null,[l(a,{clickable:"",onClick:o[0]||(o[0]=u=>e.value=!0)},{default:c(()=>[j(n.$slots,"cell")]),_:3}),l(r(z),{show:e.value,"onUpdate:show":o[1]||(o[1]=u=>e.value=u),teleport:"#popup-container",title:t.title,duration:.2,"overlay-style":{background:"rgba(0, 0, 0, .1)"}},{default:c(()=>[f("div",Ot,[j(n.$slots,"default",{close:()=>e.value=!1})])]),_:3},8,["show","title","duration","overlay-style"])],64)}}}),At={px:"4",pb:"8"},It={flex:"",justify:"between"},Nt=f("span",null,"\u65F6\u95F4",-1),Ht={mt:"4",text:"right"},jt=O("\u4FDD\u5B58"),Mt=O("\u5220\u9664"),zt=B({props:{account:null},emits:["close"],setup(t,{emit:e}){const n=t,o=y(n.account),a=y(!1),u=M({get(){var d,i;return((d=o.value)==null?void 0:d.timestamp)?new Date((i=o.value)==null?void 0:i.timestamp):new Date},set(d){var i;((i=o.value)==null?void 0:i.timestamp)&&(o.value.timestamp=d.toISOString())}});A(()=>n.account,d=>{d&&(o.value=N({},d),a.value=!0)});const m=be(),p=async()=>{o.value&&(a.value=!1,await m.update(n.account.timestamp,o.value),q({message:"\u66F4\u65B0\u6210\u529F",type:"success"}))},s=async()=>{o.value&&(a.value=!1,await m.delete(o.value),q({message:"\u5220\u9664\u6210\u529F",type:"success"}))};return(d,i)=>{const _=x("van-cell-group"),E=x("van-button");return v(),D(r(z),{show:a.value,"onUpdate:show":i[7]||(i[7]=g=>a.value=g),title:t.account&&r(P)(new Date(t.account.timestamp),"yyyy-MM-dd HH:mm"),duration:.2,"overlay-style":{background:"rgba(0, 0, 0, .1)"},onClose:i[8]||(i[8]=g=>e("close"))},{default:c(()=>[f("div",At,[o.value?(v(),D(_,{key:0},{default:c(()=>[l(Tt,{modelValue:o.value.amount,"onUpdate:modelValue":i[0]||(i[0]=g=>o.value.amount=g)},null,8,["modelValue"]),l(Ee,{modelValue:o.value.category,"onUpdate:modelValue":i[1]||(i[1]=g=>o.value.category=g)},null,8,["modelValue"]),l(xe,{modelValue:o.value.tags,"onUpdate:modelValue":i[2]||(i[2]=g=>o.value.tags=g)},null,8,["modelValue"]),l(Ut,{title:"\u65F6\u95F4"},{cell:c(()=>[f("div",It,[Nt,f("span",null,C(r(P)(new Date(o.value.timestamp),"yyyy-MM-dd HH:mm:ss")),1)])]),default:c(({close:g})=>[l(r(Me),{modelValue:r(u),"onUpdate:modelValue":i[3]||(i[3]=k=>ze(u)?u.value=k:null),type:"datetime","max-date":new Date(new Date().getTime()+3600*1e3),onConfirm:g,onCancel:()=>(u.value=new Date(t.account.timestamp),g())},null,8,["modelValue","max-date","onConfirm","onCancel"])]),_:1}),l(r(Y),{modelValue:o.value.description,"onUpdate:modelValue":i[4]||(i[4]=g=>o.value.description=g),rows:"2",autosize:"",label:"\u5907\u6CE8",type:"textarea",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1})):Q("",!0),f("div",Ht,[l(E,{round:"",icon:"guide-o",type:"success",mr:"4",onClick:i[5]||(i[5]=g=>p())},{default:c(()=>[jt]),_:1}),l(E,{round:"",icon:"delete",type:"danger",onClick:i[6]||(i[6]=g=>s())},{default:c(()=>[Mt]),_:1})])])]),_:1},8,["show","title","duration","overlay-style"])}}});const Wt={flex:"",justify:"between",items:"center"},Gt={"inline-flex":"",items:"center"},qt={"inline-block":"",mr:"2",text:"gray-400"},Jt={key:0,ml:"2"},Kt={font:"mono"},Qt=B({props:{accounts:null,formatText:null},setup(t){const e=y(),n=o=>o?o.length<=10&&o.replace(/[^\n]/g,"").length===0:!1;return(o,a)=>{const u=x("Category"),m=x("van-cell"),p=x("van-cell-group");return v(),D(p,{inset:""},{default:c(()=>[l(r(We),null,{default:c(()=>[(v(!0),$(V,null,R(t.accounts.slice().reverse(),s=>(v(),D(m,{key:s.timestamp,clickable:"",onClick:d=>e.value=s},{default:c(()=>{var d;return[f("div",Wt,[f("span",Gt,[f("span",qt,C(r(P)(new Date(s.timestamp),(d=t.formatText)!=null?d:"yyyy-MM-dd HH:mm")),1),l(u,{category:s.category},null,8,["category"]),n(s.description)?(v(),$("span",Jt,C(s.description),1)):Q("",!0)]),f("span",Kt,"\uFFE5"+C(s.amount),1)])]}),_:2},1032,["onClick"]))),128))]),_:1}),l(zt,{account:e.value,onClose:a[0]||(a[0]=s=>e.value=void 0)},null,8,["account"])]),_:1})}}});const Xt={id:"home","min-h":"full",pt:"4"},Yt={flex:"","flex-col":"",items:"center",justify:"center",class:"content-center justify-items-center"},Zt={h:"full",w:"full"},en={class:"van-grid-item__text",mt:"2",text:"center"},tn={style:{margin:"16px 16px 24px"},class:"icon-btn",flex:"",justify:"center"},nn=O("\u8BB0\u5F55"),on={mb:"4"},an={style:{margin:"0 1.5rem 0.5rem"},text:"gray-500"},sn=B({setup(t){Ge(ke).value=!0;const e=be();e.init();const n="yyyy \u5E74 M \u6708 d \u65E5",o=y(e.groupBy(h=>P(new Date(h.timestamp),n)));A(e.accounts,()=>{o.value=e.groupBy(h=>P(new Date(h.timestamp),n))});const a=new Date,u=[0,1,2,3,4,5,6].map(h=>{const b=qe(a,h);return P(b,n)}),m=y(),p=y(!1),s=y(),d=y(""),i=h=>(d.value="",/\d+\.\d\d\d+$/.test(h)?Number.parseFloat(h).toFixed(2):h),_=y(T.length>0?T[0].name:""),E=y([]),g=y(""),k=h=>{_.value=h.category,h.amount?s.value=String(h.amount):s.value="",h.tags?E.value=h.tags:E.value=[],h.description?g.value=h.description:g.value=h.name},I=async()=>{if(!s.value||s.value===""){d.value="\u8BF7\u8F93\u5165\u91D1\u989D";return}await e.push({amount:+s.value,category:_.value,tags:E.value,description:g.value}),q({message:"\u8BB0\u5F55\u6210\u529F",type:"success"}),s.value="",E.value=[],g.value=""};return(h,b)=>{const Ve=x("van-image"),W=x("van-button");return v(),$("div",Xt,[l(r(me),{inset:""},{default:c(()=>[l(r(Y),{modelValue:s.value,"onUpdate:modelValue":b[0]||(b[0]=w=>s.value=w),label:"\u91D1\u989D",readonly:"",clickable:"",clearable:"",formatter:i,maxlength:10,"error-message":d.value,"error-message-align":"right",onTouchstart:b[1]||(b[1]=X(w=>p.value=!0,["stop"])),"input-align":"right"},null,8,["modelValue","error-message"]),l(Ee,{modelValue:_.value,"onUpdate:modelValue":b[2]||(b[2]=w=>_.value=w)},null,8,["modelValue"]),l(xe,{modelValue:E.value,"onUpdate:modelValue":b[3]||(b[3]=w=>E.value=w)},null,8,["modelValue"]),l(r(de),null,{default:c(()=>[l(r(Je),{active:m.value,"onUpdate:active":b[4]||(b[4]=w=>m.value=w)},{default:c(()=>[(v(!0),$(V,null,R(r(T),w=>(v(),D(r(Ye),{key:w.name,title:w.name},{default:c(()=>[l(r(Qe),{border:!1,clickable:""},{default:c(()=>[l(r(oe),{icon:"success",text:"\u9ED8\u8BA4",onClick:S=>k({name:"",category:w.name})},null,8,["onClick"]),(v(!0),$(V,null,R(r(dt).filter(S=>S.category===w.name),S=>(v(),D(r(oe),{onClick:un=>k(S)},{default:c(()=>[f("div",Yt,[l(Ve,{src:S.icon,fit:"scale-down",class:"max-h-[50%] max-w-[50%]"},{loading:c(()=>[f("div",Zt,[l(r(Xe),{type:"spinner",size:"20"})])]),_:2},1032,["src"]),f("span",en,C(S.name),1)])]),_:2},1032,["onClick"]))),256))]),_:2},1024)]),_:2},1032,["title"]))),128))]),_:1},8,["active"])]),_:1})]),_:1}),f("div",tn,[l(W,{round:"",block:"",type:"success",onClick:I},{default:c(()=>[nn]),_:1}),l(W,{ml:"2",px:"0",w:"16",url:"weixin://",round:""},{default:c(()=>[l(r(G),{name:"/img/wechat.svg",size:"1.25rem"})]),_:1}),l(W,{ml:"2",px:"0",w:"16",url:"alipay://platformapi/startapp?appId=20000056",round:""},{default:c(()=>[l(r(G),{name:"/img/alipay.svg",size:"1.25rem"})]),_:1})]),l(r(Ke),{hairline:!1}),(v(!0),$(V,null,R(r(u),w=>{var S;return v(),$("div",{key:w},[Ze(f("div",on,[f("h3",an,C(w),1),l(Qt,{accounts:(S=o.value.get(w))!=null?S:[],"format-text":"HH:mm"},null,8,["accounts"])],512),[[et,!!o.value.get(w)]])])}),128)),l(r(ce),{modelValue:s.value,"onUpdate:modelValue":b[5]||(b[5]=w=>s.value=w),theme:"custom","close-button-text":"\u786E\u8BA4","extra-key":".",show:p.value,maxlength:10,onBlur:b[6]||(b[6]=w=>p.value=!1)},null,8,["modelValue","show"])])}}}),ee=tt({history:nt(),routes:[{path:"/",name:"Home",component:sn},{path:"/account",name:"Account",component:()=>H(()=>import("./index.f18b41ce.js"),["assets/index.f18b41ce.js","assets/index.97d966c7.css","assets/vendor.6acf3243.js","assets/vendor.33d3184f.css"])},{path:"/login",name:"Login",component:()=>H(()=>import("./Login.a4006530.js"),["assets/Login.a4006530.js","assets/Login.79953f6d.css","assets/vendor.6acf3243.js","assets/vendor.33d3184f.css"]),meta:{title:"\u767B\u9646"}},{path:"/about",name:"About",component:()=>H(()=>import("./About.a484c7fe.js"),["assets/About.a484c7fe.js","assets/About.393076f1.css","assets/vendor.6acf3243.js","assets/vendor.33d3184f.css"]),meta:{title:"\u5173\u4E8E"}}],scrollBehavior(t,e,n){return n||{top:0}}});ee.beforeEach(async t=>t.name==="Login"||await we()?!0:{name:"Login"});ee.beforeEach(t=>{t.meta.title?document.title=t.meta.title+" - "+J:document.title=J});const rn=B({props:{tag:null},setup(t){const e=t,n=M(()=>{var o,a;return typeof e.tag=="string"?{name:e.tag,color:(a=(o=Z.find(u=>u.name===e.tag))==null?void 0:o.color)!=null?a:"#F2F3F5"}:e.tag});return(o,a)=>(v(),D(r(pe),{color:r(n).color},{default:c(()=>[j(o.$slots,"default",{},()=>[O(C(r(n).name),1)])]),_:3},8,["color"]))}}),ln=B({props:{category:null},setup(t){const e=t,n=M(()=>{var o,a;return typeof e.category=="string"?{name:e.category,color:(a=(o=T.find(u=>u.name===e.category))==null?void 0:o.color)!=null?a:"#F2F3F5"}:e.category});return(o,a)=>(v(),D(r(pe),{color:r(n).color},{default:c(()=>[j(o.$slots,"default",{},()=>[O(C(r(n).name),1)])]),_:3},8,["color"]))}}),$e=ot();$e.use(at);st(Et).component("Category",ln).component("Tag",rn).use(de).use(me).use(rt).use(lt).use(ee).use($e).mount("#app");{document.addEventListener("gesturestart",function(e){e.preventDefault()}),document.addEventListener("dblclick",function(e){e.preventDefault()}),document.addEventListener("touchstart",function(e){e.touches.length>1&&e.preventDefault()});let t=0;document.addEventListener("touchend",function(e){const n=new Date().getTime();n-t<=300&&e.preventDefault(),t=n},!1)}export{Qt as _,kt as f,mn as l,J as n,be as u};