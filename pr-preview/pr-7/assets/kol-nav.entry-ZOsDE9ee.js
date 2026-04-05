import{r as k,h as o,e as m,c as f,i as _,t as u,l as h}from"./index-Bp2HTB7q.js";import{v}from"./hide-label-DQL9J6E_-_xcKv34J.js";import{v as g}from"./label-vxVEH2gH-DoBceXFF.js";import{t as y}from"./i18n-BVaUp6qp-B22iMgjv.js";import{c as s}from"./clsx-COFh-Vc8-XoI9wUSr.js";import{n as x}from"./dev.utils-BL9Lx_uf-BSaNqjRt.js";import{r as p,a as w}from"./unique-nav-labels-BIHfxulq-LBs4Rm93.js";import{w as C}from"./validation-JhNRqKy1-ufRe5EdN.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const L=(n,e)=>{h(n,"_collapsible",e)},z=(n,e)=>{h(n,"_hasCompactButton",e)},I=(n,e)=>{h(n,"_hasIconsWhenExpanded",e)},E=`/* forward the rem function */
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
  .kol-nav {
    display: grid;
    place-items: center;
  }
  .kol-nav:not(.kol-nav--is-compact) .kol-nav__navigation {
    width: 100%;
  }
  .kol-nav__navigation .kol-span {
    width: 100%;
    justify-content: flex-start;
  }
  .kol-nav__navigation .kol-span__container {
    width: 100%;
  }
  .kol-nav__navigation .kol-span__container .kol-span__label {
    flex: 1;
  }
  .kol-nav__list {
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: column;
    list-style: none;
  }
  .kol-nav__entry-wrapper {
    display: flex;
  }
  .kol-nav__entry {
    flex-grow: 1;
  }
  .kol-button {
    text-align: left;
  }
}`,T=n=>typeof n._href=="string",B=n=>{var e;return n._href===void 0&&typeof((e=n._on)===null||e===void 0?void 0:e.onClick)=="function"},W=class{constructor(n){k(this,n),this.navId="kol-nav-"+x(),this.listId=this.navId+"-list",this.handleToggleExpansionClick=e=>{e&&(this.state._expandedChildren.includes(e)?this.collapseChildren(e):this.expandChildren(e))},this.linkList=e=>o("ul",{class:s("kol-nav__list",{"kol-nav__list--nested":e.deep>0,"kol-nav__list--vertical":e.deep!==0}),id:e.deep>0?e.id:void 0},e.links.map((t,i)=>this.li(e.collapsible,e.deep,i,t,e.id))),this._collapsible=!0,this._hasCompactButton=!1,this._hasIconsWhenExpanded=!1,this._hideLabel=!1,this.state={_collapsible:!0,_hasCompactButton:!1,_hasIconsWhenExpanded:!1,_hideLabel:!1,_label:"",_links:[],_expandedChildren:[]}}expandChildren(n){this.state=Object.assign(Object.assign({},this.state),{_expandedChildren:[...this.state._expandedChildren,n]})}collapseChildren(n){this.state=Object.assign(Object.assign({},this.state),{_expandedChildren:this.state._expandedChildren.filter(e=>e!==n)})}buildIconObject(n,e,t){const i={left:"",right:""};return this.state._hasIconsWhenExpanded&&t&&(i.left=t),this.state._hideLabel&&(i.left=t||"kolicon-link"),n&&(i.right=e?"kolicon-minus":"kolicon-plus"),i}entry(n,e,t,i,r){var l;const c=typeof t._icons=="string"?t._icons:typeof((l=t._icons)===null||l===void 0?void 0:l.left)=="string"?t._icons.left:void 0,a=this.buildIconObject(n&&e,i,c);return o("div",{class:"kol-nav__entry-wrapper"},T(t)?o(m,Object.assign({class:s("kol-nav__entry kol-nav__entry--link",{"kol-nav__entry--collapsible":n})},t,{_hideLabel:this.state._hideLabel,_icons:a,_ariaControls:n&&e&&i?r:void 0,_ariaExpanded:n&&e?i:void 0})):o(f,{class:s("kol-nav__entry kol-nav__entry--button",{"kol-nav__entry--collapsible":n}),_label:t._label,_hideLabel:this.state._hideLabel,_icons:a,_ariaControls:n&&e&&i?r:void 0,_ariaExpanded:n&&e?i:void 0,_on:{onClick:(d,b)=>{B(t)&&typeof t._on.onClick=="function"&&t._on.onClick(d,b),this.handleToggleExpansionClick(t._children)}}}))}li(n,e,t,i,r){const l=!!i._active,c=Array.isArray(i._children)&&i._children.length>0,a=!!(i._children&&this.state._expandedChildren.includes(i._children)),d=r+"_"+e+"_"+t;return o("li",{class:s("kol-nav__list-item",{"kol-nav__list-item--active":l,"kol-nav__list-item--expanded":a,"kol-nav__list-item--has-children":c}),key:t},this.entry(n,c,i,a,d),a&&o(this.linkList,{collapsible:n,deep:e+1,links:i._children||[],id:d}))}initializeExpandedChildren(){this.state=Object.assign(Object.assign({},this.state),{_expandedChildren:[]});const n=e=>{if(e._active)return e._children&&this.expandChildren(e._children),!0;if(e._children){for(const t of e._children)if(n(t))return this.expandChildren(e._children),!0}return!1};this.state._links.forEach(n)}render(){const n=this.state._collapsible===!0;return o("div",{key:"c1700bec53b26e42211871e3d525ef00cf1dd618",class:s("kol-nav",{"kol-nav--is-compact":this.state._hideLabel})},o("nav",{key:"1a3128937f3fec152978fb8f7ce80ef504a30408","aria-label":this.state._label,class:"kol-nav__navigation",id:this.navId},o(this.linkList,{key:"a5a465f49f1f466124386c437fc20d736813ecc8",collapsible:n,deep:0,links:this.state._links,id:this.listId})),this.state._hasCompactButton&&o("div",{key:"34c29991127a3fde4855cf9a5d8cef559c7781fe",class:"kol-nav__compact"},o(f,{key:"4673a9a316306643aac69e9bd025fd85e899c7e6",class:"kol-nav__toggle-button",_ariaControls:this.navId,_ariaExpanded:!this.state._hideLabel,_icons:this.state._hideLabel?"kolicon-chevron-right":"kolicon-chevron-left",_hideLabel:!0,_label:y(this.state._hideLabel?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_hideLabel:!this.state._hideLabel})}},_tooltipAlign:"right"})))}validateCollapsible(n){L(this,n)}validateHasCompactButton(n){z(this,n)}validateHasIconsWhenExpanded(n){I(this,n)}validateHideLabel(n){v(this,n)}validateLabel(n,e,t=!1){t||p(this.state._label),g(this,n,{required:!0}),_(n),w(this.state._label)}validateLinks(n){C("KolNav",this,n),u("[KolNav] The navigation structure is not yet validated recursively."),this.initializeExpandedChildren()}componentWillLoad(){this.validateCollapsible(this._collapsible),this.validateHideLabel(this._hideLabel),this.validateHasCompactButton(this._hasCompactButton),this.validateHasIconsWhenExpanded(this._hasIconsWhenExpanded),this.validateLabel(this._label,void 0,!0),this.validateLinks(this._links),this.initializeExpandedChildren()}disconnectedCallback(){p(this.state._label)}static get watchers(){return{_collapsible:["validateCollapsible"],_hasCompactButton:["validateHasCompactButton"],_hasIconsWhenExpanded:["validateHasIconsWhenExpanded"],_hideLabel:["validateHideLabel"],_label:["validateLabel"],_links:["validateLinks"]}}};W.style={default:E};export{W as kol_nav};
