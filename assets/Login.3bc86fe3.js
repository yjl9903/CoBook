import{b as _,c as p,r as m,f,o as v,g as h,k as s,t as y,h as o,l as a,W as B,j as n,O as u,G as g,B as b}from"./vendor.6acf3243.js";import{l as x,n as C}from"./index.82c87b83.js";const V={id:"login",h:"full",flex:"","flex-col":"",px:"8",content:"center"},k=s("div",{h:"1/4"},null,-1),F={mb:"12"},w=b("\u8FDB\u5165"),G=_({setup(N){const r=p(),e=m(""),c=async()=>{const t=()=>{u({type:"danger",message:"\u5BC6\u7801\u9519\u8BEF"}),e.value=""};try{await x(e.value)?(u.clear(),await r.replace({name:"Home"})):t()}catch{t()}};return(t,l)=>{const d=f("van-button");return v(),h("div",V,[k,s("div",null,[s("h1",F,y(o(C)),1),a(o(B),null,{default:n(()=>[a(o(g),{"border-gray-500":"",modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=i=>e.value=i),label:"\u5BC6\u7801",type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),a(d,{mt:"12",round:"",type:"success",block:"",onClick:c},{default:n(()=>[w]),_:1})])])}}});export{G as default};
