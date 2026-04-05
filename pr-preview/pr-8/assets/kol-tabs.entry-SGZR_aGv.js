import{r as f,t as p,d,K as h,h as s,c as b,s as m,Z as g,T as k,U as v,a6 as y,g as _,w,l as x}from"./index-D2HA3l2I.js";import{v as T}from"./align-D3Z54kEL-Bt6iRgbN.js";import{v as C}from"./label-vxVEH2gH-DqBIwy4C.js";import{t as B}from"./i18n-BVaUp6qp-AH3SScv1.js";import{K as r}from"./keyboard-DNd73LVa-CDilyl_k.js";import{c as S}from"./clsx-COFh-Vc8-XoI9wUSr.js";import{d as A,s as P}from"./element-click-BTxuJDNT-C3VwA7Ox.js";import{d as z,s as I}from"./element-focus-BKUtVrWY-DLAyuMzs.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const u=["select-automatic","select-manual"],K=(e,t)=>{w(e,"_behavior",n=>typeof n=="string"&&u.includes(n),new Set([`KoliBriTabBehavior {${u.join(", ")}`]),t)},H=(e,t)=>{x(e,"_hasCreateButton",t)},E=`/* forward the rem function */
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
  .kol-icon {
    color: inherit;
    display: inline-block;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  .kol-tabs {
    display: var(--display);
    grid-template-columns: var(--grid-template-columns);
    grid-template-rows: var(--grid-template-rows);
  }
  .kol-tabs--align-right {
    --display: grid;
    --grid-template-columns: 1fr auto;
    --button-group-flex-direction: column;
    --button-group-order: 2;
  }
  .kol-tabs--align-left {
    --display: grid;
    --grid-template-columns: auto 1fr;
    --button-group-flex-direction: column;
    --button-group-order: 0;
  }
  .kol-tabs--align-bottom {
    --display: grid;
    --grid-template-rows: 1fr auto;
    --button-group-order: 2;
  }
  .kol-tabs__tabs-align-top {
    --display: grid;
    --grid-template-rows: auto 1fr;
    --button-group-order: 0;
  }
  .kol-tabs__button-group {
    display: flex;
    order: var(--button-group-order);
    flex-direction: var(--button-group-flex-direction);
    flex-wrap: wrap;
  }
  .kol-tabs__button-group .kol-button {
    border-bottom-color: transparent;
    display: block;
    border-bottom-style: solid;
  }
  .kol-tabs__panel {
    height: 100%;
  }
}`,N=class{constructor(e){f(this,e),this.onCreateLabel=`${B("kol-new")} …`,this.nextPossibleTabIndex=(t,n,o=1)=>{const i=n+o;return i<t.length?t[i]._disabled?this.nextPossibleTabIndex(t,n,o+1):i:n},this.prevPossibleTabIndex=(t,n,o=1)=>{const i=n-o;return i>=0?t[i]._disabled?this.prevPossibleTabIndex(t,n,o+1):i:n},this.onKeyDown=t=>{switch(t.key){case r.ArrowRight:this.goToNextTab(t);break;case r.ArrowLeft:this.goToPreviousTab(t);break;case r.Space:case r.Enter:this.activateFocusedTab(t)}},this.onClickSelect=(t,n)=>{this.selectNextTabEvent(t,n)},this.onMouseDown=t=>{t.preventDefault()},this.callbacks={onClick:this.onClickSelect,onMouseDown:this.onMouseDown},this.setCurrentTabButtonRef=t=>{this.currentTabButtonRef=t},this.catchTabPanelHost=t=>{this.tabPanelHost=t},this._align="top",this._hasCreateButton=!1,this._selected=0,this.state={_align:"top",_label:"",_selected:0,_tabs:[]},this.selectNextNotDisabledTab=(t,n,o=!0,i)=>{if(t>n.length-1&&(t=n.length-1),t<0&&(t=0),Array.isArray(n)&&n[t]&&n[t]._disabled){if(o===!0){if(t<n.length-1)return this.selectNextNotDisabledTab(t+1,n,!0,i||t);t=i||t,o=!1}if(o===!1){if(t>0)return this.selectNextNotDisabledTab(t-1,n,!1,i||t);p("[KolTabs] All tabs are disabled, and therefore no tab can be displayed.")}}return t},this.syncSelectedAndTabs=(t,n,o,i)=>{let a,l;a=i==="_selected"?t:this.state._selected,l=i==="_tabs"?t:this.state._tabs,l.length>0&&n.set("_selected",this.selectNextNotDisabledTab(a,l))},this.refreshTabPanels=()=>{var t,n,o,i;if(this.tabPanelHost){for(;this.tabPanelHost.firstChild;)this.tabPanelHost.removeChild(this.tabPanelHost.firstChild);for(let a=0;a<((t=this.state._tabs)===null||t===void 0?void 0:t.length);a++){const l=document.createElement("div");l.setAttribute("aria-labelledby",`${this.state._label.replace(/\s/g,"-")}-tab-${a}`),l.setAttribute("id",`tabpanel-${a}`),l.setAttribute("role","tabpanel"),l.setAttribute("hidden",""),l.setAttribute("tabindex","0");const c=document.createElement("slot");c.setAttribute("name",`tabpanel-slot-${a}`),l.appendChild(c),(n=this.tabPanelHost)===null||n===void 0||n.appendChild(l),typeof HTMLCollection<"u"&&((o=this.host)===null||o===void 0?void 0:o.children)instanceof HTMLCollection&&(!((i=this.host)===null||i===void 0)&&i.children[a])&&this.host.children[a].setAttribute("slot",`tabpanel-slot-${a}`)}this.updateVisiblePanel()}},this.updateVisiblePanel=()=>{this.tabPanelHost&&Array.from(this.tabPanelHost.children).forEach((t,n)=>{n===this.state._selected?t.removeAttribute("hidden"):t.setAttribute("hidden","")})},this.onCreate=t=>{var n,o;t.preventDefault(),(o=(n=this.state._on)===null||n===void 0?void 0:n.onCreate)===null||o===void 0||o.call(n,t),this.host&&d(this.host,h.create)},this.onBlur=()=>{this.currentFocusIndex=void 0}}getCurrentFocusIndex(){return typeof this.currentFocusIndex=="number"?this.currentFocusIndex:this.state._selected}getKeyboardTabChangeMode(){return this._behavior==="select-manual"?"selectFocusOnly":"activateCompletely"}goToNextTab(e){const t=this.nextPossibleTabIndex(this.state._tabs,this.getCurrentFocusIndex());this.selectNextTabEvent(e,t,this.getKeyboardTabChangeMode())}goToPreviousTab(e){const t=this.prevPossibleTabIndex(this.state._tabs,this.getCurrentFocusIndex());this.selectNextTabEvent(e,t,this.getKeyboardTabChangeMode())}activateFocusedTab(e){typeof this.currentFocusIndex=="number"&&this.onSelect(e,this.currentFocusIndex)}selectNextTabEvent(e,t,n="activateCompletely"){var o,i;this.currentFocusIndex=t,this.focusTabById(t),n==="activateCompletely"&&(this._selected=t,(i=(o=this.state._tabs[t]._on)===null||o===void 0?void 0:o.onSelect)===null||i===void 0||i.call(o,e,t),this.onSelect(e,t))}async focus(){return z(this.host,()=>I(this.currentTabButtonRef))}async click(){return A(this.host,async()=>P(this.currentTabButtonRef))}renderButtonGroup(){return s("div",{"aria-label":this.state._label,class:"kol-tabs__button-group",role:"tablist",onKeyDown:this.onKeyDown,onBlur:this.onBlur},this.state._tabs.map((e,t)=>s(b,{ref:this.state._selected===t?this.setCurrentTabButtonRef:void 0,_disabled:e._disabled,_icons:e._icons,_hideLabel:e._hideLabel,_label:e._label,_on:this.callbacks,_tabIndex:this.state._selected===t?0:-1,_tooltipAlign:e._tooltipAlign,_variant:this.state._selected===t?"custom":void 0,_customClass:this.state._selected===t?"selected":"",_ariaControls:`tabpanel-${t}`,_ariaSelected:this.state._selected===t,_id:`${this.state._label.replace(/\s/g,"-")}-tab-${t}`,_role:"tab",_value:t})),this.state._hasCreateButton&&s(b,{class:"kol-tabs__button-create",_label:this.onCreateLabel,_on:{onClick:this.onCreate},_icons:"kolicon-plus","data-testid":"tabs-create-button"}))}render(){return s("div",{key:"40cde6ced5533ac105935fdd8399f2578f187116",ref:e=>{this.tabPanelsElement=e},class:S("kol-tabs",`kol-tabs--align-${this.state._align}`)},this.renderButtonGroup(),s("div",{key:"b2e2655b1aa19615d5167da39db1151033a09462",class:"kol-tabs__content",ref:this.catchTabPanelHost}))}validateAlign(e){T(this,e)}validateBehavior(e){K(this,e)}validateHasCreateButton(e){H(this,e)}validateLabel(e){C(this,e,{required:!0})}validateOn(e){if(typeof e=="object"&&e!==null){const t={};typeof e.onCreate=="function"&&(t.onCreate=e.onCreate),typeof e.onSelect=="function"&&(t.onSelect=e.onSelect),m(this,"_on",t)}}validateSelected(e){g(this,"_selected",e,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(e){k(this,"_tabs",t=>typeof t=="object"&&t!==null&&typeof t._label=="string"&&t._label.length>0,e,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs,afterPatch:this.refreshTabPanels}}),v("KolTabs",this.state._tabs.length)}componentWillLoad(){this.validateAlign(this._align),this.validateLabel(this._label),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs),this.validateBehavior(this._behavior),this.validateHasCreateButton(this._hasCreateButton)}componentDidRender(){this.refreshTabPanels()}focusTabById(e){if(this.tabPanelsElement){const t=y(`button#${this.state._label.replace(/\s/g,"-")}-tab-${e}`,this.tabPanelsElement);t==null||t.focus()}}onSelect(e,t){var n,o;(o=(n=this._on)===null||n===void 0?void 0:n.onSelect)===null||o===void 0||o.call(n,e,t),this.host&&d(this.host,h.select,t),this.focusTabById(t)}get host(){return _(this)}static get watchers(){return{_align:["validateAlign"],_behavior:["validateBehavior"],_hasCreateButton:["validateHasCreateButton"],_label:["validateLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"]}}};N.style={default:E};export{N as kol_tabs};
