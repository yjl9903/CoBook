import{b as _,r as p,o as m,e as f,l as s,t as v,u as o,h as a,w as l,C as h,j as y,z as u,k as B,B as C,n as b}from"./vendor.bb2c2c2b.js";import{n as g,l as x}from"./index.5943d2eb.js";const V={id:"login",h:"full",flex:"","flex-col":"",px:"8",content:"center"},k=s("div",{h:"1/4"},null,-1),w={mb:"12"},F=b("\u8FDB\u5165"),j=_({setup(N){const r=y(),e=p(""),c=async()=>{const t=()=>{u({type:"danger",message:"\u5BC6\u7801\u9519\u8BEF"}),e.value=""};try{await x(e.value)?(u.clear(),await r.replace({name:"Home"})):t()}catch{t()}};return(t,n)=>{const d=B("van-button");return m(),f("div",V,[k,s("div",null,[s("h1",w,v(o(g)),1),a(o(h),null,{default:l(()=>[a(o(C),{"border-gray-500":"",modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=i=>e.value=i),label:"\u5BC6\u7801",type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),a(d,{mt:"12",round:"",type:"success",block:"",onClick:c},{default:l(()=>[F]),_:1})])])}}});export{j as default};
