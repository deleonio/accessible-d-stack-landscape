import{m as t,Z as s,u as r}from"./index-BEjAYNDX.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const c=(a,e)=>{t(a,"_accessKey",e)},d=(a,e)=>{t(a,"_shortKey",e)},o={hooks:{afterPatch:a=>{a!==-1&&a!==0&&r("Don't Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},i=(a,e)=>{s(a,"_tabIndex",e,o)},h=(a,e)=>{if(a&&e)throw new Error("AccessKey and ShortKey are used. Only one is allowed.")};export{h as a,d as b,i as c,c as v};
