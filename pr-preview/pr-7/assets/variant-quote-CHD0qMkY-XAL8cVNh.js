import{c as a,n as o}from"./normalizers-DnkJhVYZ-BPRdy9xw.js";/*!
 * KoliBri - The accessible HTML-Standard
 */function s(){throw new Error("This controller does not use component state.")}class r{constructor(){this.stateAccess={setState:(e,n)=>{this[e]=n},getState:e=>this[e]}}}r.stateLess=Object.freeze({setState:s,getState:s});const i=["eager","lazy"],c=new Set(i),T=a("loading","lazy",t=>o(t),t=>c.has(t)),l=["block","inline"],S=new Set(l),h=a("variant","inline",t=>o(t),t=>S.has(t));export{r as B,T as l,h as v};
