import{r as f,h as d,e as m,c as b,g as p,a4 as u,o as k,p as y,s as g}from"./index-D2HA3l2I.js";import{_ as w}from"./tslib.es6-CxX45GIN-CNLfoBeZ.js";import{v}from"./label-vxVEH2gH-DqBIwy4C.js";import{K as l}from"./keyboard-DNd73LVa-CDilyl_k.js";import{v as x}from"./orientation-D3LRVMo1-C6jD_Wqh.js";import{d as _,s as z}from"./element-click-BTxuJDNT-C3VwA7Ox.js";import{d as I,s as T}from"./element-focus-BKUtVrWY-DLAyuMzs.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const A=(n,e)=>{u(e,()=>{k(e,()=>{e===void 0&&(e=[]);try{e=y(e)}catch{}Array.isArray(e)&&e.every(t=>typeof t=="object"&&t!==null)&&g(n,"_items",e)})})},S=`@charset "UTF-8";
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
@font-face {
  font-family: "kolicons";
  src: url("kolicons.eot?t=1775135018085"); /* IE9*/
  src: url("kolicons.eot?t=1775135018085#iefix") format("embedded-opentype"), url("kolicons.woff2?t=1775135018085") format("woff2"), url("kolicons.woff?t=1775135018085") format("woff"), url("kolicons.ttf?t=1775135018085") format("truetype"), url("kolicons.svg?t=1775135018085#kolicons") format("svg"); /* iOS 4.1- */
}
@layer kol-component {
  [class^=kolicon-], [class*=" kolicon-"] {
    font-family: "kolicons";
    font-style: normal;
    font-weight: 400;
    line-height: 1em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .kolicon-alert-error::before {
    content: "\\ea01";
  }
  .kolicon-alert-info::before {
    content: "\\ea02";
  }
  .kolicon-alert-success::before {
    content: "\\ea03";
  }
  .kolicon-alert-warning::before {
    content: "\\ea04";
  }
  .kolicon-check::before {
    content: "\\ea05";
  }
  .kolicon-chevron-double-left::before {
    content: "\\ea06";
  }
  .kolicon-chevron-double-right::before {
    content: "\\ea07";
  }
  .kolicon-chevron-down::before {
    content: "\\ea08";
  }
  .kolicon-chevron-left::before {
    content: "\\ea09";
  }
  .kolicon-chevron-right::before {
    content: "\\ea0a";
  }
  .kolicon-chevron-up::before {
    content: "\\ea0b";
  }
  .kolicon-cogwheel::before {
    content: "\\ea0c";
  }
  .kolicon-cross::before {
    content: "\\ea0d";
  }
  .kolicon-eye-closed::before {
    content: "\\ea0e";
  }
  .kolicon-eye::before {
    content: "\\ea0f";
  }
  .kolicon-house::before {
    content: "\\ea10";
  }
  .kolicon-kolibri::before {
    content: "\\ea11";
  }
  .kolicon-link-external::before {
    content: "\\ea12";
  }
  .kolicon-link::before {
    content: "\\ea13";
  }
  .kolicon-minus::before {
    content: "\\ea14";
  }
  .kolicon-plus::before {
    content: "\\ea15";
  }
  .kolicon-settings::before {
    content: "\\ea16";
  }
  .kolicon-sort-asc::before {
    content: "\\ea17";
  }
  .kolicon-sort-desc::before {
    content: "\\ea18";
  }
  .kolicon-sort-neutral::before {
    content: "\\ea19";
  }
  .kolicon-up::before {
    content: "\\ea1a";
  }
  .kolicon-version::before {
    content: "\\ea1b";
  }
}
@layer kol-component {
  .kol-icon {
    color: inherit;
    display: inline-block;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  .kol-tooltip {
    display: contents;
  }
  .kol-tooltip__floating {
    opacity: 0;
    display: none;
    position: fixed;
    /* Avoid layout interference - see https://floating-ui.com/docs/computePosition */
    top: 0;
    left: 0;
    /* Can be used to specify the tooltip-width from the outside. Unset by default.  */
    width: var(--kol-tooltip-width, max-content);
    min-width: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    max-width: 90vw;
    max-height: 90vh;
    animation-direction: normal;
    /* Can be used to specify the animation duration from the outside. 250ms by default. */
    animation-duration: var(--kolibri-tooltip-animation-duration, 250ms);
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
  }
  .kol-tooltip__floating.hide {
    animation-name: hideTooltip;
  }
  .kol-tooltip__floating.show {
    animation-name: showTooltip;
  }
  .kol-tooltip__arrow {
    transform: rotate(45deg);
    color: #000;
    background-color: #fff;
    position: absolute;
    z-index: 999;
    width: calc(10 * 1rem / var(--kolibri-root-font-size, 16));
    height: calc(10 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-tooltip__content {
    color: #000;
    background-color: #fff;
    position: relative;
    z-index: 1000;
  }
  @keyframes hideTooltip {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }
  @keyframes showTooltip {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
@layer kol-component {
  .kol-icon {
    color: inherit;
    display: inline-block;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  :host {
    display: inline-block;
  }
  .kol-link {
    display: flex;
    min-height: var(--a11y-min-size);
    font-style: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
    text-decoration-line: none;
  }
  .kol-link::before {
    /* Render zero-width character as first element to set the baseline correctly. */
    content: "​";
  }
  .kol-link__text {
    flex: 1 0 100%;
  }
  .kol-icon {
    color: inherit;
    display: inline-block;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  :host {
    display: inline-block;
  }
  .kol-button {
    display: flex;
    min-height: var(--a11y-min-size);
    font-style: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
    text-decoration-line: none;
  }
  .kol-button::before {
    /* Render zero-width character as first element to set the baseline correctly. */
    content: "​";
  }
  .kol-button__text {
    flex: 1 0 100%;
  }
  .kol-toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .kol-toolbar--orientation-vertical {
    flex-direction: column;
    align-items: stretch;
  }
  .kol-toolbar--orientation-vertical .kol-span {
    align-items: flex-start;
  }
  .kol-toolbar:focus-within {
    outline: 1px solid;
    outline-offset: 2px;
  }
}`,E=class{constructor(n){f(this,n),this.state={_label:"",_items:[]},this.currentIndex=0,this.indexToElement=new Map,this.renderItem=(e,t)=>{const o=this.normalizeItem(e),s=t!==this.currentIndex||o!=null&&o._disabled?-1:0,c={key:t,class:"button normal kol-toolbar__item",_tabIndex:s,_variant:"normal"},a=i=>{i&&this.indexToElement.set(t,i)};return o.type==="link"?d(m,Object.assign({},c,o,{ref:a})):d(b,Object.assign({},c,o,{ref:a}))}}async focus(){const n=this.indexToElement.get(this.currentIndex);if(n)return I(this.host,()=>T(n))}async click(){const n=this.indexToElement.get(this.currentIndex);if(n)return _(this.host,async()=>z(n))}normalizeItem(n){const{_icons:e,_disabled:t}=n,o=w(n,["_icons","_disabled"]);return Object.assign(Object.assign({},o),{_icons:e,_disabled:t})}render(){return d("div",{key:"8f62f1ec70dee0ef9b019813a7a53a762d265ba8",class:`kol-toolbar kol-toolbar--orientation-${this.state._orientation}`,role:"toolbar","aria-label":this.state._label},this.state._items.map(this.renderItem))}validateLabel(n){v(this,n)}validateItems(n){A(this,n),this.indexToElement.clear(),this.setFirstEnabledItemIndex()}validateOrientation(n){x(this,n)}getCurrentToolbarItem(n){return typeof n=="number"?this.indexToElement.get(n):void 0}setFirstEnabledItemIndex(){var n;this.currentIndex=(n=this.state._items)===null||n===void 0?void 0:n.findIndex(e=>!e._disabled)}handleKeyDown(n){var e,t,o,s;const c=n.code;if(![l.ArrowUp,l.ArrowDown,l.ArrowRight,l.ArrowLeft].includes(c))return;n.preventDefault();const a=((t=(e=this._items)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0)-1;if(a<0)return;const i=this.currentIndex;let r=i;switch(c){case l.ArrowUp:case l.ArrowLeft:r=i>0?i-1:a;break;case l.ArrowDown:case l.ArrowRight:r=i<a?i+1:0}if(i===r||!((s=(o=this.state._items)===null||o===void 0?void 0:o[r])===null||s===void 0)&&s._disabled)return;this.currentIndex=r;const h=this.getCurrentToolbarItem(r);this.host&&(h==null||h.focus())}handleBlur(n){n.target===this.host&&this.setFirstEnabledItemIndex()}componentWillLoad(){this.validateLabel(this._label),this.validateItems(this._items),this.validateOrientation(this._orientation),this.setFirstEnabledItemIndex()}get host(){return p(this)}static get watchers(){return{_label:["validateLabel"],_items:["validateItems"],_orientation:["validateOrientation"]}}};E.style={default:S};export{E as kol_toolbar};
