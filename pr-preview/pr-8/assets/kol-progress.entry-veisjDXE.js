import{r as w,h as r,H as y}from"./index-D2HA3l2I.js";import{B as v}from"./variant-quote-CHD0qMkY-BNzDdLYt.js";import{t as h}from"./i18n-BVaUp6qp-AH3SScv1.js";import{l as p}from"./label-BEOW9ltS-B9z6yYZU.js";import{m as u,u as g}from"./unit-eRQuaHYy-BB0jPHDy.js";import{b as _,c as x,d as C,n as P}from"./normalizers-DnkJhVYZ-DXVhldNo.js";import{B as L}from"./base-controller-CXhqh4cR-BR_IVuhr.js";import"./_Uint8Array-kJHDjtoP-Dy4Yhf8F.js";import"./isArray-CcrBs4JM-Cx3brLAR.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const m=_("value",0,(t,e)=>{const n=C(t);return n<e.min?e.min:n>e.max?e.max:n},t=>t>=0),V=["bar","cycle"],b=x("variant","bar",t=>{const e=P(t);if(V.includes(e))return e;throw new Error(`Invalid progress variant: ${e}`)},()=>!0),z=({max:t,value:e})=>r("svg",{width:"100",viewBox:"0 0 120 120",xmlns:"http://www.w3.org/2000/svg"},r("circle",{class:"kol-progress__cycle-background",cx:"60",cy:"60",r:"54.5",fill:"currentColor",stroke:"currentColor","stroke-width":"8"}),r("circle",{class:"kol-progress__cycle-whitespace",cx:"60",cy:"60",r:"59",fill:"currentColor",stroke:"currentColor","stroke-width":"3"}),r("circle",{class:"kol-progress__cycle-border",cx:"60",cy:"60",r:"59",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),r("circle",{class:"kol-progress__cycle-whitespace",cx:"60",cy:"60",r:"51",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),r("circle",{class:"kol-progress__cycle-border",cx:"60",cy:"60",r:"50",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),r("circle",{class:"kol-progress__cycle-progress",fill:"currentColor",stroke:"currentColor","stroke-linecap":"round","stroke-dasharray":`${Math.round(e/t*342)}px 342px`,"stroke-width":"6",cx:"60",cy:"60",r:"54.5"})),S=({max:t,value:e})=>{const n=e/t*100;return r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"12",overflow:"visible"},r("rect",{class:"kol-progress__bar-background",x:"1",y:"1",height:"11",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",width:"100%"}),r("rect",{class:"kol-progress__bar-border",x:"1",y:"1",height:"11",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"1",width:"100%"}),r("rect",{class:"kol-progress__bar-progress",x:"3",y:"3",height:"7",rx:"3.5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",style:{width:`calc(${n}% - 4px)`}}))},R=(t,e,n)=>{switch(t){case"cycle":return r(z,{max:e,value:n});case"bar":return r(S,{max:e,value:n});default:throw new Error(`Progress variant ${t} not implemented.`)}},A=t=>{const{label:e,max:n,unit:a,value:l,variant:o,liveValue:s}=t,i=a==="%",c=i?`${Math.round(s/n*100)}`:s,d=i?Math.round(l/n*100):l,f=`${`${(i?100:n)+1}`.length}ch`,k=i?h("kol-live-value",{placeholders:{value:String(c),unit:a}}):h("kol-live-value-bounded",{placeholders:{value:String(c),max:String(n),unit:a}});return r("div",{class:"kol-progress"},r("div",{"aria-hidden":"true",class:{"kol-progress__cycle":o==="cycle","kol-progress__bar":o==="bar"}},o==="bar"&&e&&r("div",{class:"kol-progress__bar-label"},e),R(o,n,l),o==="cycle"&&r("div",{class:"kol-progress__cycle-text"},e&&r("div",{class:"kol-progress__cycle-label"},e),r("div",{class:"kol-progress__cycle-value"},`${d} ${a}`)),o==="bar"&&r("div",{class:"kol-progress__bar-value",style:{width:f}},d),o==="bar"&&r("div",{class:"kol-progress__bar-unit"},a)),r("progress",{class:"visually-hidden","aria-busy":l<n?"true":"false",max:n,value:l}),r("span",{"aria-live":"polite","aria-relevant":"removals text",class:"visually-hidden"},k))},B={optional:[p,g,b],required:[u,m]};class T extends L{constructor(e){super(e,B)}componentWillLoad(e){const{label:n,max:a,unit:l,value:o,variant:s}=e;this.watchLabel(n),this.watchMax(a),this.watchUnit(l),this.watchValue(o),this.watchVariant(s),this.setState("liveValue",this.getRenderProp("value")),this.startLiveValueInterval()}watchLabel(e){p.apply(e,n=>{this.setRenderProp("label",n)})}watchMax(e){u.apply(e,n=>{this.setRenderProp("max",n),this.watchValue(this.getRawProp("value"))})}watchUnit(e){g.apply(e,n=>{this.setRenderProp("unit",n)})}watchValue(e){this.setRawProp("value",e),m.apply(e,n=>{this.setRenderProp("value",n)},{min:0,max:this.getRenderProp("max")})}watchVariant(e){b.apply(e,n=>{this.setRenderProp("variant",n)})}startLiveValueInterval(){this.interval=setInterval(()=>{const e=this.getRenderProp("value");this.setState("liveValue",e)},5e3)}destroy(){this.interval&&(clearInterval(this.interval),this.interval=void 0)}}const E=`/* forward the rem function */
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
  .kol-progress__bar {
    display: grid;
    align-items: center;
    grid-template-areas: "LABEL LABEL LABEL" "BAR VALUE UNIT";
    grid-template-columns: 1fr auto;
  }
  .kol-progress__bar-label {
    grid-column-end: 2;
    grid-area: LABEL;
  }
  .kol-progress__bar svg {
    grid-area: BAR;
  }
  .kol-progress__bar-value {
    grid-area: VALUE;
    text-align: right;
  }
  .kol-progress__bar-unit {
    grid-area: UNIT;
  }
  .kol-progress__bar-border {
    fill: transparent;
    stroke: black;
  }
  .kol-progress__bar-background {
    fill: lightgray;
    stroke: white;
  }
  .kol-progress__bar-progress {
    fill: #0075ff;
    stroke: transparent;
  }
  @media (prefers-reduced-motion: no-preference) {
    .kol-progress__bar-progress {
      transition: 250ms ease-in-out 50ms;
    }
  }
  .kol-progress__cycle {
    display: grid;
    align-content: center;
    justify-items: center;
    grid-template-areas: "ALL";
    grid-template-columns: auto;
  }
  .kol-progress__cycle > * {
    grid-area: ALL;
  }
  .kol-progress__cycle-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: x-small;
    text-align: center;
  }
  .kol-progress__cycle-text * {
    background-color: white;
  }
  .kol-progress__cycle-background {
    fill: transparent;
    stroke: lightgray;
  }
  .kol-progress__cycle-border {
    fill: transparent;
    stroke: black;
  }
  .kol-progress__cycle-whitespace {
    fill: transparent;
    stroke: white;
  }
  .kol-progress__cycle-progress {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    fill: transparent;
    stroke: #0075ff;
  }
  @media (prefers-reduced-motion: no-preference) {
    .kol-progress__cycle-progress {
      transition: 250ms ease-in-out 50ms;
    }
  }
}`,M=class extends v{constructor(t){super(),w(this,t),this.ctrl=new T(this.stateAccess),this.liveValue=0}watchLabel(t){this.ctrl.watchLabel(t)}watchMax(t){this.ctrl.watchMax(t)}watchUnit(t){this.ctrl.watchUnit(t)}watchValue(t){this.ctrl.watchValue(t)}watchVariant(t){this.ctrl.watchVariant(t)}componentWillLoad(){this.ctrl.componentWillLoad({label:this._label,max:this._max,unit:this._unit,value:this._value,variant:this._variant})}disconnectedCallback(){this.ctrl.destroy()}render(){return r(y,{key:"70710a5592ba3177b7d4e657c36ee496c92fb879"},r(A,{key:"19414781e2a8b8b4daa4df4ca0734afcc7507830",label:this.ctrl.getRenderProp("label"),max:this.ctrl.getRenderProp("max"),unit:this.ctrl.getRenderProp("unit"),value:this.ctrl.getRenderProp("value"),variant:this.ctrl.getRenderProp("variant"),liveValue:this.liveValue}))}static get watchers(){return{_label:["watchLabel"],_max:["watchMax"],_unit:["watchUnit"],_value:["watchValue"],_variant:["watchVariant"]}}};M.style={default:E};export{M as kol_progress};
