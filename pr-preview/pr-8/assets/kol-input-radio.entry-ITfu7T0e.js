import{h as l,r as s,g as d}from"./index-D2HA3l2I.js";import{c as a}from"./clsx-COFh-Vc8-XoI9wUSr.js";import{n as c}from"./dev.utils-BL9Lx_uf-Gyvsp91l.js";import{d as h,s as p}from"./element-click-BTxuJDNT-C3VwA7Ox.js";import{d as u,s as f}from"./element-focus-BKUtVrWY-DLAyuMzs.js";import{p as m}from"./controller-eUfCqvxN-C3aJ8CWf.js";import{a as b}from"./controller-BKRP0tqb-BRTf4zMx.js";import{F as g}from"./FieldControlStateWrapper-DshiHE0s-CStXNd_A.js";import{F as k,a as _,i as y}from"./FormFieldStateWrapper-DsX6gk6N-BwBMBLG2.js";import{_ as r}from"./tslib.es6-CxX45GIN-CNLfoBeZ.js";import{I as v}from"./Input-vt6KaJWU-B4AkQFiT.js";import"./variant-quote-CHD0qMkY-BNzDdLYt.js";import"./normalizers-DnkJhVYZ-DXVhldNo.js";import"./_Uint8Array-kJHDjtoP-Dy4Yhf8F.js";import"./isArray-CcrBs4JM-Cx3brLAR.js";import"./component-DpGGeM3i-BiIO8rWY.js";import"./component-D3oJtEcp-C099JPRM.js";import"./i18n-BVaUp6qp-AH3SScv1.js";import"./Alert-Ccw-DwxA-B9kAm3Ck.js";import"./label-vxVEH2gH-DqBIwy4C.js";import"./required-C9Xj8kw2-Xt5PrCjW.js";import"./orientation-D3LRVMo1-C6jD_Wqh.js";import"./component-CAXga0_U-Bed7ZYWn.js";import"./controller-BhIDd4zH-CdxbTA2f.js";import"./align-floating-elements-58sFZOrL-Rs-7YaoD.js";import"./tooltip-open-tracking-D3tCiiGP-CCqYyoJn.js";import"./align-D3Z54kEL-Bt6iRgbN.js";import"./label-BEOW9ltS-B9z6yYZU.js";import"./base-controller-CXhqh4cR-BR_IVuhr.js";import"./access-and-short-key-D2TiPdWw-6vR8K1E1.js";import"./disabled-BBn2JEzf-GxcNozUW.js";import"./hide-label-DQL9J6E_-CsWmLKn4.js";import"./tooltip-align-DnbCY1Uu-DNN5JFCj.js";import"./associated.controller-BKQIR17--CiyPnUXk.js";import"./Heading-D3N3WLAQ-DoQoLF0M.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const w=n=>{var{class:t}=n,e=r(n,["class"]);return l(v,Object.assign({class:a("kol-input-radio__input",t)},e,{type:"radio"}))},x=n=>{var{class:t,inputProps:e}=n,i=r(n,["class","inputProps"]);const o={"kol-input-radio--checked":e==null?void 0:e.checked,"kol-input-radio--disabled":!!(e!=null&&e.disabled),"kol-input-radio--required":!!(e!=null&&e.required),"kol-input-radio--touched":!!(e!=null&&e.touched),[`kol-input-radio--${_(e==null?void 0:e.msg)}`]:!!y(e==null?void 0:e.msg,e==null?void 0:e.touched)};return l("label",Object.assign({class:a("kol-input-radio",o,t)},i),l(w,Object.assign({},e)))};function z(n,t={}){const e={id:n._id,hideLabel:n._hideLabel,label:n._label,value:n._value,disabled:n._disabled,name:n._name};return"_required"in n&&(e.required=n._required),"_touched"in n&&(e.touched=n._touched),"_msg"in n&&(e.msg=n._msg),Object.assign(Object.assign({},e),t)}const F=n=>{var{state:t,inputProps:e}=n,i=r(n,["state","inputProps"]);return l(x,Object.assign({inputProps:z(t,e)},i))},I=`@charset "UTF-8";
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
  .kol-field-control {
    display: grid;
    min-height: var(--a11y-min-size);
    align-items: center;
    justify-content: left;
    grid-template-areas: "input label";
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
  }
  .kol-field-control:has(.kol-field-control__hint) {
    grid-template-areas: "input label" "hint hint";
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
  }
  .kol-field-control--label-align-left:not(.kol-field-control--hide-label) {
    grid-template-areas: "label input";
    grid-template-columns: 1fr auto;
    grid-template-rows: auto;
  }
  .kol-field-control--label-align-left:not(.kol-field-control--hide-label):has(.kol-field-control__hint) {
    grid-template-areas: "label input" "hint hint";
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
  }
  .kol-field-control__input {
    display: flex;
    min-height: var(--a11y-min-size);
    align-items: center;
    grid-area: input;
  }
  .kol-field-control__label {
    display: flex;
    min-height: var(--a11y-min-size);
    flex-grow: 1;
    align-items: center;
    cursor: pointer;
    grid-area: label;
  }
  .kol-field-control__label--visually-hidden {
    height: 0;
    margin: 0;
    padding: 0;
    visibility: hidden;
  }
  .kol-field-control__label-text {
    flex-flow: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .kol-field-control__hint {
    grid-area: hint;
  }
  .kol-field-control--disabled .kol-field-control__label {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .kol-field-control--required .kol-field-control__label-text::after {
    content: "*"/"";
  }
  .kol-field-control--required .kol-tooltip .kol-span__label::after {
    content: "*"/"";
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
  .kol-form-field {
    --border-width: 2px;
    --input-size: 1.5em;
  }
  .kol-form-field__label {
    display: contents;
  }
  .kol-form-field__label-text {
    display: ruby;
  }
  .kol-form-field__input {
    display: flex;
    flex-direction: column;
  }
  .kol-form-field__input--orientation-horizontal {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .kol-form-field--disabled {
    opacity: unset;
  }
  .kol-input-radio {
    display: flex;
    position: relative;
    min-width: var(--a11y-min-size);
    min-height: var(--a11y-min-size);
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .kol-input-radio__input {
    border-style: solid;
    border-radius: 100%;
    display: flex;
    width: var(--input-size);
    min-width: var(--input-size);
    height: var(--input-size);
    min-height: var(--input-size);
    margin: 0;
    padding: 0;
    border-width: var(--border-width);
    appearance: none;
    cursor: pointer;
  }
  .kol-input-radio__input:before {
    border-radius: 100%;
    width: calc(var(--input-size) / 2);
    height: calc(var(--input-size) / 2);
    margin: auto;
    content: "";
  }
  .kol-input-radio__input:checked:before {
    background-color: #000;
  }
  @media (forced-colors: active) {
    .kol-input-radio__input:checked:before {
      /* Give it a visible background in forced colors mode */
      background-color: selectedItem !important;
    }
  }
  .kol-input-radio__input:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .kol-input-radio--disabled {
    cursor: not-allowed;
  }
}`,T=class{async getValue(){return this._value}async focus(){return u(this.host,()=>f(this.getFocusableInput()))}async click(){return h(this.host,async()=>p(this.inputRef))}getFocusableInput(){const n=this.state._options,t=!!this.state._disabled,e=n.findIndex(o=>o.value===this.state._value&&!t&&!o.disabled);if(e!==-1){const o=this.inputRefs.get(e);if(o)return o}const i=n.findIndex(o=>!t&&!o.disabled);if(i!==-1)return this.inputRefs.get(i)}getFormFieldProps(){return{state:this.state,component:"fieldset",disabled:!!this.state._disabled,class:a("kol-form-field--radio"),formFieldLabelProps:{component:"legend",class:"kol-form-field__label--legend"},formFieldInputProps:{class:`kol-form-field__input--orientation-${this.state._orientation}`},tooltipAlign:this._tooltipAlign,alert:this.showAsAlert(),hideLabel:!1}}render(){return l(k,Object.assign({key:"7903e042687b7d122ef9dfe5bed8dc725eb5293e"},this.getFormFieldProps()),this.state._options.map((n,t)=>this.renderOption(n,t)))}calculateDisabled(n){return!!this.state._disabled||!!n.disabled}getOptionProps(n,t){return{state:this.state,id:t,hint:n.hint,label:n.label,required:!1,fieldControlLabelProps:{showBadge:!1},disabled:this.calculateDisabled(n)}}getInputProps(n,t,e,i){return{state:this.state,inputProps:Object.assign(Object.assign({id:t,ref:o=>{this.setInputRefByIndex(e)(o),i&&this.setInputRef(o)},"aria-label":this.state._hideLabel&&typeof n.label=="string"?n.label:void 0,type:"radio",name:this.state._name||this.state._id,value:`-${e}`,checked:i,disabled:this.calculateDisabled(n)},this.controller.onFacade),{onChange:this.onChange,onClick:void 0,onInput:this.onInput,onKeyDown:this.onKeyDown.bind(this),onFocus:o=>{this.controller.onFacade.onFocus(o),this.inputHasFocus=!0},onBlur:o=>{this.controller.onFacade.onBlur(o),this.inputHasFocus=!1}})}}renderOption(n,t){const e=`${this.state._id}-${t}`,i=this.state._value===n.value;return l(g,Object.assign({key:e},this.getOptionProps(n,e)),l(F,Object.assign({},this.getInputProps(n,e,t,i))))}constructor(n){s(this,n),this.inputRefs=new Map,this.setInputRef=t=>{this.inputRef=t},this.setInputRefByIndex=t=>e=>{e?this.inputRefs.set(t,e):this.inputRefs.delete(t)},this._disabled=!1,this._hideMsg=!1,this._hideLabel=!1,this._hint="",this._orientation="vertical",this._required=!1,this._tooltipAlign="top",this._touched=!1,this._value=null,this.state={_hideMsg:!1,_id:`id-${c()}`,_label:"",_options:[],_orientation:"vertical"},this.inputHasFocus=!1,this.onInput=t=>{if(t.target instanceof HTMLInputElement){const e=this.controller.getOptionByKey(t.target.value);e!==void 0&&this.controller.onFacade.onInput(t,!0,e.value)}},this.onChange=t=>{if(t.target instanceof HTMLInputElement){const e=this.controller.getOptionByKey(t.target.value);e!==void 0&&(this.controller.onFacade.onChange(t,e.value),this._value=e.value)}},this.onKeyDown=t=>{this.controller.onFacade.onKeyDown(t),t.code!=="Enter"&&t.code!=="NumpadEnter"||m({form:this.host})},this.controller=new b(this,"radio",this.host)}showAsAlert(){return!!this.state._touched&&!this.inputHasFocus}validateTooltipAlign(n){this.controller.validateTooltipAlign(n)}validateDisabled(n){this.controller.validateDisabled(n)}validateHideLabel(n){this.controller.validateHideLabel(n)}validateHideMsg(n){this.controller.validateHideMsg(n)}validateHint(n){this.controller.validateHint(n)}validateLabel(n){this.controller.validateLabel(n)}validateMsg(n){this.controller.validateMsg(n)}validateName(n){this.controller.validateName(n)}validateOn(n){this.controller.validateOn(n)}validateOptions(n){this.controller.validateOptions(n)}validateOrientation(n){this.controller.validateOrientation(n)}validateRequired(n){this.controller.validateRequired(n)}validateSyncValueBySelector(n){this.controller.validateSyncValueBySelector(n)}validateTouched(n){this.controller.validateTouched(n)}validateValue(n){this.controller.validateValue(n)}componentWillLoad(){this._touched=this._touched===!0,this.controller.componentWillLoad()}get host(){return d(this)}static get watchers(){return{_tooltipAlign:["validateTooltipAlign"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_hideMsg:["validateHideMsg"],_hint:["validateHint"],_label:["validateLabel"],_msg:["validateMsg"],_name:["validateName"],_on:["validateOn"],_options:["validateOptions"],_orientation:["validateOrientation"],_required:["validateRequired"],_syncValueBySelector:["validateSyncValueBySelector"],_touched:["validateTouched"],_value:["validateValue"]}}};T.style={default:I};export{T as kol_input_radio};
