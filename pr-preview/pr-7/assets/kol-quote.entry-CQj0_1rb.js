import{r as m,h as o,H as b,a1 as g,b as w}from"./index-Bp2HTB7q.js";import{B as y,v as s}from"./variant-quote-CHD0qMkY-XAL8cVNh.js";import{c as h,n as c}from"./normalizers-DnkJhVYZ-BPRdy9xw.js";import{l as d}from"./label-BEOW9ltS-CG0azRTZ.js";import{B as k}from"./base-controller-CXhqh4cR-BR_IVuhr.js";import"./_Uint8Array-kJHDjtoP-Dy4Yhf8F.js";import"./isArray-CcrBs4JM-Cx3brLAR.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const p=h("href","",c,e=>typeof e=="string"),u=h("quote","",c),l=w.forBlock("kol-quote"),_=l("blockquote"),q=l("cite"),v=l("figcaption"),x=l("quote"),T=e=>{const{href:n,label:t,quote:a,variant:r}=e,i=a==="",f=l({[r]:!0});return o("figure",{class:f},r==="block"?o("blockquote",{class:_,cite:n},a,o("span",{"aria-hidden":i?void 0:"true",hidden:!i},o("slot",{name:"expert"}))):o("q",{class:x,cite:n},a,o("span",{"aria-hidden":i?void 0:"true",hidden:!i},o("slot",{name:"expert"}))),typeof t=="string"&&t.length>0&&o("figcaption",{class:v},o("cite",{class:q},o(g,{_href:n,_label:t,_target:"_blank"}))))},S={optional:[d,s],required:[p,u]};class z extends k{constructor(n){super(n,S)}componentWillLoad(n){const{href:t,label:a,quote:r,variant:i}=n;this.watchHref(t),this.watchLabel(a),this.watchQuote(r),this.watchVariant(i)}watchHref(n){p.apply(n,t=>{this.setRenderProp("href",t)})}watchLabel(n){d.apply(n,t=>{this.setRenderProp("label",t)})}watchQuote(n){u.apply(n,t=>{this.setRenderProp("quote",t)})}watchVariant(n){s.apply(n,t=>{this.setRenderProp("variant",t)})}}const L=`@charset "UTF-8";
/* forward the rem function */
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
  .kol-quote {
    display: inline;
    margin: 0;
    padding: 0;
  }
  .kol-quote__cite::before {
    content: "—";
  }
  .kol-quote--block .kol-quote__figcaption {
    display: inline;
    margin: 0;
    padding: 0;
  }
  .kol-quote__blockquote::before {
    content: open-quote;
  }
  .kol-quote__blockquote::after {
    content: close-quote;
  }
}`,C=class{constructor(e){m(this,e),this.ctrl=new z(y.stateLess),this._variant="inline"}watchHref(e){this.ctrl.watchHref(e)}watchLabel(e){this.ctrl.watchLabel(e)}watchQuote(e){this.ctrl.watchQuote(e)}watchVariant(e){this.ctrl.watchVariant(e)}componentWillLoad(){this.ctrl.componentWillLoad({href:this._href,label:this._label,quote:this._quote,variant:this._variant})}render(){return o(b,{key:"0e6593206846694c7a999d1a00d1776c5507112c"},o(T,{key:"8e4b699204dd80e609632c82ab6e3db688d0c3ef",href:this.ctrl.getRenderProp("href"),label:this.ctrl.getRenderProp("label"),quote:this.ctrl.getRenderProp("quote"),variant:this.ctrl.getRenderProp("variant")}))}static get watchers(){return{_href:["watchHref"],_label:["watchLabel"],_quote:["watchQuote"],_variant:["watchVariant"]}}};C.style={default:L};export{C as kol_quote};
