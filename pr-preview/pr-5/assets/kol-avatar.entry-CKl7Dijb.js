import{r as f,h as r,H as m,b as c}from"./index-CN1r-1SC.js";import{t as u}from"./i18n-BVaUp6qp-BLa-zw7b.js";import{c as b}from"./normalizers-DnkJhVYZ-7j-MJFjZ.js";import{c as s}from"./contrast-DK7TU5NR-B_TBb1Xq.js";import{l as d}from"./label-BEOW9ltS-CeeuV2xa.js";import{B as g}from"./variant-quote-CHD0qMkY-CPm_DYkX.js";import{s as h}from"./src-D1LGDerl-BdaQvm_Z.js";import{B as k}from"./base-controller-CXhqh4cR-BR_IVuhr.js";import"./_Uint8Array-kJHDjtoP-Dy4Yhf8F.js";import"./isArray-CcrBs4JM-Cx3brLAR.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const y=/^#((\d|[a-f]){8}|(\d|[a-f]){6}|(\d|[a-f]){3,4})$/i;function i(n){return y.test(n)}function w(n){if(typeof n=="string"&&i(n)){const e=s(n);return{backgroundColor:e.background,foregroundColor:e.foreground}}if(typeof n=="object"&&n){const e=n;if(typeof e.backgroundColor=="string"&&typeof e.foregroundColor=="string"&&i(e.backgroundColor)&&i(e.foregroundColor)){const t=s({background:e.backgroundColor,foreground:e.foregroundColor});return{backgroundColor:t.background,foregroundColor:t.foreground}}}throw new Error(`Invalid color ${n}`)}function v(n){return i(n.foregroundColor)&&i(n.backgroundColor)}const p=b("color",{backgroundColor:"#d3d3d3",foregroundColor:"#3f3f3f"},w,v),C=c("kol-avatar","image"),x=c("kol-avatar","initials"),_=n=>{const{color:e,initials:t,label:o,src:a}=n;return r("div",{"aria-label":u("kol-avatar-alt",{placeholders:{name:o}}),class:"kol-avatar",role:"img",style:{backgroundColor:e.backgroundColor,color:e.foregroundColor}},a?r("img",{alt:"","aria-hidden":"true",class:C,src:a}):r("span",{"aria-hidden":"true",class:x},t))},z={optional:[p,h],required:[d]},l=n=>n.length===0?"":n[0].toUpperCase(),S=n=>{const e=n.trim().split(/\s+/),t=e[0],o=e[e.length-1];return e.length>=2&&t&&o?`${l(t)}${l(o)}`:l(n)};class A extends k{constructor(e){super(e,z)}componentWillLoad(e){const{color:t,label:o,src:a}=e;this.watchColor(t),this.watchLabel(o),this.watchSrc(a)}watchColor(e){p.apply(e,t=>{this.setRenderProp("color",t)})}watchLabel(e){d.apply(e,t=>{this.setRenderProp("label",t),this.setState("initials",S(t))})}watchSrc(e){h.apply(e,t=>{this.setRenderProp("src",t)})}}const T=`/* forward the rem function */
/*
* This file defines the layer order for all CSS layers used in KoliBri.
* The order is important as it determines the cascade priority.
*
* Layer order (lowest to highest priority):
* 1. kol-a11y - Accessibility defaults and requirements
* 2. kol-global - Global component styles and resets
* 3. kol-component - Component-specific styles
* 4. kol-theme-global - Theme-specific global styles
* 5. kol-theme-component - Theme-specific component styles
*/
@layer kol-a11y, kol-global, kol-component, kol-theme-global, kol-theme-component;
/*
 * This file contains all rules for accessibility.
 */
