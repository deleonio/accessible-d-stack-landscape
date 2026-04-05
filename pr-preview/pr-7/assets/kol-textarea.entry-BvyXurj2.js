import{h as i,r as g,g as k,m as y,w as _}from"./index-Bp2HTB7q.js";import{c}from"./clsx-COFh-Vc8-XoI9wUSr.js";import{F as x,g as w,a as L,i as z,c as R}from"./FormFieldStateWrapper-DsX6gk6N-ErAO9mLx.js";import{I as C,a as S}from"./controller-icon-CYmINtAB-BQentRvR.js";import{_ as d}from"./tslib.es6-CxX45GIN-CNLfoBeZ.js";import{n as T}from"./dev.utils-BL9Lx_uf-BSaNqjRt.js";import{d as B,s as H}from"./element-click-BTxuJDNT-C3VwA7Ox.js";import{d as A,s as M}from"./element-focus-BKUtVrWY-DLAyuMzs.js";import{a as O,v as q,b as F}from"./max-length-behavior-DMw3rhwa-C69u9par.js";import{v as j}from"./placeholder-BuBUMNhW-DReRvSJ7.js";import{v as V}from"./read-only-DnkXqxgk-fOmsg5JA.js";import{v as D}from"./required-C9Xj8kw2-DgQ_5Tf8.js";import{v as K}from"./rows-lThApm3P-SHyqEs54.js";import{v as P}from"./spell-check-Y1ApnP_M-qS9aidyO.js";import"./_Uint8Array-kJHDjtoP-Dy4Yhf8F.js";import"./isArray-CcrBs4JM-Cx3brLAR.js";import"./variant-quote-CHD0qMkY-XAL8cVNh.js";import"./normalizers-DnkJhVYZ-BPRdy9xw.js";import"./component-DpGGeM3i-CCK5XWte.js";import"./component-D3oJtEcp-DO1C1_su.js";import"./i18n-BVaUp6qp-B22iMgjv.js";import"./Alert-Ccw-DwxA-Cw1uYiCJ.js";import"./access-and-short-key-D2TiPdWw-BivlvsLj.js";import"./disabled-BBn2JEzf-BV1wEb73.js";import"./hide-label-DQL9J6E_-_xcKv34J.js";import"./label-vxVEH2gH-DoBceXFF.js";import"./tooltip-align-DnbCY1Uu-BvMSRadP.js";import"./align-D3Z54kEL-BPd-Ug7i.js";import"./associated.controller-BKQIR17--DmQRnwoN.js";import"./component-CAXga0_U-7VZn-7hR.js";import"./controller-BhIDd4zH-DqiJeB66.js";import"./align-floating-elements-58sFZOrL-CmKmVHKU.js";import"./tooltip-open-tracking-D3tCiiGP-CCqYyoJn.js";import"./label-BEOW9ltS-CG0azRTZ.js";import"./base-controller-CXhqh4cR-BR_IVuhr.js";import"./icons-CqQ9plmY-ZhTQl6Da.js";import"./Heading-D3N3WLAQ-BZpg39gT.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const h=["vertical","none"],I=e=>typeof e=="string"&&h.includes(e),W=(e,t)=>{_(e,"_resize",I,new Set(h),t,{defaultValue:"vertical"})},E=e=>{const{class:t,msg:n,touched:o,readonly:a,disabled:r,required:s,ariaDescribedBy:m,hideLabel:f,label:p}=e,u=d(e,["class","msg","touched","readonly","disabled","required","ariaDescribedBy","hideLabel","label"]),b={"kol-textarea--disabled":!!r,"kol-textarea--required":!!s,"kol-textarea--touched":!!o,"kol-textarea--readonly":!!a,[`kol-textarea--${L(n)}`]:z(n,o)},v=Object.assign(Object.assign({class:c("kol-textarea",b,t),required:s,disabled:r,readonly:a},R({ariaDescribedBy:m,hideLabel:f,label:p})),u);return i("textarea",Object.assign({},v))};function N(e,t){var n;const o=[...w(e).ariaDescribedBy,...(n=t.ariaDescribedBy)!==null&&n!==void 0?n:[]],a=Object.assign(Object.assign({id:e._id,hideLabel:e._hideLabel,label:e._label,value:e._value,accessKey:e._accessKey,disabled:e._disabled,name:e._name,rows:e._rows,readonly:e._readOnly,required:e._required,placeholder:e._placeholder,touched:e._touched,msg:e._msg},t),{ariaDescribedBy:o});return"_maxLength"in e&&"_maxLengthBehavior"in e&&e._maxLengthBehavior==="hard"&&(a.maxLength=e._maxLength),"_shortKey"in e&&(a["aria-keyshortcuts"]=e._shortKey),a}const $=e=>{var{state:t}=e,n=d(e,["state"]);return i(E,Object.assign({},N(t,n)))};class U extends S{constructor(t,n,o){super(t,n,o),this.afterSyncCharCounter=()=>{typeof this.component._value=="string"&&(this.component.state._currentLength=this.component._value.length,this.updateCurrentLengthDebounced(this.component._value.length))},this.component=t}validateHasCounter(t){O(this.component,t)}validateMaxLengthBehavior(t){q(this.component,t)}validateMaxLength(t){F(this.component,t,{hooks:{afterPatch:this.afterSyncCharCounter}})}validatePlaceholder(t){j(this.component,t)}validateReadOnly(t){V(this.component,t)}validateResize(t){W(this.component,t)}validateRequired(t){D(this.component,t)}validateRows(t){K(this.component,t)}validateSpellCheck(t){P(this.component,t)}validateValue(t){y(this.component,"_value",t,{hooks:{afterPatch:this.afterSyncCharCounter}}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(){super.componentWillLoad(),this.validateHasCounter(this.component._hasCounter),this.validateMaxLengthBehavior(this.component._maxLengthBehavior),this.validateMaxLength(this.component._maxLength),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateResize(this.component._resize),this.validateRows(this.component._rows),this.validateSpellCheck(this.component._spellCheck),this.validateValue(this.component._value)}}const G=`@charset "UTF-8";
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
  .kol-textarea {
    width: 100%;
  }
  .kol-textarea:focus {
    outline: none;
  }
}`,l=e=>{e.style.overflow="hidden";const t=e.rows,n=e.clientHeight/t;e.rows=1;const o=Math.round(e.scrollHeight/n);return e.rows=t,o},J=class{async getValue(){var e;return(e=this.textareaRef)===null||e===void 0?void 0:e.value}async focus(){return A(this.host,()=>M(this.textareaRef))}async click(){return B(this.host,async()=>H(this.textareaRef))}getFormFieldProps(){return{state:this.state,class:c("kol-form-field-textarea",{"kol-form-field--has-value":this.state._hasValue,"kol-form-field--has-counter":this.controller.hasSoftCharacterLimit()||this.controller.hasCounter()}),tooltipAlign:this._tooltipAlign,alert:this.showAsAlert()}}getTextAreaProps(){const e=typeof this.state._maxLength=="number"?[`${this.state._id}-character-limit-hint`]:void 0;return Object.assign(Object.assign({ref:this.setTextareaRef,state:this.state,style:{resize:this.state._resize},ariaDescribedBy:e},this.controller.onFacade),{onInput:this.onInput,onFocus:t=>{this.controller.onFacade.onFocus(t),this.inputHasFocus=!0},onBlur:t=>{this.controller.onFacade.onBlur(t),this.inputHasFocus=!1}})}render(){return i(x,Object.assign({key:"c5d6274603a8eb8f181a1fa740c922aa6979ff45"},this.getFormFieldProps()),i(C,{key:"427fec5fde0c9a6757da521ad6ab1fe4c408d2b9",state:this.state},i($,Object.assign({key:"96be1d2f6d44bbece662a5c79aeaa03ece0c5232"},this.getTextAreaProps()))))}constructor(e){g(this,e),this.setTextareaRef=t=>{this.textareaRef=t},this._adjustHeight=!1,this._disabled=!1,this._hideMsg=!1,this._hideLabel=!1,this._hint="",this._hasCounter=!1,this._maxLengthBehavior="hard",this._readOnly=!1,this._resize="vertical",this._required=!1,this._tooltipAlign="top",this._touched=!1,this.state={_adjustHeight:!1,_currentLength:0,_currentLengthDebounced:0,_hasValue:!1,_hideMsg:!1,_id:`id-${T()}`,_label:"",_resize:"vertical"},this.inputHasFocus=!1,this.onInput=t=>{this.textareaRef instanceof HTMLTextAreaElement&&(this._value=this.textareaRef.value,this.state._adjustHeight&&(this._rows=l(this.textareaRef)),this.controller.onFacade.onInput(t))},this.controller=new U(this,"textarea",this.host)}showAsAlert(){return!!this.state._touched&&!this.inputHasFocus}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAdjustHeight(e){this.controller.validateAdjustHeight(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateHideMsg(e){this.controller.validateHideMsg(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHasCounter(e){this.controller.validateHasCounter(e)}validateHint(e){this.controller.validateHint(e)}validateIcons(e){this.controller.validateIcons(e)}validateLabel(e){this.controller.validateLabel(e)}validateMaxLength(e){this.controller.validateMaxLength(e)}validateMaxLengthBehavior(e){this.controller.validateMaxLengthBehavior(e)}validateMsg(e){this.controller.validateMsg(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validatePlaceholder(e){this.controller.validatePlaceholder(e)}validateReadOnly(e){this.controller.validateReadOnly(e)}validateResize(e){this.controller.validateResize(e)}validateRequired(e){this.controller.validateRequired(e)}validateRows(e){this.controller.validateRows(e)}validateShortKey(e){this.controller.validateShortKey(e)}validateSpellCheck(e){this.controller.validateSpellCheck(e)}validateSyncValueBySelector(e){this.controller.validateSyncValueBySelector(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e)}componentDidLoad(){setTimeout(()=>{var e;this._adjustHeight===!0&&this.textareaRef?this._rows=!((e=this.state)===null||e===void 0)&&e._rows&&this.state._rows>l(this.textareaRef)?this.state._rows:l(this.textareaRef):this._rows||(this._rows=1)})}componentWillLoad(){this._touched=this._touched===!0,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener(e=>this.state._hasValue=!!e)}get host(){return k(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_adjustHeight:["validateAdjustHeight"],_disabled:["validateDisabled"],_hideMsg:["validateHideMsg"],_hideLabel:["validateHideLabel"],_hasCounter:["validateHasCounter"],_hint:["validateHint"],_icons:["validateIcons"],_label:["validateLabel"],_maxLength:["validateMaxLength"],_maxLengthBehavior:["validateMaxLengthBehavior"],_msg:["validateMsg"],_name:["validateName"],_on:["validateOn"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_resize:["validateResize"],_required:["validateRequired"],_rows:["validateRows"],_shortKey:["validateShortKey"],_spellCheck:["validateSpellCheck"],_syncValueBySelector:["validateSyncValueBySelector"],_touched:["validateTouched"],_value:["validateValue"]}}};J.style={default:G};export{J as kol_textarea};
