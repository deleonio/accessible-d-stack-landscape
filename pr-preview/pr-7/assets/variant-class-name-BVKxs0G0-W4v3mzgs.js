import{m as n,l as o,w as r}from"./index-Bp2HTB7q.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const i=["tab","treeitem"],d=(a,t)=>{r(a,"_role",e=>typeof e=="string"&&i.includes(e),new Set([`KoliBriAlternativeButtonLinkRole {${i.join(", ")}`]),t)},p=(a,t)=>{n(a,"_ariaControls",t)},v=(a,t)=>{n(a,"_ariaDescription",t)},A=(a,t)=>{o(a,"_ariaExpanded",t)},s=a=>{var t=new RegExp("^[a-zA-Z][a-zA-Z0-9_-]{3,60}$");return typeof a=="string"&&t.test(a)},c=(a,t)=>{r(a,"_variant",s,new Set(["^[a-zA-Z][a-zA-Z0-9_-]{3,60}$"]),t)};export{v as a,A as b,d as c,c as d,p as v};
