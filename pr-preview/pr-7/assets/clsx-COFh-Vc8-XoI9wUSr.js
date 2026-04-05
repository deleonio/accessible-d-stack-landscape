/*!
 * KoliBri - The accessible HTML-Standard
 */const n=e=>{let t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object"&&e!==null)if(Array.isArray(e)){for(const r of e)if(r){const f=n(r);f&&(t&&(t+=" "),t+=f)}}else for(const r in e)e[r]&&(t&&(t+=" "),t+=r);return t},s=(...e)=>{let t="";for(const r of e)if(r){const f=n(r);f&&(t&&(t+=" "),t+=f)}return t};export{s as c};
