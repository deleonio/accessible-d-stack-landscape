import{h as a,c as d,r as h,g as u,w as p,l as f,Z as m}from"./index-Bp2HTB7q.js";import{g,F as b}from"./FormFieldStateWrapper-DsX6gk6N-ErAO9mLx.js";import{I as v,a as _}from"./controller-icon-CYmINtAB-BQentRvR.js";import{I as k}from"./InputStateWrapper-xUqVwJbq-B8ltVxqW.js";import{C as y,a as w}from"./CustomSuggestionsOptionsGroup-Ct0Hm2uK-DDxd2Mok.js";import{t as c}from"./i18n-BVaUp6qp-B22iMgjv.js";import{I as O}from"./component-D3oJtEcp-DO1C1_su.js";import{c as x}from"./clsx-COFh-Vc8-XoI9wUSr.js";import{n as I}from"./dev.utils-BL9Lx_uf-BSaNqjRt.js";import{d as S,s as z}from"./element-focus-BKUtVrWY-DLAyuMzs.js";import{f as C,b as F}from"./controller-BKRP0tqb-BMKdJWXj.js";import{v as V}from"./placeholder-BuBUMNhW-DReRvSJ7.js";import{v as A}from"./required-C9Xj8kw2-DgQ_5Tf8.js";import"./_Uint8Array-kJHDjtoP-Dy4Yhf8F.js";import"./isArray-CcrBs4JM-Cx3brLAR.js";import"./tslib.es6-CxX45GIN-CNLfoBeZ.js";import"./variant-quote-CHD0qMkY-XAL8cVNh.js";import"./normalizers-DnkJhVYZ-BPRdy9xw.js";import"./component-DpGGeM3i-CCK5XWte.js";import"./Alert-Ccw-DwxA-Cw1uYiCJ.js";import"./access-and-short-key-D2TiPdWw-BivlvsLj.js";import"./disabled-BBn2JEzf-BV1wEb73.js";import"./hide-label-DQL9J6E_-_xcKv34J.js";import"./label-vxVEH2gH-DoBceXFF.js";import"./tooltip-align-DnbCY1Uu-BvMSRadP.js";import"./align-D3Z54kEL-BPd-Ug7i.js";import"./associated.controller-BKQIR17--DmQRnwoN.js";import"./component-CAXga0_U-7VZn-7hR.js";import"./controller-BhIDd4zH-DqiJeB66.js";import"./align-floating-elements-58sFZOrL-CmKmVHKU.js";import"./tooltip-open-tracking-D3tCiiGP-CCqYyoJn.js";import"./label-BEOW9ltS-CG0azRTZ.js";import"./base-controller-CXhqh4cR-BR_IVuhr.js";import"./icons-CqQ9plmY-ZhTQl6Da.js";import"./Input-vt6KaJWU-1PzGEnWH.js";import"./orientation-D3LRVMo1-C4ED5aM3.js";import"./Heading-D3N3WLAQ-BZpg39gT.js";/*!
 * KoliBri - The accessible HTML-Standard
 */class B extends _{constructor(t,n,o){super(t,n,o),this.keyOptionMap=new Map,this.afterPatchOptions=(i,s,l,r)=>{r==="_value"&&this.setFormAssociatedValue(i)},this.beforePatchOptions=(i,s)=>{const l=s.has("_options")?s.get("_options"):this.component.state._options;Array.isArray(l)&&l.length>0&&(this.keyOptionMap.clear(),C(this.keyOptionMap,l))},this.component=t}validateOptions(t){F(this.component,t,{hooks:{afterPatch:this.afterPatchOptions,beforePatch:this.beforePatchOptions}})}validateRequired(t){A(this.component,t)}validateValue(t){p(this.component,"_value",n=>n!==void 0,new Set(["KoliBriUnknown"]),t)}validatePlaceholder(t){V(this.component,t)}validateHasClearButton(t){f(this.component,"_hasClearButton",t)}validateRows(t){m(this.component,"_rows",t)}componentWillLoad(){super.componentWillLoad(),this.validateOptions(this.component._options),this.validateRequired(this.component._required),this.validateValue(this.component._value),this.validatePlaceholder(this.component._placeholder),this.validateHasClearButton(this.component._hasClearButton),this.validateRows(this.component._rows)}}const M=`@charset "UTF-8";
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
  .kol-custom-suggestions-option {
    line-height: 1.5;
    white-space: normal;
    cursor: pointer;
    overflow-wrap: break-word;
  }
  .kol-custom-suggestions-options-group--cursor-hidden .kol-custom-suggestions-option {
    cursor: none !important;
  }
  .kol-custom-suggestions-option--disabled:focus, .kol-custom-suggestions-option--disabled:focus * {
    cursor: not-allowed;
  }
  .kol-custom-suggestions-options-group {
    background-color: white;
    display: block;
    position: absolute;
    z-index: 2;
    max-height: calc(250 * 1rem / var(--kolibri-root-font-size, 16));
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    list-style-type: none;
  }
  .kol-input-container:has(.kol-custom-suggestions-options-group--open) {
    z-index: 10;
  }
  .kol-custom-suggestions-toggle {
    display: flex;
    min-width: var(--a11y-min-size);
    min-height: var(--a11y-min-size);
    align-items: center;
    justify-content: center;
    cursor: default;
  }
  .kol-custom-suggestions-toggle.kol-custom-suggestions-toggle--disabled {
    cursor: not-allowed;
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
  .kol-single-select__delete .kol-icon {
    color: inherit;
    display: inline-block;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  .kol-single-select__delete :host {
    display: inline-block;
  }
  .kol-single-select__delete .kol-button {
    display: flex;
    min-height: var(--a11y-min-size);
    font-style: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
    text-decoration-line: none;
  }
  .kol-single-select__delete .kol-button::before {
    /* Render zero-width character as first element to set the baseline correctly. */
    content: "​";
  }
  .kol-single-select__delete .kol-button__text {
    flex: 1 0 100%;
  }
  .kol-single-select__no-results-message {
    display: flex;
    min-height: calc(50 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
    justify-content: center;
    cursor: default;
  }
  .kol-single-select .kol-custom-suggestions-options-group {
    max-height: calc(40 * 1rem / var(--kolibri-root-font-size, 16) * var(--visible-options, 5) + 2 * 1rem / var(--kolibri-root-font-size, 16)) !important;
  }
  .kol-custom-suggestions-toggle:not(.kol-custom-suggestions-toggle--disabled) {
    cursor: pointer;
  }
  .kol-custom-suggestions-toggle--disabled {
    opacity: 0.5;
  }
}`,T=class{async getValue(){return this._value}async focus(){return S(this.host,()=>z(this.refInput))}onBlur(e){var t,n,o;const i=(t=this.state._options)===null||t===void 0?void 0:t.find(s=>{var l,r;return((l=s.label)===null||l===void 0?void 0:l.toLowerCase())===((r=this._inputValue)===null||r===void 0?void 0:r.toLowerCase())});i?this.selectOption(i):!this._isOpen&&this._value&&(this._inputValue=(o=(n=this.state._options)===null||n===void 0?void 0:n.find(s=>s.value===this._value))===null||o===void 0?void 0:o.label,this._filteredOptions=[...this.state._options]),e instanceof FocusEvent&&e.view===window&&!this.isClearing&&(this._isOpen=!1)}createEventWithTarget(e,t){const n=new CustomEvent(e,{bubbles:!0,detail:t});return this.refInput&&(Object.defineProperty(n,"target",{value:this.refInput}),Object.defineProperty(n,"currentTarget",{value:this.refInput})),n}clearSelection(){if(this.isClearing=!0,this.state._disabled)return;const e=null;this._focusedOptionIndex=-1,this._value=e,this._inputValue="",this._filteredOptions=[...this.state._options];const t=this.createEventWithTarget("input",{name:this.state._name,value:e}),n=this.createEventWithTarget("change",{name:this.state._name,value:e});this.controller.onFacade.onInput(t,!0,{value:e}),this.controller.onFacade.onChange(n,{value:e}),this.isClearing=!1}selectOption(e){var t,n;if(e.value===this._value)return this._inputValue=e.label,void(this._filteredOptions=[...this.state._options]);this._value=e.value,this._inputValue=e.label;const o=this.createEventWithTarget("input",{name:(t=this.state._name)!==null&&t!==void 0?t:"",value:e.value}),i=this.createEventWithTarget("change",{name:(n=this.state._name)!==null&&n!==void 0?n:"",value:e.value});this.controller.onFacade.onInput(o,!1,e.value),this.controller.onFacade.onChange(i,e.value),this._filteredOptions=[...this.state._options],this.controller.setFormAssociatedValue(this._value)}onInput(e){const t=e.target;this._inputValue=t.value,this._isOpen=!0,this.setFilteredOptionsByQuery(t.value),this._focusedOptionIndex=-1}handleKeyDownDropdown(e){e.key.length===1&&/[a-z0-9]/i.test(e.key)&&(e.preventDefault(),this._isOpen=!0,this.focusSuggestionStartingWith(e.key))}setFilteredOptionsByQuery(e){(e==null?void 0:e.trim())===""?this._filteredOptions=[...this.state._options]:Array.isArray(this.state._options)&&this.state._options.length>0&&e.length>0&&(this._filteredOptions=this.state._options.filter(t=>{var n,o;return(o=(n=t.label)===null||n===void 0?void 0:n.toLowerCase())===null||o===void 0?void 0:o.includes(e==null?void 0:e.toLowerCase())}))}moveFocus(e){if(!this._filteredOptions)return;let t=this._focusedOptionIndex+e,n=0,o=!1;const i=this._filteredOptions.length;for(;n<i;){if(t>=this._filteredOptions.length&&(t=0),t<0&&(t=this._filteredOptions.length-1),!this._filteredOptions[t].disabled){o=!0;break}t+=e,n++}o&&(this._focusedOptionIndex=t,this.focusOption(this._focusedOptionIndex))}focusOption(e){if(this.refOptions){const t=this.refOptions[e];t==null||t.focus()}}selectFocusedOption(){return!!(Array.isArray(this._filteredOptions)&&this._filteredOptions.length>0&&this._focusedOptionIndex>=0)&&(this.selectOption(this._filteredOptions[this._focusedOptionIndex]),!0)}focusSuggestionStartingWith(e){const t=e.toLowerCase(),n=Array.isArray(this._filteredOptions)&&this._filteredOptions.findIndex(o=>o.label.toLowerCase().startsWith(t)&&!o.disabled);typeof n=="number"&&n>=0&&(this._focusedOptionIndex=n,this.focusOption(n))}getFormFieldProps(){return{state:this.state,class:"kol-single-select",tooltipAlign:this._tooltipAlign,alert:this.showAsAlert()}}getInputProps(){const{ariaDescribedBy:e}=g(this.state),t=this.state._disabled===!0;return Object.assign(Object.assign({"aria-activedescendant":this._isOpen&&this._focusedOptionIndex>=0?`option-${this._focusedOptionIndex}`:void 0,"aria-autocomplete":"both","aria-controls":"listbox","aria-describedby":e.length>0?e.join(" "):void 0,"aria-label":this.state._hideLabel&&typeof this.state._label=="string"?this.state._label:void 0,"aria-keyshortcuts":this.state._shortKey,accessKey:this.state._accessKey,autocapitalize:"off",autocorrect:"off",class:"kol-single-select__input",disabled:t,name:this.state._name,placeholder:this.state._placeholder,ref:this.setRefInput,required:this.state._required,role:"combobox",state:this.state,type:"text",value:this._inputValue},this.controller.onFacade),{onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onInput:this.onInput.bind(this),onFocus:n=>{this.controller.onFacade.onFocus(n),this.inputHasFocus=!0},onBlur:n=>{this.controller.onFacade.onBlur(n),this.inputHasFocus=!1}})}render(){var e;const t=this.state._disabled===!0;return a(b,Object.assign({key:"9fe3ffae0d2a5dd44dc846a67e70bef70e745b2b"},this.getFormFieldProps()),a(v,{key:"07dbffb6552a8d99f4f6df05e4614b0f16644cb8",state:this.state},a("div",{key:"3d9f4973be33bcd19adadcdfed713a75cf4f4a4b",class:"kol-single-select__group"},a(k,Object.assign({key:"6127bea092aaf4ae4dbc5d301b3632ac9e481a8c"},this.getInputProps())),this._inputValue&&this.state._hasClearButton&&a(d,{key:"88385455feb08b784b9a1e28cd1157e011643144",_icons:"kolicon-cross",_label:this.translateDeleteSelection,_hideLabel:!0,_variant:"ghost",_disabled:t,"data-testid":"single-select-delete",class:"kol-single-select__delete",hidden:t,_on:{onClick:()=>{var n;this.clearSelection(),(n=this.refInput)===null||n===void 0||n.focus()}}}),a(O,{key:"5e04ccaf242eaa961d5b95cfe5fcedfd456d913d",icons:"kolicon-chevron-down",label:"",class:x("kol-custom-suggestions-toggle",{"kol-custom-suggestions-toggle--disabled":t}),onClick:this.toggleListbox.bind(this)})),a(y,{key:"81f8cf140037ce64d590d23ecfbdc70f7b0db41b",blockSuggestionMouseOver:this.blockSuggestionMouseOver,onKeyDown:this.handleKeyDownDropdown.bind(this),style:{"--visible-options":`${(e=this._rows)!==null&&e!==void 0?e:5}`},hidden:!this._isOpen||t},Array.isArray(this._filteredOptions)&&this._filteredOptions.length>0?this._filteredOptions.map((n,o)=>a(w,{index:o,option:n.label,searchTerm:this._inputValue,ref:i=>{i&&(this.refOptions[o]=i)},selected:this._value===n.value,disabled:!!n.disabled,onClick:i=>{var s;n.disabled||(this.selectOption(n),(s=this.refInput)===null||s===void 0||s.focus(),this.toggleListbox(i),this._isOpen=!1)},onMouseOver:()=>{this.blockSuggestionMouseOver||(this._focusedOptionIndex=o,this.focusOption(o))},onFocus:()=>{n.disabled||(this._focusedOptionIndex=o,this.focusOption(o))},onKeyDown:i=>{var s;n.disabled||i.key!=="Enter"&&i.key!=="NumpadEnter"||(this.selectOption(n),(s=this.refInput)===null||s===void 0||s.focus(),this.toggleListbox(i),i.preventDefault())}})):a("li",{class:"kol-single-select__no-results-message",role:"alert"},this.translateNoResultsMessage," "))))}handleFocusOut(e){setTimeout(()=>{var t;!((t=this.host)===null||t===void 0)&&t.contains(document.activeElement)||this.onBlur(e)})}handleWindowBlur(e){this.onBlur(e)}handleKeyDown(e){var t,n;const o=(i,s)=>{var l;e.preventDefault(),i!==void 0&&(this._isOpen=i,i||(l=this.refInput)===null||l===void 0||l.focus()),s==null||s()};switch(e.key){case"Down":case"ArrowDown":this.blockSuggestionMouseOver=!0,o(!0,()=>this.moveFocus(1));break;case"Up":case"ArrowUp":this.blockSuggestionMouseOver=!0,o(!0,()=>this.moveFocus(-1));break;case"Tab":this._isOpen&&(this._isOpen=!this._isOpen,(t=this.refInput)===null||t===void 0||t.focus());break;case"Esc":case"Escape":this._isOpen=!1,o(!1);break;case" ":case"Enter":case"NumpadEnter":this._isOpen?this.selectFocusedOption()&&((n=this.refInput)===null||n===void 0||n.focus(),o(!1)):this.toggleListbox(e);break;case"Home":this.blockSuggestionMouseOver=!0,o(void 0,()=>{this._isOpen&&(this._focusedOptionIndex=0,this.focusOption(this._focusedOptionIndex))});break;case"End":this.blockSuggestionMouseOver=!0,o(void 0,()=>{this._isOpen&&(this._focusedOptionIndex=this._filteredOptions?this._filteredOptions.length-1:0,this.focusOption(this._focusedOptionIndex))});break;case"PageUp":this.blockSuggestionMouseOver=!0,o(void 0,()=>this._isOpen&&this.moveFocus(-10));break;case"PageDown":this.blockSuggestionMouseOver=!0,o(void 0,()=>this._isOpen&&this.moveFocus(10))}}constructor(e){h(this,e),this.refOptions=[],this.translateDeleteSelection=c("kol-delete-selection"),this.translateNoResultsMessage=c("kol-no-results-message"),this.isClearing=!1,this.setRefInput=t=>{this.refInput=t},this.toggleListbox=t=>{var n;if(t==null||t.preventDefault(),this.state._disabled!==!0)if((n=this.refInput)===null||n===void 0||n.focus(),this._isOpen)this._isOpen=!1;else{this._isOpen=!0;const o=Array.isArray(this._filteredOptions)?this._filteredOptions.findIndex(i=>i.label===this._inputValue):-1;this._focusedOptionIndex=o>=0?o:-1,this.focusOption(this._focusedOptionIndex)}},this._focusedOptionIndex=-1,this._isOpen=!1,this._filteredOptions=[],this._inputValue="",this.blockSuggestionMouseOver=!1,this._disabled=!1,this._hideMsg=!1,this._hideLabel=!1,this._hint="",this._required=!1,this._tooltipAlign="top",this._touched=!1,this._value=null,this._hasClearButton=!0,this.state={_hideMsg:!1,_id:`id-${I()}`,_label:"",_options:[],_hasClearButton:!0},this.inputHasFocus=!1,this.controller=new B(this,"single-select",this.host)}showAsAlert(){return!!this.state._touched&&!this.inputHasFocus}validatePlaceholder(e){this.controller.validatePlaceholder(e)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateHideMsg(e){this.controller.validateHideMsg(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateIcons(e){this.controller.validateIcons(e)}validateLabel(e){this.controller.validateLabel(e)}validateMsg(e){this.controller.validateMsg(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validateOptions(e){this.controller.validateOptions(e),this._filteredOptions=e,this.updateInputValue(this._value)}validateRequired(e){this.controller.validateRequired(e)}validateShortKey(e){this.controller.validateShortKey(e)}validateSyncValueBySelector(e){this.controller.validateSyncValueBySelector(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e),this.oldValue=e,this.updateInputValue(e)}validateHasClearButton(e){this.controller.validateHasClearButton(e)}validateRows(e){this.controller.validateRows(e)}handleMouseEvent(){this.blockSuggestionMouseOver=!1}updateInputValue(e){if(Array.isArray(this._options)){const t=this._options.find(n=>n.value===e);this._inputValue=t?String(t.label):""}}componentWillLoad(){this.refOptions=[],this._touched=this._touched===!0,this.controller.componentWillLoad(),this.oldValue=this._value,this._filteredOptions=this.state._options,this.updateInputValue(this._value)}onChange(e){var t,n;this.oldValue!==((t=this.refInput)===null||t===void 0?void 0:t.value)&&(this.oldValue=(n=this.refInput)===null||n===void 0?void 0:n.value),this._isOpen||this.controller.onFacade.onChange(e,this._value)}onClick(e){var t;this.toggleListbox(e),(t=this.refInput)===null||t===void 0||t.focus(),this.controller.onFacade.onClick(e)}get host(){return u(this)}static get watchers(){return{_placeholder:["validatePlaceholder"],_accessKey:["validateAccessKey"],_disabled:["validateDisabled"],_hideMsg:["validateHideMsg"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_label:["validateLabel"],_msg:["validateMsg"],_name:["validateName"],_on:["validateOn"],_options:["validateOptions"],_required:["validateRequired"],_shortKey:["validateShortKey"],_syncValueBySelector:["validateSyncValueBySelector"],_touched:["validateTouched"],_value:["validateValue"],_hasClearButton:["validateHasClearButton"],_rows:["validateRows"]}}};T.style={default:M};export{T as kol_single_select};
