import{w as n}from"./element-focus-BKUtVrWY-DLAyuMzs.js";/*!
 * KoliBri - The accessible HTML-Standard
 */async function c(t,e){try{t.hasAttribute("data-themed")||await n(t),await e()}catch{throw new Error("The interactive element inside the KoliBri web component could not be clicked. Try calling the click method on the web component after a short delay again.")}}function a(t){if(!t)return!1;const e=t.getBoundingClientRect();return e.width>0&&e.height>0}async function r(t){let e=0;do t&&t.click(),await new Promise(i=>requestAnimationFrame(i)),e++;while(!a(t)&&e<3)}export{c as d,r as s};
