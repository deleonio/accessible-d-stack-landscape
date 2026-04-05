import{h as a,r as b,g,w as c,n as r,s as v,l as h}from"./index-BEjAYNDX.js";import{c as l}from"./clsx-COFh-Vc8-XoI9wUSr.js";import{n as _}from"./dev.utils-BL9Lx_uf-6rhlrkEo.js";import{d as y,s as x}from"./element-click-BTxuJDNT-C3VwA7Ox.js";import{d as w,s as z}from"./element-focus-BKUtVrWY-DLAyuMzs.js";import{I as C}from"./controller-BKRP0tqb-CYAqOksZ.js";import{_ as s}from"./tslib.es6-CxX45GIN-CNLfoBeZ.js";import{I as A}from"./component-D3oJtEcp-BJIMeOU8.js";import{F as I,g as F,a as V,i as S}from"./FormFieldStateWrapper-DsX6gk6N-BVQWi8Ph.js";import{I as L}from"./Input-vt6KaJWU-CsHJn2oS.js";import{F as T}from"./FieldControlStateWrapper-DshiHE0s-CbvF4Ndi.js";import{p as j}from"./controller-eUfCqvxN-Dof9uvXv.js";import"./_Uint8Array-kJHDjtoP-Dy4Yhf8F.js";import"./isArray-CcrBs4JM-Cx3brLAR.js";import"./variant-quote-CHD0qMkY-CyMcg2Xd.js";import"./normalizers-DnkJhVYZ-DuPOAPJ6.js";import"./component-DpGGeM3i-DztO88BD.js";import"./i18n-BVaUp6qp-BYvxXtk0.js";import"./Alert-Ccw-DwxA-BJMTypfw.js";import"./label-vxVEH2gH-wFS-fMR7.js";import"./required-C9Xj8kw2-DYSLwSD-.js";import"./orientation-D3LRVMo1-C80DpU2Z.js";import"./access-and-short-key-D2TiPdWw-tTFHAx9X.js";import"./disabled-BBn2JEzf-lAmLnAcU.js";import"./hide-label-DQL9J6E_-CzQK_WGH.js";import"./tooltip-align-DnbCY1Uu-Bw2es51W.js";import"./align-D3Z54kEL-eg8iOCD5.js";import"./associated.controller-BKQIR17--DZ491PFt.js";import"./component-CAXga0_U-CRd4biqE.js";import"./controller-BhIDd4zH-DQRpApzW.js";import"./align-floating-elements-58sFZOrL-DvlHuUZw.js";import"./tooltip-open-tracking-D3tCiiGP-CCqYyoJn.js";import"./label-BEOW9ltS-C0Di623R.js";import"./base-controller-CXhqh4cR-BR_IVuhr.js";import"./Heading-D3N3WLAQ-CiHgTCOw.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const K=(n,e)=>{h(n,"_checked",e)},q=(n,e)=>{h(n,"_indeterminate",e)},d=["left","right"],B=(n,e)=>{c(n,"_labelAlign",i=>typeof i=="string"&&d.includes(i),new Set([`KoliBriLabelAlign {${d.join(", ")}`]),e)},u=["button","default","switch"],O=n=>typeof n=="string"&&u.includes(n),P=(n,e)=>{c(n,"_variant",O,new Set(u),e)};class M extends C{constructor(e,i,o){super(e,i,o),this.setFormAssociatedCheckboxValue=t=>{this.component._checked?this.setFormAssociatedValue(t):this.setFormAssociatedValue(null)},this.component=e}validateChecked(e){K(this.component,e),this.setFormAssociatedCheckboxValue(this.component.state._value)}validateIcons(e){c(this.component,"_icons",i=>{const o=i;return typeof o=="object"&&o!==null&&(r(o.checked,1)||r(o.indeterminate,1)||r(o.unchecked,1))},new Set(["InputCheckboxIcons"]),e,{hooks:{beforePatch:(i,o,t)=>{o.set("_icons",Object.assign(Object.assign({},t.state._icons),i))}}})}validateIndeterminate(e){q(this.component,e)}validateLabelAlign(e){B(this.component,e)}validateValue(e){v(this.component,"_value",e),this.setFormAssociatedCheckboxValue(this.component.state._value)}validateVariant(e){P(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateChecked(this.component._checked),this.validateIcons(this.component._icons),this.validateIndeterminate(this.component._indeterminate),this.validateValue(this.component._value),this.validateVariant(this.component._variant),this.validateLabelAlign(this.component._labelAlign)}}const H=n=>{var{class:e,variant:i="default",icon:o,inputProps:t}=n,m=s(n,["class","variant","icon","inputProps"]);const{class:f}=t,p=s(t,["class"]),k={[`kol-checkbox--variant-${i}`]:!0,"kol-checkbox--checked":t==null?void 0:t.checked,"kol-checkbox--indeterminate":t==null?void 0:t.indeterminate,"kol-checkbox--disabled":!!(t!=null&&t.disabled),"kol-checkbox--required":!!(t!=null&&t.required),"kol-checkbox--touched":!!(t!=null&&t.touched),[`kol-checkbox--${V(t==null?void 0:t.msg)}`]:!!S(t==null?void 0:t.msg,t==null?void 0:t.touched)};return a("label",Object.assign({class:l("kol-checkbox",k,e)},m),a(A,{label:"",icons:o,class:l("kol-checkbox__icon")}),a(L,Object.assign({class:l("kol-checkbox__input",f)},p,{type:"checkbox"})))};function D(n,e={}){const{ariaDescribedBy:i}=F(n),o={id:n._id,hideLabel:n._hideLabel,label:n._label,value:n._value,accessKey:n._accessKey,disabled:n._disabled,name:n._name,ariaDescribedBy:i};return"_required"in n&&(o.required=n._required),"_checked"in n&&(o.checked=n._checked),"_indeterminate"in n&&(o.indeterminate=n._indeterminate),"_touched"in n&&(o.touched=n._touched),"_msg"in n&&(o.msg=n._msg),"_shortKey"in n&&(o["aria-keyshortcuts"]=n._shortKey),Object.assign(Object.assign({},o),e)}const R=n=>{var{state:e,inputProps:i}=n,o=s(n,["state","inputProps"]);const t=(e==null?void 0:e._variant)||"default";return a(H,Object.assign({variant:t,inputProps:D(e,i)},o))},W=`/*
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
  :host {
    display: block;
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
  .kol-icon {
    color: inherit;
    display: inline-block;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  .kol-form-field {
    display: grid;
  }
  .kol-form-field__label-text {
    display: ruby;
  }
  .kol-checkbox {
    display: flex;
    position: relative;
    align-items: center;
    cursor: pointer;
  }
  .kol-checkbox--disabled {
    cursor: not-allowed;
  }
  .kol-checkbox .kol-input {
    background-color: #fff;
    border-style: solid;
    margin: 0;
    border-width: 2px;
    appearance: none;
    cursor: inherit;
  }
  .kol-checkbox .kol-input:before {
    content: "";
  }
  /**
   * Variant: Checkbox
   */
  .kol-checkbox--variant-default {
    position: relative;
    min-width: var(--a11y-min-size);
    min-height: var(--a11y-min-size);
    justify-content: center;
  }
  .kol-checkbox--variant-default .kol-icon {
    display: none;
    position: absolute;
    inset: auto;
    z-index: 1;
    pointer-events: none;
  }
  .kol-checkbox--variant-default .kol-input {
    width: calc(22 * 1rem / var(--kolibri-root-font-size, 16));
    height: calc(22 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-checkbox--variant-default.kol-checkbox--checked .kol-icon, .kol-checkbox--variant-default.kol-checkbox--indeterminate .kol-icon {
    display: block;
  }
  /**
   * Variant: Switch
   */
  .kol-checkbox--variant-switch {
    position: relative;
  }
  .kol-checkbox--variant-switch .kol-input {
    display: inline-block;
    position: relative;
    width: 3.2em;
    min-width: 3.2em;
    height: 1.7em;
  }
  .kol-checkbox--variant-switch .kol-input::before {
    background-color: #000;
    position: absolute;
    top: calc(0.25em - 2 * 1rem / var(--kolibri-root-font-size, 16));
    left: calc(0.25em - 2 * 1rem / var(--kolibri-root-font-size, 16));
    width: 1.2em;
    height: 1.2em;
    transition: 0.5s;
  }
  .kol-checkbox--variant-switch .kol-input:checked::before {
    transform: translateX(1.5em);
  }
  .kol-checkbox--variant-switch .kol-input:indeterminate::before {
    transform: translateX(0.75em);
  }
  .kol-checkbox--variant-switch .kol-icon {
    transform: translate(0, -50%);
    color: #000;
    display: flex;
    position: absolute;
    top: 50%;
    left: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    z-index: 1;
    width: 1.2em;
    height: 1.2em;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
  }
  .kol-checkbox--variant-switch.kol-checkbox--checked .kol-icon {
    transform: translate(1.5em, -50%);
  }
  .kol-checkbox--variant-switch.kol-checkbox--indeterminate .kol-icon {
    transform: translate(0.75em, -50%);
  }
  /**
   * Variant: Button
   */
  .kol-checkbox--variant-button {
    min-width: var(--a11y-min-size);
  }
  .kol-checkbox--variant-button .kol-icon {
    display: flex;
    min-width: var(--a11y-min-size);
    min-height: var(--a11y-min-size);
    align-items: center;
    justify-content: center;
  }
}`,N=class{getModelValue(){return this._checked?this.state._value:null}async getValue(){return this.getModelValue()}async focus(){return w(this.host,()=>z(this.inputRef))}async click(){return y(this.host,async()=>x(this.inputRef))}getFormFieldProps(){return{state:this.state,class:l("kol-input-checkbox",{"kol-input-checkbox--checked":this.state._checked,"kol-input-checkbox--indeterminate":this.state._indeterminate,[`kol-input-checkbox--variant-${this.state._variant||"default"}`]:!0,[`kol-input-checkbox--label-align-${this.state._labelAlign||"right"}`]:!0}),tooltipAlign:this._tooltipAlign,alert:this.showAsAlert(),renderNoTooltip:!0}}getFieldControlProps(){return{class:l("kol-input-checkbox__field-control",{"kol-input-checkbox__field-control--checked":this.state._checked,"kol-input-checkbox__field-control--indeterminate":this.state._indeterminate,[`kol-input-checkbox__field-control--variant-${this.state._variant||"default"}`]:!0}),state:this.state}}getInputProps(){return{state:this.state,icon:this.getIcon(),inputProps:Object.assign(Object.assign({class:l({"visually-hidden":this.state._variant==="button"}),ref:this.setInputRef},this.controller.onFacade),{onInput:this.onInput,onChange:this.onChange,onKeyDown:this.onKeyDown,onFocus:n=>{this.controller.onFacade.onFocus(n),this.inputHasFocus=!0},onBlur:n=>{this._disabled||(this.controller.onFacade.onBlur(n),this.inputHasFocus=!1)},onClick:void 0})}}getIcon(){return this.state._indeterminate?this.state._icons.indeterminate:this.state._checked?this.state._icons.checked:this.state._icons.unchecked}render(){return a(I,Object.assign({key:"a6a55de6c2d0a6f126c28a5750923cc49aac88a3"},this.getFormFieldProps(),{renderNoLabel:!0}),a(T,Object.assign({key:"fefbfd04a98b24d0efea18a2694b319b9ea56255"},this.getFieldControlProps(),{renderNoHint:!0}),a(R,Object.assign({key:"b4df9dafb2532fb3b2afda57955a31311eaabf62"},this.getInputProps()))))}constructor(n){b(this,n),this.setInputRef=e=>{this.inputRef=e},this._checked=!1,this._hideMsg=!1,this._disabled=!1,this._hideLabel=!1,this._hint="",this._labelAlign="right",this._required=!1,this._tooltipAlign="top",this._touched=!1,this._value=!0,this._variant="default",this.state={_checked:!1,_hideMsg:!1,_icons:{checked:"kolicon-check",indeterminate:"kolicon-minus",unchecked:"kolicon-cross"},_id:`id-${_()}`,_indeterminate:!1,_label:"",_value:!0,_variant:"default",_labelAlign:"right"},this.inputHasFocus=!1,this.onInput=e=>{this._checked=!this._checked,this._indeterminate=!1;const i=this.getModelValue();this.controller.onFacade.onInput(e,!1,i),this.controller.setFormAssociatedCheckboxValue(i)},this.onChange=e=>{this.controller.onFacade.onChange(e,this.getModelValue())},this.onKeyDown=e=>{this.controller.onFacade.onKeyDown(e),e.code!=="Enter"&&e.code!=="NumpadEnter"||j({form:this.host})},this.controller=new M(this,"checkbox",this.host)}showAsAlert(){return!!this.state._touched&&!this.inputHasFocus}validateAccessKey(n){this.controller.validateAccessKey(n)}validateChecked(n){this.controller.validateChecked(n)}validateDisabled(n){this.controller.validateDisabled(n)}validateHideMsg(n){this.controller.validateHideMsg(n)}validateHideLabel(n){this.controller.validateHideLabel(n)}validateHint(n){this.controller.validateHint(n)}validateIcons(n){this.controller.validateIcons(n)}validateIndeterminate(n){this.controller.validateIndeterminate(n)}validateLabel(n){this.controller.validateLabel(n)}validateLabelAlign(n){this.controller.validateLabelAlign(n)}validateMsg(n){this.controller.validateMsg(n)}validateName(n){this.controller.validateName(n)}validateOn(n){this.controller.validateOn(n)}validateRequired(n){this.controller.validateRequired(n)}validateShortKey(n){this.controller.validateShortKey(n)}validateSyncValueBySelector(n){this.controller.validateSyncValueBySelector(n)}validateTouched(n){this.controller.validateTouched(n)}validateValue(n){this.controller.validateValue(n)}validateVariant(n){this.controller.validateVariant(n)}componentWillLoad(){this._touched=this._touched===!0,this.controller.componentWillLoad()}get host(){return g(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_checked:["validateChecked"],_disabled:["validateDisabled"],_hideMsg:["validateHideMsg"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_indeterminate:["validateIndeterminate"],_label:["validateLabel"],_labelAlign:["validateLabelAlign"],_msg:["validateMsg"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_shortKey:["validateShortKey"],_syncValueBySelector:["validateSyncValueBySelector"],_touched:["validateTouched"],_value:["validateValue"],_variant:["validateVariant"]}}};N.style={default:W};export{N as kol_input_checkbox};
