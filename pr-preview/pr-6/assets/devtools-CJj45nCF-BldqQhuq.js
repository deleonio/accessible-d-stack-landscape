import{ak as n,C as a,L as r,al as s,O as c,am as d,a6 as p,an as y,ao as m,ap as u,p as f,aq as g,V as L}from"./index-BEjAYNDX.js";import{i as v,r as b}from"./dev.utils-BL9Lx_uf-6rhlrkEo.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const h=()=>{let t=c().KoliBri;return t===void 0&&(t={},Object.defineProperty(c(),"KoliBri",{value:t,writable:!1})),t};function i(t,e){try{Object.defineProperty(h(),t,{get:function(){return e}})}catch{r.debug(`KoliBri property ${t} is already bind.`)}}const l=(t,e)=>r.debug(`${t} ${e?"":"not "}activated`),w=()=>{if(v(),n()&&(b(),i("a11yColorContrast",d),i("querySelector",p),i("querySelectorAll",y),i("querySelectorColors",m),i("utils",function(){return u}),i("parseJson",f),i("stringifyJson",g),l("Development mode",n()),l("Experimental mode",L()),l("Color contrast analysis",s()),setTimeout(()=>{try{const t=a(),e=t==null?void 0:t.body;if(t&&e&&typeof t.createElement=="function"){const o=t.createElement("svg");o.setAttribute("aria-label","KoliBri-DevTools"),o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("role","toolbar"),o.setAttribute("style","position: fixed;color: black;font-size: 200%;bottom: 0.25rem;right: 0.25rem;"),o.innerHTML=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="50"
  height="50"
  viewBox="0 0 600 600"
>
  <path d="M353 322L213 304V434L353 322Z" fill="#047" />
  <path d="M209 564V304L149 434L209 564Z" fill="#047" />
  <path d="M357 316L417 250L361 210L275 244L357 316Z" fill="#047" />
  <path d="M353 318L35 36L213 300L353 318Z" fill="#047" />
  <path d="M329 218L237 92L250 222L272 241L329 218Z" fill="#047" />
  <path d="M391 286L565 272L421 252L391 286Z" fill="#047" />
</svg>`,e.appendChild(o)}}catch(t){r.debug(["Could not initialize DevTools UI (likely in SSR/test environment):",t])}},100),s())){const t=setTimeout(()=>{clearTimeout(t);try{const e=a(),o=e==null?void 0:e.body;e&&o&&typeof e.createElement=="function"&&setInterval(()=>{u.queryHtmlElementColors(e.createElement("div"),d(o),!1,!1)},1e4)}catch(e){r.debug(["Could not initialize color contrast analysis:",e])}},2500)}};export{w as initialize};
