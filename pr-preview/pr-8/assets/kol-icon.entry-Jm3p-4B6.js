import{r as i,h as t,H as a}from"./index-D2HA3l2I.js";import{B as s}from"./variant-quote-CHD0qMkY-BNzDdLYt.js";import{I as f}from"./component-D3oJtEcp-C099JPRM.js";import{c as b,n as k}from"./normalizers-DnkJhVYZ-DXVhldNo.js";import{l as c}from"./label-BEOW9ltS-B9z6yYZU.js";import{B as h}from"./base-controller-CXhqh4cR-BR_IVuhr.js";import"./tslib.es6-CxX45GIN-CNLfoBeZ.js";import"./_Uint8Array-kJHDjtoP-Dy4Yhf8F.js";import"./isArray-CcrBs4JM-Cx3brLAR.js";import"./clsx-COFh-Vc8-XoI9wUSr.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const r=b("icons","kolicon-logo",k),m={required:[r,c]};class p extends h{constructor(n){super(n,m)}componentWillLoad(n){const{icons:e,label:l}=n;this.watchIcons(e),this.watchLabel(l)}watchIcons(n){r.apply(n,e=>{this.setRenderProp("icons",e)})}watchLabel(n){c.apply(n,e=>{this.setRenderProp("label",e)})}}const d=`@font-face {
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
}`,u=class{constructor(o){i(this,o),this.ctrl=new p(s.stateLess)}watchIcons(o){this.ctrl.watchIcons(o)}watchLabel(o){this.ctrl.watchLabel(o)}componentWillLoad(){this.ctrl.componentWillLoad({icons:this._icons,label:this._label})}render(){return t(a,{key:"af39984255995f183c5dce6bc5a6433b84940131"},t(f,{key:"1a03c1c01121ec2cc03ade18bc299a00bee5f0cd",icons:this.ctrl.getRenderProp("icons"),label:this.ctrl.getRenderProp("label")}))}static get watchers(){return{_icons:["watchIcons"],_label:["watchLabel"]}}};u.style={default:d};export{u as kol_icon};
