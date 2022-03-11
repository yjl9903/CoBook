var De=Object.defineProperty;var te=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var ne=(t,e,n)=>e in t?De(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,I=(t,e)=>{for(var n in e||(e={}))Ce.call(e,n)&&ne(t,n,e[n]);if(te)for(var n of te(e))Se.call(e,n)&&ne(t,n,e[n]);return t};import{v as Be,a as Le,d as K,b as S,u as Fe,c as Pe,r as w,e as M,f as x,o as v,g as E,h as r,i as D,w as c,j as m,t as C,k as l,I as W,P as Te,N as Re,l as Q,F as V,p as Oe,m as ue,n as Ue,q as L,C as Ae,s as Ie,x as X,y as ie,A as z,z as O,R as He,B as Ne,D as N,E as Y,G as ce,H as j,J as T,K as je,L as Me,M as q,O as ze,Q as Ge,S as We,T as de,U as qe,V as me,W as Je,X as Ke,Y as oe,Z as Qe,_ as Xe,$ as Ye,a0 as Ze,a1 as et,a2 as tt,a3 as pe,a4 as nt,a5 as ot,a6 as at,a7 as st,a8 as rt}from"./vendor.81325736.js";const lt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerpolicy&&(u.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?u.credentials="include":a.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}};lt();function ut(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:o,onRegistered:a,onRegisterError:u}=t;let d;const f=async(s=!0)=>{};return"serviceWorker"in navigator&&(d=new Be("/sw.js",{scope:"/",type:"classic"}),d.addEventListener("activated",s=>{s.isUpdate?window.location.reload():o==null||o()}),d.register({immediate:e}).then(s=>{a==null||a(s)}).catch(s=>{u==null||u(s)})),f}const J="Coin Book",fe="https://cobook-worker.yjl9903.workers.dev",it=[{name:"Breakfast",icon:"/img/breakfast.svg",category:"Food",tags:["Breakfast"]},{name:"Lunch",icon:"/img/lunch.svg",category:"Food",tags:["Lunch"]},{name:"Dinner",icon:"/img/dinner.svg",category:"Food",tags:["Dinner"]},{name:"Tea",icon:"/img/tea.svg",category:"Drink",tags:["Tea"],amount:10},{name:"Moon",icon:"/img/Intertwined.png",category:"Game",tags:["Genshin Impact"],amount:30}],Z=[{name:"Breakfast",color:"#86efac"},{name:"Lunch",color:"#cbd5e1"},{name:"Dinner",color:"#f9a8d4"},{name:"Hamburger",color:"#fde047"},{name:"Pizza",color:"#c4b5fd"},{name:"Noodle",color:"#cbd5e1"},{name:"Juice",color:"#6ee7b7"},{name:"Milk",color:"#fcd34d"},{name:"Genshin Impact",color:"#a5b4fc"},{name:"Tea",color:"#cbd5e1"}],R=[{name:"Food",color:"#fcd34d"},{name:"Drink",color:"#67e8f9"},{name:"Game",color:"#bef264"}];var ct=Object.defineProperty,dt=Object.defineProperties,mt=Object.getOwnPropertyDescriptors,ae=Object.getOwnPropertySymbols,pt=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable,se=(t,e,n)=>e in t?ct(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,U=(t,e)=>{for(var n in e||(e={}))pt.call(e,n)&&se(t,n,e[n]);if(ae)for(var n of ae(e))ft.call(e,n)&&se(t,n,e[n]);return t},vt=(t,e)=>dt(t,mt(e)),ve="INSERT",ge="UPDATE",_e="DELETE",F=class{constructor(t,e,n){this.errorHandler=[],this.fingerprint=n,this.api=Le.create({baseURL:t,headers:{Authorization:e}})}async validate(){try{return await this.api.get("/"),!0}catch{return!1}}makeInsertLog(t){const e=new Date().toISOString();return{command:ve,timestamp:e,fingerprint:this.fingerprint,item:vt(U({},t),{timestamp:e})}}makeUpdateLog(t,e){return{command:ge,timestamp:new Date().toISOString(),fingerprint:this.fingerprint,item:U(U({},t),e),old:U({},t)}}makeDeleteLog(t){return{command:_e,timestamp:new Date().toISOString(),fingerprint:this.fingerprint,old:U({},t)}}async create(t){const{data:e}=await this.api.post("/account/log",t);if(F.isResponseError(e))throw await this.handleError(e),e;return e}async update(t){const{data:e}=await this.api.post("/account/log",t);if(F.isResponseError(e))throw await this.handleError(e),e;return e}async delete(t){const{data:e}=await this.api.post("/account/log",t);if(F.isResponseError(e))throw e;return e}async list(){const{data:t}=await this.api.get("/account/log");if(F.isResponseError(t))throw await this.handleError(t),t;return t.logs}static isResponseError(t){return!t||t.status==="ERROR"}onError(t){this.errorHandler.push(t)}async handleError(t){await Promise.all(this.errorHandler.map(e=>e(t)))}};const gt="modulepreload",re={},_t="/",H=function(e,n){return!n||n.length===0?e():Promise.all(n.map(o=>{if(o=`${_t}${o}`,o in re)return;re[o]=!0;const a=o.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${u}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":gt,a||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),a)return new Promise((f,s)=>{d.addEventListener("load",f),d.addEventListener("error",s)})})).then(()=>e())};async function he(){return await(await(await H(()=>import("./fp.esm.27f96b96.js"),[])).load()).get()}const ht=he();async function yt(){try{return await ht}catch{return await he()}}const P=K("authorization",{state:()=>({fingerprint:"",pass:""}),getters:{client:t=>new F(fe,t.pass,t.fingerprint)},persist:!0}),ye=K("authorization/valid",{state:()=>({ok:!1})});async function we(){const t=ye();if(t.ok)return!0;const e=P(),n=e.pass!==""&&e.fingerprint!==""&&await e.client.validate();return t.ok=n,n}async function cn(t){const e=ye(),n=P();return n.fingerprint=(await yt()).visitorId,await new F(fe,t,n.fingerprint).validate()?(e.ok=!0,n.pass=t,!0):!1}const be="EnterHome";const wt={style:{"font-weight":"bold"}},bt=m("div",{id:"popup-container"},null,-1),kt=S({setup(t){const e=Fe(),n=Pe(),o=w(!1);Oe(be,o),we().then(s=>o.value=s);const a=M(()=>e.name==="Login"),u=w(!1),d=[{text:"\u8BB0\u5F55",icon:"home-o"},{text:"\u6240\u6709",icon:"orders-o"},{text:"\u5173\u4E8E",icon:"info-o"}],f=s=>{s.text===d[0].text?n.push({name:"Home"}):s.text===d[1].text?n.push({name:"Account"}):s.text===d[2].text&&n.push({name:"About"})};return(s,i)=>{const p=x("router-view");return v(),E(V,null,[!r(a)&&o.value?(v(),D(r(Re),{key:0,fixed:"",placeholder:""},{title:c(()=>[m("span",wt,C(r(J)),1)]),right:c(()=>[l(r(Te),{show:u.value,"onUpdate:show":i[0]||(i[0]=h=>u.value=h),actions:d,onSelect:f,placement:"bottom-end","show-arrow":!1,offset:[8,12]},{reference:c(()=>[l(r(W),{name:"ellipsis",color:"black",mr:"1"})]),_:1},8,["show"])]),_:1})):Q("",!0),l(p,{id:"main-view",h:"full"}),bt],64)}}});const le=new Set(Z.map(t=>t.name)),ke=K("account",{state(){return{_accounts:[],logs:[]}},getters:{accounts(){return this._accounts.sort((t,e)=>t.timestamp.localeCompare(e.timestamp))},groupBy(){return t=>{const e=new Map;for(const n of this.accounts){const o=t(n);e.has(o)?e.get(o).push(n):e.set(o,[n])}return e}}},actions:{excute(t){if(this.logs.push(t),t.command===ve)return t.item.tags=t.item.tags.filter(e=>le.has(e)),this._accounts.push(I({},t.item)),t.item;if(t.command===ge){for(let e=this._accounts.length-1;e>=0;e--)if(this._accounts[e].timestamp===t.old.timestamp)return t.item.tags=t.item.tags.filter(o=>le.has(o)),this._accounts[e]=I({},t.item),t.item;return}else if(t.command===_e){for(let e=this._accounts.length-1;e>=0;e--)if(this._accounts[e].timestamp===t.old.timestamp){this._accounts.splice(e,1);return}return}},async init(){const e=await P().client.list();let n=0;for(;n<e.length&&n<this.logs.length&&this.logs[n].timestamp===e[n].timestamp;)n++;if(n===this.logs.length)for(;n<e.length;)this.excute(e[n]),n++},async push(t){const e=P(),n=e.client.makeInsertLog({amount:t.amount,category:t.category,tags:t.tags,description:t.description});this.excute(n),await e.client.create(n)},async update(t,e){const n=P(),o=this._accounts.find(a=>a.timestamp===t);if(o){const a=n.client.makeUpdateLog(o,e);this.excute(a),await n.client.update(a)}},async delete(t){const e=P(),n=e.client.makeDeleteLog(t);this.excute(n),await e.client.delete(n)}},persist:!0}),xt={flex:"",justify:"between"},Et=m("span",null,"\u6807\u7B7E",-1),$t={px:"4",pb:"8"},Vt={flex:"",items:"center"},Dt={mt:"4",flex:"",justify:"center"},Ct=O("\u786E\u8BA4"),xe=S({props:{modelValue:null},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,{modelValue:o}=ue(n),a=w(!1),u=w([]);Ue(()=>{u.value=[]});const d=s=>{u.value[s].toggle()},f=()=>{o.value=[],e("update:modelValue",[])};return(s,i)=>{const p=x("Tag"),h=x("van-cell"),$=x("van-cell-group"),g=x("van-button");return v(),E(V,null,[l(h,{clickable:"",onClick:i[0]||(i[0]=b=>a.value=!0)},{default:c(()=>[m("div",xt,[Et,m("span",null,[(v(!0),E(V,null,L(r(o),b=>(v(),D(p,{ml:"1",tag:b},null,8,["tag"]))),256))])])]),_:1}),l(r(z),{show:a.value,"onUpdate:show":i[4]||(i[4]=b=>a.value=b),title:"\u6807\u7B7E",teleport:"#popup-container",duration:.2,"overlay-style":{background:"rgba(0, 0, 0, .1)"}},{default:c(()=>[m("div",$t,[l(r(Ae),{"model-value":r(o),"onUpdate:modelValue":i[3]||(i[3]=b=>e("update:modelValue",b))},{default:c(()=>[l($,null,{default:c(()=>[(v(!0),E(V,null,L(r(Z),(b,A)=>(v(),D(h,{clickable:"",key:b.name,onClick:_=>d(A)},{"right-icon":c(()=>[l(r(Ie),{name:b.name,ref_for:!0,ref:_=>u.value[A]=_,onClick:i[1]||(i[1]=X(()=>{},["stop"])),shape:"square"},null,8,["name"])]),default:c(()=>[m("div",Vt,[m("span",{h:"4",w:"4",mr:"2","inline-block":"",rounded:"full",style:ie({background:b.color})},null,4),m("span",null,C(b.name),1)])]),_:2},1032,["onClick"]))),128))]),_:1}),m("div",Dt,[l(g,{type:"success",block:"",mr:"2",onClick:i[2]||(i[2]=b=>a.value=!1)},{default:c(()=>[Ct]),_:1}),l(g,{type:"danger",icon:"cross",rounded:"full",round:"",onClick:f})])]),_:1},8,["model-value"])])]),_:1},8,["show","duration","overlay-style"])],64)}}}),St={flex:"",justify:"between"},Bt=m("span",null,"\u5206\u7C7B",-1),Lt={px:"4",pb:"8"},Ft={flex:"",items:"center"},Ee=S({props:{modelValue:null},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,{modelValue:o}=ue(n),a=w(!1),u=d=>{e("update:modelValue",R[d].name)};return(d,f)=>{const s=x("Category"),i=x("van-cell"),p=x("van-cell-group");return v(),E(V,null,[l(i,{clickable:"",onClick:f[0]||(f[0]=h=>a.value=!0)},{default:c(()=>[m("div",St,[Bt,m("span",null,[l(s,{category:r(o)},null,8,["category"])])])]),_:1}),l(r(z),{show:a.value,"onUpdate:show":f[2]||(f[2]=h=>a.value=h),title:"\u5206\u7C7B",teleport:"#popup-container",duration:.2,"overlay-style":{background:"rgba(0, 0, 0, .1)"}},{default:c(()=>[m("div",Lt,[l(r(He),{"model-value":r(o),"onUpdate:modelValue":f[1]||(f[1]=h=>e("update:modelValue",h))},{default:c(()=>[l(p,null,{default:c(()=>[(v(!0),E(V,null,L(r(R),(h,$)=>(v(),D(i,{clickable:"",key:h.name,onClick:g=>u($)},{"right-icon":c(()=>[l(r(Ne),{name:h.name},null,8,["name"])]),default:c(()=>[m("div",Ft,[m("span",{h:"4",w:"4",mr:"2","inline-block":"",rounded:"full",style:ie({background:h.color})},null,4),m("span",null,C(h.name),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["model-value"])])]),_:1},8,["show","duration","overlay-style"])],64)}}}),Pt=S({props:{modelValue:null},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,o=w(!1),a=w(""),u=w("");N(()=>n.modelValue,f=>{a.value=String(f)},{immediate:!0}),N(a,f=>{e("update:modelValue",+f)});const d=f=>(u.value="",/\d+\.\d\d\d+$/.test(f)?Number.parseFloat(f).toFixed(2):f);return(f,s)=>(v(),E(V,null,[l(r(Y),{font:"mono",modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=i=>a.value=i),label:"\u91D1\u989D",readonly:"",clickable:"",clearable:"","input-align":"right","error-message-align":"right",formatter:d,maxlength:10,"error-message":u.value,onTouchstart:s[1]||(s[1]=X(i=>o.value=!0,["stop"]))},null,8,["modelValue","error-message"]),l(r(ce),{modelValue:a.value,"onUpdate:modelValue":s[2]||(s[2]=i=>a.value=i),theme:"custom","close-button-text":"\u786E\u8BA4","extra-key":".",show:o.value,maxlength:10,onBlur:s[3]||(s[3]=i=>o.value=!1)},null,8,["modelValue","show"])],64))}}),Tt={px:"4",pb:"8"},Rt=S({props:{title:null},setup(t){const e=w(!1);return(n,o)=>{const a=x("van-cell");return v(),E(V,null,[l(a,{clickable:"",onClick:o[0]||(o[0]=u=>e.value=!0)},{default:c(()=>[j(n.$slots,"cell")]),_:3}),l(r(z),{show:e.value,"onUpdate:show":o[1]||(o[1]=u=>e.value=u),teleport:"#popup-container",title:t.title,duration:.2,"overlay-style":{background:"rgba(0, 0, 0, .1)"}},{default:c(()=>[m("div",Tt,[j(n.$slots,"default",{close:()=>e.value=!1})])]),_:3},8,["show","title","duration","overlay-style"])],64)}}}),Ot={px:"4",pb:"8"},Ut={flex:"",justify:"between"},At=m("span",null,"\u65F6\u95F4",-1),It={mt:"4",text:"right"},Ht=O("\u4FDD\u5B58"),Nt=O("\u5220\u9664"),jt=S({props:{account:null},emits:["close"],setup(t,{emit:e}){const n=t,o=w(n.account),a=w(!1),u=M({get(){var i,p;return((i=o.value)==null?void 0:i.timestamp)?new Date((p=o.value)==null?void 0:p.timestamp):new Date},set(i){var p;((p=o.value)==null?void 0:p.timestamp)&&(o.value.timestamp=i.toISOString())}});N(()=>n.account,i=>{i&&(o.value=I({},i),a.value=!0)});const d=ke(),f=async()=>{o.value&&(a.value=!1,await d.update(n.account.timestamp,o.value),q({message:"\u66F4\u65B0\u6210\u529F",type:"success"}))},s=async()=>{o.value&&(a.value=!1,await d.delete(o.value),q({message:"\u5220\u9664\u6210\u529F",type:"success"}))};return(i,p)=>{const h=x("van-cell-group"),$=x("van-button");return v(),D(r(z),{show:a.value,"onUpdate:show":p[7]||(p[7]=g=>a.value=g),title:t.account&&r(T)(new Date(t.account.timestamp),"yyyy-MM-dd HH:mm"),duration:.2,"overlay-style":{background:"rgba(0, 0, 0, .1)"},onClose:p[8]||(p[8]=g=>e("close"))},{default:c(()=>[m("div",Ot,[o.value?(v(),D(h,{key:0},{default:c(()=>[l(Pt,{modelValue:o.value.amount,"onUpdate:modelValue":p[0]||(p[0]=g=>o.value.amount=g)},null,8,["modelValue"]),l(Ee,{modelValue:o.value.category,"onUpdate:modelValue":p[1]||(p[1]=g=>o.value.category=g)},null,8,["modelValue"]),l(xe,{modelValue:o.value.tags,"onUpdate:modelValue":p[2]||(p[2]=g=>o.value.tags=g)},null,8,["modelValue"]),l(Rt,{title:"\u65F6\u95F4"},{cell:c(()=>[m("div",Ut,[At,m("span",null,C(r(T)(new Date(o.value.timestamp),"yyyy-MM-dd HH:mm:ss")),1)])]),default:c(({close:g})=>[l(r(je),{modelValue:r(u),"onUpdate:modelValue":p[3]||(p[3]=b=>Me(u)?u.value=b:null),type:"datetime","max-date":new Date(new Date().getTime()+3600*1e3),onConfirm:g,onCancel:()=>(u.value=new Date(t.account.timestamp),g())},null,8,["modelValue","max-date","onConfirm","onCancel"])]),_:1}),l(r(Y),{modelValue:o.value.description,"onUpdate:modelValue":p[4]||(p[4]=g=>o.value.description=g),rows:"2",autosize:"",label:"\u5907\u6CE8",type:"textarea",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1})):Q("",!0),m("div",It,[l($,{round:"",icon:"guide-o",type:"success",mr:"4",onClick:p[5]||(p[5]=g=>f())},{default:c(()=>[Ht]),_:1}),l($,{round:"",icon:"delete",type:"danger",onClick:p[6]||(p[6]=g=>s())},{default:c(()=>[Nt]),_:1})])])]),_:1},8,["show","title","duration","overlay-style"])}}});const Mt={flex:"",justify:"between",items:"center"},zt={"inline-flex":"",items:"center"},Gt={"inline-block":"",mr:"2",text:"gray-400"},Wt={key:0,ml:"2"},qt={font:"mono"},Jt=S({props:{accounts:null,formatText:null},setup(t){const e=w(),n=o=>o?o.length<=10&&o.replace(/[^\n]/g,"").length===0:!1;return(o,a)=>{const u=x("Category"),d=x("van-cell"),f=x("van-cell-group");return v(),D(f,{inset:""},{default:c(()=>[l(r(ze),null,{default:c(()=>[(v(!0),E(V,null,L(t.accounts.slice().reverse(),s=>(v(),D(d,{key:s.timestamp,clickable:"",onClick:i=>e.value=s},{default:c(()=>{var i;return[m("div",Mt,[m("span",zt,[m("span",Gt,C(r(T)(new Date(s.timestamp),(i=t.formatText)!=null?i:"yyyy-MM-dd HH:mm")),1),l(u,{category:s.category},null,8,["category"]),n(s.description)?(v(),E("span",Wt,C(s.description),1)):Q("",!0)]),m("span",qt,"\uFFE5"+C(s.amount),1)])]}),_:2},1032,["onClick"]))),128))]),_:1}),l(jt,{account:e.value,onClose:a[0]||(a[0]=s=>e.value=void 0)},null,8,["account"])]),_:1})}}});const Kt={id:"home",h:"full",pt:"4"},Qt={flex:"","flex-col":"",items:"center",justify:"center",class:"content-center justify-items-center"},Xt={h:"full",w:"full"},Yt={class:"van-grid-item__text",mt:"2",text:"center"},Zt={style:{margin:"16px 16px 24px"},class:"icon-btn",flex:"",justify:"center"},en=O("\u8BB0\u5F55"),tn={mb:"4"},nn={style:{margin:"0 1.5rem 0.5rem"},text:"gray-500"},on=S({setup(t){Ge(be).value=!0;const e=ke();e.init();const n="yyyy \u5E74 M \u6708 d \u65E5",o=w(e.groupBy(_=>T(new Date(_.timestamp),n)));N(e.accounts,()=>{o.value=e.groupBy(_=>T(new Date(_.timestamp),n))});const a=new Date,u=[0,1,2,3,4,5,6].map(_=>{const k=We(a,_);return T(k,n)}),d=w(),f=w(!1),s=w(),i=w(""),p=_=>(i.value="",/\d+\.\d\d\d+$/.test(_)?Number.parseFloat(_).toFixed(2):_),h=w(R.length>0?R[0].name:""),$=w([]),g=w(""),b=_=>{h.value=_.category,_.amount?s.value=String(_.amount):s.value="",_.tags?$.value=_.tags:$.value=[],_.description?g.value=_.description:g.value=_.name},A=async()=>{if(!s.value||s.value===""){i.value="\u8BF7\u8F93\u5165\u91D1\u989D";return}await e.push({amount:+s.value,category:h.value,tags:$.value,description:g.value}),q({message:"\u8BB0\u5F55\u6210\u529F",type:"success"}),s.value="",$.value=[],g.value=""};return(_,k)=>{const Ve=x("van-image"),G=x("van-button");return v(),E("div",Kt,[l(r(me),{inset:""},{default:c(()=>[l(r(Y),{modelValue:s.value,"onUpdate:modelValue":k[0]||(k[0]=y=>s.value=y),label:"\u91D1\u989D",readonly:"",clickable:"",clearable:"",formatter:p,maxlength:10,"error-message":i.value,"error-message-align":"right",onTouchstart:k[1]||(k[1]=X(y=>f.value=!0,["stop"])),"input-align":"right"},null,8,["modelValue","error-message"]),l(Ee,{modelValue:h.value,"onUpdate:modelValue":k[2]||(k[2]=y=>h.value=y)},null,8,["modelValue"]),l(xe,{modelValue:$.value,"onUpdate:modelValue":k[3]||(k[3]=y=>$.value=y)},null,8,["modelValue"]),l(r(de),null,{default:c(()=>[l(r(qe),{active:d.value,"onUpdate:active":k[4]||(k[4]=y=>d.value=y)},{default:c(()=>[(v(!0),E(V,null,L(r(R),y=>(v(),D(r(Xe),{key:y.name,title:y.name},{default:c(()=>[l(r(Ke),{border:!1,clickable:""},{default:c(()=>[l(r(oe),{icon:"success",text:"\u9ED8\u8BA4",onClick:B=>b({name:"",category:y.name})},null,8,["onClick"]),(v(!0),E(V,null,L(r(it).filter(B=>B.category===y.name),B=>(v(),D(r(oe),{onClick:rn=>b(B)},{default:c(()=>[m("div",Qt,[l(Ve,{src:B.icon,fit:"scale-down",class:"max-h-[50%] max-w-[50%]"},{loading:c(()=>[m("div",Xt,[l(r(Qe),{type:"spinner",size:"20"})])]),_:2},1032,["src"]),m("span",Yt,C(B.name),1)])]),_:2},1032,["onClick"]))),256))]),_:2},1024)]),_:2},1032,["title"]))),128))]),_:1},8,["active"])]),_:1})]),_:1}),m("div",Zt,[l(G,{round:"",block:"",type:"success",onClick:A},{default:c(()=>[en]),_:1}),l(G,{ml:"2",px:"0",w:"16",url:"weixin://",round:""},{default:c(()=>[l(r(W),{name:"/img/wechat.svg",size:"1.25rem"})]),_:1}),l(G,{ml:"2",px:"0",w:"16",url:"alipay://platformapi/startapp?appId=20000056",round:""},{default:c(()=>[l(r(W),{name:"/img/alipay.svg",size:"1.25rem"})]),_:1})]),l(r(Je),{hairline:!1}),(v(!0),E(V,null,L(r(u),y=>{var B;return v(),E("div",{key:y},[Ye(m("div",tn,[m("h3",nn,C(y),1),l(Jt,{accounts:(B=o.value.get(y))!=null?B:[],"format-text":"HH:mm"},null,8,["accounts"])],512),[[Ze,!!o.value.get(y)]])])}),128)),l(r(ce),{modelValue:s.value,"onUpdate:modelValue":k[5]||(k[5]=y=>s.value=y),theme:"custom","close-button-text":"\u786E\u8BA4","extra-key":".",show:f.value,maxlength:10,onBlur:k[6]||(k[6]=y=>f.value=!1)},null,8,["modelValue","show"])])}}}),ee=et({history:tt(),routes:[{path:"/",name:"Home",component:on},{path:"/account",name:"Account",component:()=>H(()=>import("./index.854930b2.js"),["assets/index.854930b2.js","assets/index.97d966c7.css","assets/vendor.81325736.js","assets/vendor.971f6910.css"])},{path:"/login",name:"Login",component:()=>H(()=>import("./Login.171f5cc5.js"),["assets/Login.171f5cc5.js","assets/Login.79953f6d.css","assets/vendor.81325736.js","assets/vendor.971f6910.css"]),meta:{title:"\u767B\u9646"}},{path:"/about",name:"About",component:()=>H(()=>import("./About.f2acbba6.js"),["assets/About.f2acbba6.js","assets/About.393076f1.css","assets/vendor.81325736.js","assets/vendor.971f6910.css"]),meta:{title:"\u5173\u4E8E"}}],scrollBehavior(t,e,n){return n||{top:0}}});ee.beforeEach(async t=>t.name==="Login"||await we()?!0:{name:"Login"});ee.beforeEach(t=>{t.meta.title?document.title=t.meta.title+" - "+J:document.title=J});const an=S({props:{tag:null},setup(t){const e=t,n=M(()=>{var o,a;return typeof e.tag=="string"?{name:e.tag,color:(a=(o=Z.find(u=>u.name===e.tag))==null?void 0:o.color)!=null?a:"#F2F3F5"}:e.tag});return(o,a)=>(v(),D(r(pe),{color:r(n).color},{default:c(()=>[j(o.$slots,"default",{},()=>[O(C(r(n).name),1)])]),_:3},8,["color"]))}}),sn=S({props:{category:null},setup(t){const e=t,n=M(()=>{var o,a;return typeof e.category=="string"?{name:e.category,color:(a=(o=R.find(u=>u.name===e.category))==null?void 0:o.color)!=null?a:"#F2F3F5"}:e.category});return(o,a)=>(v(),D(r(pe),{color:r(n).color},{default:c(()=>[j(o.$slots,"default",{},()=>[O(C(r(n).name),1)])]),_:3},8,["color"]))}});ut({});const $e=nt();$e.use(ot);at(kt).component("Category",sn).component("Tag",an).use(de).use(me).use(st).use(rt).use(ee).use($e).mount("#app");{document.addEventListener("gesturestart",function(e){e.preventDefault()}),document.addEventListener("dblclick",function(e){e.preventDefault()}),document.addEventListener("touchstart",function(e){e.touches.length>1&&e.preventDefault()});let t=0;document.addEventListener("touchend",function(e){const n=new Date().getTime();n-t<=300&&e.preventDefault(),t=n},!1)}export{Jt as _,yt as f,cn as l,J as n,ke as u};