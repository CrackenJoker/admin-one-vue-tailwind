import{H as u,o as l,p as a,I as g,J as k,q as c,K as x,L as v,u as i,h as n,M as S,B as d,N as V,C as b,r as F}from"./index.a4fb4d88.js";const _=["type","name","value"],B=n("span",{class:"check"},null,-1),C={class:"control-label"},D={__name:"FormCheckRadioPicker",props:{options:{type:Object,default:()=>{}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:{type:[Object,Array,String,Number],default:null}},emits:["update:modelValue"],setup(e,{emit:r}){const o=e,t=u({get:()=>o.modelValue,set:m=>{r("update:modelValue",m)}}),s=u(()=>o.type==="radio"?"radio":"checkbox");return(m,p)=>(l(),a("div",{class:c(["flex justify-start flex-wrap -mb-3",{"flex-col":e.column}])},[(l(!0),a(g,null,k(e.options,(y,f)=>(l(),a("label",{key:f,class:c([e.type,"mr-6 mb-3 last:mr-0"])},[x(n("input",{"onUpdate:modelValue":p[0]||(p[0]=h=>S(t)?t.value=h:null),type:i(s),name:e.name,value:f},null,8,_),[[v,i(t)]]),B,n("span",C,d(y),1)],2))),128))],2))}},$={class:"mb-6 last:mb-0"},N=["for"],j={key:1,class:"text-xs text-gray-500 dark:text-slate-400 mt-1"},L={__name:"FormField",props:{label:{type:String,default:null},labelFor:{type:String,default:null},help:{type:String,default:null}},setup(e){const r=V(),o=u(()=>{const t=[],s=r.default().length;return s>1&&t.push("grid grid-cols-1 gap-3"),s===2&&t.push("md:grid-cols-2"),t});return(t,s)=>(l(),a("div",$,[e.label?(l(),a("label",{key:0,for:e.labelFor,class:"block font-bold mb-2"},d(e.label),9,N)):b("",!0),n("div",{class:c(i(o))},[F(t.$slots,"default")],2),e.help?(l(),a("div",j,d(e.help),1)):b("",!0)]))}};export{L as _,D as a};