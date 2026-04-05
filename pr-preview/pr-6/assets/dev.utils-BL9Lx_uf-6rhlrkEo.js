import{L as r,J as s,C as a,M as c,N as l,O as n,G as u}from"./index-BEjAYNDX.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const d=()=>{try{const e=a();if(!e||typeof e.querySelector!="function")return;const t=e.querySelector('meta[name="kolibri"]');if(t&&t.hasAttribute("content")){const i=t.getAttribute("content");typeof i=="string"&&(c(i.includes("experimental-mode=true")),l(i.includes("color-contrast-analysis=true")))}}catch{}},o=()=>{let e=n().KoliBri;return e===void 0&&(e={},Object.defineProperty(n(),"KoliBri",{value:e,writable:!1})),e},f=()=>{d(),r.debug(`
,--. ,--.         ,--. ,--. ,-----.           ,--.
|  .'   /  ,---.  |  | \`--' |  |) /_  ,--.--. \`--'
|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.
|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |
\`--' \`--´  \`---´  \`--' \`--' \`------´  \`--'    \`--'
🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io | ${s.kolibriVersion}
	`,{forceLog:!0})},g=()=>{o().adviceShown!==!0&&(Object.defineProperty(o(),"adviceShown",{get:function(){return!0}}),r.debug(`
You are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:

Ticket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)
Email: kolibri@itzbund.de
`))};let b=()=>Math.floor(16777215*Math.random()).toString(16);u()&&(b=()=>"nonce");export{f as i,b as n,g as r};
