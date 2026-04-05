import{r as T,h as i,H as B}from"./index-BEjAYNDX.js";import{B as D}from"./variant-quote-CHD0qMkY-CyMcg2Xd.js";import{t as g}from"./i18n-BVaUp6qp-BYvxXtk0.js";import{c as d,d as p,n as O}from"./normalizers-DnkJhVYZ-DuPOAPJ6.js";import{l as z}from"./label-BEOW9ltS-C0Di623R.js";import{m as L,u as P}from"./unit-eRQuaHYy-Cmwa6ac-.js";import{B as $}from"./base-controller-CXhqh4cR-BR_IVuhr.js";import"./_Uint8Array-kJHDjtoP-Dy4Yhf8F.js";import"./isArray-CcrBs4JM-Cx3brLAR.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const U=d("high",0,p),E=d("low",0,p),M=d("min",0,p),I=d("optimum",0,p),q=["horizontal","vertical"],S=d("orientation","horizontal",e=>{const t=O(e);if(q.includes(t))return t;throw new Error(`Invalid orientation: ${t}`)}),V=d("value",0,p,e=>e>=0);function H(e,t,n,s,c,r){const o=s??t,h=c??n;if(r===void 0)return e>=o&&e<=h?"optimum":"suboptimal";const m=e<o,l=e>h,a=!m&&!l;return r<o?m?"optimum":a?"suboptimal":"critical":r>h?l?"optimum":a?"suboptimal":"critical":a?"optimum":"suboptimal"}const W=e=>{const{high:t,label:n,low:s,liveValue:c,max:r,min:o,optimum:h,orientation:m,unit:l,value:a}=e,f=m==="vertical",b=l==="%",C=b?Math.round((a-o)/(r-o)*100):a,k=b?`${Math.round((c-o)/(r-o)*100)}`:c,R=`${`${(b?100:r)+1}`.length}ch`,v=Math.min(100,Math.max(0,(a-o)/(r-o)*100)),u=H(a,o,r,s,t,h),w=s!==void 0||t!==void 0,_=w?g(`kol-meter-state-${u}`):"",y=b?g("kol-live-value",{placeholders:{value:String(k),unit:l}}):g("kol-live-value-bounded",{placeholders:{value:String(k),max:String(r),unit:l}}),A=w?`${y} – ${_}`:y,x={"kol-meter__bar-fill":!0,"kol-meter__bar-fill--optimum":u==="optimum","kol-meter__bar-fill--suboptimal":u==="suboptimal","kol-meter__bar-fill--critical":u==="critical"};return i("div",{class:{"kol-meter":!0,"kol-meter--vertical":f}},i("div",{"aria-hidden":"true",class:"kol-meter__bar"},i("div",{class:"kol-meter__bar-label"},n,w&&i("span",{class:`kol-meter__bar-state kol-meter__bar-state--${u}`}," – ",_)),f?i("div",{class:"kol-meter__bar-track"},i("div",{class:x,style:{height:`calc((100% - 6px) * ${v/100})`}})):i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"12",overflow:"visible"},i("rect",{class:"kol-meter__bar-background",x:"1",y:"1",height:"11",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",width:"100%"}),i("rect",{class:"kol-meter__bar-border",x:"1",y:"1",height:"11",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"1",width:"100%"}),i("rect",{class:x,x:"3",y:"3",height:"7",rx:"3.5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",style:{width:`calc(${v}% - 4px)`}})),i("span",{class:"kol-meter__value-unit"},i("span",{class:"kol-meter__value",style:f?{}:{width:R}},C)," ",i("span",{class:"kol-meter__unit"},l))),i("meter",{"aria-label":n,class:"visually-hidden",high:t,low:s,max:r,min:o,optimum:h,value:a}),i("span",{"aria-live":"polite","aria-relevant":"additions text",class:"visually-hidden"},A))},K={optional:[M,S,P],required:[z,L,V]};class N extends ${constructor(t){super(t,K),this.meterData={high:void 0,low:void 0,optimum:void 0}}componentWillLoad(t){const{high:n,label:s,low:c,max:r,min:o,optimum:h,orientation:m,unit:l,value:a}=t;this.watchHigh(n),this.watchLabel(s),this.watchLow(c),this.watchMax(r),this.watchMin(o),this.watchOptimum(h),this.watchOrientation(m),this.watchUnit(l),this.watchValue(a),this.setState("liveValue",this.getRenderProp("value")),this.startLiveValueInterval()}destroy(){this.interval&&(clearInterval(this.interval),this.interval=void 0)}getMeterData(){return this.meterData}watchHigh(t){t===void 0?this.meterData.high=void 0:U.apply(t,n=>{this.meterData.high=n})}watchLabel(t){z.apply(t,n=>{this.setRenderProp("label",n)})}watchLow(t){t===void 0?this.meterData.low=void 0:E.apply(t,n=>{this.meterData.low=n})}watchMax(t){L.apply(t,n=>{this.setRenderProp("max",n)})}watchMin(t){M.apply(t,n=>{this.setRenderProp("min",n)})}watchOptimum(t){t===void 0?this.meterData.optimum=void 0:I.apply(t,n=>{this.meterData.optimum=n})}watchOrientation(t){S.apply(t,n=>{this.setRenderProp("orientation",n)})}watchUnit(t){P.apply(t,n=>{this.setRenderProp("unit",n)})}watchValue(t){V.apply(t,n=>{this.setRenderProp("value",n)})}startLiveValueInterval(){this.interval=setInterval(()=>{const t=this.getRenderProp("value");this.getState("liveValue")!==t&&this.setState("liveValue",t)},5e3)}}const j=`/* forward the rem function */
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
  .kol-meter__bar {
    display: grid;
    column-gap: calc(0.8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
    grid-template-areas: "LABEL LABEL LABEL" "BAR VALUE UNIT";
    grid-template-columns: 1fr auto;
  }
  .kol-meter__bar-label {
    grid-column-end: 2;
    grid-area: LABEL;
  }
  .kol-meter__bar svg {
    grid-area: BAR;
  }
  .kol-meter__bar-border {
    fill: transparent;
    stroke: black;
  }
  .kol-meter__bar-background {
    fill: lightgray;
    stroke: white;
  }
  .kol-meter__bar-fill {
    stroke: transparent;
  }
  @media (prefers-reduced-motion: no-preference) {
    .kol-meter__bar-fill {
      transition: 250ms ease-in-out 50ms;
    }
  }
  .kol-meter__bar-fill--optimum {
    color: #2ea32e;
    color: #2ea32e;
    fill: #2ea32e;
  }
  .kol-meter__bar-fill--suboptimal {
    color: #c8a000;
    color: #c8a000;
    fill: #c8a000;
  }
  .kol-meter__bar-fill--critical {
    color: #c00;
    color: #c00;
    fill: #c00;
  }
  .kol-meter__value-unit {
    display: contents;
  }
  .kol-meter__value {
    grid-area: VALUE;
    text-align: right;
  }
  .kol-meter__unit {
    grid-area: UNIT;
  }
  .kol-meter--vertical {
    display: inline-flex;
  }
  .kol-meter--vertical .kol-meter__bar {
    display: flex;
    min-height: var(--kol-meter-height, calc(128 * 1rem / var(--kolibri-root-font-size, 16)));
    row-gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    flex-direction: column;
    align-items: center;
  }
  .kol-meter--vertical .kol-meter__bar-label {
    text-align: center;
  }
  .kol-meter--vertical .kol-meter__bar-track {
    background: lightgray;
    outline: calc(1 * 1rem / var(--kolibri-root-font-size, 16)) solid black;
    border-radius: calc(6 * 1rem / var(--kolibri-root-font-size, 16));
    position: relative;
    width: calc(12 * 1rem / var(--kolibri-root-font-size, 16));
    min-height: 0;
    overflow: hidden;
    flex: 1;
  }
  .kol-meter--vertical .kol-meter__bar-fill {
    background: currentColor;
    border-radius: calc(3 * 1rem / var(--kolibri-root-font-size, 16));
    position: absolute;
    right: calc(3 * 1rem / var(--kolibri-root-font-size, 16));
    bottom: calc(3 * 1rem / var(--kolibri-root-font-size, 16));
    left: calc(3 * 1rem / var(--kolibri-root-font-size, 16));
  }
  @media (prefers-reduced-motion: no-preference) {
    .kol-meter--vertical .kol-meter__bar-fill {
      transition: height 250ms ease-in-out 50ms;
    }
  }
  .kol-meter--vertical .kol-meter__value-unit {
    display: contents;
  }
  .kol-meter--vertical .kol-meter__value {
    width: auto;
    text-align: center;
  }
  .kol-meter--vertical .kol-meter__unit {
    text-align: center;
  }
}`,F=class extends D{constructor(e){super(),T(this,e),this.ctrl=new N(this.stateAccess),this._orientation="horizontal",this._unit="%",this.liveValue=0}watchHigh(e){this.ctrl.watchHigh(e)}watchLabel(e){this.ctrl.watchLabel(e)}watchLow(e){this.ctrl.watchLow(e)}watchMax(e){this.ctrl.watchMax(e)}watchMin(e){this.ctrl.watchMin(e)}watchOptimum(e){this.ctrl.watchOptimum(e)}watchOrientation(e){this.ctrl.watchOrientation(e)}watchUnit(e){this.ctrl.watchUnit(e)}watchValue(e){this.ctrl.watchValue(e)}componentWillLoad(){this.ctrl.componentWillLoad({high:this._high,label:this._label,low:this._low,max:this._max,min:this._min,optimum:this._optimum,orientation:this._orientation,unit:this._unit,value:this._value})}disconnectedCallback(){this.ctrl.destroy()}render(){const{high:e,low:t,optimum:n}=this.ctrl.getMeterData();return i(B,{key:"d84a0464ee8f975df788de58561ab2eb922c68e3"},i(W,{key:"e7cb9ee6a916b8afc538aa4acadae51bca50f57f",high:e,label:this.ctrl.getRenderProp("label"),low:t,liveValue:this.liveValue,max:this.ctrl.getRenderProp("max"),min:this.ctrl.getRenderProp("min"),optimum:n,orientation:this.ctrl.getRenderProp("orientation"),unit:this.ctrl.getRenderProp("unit"),value:this.ctrl.getRenderProp("value")}))}static get watchers(){return{_high:["watchHigh"],_label:["watchLabel"],_low:["watchLow"],_max:["watchMax"],_min:["watchMin"],_optimum:["watchOptimum"],_orientation:["watchOrientation"],_unit:["watchUnit"],_value:["watchValue"]}}};F.style={default:j};export{F as kol_meter};
