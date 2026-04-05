import{r as f,h as t,H as b,F as r}from"./index-Bp2HTB7q.js";import{B as u}from"./variant-quote-CHD0qMkY-XAL8cVNh.js";import{t as l}from"./i18n-BVaUp6qp-B22iMgjv.js";import{l as s}from"./label-BEOW9ltS-CG0azRTZ.js";import{c,e as g,n as k}from"./normalizers-DnkJhVYZ-BPRdy9xw.js";import{B as w}from"./base-controller-CXhqh4cR-BR_IVuhr.js";import"./_Uint8Array-kJHDjtoP-Dy4Yhf8F.js";import"./isArray-CcrBs4JM-Cx3brLAR.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const d=c("show",!1,g),y=["dot","cycle","none"],p=c("variant","dot",e=>{const n=k(e);if(y.includes(n))return n;throw new Error(`Invalid spin variant: ${n}`)},()=>!0);function _(e){switch(e){case"cycle":return t("span",{class:"kol-spin__loader"});case"none":return t("slot",{name:"expert"});default:return t(r,null,t("span",{class:"kol-spin__spinner-element kol-spin__spinner-element--1"}),t("span",{class:"kol-spin__spinner-element kol-spin__spinner-element--2"}),t("span",{class:"kol-spin__spinner-element kol-spin__spinner-element--3"}),t("span",{class:"kol-spin__spinner-element kol-spin__spinner-element--neutral"}))}}const v=e=>{const{show:n,label:o,variant:i,showToggled:a,handleGetTranslateActionRunning:h,handleGetTranslateActionDone:m}=e;return t(r,null,n?t(r,null,t("span",{class:`kol-spin__spinner kol-spin__spinner--${i}`},_(i)),t("span",{"aria-busy":"true",class:"visually-hidden",role:"alert"},o||h())):a&&t("span",{"aria-busy":"false",class:"visually-hidden",role:"alert"},o||m()))},x={optional:[s,d,p]};class z extends w{constructor(n){super(n,x),this.translateActionRunning=l("kol-action-running"),this.translateActionDone=l("kol-action-done"),this.handleGetTranslateActionRunning=()=>this.translateActionRunning,this.handleGetTranslateActionDone=()=>this.translateActionDone}componentWillLoad(n){const{show:o,label:i,variant:a}=n;this.watchShow(o),this.watchLabel(i),this.watchVariant(a)}watchShow(n){d.apply(n,o=>{const i=this.getRenderProp("show");this.setRenderProp("show",o),this.setState("showToggled",i===!0&&o===!1)})}watchLabel(n){s.apply(n,o=>{this.setRenderProp("label",o)})}watchVariant(n){p.apply(n,o=>{this.setRenderProp("variant",o)})}}const S=`/* forward the rem function */
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
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes prixClipFix {
    0% {
      border-color: #fff;
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      border-color: #666;
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      border-color: #000;
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      border-color: #000;
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      border-color: #000;
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#toning_down_the_animation_scaling */
  @media (prefers-reduced-motion) {
    .kol-spin__loader {
      animation-duration: 4s !important;
    }
    .kol-spin__loader::before {
      animation-duration: 6s !important;
    }
  }
  .kol-spin__spinner--cycle {
    width: calc(48 * 1rem / var(--kolibri-root-font-size, 16));
    height: calc(48 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-spin__loader {
    border-radius: 50%;
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    animation: 2s linear infinite rotate;
  }
  .kol-spin__loader::before {
    border-radius: 50%;
    position: absolute;
    inset: 0;
    content: "";
    animation: 3s linear infinite prixClipFix;
    border: 5px solid #333;
  }
}
@layer kol-component {
  @keyframes spin1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes spin2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(calc(16 * 1rem / var(--kolibri-root-font-size, 16)), 0);
    }
  }
  @keyframes spin3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#toning_down_the_animation_scaling */
  @media (prefers-reduced-motion) {
    .kol-spin__spinner-element {
      animation-duration: 2s !important;
    }
  }
  .kol-spin__spinner--dot {
    width: calc(48 * 1rem / var(--kolibri-root-font-size, 16));
    height: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-spin__spinner-element {
    border-radius: 50%;
    position: absolute;
    top: calc(0.16 * 1rem / var(--kolibri-root-font-size, 16));
    width: calc(12.8 * 1rem / var(--kolibri-root-font-size, 16));
    height: calc(12.8 * 1rem / var(--kolibri-root-font-size, 16));
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    border: calc(0.16 * 1rem / var(--kolibri-root-font-size, 16)) solid #fff;
  }
  .kol-spin__spinner-element--1 {
    background-color: #000;
    left: calc(0.16 * 1rem / var(--kolibri-root-font-size, 16));
    z-index: 0;
    animation: 1s infinite spin1;
  }
  .kol-spin__spinner-element--2 {
    background-color: #000;
    left: calc(0.16 * 1rem / var(--kolibri-root-font-size, 16));
    z-index: 1;
    animation: 1s infinite spin2;
  }
  .kol-spin__spinner-element--3 {
    background-color: #000;
    left: calc(17.6 * 1rem / var(--kolibri-root-font-size, 16));
    z-index: 1;
    animation: 1s infinite spin2;
  }
  .kol-spin__spinner-element--neutral {
    background-color: #666;
    left: calc(33.6 * 1rem / var(--kolibri-root-font-size, 16));
    z-index: 0;
    animation: 1s infinite spin3;
  }
}
@layer kol-component {
  .kol-spin__spinner {
    display: block;
    position: relative;
  }
}`,T=class extends u{constructor(e){super(),f(this,e),this.ctrl=new z(this.stateAccess),this.showToggled=!1}watchShow(e){this.ctrl.watchShow(e)}watchLabel(e){this.ctrl.watchLabel(e)}watchVariant(e){this.ctrl.watchVariant(e)}componentWillLoad(){this.ctrl.componentWillLoad({show:this._show,label:this._label,variant:this._variant})}render(){return t(b,{key:"7379c127d8a30dc2175e50e2f7adaa45d4986a35"},t(v,{key:"3a1c04436cb10bbedf94b1ed83ebd4e3d8e93c75",show:this.ctrl.getRenderProp("show"),label:this.ctrl.getRenderProp("label"),variant:this.ctrl.getRenderProp("variant"),showToggled:this.showToggled,handleGetTranslateActionRunning:this.ctrl.handleGetTranslateActionRunning,handleGetTranslateActionDone:this.ctrl.handleGetTranslateActionDone}))}static get watchers(){return{_show:["watchShow"],_label:["watchLabel"],_variant:["watchVariant"]}}};T.style={default:S};export{T as kol_spin};
