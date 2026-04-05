import{h as c,r as v,q as g,g as y,w as u,s as b}from"./index-D2HA3l2I.js";import{c as k}from"./clsx-COFh-Vc8-XoI9wUSr.js";import{F as _}from"./FormFieldStateWrapper-DsX6gk6N-BwBMBLG2.js";import{I as w,a as x}from"./controller-icon-CYmINtAB-CUQ9RhBp.js";import{I as S}from"./InputStateWrapper-xUqVwJbq-Dc39o7im.js";import{n as T}from"./dev.utils-BL9Lx_uf-Gyvsp91l.js";import{d as D,s as R}from"./element-click-BTxuJDNT-C3VwA7Ox.js";import{d as V,s as z}from"./element-focus-BKUtVrWY-DLAyuMzs.js";import{p as F}from"./controller-eUfCqvxN-C3aJ8CWf.js";import{v as A}from"./auto-complete-DmusaKxg-DEu7-HTa.js";import{v as O}from"./read-only-DnkXqxgk-C0pDbhQo.js";import{v as M}from"./required-C9Xj8kw2-Xt5PrCjW.js";import{v as I}from"./suggestions-D5cst2OI-BaSsgs4v.js";import"./_Uint8Array-kJHDjtoP-Dy4Yhf8F.js";import"./isArray-CcrBs4JM-Cx3brLAR.js";import"./tslib.es6-CxX45GIN-CNLfoBeZ.js";import"./variant-quote-CHD0qMkY-BNzDdLYt.js";import"./normalizers-DnkJhVYZ-DXVhldNo.js";import"./component-DpGGeM3i-BiIO8rWY.js";import"./component-D3oJtEcp-C099JPRM.js";import"./i18n-BVaUp6qp-AH3SScv1.js";import"./Alert-Ccw-DwxA-B9kAm3Ck.js";import"./access-and-short-key-D2TiPdWw-6vR8K1E1.js";import"./disabled-BBn2JEzf-GxcNozUW.js";import"./hide-label-DQL9J6E_-CsWmLKn4.js";import"./label-vxVEH2gH-DqBIwy4C.js";import"./tooltip-align-DnbCY1Uu-DNN5JFCj.js";import"./align-D3Z54kEL-Bt6iRgbN.js";import"./associated.controller-BKQIR17--CiyPnUXk.js";import"./component-CAXga0_U-Bed7ZYWn.js";import"./controller-BhIDd4zH-CdxbTA2f.js";import"./align-floating-elements-58sFZOrL-Rs-7YaoD.js";import"./tooltip-open-tracking-D3tCiiGP-CCqYyoJn.js";import"./label-BEOW9ltS-B9z6yYZU.js";import"./base-controller-CXhqh4cR-BR_IVuhr.js";import"./icons-CqQ9plmY-D6mDb3cQ.js";import"./Input-vt6KaJWU-B4AkQFiT.js";import"./Heading-D3N3WLAQ-DoQoLF0M.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const m=["date","datetime-local","month","time","week"],C=e=>typeof e=="string"&&m.includes(e),L=(e,t)=>{u(e,"_type",C,new Set(m),t)};class i extends x{constructor(t,n,o){super(t,n,o),this.validateIso8601=(l,s,r)=>u(this.component,l,a=>a==null||a===""||this.validateDateString(a),new Set(["Date","string{ISO-8601}"]),i.tryParseToString(s,this.component._type,this.component._step),{hooks:{afterPatch:a=>{typeof a=="string"&&r&&r(a)}}}),this.component=t}validateAutoComplete(t){A(this.component,t)}validateSuggestions(t){I(this.component,t)}static tryParseToString(t,n,o){if(typeof t=="string"||t===null)return t;if(typeof t=="object"&&t instanceof Date){const l=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),a=String(t.getHours()).padStart(2,"0"),d=String(t.getMinutes()).padStart(2,"0"),f=String(t.getSeconds()).padStart(2,"0"),h=[l,s,r].join("-"),p=[a,d,f].join(":");switch(n){case"date":return h;case"datetime-local":return`${h}T${p}`;case"month":return`${l}-${s}`;case"time":return o===void 0||String(o)==="60"?`${a}:${d}`:p;case"week":return`${l}-W${this.getWeekNumberOfDate(t)}`}}}static getWeekNumberOfDate(t){const n=new Date(t),o=(n.getDay()+6)%7;n.setDate(n.getDate()-o+3);const l=n.valueOf();return n.setMonth(0,1),n.getDay()!==4&&n.setMonth(0,1+(4-n.getDay()+7)%7),(1+Math.ceil((l-n.valueOf())/6048e5)).toString().padStart(2,"0")}validateDateString(t){switch(this.component._type){case"date":return i.isoDateRegex.test(t);case"datetime-local":return i.isoLocalDateTimeRegex.test(t);case"month":return i.isoMonthRegex.test(t);case"time":return i.isoTimeRegex.test(t);case"week":return i.isoWeekRegex.test(t);default:return!1}}onBlur(t){super.onBlur(t),!!t.target.value!=!!this.component._value&&(this.component._value=t.target.value)}validateMax(t){const n=t!=null||this.component._type!=="date"&&this.component._type!=="month"&&this.component._type!=="datetime-local"?t:i.DEFAULT_MAX_DATE;this.validateIso8601("_max",n)}validateMin(t){this.validateIso8601("_min",t)}validateOn(t){b(this.component,"_on",Object.assign(Object.assign({},t),{onChange:(n,o)=>{!!o!=!!this.component._value&&(this.component._value=o),t!=null&&t.onChange&&t.onChange(n,o)}}))}validateReadOnly(t){O(this.component,t)}validateRequired(t){M(this.component,t)}validateStep(t){this.validateNumber("_step",t)}validateType(t){L(this.component,t)}validateValue(t){this.validateValueEx(t)}validateValueEx(t,n){this.validateIso8601("_value",t,n),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMax(this.component._max),this.validateMin(this.component._min),this.validateLabel(this.component._label),this.validateSuggestions(this.component._suggestions),this.validateOn(this.component._on),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateStep(this.component._step),this.validateType(this.component._type),this.validateValue(this.component._value)}}i.isoDateRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])/,i.isoLocalDateTimeRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])[T ][0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,i.isoMonthRegex=/^\d{4}-([0]\d|1[0-2])/,i.isoTimeRegex=/^[0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,i.isoWeekRegex=/^\d{4}-W(?:[0-4]\d|5[0-3])$/,i.DEFAULT_MAX_DATE=new Date(9999,11,31,23,59,59);const B=`@charset "UTF-8";
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
  /**
   * Workaround for detecting focus state of the native date input's calendar icon.
   * The \`:focus-visible\` pseudo class does not work on the icon itself, but only on the input element.
   * By using the \`content\` property we can detect whether the icon is focused by inspecting the computed style in JS.
   * This should be replaced once native focus detection for the icon is available.
   */
  :host input[type=date],
  :host input[type=datetime-local],
  :host input[type=month],
  :host input[type=time],
  :host input[type=week] {
    content: "native-icon-focused";
  }
  :host input[type=date]:focus-visible,
  :host input[type=datetime-local]:focus-visible,
  :host input[type=month]:focus-visible,
  :host input[type=time]:focus-visible,
  :host input[type=week]:focus-visible {
    content: "native-icon-not-focused";
  }
  .kol-input {
    cursor: text;
  }
  .kol-input::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
}`,q=class{async getValue(){var e;return this.inputRef&&this.remapValue((e=this.inputRef)===null||e===void 0?void 0:e.value)}async focus(){return V(this.host,()=>z(this.inputRef))}async click(){return D(this.host,async()=>R(this.inputRef))}async reset(){this.state=Object.assign(Object.assign({},this.state),{_value:null}),this.controller.setFormAssociatedValue(""),this.inputRef&&(this.inputRef.value="")}setInitialValueType(e){e instanceof Date?this._initialValueType="Date":this._initialValueType=typeof e=="string"?"String":null}remapValue(e){return e===""?null:this._initialValueType==="Date"?new Date(e):e}getFormFieldProps(){return{state:this.state,class:k("kol-input-date",this.state._type,{"has-value":this.state._hasValue}),tooltipAlign:this._tooltipAlign,alert:this.showAsAlert()}}getInputProps(){return Object.assign(Object.assign({ref:this.setInputRef,state:this.state},this.controller.onFacade),{onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeyDown,onChange:this.onChange,onInput:this.onInput})}render(){return c(_,Object.assign({key:"c93d61c15de616dbe1be3f623c35b08928632235"},this.getFormFieldProps()),c(w,{key:"ae774e61228eace97ad5c9714fa46b346cd0e9e2",state:this.state},c(S,Object.assign({key:"fc1b1944f2625390f11dbdfd68a89454fb68bf31"},this.getInputProps()))))}constructor(e){v(this,e),this._initialValueType=null,this.setInputRef=t=>{this.inputRef=t},this.onBlur=t=>{this.controller.onFacade.onBlur(t),this.inputHasFocus=!1},this.onFocus=t=>{this.controller.onFacade.onFocus(t),this.inputHasFocus=!0},this.onChange=t=>{const n=t.target.value,o=this.remapValue(n);this.controller.onFacade.onChange(t,o)},this.onInput=t=>{const n=t.target.value,o=this.remapValue(n);this._value=o,this.controller.onFacade.onInput(t,!0,o)},this.isNativeCalendarIconFocused=()=>!this.inputRef||typeof window>"u"||typeof window.getComputedStyle!="function"?!1:window.getComputedStyle(this.inputRef).content.includes("native-icon-focused"),this.onKeyDown=t=>{this.controller.onFacade.onKeyDown(t),t.code!=="Enter"&&t.code!=="NumpadEnter"||this.isNativeCalendarIconFocused()||F({form:this.host}),this.state._readOnly&&t.code==="Space"&&t.preventDefault()},this._autoComplete="off",this._disabled=!1,this._hideMsg=!1,this._hideLabel=!1,this._hint="",this._readOnly=!1,this._required=!1,this._tooltipAlign="top",this._touched=!1,this._type="date",this.state={_hasValue:!1,_hideMsg:!1,_id:`id-${T()}`,_label:"",_suggestions:[],_type:"datetime-local"},this.inputHasFocus=!1,this.controller=new i(this,"date",this.host)}showAsAlert(){return!!this.state._touched&&!this.inputHasFocus}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAutoComplete(e){this.controller.validateAutoComplete(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateHideMsg(e){this.controller.validateHideMsg(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateIcons(e){this.controller.validateIcons(e)}validateLabel(e){this.controller.validateLabel(e)}validateMax(e){this.controller.validateMax(e)}validateMin(e){this.controller.validateMin(e)}validateMsg(e){this.controller.validateMsg(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validateReadOnly(e){this.controller.validateReadOnly(e)}validateRequired(e){this.controller.validateRequired(e)}validateShortKey(e){this.controller.validateShortKey(e)}validateSmartButton(e){this.controller.validateSmartButton(e)}validateSuggestions(e){this.controller.validateSuggestions(e)}validateStep(e){this.controller.validateStep(e)}validateSyncValueBySelector(e){this.controller.validateSyncValueBySelector(e)}validateTouched(e){this.controller.validateTouched(e)}validateType(e){this.controller.validateType(e)}validateValue(e){e instanceof Date&&g("Date type will be removed in v3. Use `Iso8601` instead."),this.controller.validateValueEx(e),e!=null&&this.setInitialValueType(e)}componentWillLoad(){this._value!==void 0&&this.setInitialValueType(this._value),this._touched=this._touched===!0,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener(e=>this.state._hasValue=!!e)}get host(){return y(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_hideMsg:["validateHideMsg"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_label:["validateLabel"],_max:["validateMax"],_min:["validateMin"],_msg:["validateMsg"],_name:["validateName"],_on:["validateOn"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_shortKey:["validateShortKey"],_smartButton:["validateSmartButton"],_suggestions:["validateSuggestions"],_step:["validateStep"],_syncValueBySelector:["validateSyncValueBySelector"],_touched:["validateTouched"],_type:["validateType"],_value:["validateValue"]}}};q.style={default:B};export{q as kol_input_date};