@layer kol-a11y {
  :host {
    /*
                   * Minimum size of interactive elements.
                   */
    --a11y-min-size: calc(44 * 1rem / var(--kolibri-root-font-size, 16));
    /*
     * No element should be used without verifying the contrast ratio of its background and font colors.
     * By initially setting the background color to white and the font color to black,
     * the contrast ratio is ensured and explicit adjustment is forced.
     */
    color: black;
    background-color: white;
    /*
     * Verdana is an accessible font that can be used without requiring additional loading time.
     */
    font-family: Verdana;
    /*
     * Letter spacing is required for all texts.
     */
    letter-spacing: inherit;
    /*
     * Word spacing is required for all texts.
     */
    word-spacing: inherit;
    /*
     * Text should be aligned left by default to provide a predictable starting point.
     */
    text-align: left;
  }
  * {
    /*
     * This rule enables the word dividing for all texts. That is important for high zoom levels.
     */
    hyphens: auto;
    /*
     * This rule enables the word dividing for all texts. That is important for high zoom levels.
     */
    word-break: break-word;
  }
  /*
   * All interactive elements should have a minimum size of to-rem(44).
   */
  /* input:not([type='checkbox'], [type='radio'], [type='range']), */
  /* option, */
  /* select, */
  /* textarea, */
  button,
  .kol-input .input {
    min-width: var(--a11y-min-size);
    min-height: var(--a11y-min-size);
  }
  /*
   * Some interactive elements should not inherit the font-family and font-size.
   */
  a,
  button,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  option,
  select,
  textarea {
    /*
     * All elements should inherit the text color from his parent element.
     */
    color: inherit;
    /*
     * All elements should inherit the font family from his parent element.
     */
    font-family: inherit;
    /*
     * All elements should inherit the font size from his parent element.
     */
    font-size: inherit;
    /*
     * Letter spacing is required for all texts.
     */
    letter-spacing: inherit;
    /*
     * Word spacing is required for all texts.
     */
    word-spacing: inherit;
  }
  /**
  * Sometimes we need the semantic element for accessibility reasons,
  * but we don't want to show it.
  *
  * - https://www.a11yproject.com/posts/how-to-hide-content/
  */
  .visually-hidden {
    position: fixed;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
    clip-path: inset(50%);
  }
}
@layer kol-global {
  /*
   * Dieses CSS stellt sicher, dass der Standard-Style
   * von A und Button resettet werden.
   */
  :is(a, button) {
    background-color: transparent;
    width: 100%;
    margin: 0;
    padding: 0;
    border: none;
    /* 100% needed for custom width from outside */
  }
  /*
   * Ensure elements with hidden attribute to be actually not visible
   * @see https://meowni.ca/hidden.is.a.lie.html
   */
  [hidden] {
    display: none !important;
  }
  .badge-text-hint {
    color: black;
    background-color: lightgray;
  }
}
@layer kol-global {
  :host {
    /*
     * The max-width is needed to prevent the table from overflowing the
     * parent node, if the table is wider than the parent node.
     */
    max-width: 100%;
    font-size: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
  }
  * {
    /*
     * We prefer to box-sizing: border-box for all elements.
     */
    box-sizing: border-box;
  }
  .kol-span {
    /* KolSpan is a layout component with icons in all directions and a label text in the middle. */
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */
  }
  .kol-span__container {
    display: flex;
    align-items: center;
  }
  a,
  button {
    cursor: pointer;
  }
  .kol-span .kol-span__label--hide-label .kol-span__label {
    display: none;
  }
  /* Reset browser agent style. */
  button:disabled {
    color: unset;
  }
  .disabled label,
  .disabled:focus-within label,
  [aria-disabled=true],
  [aria-disabled=true]:focus,
  [disabled],
  [disabled]:focus {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }
  [aria-disabled=true]:focus .kol-span,
  [disabled]:focus .kol-span {
    outline: none !important;
  }
  .hastooltip {
    z-index: 900 !important;
  }
}
@layer kol-component {
  :host {
    display: block;
  }
}
@layer kol-component {
  .kol-avatar,
  .kol-avatar__image,
  .kol-avatar__initials {
    border-radius: 50%;
  }
  .kol-avatar {
    /* Visible with forced colors  */
    outline: transparent solid calc(1 * 1rem / var(--kolibri-root-font-size, 16));
    display: flex;
    width: calc(100 * 1rem / var(--kolibri-root-font-size, 16));
    height: calc(100 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-avatar__initials {
    background-color: inherit;
    margin: auto;
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
}`,L=class extends g{constructor(n){super(),f(this,n),this.ctrl=new A(this.stateAccess),this.initials=""}watchColor(n){this.ctrl.watchColor(n)}watchLabel(n){this.ctrl.watchLabel(n)}watchSrc(n){this.ctrl.watchSrc(n)}componentWillLoad(){this.ctrl.componentWillLoad({color:this._color,label:this._label,src:this._src})}render(){return r(m,{key:"293a0f642334d4058d3b129b69d7de334bb43866"},r(_,{key:"96c92705c57c43050b666513dfc65829a7be5047",color:this.ctrl.getRenderProp("color"),label:this.ctrl.getRenderProp("label"),src:this.ctrl.getRenderProp("src"),initials:this.initials}))}static get watchers(){return{_color:["watchColor"],_label:["watchLabel"],_src:["watchSrc"]}}};L.style={default:T};export{L as kol_avatar};
