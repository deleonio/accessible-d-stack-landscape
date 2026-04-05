import{h as l,r,g as s}from"./index-Bp2HTB7q.js";import{c as d}from"./clsx-COFh-Vc8-XoI9wUSr.js";import{F as c}from"./FormFieldStateWrapper-DsX6gk6N-ErAO9mLx.js";import{I as h,a as u}from"./controller-icon-CYmINtAB-BQentRvR.js";import{I as p}from"./InputStateWrapper-xUqVwJbq-B8ltVxqW.js";import{I as a}from"./component-D3oJtEcp-DO1C1_su.js";import{n as m}from"./dev.utils-BL9Lx_uf-BSaNqjRt.js";import{d as f,s as b}from"./element-click-BTxuJDNT-C3VwA7Ox.js";import{d as v,s as k}from"./element-focus-BKUtVrWY-DLAyuMzs.js";import{p as g}from"./controller-eUfCqvxN-6DX3-ox1.js";import{v as y}from"./auto-complete-DmusaKxg-qBqrDJec.js";import{v as _}from"./placeholder-BuBUMNhW-DReRvSJ7.js";import{v as w}from"./read-only-DnkXqxgk-fOmsg5JA.js";import{v as x}from"./required-C9Xj8kw2-DgQ_5Tf8.js";import{v as S}from"./suggestions-D5cst2OI-DYWfGn87.js";import"./_Uint8Array-kJHDjtoP-Dy4Yhf8F.js";import"./isArray-CcrBs4JM-Cx3brLAR.js";import"./tslib.es6-CxX45GIN-CNLfoBeZ.js";import"./variant-quote-CHD0qMkY-XAL8cVNh.js";import"./normalizers-DnkJhVYZ-BPRdy9xw.js";import"./component-DpGGeM3i-CCK5XWte.js";import"./i18n-BVaUp6qp-B22iMgjv.js";import"./Alert-Ccw-DwxA-Cw1uYiCJ.js";import"./access-and-short-key-D2TiPdWw-BivlvsLj.js";import"./disabled-BBn2JEzf-BV1wEb73.js";import"./hide-label-DQL9J6E_-_xcKv34J.js";import"./label-vxVEH2gH-DoBceXFF.js";import"./tooltip-align-DnbCY1Uu-BvMSRadP.js";import"./align-D3Z54kEL-BPd-Ug7i.js";import"./associated.controller-BKQIR17--DmQRnwoN.js";import"./component-CAXga0_U-7VZn-7hR.js";import"./controller-BhIDd4zH-DqiJeB66.js";import"./align-floating-elements-58sFZOrL-CmKmVHKU.js";import"./tooltip-open-tracking-D3tCiiGP-CCqYyoJn.js";import"./label-BEOW9ltS-CG0azRTZ.js";import"./base-controller-CXhqh4cR-BR_IVuhr.js";import"./icons-CqQ9plmY-ZhTQl6Da.js";import"./Input-vt6KaJWU-1PzGEnWH.js";import"./Heading-D3N3WLAQ-BZpg39gT.js";/*!
 * KoliBri - The accessible HTML-Standard
 */class z extends u{constructor(e,t,o){super(e,t,o),this.component=e}validateAutoComplete(e){y(this.component,e)}validateSuggestions(e){S(this.component,e)}validateMax(e){this.validateNumber("_max",e)}validateMin(e){this.validateNumber("_min",e)}validatePlaceholder(e){_(this.component,e)}validateReadOnly(e){w(this.component,e)}validateRequired(e){x(this.component,e)}validateStep(e){this.validateNumber("_step",e)}validateValue(e){this.validateNumber("_value",e),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMax(this.component._max),this.validateMin(this.component._min),this.validateSuggestions(this.component._suggestions),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateStep(this.component._step),this.validateValue(this.component._value)}}const V=`@charset "UTF-8";
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
/* forward the rem function */
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
  .kol-alert .kol-icon {
    color: inherit;
    display: inline-block;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  .kol-alert :host {
    display: inline-block;
  }
  .kol-alert .kol-button {
    display: flex;
    min-height: var(--a11y-min-size);
    font-style: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
    text-decoration-line: none;
  }
  .kol-alert .kol-button::before {
    /* Render zero-width character as first element to set the baseline correctly. */
    content: "​";
  }
  .kol-alert .kol-button__text {
    flex: 1 0 100%;
  }
  .kol-alert {
    display: grid;
  }
  .kol-alert__container {
    display: flex;
    place-items: center;
  }
  .kol-alert__container-content {
    flex-grow: 1;
  }
  .kol-alert__closer {
    /* Visible with forced colors */
    outline: transparent solid calc(1 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field {
    display: grid;
  }
  .kol-form-field:not(.kol-form-field--disabled) .kol-form-field__label {
    cursor: pointer;
  }
  .kol-form-field__label-text {
    flex-flow: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .kol-form-field--disabled .kol-form-field__label {
    opacity: 0.5;
  }
  .kol-form-field--required .kol-form-field__label-text:not(:has(> [name]))::after,
  .kol-form-field--required .kol-form-field__tooltip .span-label::after {
    content: "*"/"";
  }
  .kol-form-field--disabled .kol-form-field__hint {
    opacity: 0.5;
  }
  .kol-input-container {
    background-color: transparent;
    display: grid;
    width: 100%;
    min-width: var(--a11y-min-size);
    min-height: var(--a11y-min-size);
    align-items: center;
    grid-template-columns: 1fr;
  }
  .kol-input-container:has(> .kol-input-container__adornment--start) {
    grid-template-columns: auto 1fr auto;
  }
  .kol-input-container__container {
    position: relative;
  }
  .kol-input-container__adornment {
    display: flex;
    align-items: center;
  }
  .kol-input-container__adornment .kol-icon {
    display: grid;
    min-height: var(--a11y-min-size);
    place-items: center;
  }
  .kol-input {
    background-color: transparent;
    width: 100%;
    min-width: var(--a11y-min-size);
  }
  .kol-input:focus {
    outline: none;
  }
  .kol-icon {
    color: inherit;
    display: inline-block;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  .kol-input-number input {
    appearance: textfield;
    text-align: right;
  }
  .kol-input-number input::-webkit-inner-spin-button {
    display: none;
  }
}`,I=class{async getValue(){return this.remapValue(this.state._value)}async focus(){return v(this.host,()=>k(this.inputRef))}async click(){return f(this.host,async()=>b(this.inputRef))}setInitialValueType(n){this.controller.isNumberString(n)?this._initialValueType="NumberString":typeof n!="number"||isNaN(n)?this._initialValueType="null":this._initialValueType="number"}remapValue(n){return n==null?null:this._initialValueType==="NumberString"?String(n):n}getFormFieldProps(){return{state:this.state,class:d("kol-input-number","number",{"has-value":this.state._hasValue}),tooltipAlign:this._tooltipAlign,alert:this.showAsAlert()}}getInputProps(){return Object.assign(Object.assign({ref:this.setInputRef,state:this.state,type:"number"},this.controller.onFacade),{onInput:this.onInput,onChange:this.onChange,onKeyDown:this.onKeyDown,onFocus:n=>{this.controller.onFacade.onFocus(n),this.inputHasFocus=!0},onBlur:n=>{this.controller.onFacade.onBlur(n),this.inputHasFocus=!1}})}getStepUpButton(){return this._disabled||this._readOnly?null:l("button",{type:"button",tabIndex:-1,class:"kol-input-number__step-button kol-input-number__step-button-up kol-input-container__smart-button","data-testid":"kol-input-number-step-up",onClick:n=>{var e,t,o;(e=this.inputRef)===null||e===void 0||e.stepUp();const i=(t=this.inputRef)===null||t===void 0?void 0:t.value;this._value=this.remapValue(i===""?null:Number(i)),this.controller.onFacade.onInput(n,!0,this._value),(o=this.inputRef)===null||o===void 0||o.focus()},disabled:this._disabled||this._readOnly},l(a,{icons:"kolicon-plus",label:""}))}getStepDownButton(){return this._disabled||this._readOnly?null:l("button",{type:"button",tabIndex:-1,class:"kol-input-number__step-button kol-input-number__step-button-down kol-input-container__smart-button","data-testid":"kol-input-number-step-down",onClick:n=>{var e,t,o;(e=this.inputRef)===null||e===void 0||e.stepDown();const i=(t=this.inputRef)===null||t===void 0?void 0:t.value;this._value=this.remapValue(i===""?null:Number(i)),this.controller.onFacade.onInput(n,!0,this._value),(o=this.inputRef)===null||o===void 0||o.focus()},disabled:this._disabled||this._readOnly},l(a,{icons:"kolicon-minus",label:""}))}render(){return l(c,Object.assign({key:"08c5def313585b0883c7dbfd3bb14e0aeb0528b8"},this.getFormFieldProps()),l(h,{key:"f0ecded372b20b129a4d4a28b5b3e0b4c72d9a1b",state:this.state,startAdornment:this.getStepDownButton(),endAdornment:this.getStepUpButton()},l(p,Object.assign({key:"71904ba05d1e8b9e72924df5be756decbdd2b787"},this.getInputProps()))))}constructor(n){r(this,n),this.setInputRef=e=>{this.inputRef=e},this.onInput=e=>{var t;const o=(t=this.inputRef)===null||t===void 0?void 0:t.value;this._value=this.remapValue(o===""?null:Number(o)),this.controller.onFacade.onInput(e,!0,this._value)},this.onChange=e=>{var t;const o=(t=this.inputRef)===null||t===void 0?void 0:t.value,i=this.remapValue(o===""?null:Number(o));this.controller.onFacade.onChange(e,i)},this.onKeyDown=e=>{this.controller.onFacade.onKeyDown(e),e.code!=="Enter"&&e.code!=="NumpadEnter"||g({form:this.host})},this._autoComplete="off",this._disabled=!1,this._hideMsg=!1,this._hideLabel=!1,this._hint="",this._readOnly=!1,this._required=!1,this._tooltipAlign="top",this._touched=!1,this.state={_hasValue:!1,_hideMsg:!1,_id:`id-${m()}`,_label:"",_suggestions:[]},this._initialValueType="null",this.inputHasFocus=!1,this.controller=new z(this,"number",this.host)}showAsAlert(){return!!this.state._touched&&!this.inputHasFocus}validateAccessKey(n){this.controller.validateAccessKey(n)}validateAutoComplete(n){this.controller.validateAutoComplete(n)}validateDisabled(n){this.controller.validateDisabled(n)}validateHideMsg(n){this.controller.validateHideMsg(n)}validateHideLabel(n){this.controller.validateHideLabel(n)}validateHint(n){this.controller.validateHint(n)}validateIcons(n){this.controller.validateIcons(n)}validateLabel(n){this.controller.validateLabel(n)}validateMax(n){this.controller.validateMax(n)}validateMin(n){this.controller.validateMin(n)}validateMsg(n){this.controller.validateMsg(n)}validateName(n){this.controller.validateName(n)}validateOn(n){this.controller.validateOn(n)}validatePlaceholder(n){this.controller.validatePlaceholder(n)}validateReadOnly(n){this.controller.validateReadOnly(n)}validateRequired(n){this.controller.validateRequired(n)}validateShortKey(n){this.controller.validateShortKey(n)}validateSmartButton(n){this.controller.validateSmartButton(n)}validateSuggestions(n){this.controller.validateSuggestions(n)}validateStep(n){this.controller.validateStep(n)}validateSyncValueBySelector(n){this.controller.validateSyncValueBySelector(n)}validateTouched(n){this.controller.validateTouched(n)}validateValue(n){this.controller.validateValue(n),n!=null&&this.setInitialValueType(n)}componentWillLoad(){this._value!==void 0&&this.setInitialValueType(this._value),this._touched=this._touched===!0,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener(n=>this.state._hasValue=!!n)}get host(){return s(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_hideMsg:["validateHideMsg"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_label:["validateLabel"],_max:["validateMax"],_min:["validateMin"],_msg:["validateMsg"],_name:["validateName"],_on:["validateOn"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_shortKey:["validateShortKey"],_smartButton:["validateSmartButton"],_suggestions:["validateSuggestions"],_step:["validateStep"],_syncValueBySelector:["validateSyncValueBySelector"],_touched:["validateTouched"],_value:["validateValue"]}}};I.style={default:V};export{I as kol_input_number};
