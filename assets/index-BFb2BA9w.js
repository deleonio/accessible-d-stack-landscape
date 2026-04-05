const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/devtools-CJj45nCF-C5I9H3vA.js","assets/index-G8af0_gG-BFaB1nai.js","assets/dev.utils-BL9Lx_uf-x61re9jB.js"])))=>i.map(i=>d[i]);
import{M as e,O as t,T as n,_ as r,at as i,d as a,et as o,f as s,h as c,i as l,l as u,p as d,u as f}from"./index-G8af0_gG-BFaB1nai.js";import{C as p,v as m}from"./component-names-Dy77vq43-y0h3WhLS.js";import{n as h}from"./i18n-B2d_exHc-B0S3j5ey.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var g,_=[],v=(e,t=!0)=>(t&&typeof g==`string`&&e(g),_.push(e),()=>{let t=_.indexOf(e);t>=0&&_.splice(t,1)}),y,b=!1,x=async(e,t,n)=>{let r=typeof process<`u`?`production`:void 0;o(n?.environment||r||`production`),h(n?.translation?.name??`de`,n?.translations),n!=null&&n.transformTagName&&p(n?.transformTagName);let i=await a(e,t,n);return b=!0,y=n,c.info(`Development mode active - Enhanced debugging features available`),i},ee=()=>b,te=()=>y,S,C;function ne(){return C?S:(C=1,S=function(e){return function(t,n){if(!t)return e;var r;typeof t==`string`?r=t:n=t;var i=e;return r&&(i+=`__`+r),i+(n?Object.keys(n).reduce(function(e,t){var r=n[t];return r&&(e+=` `+(typeof r==`boolean`?i+`--`+t:i+`--`+t+`_`+r)),e},``):``)}})}var re=t(ne());function ie(){let e=new Map,t=(t,n,r)=>{try{return e.get(t)(n,r)}catch{return e.set(t,re(t)).get(t)(n,r)}};return t.forBlock=e=>{let n=(n,r)=>t(e,n,r);return n.forElement=n=>r=>t(e,n,r),n},t}var ae=ie(),oe;(function(e){e.blur=`blur`,e.change=`change`,e.changeHeaderCells=`changeheadercells`,e.changePage=`changepage`,e.changePageSize=`changepagesize`,e.click=`click`,e.close=`close`,e.create=`create`,e.focus=`focus`,e.input=`input`,e.keydown=`keydown`,e.mousedown=`mousedown`,e.reset=`reset`,e.select=`select`,e.selectionChange=`selectionchange`,e.sort=`sort`,e.submit=`submit`,e.toggle=`toggle`})(oe||={});var se={bubbles:!0,cancelable:!0,composed:!0};function ce(e,t=null){return new CustomEvent(e,Object.assign(Object.assign({},se),{detail:t}))}function le(e,t,n){e.dispatchEvent(ce(t,n))}var ue=0,de=()=>{ue++},fe=()=>{ue=Math.max(0,ue-1)},pe=e=>{ue>0&&e.preventDefault()};new n(`kol`,s,r);var me=class e{constructor(e,t){var n;this.document=e,this.options=t,this.toastContainerElement=this.document.createElement(m),this.document.body.prepend(this.toastContainerElement),(n=this.options)!=null&&n.defaultVariant&&c.info(`ToasterService: Default variant is deprecated. Use 'card' variant for all toasts instead.`)}static getInstance(t,n){if(!ee())throw Error(`Toaster: Call KoliBri bootstrap/register method first.`);let r=this.instances.get(t);return r||(r=new e(t,n),this.instances.set(t,r)),r}dispose(){let e=this.toastContainerElement;e?(this.toastContainerElement=void 0,e.remove()):c.warn(`Toaster service is already disposed.`)}enqueue(e){if(this.toastContainerElement&&typeof this.toastContainerElement.enqueue==`function`)return this.toastContainerElement.enqueue(e)}closeAll(e=!1){this.toastContainerElement&&typeof this.toastContainerElement.closeAll==`function`&&this.toastContainerElement.closeAll(e)}},w;me.instances=new Map,function(e){e[`Die Bundesregierung`]=`BReg`,e[`Bundesministerium der Finanzen`]=`BMF`,e[`Bundesministerium des Innern, für Bau und Heimat`]=`BMI`,e[`Auswärtiges Amt`]=`AA`,e[`Bundesministerium für Wirtschaft und Energie`]=`BMWi`,e[`Bundesministerium der Justiz und für Verbraucherschutz`]=`BMJV`,e[`Bundesministerium für Arbeit und Soziales`]=`BMAS`,e[`Bundesministerium der Verteidigung`]=`BMVg`,e[`Bundesministerium für Ernährung und Landwirtschaft`]=`BMEL`,e[`Bundesministerium für Familie, Senioren, Frauen und Jugend`]=`BMFSFJ`,e[`Bundesministerium für Gesundheit`]=`BMG`,e[`Bundesministerium für Verkehr und digitale Infrastruktur`]=`BMVI`,e[`Bundesministerium für Umwelt, Naturschutz und nukleare Sicherheit`]=`BMU`,e[`Bundesministerium für Bildung und Forschung`]=`BMBF`,e[`Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung`]=`BMZ`}(w||={});var T;(function(e){e[`Beschaffungsamt des Bundesministeriums des Innern`]=`BeschA`,e[`Bundesamt für Ausrüstung, Informationstechnik und Nutzung der Bundeswehr`]=`BAAINBw`,e[`Bundesamt für äußere Restitutionen`]=`BAR`,e[`Bundesamt für Bauwesen und Raumordnung`]=`BBR`,e[`Bundesamt für Bevölkerungsschutz und Katastrophenhilfe`]=`BBK`,e[`Bundesamt für Familie und zivilgesellschaftliche Aufgaben`]=`BAFzA`,e[`Bundesamt für Güterverkehr`]=`BAG`,e[`Bundesamt für Justiz`]=`BfJ`,e[`Bundesamt für Kartographie und Geodäsie`]=`BKG`,e[`Bundesamt für kerntechnische Entsorgungssicherheit`]=`BASE`,e[`Bundesamt für Migration und Flüchtlinge`]=`BAMF`,e[`Bundesamt für Sicherheit in der Informationstechnik`]=`BSI`,e[`Bundesamt für Verbraucherschutz und Lebensmittelsicherheit`]=`BVL`,e[`Bundesamt für Verfassungsschutz`]=`BfV`,e[`Bundesamt für Wirtschaft und Ausfuhrkontrolle`]=`BAFA`,e[`Bundesamt für zentrale Dienste und offene Vermögensfragen`]=`BADV`,e[`Bundesanstalt für Verwaltungsdienstleistungen`]=`BAV`,e.Bundesarchiv=`BArch`,e[`Bundesaufsichtsamt für Flugsicherung`]=`BAF`,e.Bundesausgleichsamt=`BAA`,e.Bundeskartellamt=`BKartA`,e.Bundeskriminalamt=`BKA`,e.Bundesnachrichtendienst=`BND`,e[`Bundesnetzagentur für Elektrizität, Gas, Telekommunikation, Post und Eisenbahnen`]=`BNetzA`,e.Bundespolizeipräsidium=`BPOLP`,e[`Bundesprüfstelle für jugendgefährdende Medien`]=`BPjM`,e.Bundessortenamt=`BSA`,e.Bundessprachenamt=`BSprA`,e[`Bundesamt für Soziale Sicherung`]=`BAS`,e.Bundesverwaltungsamt=`BVA`,e[`Bundeszentralamt für Steuern`]=`BZSt`,e[`Deutsches Patent- und Markenamt`]=`DPMA`,e[`Eisenbahn-Bundesamt`]=`EBA`,e.Generalzolldirektion=`GZD`,e[`Militärischer Abschirmdienst`]=`MAD`,e[`Zentrale Stelle für Informationstechnik im Sicherheitsbereich`]=`ZITiS`})(T||={});var E;(function(e){e[`Informationstechnikzentrum Bund`]=`ITZBund`,e[`Bundesanstalt für den Digitalfunk der Behörden und Organisationen mit Sicherheitsaufgaben`]=`BDBOS`,e[`Bundesanstalt für Landwirtschaft und Ernährung`]=`BLE`,e[`Bundesanstalt Technisches Hilfswerk`]=`THW`,e[`Bundesinstitut für Arzneimittel und Medizinprodukte`]=`BfArM`,e[`Bundesinstitut für Bevölkerungsforschung`]=`BiB`,e[`Bundesinstitut für Sportwissenschaft`]=`BISp`})(E||={});var D=new Map;D.set(w[`Die Bundesregierung`],[`Die`,`Bundesregierung`]),D.set(w[`Bundesministerium der Finanzen`],[`Bundesministerium`,`der Finanzen`]),D.set(w[`Bundesministerium des Innern, für Bau und Heimat`],[`Bundesministerium`,`des Inneren, für Bau`,`und Heimat`]),D.set(w[`Auswärtiges Amt`],[`Auswärtiges Amt`]),D.set(w[`Bundesministerium für Wirtschaft und Energie`],[`Bundesministerium`,`für Wirtschaft`,`und Energie`]),D.set(w[`Bundesministerium der Justiz und für Verbraucherschutz`],[`Bundesministerium`,`der Justiz und`,`für Verbraucherschutz`]),D.set(w[`Bundesministerium für Arbeit und Soziales`],[`Bundesministerium`,`für Arbeit und Soziales`]),D.set(w[`Bundesministerium der Verteidigung`],[`Bundesministerium`,`der Verteidigung`]),D.set(w[`Bundesministerium für Bildung und Forschung`],[`Bundesministerium`,`für Bildung`,`und Forschung`]),D.set(w[`Bundesministerium für Ernährung und Landwirtschaft`],[`Bundesministerium`,`für Ernährung`,`und Landwirtschaft`]),D.set(w[`Bundesministerium für Familie, Senioren, Frauen und Jugend`],[`Bundesministerium`,`für Familie, Senioren, Frauen`,`und Jugend`]),D.set(w[`Bundesministerium für Gesundheit`],[`Bundesministerium`,`für Gesundheit`]),D.set(w[`Bundesministerium für Umwelt, Naturschutz und nukleare Sicherheit`],[`Bundesministerium`,`für Umwelt, Naturschutz`,`und nukleare Sicherheit`]),D.set(w[`Bundesministerium für Verkehr und digitale Infrastruktur`],[`Bundesministerium`,`für Verkehr und`,`digitale Infrastruktur`]),D.set(w[`Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung`],[`Bundesministerium`,`für wirtschaftliche Zusammenarbeit`,`und Entwicklung`]),D.set(T[`Beschaffungsamt des Bundesministeriums des Innern`],[`Beschaffungsamt`,`des Bundesministeriums`,`des Innern`]),D.set(T[`Bundesamt für Ausrüstung, Informationstechnik und Nutzung der Bundeswehr`],[]),D.set(T[`Bundesamt für äußere Restitutionen`],[]),D.set(T[`Bundesamt für Bauwesen und Raumordnung`],[]),D.set(T[`Bundesamt für Bevölkerungsschutz und Katastrophenhilfe`],[`Bundesamt`,`für Bevölkerungsschutz`,`und Katastrophenhilfe`]),D.set(T[`Bundesamt für Familie und zivilgesellschaftliche Aufgaben`],[`Bundesamt`,`für Familie und`,`zivilgesellschaftliche Aufgaben`]),D.set(T[`Bundesamt für Güterverkehr`],[`Bundesamt`,`für Güterverkehr`]),D.set(T[`Bundesamt für Justiz`],[`Bundesamt für`,`Justiz`]),D.set(T[`Bundesamt für Kartographie und Geodäsie`],[`Bundesamt für`,`Kartographie und Geodäsie`]),D.set(T[`Bundesamt für kerntechnische Entsorgungssicherheit`],[`Bundesamt für`,`kerntechnische`,`Entsorgungssicherheit`]),D.set(T[`Bundesamt für Migration und Flüchtlinge`],[`Bundesamt`,`für Migration`,`und Flüchtlinge`]),D.set(T[`Bundesamt für Sicherheit in der Informationstechnik`],[`Bundesamt`,`für Sicherheit in der`,`Informationstechnik`]),D.set(T[`Bundesamt für Verbraucherschutz und Lebensmittelsicherheit`],[`Bundesamt für`,`Verbraucherschutz und`,`Lebensmittelsicherheit`]),D.set(T[`Bundesamt für Verfassungsschutz`],[`Bundesamt für`,`Verfassungsschutz`]),D.set(T[`Bundesamt für Wirtschaft und Ausfuhrkontrolle`],[`Bundesamt`,`für Wirtschaft`,`Ausfuhrkontrolle`]),D.set(T[`Bundesamt für zentrale Dienste und offene Vermögensfragen`],[`Bundesamt`,`für zentrale Dienste und`,`offene Vermögensfragen`]),D.set(T[`Bundesanstalt für Verwaltungsdienstleistungen`],[`Bundesanstalt`,`für Verwaltungsdienstleistungen`]),D.set(T.Bundesarchiv,[`Das`,`Bundesarchiv`]),D.set(T[`Bundesaufsichtsamt für Flugsicherung`],[`Bundesaufsichtsamt`,`für Flugsicherung`]),D.set(T.Bundesausgleichsamt,[`Bundesausgleichsamt`]),D.set(T.Bundeskartellamt,[`Bundeskartellamt`]),D.set(T.Bundeskriminalamt,[`Bundeskriminalamt`]),D.set(T.Bundesnachrichtendienst,[`Bundesnachrichtendienst`]),D.set(T[`Bundesnetzagentur für Elektrizität, Gas, Telekommunikation, Post und Eisenbahnen`],[`Bundesnetzagentur`]),D.set(T.Bundespolizeipräsidium,[`Bundespolizeipräsidium`]),D.set(T[`Bundesprüfstelle für jugendgefährdende Medien`],[`Bundesprüfstelle`,`für jugendgefährdende`,`Medien`]),D.set(T.Bundessortenamt,[`Bundessortenamt`]),D.set(T.Bundessprachenamt,[`Bundessprachenamt`]),D.set(T[`Bundesamt für Soziale Sicherung`],[`Bundesamt`,`für Soziale Sicherung`]),D.set(T.Bundesverwaltungsamt,[`Bundesverwaltungsamt`]),D.set(T[`Bundeszentralamt für Steuern`],[`Bundeszentralamt`,`für Steuern`]),D.set(T[`Deutsches Patent- und Markenamt`],[`Deutsches`,`Patent- und Markenamt`]),D.set(T[`Eisenbahn-Bundesamt`],[`Eisenbahn-Bundesamt`]),D.set(T.Generalzolldirektion,[`Generalzolldirektion`]),D.set(T[`Militärischer Abschirmdienst`],[`Bundesamt für den`,`Militärischen Abschirmdienst`]),D.set(T[`Zentrale Stelle für Informationstechnik im Sicherheitsbereich`],[`Zentrale Stelle`,`für Informationstechnik`,`im Sicherheitsbereich`]),D.set(E[`Informationstechnikzentrum Bund`],[`Informations`,`Technik`,`Zentrum Bund`]),D.set(E[`Bundesanstalt für den Digitalfunk der Behörden und Organisationen mit Sicherheitsaufgaben`],[`Bundesanstalt`,`für den Digitalfunk der Behörden und`,`Organisationen mit Sicherheitsaufgaben`]),D.set(E[`Bundesanstalt für Landwirtschaft und Ernährung`],[`Bundesanstalt für`,`Landwirtschaft und Ernährung`]),D.set(E[`Bundesanstalt Technisches Hilfswerk`],[`Bundesanstalt`,`Technisches Hilfswerk`]),D.set(E[`Bundesinstitut für Arzneimittel und Medizinprodukte`],[`Bundesinstitut`,`für Arzneimittel`,`und Medizinprodukte`]),D.set(E[`Bundesinstitut für Bevölkerungsforschung`],[`Bundesinstitut`,`für Bevölkerungsforschung`]),D.set(E[`Bundesinstitut für Sportwissenschaft`],[`Bundesinstitut`,`für Sportwissenschaft`]);var he=()=>{u(t=>{try{t.shadowRoot instanceof ShadowRoot&&e(t,i(t))}catch{}return`default`}),f(()=>import(`./devtools-CJj45nCF-C5I9H3vA.js`).then(e=>{typeof e==`object`&&e&&typeof e.initialize==`function`&&e.initialize()}),__vite__mapDeps([0,1,2])).catch(e=>{c.error(e)})},ge=async(e,t)=>{if(typeof window<`u`)return await he(),l(JSON.parse(`[["kol-abbr",[[289,"kol-abbr",{"_label":[1],"state":[32]},null,{"_label":["validateLabel"]}]]],["kol-accordion",[[289,"kol-accordion",{"_disabled":[4],"_label":[1],"_level":[2],"_on":[16],"_open":[1540],"state":[32],"focus":[64],"click":[64]},null,{"_disabled":["validateDisabled"],"_label":["validateLabel"],"_level":["validateLevel"],"_on":["validateOn"],"_open":["validateOpen"]}]]],["kol-alert",[[289,"kol-alert",{"_alert":[4],"_hasCloser":[4,"_has-closer"],"_label":[1],"_level":[2],"_on":[16],"_type":[1],"_variant":[1],"state":[32]}]]],["kol-alert-wc",[[260,"kol-alert-wc",{"_alert":[4],"_hasCloser":[4,"_has-closer"],"_label":[1],"_level":[2],"_on":[16],"_type":[1],"_variant":[1],"state":[32]},null,{"_alert":["validateAlert"],"_hasCloser":["validateHasCloser"],"_label":["validateLabel"],"_level":["validateLevel"],"_on":["validateOn"],"_type":["validateType"],"_variant":["validateVariant"]}]]],["kol-avatar",[[801,"kol-avatar",{"_color":[1],"_label":[1],"_src":[1],"initials":[32]},null,{"_color":["watchColor"],"_label":["watchLabel"],"_src":["watchSrc"]}]]],["kol-badge",[[289,"kol-badge",{"_color":[1],"_icons":[1],"_label":[1],"_smartButton":[1,"_smart-button"],"state":[32],"focus":[64]},null,{"_icons":["validateIcons"],"_color":["validateColor"],"_smartButton":["validateSmartButton"]}]]],["kol-breadcrumb",[[289,"kol-breadcrumb",{"_label":[1],"_links":[1],"state":[32]},null,{"_label":["validateLabel"],"_links":["validateLinks"]}]]],["kol-button",[[289,"kol-button",{"_accessKey":[1,"_access-key"],"_ariaControls":[1,"_aria-controls"],"_ariaDescription":[1,"_aria-description"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_inline":[4],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_shortKey":[1,"_short-key"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1],"getValue":[64],"focus":[64],"click":[64]}]]],["kol-button-link",[[289,"kol-button-link",{"_accessKey":[1,"_access-key"],"_ariaControls":[1,"_aria-controls"],"_ariaDescription":[1,"_aria-description"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_inline":[4],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_shortKey":[1,"_short-key"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1],"getValue":[64],"focus":[64],"click":[64]}]]],["kol-button-wc",[[260,"kol-button-wc",{"_accessKey":[1,"_access-key"],"_ariaControls":[1,"_aria-controls"],"_ariaDescription":[1,"_aria-description"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaHasPopup":[1,"_aria-has-popup"],"_ariaSelected":[4,"_aria-selected"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_inline":[4],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_shortKey":[1,"_short-key"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1],"state":[32],"focus":[64],"click":[64]},null,{"_accessKey":["validateAccessKey"],"_ariaControls":["validateAriaControls"],"_ariaDescription":["validateAriaDescription"],"_ariaExpanded":["validateAriaExpanded"],"_ariaSelected":["validateAriaSelected"],"_customClass":["validateCustomClass"],"_disabled":["validateDisabled"],"_hideLabel":["validateHideLabel"],"_icons":["validateIcons"],"_id":["validateId"],"_inline":["validateInline"],"_label":["validateLabel"],"_name":["validateName"],"_on":["validateOn"],"_role":["validateRole"],"_shortKey":["validateShortKey"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_tooltipAlign":["validateTooltipAlign"],"_type":["validateType"],"_value":["validateValue"],"_variant":["validateVariant"]}]]],["kol-card",[[289,"kol-card",{"_on":[16],"_hasCloser":[4,"_has-closer"],"_label":[1],"_level":[2]}]]],["kol-card-wc",[[260,"kol-card-wc",{"_on":[16],"_hasCloser":[4,"_has-closer"],"_label":[1],"_level":[2],"state":[32]},null,{"_on":["validateOn"],"_hasCloser":["validateHasCloser"],"_label":["validateLabel"],"_level":["validateLevel"]}]]],["kol-click-button",[[769,"kol-click-button",{"_label":[1],"focus":[64]},null,{"_label":["watchLabel"]}]]],["kol-combobox",[[289,"kol-combobox",{"_accessKey":[1,"_access-key"],"_placeholder":[1],"_disabled":[4],"_hideMsg":[4,"_hide-msg"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_label":[1],"_msg":[1],"_name":[1],"_on":[16],"_hasClearButton":[4,"_has-clear-button"],"_suggestions":[1],"_required":[4],"_shortKey":[1,"_short-key"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1537],"blockSuggestionMouseOver":[32],"_isOpen":[32],"_filteredSuggestions":[32],"state":[32],"inputHasFocus":[32],"getValue":[64],"focus":[64],"click":[64]},[[0,"keydown","handleKeyDown"],[0,"click","handleWindowClick"],[1,"mousemove","handleMouseEvent"],[0,"focusout","handleFocusOut"],[0,"blur","handleWindowBlur"]],{"_placeholder":["validatePlaceholder"],"_accessKey":["validateAccessKey"],"_disabled":["validateDisabled"],"_hideMsg":["validateHideMsg"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_label":["validateLabel"],"_msg":["validateMsg"],"_name":["validateName"],"_on":["validateOn"],"_shortKey":["validateShortKey"],"_suggestions":["validateSuggestions"],"_hasClearButton":["validateHasClearButton"],"_required":["validateRequired"],"_syncValueBySelector":["validateSyncValueBySelector"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-details",[[289,"kol-details",{"_disabled":[4],"_label":[1],"_level":[2],"_on":[16],"_open":[1540],"state":[32],"focus":[64],"click":[64]},null,{"_disabled":["validateDisabled"],"_label":["validateLabel"],"_level":["validateLevel"],"_on":["validateOn"],"_open":["validateOpen"]}]]],["kol-dialog",[[289,"kol-dialog",{"_label":[1],"_on":[16],"_width":[1],"_variant":[1],"openModal":[64],"closeModal":[64]}]]],["kol-dialog-wc",[[260,"kol-dialog-wc",{"_label":[1],"_on":[16],"_width":[1],"_variant":[1],"state":[32],"openModal":[64],"closeModal":[64]},null,{"_label":["validateLabel"],"_on":["validateOn"],"_width":["validateWidth"],"_variant":["validateVariant"]}]]],["kol-drawer",[[289,"kol-drawer",{"_open":[4],"_align":[1],"_hasCloser":[4,"_has-closer"],"_label":[1],"_on":[16],"state":[32],"open":[64],"close":[64]},null,{"_label":["validateLabel"],"_align":["validateAlign"],"_hasCloser":["validateHasCloser"],"_open":["validateOpen"],"_on":["validateOn"]}]]],["kol-form",[[289,"kol-form",{"_on":[16],"_requiredText":[8,"_required-text"],"_errorList":[16],"state":[32],"focusErrorList":[64]},null,{"_on":["validateOn"],"_requiredText":["validateRequiredText"],"_errorList":["validateErrorList"]}]]],["kol-heading",[[289,"kol-heading",{"_label":[1],"_level":[2],"_secondaryHeadline":[1,"_secondary-headline"]},null,{"_label":["watchLabel"],"_level":["watchLevel"],"_secondaryHeadline":["watchSecondaryHeadline"]}]]],["kol-icon",[[289,"kol-icon",{"_icons":[1],"_label":[1]},null,{"_icons":["watchIcons"],"_label":["watchLabel"]}]]],["kol-image",[[289,"kol-image",{"_alt":[1],"_loading":[1],"_sizes":[1],"_src":[1],"_srcset":[1]},null,{"_alt":["watchAlt"],"_loading":["watchLoading"],"_sizes":["watchSizes"],"_src":["watchSrc"],"_srcset":["watchSrcset"]}]]],["kol-input-checkbox",[[289,"kol-input-checkbox",{"_accessKey":[1,"_access-key"],"_checked":[1540],"_hideMsg":[4,"_hide-msg"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_indeterminate":[1540],"_label":[1],"_labelAlign":[1,"_label-align"],"_msg":[1],"_name":[1],"_on":[16],"_required":[4],"_shortKey":[1,"_short-key"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[8],"_variant":[1],"state":[32],"inputHasFocus":[32],"getValue":[64],"focus":[64],"click":[64]},null,{"_accessKey":["validateAccessKey"],"_checked":["validateChecked"],"_disabled":["validateDisabled"],"_hideMsg":["validateHideMsg"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_indeterminate":["validateIndeterminate"],"_label":["validateLabel"],"_labelAlign":["validateLabelAlign"],"_msg":["validateMsg"],"_name":["validateName"],"_on":["validateOn"],"_required":["validateRequired"],"_shortKey":["validateShortKey"],"_syncValueBySelector":["validateSyncValueBySelector"],"_touched":["validateTouched"],"_value":["validateValue"],"_variant":["validateVariant"]}]]],["kol-input-color",[[289,"kol-input-color",{"_accessKey":[1,"_access-key"],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_hideMsg":[4,"_hide-msg"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_label":[1],"_msg":[1],"_name":[1],"_on":[16],"_shortKey":[1,"_short-key"],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32],"inputHasFocus":[32],"getValue":[64],"focus":[64],"click":[64]},null,{"_accessKey":["validateAccessKey"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_hideMsg":["validateHideMsg"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_label":["validateLabel"],"_msg":["validateMsg"],"_name":["validateName"],"_on":["validateOn"],"_shortKey":["validateShortKey"],"_smartButton":["validateSmartButton"],"_suggestions":["validateSuggestions"],"_syncValueBySelector":["validateSyncValueBySelector"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-date",[[289,"kol-input-date",{"_accessKey":[1,"_access-key"],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_hideMsg":[4,"_hide-msg"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_label":[1],"_max":[1],"_min":[1],"_msg":[1],"_name":[1],"_on":[16],"_readOnly":[4,"_read-only"],"_required":[4],"_shortKey":[1,"_short-key"],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_step":[8],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_type":[1],"_value":[1537],"_initialValueType":[32],"state":[32],"inputHasFocus":[32],"getValue":[64],"focus":[64],"click":[64],"reset":[64]},null,{"_accessKey":["validateAccessKey"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_hideMsg":["validateHideMsg"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_label":["validateLabel"],"_max":["validateMax"],"_min":["validateMin"],"_msg":["validateMsg"],"_name":["validateName"],"_on":["validateOn"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_shortKey":["validateShortKey"],"_smartButton":["validateSmartButton"],"_suggestions":["validateSuggestions"],"_step":["validateStep"],"_syncValueBySelector":["validateSyncValueBySelector"],"_touched":["validateTouched"],"_type":["validateType"],"_value":["validateValue"]}]]],["kol-input-email",[[289,"kol-input-email",{"_accessKey":[1,"_access-key"],"_autoComplete":[1,"_auto-complete"],"_hasCounter":[4,"_has-counter"],"_maxLengthBehavior":[1,"_max-length-behavior"],"_disabled":[4],"_hideMsg":[4,"_hide-msg"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_msg":[1],"_multiple":[4],"_name":[1],"_on":[16],"_pattern":[1],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_shortKey":[1,"_short-key"],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1537],"state":[32],"inputHasFocus":[32],"getValue":[64],"focus":[64],"click":[64]},null,{"_accessKey":["validateAccessKey"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_hideMsg":["validateHideMsg"],"_hideLabel":["validateHideLabel"],"_hasCounter":["validateHasCounter"],"_hint":["validateHint"],"_icons":["validateIcons"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_msg":["validateMsg"],"_multiple":["validateMultiple"],"_name":["validateName"],"_on":["validateOn"],"_pattern":["validatePattern"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_shortKey":["validateShortKey"],"_suggestions":["validateSuggestions"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_touched":["validateTouched"],"_value":["validateValue"],"_maxLengthBehavior":["validateMaxLengthBehavior"]}]]],["kol-input-file",[[289,"kol-input-file",{"_accept":[1],"_accessKey":[1,"_access-key"],"_disabled":[4],"_hideMsg":[4,"_hide-msg"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_label":[1],"_msg":[1],"_multiple":[4],"_name":[1],"_on":[16],"_required":[4],"_shortKey":[1,"_short-key"],"_smartButton":[1,"_smart-button"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"filename":[32],"hasFileSelected":[32],"state":[32],"inputHasFocus":[32],"getValue":[64],"focus":[64],"click":[64],"reset":[64]},null,{"_accept":["validateAccept"],"_accessKey":["validateAccessKey"],"_disabled":["validateDisabled"],"_hideMsg":["validateHideMsg"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_label":["validateLabel"],"_msg":["validateMsg"],"_multiple":["validateMultiple"],"_name":["validateName"],"_on":["validateOn"],"_required":["validateRequired"],"_shortKey":["validateShortKey"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_touched":["validateTouched"]}]]],["kol-input-number",[[289,"kol-input-number",{"_accessKey":[1,"_access-key"],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_hideMsg":[4,"_hide-msg"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_label":[1],"_max":[8],"_min":[8],"_msg":[1],"_name":[1],"_on":[16],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_shortKey":[1,"_short-key"],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_step":[8],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1544],"state":[32],"_initialValueType":[32],"inputHasFocus":[32],"getValue":[64],"focus":[64],"click":[64]},null,{"_accessKey":["validateAccessKey"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_hideMsg":["validateHideMsg"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_label":["validateLabel"],"_max":["validateMax"],"_min":["validateMin"],"_msg":["validateMsg"],"_name":["validateName"],"_on":["validateOn"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_shortKey":["validateShortKey"],"_smartButton":["validateSmartButton"],"_suggestions":["validateSuggestions"],"_step":["validateStep"],"_syncValueBySelector":["validateSyncValueBySelector"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-password",[[289,"kol-input-password",{"_accessKey":[1,"_access-key"],"_autoComplete":[1,"_auto-complete"],"_hasCounter":[4,"_has-counter"],"_maxLengthBehavior":[1,"_max-length-behavior"],"_disabled":[4],"_hideMsg":[4,"_hide-msg"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_msg":[1],"_name":[1],"_on":[16],"_pattern":[1],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_shortKey":[1,"_short-key"],"_smartButton":[1,"_smart-button"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1537],"_variant":[1],"state":[32],"_passwordVisible":[32],"inputHasFocus":[32],"getValue":[64],"focus":[64],"click":[64]},null,{"_accessKey":["validateAccessKey"],"_autoComplete":["validateAutoComplete"],"_maxLengthBehavior":["validateMaxLengthBehavior"],"_disabled":["validateDisabled"],"_variant":["validateVariant"],"_hideMsg":["validateHideMsg"],"_hideLabel":["validateHideLabel"],"_hasCounter":["validateHasCounter"],"_hint":["validateHint"],"_icons":["validateIcons"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_msg":["validateMsg"],"_name":["validateName"],"_on":["validateOn"],"_pattern":["validatePattern"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_shortKey":["validateShortKey"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-radio",[[289,"kol-input-radio",{"_disabled":[4],"_hideMsg":[4,"_hide-msg"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_label":[1],"_msg":[1],"_name":[1],"_on":[16],"_options":[1],"_orientation":[1],"_required":[4],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1544],"state":[32],"inputHasFocus":[32],"getValue":[64],"focus":[64],"click":[64]},null,{"_tooltipAlign":["validateTooltipAlign"],"_disabled":["validateDisabled"],"_hideLabel":["validateHideLabel"],"_hideMsg":["validateHideMsg"],"_hint":["validateHint"],"_label":["validateLabel"],"_msg":["validateMsg"],"_name":["validateName"],"_on":["validateOn"],"_options":["validateOptions"],"_orientation":["validateOrientation"],"_required":["validateRequired"],"_syncValueBySelector":["validateSyncValueBySelector"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-range",[[289,"kol-input-range",{"_accessKey":[1,"_access-key"],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_hideMsg":[4,"_hide-msg"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_label":[1],"_max":[8],"_min":[8],"_msg":[1],"_name":[1],"_on":[16],"_shortKey":[1,"_short-key"],"_step":[8],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1544],"state":[32],"_initialValueType":[32],"inputHasFocus":[32],"focus":[64],"click":[64],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_hideMsg":["validateHideMsg"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_label":["validateLabel"],"_max":["validateMax"],"_min":["validateMin"],"_msg":["validateMsg"],"_name":["validateName"],"_on":["validateOn"],"_shortKey":["validateShortKey"],"_step":["validateStep"],"_suggestions":["validateSuggestions"],"_syncValueBySelector":["validateSyncValueBySelector"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-text",[[289,"kol-input-text",{"_accessKey":[1,"_access-key"],"_autoComplete":[1,"_auto-complete"],"_hasCounter":[4,"_has-counter"],"_maxLengthBehavior":[1,"_max-length-behavior"],"_disabled":[4],"_hideMsg":[4,"_hide-msg"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_msg":[1],"_name":[1],"_on":[16],"_pattern":[1],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_shortKey":[1,"_short-key"],"_spellCheck":[4,"_spell-check"],"_suggestions":[1],"_smartButton":[1,"_smart-button"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_type":[1],"_value":[1537],"state":[32],"inputHasFocus":[32],"getValue":[64],"focus":[64],"click":[64],"selectionStart":[64],"selectioconEnd":[64],"setSelectionRange":[64],"setSelectionStart":[64],"setRangeText":[64]},null,{"_accessKey":["validateAccessKey"],"_autoComplete":["validateAutoComplete"],"_maxLengthBehavior":["validateMaxLengthBehavior"],"_disabled":["validateDisabled"],"_hideMsg":["validateHideMsg"],"_hideLabel":["validateHideLabel"],"_hasCounter":["validateHasCounter"],"_hint":["validateHint"],"_icons":["validateIcons"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_msg":["validateMsg"],"_name":["validateName"],"_on":["validateOn"],"_pattern":["validatePattern"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_shortKey":["validateShortKey"],"_spellCheck":["validateSpellCheck"],"_suggestions":["validateSuggestions"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_touched":["validateTouched"],"_type":["validateType"],"_value":["validateValue"]}]]],["kol-kolibri",[[289,"kol-kolibri",{"_color":[1],"_labeled":[4],"state":[32]},null,{"_color":["validateColor"],"_labeled":["validateLabeled"]}]]],["kol-link",[[289,"kol-link",{"_accessKey":[1,"_access-key"],"_ariaCurrentValue":[1,"_aria-current-value"],"_ariaControls":[1,"_aria-controls"],"_ariaDescription":[1,"_aria-description"],"_ariaExpanded":[4,"_aria-expanded"],"_disabled":[4],"_download":[1],"_hideLabel":[4,"_hide-label"],"_href":[1],"_icons":[1],"_inline":[4],"_label":[1],"_on":[16],"_role":[1],"_shortKey":[1,"_short-key"],"_target":[1],"_tooltipAlign":[1,"_tooltip-align"],"_variant":[1],"focus":[64]}]]],["kol-link-button",[[289,"kol-link-button",{"_accessKey":[1,"_access-key"],"_ariaCurrentValue":[1,"_aria-current-value"],"_ariaControls":[1,"_aria-controls"],"_ariaDescription":[1,"_aria-description"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_download":[1],"_hideLabel":[4,"_hide-label"],"_href":[1],"_icons":[1],"_label":[1],"_on":[16],"_role":[1],"_shortKey":[1,"_short-key"],"_target":[1],"_tooltipAlign":[1,"_tooltip-align"],"_variant":[1],"focus":[64],"click":[64]}]]],["kol-link-wc",[[260,"kol-link-wc",{"_accessKey":[1,"_access-key"],"_ariaCurrentValue":[1,"_aria-current-value"],"_ariaControls":[1,"_aria-controls"],"_ariaDescription":[1,"_aria-description"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaOwns":[1,"_aria-owns"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_download":[1],"_hideLabel":[4,"_hide-label"],"_href":[1],"_icons":[1],"_inline":[4],"_label":[1],"_on":[16],"_role":[1],"_shortKey":[1,"_short-key"],"_tabIndex":[2,"_tab-index"],"_target":[1],"_tooltipAlign":[1,"_tooltip-align"],"_variant":[1],"state":[32],"focus":[64],"click":[64]},null,{"_accessKey":["validateAccessKey"],"_ariaCurrentValue":["validateAriaCurrentValue"],"_ariaControls":["validateAriaControls"],"_ariaDescription":["validateAriaDescription"],"_ariaExpanded":["validateAriaExpanded"],"_ariaOwns":["validateAriaOwns"],"_customClass":["validateCustomClass"],"_disabled":["validateDisabled"],"_download":["validateDownload"],"_hideLabel":["validateHideLabel"],"_href":["validateHref"],"_icons":["validateIcons"],"_inline":["validateInline"],"_label":["validateLabel"],"_on":["validateOn"],"_role":["validateRole"],"_shortKey":["validateShortKey"],"_tabIndex":["validateTabIndex"],"_target":["validateTarget"],"_tooltipAlign":["validateTooltipAlign"],"_variant":["validateVariantClassName"]}]]],["kol-meter",[[801,"kol-meter",{"_high":[2],"_label":[1],"_low":[2],"_max":[2],"_min":[2],"_optimum":[2],"_orientation":[1],"_unit":[1],"_value":[2],"liveValue":[32]},null,{"_high":["watchHigh"],"_label":["watchLabel"],"_low":["watchLow"],"_max":["watchMax"],"_min":["watchMin"],"_optimum":["watchOptimum"],"_orientation":["watchOrientation"],"_unit":["watchUnit"],"_value":["watchValue"]}]]],["kol-modal",[[289,"kol-modal",{"_label":[1],"_on":[16],"_width":[1],"_variant":[1],"openModal":[64],"closeModal":[64]}]]],["kol-nav",[[289,"kol-nav",{"_collapsible":[4],"_hasCompactButton":[4,"_has-compact-button"],"_hasIconsWhenExpanded":[4,"_has-icons-when-expanded"],"_hideLabel":[4,"_hide-label"],"_label":[1],"_links":[1],"state":[32]},null,{"_collapsible":["validateCollapsible"],"_hasCompactButton":["validateHasCompactButton"],"_hasIconsWhenExpanded":["validateHasIconsWhenExpanded"],"_hideLabel":["validateHideLabel"],"_label":["validateLabel"],"_links":["validateLinks"]}]]],["kol-pagination",[[289,"kol-pagination",{"_boundaryCount":[2,"_boundary-count"],"_customClass":[1,"_custom-class"],"_label":[1],"_hasButtons":[8,"_has-buttons"],"_page":[2],"_pageSize":[1026,"_page-size"],"_pageSizeOptions":[1,"_page-size-options"],"_on":[16],"_siblingCount":[2,"_sibling-count"],"_tooltipAlign":[1,"_tooltip-align"],"_max":[2]}]]],["kol-pagination-wc",[[256,"kol-pagination-wc",{"_boundaryCount":[2,"_boundary-count"],"_customClass":[1,"_custom-class"],"_label":[1],"_hasButtons":[8,"_has-buttons"],"_page":[2],"_pageSize":[1026,"_page-size"],"_pageSizeOptions":[1,"_page-size-options"],"_on":[16],"_siblingCount":[2,"_sibling-count"],"_tooltipAlign":[1,"_tooltip-align"],"_max":[2],"state":[32]},null,{"_boundaryCount":["validateBoundaryCount"],"_customClass":["validateCustomClass"],"_label":["validateLabel"],"_hasButtons":["validateHasButtons"],"_on":["validateOn"],"_page":["validatePage"],"_pageSize":["validatePageSize"],"_pageSizeOptions":["validatePageSizeOptions"],"_siblingCount":["validateSiblingCount"],"_max":["validateMax"],"_tooltipAlign":["validateTooltipAlign"]}]]],["kol-popover-button",[[289,"kol-popover-button",{"_accessKey":[1,"_access-key"],"_ariaDescription":[1,"_aria-description"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_inline":[4],"_label":[1],"_name":[1],"_popoverAlign":[1,"_popover-align"],"_shortKey":[1,"_short-key"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1],"hidePopover":[64],"showPopover":[64],"click":[64],"focus":[64]}]]],["kol-popover-button-wc",[[260,"kol-popover-button-wc",{"_accessKey":[1,"_access-key"],"_ariaDescription":[1,"_aria-description"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_inline":[4],"_label":[1],"_name":[1],"_popoverAlign":[1,"_popover-align"],"_shortKey":[1,"_short-key"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1],"state":[32],"popoverOpen":[32],"hidePopover":[64],"showPopover":[64],"focus":[64],"click":[64]},null,{"_inline":["validateInline"],"_popoverAlign":["validatePopoverAlign"]}]]],["kol-progress",[[801,"kol-progress",{"_label":[1],"_max":[2],"_unit":[1],"_value":[2],"_variant":[1],"liveValue":[32]},null,{"_label":["watchLabel"],"_max":["watchMax"],"_unit":["watchUnit"],"_value":["watchValue"],"_variant":["watchVariant"]}]]],["kol-quote",[[289,"kol-quote",{"_href":[1],"_label":[1],"_quote":[1],"_variant":[1]},null,{"_href":["watchHref"],"_label":["watchLabel"],"_quote":["watchQuote"],"_variant":["watchVariant"]}]]],["kol-select",[[289,"kol-select",{"_accessKey":[1,"_access-key"],"_disabled":[4],"_hideMsg":[4,"_hide-msg"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_label":[1],"_msg":[1],"_multiple":[4],"_name":[1],"_on":[16],"_options":[1],"_required":[4],"_shortKey":[1,"_short-key"],"_rows":[2],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1544],"getValue":[64],"focus":[64]}]]],["kol-select-wc",[[256,"kol-select-wc",{"_accessKey":[1,"_access-key"],"_disabled":[4],"_hideMsg":[4,"_hide-msg"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_label":[1],"_msg":[1],"_multiple":[4],"_name":[1],"_on":[16],"_options":[1],"_required":[4],"_shortKey":[1,"_short-key"],"_rows":[2],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1544],"state":[32],"inputHasFocus":[32],"getValue":[64],"focus":[64],"click":[64]},null,{"_accessKey":["validateAccessKey"],"_disabled":["validateDisabled"],"_hideMsg":["validateHideMsg"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_label":["validateLabel"],"_msg":["validateMsg"],"_multiple":["validateMultiple"],"_name":["validateName"],"_on":["validateOn"],"_options":["validateOptions"],"_required":["validateRequired"],"_rows":["validateRows"],"_shortKey":["validateShortKey"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-single-select",[[289,"kol-single-select",{"_accessKey":[1,"_access-key"],"_placeholder":[1],"_disabled":[4],"_hideMsg":[4,"_hide-msg"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_label":[1],"_msg":[1],"_name":[1],"_on":[16],"_options":[1],"_required":[4],"_shortKey":[1,"_short-key"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1544],"_hasClearButton":[4,"_has-clear-button"],"_rows":[2],"_isOpen":[32],"_filteredOptions":[32],"_inputValue":[32],"blockSuggestionMouseOver":[32],"state":[32],"inputHasFocus":[32],"getValue":[64],"focus":[64]},[[0,"focusout","handleFocusOut"],[0,"blur","handleWindowBlur"],[0,"keydown","handleKeyDown"],[1,"mousemove","handleMouseEvent"]],{"_placeholder":["validatePlaceholder"],"_accessKey":["validateAccessKey"],"_disabled":["validateDisabled"],"_hideMsg":["validateHideMsg"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_label":["validateLabel"],"_msg":["validateMsg"],"_name":["validateName"],"_on":["validateOn"],"_options":["validateOptions"],"_required":["validateRequired"],"_shortKey":["validateShortKey"],"_syncValueBySelector":["validateSyncValueBySelector"],"_touched":["validateTouched"],"_value":["validateValue"],"_hasClearButton":["validateHasClearButton"],"_rows":["validateRows"]}]]],["kol-skeleton",[[769,"kol-skeleton",{"_name":[1],"count":[32],"label":[32],"show":[32],"focus":[64],"toggle":[64]},[[0,"keydown","handleKeyDown"],[8,"keydown","onKeydown"]],{"_name":["watchName"]}]]],["kol-skip-nav",[[289,"kol-skip-nav",{"_label":[1],"_links":[1],"state":[32],"focus":[64]},null,{"_label":["validateLabel"],"_links":["validateLinks"]}]]],["kol-spin",[[801,"kol-spin",{"_show":[4],"_label":[1],"_variant":[1],"showToggled":[32]},null,{"_show":["watchShow"],"_label":["watchLabel"],"_variant":["watchVariant"]}]]],["kol-split-button",[[289,"kol-split-button",{"_accessKey":[1,"_access-key"],"_ariaControls":[1,"_aria-controls"],"_ariaDescription":[1,"_aria-description"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_shortKey":[1,"_short-key"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1],"state":[32],"getValue":[64],"focus":[64],"click":[64],"closePopup":[64]}]]],["kol-table-settings-wc",[[256,"kol-table-settings-wc",{"_horizontalHeaderCells":[16],"headerCells":[32],"editingHeaderCells":[32],"errorMessage":[32]},null,{"_horizontalHeaderCells":["handleHeaderCellsChange"]}]]],["kol-table-stateful",[[289,"kol-table-stateful",{"_allowMultiSort":[4,"_allow-multi-sort"],"_data":[1],"_dataFoot":[1,"_data-foot"],"_fixedCols":[16],"_headers":[1],"_label":[1],"_pagination":[8],"_paginationPosition":[1,"_pagination-position"],"_selection":[1],"_on":[16],"_hasSettingsMenu":[4,"_has-settings-menu"],"state":[32],"getSelection":[64]},null,{"_allowMultiSort":["validateAllowMultiSort"],"_data":["validateData"],"_dataFoot":["validateDataFoot"],"_fixedCols":["validateFixedCols"],"_paginationPosition":["validatePaginationPosition"],"_hasSettingsMenu":["validateHasSettingsMenu"],"_headers":["validateHeaders"],"_label":["validateLabel"],"_selection":["validateSelection"],"_on":["validateOn"],"_pagination":["validatePagination"]}]]],["kol-table-stateless",[[289,"kol-table-stateless",{"_data":[1],"_dataFoot":[1,"_data-foot"],"_fixedCols":[16],"_headerCells":[1,"_header-cells"],"_label":[1],"_on":[16],"_selection":[1],"_hasSettingsMenu":[4,"_has-settings-menu"]}]]],["kol-table-stateless-wc",[[256,"kol-table-stateless-wc",{"_data":[1],"_dataFoot":[1,"_data-foot"],"_fixedCols":[16],"_headerCells":[1,"_header-cells"],"_label":[1],"_on":[16],"_selection":[1],"_hasSettingsMenu":[4,"_has-settings-menu"],"state":[32],"tableDivElementHasScrollbar":[32],"stickyColsDisabled":[32],"previousHeaderCells":[32]},[[0,"keydown","handleKeyDown"],[0,"changeheadercells","handleSettingsChange"]],{"_hasSettingsMenu":["validateHasSettingsMenu"],"_data":["validateData"],"_dataFoot":["validateDataFoot"],"_fixedCols":["validateFixedCols"],"_headerCells":["validateHeaderCells"],"_label":["validateLabel"],"_on":["validateOn"],"_selection":["validateSelection"]}]]],["kol-tabs",[[289,"kol-tabs",{"_align":[1],"_behavior":[1],"_hasCreateButton":[4,"_has-create-button"],"_label":[1],"_on":[16],"_selected":[1538],"_tabs":[1],"state":[32],"focus":[64],"click":[64]},null,{"_align":["validateAlign"],"_behavior":["validateBehavior"],"_hasCreateButton":["validateHasCreateButton"],"_label":["validateLabel"],"_on":["validateOn"],"_selected":["validateSelected"],"_tabs":["validateTabs"]}]]],["kol-textarea",[[289,"kol-textarea",{"_accessKey":[1,"_access-key"],"_adjustHeight":[4,"_adjust-height"],"_disabled":[4],"_hideMsg":[4,"_hide-msg"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_hasCounter":[4,"_has-counter"],"_maxLengthBehavior":[1,"_max-length-behavior"],"_msg":[1],"_name":[1],"_on":[16],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_resize":[1],"_required":[4],"_rows":[1026],"_shortKey":[1,"_short-key"],"_spellCheck":[4,"_spell-check"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1537],"state":[32],"inputHasFocus":[32],"getValue":[64],"focus":[64],"click":[64]},null,{"_accessKey":["validateAccessKey"],"_adjustHeight":["validateAdjustHeight"],"_disabled":["validateDisabled"],"_hideMsg":["validateHideMsg"],"_hideLabel":["validateHideLabel"],"_hasCounter":["validateHasCounter"],"_hint":["validateHint"],"_icons":["validateIcons"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_maxLengthBehavior":["validateMaxLengthBehavior"],"_msg":["validateMsg"],"_name":["validateName"],"_on":["validateOn"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_resize":["validateResize"],"_required":["validateRequired"],"_rows":["validateRows"],"_shortKey":["validateShortKey"],"_spellCheck":["validateSpellCheck"],"_syncValueBySelector":["validateSyncValueBySelector"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-toast-container",[[289,"kol-toast-container",{"state":[32],"enqueue":[64],"closeAll":[64]}]]],["kol-toolbar",[[289,"kol-toolbar",{"_label":[1],"_items":[16],"_orientation":[1],"state":[32],"currentIndex":[32],"focus":[64],"click":[64]},[[0,"keydown","handleKeyDown"],[2,"blur","handleBlur"]],{"_label":["validateLabel"],"_items":["validateItems"],"_orientation":["validateOrientation"]}]]],["kol-tooltip-wc",[[256,"kol-tooltip-wc",{"_badgeText":[1,"_badge-text"],"_align":[1],"_id":[1],"_label":[1],"hideTooltip":[64]},null,{"_align":["validateAlign"],"_id":["validateId"],"_label":["validateLabel"]}]]],["kol-tree",[[289,"kol-tree",{"_label":[1],"focus":[64]}]]],["kol-tree-item",[[289,"kol-tree-item",{"_active":[4],"_label":[1],"_open":[4],"_href":[1],"focus":[64],"expand":[64],"collapse":[64],"isOpen":[64]}]]],["kol-tree-item-wc",[[260,"kol-tree-item-wc",{"_active":[4],"_label":[1],"_open":[4],"_href":[1],"level":[32],"state":[32],"focus":[64],"expand":[64],"collapse":[64],"isOpen":[64]},null,{"_active":["validateActive"],"_label":["validateLabel"],"_open":["validateOpen"],"_href":["validateHref"]}]]],["kol-tree-wc",[[260,"kol-tree-wc",{"_label":[1],"state":[32],"focus":[64],"invalidateOpenItemsCache":[64]},[[0,"keydown","handleKeyDown"],[0,"focusin","handleFocusIn"],[0,"focusout","handleFocusOut"]],{"_label":["validateLabel"]}]]],["kol-version",[[289,"kol-version",{"_label":[1],"state":[32]},null,{"_label":["validateLabel"]}]]],["test-component",[[0,"test-component"]]]]`),t)},_e={exports:{}},ve=_e.exports,ye;function be(){return ye?_e.exports:(ye=1,(function(e){(function(t,n){e.exports?e.exports=n():t.log=n()})(ve,function(){var e=function(){},t=`undefined`,n=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),r=[`trace`,`debug`,`info`,`warn`,`error`],i={},a=null;function o(e,t){var n=e[t];if(typeof n.bind==`function`)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch{return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function s(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function c(r){return r===`debug`&&(r=`log`),typeof console===t?!1:r===`trace`&&n?s:console[r]===void 0?console.log===void 0?e:o(console,`log`):o(console,r)}function l(){for(var n=this.getLevel(),i=0;i<r.length;i++){var a=r[i];this[a]=i<n?e:this.methodFactory(a,n,this.name)}if(this.log=this.debug,typeof console===t&&n<this.levels.SILENT)return`No console available for logging`}function u(e){return function(){typeof console!==t&&(l.call(this),this[e].apply(this,arguments))}}function d(e,t,n){return c(e)||u.apply(this,arguments)}function f(e,n){var o=this,s,c,u,f=`loglevel`;typeof e==`string`?f+=`:`+e:typeof e==`symbol`&&(f=void 0);function p(e){var n=(r[e]||`silent`).toUpperCase();if(!(typeof window===t||!f)){try{window.localStorage[f]=n;return}catch{}try{window.document.cookie=encodeURIComponent(f)+`=`+n+`;`}catch{}}}function m(){var e;if(!(typeof window===t||!f)){try{e=window.localStorage[f]}catch{}if(typeof e===t)try{var n=window.document.cookie,r=encodeURIComponent(f),i=n.indexOf(r+`=`);i!==-1&&(e=/^([^;]+)/.exec(n.slice(i+r.length+1))[1])}catch{}return o.levels[e]===void 0&&(e=void 0),e}}function h(){if(!(typeof window===t||!f)){try{window.localStorage.removeItem(f)}catch{}try{window.document.cookie=encodeURIComponent(f)+`=; expires=Thu, 01 Jan 1970 00:00:00 UTC`}catch{}}}function g(e){var t=e;if(typeof t==`string`&&o.levels[t.toUpperCase()]!==void 0&&(t=o.levels[t.toUpperCase()]),typeof t==`number`&&t>=0&&t<=o.levels.SILENT)return t;throw TypeError(`log.setLevel() called with invalid level: `+e)}o.name=e,o.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},o.methodFactory=n||d,o.getLevel=function(){return u??c??s},o.setLevel=function(e,t){return u=g(e),t!==!1&&p(u),l.call(o)},o.setDefaultLevel=function(e){c=g(e),m()||o.setLevel(e,!1)},o.resetLevel=function(){u=null,h(),l.call(o)},o.enableAll=function(e){o.setLevel(o.levels.TRACE,e)},o.disableAll=function(e){o.setLevel(o.levels.SILENT,e)},o.rebuild=function(){if(a!==o&&(s=g(a.getLevel())),l.call(o),a===o)for(var e in i)i[e].rebuild()},s=g(a?a.getLevel():`WARN`);var _=m();_!=null&&(u=g(_)),l.call(o)}a=new f,a.getLogger=function(e){if(typeof e!=`symbol`&&typeof e!=`string`||e===``)throw TypeError(`You must supply a name when creating a logger.`);var t=i[e];return t||=i[e]=new f(e,a.methodFactory),t};var p=typeof window===t?void 0:window.log;return a.noConflict=function(){return typeof window!==t&&window.log===a&&(window.log=p),a},a.getLoggers=function(){return i},a.default=a,a})})(_e),_e.exports)}be();var xe=(e,t)=>n=>n(e,t),Se=(e,t)=>n=>n(e,t,{append:!1}),O={A11yUi:{CSS_STYLE_CACHE:new Map,IS_TEST_ENVIRONMENT:(()=>{let e={},t=e.NODE_ENV===`test`,n=`VITEST`in e,r=`JEST_WORKER_ID`in e,i=`PLAYWRIGHT_TEST_BASE_URL`in e,a=e.CI===`true`,o=e.TEST===`true`||e.IS_TEST===`true`,s=typeof navigator<`u`&&navigator.webdriver===!0,c=typeof navigator<`u`&&/playwright|puppeteer|webdriver|selenium|testcafe/i.test(navigator.userAgent);return t||n||r||i||a||o||s||c})(),PERFORMANCE_MEASURES:new Map,STYLING_TASK_QUEUE:new Map,THEMES:new Map,showAverageTimes:()=>{let e={};for(let[t,n]of O.A11yUi.PERFORMANCE_MEASURES.entries())e[t]=[n.totalTime/n.count,n.count];let t=Object.entries(e).sort((e,t)=>t[1][0]-e[1][0]);return console.table(Object.fromEntries(t.map(([e,[t,n]])=>[e,{"avg (ms)":parseFloat(t.toFixed(2)),count:n}]))),e}}},Ce=new Set,we=new Map,Te=/--[^;]+/g,Ee=/:/,De=typeof MutationObserver<`u`,Oe=()=>{Math.min(25+Math.log2(O.A11yUi.STYLING_TASK_QUEUE.size+1)*20,250)},ke=(e,t)=>{let n=t.match(Te);if(Array.isArray(n)){n=n.filter(e=>Ee.test(e));let t=document.createElement(`style`);t.innerHTML=`.${e} {${n.join(`;`)}}`,document.querySelector(`head`)?.appendChild(t)}Ce.add(e)},Ae=(e,t)=>{let n=O.A11yUi.THEMES.get(e);if(n instanceof Map){let e=n.get(t);if(e!==void 0)return e}return``},je=e=>{let t=e.firstChild;if(!(!(t instanceof HTMLStyleElement)||t.dataset.themingFallback!==void 0))for(let t of Array.from(e.childNodes))if(t instanceof HTMLStyleElement&&t.tagName===`STYLE`&&t.dataset.themingFallback===void 0)e.removeChild(t);else break},Me=(e,t)=>{try{if(O.A11yUi.Theme?.mode===`ssr`)throw Error(`SSR`);e.adoptedStyleSheets=t.filter(e=>typeof e==`string`&&e.length>0).map(e=>{let t=we.get(e);return t||(t=new CSSStyleSheet,t.replaceSync(e),we.set(e,t)),t})}catch{for(let n=t.length-1;n>=0;n--){let r=t[n];if(typeof r!=`string`||r.length===0)continue;let i=t.length-1-n,a=document.createElement(`style`);switch(a.dataset.themingFallback=``,i){case 4:a.dataset.themingBaseA11y=``;break;case 3:a.dataset.themingBaseGlobal=``;break;case 2:a.dataset.themingBaseComponent=``;break;case 1:a.dataset.themingCustomGlobal=``;break;case 0:a.dataset.themingCustomComponent=``;break;default:a.dataset.themingUnknown=``;break}a.innerHTML=r,e.insertBefore(a,e.firstChild)}}},Ne=(e,t,n)=>{if(n===!1||n?.mode!==`before`&&n?.mode!==`after`)return;let r=Array.from(e.childNodes).filter(e=>e instanceof HTMLStyleElement&&e.tagName===`STYLE`),i;try{i=Array.from(e.adoptedStyleSheets)}catch{i=[]}if(!(r.length===0&&i.length===0))if(n.mode===`before`){let e=[...i.map(e=>Array.from(e.cssRules).map(e=>e.cssText).join(``)),...r.map(e=>e.innerHTML)];t.unshift(...e)}else r.forEach(e=>t.push(e.innerHTML)),i.forEach(e=>t.push(Array.from(e.cssRules).map(e=>e.cssText).join(``)))},Pe=(e,t,n)=>{let r=t.name||`default`,i;try{if(e.shadowRoot===null)throw Error(`ShadowRoot is null`);i=e.shadowRoot}catch{i=e}let a=O.A11yUi.CSS_STYLE_CACHE.get(r)?.get(e.tagName);if(a)Fe(e,i,a,n);else{let a=Ae(r,`PROPERTIES`),o=Ae(r,`GLOBAL`),s=Ae(r,e.tagName);Ce.has(r)===!1&&ke(r,o);let c=[a,o,s];if(Ne(i,c,t.encroachCss),t.cache===!0){let t=O.A11yUi.CSS_STYLE_CACHE.get(r);t||(t=new Map,O.A11yUi.CSS_STYLE_CACHE.set(r,t)),t.set(e.tagName,c)}Fe(e,i,c,n)}},Fe=(e,t,n,r)=>{let i=O.A11yUi.Theme?.loglevel===`debug`,a=i?performance.now():0;if(je(t),Me(t,n),Re(e),requestAnimationFrame(r),i){let t=performance.now()-a,n=O.A11yUi.PERFORMANCE_MEASURES.get(e.tagName);n?(n.count+=1,n.totalTime+=t):O.A11yUi.PERFORMANCE_MEASURES.set(e.tagName,{count:1,totalTime:t})}},Ie=e=>{let t=O.A11yUi.STYLING_TASK_QUEUE.get(e);if(t){let{resetCss:n,themeDetails:r}=t;Pe(e,r,n)}},Le={attributes:!0,attributeFilter:[],childList:!1,subtree:!1};De&&new MutationObserver((e,t)=>{let n=[];for(let t of e){let e=t.target;e.classList.contains(`hydrated`)&&O.A11yUi.STYLING_TASK_QUEUE.has(e)&&(Ie(e),n.push(e))}for(let e of n)t.observe(e,Le)})&&(Oe=()=>{});var Re=e=>{O.A11yUi.STYLING_TASK_QUEUE.delete(e),Oe()},ze=class{Prefix;Key;Tag;createTheme=(e,t)=>Se(e,t);createTranslation=(e,t)=>xe(e,t);constructor(e,t,n){this.Prefix=e,this.Key=Object.getOwnPropertyNames(t),this.Tag=Object.getOwnPropertyNames(n)}},Be;(function(e){e[e.error=0]=`error`,e[e.warning=1]=`warning`,e[e.info=2]=`info`,e[e.success=3]=`success`,e[e.message=4]=`message`,e[e.close=5]=`close`,e[e[`form-description`]=6]=`form-description`,e[e.of=7]=`of`,e[e.characters=8]=`characters`,e[e.new=9]=`new`,e[e[`no-entries`]=10]=`no-entries`,e[e[`change-order`]=11]=`change-order`,e[e[`action-running`]=12]=`action-running`,e[e[`action-done`]=13]=`action-done`,e[e[`page-first`]=14]=`page-first`,e[e[`page-back`]=15]=`page-back`,e[e[`page-next`]=16]=`page-next`,e[e[`page-last`]=17]=`page-last`,e[e[`entries-per-site`]=18]=`entries-per-site`,e[e[`page-current`]=19]=`page-current`,e[e[`page-selected`]=20]=`page-selected`,e[e[`page-per-site`]=21]=`page-per-site`,e[e[`logo-description`]=22]=`logo-description`,e[e[`live-value-bounded`]=23]=`live-value-bounded`,e[e[`live-value`]=24]=`live-value`,e[e[`open-link-in-tab`]=25]=`open-link-in-tab`,e[e[`kolibri-logo`]=26]=`kolibri-logo`})(Be||={});var Ve;(function(e){e[e.abbr=0]=`abbr`,e[e.accordion=1]=`accordion`,e[e.alert=2]=`alert`,e[e.avatar=3]=`avatar`,e[e.badge=4]=`badge`,e[e.breadcrumb=5]=`breadcrumb`,e[e.button=6]=`button`,e[e[`button-link`]=7]=`button-link`,e[e.card=8]=`card`,e[e.combobox=9]=`combobox`,e[e.details=10]=`details`,e[e.dialog=11]=`dialog`,e[e.drawer=12]=`drawer`,e[e.form=13]=`form`,e[e.heading=14]=`heading`,e[e.icon=15]=`icon`,e[e.image=16]=`image`,e[e[`input-checkbox`]=17]=`input-checkbox`,e[e[`input-color`]=18]=`input-color`,e[e[`input-date`]=19]=`input-date`,e[e[`input-email`]=20]=`input-email`,e[e[`input-file`]=21]=`input-file`,e[e[`input-number`]=22]=`input-number`,e[e[`input-password`]=23]=`input-password`,e[e[`input-radio`]=24]=`input-radio`,e[e[`input-range`]=25]=`input-range`,e[e[`input-text`]=26]=`input-text`,e[e.kolibri=27]=`kolibri`,e[e.link=28]=`link`,e[e[`link-button`]=29]=`link-button`,e[e.logo=30]=`logo`,e[e.meter=31]=`meter`,e[e.modal=32]=`modal`,e[e.nav=33]=`nav`,e[e.pagination=34]=`pagination`,e[e[`popover-button`]=35]=`popover-button`,e[e.progress=36]=`progress`,e[e.quote=37]=`quote`,e[e.select=38]=`select`,e[e[`single-select`]=39]=`single-select`,e[e[`skip-nav`]=40]=`skip-nav`,e[e.spin=41]=`spin`,e[e[`split-button`]=42]=`split-button`,e[e.symbol=43]=`symbol`,e[e.table=44]=`table`,e[e[`table-stateful`]=45]=`table-stateful`,e[e[`table-stateless`]=46]=`table-stateless`,e[e.tabs=47]=`tabs`,e[e.textarea=48]=`textarea`,e[e[`toast-container`]=49]=`toast-container`,e[e.toolbar=50]=`toolbar`,e[e.tooltip=51]=`tooltip`,e[e.tree=52]=`tree`,e[e[`tree-item`]=53]=`tree-item`})(Ve||={});var He=[`development`,`production`,`test`],Ue=`production`;(e=>{try{if(He.includes(e))Ue=e;else throw Error(`Invalid NODE_ENV value: ${e}. Expected one of ${He.join(`, `)}.`)}catch{Ue=`production`}})((()=>{try{let e=typeof process<`u`?`production`:void 0;if(e&&He.includes(e))return e}catch{}return`production`})());var We=()=>Ue===`development`,Ge=`color: white; background: #666; font-weight: bold; padding: .25em .5em; border-radius: 3px; border: 1px solid #000`,k=e=>Array.isArray(e)?e:[e],Ke=e=>`%c${e}`,qe=(e,t)=>typeof t==`string`&&t.length>0?`${Ke(e)} | ${t}`:Ke(e),A=(e,t)=>[qe(e,t?.classifier),`${Ge};${t?.overwriteStyle||``}`],j=e=>We()||e===!0,Je=new class{constructor(e){this.label=e}debug(e,t){j(t?.forceLog)&&console.debug(...A(this.label,t),...k(e))}info(e,t){j(t?.forceLog)&&console.info(...A(this.label,t),...k(e))}trace(e,t){j(t?.forceLog)&&console.trace(...A(this.label,t),...k(e))}warn(e,t){j(t?.forceLog)&&console.warn(...A(this.label,t),...k(e))}error(e,t){console.error(...A(this.label,t),...k(e))}throw(e,t){if(j(t?.forceLog))throw Error(...A(this.label,t),...k(e))}}(`KoliBri`),Ye=new Set;((e,t)=>{Ye.has(e)===!1&&(Ye.add(e),Je.debug([e],{classifier:`💻 dev`,forceLog:!1,overwriteStyle:`; background-color: #f09`}))})(`We appreciate any feedback, comments, screenshots, or demo links of an application based on KoliBri (kolibri@itzbund.de). Thank you!`);var M={exports:{}},Xe;function Ze(){if(Xe)return M.exports;Xe=1,M.exports=e,M.exports.arr=e,M.exports.obj=t,M.exports.css=n,M.exports.hex=r,M.exports.num=i;function e(e){var t=a(e);return t.length==3?t.concat(255):(t[3]=Math.round(t[3]),t)}function t(e){var t=a(e);return{r:t[0],g:t[1],b:t[2],a:t.length==3?255:Math.round(t[3])}}function n(e){var t=a(e);return t.length==3&&t.push(255),t[3]==255?`rgb(`+t[0]+`, `+t[1]+`, `+t[2]+`)`:t[3]==0?`rgba(`+t[0]+`, `+t[1]+`, `+t[2]+`, 0)`:`rgba(`+t[0]+`, `+t[1]+`, `+t[2]+`, `+String(t[3]/255).substr(1)+`)`}function r(e){var t=a(e);t.length==3&&t.push(255);var n=t[3]==255,r=o(t[0]),i=o(t[1]),c=o(t[2]),t=o(Math.round(t[3])),l=s(r,i,c,t);return n?l?`#`+r.charAt(0)+i.charAt(0)+c.charAt(0):`#`+r+i+c:l?`#`+r.charAt(0)+i.charAt(0)+c.charAt(0)+t.charAt(0):`#`+r+i+c+t}function i(e){var t=a(e);return t.length==3?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function a(e){return typeof e==`string`?(e=e.toLowerCase(),c(e)||u(e)||d(e)||g(e)||_(e)||[0,0,0,255]):p(e)||m(e)||h(e)||[0,0,0,255]}function o(e){var t=e.toString(16);return t.length==1?`0`+t:t}function s(e,t,n,r){var i=[`ff`,`00`,`11`,`22`,`33`,`44`,`55`,`66`,`77`,`88`,`99`,`aa`,`bb`,`cc`,`dd`,`ee`];return i.indexOf(e)!=-1&&i.indexOf(t)!=-1&&i.indexOf(n)!=-1&&i.indexOf(r)!=-1}function c(e){if(e==`red`)return[255,0,0];if(e==`green`)return[0,255,0];if(e==`blue`)return[0,0,255];if(e==`black`)return[0,0,0];if(e==`white`)return[255,255,255];if(e==`cyan`)return[0,255,255];if(e==`gray`||e==`grey`)return[128,128,128];if(e==`magenta`||e==`pink`)return[255,0,255];if(e==`yellow`)return[255,255,0]}function l(e){return e.length==1?parseInt(e+e,16):parseInt(e,16)}function u(e){var t=e.replace(/^#/,``),n=t.length;if(n==3||n==4){var r=l(t[0]),i=l(t[1]),a=l(t[2]),o=n==3?255:l(t[3]);return isNaN(r)||isNaN(i)||isNaN(a)||isNaN(o)?void 0:[r,i,a,o]}}function d(e){var t=e.replace(/^#/,``),n=t.length;if(n==6||n==8){var r=l(t.slice(0,2)),i=l(t.slice(2,4)),a=l(t.slice(4,6)),o=n==6?255:l(t.slice(6,8));return isNaN(r)||isNaN(i)||isNaN(a)||isNaN(o)?void 0:[r,i,a,o]}}function f(e,t){return typeof e!=`number`||t===!0&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function p(e){if(Object.prototype.toString.call(e)===`[object Object]`&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=f(e.r==null?e.red==null?0:e.red:e.r,!0),n=f(e.g==null?e.green==null?0:e.green:e.g,!0),r=f(e.b==null?e.blue==null?0:e.blue:e.b,!0),i=f(e.a==null?e.alpha==null?255:e.alpha:e.a,!0);if(t!=-1&&n!=-1&&r!=-1&&i!=-1)return[t,n,r,i]}}function m(e){if(Array.isArray(e)&&(e.length==3||e.length==4)){var t=f(e[0],!0),n=f(e[1],!0),r=f(e[2],!0),i=f(e[3]==null?255:e[3],!0);if(t!=-1&&n!=-1&&r!=-1&&i!=-1)return[t,n,r,i]}}function h(e){if(typeof e==`number`&&Math.floor(e)==e&&e<=4294967295&&e>=0){var t=e>>24&255;return[e>>16&255,e>>8&255,e&255,t]}}function g(e){if(e.substr(0,4)==`rgb(`){e=e.match(/^rgb\(([^)]+)\)/)[1];var t=e.split(/ *, */).map(Number),n=f(t[0],!0),r=f(t[1],!0),i=f(t[2],!0);if(n!=-1&&r!=-1&&i!=-1)return[n,r,i,255]}}function _(e){if(e.substr(0,5)==`rgba(`){e=e.match(/^rgba\(([^)]+)\)/)[1];var t=e.split(/ *, */).map(Number),n=f(t[0],!0),r=f(t[1],!0),i=f(t[2],!0),a=f(t[3]*255);if(n!=-1&&r!=-1&&i!=-1&&a!=-1)return[n,r,i,a]}}return M.exports}Ze(),new Event(`StateChange`);var Qe;(function(e){e.blur=`blur`,e.change=`change`,e.changeHeaderCells=`changeheadercells`,e.changePage=`changepage`,e.changePageSize=`changepagesize`,e.click=`click`,e.close=`close`,e.create=`create`,e.focus=`focus`,e.input=`input`,e.keydown=`keydown`,e.mousedown=`mousedown`,e.reset=`reset`,e.select=`select`,e.selectionChange=`selectionchange`,e.sort=`sort`,e.submit=`submit`,e.toggle=`toggle`})(Qe||={});var $e=new ze(`kol`,Be,Ve),N;(function(e){e[`Die Bundesregierung`]=`BReg`,e[`Bundesministerium der Finanzen`]=`BMF`,e[`Bundesministerium des Innern, für Bau und Heimat`]=`BMI`,e[`Auswärtiges Amt`]=`AA`,e[`Bundesministerium für Wirtschaft und Energie`]=`BMWi`,e[`Bundesministerium der Justiz und für Verbraucherschutz`]=`BMJV`,e[`Bundesministerium für Arbeit und Soziales`]=`BMAS`,e[`Bundesministerium der Verteidigung`]=`BMVg`,e[`Bundesministerium für Ernährung und Landwirtschaft`]=`BMEL`,e[`Bundesministerium für Familie, Senioren, Frauen und Jugend`]=`BMFSFJ`,e[`Bundesministerium für Gesundheit`]=`BMG`,e[`Bundesministerium für Verkehr und digitale Infrastruktur`]=`BMVI`,e[`Bundesministerium für Umwelt, Naturschutz und nukleare Sicherheit`]=`BMU`,e[`Bundesministerium für Bildung und Forschung`]=`BMBF`,e[`Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung`]=`BMZ`})(N||={});var P;(function(e){e[`Beschaffungsamt des Bundesministeriums des Innern`]=`BeschA`,e[`Bundesamt für Ausrüstung, Informationstechnik und Nutzung der Bundeswehr`]=`BAAINBw`,e[`Bundesamt für äußere Restitutionen`]=`BAR`,e[`Bundesamt für Bauwesen und Raumordnung`]=`BBR`,e[`Bundesamt für Bevölkerungsschutz und Katastrophenhilfe`]=`BBK`,e[`Bundesamt für Familie und zivilgesellschaftliche Aufgaben`]=`BAFzA`,e[`Bundesamt für Güterverkehr`]=`BAG`,e[`Bundesamt für Justiz`]=`BfJ`,e[`Bundesamt für Kartographie und Geodäsie`]=`BKG`,e[`Bundesamt für kerntechnische Entsorgungssicherheit`]=`BASE`,e[`Bundesamt für Migration und Flüchtlinge`]=`BAMF`,e[`Bundesamt für Sicherheit in der Informationstechnik`]=`BSI`,e[`Bundesamt für Verbraucherschutz und Lebensmittelsicherheit`]=`BVL`,e[`Bundesamt für Verfassungsschutz`]=`BfV`,e[`Bundesamt für Wirtschaft und Ausfuhrkontrolle`]=`BAFA`,e[`Bundesamt für zentrale Dienste und offene Vermögensfragen`]=`BADV`,e[`Bundesanstalt für Verwaltungsdienstleistungen`]=`BAV`,e.Bundesarchiv=`BArch`,e[`Bundesaufsichtsamt für Flugsicherung`]=`BAF`,e.Bundesausgleichsamt=`BAA`,e.Bundeskartellamt=`BKartA`,e.Bundeskriminalamt=`BKA`,e.Bundesnachrichtendienst=`BND`,e[`Bundesnetzagentur für Elektrizität, Gas, Telekommunikation, Post und Eisenbahnen`]=`BNetzA`,e.Bundespolizeipräsidium=`BPOLP`,e[`Bundesprüfstelle für jugendgefährdende Medien`]=`BPjM`,e.Bundessortenamt=`BSA`,e.Bundessprachenamt=`BSprA`,e[`Bundesamt für Soziale Sicherung`]=`BAS`,e.Bundesverwaltungsamt=`BVA`,e[`Bundeszentralamt für Steuern`]=`BZSt`,e[`Deutsches Patent- und Markenamt`]=`DPMA`,e[`Eisenbahn-Bundesamt`]=`EBA`,e.Generalzolldirektion=`GZD`,e[`Militärischer Abschirmdienst`]=`MAD`,e[`Zentrale Stelle für Informationstechnik im Sicherheitsbereich`]=`ZITiS`})(P||={});var F;(function(e){e[`Informationstechnikzentrum Bund`]=`ITZBund`,e[`Bundesanstalt für den Digitalfunk der Behörden und Organisationen mit Sicherheitsaufgaben`]=`BDBOS`,e[`Bundesanstalt für Landwirtschaft und Ernährung`]=`BLE`,e[`Bundesanstalt Technisches Hilfswerk`]=`THW`,e[`Bundesinstitut für Arzneimittel und Medizinprodukte`]=`BfArM`,e[`Bundesinstitut für Bevölkerungsforschung`]=`BiB`,e[`Bundesinstitut für Sportwissenschaft`]=`BISp`})(F||={});var I=new Map;I.set(N[`Die Bundesregierung`],[`Die`,`Bundesregierung`]),I.set(N[`Bundesministerium der Finanzen`],[`Bundesministerium`,`der Finanzen`]),I.set(N[`Bundesministerium des Innern, für Bau und Heimat`],[`Bundesministerium`,`des Inneren, für Bau`,`und Heimat`]),I.set(N[`Auswärtiges Amt`],[`Auswärtiges Amt`]),I.set(N[`Bundesministerium für Wirtschaft und Energie`],[`Bundesministerium`,`für Wirtschaft`,`und Energie`]),I.set(N[`Bundesministerium der Justiz und für Verbraucherschutz`],[`Bundesministerium`,`der Justiz und`,`für Verbraucherschutz`]),I.set(N[`Bundesministerium für Arbeit und Soziales`],[`Bundesministerium`,`für Arbeit und Soziales`]),I.set(N[`Bundesministerium der Verteidigung`],[`Bundesministerium`,`der Verteidigung`]),I.set(N[`Bundesministerium für Bildung und Forschung`],[`Bundesministerium`,`für Bildung`,`und Forschung`]),I.set(N[`Bundesministerium für Ernährung und Landwirtschaft`],[`Bundesministerium`,`für Ernährung`,`und Landwirtschaft`]),I.set(N[`Bundesministerium für Familie, Senioren, Frauen und Jugend`],[`Bundesministerium`,`für Familie, Senioren, Frauen`,`und Jugend`]),I.set(N[`Bundesministerium für Gesundheit`],[`Bundesministerium`,`für Gesundheit`]),I.set(N[`Bundesministerium für Umwelt, Naturschutz und nukleare Sicherheit`],[`Bundesministerium`,`für Umwelt, Naturschutz`,`und nukleare Sicherheit`]),I.set(N[`Bundesministerium für Verkehr und digitale Infrastruktur`],[`Bundesministerium`,`für Verkehr und`,`digitale Infrastruktur`]),I.set(N[`Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung`],[`Bundesministerium`,`für wirtschaftliche Zusammenarbeit`,`und Entwicklung`]),I.set(P[`Beschaffungsamt des Bundesministeriums des Innern`],[`Beschaffungsamt`,`des Bundesministeriums`,`des Innern`]),I.set(P[`Bundesamt für Ausrüstung, Informationstechnik und Nutzung der Bundeswehr`],[]),I.set(P[`Bundesamt für äußere Restitutionen`],[]),I.set(P[`Bundesamt für Bauwesen und Raumordnung`],[]),I.set(P[`Bundesamt für Bevölkerungsschutz und Katastrophenhilfe`],[`Bundesamt`,`für Bevölkerungsschutz`,`und Katastrophenhilfe`]),I.set(P[`Bundesamt für Familie und zivilgesellschaftliche Aufgaben`],[`Bundesamt`,`für Familie und`,`zivilgesellschaftliche Aufgaben`]),I.set(P[`Bundesamt für Güterverkehr`],[`Bundesamt`,`für Güterverkehr`]),I.set(P[`Bundesamt für Justiz`],[`Bundesamt für`,`Justiz`]),I.set(P[`Bundesamt für Kartographie und Geodäsie`],[`Bundesamt für`,`Kartographie und Geodäsie`]),I.set(P[`Bundesamt für kerntechnische Entsorgungssicherheit`],[`Bundesamt für`,`kerntechnische`,`Entsorgungssicherheit`]),I.set(P[`Bundesamt für Migration und Flüchtlinge`],[`Bundesamt`,`für Migration`,`und Flüchtlinge`]),I.set(P[`Bundesamt für Sicherheit in der Informationstechnik`],[`Bundesamt`,`für Sicherheit in der`,`Informationstechnik`]),I.set(P[`Bundesamt für Verbraucherschutz und Lebensmittelsicherheit`],[`Bundesamt für`,`Verbraucherschutz und`,`Lebensmittelsicherheit`]),I.set(P[`Bundesamt für Verfassungsschutz`],[`Bundesamt für`,`Verfassungsschutz`]),I.set(P[`Bundesamt für Wirtschaft und Ausfuhrkontrolle`],[`Bundesamt`,`für Wirtschaft`,`Ausfuhrkontrolle`]),I.set(P[`Bundesamt für zentrale Dienste und offene Vermögensfragen`],[`Bundesamt`,`für zentrale Dienste und`,`offene Vermögensfragen`]),I.set(P[`Bundesanstalt für Verwaltungsdienstleistungen`],[`Bundesanstalt`,`für Verwaltungsdienstleistungen`]),I.set(P.Bundesarchiv,[`Das`,`Bundesarchiv`]),I.set(P[`Bundesaufsichtsamt für Flugsicherung`],[`Bundesaufsichtsamt`,`für Flugsicherung`]),I.set(P.Bundesausgleichsamt,[`Bundesausgleichsamt`]),I.set(P.Bundeskartellamt,[`Bundeskartellamt`]),I.set(P.Bundeskriminalamt,[`Bundeskriminalamt`]),I.set(P.Bundesnachrichtendienst,[`Bundesnachrichtendienst`]),I.set(P[`Bundesnetzagentur für Elektrizität, Gas, Telekommunikation, Post und Eisenbahnen`],[`Bundesnetzagentur`]),I.set(P.Bundespolizeipräsidium,[`Bundespolizeipräsidium`]),I.set(P[`Bundesprüfstelle für jugendgefährdende Medien`],[`Bundesprüfstelle`,`für jugendgefährdende`,`Medien`]),I.set(P.Bundessortenamt,[`Bundessortenamt`]),I.set(P.Bundessprachenamt,[`Bundessprachenamt`]),I.set(P[`Bundesamt für Soziale Sicherung`],[`Bundesamt`,`für Soziale Sicherung`]),I.set(P.Bundesverwaltungsamt,[`Bundesverwaltungsamt`]),I.set(P[`Bundeszentralamt für Steuern`],[`Bundeszentralamt`,`für Steuern`]),I.set(P[`Deutsches Patent- und Markenamt`],[`Deutsches`,`Patent- und Markenamt`]),I.set(P[`Eisenbahn-Bundesamt`],[`Eisenbahn-Bundesamt`]),I.set(P.Generalzolldirektion,[`Generalzolldirektion`]),I.set(P[`Militärischer Abschirmdienst`],[`Bundesamt für den`,`Militärischen Abschirmdienst`]),I.set(P[`Zentrale Stelle für Informationstechnik im Sicherheitsbereich`],[`Zentrale Stelle`,`für Informationstechnik`,`im Sicherheitsbereich`]),I.set(F[`Informationstechnikzentrum Bund`],[`Informations`,`Technik`,`Zentrum Bund`]),I.set(F[`Bundesanstalt für den Digitalfunk der Behörden und Organisationen mit Sicherheitsaufgaben`],[`Bundesanstalt`,`für den Digitalfunk der Behörden und`,`Organisationen mit Sicherheitsaufgaben`]),I.set(F[`Bundesanstalt für Landwirtschaft und Ernährung`],[`Bundesanstalt für`,`Landwirtschaft und Ernährung`]),I.set(F[`Bundesanstalt Technisches Hilfswerk`],[`Bundesanstalt`,`Technisches Hilfswerk`]),I.set(F[`Bundesinstitut für Arzneimittel und Medizinprodukte`],[`Bundesinstitut`,`für Arzneimittel`,`und Medizinprodukte`]),I.set(F[`Bundesinstitut für Bevölkerungsforschung`],[`Bundesinstitut`,`für Bevölkerungsforschung`]),I.set(F[`Bundesinstitut für Sportwissenschaft`],[`Bundesinstitut`,`für Sportwissenschaft`]);var et=`@layer kol-theme-component {
  abbr:has(+ .kol-tooltip) {
    border-bottom: 1px dashed;
  }
}`,tt=`@layer kol-theme-component {
  .kol-accordion {
    background: none;
    border-radius: 0;
    border-bottom: 1px solid var(--kern-color-layout-border);
    border-top: 1px solid var(--kern-color-layout-border);
  }
  .kol-accordion__content {
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-x-small) var(--kern-metric-space-large) var(--kern-metric-space-x-small);
  }
  .kol-accordion.collapsible .kol-icon::before {
    content: "\\e925";
  }
  .kol-accordion .kol-button {
    padding: var(--kern-metric-space-default) var(--kern-metric-space-x-small);
  }
  .kol-accordion .kol-button:not(:disabled):hover, .kol-accordion .kol-button:not(:disabled):active {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
    cursor: pointer;
  }
  .kol-accordion .kol-button:not(:disabled, [tabindex="-1"]):focus-visible {
    border-radius: 0;
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-accordion .kol-button .kol-span__container {
    color: var(--kern-color-action-default);
    background: none;
    outline: none;
    display: flex;
    position: relative;
    width: 100%;
    width: 100%;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    border: none;
    text-align: left;
  }
  .kol-accordion .kol-button .kol-span__label {
    color: var(--kern-color-action-default);
    margin: 0;
    padding: 0;
    padding: calc(5 * 1rem / var(--kolibri-root-font-size, 16)) calc(8 * 1rem / var(--kolibri-root-font-size, 16)) 0 calc(3 * 1rem / var(--kolibri-root-font-size, 16)) 0;
    flex: 1;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-size: var(--kern-typography-font-size-adaptive-medium, 21px);
    font-weight: var(--kern-typography-font-weight-semi-bold, 600);
    line-height: var(--kern-typography-line-height-adaptive-medium, 24px);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
    overflow-wrap: break-word;
  }
  .kol-icon {
    transform: rotate(90deg);
    color: var(--kern-color-action-default, #1a3da5);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-button--disabled .kol-icon {
    color: var(--kern-color-action-default, #1a3da5);
  }
  .kol-icon {
    transition: 200ms transform cubic-bezier(0.65, 0, 0.35, 1);
  }
  .collapsible--open .kol-icon {
    transform: rotate(180deg);
  }
  .kol-headline {
    margin: 0;
  }
}`,nt=`@charset "UTF-8";
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
@layer kol-theme-component {
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
}`,rt=`@layer kol-theme-component {
  .kol-badge {
    border-radius: 4px;
    min-height: calc(32 * 1rem / var(--kolibri-root-font-size, 16));
    border: 1px solid currentColor;
  }
  .kol-badge--has-smart-button {
    align-items: center;
  }
  .kol-badge__label {
    align-items: center;
    font-size: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 500;
    line-height: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
    letter-spacing: 0;
    font-style: normal;
  }
  .kol-badge__label .kol-span__container {
    display: flex;
    display: inline-flex;
    padding: calc(2 * 1rem / var(--kolibri-root-font-size, 16)) calc(16 * 1rem / var(--kolibri-root-font-size, 16)) calc(2 * 1rem / var(--kolibri-root-font-size, 16)) calc(12 * 1rem / var(--kolibri-root-font-size, 16));
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-badge {
    /* should be included in the basis styling of the component package */
  }
  .kol-badge__smart-button button {
    color: inherit;
  }
}`,it=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
@layer kol-theme-component {
  .kol-link {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-default-padding-top, 6px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-default-padding-bottom, 2px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-medium, 18px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
    color: var(--kern-color-action-default);
    display: inline-flex;
    align-items: flex-start;
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-1);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-link__text {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-link .kol-span__container {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-link .kol-icon {
    color: var(--kern-color-action-default);
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-link:has(.kol-icon) {
    text-decoration: none;
  }
  .kol-link:has(.kol-icon):active .kol-span__label, .kol-link:has(.kol-icon):hover .kol-span__label {
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-3);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-link:has(.kol-icon) .kol-link__text,
  .kol-link:has(.kol-icon) .kol-span__label {
    text-decoration: none;
  }
  .kol-link:visited {
    color: var(--kern-color-action-visited);
  }
  .kol-link:visited .kol-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-link:not(.kol-link--disabled):focus {
    outline: none;
  }
  .kol-link:not(.kol-link--disabled):hover {
    text-decoration-thickness: var(--kern-3);
  }
  .kol-link:not(.kol-link--disabled):active {
    color: var(--kern-color-action-default, );
    text-decoration-thickness: var(--kern-3);
  }
  .kol-link:not(.kol-link--disabled):active .kern-icon {
    color: var(--kern-color-action-default);
  }
  .kol-link:not(.kol-link--disabled):visited {
    color: var(--kern-color-action-visited);
  }
  .kol-link:not(.kol-link--disabled):visited .kern-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-link--small {
    color: var(--kern-color-action-default);
    gap: var(--kern-metric-space-2x-small);
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-small-padding-top, 7px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-small-padding-bottom, 1px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-small, 16px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
  }
  .kol-link--small .kol-icon {
    width: var(--kern-metric-dimension-small);
    min-width: var(--kern-metric-dimension-small);
    height: var(--kern-metric-dimension-small);
    min-height: var(--kern-metric-dimension-small);
  }
  .kol-link:not(.kol-link--stretched):focus-visible {
    box-shadow: var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 2px var(--kern-color-action-on-default), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 4px var(--kern-color-action-focus-border-inside), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 6px var(--kern-color-action-focus-border-outside);
    outline-color: transparent;
    border-radius: var(--kern-metric-border-radius-small, 0.125rem);
    position: relative;
    z-index: 1;
  }
  .kol-link--external-link {
    flex-direction: row-reverse;
  }
  .kol-breadcrumb {
    font-size: calc(13 * 1rem / var(--kolibri-root-font-size, 16));
    line-height: 1.25;
  }
  .kol-breadcrumb__list {
    gap: 0;
  }
  .kol-breadcrumb__list-element {
    gap: 0;
    flex-wrap: nowrap;
  }
  .kol-breadcrumb__list-element-span {
    color: var(--kern-color-layout-text-default);
    padding: calc(5 * 1rem / var(--kolibri-root-font-size, 16)) calc(10 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-breadcrumb__icon {
    color: var(--kern-color-layout-text-muted);
    font-size: calc(14 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-link {
    color: var(--kern-color-layout-text-default);
    border-radius: var(--kern-metric-border-radius-large);
    padding: calc(5 * 1rem / var(--kolibri-root-font-size, 16)) calc(10 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
    justify-content: center;
    font-size: calc(13 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-link .kol-icon {
    font-size: calc(18 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-link:hover {
    color: var(--kern-color-action-default);
    background: var(--kern-color-layout-background-hued);
  }
  .kol-span__container {
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-span__label {
    text-decoration: underline;
  }
}`,at=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
@layer kol-theme-component {
  .kol-button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-default-padding-top, 6px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-default-padding-bottom, 2px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-medium, 18px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
    color: var(--kern-color-action-default);
    display: inline-flex;
    align-items: flex-start;
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-1);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-button__text {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-button .kol-span__container {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-button .kol-icon {
    color: var(--kern-color-action-default);
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-button:has(.kol-icon) {
    text-decoration: none;
  }
  .kol-button:has(.kol-icon):active .kol-span__label, .kol-button:has(.kol-icon):hover .kol-span__label {
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-3);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-button:has(.kol-icon) .kol-link__text,
  .kol-button:has(.kol-icon) .kol-span__label {
    text-decoration: none;
  }
  .kol-button:visited {
    color: var(--kern-color-action-visited);
  }
  .kol-button:visited .kol-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-button:not(.kol-button--disabled):focus {
    outline: none;
  }
  .kol-button:not(.kol-button--disabled):hover {
    text-decoration-thickness: var(--kern-3);
  }
  .kol-button:not(.kol-button--disabled):active {
    color: var(--kern-color-action-default, );
    text-decoration-thickness: var(--kern-3);
  }
  .kol-button:not(.kol-button--disabled):active .kern-icon {
    color: var(--kern-color-action-default);
  }
  .kol-button:not(.kol-button--disabled):visited {
    color: var(--kern-color-action-visited);
  }
  .kol-button:not(.kol-button--disabled):visited .kern-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-button--small {
    color: var(--kern-color-action-default);
    gap: var(--kern-metric-space-2x-small);
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-small-padding-top, 7px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-small-padding-bottom, 1px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-small, 16px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
  }
  .kol-button--small .kol-icon {
    width: var(--kern-metric-dimension-small);
    min-width: var(--kern-metric-dimension-small);
    height: var(--kern-metric-dimension-small);
    min-height: var(--kern-metric-dimension-small);
  }
  .kol-button:not(.kol-button--stretched):focus-visible {
    box-shadow: var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 2px var(--kern-color-action-on-default), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 4px var(--kern-color-action-focus-border-inside), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 6px var(--kern-color-action-focus-border-outside);
    outline-color: transparent;
    border-radius: var(--kern-metric-border-radius-small, 0.125rem);
    position: relative;
    z-index: 1;
  }
  .kol-button--external-link {
    flex-direction: row-reverse;
  }
  .kol-button {
    --color-mute-variant: var(--kern-color-feedback-info-background);
    --color-text: var(--kern-color-layout-text-default);
  }
}`,ot=`@layer kol-theme-component {
  .kol-button {
    --button-min-size: var(--kern-metric-dimension-x-large);
    --button-padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    font-size: var(--kern-typography-font-size-static-medium);
  }
  .kol-button:focus-visible {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-button:disabled {
    opacity: 0.4;
  }
  .kol-button--hide-label {
    --button-padding: var(--kern-metric-space-small);
  }
  .kol-button--inline {
    --button-min-size: 0;
  }
  .kol-button__text {
    color: var(--button-text-color);
    background-color: var(--button-text-background-color);
    border-color: var(--button-text-border-color);
    border-style: solid;
    border-radius: var(--kern-metric-border-radius-default);
    min-width: var(--button-min-size);
    min-height: var(--button-min-size);
    padding: var(--button-padding);
    border-width: var(--kern-metric-border-width-light);
  }
  .kol-button .kol-span__container {
    gap: var(--kern-metric-space-small);
  }
  .kol-button .kol-span__label {
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-button .kol-icon {
    font-size: var(--kern-metric-space-large);
  }
  .kol-button--primary {
    --button-text-background-color-default: var(--kern-color-action-default);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  .kol-button--primary:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-hover);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-hover);
  }
  .kol-button--primary:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-active);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-active);
  }
  .kol-button {
    /* Not specified in Kern! */
  }
  .kol-button--danger {
    --button-text-background-color-default: var(--kern-color-feedback-danger);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  @supports (color-mix: color) {
    .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 85%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: #a20d08;
    }
  }
  @supports (color-mix: color) {
    .kol-button--danger:not([disabled]):active {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 80%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-button--danger:not([disabled]):active {
      --button-text-background-color: #980c07;
    }
  }
  .kol-button .badge-text-hint {
    color: var(--button-text-background-color-default);
    background-color: var(--button-text-color);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-button .badge-text-hint, .kol-span .kol-span .kol-button .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  /* Normal button variants */
  .kol-button--secondary,
  .kol-link--secondary,
  .kol-button--normal,
  .kol-link--normal {
    --button-text-background-color-default: var(--kern-neutral-000);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-default);
  }
  .kol-button--secondary:not([disabled]):hover,
  .kol-link--secondary:not([disabled]):hover,
  .kol-button--normal:not([disabled]):hover,
  .kol-link--normal:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--secondary:not([disabled]):active,
  .kol-link--secondary:not([disabled]):active,
  .kol-button--normal:not([disabled]):active,
  .kol-link--normal:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  /* Ghost button variants */
  .kol-button--tertiary,
  .kol-link--tertiary,
  .kol-button--ghost,
  .kol-link--ghost {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-button--tertiary:not([disabled]):hover,
  .kol-link--tertiary:not([disabled]):hover,
  .kol-button--ghost:not([disabled]):hover,
  .kol-link--ghost:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--tertiary:not([disabled]):active,
  .kol-link--tertiary:not([disabled]):active,
  .kol-button--ghost:not([disabled]):active,
  .kol-link--ghost:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-button--tertiary:not(:has(.kol-icon)),
    .kol-link--tertiary:not(:has(.kol-icon)),
    .kol-button--ghost:not(:has(.kol-icon)),
    .kol-link--ghost:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-button--ghost:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--ghost:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-button--tertiary,
    .kol-link--tertiary,
    .kol-button--ghost,
    .kol-link--ghost {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not([disabled]):hover,
    .kol-link--tertiary:not([disabled]):hover,
    .kol-button--ghost:not([disabled]):hover,
    .kol-link--ghost:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
}`,st=`@layer kol-theme-component {
  .kol-button {
    --button-min-size: var(--kern-metric-dimension-x-large);
    --button-padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    font-size: var(--kern-typography-font-size-static-medium);
  }
  .kol-button:focus-visible {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-button:disabled {
    opacity: 0.4;
  }
  .kol-button--hide-label {
    --button-padding: var(--kern-metric-space-small);
  }
  .kol-button--inline {
    --button-min-size: 0;
  }
  .kol-button__text {
    color: var(--button-text-color);
    background-color: var(--button-text-background-color);
    border-color: var(--button-text-border-color);
    border-style: solid;
    border-radius: var(--kern-metric-border-radius-default);
    min-width: var(--button-min-size);
    min-height: var(--button-min-size);
    padding: var(--button-padding);
    border-width: var(--kern-metric-border-width-light);
  }
  .kol-button .kol-span__container {
    gap: var(--kern-metric-space-small);
  }
  .kol-button .kol-span__label {
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-button .kol-icon {
    font-size: var(--kern-metric-space-large);
  }
  .kol-button--primary {
    --button-text-background-color-default: var(--kern-color-action-default);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  .kol-button--primary:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-hover);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-hover);
  }
  .kol-button--primary:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-active);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-active);
  }
  .kol-button {
    /* Not specified in Kern! */
  }
  .kol-button--danger {
    --button-text-background-color-default: var(--kern-color-feedback-danger);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  @supports (color-mix: color) {
    .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 85%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: #a20d08;
    }
  }
  @supports (color-mix: color) {
    .kol-button--danger:not([disabled]):active {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 80%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-button--danger:not([disabled]):active {
      --button-text-background-color: #980c07;
    }
  }
  .kol-button .badge-text-hint {
    color: var(--button-text-background-color-default);
    background-color: var(--button-text-color);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-button .badge-text-hint, .kol-span .kol-span .kol-button .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  /* Normal button variants */
  .kol-button--secondary,
  .kol-link--secondary,
  .kol-button--normal,
  .kol-link--normal {
    --button-text-background-color-default: var(--kern-neutral-000);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-default);
  }
  .kol-button--secondary:not([disabled]):hover,
  .kol-link--secondary:not([disabled]):hover,
  .kol-button--normal:not([disabled]):hover,
  .kol-link--normal:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--secondary:not([disabled]):active,
  .kol-link--secondary:not([disabled]):active,
  .kol-button--normal:not([disabled]):active,
  .kol-link--normal:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  /* Ghost button variants */
  .kol-button--tertiary,
  .kol-link--tertiary,
  .kol-button--ghost,
  .kol-link--ghost {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-button--tertiary:not([disabled]):hover,
  .kol-link--tertiary:not([disabled]):hover,
  .kol-button--ghost:not([disabled]):hover,
  .kol-link--ghost:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--tertiary:not([disabled]):active,
  .kol-link--tertiary:not([disabled]):active,
  .kol-button--ghost:not([disabled]):active,
  .kol-link--ghost:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-button--tertiary:not(:has(.kol-icon)),
    .kol-link--tertiary:not(:has(.kol-icon)),
    .kol-button--ghost:not(:has(.kol-icon)),
    .kol-link--ghost:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-button--ghost:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--ghost:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-button--tertiary,
    .kol-link--tertiary,
    .kol-button--ghost,
    .kol-link--ghost {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not([disabled]):hover,
    .kol-link--tertiary:not([disabled]):hover,
    .kol-button--ghost:not([disabled]):hover,
    .kol-link--ghost:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-card {
    background: var(--kern-color-layout-background-default);
    box-shadow: var(--kol-card-box-shadow);
    border-radius: var(--kol-card-border-radius);
    padding: var(--kern-metric-space-small) var(--kern-metric-space-small) var(--kern-metric-space-large) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-default);
    border: var(--kern-metric-border-width-light, 1px) solid var(--layout-border);
  }
  .kol-card__header {
    padding: var(--kern-metric-space-default) 0 0;
  }
  .kol-card__content {
    padding-right: var(--kern-metric-space-default);
  }
  .kol-card__close-button {
    line-height: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-card__close-button .kol-button {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-card__close-button .kol-button:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-card__close-button .kol-button:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-card__close-button .kol-button:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-card__close-button .kol-button:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-card__close-button .kol-button {
      text-decoration-line: underline;
    }
    .kol-card__close-button .kol-button:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-card__close-button .kol-icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-card {
    --kol-card-border-radius: var(--kern-metric-border-radius-default);
  }
}`,ct=`@charset "UTF-8";
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
/* Shared styles for combobox and single-select */
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
@layer kol-theme-component {
  .badge-text-hint {
    color: var(--kern-color-layout-text-inverse);
    background-color: var(--kern-color-layout-text-muted);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .badge-text-hint, .kol-span .kol-span .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field {
    padding: var(--kern-metric-space-none);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--kern-typography-font-family-default);
  }
  .kol-form-field--read-only .kol-form-field__label, .kol-form-field--disabled .kol-form-field__label {
    opacity: 1;
    cursor: not-allowed;
  }
  .kol-form-field__label {
    color: var(--kern-color-layout-text-default);
    padding: var(--kern-metric-baseline-label-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-label-default-padding-bottom) var(--kern-metric-space-none);
    order: 1;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-form-field__label__read-only {
    display: none;
  }
  .kol-form-field__msg {
    order: 4;
  }
  .kol-form-field__msg .kol-alert__icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field__hint {
    color: var(--kern-color-layout-text-default);
    color: var(--kern-color-layout-text-muted, #404565);
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-body-default-padding-bottom) var(--kern-metric-space-none);
    order: 2;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    font-style: normal;
  }
  .kol-form-field__input {
    order: 3;
  }
  .kol-form-field__counter {
    color: var(--kern-color-feedback-loader);
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.25;
  }
  .kol-form-field--required .kol-form-field__label-text::after {
    padding-left: 0.125em;
  }
  .kol-form-field--required .kol-form-field__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-form-field--error {
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-danger);
  }
  .kol-input {
    color: var(--kern-color-layout-text-default);
    background: transparent;
    height: var(--kern-metric-dimension-x-large);
    font-family: var(--kern-typography-font-family-default);
    border: none;
  }
  .kol-input--readonly {
    color: var(--color-black-70);
  }
  .kol-input:disabled {
    opacity: 1;
    color: var(--color-black-60);
  }
  .kol-input:disabled::-moz-placeholder {
    color: var(--color-black-60);
  }
  .kol-input:disabled::placeholder {
    color: var(--color-black-60);
  }
  .kol-input-container {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small) var(--kern-metric-border-radius-small) 0 0;
    position: relative;
    padding: 0 var(--kern-metric-space-default);
    gap: 0;
    border: none;
    border-bottom: var(--kol-input-border-width) solid var(--kol-input-border-color);
    --kol-input-border-color: var(--kern-color-form-input-border);
    --kol-input-border-width: var(--kern-metric-border-width-default);
  }
  .kol-input-container:not(.kol-input-container--disabled):hover {
    box-shadow: 0 calc(-1 * var(--kern-metric-border-width-default)) 0 0 var(--kol-input-border-color) inset;
  }
  .kol-input-container:focus-within {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-border-color);
    border-radius: var(--kern-metric-border-radius-small);
    border-bottom-color: transparent;
  }
  .kol-input-container:focus-within:hover {
    box-shadow: none;
  }
  .kol-input-container:has(.kol-input--readonly) {
    background: inherit;
    --kol-input-border-color: var(--kern-color-layout-border);
    --kol-input-border-width: var(--kern-metric-border-width-light);
  }
  .kol-input-container:has(.kol-input--readonly) .kol-input--readonly {
    cursor: not-allowed;
  }
  .kol-input-container--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: not-allowed;
  }
  .kol-input-container--error {
    --kol-input-border-color: var(--kern-color-feedback-danger);
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-input-container__smart-button .kol-button {
    color: var(--kern-color-feedback-info, );
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
    border-left: 1px solid var(--border-color);
    transition: all 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-input-container__smart-button .kol-button:disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-input-container__smart-button .kol-button:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-input-container__smart-button .kol-button:focus {
    color: var(--kern-color-layout-background-default);
    background-color: var(--kern-color-form-input-border);
    outline: var(--kern-color-form-input-border) solid 2px;
    border: 1 solid var(--kern-color-form-input-border);
    outline-offset: 2px;
  }
  .kol-custom-suggestions-option {
    color: var(--kern-color-layout-text-default);
    display: flex;
    min-height: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
    padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    align-items: center;
    transition: 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-custom-suggestions-option:hover:not(:disabled) {
    background: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-hover));
  }
  .kol-custom-suggestions-option:focus:not(:disabled) {
    background: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-hover));
    outline: 0;
  }
  .kol-custom-suggestions-options-group {
    background: var(--kern-color-form-input-background);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
    right: calc(-1 * 1rem / var(--kolibri-root-font-size, 16));
    left: calc(-8 * 1rem / var(--kolibri-root-font-size, 16));
    max-height: calc(40 * 1rem / var(--kolibri-root-font-size, 16) * 5 + 2 * 1rem / var(--kolibri-root-font-size, 16));
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    padding: calc(4 * 1rem / var(--kolibri-root-font-size, 16)) 0;
    overflow-x: hidden;
    overflow-y: auto;
    border: 1px solid var(--kern-color-layout-border);
  }
  .kol-custom-suggestions-toggle {
    color: var(--kern-color-action-default);
    display: grid;
    place-items: center;
    transition: 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-custom-suggestions-toggle:focus {
    outline: 0;
  }
  .kol-input-container--error .kol-custom-suggestions-toggle:not(:disabled) {
    color: var(--kern-color-feedback-danger);
  }
  .kol-custom-suggestions-toggle:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-custom-suggestions-toggle .kol-icon {
    color: inherit;
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-single-select__group,
  .kol-combobox__group {
    display: inline-flex;
    width: 100%;
    align-items: center;
  }
  .kol-single-select__input,
  .kol-combobox__input {
    position: relative;
    padding: 0;
    flex-grow: 1;
    border: none;
  }
  .kol-input-container {
    padding-right: 0;
  }
}`,lt=`@layer kol-theme-component {
  .kol-button {
    color: var(--kern-color-action-default);
    min-height: var(--a11y-min-size);
    padding: var(--kern-metric-space-small) 0;
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-button:not(.kol-button--disabled):hover {
    background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button:focus {
    border-radius: 0;
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-button .kol-icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-details {
    border-bottom: 1px solid var(--kern-color-action-default);
    border-top: 1px solid var(--kern-color-action-default);
  }
  .kol-details__wrapper {
    padding-left: var(--kern-metric-space-large);
  }
  .kol-details.collapsible--open .kol-details__wrapper {
    padding-top: var(--kern-metric-space-small);
    padding-bottom: var(--kern-metric-space-small);
  }
}`,ut=`/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
@layer kol-theme-component {
  .kol-button {
    --button-min-size: var(--kern-metric-dimension-x-large);
    --button-padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    font-size: var(--kern-typography-font-size-static-medium);
  }
  .kol-button:focus-visible {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-button:disabled {
    opacity: 0.4;
  }
  .kol-button--hide-label {
    --button-padding: var(--kern-metric-space-small);
  }
  .kol-button--inline {
    --button-min-size: 0;
  }
  .kol-button__text {
    color: var(--button-text-color);
    background-color: var(--button-text-background-color);
    border-color: var(--button-text-border-color);
    border-style: solid;
    border-radius: var(--kern-metric-border-radius-default);
    min-width: var(--button-min-size);
    min-height: var(--button-min-size);
    padding: var(--button-padding);
    border-width: var(--kern-metric-border-width-light);
  }
  .kol-button .kol-span__container {
    gap: var(--kern-metric-space-small);
  }
  .kol-button .kol-span__label {
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-button .kol-icon {
    font-size: var(--kern-metric-space-large);
  }
  .kol-button--primary {
    --button-text-background-color-default: var(--kern-color-action-default);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  .kol-button--primary:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-hover);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-hover);
  }
  .kol-button--primary:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-active);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-active);
  }
  .kol-button {
    /* Not specified in Kern! */
  }
  .kol-button--danger {
    --button-text-background-color-default: var(--kern-color-feedback-danger);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  @supports (color-mix: color) {
    .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 85%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: #a20d08;
    }
  }
  @supports (color-mix: color) {
    .kol-button--danger:not([disabled]):active {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 80%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-button--danger:not([disabled]):active {
      --button-text-background-color: #980c07;
    }
  }
  .kol-button .badge-text-hint {
    color: var(--button-text-background-color-default);
    background-color: var(--button-text-color);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-button .badge-text-hint, .kol-span .kol-span .kol-button .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  /* Normal button variants */
  .kol-button--secondary,
  .kol-link--secondary,
  .kol-button--normal,
  .kol-link--normal {
    --button-text-background-color-default: var(--kern-neutral-000);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-default);
  }
  .kol-button--secondary:not([disabled]):hover,
  .kol-link--secondary:not([disabled]):hover,
  .kol-button--normal:not([disabled]):hover,
  .kol-link--normal:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--secondary:not([disabled]):active,
  .kol-link--secondary:not([disabled]):active,
  .kol-button--normal:not([disabled]):active,
  .kol-link--normal:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  /* Ghost button variants */
  .kol-button--tertiary,
  .kol-link--tertiary,
  .kol-button--ghost,
  .kol-link--ghost {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-button--tertiary:not([disabled]):hover,
  .kol-link--tertiary:not([disabled]):hover,
  .kol-button--ghost:not([disabled]):hover,
  .kol-link--ghost:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--tertiary:not([disabled]):active,
  .kol-link--tertiary:not([disabled]):active,
  .kol-button--ghost:not([disabled]):active,
  .kol-link--ghost:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-button--tertiary:not(:has(.kol-icon)),
    .kol-link--tertiary:not(:has(.kol-icon)),
    .kol-button--ghost:not(:has(.kol-icon)),
    .kol-link--ghost:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-button--ghost:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--ghost:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-button--tertiary,
    .kol-link--tertiary,
    .kol-button--ghost,
    .kol-link--ghost {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not([disabled]):hover,
    .kol-link--tertiary:not([disabled]):hover,
    .kol-button--ghost:not([disabled]):hover,
    .kol-link--ghost:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-card {
    background: var(--kern-color-layout-background-default);
    box-shadow: var(--kol-card-box-shadow);
    border-radius: var(--kol-card-border-radius);
    padding: var(--kern-metric-space-small) var(--kern-metric-space-small) var(--kern-metric-space-large) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-default);
    border: var(--kern-metric-border-width-light, 1px) solid var(--layout-border);
  }
  .kol-card__header {
    padding: var(--kern-metric-space-default) 0 0;
  }
  .kol-card__content {
    padding-right: var(--kern-metric-space-default);
  }
  .kol-card__close-button {
    line-height: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-card__close-button .kol-button {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-card__close-button .kol-button:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-card__close-button .kol-button:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-card__close-button .kol-button:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-card__close-button .kol-button:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-card__close-button .kol-button {
      text-decoration-line: underline;
    }
    .kol-card__close-button .kol-button:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-card__close-button .kol-icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-dialog__card {
    --kol-card-border-radius: var(--kern-metric-border-radius-large);
    --kol-card-box-shadow: 0 to-rem(24) to-rem(60) rgb(0, 0, 0, 0.3), 0 to-rem(8) to-rem(16) 0 rgb(0, 0, 0, 0.1);
    background: transparent;
  }
  .kol-dialog__card::backdrop {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .kol-dialog .kol-card__header {
    padding: var(--kern-metric-baseline-heading-medium-padding-top, 5px) var(--kern-metric-space-none, 0) var(--kern-metric-baseline-heading-medium-padding-bottom, 3px) var(--kern-metric-space-none, 0);
    font-size: var(--kern-typography-font-size-adaptive-medium, 21px);
    font-weight: var(--kern-typography-font-weight-semi-bold, 600);
    line-height: var(--kern-typography-line-height-adaptive-medium, 24px);
  }
}`,dt=`@layer kol-theme-component {
  .kol-button {
    --button-min-size: var(--kern-metric-dimension-x-large);
    --button-padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    font-size: var(--kern-typography-font-size-static-medium);
  }
  .kol-button:focus-visible {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-button:disabled {
    opacity: 0.4;
  }
  .kol-button--hide-label {
    --button-padding: var(--kern-metric-space-small);
  }
  .kol-button--inline {
    --button-min-size: 0;
  }
  .kol-button__text {
    color: var(--button-text-color);
    background-color: var(--button-text-background-color);
    border-color: var(--button-text-border-color);
    border-style: solid;
    border-radius: var(--kern-metric-border-radius-default);
    min-width: var(--button-min-size);
    min-height: var(--button-min-size);
    padding: var(--button-padding);
    border-width: var(--kern-metric-border-width-light);
  }
  .kol-button .kol-span__container {
    gap: var(--kern-metric-space-small);
  }
  .kol-button .kol-span__label {
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-button .kol-icon {
    font-size: var(--kern-metric-space-large);
  }
  .kol-button--primary {
    --button-text-background-color-default: var(--kern-color-action-default);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  .kol-button--primary:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-hover);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-hover);
  }
  .kol-button--primary:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-active);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-active);
  }
  .kol-button {
    /* Not specified in Kern! */
  }
  .kol-button--danger {
    --button-text-background-color-default: var(--kern-color-feedback-danger);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  @supports (color-mix: color) {
    .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 85%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: #a20d08;
    }
  }
  @supports (color-mix: color) {
    .kol-button--danger:not([disabled]):active {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 80%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-button--danger:not([disabled]):active {
      --button-text-background-color: #980c07;
    }
  }
  .kol-button .badge-text-hint {
    color: var(--button-text-background-color-default);
    background-color: var(--button-text-color);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-button .badge-text-hint, .kol-span .kol-span .kol-button .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  /* Normal button variants */
  .kol-button--secondary,
  .kol-link--secondary,
  .kol-button--normal,
  .kol-link--normal {
    --button-text-background-color-default: var(--kern-neutral-000);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-default);
  }
  .kol-button--secondary:not([disabled]):hover,
  .kol-link--secondary:not([disabled]):hover,
  .kol-button--normal:not([disabled]):hover,
  .kol-link--normal:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--secondary:not([disabled]):active,
  .kol-link--secondary:not([disabled]):active,
  .kol-button--normal:not([disabled]):active,
  .kol-link--normal:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  /* Ghost button variants */
  .kol-button--tertiary,
  .kol-link--tertiary,
  .kol-button--ghost,
  .kol-link--ghost {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-button--tertiary:not([disabled]):hover,
  .kol-link--tertiary:not([disabled]):hover,
  .kol-button--ghost:not([disabled]):hover,
  .kol-link--ghost:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--tertiary:not([disabled]):active,
  .kol-link--tertiary:not([disabled]):active,
  .kol-button--ghost:not([disabled]):active,
  .kol-link--ghost:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-button--tertiary:not(:has(.kol-icon)),
    .kol-link--tertiary:not(:has(.kol-icon)),
    .kol-button--ghost:not(:has(.kol-icon)),
    .kol-link--ghost:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-button--ghost:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--ghost:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-button--tertiary,
    .kol-link--tertiary,
    .kol-button--ghost,
    .kol-link--ghost {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not([disabled]):hover,
    .kol-link--tertiary:not([disabled]):hover,
    .kol-button--ghost:not([disabled]):hover,
    .kol-link--ghost:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-card {
    background: var(--kern-color-layout-background-default);
    box-shadow: var(--kol-card-box-shadow);
    border-radius: var(--kol-card-border-radius);
    padding: var(--kern-metric-space-small) var(--kern-metric-space-small) var(--kern-metric-space-large) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-default);
    border: var(--kern-metric-border-width-light, 1px) solid var(--layout-border);
  }
  .kol-card__header {
    padding: var(--kern-metric-space-default) 0 0;
  }
  .kol-card__content {
    padding-right: var(--kern-metric-space-default);
  }
  .kol-card__close-button {
    line-height: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-card__close-button .kol-button {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-card__close-button .kol-button:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-card__close-button .kol-button:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-card__close-button .kol-button:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-card__close-button .kol-button:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-card__close-button .kol-button {
      text-decoration-line: underline;
    }
    .kol-card__close-button .kol-button:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-card__close-button .kol-icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-drawer__wrapper {
    --kol-card-box-shadow: 0 to-rem(24) to-rem(60) rgb(0, 0, 0, 0.3), 0 to-rem(8) to-rem(16) 0 rgb(0, 0, 0, 0.1);
  }
  .kol-drawer__wrapper--left {
    --kol-card-border-radius: 0 var(--kern-metric-border-radius-large) var(--kern-metric-border-radius-large) 0;
  }
  .kol-drawer__wrapper--right {
    --kol-card-border-radius: var(--kern-metric-border-radius-large) 0 0 var(--kern-metric-border-radius-large);
  }
  .kol-drawer__wrapper--top {
    --kol-card-border-radius: 0 0 var(--kern-metric-border-radius-large) var(--kern-metric-border-radius-large);
  }
  .kol-drawer__wrapper--bottom {
    --kol-card-border-radius: var(--kern-metric-border-radius-large) var(--kern-metric-border-radius-large) 0 0;
  }
  .kol-drawer__wrapper .kol-card {
    border: 0;
  }
}`,ft=`@charset "UTF-8";
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
@layer kol-theme-component {
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-link {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-default-padding-top, 6px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-default-padding-bottom, 2px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-medium, 18px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
    color: var(--kern-color-action-default);
    display: inline-flex;
    align-items: flex-start;
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-1);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-link__text {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-link .kol-span__container {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-link .kol-icon {
    color: var(--kern-color-action-default);
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-link:has(.kol-icon) {
    text-decoration: none;
  }
  .kol-link:has(.kol-icon):active .kol-span__label, .kol-link:has(.kol-icon):hover .kol-span__label {
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-3);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-link:has(.kol-icon) .kol-link__text,
  .kol-link:has(.kol-icon) .kol-span__label {
    text-decoration: none;
  }
  .kol-link:visited {
    color: var(--kern-color-action-visited);
  }
  .kol-link:visited .kol-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-link:not(.kol-link--disabled):focus {
    outline: none;
  }
  .kol-link:not(.kol-link--disabled):hover {
    text-decoration-thickness: var(--kern-3);
  }
  .kol-link:not(.kol-link--disabled):active {
    color: var(--kern-color-action-default, );
    text-decoration-thickness: var(--kern-3);
  }
  .kol-link:not(.kol-link--disabled):active .kern-icon {
    color: var(--kern-color-action-default);
  }
  .kol-link:not(.kol-link--disabled):visited {
    color: var(--kern-color-action-visited);
  }
  .kol-link:not(.kol-link--disabled):visited .kern-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-link--small {
    color: var(--kern-color-action-default);
    gap: var(--kern-metric-space-2x-small);
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-small-padding-top, 7px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-small-padding-bottom, 1px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-small, 16px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
  }
  .kol-link--small .kol-icon {
    width: var(--kern-metric-dimension-small);
    min-width: var(--kern-metric-dimension-small);
    height: var(--kern-metric-dimension-small);
    min-height: var(--kern-metric-dimension-small);
  }
  .kol-link:not(.kol-link--stretched):focus-visible {
    box-shadow: var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 2px var(--kern-color-action-on-default), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 4px var(--kern-color-action-focus-border-inside), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 6px var(--kern-color-action-focus-border-outside);
    outline-color: transparent;
    border-radius: var(--kern-metric-border-radius-small, 0.125rem);
    position: relative;
    z-index: 1;
  }
  .kol-link--external-link {
    flex-direction: row-reverse;
  }
  .kol-form__mandatory-fields-hint {
    color: var(--kern-color-feedback-info);
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-info);
  }
}`,pt=`/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
@layer kol-theme-component {
  .kol-headline {
    margin: 0;
    line-height: 1.25;
  }
  .kol-headline--h1 {
    padding: var(--kern-metric-baseline-heading-x-large-padding-top, 9px) var(--kern-metric-space-none, 0) var(--kern-metric-baseline-heading-x-large-padding-bottom, 7px) var(--kern-metric-space-none, 0);
    font-size: var(--kern-typography-font-size-adaptive-x-large, 32px);
    font-weight: var(--kern-typography-font-weight-medium, 500);
    line-height: var(--kern-typography-line-height-adaptive-x-large, 40px);
  }
  .kol-headline--h2 {
    padding: var(--kern-metric-baseline-heading-large-padding-top, 7px) var(--kern-metric-space-none, 0) var(--kern-metric-baseline-heading-large-padding-bottom, 9px) var(--kern-metric-space-none, 0);
    font-size: var(--kern-typography-font-size-adaptive-large, 26px);
    font-weight: var(--kern-typography-font-weight-semi-bold, 600);
    line-height: var(--kern-typography-line-height-adaptive-large, 32px);
  }
  .kol-headline--h3 {
    padding: var(--kern-metric-baseline-heading-medium-padding-top, 5px) var(--kern-metric-space-none, 0) var(--kern-metric-baseline-heading-medium-padding-bottom, 3px) var(--kern-metric-space-none, 0);
    font-size: var(--kern-typography-font-size-adaptive-medium, 21px);
    font-weight: var(--kern-typography-font-weight-semi-bold, 600);
    line-height: var(--kern-typography-line-height-adaptive-medium, 24px);
  }
  .kol-headline--h4 {
    padding: var(--kern-metric-baseline-heading-small-padding-top, 6px) var(--kern-metric-space-none, 0) var(--kern-metric-baseline-heading-small-padding-bottom, 2px) var(--kern-metric-space-none, 0);
    font-size: var(--kern-typography-font-size-static-medium, 18px);
    font-weight: var(--kern-typography-font-weight-semi-bold, 600);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
  }
  .kol-headline--h5 {
    padding: var(--kern-metric-baseline-heading-small-padding-top, 6px) var(--kern-metric-space-none, 0) var(--kern-metric-baseline-heading-small-padding-bottom, 2px) var(--kern-metric-space-none, 0);
    font-size: var(--kern-typography-font-size-static-medium, 18px);
    font-weight: var(--kern-typography-font-weight-medium, 500);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
  }
  .kol-headline--h6 {
    padding: var(--kern-metric-baseline-heading-small-padding-top, 6px) var(--kern-metric-space-none, 0) var(--kern-metric-baseline-heading-small-padding-bottom, 2px) var(--kern-metric-space-none, 0);
    font-size: var(--kern-typography-font-size-static-medium, 18px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
  }
}`,mt=`@charset "UTF-8";
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
@layer kol-theme-component {
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-field-control__hint {
    color: var(--color-black-70);
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-field-control__label-text {
    color: var(--kern-color-layout-text-default);
    flex-flow: row;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-field-control--required .kol-field-control__label-text::after {
    padding-left: 0.125em;
  }
  .kol-field-control--required .kol-field-control__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-form-field {
    padding: var(--kern-metric-space-none);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--kern-typography-font-family-default);
  }
  .kol-form-field--read-only .kol-form-field__label, .kol-form-field--disabled .kol-form-field__label {
    opacity: 1;
    cursor: not-allowed;
  }
  .kol-form-field__label {
    color: var(--kern-color-layout-text-default);
    padding: var(--kern-metric-baseline-label-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-label-default-padding-bottom) var(--kern-metric-space-none);
    order: 1;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-form-field__label__read-only {
    display: none;
  }
  .kol-form-field__msg {
    order: 4;
  }
  .kol-form-field__msg .kol-alert__icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field__hint {
    color: var(--kern-color-layout-text-default);
    color: var(--kern-color-layout-text-muted, #404565);
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-body-default-padding-bottom) var(--kern-metric-space-none);
    order: 2;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    font-style: normal;
  }
  .kol-form-field__input {
    order: 3;
  }
  .kol-form-field__counter {
    color: var(--kern-color-feedback-loader);
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.25;
  }
  .kol-form-field--required .kol-form-field__label-text::after {
    padding-left: 0.125em;
  }
  .kol-form-field--required .kol-form-field__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-form-field--error {
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-danger);
  }
  .kol-checkbox__input, .kol-checkbox-input {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small);
    width: var(--kern-metric-dimension-large);
    height: var(--kern-metric-dimension-large);
    margin: 0;
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    border: var(--kern-metric-border-width-default) solid var(--kern-color-form-input-border);
  }
  .kol-checkbox__input:not(:disabled):hover, .kol-checkbox-input:not(:disabled):hover {
    border: var(--kern-metric-border-width-bold) solid var(--kern-color-form-input-border);
    transition: none;
  }
  .kol-checkbox__input:not(:disabled):focus, .kol-checkbox__input:not(:disabled):focus-visible, .kol-checkbox-input:not(:disabled):focus, .kol-checkbox-input:not(:disabled):focus-visible {
    box-shadow: 0 0 0 var(--kern-metric-border-width-bold) var(--kern-color-form-input-border);
    outline: 0;
    border: 0;
  }
  .kol-checkbox__input:not(:disabled):focus:hover, .kol-checkbox__input:not(:disabled):focus-visible:hover, .kol-checkbox-input:not(:disabled):focus:hover, .kol-checkbox-input:not(:disabled):focus-visible:hover {
    border: 0;
  }
  .kol-checkbox__input:not(:disabled):checked:focus, .kol-checkbox__input:not(:disabled):checked:focus-visible, .kol-checkbox-input:not(:disabled):checked:focus, .kol-checkbox-input:not(:disabled):checked:focus-visible {
    box-shadow: 0 0 0 var(--kern-metric-border-width-bold) var(--kern-color-form-input-border);
    outline: 0;
    border: 0;
  }
  .kol-checkbox__input:not(:disabled):checked:focus:hover, .kol-checkbox__input:not(:disabled):checked:focus-visible:hover, .kol-checkbox-input:not(:disabled):checked:focus:hover, .kol-checkbox-input:not(:disabled):checked:focus-visible:hover {
    border: 0;
  }
  .kol-checkbox__input[disabled], .kol-checkbox-input[disabled] {
    opacity: var(--kern-color-action-state-opacity-disabled);
    outline: 0;
  }
  .kol-checkbox__input[disabled]:checked, .kol-checkbox-input[disabled]:checked {
    outline: 0;
  }
  .kol-checkbox__input[disabled]:hover, .kol-checkbox-input[disabled]:hover {
    cursor: default;
  }
  .kol-checkbox__input[disabled] ~ .kern-label, .kol-checkbox-input[disabled] ~ .kern-label {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: default;
  }
  .kol-checkbox .kol-icon {
    display: flex;
    position: absolute;
    inset: auto;
    z-index: 1;
    font-size: calc(28 * 1rem / var(--kolibri-root-font-size, 16));
    pointer-events: none;
  }
  .kol-checkbox--disabled .kol-icon, .kol-checkbox-label--disabled .kol-icon {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-input-checkbox--label-align-right {
    padding-right: var(--kern-metric-space-default);
    gap: var(--kern-metric-space-small) var(--kern-metric-space-default);
  }
  /* Align left to the visual checkbox */
  :is(.kol-input-checkbox--label-align-right, .kol-form-field--hide-label) :is(.kol-alert, .kol-form-field__hint) {
    padding-left: calc(6 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-field-control {
    gap: var(--kern-metric-space-small) var(--kern-metric-space-default);
  }
  .kol-field-control--error .kol-checkbox .kol-input {
    background: var(--kern-color-feedback-danger-background);
    outline-color: var(--kern-color-feedback-danger);
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-field-control--error .kol-checkbox .kol-input:checked::before, .kol-field-control--error .kol-checkbox .kol-input:indeterminate::before {
    border-color: var(--kern-color-feedback-danger);
  }
  @media (forced-colors: active) {
    .kol-field-control--error .kol-checkbox .kol-input:checked::before, .kol-field-control--error .kol-checkbox .kol-input:indeterminate::before {
      border-color: var(--kern-color-layout-background-inverted);
    }
  }
  .kol-field-control--error .kol-checkbox .kol-input:checked:focus, .kol-field-control--error .kol-checkbox .kol-input:checked:focus-visible, .kol-field-control--error .kol-checkbox .kol-input:indeterminate:focus, .kol-field-control--error .kol-checkbox .kol-input:indeterminate:focus-visible {
    box-shadow: 0 0 0 var(--kern-metric-border-width-bold, 4px) var(--kern-color-feedback-danger);
    outline: var(--kern-metric-border-width-none, 0);
    border: var(--kern-metric-border-width-none, 0);
  }
  .kol-field-control--error .kol-checkbox .kol-input:focus, .kol-field-control--error .kol-checkbox .kol-input:focus-visible {
    box-shadow: 0 0 0 var(--kern-metric-border-width-bold, 4px) var(--kern-color-feedback-danger);
    outline: var(--kern-metric-border-width-none, 0);
    border: var(--kern-metric-border-width-none, 0);
  }
  .kol-checkbox--variant-switch .kol-icon {
    top: calc(14 * 1rem / var(--kolibri-root-font-size, 16));
    left: calc(2 * 1rem / var(--kolibri-root-font-size, 16));
    width: 1.25em;
    height: 1.25em;
    font-size: inherit;
  }
  .kol-checkbox--variant-switch .kol-input {
    background-color: var(--kern-color-feedback-loader-background);
    /* Visible with forced colors  */
    outline: transparent solid calc(1 * 1rem / var(--kolibri-root-font-size, 16));
    border-radius: 1.25em;
    display: block;
    position: relative;
    width: 3.5em;
    min-width: 3.5em;
    height: 1.5em;
    border-width: 0;
  }
  .kol-checkbox--variant-switch .kol-input:hover {
    outline-color: var(--kern-color-form-input-border, #171a2b);
    outline-style: solid;
    outline-width: var(--kern-metric-border-width-bold, 4px);
    border: 0;
    outline-offset: 0;
  }
  .kol-checkbox--variant-switch .kol-input:before {
    background-color: white;
    border-radius: 1.25em;
    position: absolute;
    top: calc(0.25em - 2 * 1rem / var(--kolibri-root-font-size, 16));
    left: calc(0.25em - 2 * 1rem / var(--kolibri-root-font-size, 16));
    width: 1.25em;
    height: 1.25em;
    margin: 0 !important;
  }
  .kol-checkbox--variant-switch .kol-input:checked {
    background-color: var(--kern-color-feedback-loader);
  }
  .kol-checkbox--variant-switch .kol-input:checked::before {
    transform: translateX(2em);
  }
  .kol-checkbox--variant-switch .kol-input:indeterminate::before {
    transform: translateX(1em);
  }
  .kol-checkbox--variant-switch.kol-checkbox--checked .kol-icon {
    transform: translate(2em, -50%);
  }
  .kol-checkbox--variant-switch.kol-checkbox--indeterminate .kol-icon {
    transform: translate(1em, -50%);
  }
}`,ht=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
@layer kol-theme-component {
  .badge-text-hint {
    color: var(--kern-color-layout-text-inverse);
    background-color: var(--kern-color-layout-text-muted);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .badge-text-hint, .kol-span .kol-span .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field {
    padding: var(--kern-metric-space-none);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--kern-typography-font-family-default);
  }
  .kol-form-field--read-only .kol-form-field__label, .kol-form-field--disabled .kol-form-field__label {
    opacity: 1;
    cursor: not-allowed;
  }
  .kol-form-field__label {
    color: var(--kern-color-layout-text-default);
    padding: var(--kern-metric-baseline-label-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-label-default-padding-bottom) var(--kern-metric-space-none);
    order: 1;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-form-field__label__read-only {
    display: none;
  }
  .kol-form-field__msg {
    order: 4;
  }
  .kol-form-field__msg .kol-alert__icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field__hint {
    color: var(--kern-color-layout-text-default);
    color: var(--kern-color-layout-text-muted, #404565);
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-body-default-padding-bottom) var(--kern-metric-space-none);
    order: 2;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    font-style: normal;
  }
  .kol-form-field__input {
    order: 3;
  }
  .kol-form-field__counter {
    color: var(--kern-color-feedback-loader);
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.25;
  }
  .kol-form-field--required .kol-form-field__label-text::after {
    padding-left: 0.125em;
  }
  .kol-form-field--required .kol-form-field__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-form-field--error {
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-danger);
  }
  .kol-input {
    color: var(--kern-color-layout-text-default);
    background: transparent;
    height: var(--kern-metric-dimension-x-large);
    font-family: var(--kern-typography-font-family-default);
    border: none;
  }
  .kol-input--readonly {
    color: var(--color-black-70);
  }
  .kol-input:disabled {
    opacity: 1;
    color: var(--color-black-60);
  }
  .kol-input:disabled::-moz-placeholder {
    color: var(--color-black-60);
  }
  .kol-input:disabled::placeholder {
    color: var(--color-black-60);
  }
  .kol-input-container {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small) var(--kern-metric-border-radius-small) 0 0;
    position: relative;
    padding: 0 var(--kern-metric-space-default);
    gap: 0;
    border: none;
    border-bottom: var(--kol-input-border-width) solid var(--kol-input-border-color);
    --kol-input-border-color: var(--kern-color-form-input-border);
    --kol-input-border-width: var(--kern-metric-border-width-default);
  }
  .kol-input-container:not(.kol-input-container--disabled):hover {
    box-shadow: 0 calc(-1 * var(--kern-metric-border-width-default)) 0 0 var(--kol-input-border-color) inset;
  }
  .kol-input-container:focus-within {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-border-color);
    border-radius: var(--kern-metric-border-radius-small);
    border-bottom-color: transparent;
  }
  .kol-input-container:focus-within:hover {
    box-shadow: none;
  }
  .kol-input-container:has(.kol-input--readonly) {
    background: inherit;
    --kol-input-border-color: var(--kern-color-layout-border);
    --kol-input-border-width: var(--kern-metric-border-width-light);
  }
  .kol-input-container:has(.kol-input--readonly) .kol-input--readonly {
    cursor: not-allowed;
  }
  .kol-input-container--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: not-allowed;
  }
  .kol-input-container--error {
    --kol-input-border-color: var(--kern-color-feedback-danger);
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-input-container__smart-button .kol-button {
    color: var(--kern-color-feedback-info, );
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
    border-left: 1px solid var(--border-color);
    transition: all 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-input-container__smart-button .kol-button:disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-input-container__smart-button .kol-button:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-input-container__smart-button .kol-button:focus {
    color: var(--kern-color-layout-background-default);
    background-color: var(--kern-color-form-input-border);
    outline: var(--kern-color-form-input-border) solid 2px;
    border: 1 solid var(--kern-color-form-input-border);
    outline-offset: 2px;
  }
  .kol-input-color__inputs-wrapper {
    gap: 0;
  }
}`,gt=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
@layer kol-theme-component {
  .badge-text-hint {
    color: var(--kern-color-layout-text-inverse);
    background-color: var(--kern-color-layout-text-muted);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .badge-text-hint, .kol-span .kol-span .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field {
    padding: var(--kern-metric-space-none);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--kern-typography-font-family-default);
  }
  .kol-form-field--read-only .kol-form-field__label, .kol-form-field--disabled .kol-form-field__label {
    opacity: 1;
    cursor: not-allowed;
  }
  .kol-form-field__label {
    color: var(--kern-color-layout-text-default);
    padding: var(--kern-metric-baseline-label-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-label-default-padding-bottom) var(--kern-metric-space-none);
    order: 1;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-form-field__label__read-only {
    display: none;
  }
  .kol-form-field__msg {
    order: 4;
  }
  .kol-form-field__msg .kol-alert__icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field__hint {
    color: var(--kern-color-layout-text-default);
    color: var(--kern-color-layout-text-muted, #404565);
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-body-default-padding-bottom) var(--kern-metric-space-none);
    order: 2;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    font-style: normal;
  }
  .kol-form-field__input {
    order: 3;
  }
  .kol-form-field__counter {
    color: var(--kern-color-feedback-loader);
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.25;
  }
  .kol-form-field--required .kol-form-field__label-text::after {
    padding-left: 0.125em;
  }
  .kol-form-field--required .kol-form-field__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-form-field--error {
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-danger);
  }
  .kol-input {
    color: var(--kern-color-layout-text-default);
    background: transparent;
    height: var(--kern-metric-dimension-x-large);
    font-family: var(--kern-typography-font-family-default);
    border: none;
  }
  .kol-input--readonly {
    color: var(--color-black-70);
  }
  .kol-input:disabled {
    opacity: 1;
    color: var(--color-black-60);
  }
  .kol-input:disabled::-moz-placeholder {
    color: var(--color-black-60);
  }
  .kol-input:disabled::placeholder {
    color: var(--color-black-60);
  }
  .kol-input-container {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small) var(--kern-metric-border-radius-small) 0 0;
    position: relative;
    padding: 0 var(--kern-metric-space-default);
    gap: 0;
    border: none;
    border-bottom: var(--kol-input-border-width) solid var(--kol-input-border-color);
    --kol-input-border-color: var(--kern-color-form-input-border);
    --kol-input-border-width: var(--kern-metric-border-width-default);
  }
  .kol-input-container:not(.kol-input-container--disabled):hover {
    box-shadow: 0 calc(-1 * var(--kern-metric-border-width-default)) 0 0 var(--kol-input-border-color) inset;
  }
  .kol-input-container:focus-within {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-border-color);
    border-radius: var(--kern-metric-border-radius-small);
    border-bottom-color: transparent;
  }
  .kol-input-container:focus-within:hover {
    box-shadow: none;
  }
  .kol-input-container:has(.kol-input--readonly) {
    background: inherit;
    --kol-input-border-color: var(--kern-color-layout-border);
    --kol-input-border-width: var(--kern-metric-border-width-light);
  }
  .kol-input-container:has(.kol-input--readonly) .kol-input--readonly {
    cursor: not-allowed;
  }
  .kol-input-container--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: not-allowed;
  }
  .kol-input-container--error {
    --kol-input-border-color: var(--kern-color-feedback-danger);
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-input-container__smart-button .kol-button {
    color: var(--kern-color-feedback-info, );
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
    border-left: 1px solid var(--border-color);
    transition: all 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-input-container__smart-button .kol-button:disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-input-container__smart-button .kol-button:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-input-container__smart-button .kol-button:focus {
    color: var(--kern-color-layout-background-default);
    background-color: var(--kern-color-form-input-border);
    outline: var(--kern-color-form-input-border) solid 2px;
    border: 1 solid var(--kern-color-form-input-border);
    outline-offset: 2px;
  }
  .kol-input {
    padding: 0 var(--kern-metric-space-default);
  }
  .kol-input-container {
    padding: 0;
    gap: 0;
    grid-template-columns: 1fr;
  }
  .kol-input-container__smart-button {
    position: relative;
    z-index: 2;
  }
  .kol-input-container__adornment {
    position: absolute;
  }
  .kol-input-container__adornment--start {
    left: 0;
  }
  .kol-input-container__adornment--start .kol-input-container__icon {
    padding-left: var(--kern-metric-space-default);
  }
  .kol-input-container__adornment--end {
    right: 0;
  }
  .kol-input-container__adornment--end .kol-input-container__icon {
    padding-right: var(--kern-metric-space-small);
  }
  .kol-input-container__adornment .kol-icon {
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-input-container:has(.kol-input-container__adornment--start:not(:empty)) .kol-input {
    padding-left: calc(48 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container:has(.kol-input-container__adornment--start .kol-input-container__smart-button + .kol-input-container__icon) .kol-input {
    padding-left: calc(76 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container:has(.kol-input-container__adornment--end:not(:empty)) .kol-input {
    padding-right: calc(48 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container:has(.kol-input-container__adornment--end .kol-input-container__icon + .kol-input-container__smart-button) .kol-input {
    padding-right: calc(76 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container__container {
    position: relative;
    z-index: 1;
  }
}`,_t=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
@layer kol-theme-component {
  .badge-text-hint {
    color: var(--kern-color-layout-text-inverse);
    background-color: var(--kern-color-layout-text-muted);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .badge-text-hint, .kol-span .kol-span .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field {
    padding: var(--kern-metric-space-none);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--kern-typography-font-family-default);
  }
  .kol-form-field--read-only .kol-form-field__label, .kol-form-field--disabled .kol-form-field__label {
    opacity: 1;
    cursor: not-allowed;
  }
  .kol-form-field__label {
    color: var(--kern-color-layout-text-default);
    padding: var(--kern-metric-baseline-label-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-label-default-padding-bottom) var(--kern-metric-space-none);
    order: 1;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-form-field__label__read-only {
    display: none;
  }
  .kol-form-field__msg {
    order: 4;
  }
  .kol-form-field__msg .kol-alert__icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field__hint {
    color: var(--kern-color-layout-text-default);
    color: var(--kern-color-layout-text-muted, #404565);
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-body-default-padding-bottom) var(--kern-metric-space-none);
    order: 2;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    font-style: normal;
  }
  .kol-form-field__input {
    order: 3;
  }
  .kol-form-field__counter {
    color: var(--kern-color-feedback-loader);
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.25;
  }
  .kol-form-field--required .kol-form-field__label-text::after {
    padding-left: 0.125em;
  }
  .kol-form-field--required .kol-form-field__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-form-field--error {
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-danger);
  }
  .kol-input {
    color: var(--kern-color-layout-text-default);
    background: transparent;
    height: var(--kern-metric-dimension-x-large);
    font-family: var(--kern-typography-font-family-default);
    border: none;
  }
  .kol-input--readonly {
    color: var(--color-black-70);
  }
  .kol-input:disabled {
    opacity: 1;
    color: var(--color-black-60);
  }
  .kol-input:disabled::-moz-placeholder {
    color: var(--color-black-60);
  }
  .kol-input:disabled::placeholder {
    color: var(--color-black-60);
  }
  .kol-input-container {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small) var(--kern-metric-border-radius-small) 0 0;
    position: relative;
    padding: 0 var(--kern-metric-space-default);
    gap: 0;
    border: none;
    border-bottom: var(--kol-input-border-width) solid var(--kol-input-border-color);
    --kol-input-border-color: var(--kern-color-form-input-border);
    --kol-input-border-width: var(--kern-metric-border-width-default);
  }
  .kol-input-container:not(.kol-input-container--disabled):hover {
    box-shadow: 0 calc(-1 * var(--kern-metric-border-width-default)) 0 0 var(--kol-input-border-color) inset;
  }
  .kol-input-container:focus-within {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-border-color);
    border-radius: var(--kern-metric-border-radius-small);
    border-bottom-color: transparent;
  }
  .kol-input-container:focus-within:hover {
    box-shadow: none;
  }
  .kol-input-container:has(.kol-input--readonly) {
    background: inherit;
    --kol-input-border-color: var(--kern-color-layout-border);
    --kol-input-border-width: var(--kern-metric-border-width-light);
  }
  .kol-input-container:has(.kol-input--readonly) .kol-input--readonly {
    cursor: not-allowed;
  }
  .kol-input-container--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: not-allowed;
  }
  .kol-input-container--error {
    --kol-input-border-color: var(--kern-color-feedback-danger);
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-input-container__smart-button .kol-button {
    color: var(--kern-color-feedback-info, );
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
    border-left: 1px solid var(--border-color);
    transition: all 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-input-container__smart-button .kol-button:disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-input-container__smart-button .kol-button:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-input-container__smart-button .kol-button:focus {
    color: var(--kern-color-layout-background-default);
    background-color: var(--kern-color-form-input-border);
    outline: var(--kern-color-form-input-border) solid 2px;
    border: 1 solid var(--kern-color-form-input-border);
    outline-offset: 2px;
  }
  .kol-input {
    padding: 0 var(--kern-metric-space-default);
  }
  .kol-input-container {
    padding: 0;
    gap: 0;
    grid-template-columns: 1fr;
  }
  .kol-input-container__smart-button {
    position: relative;
    z-index: 2;
  }
  .kol-input-container__adornment {
    position: absolute;
  }
  .kol-input-container__adornment--start {
    left: 0;
  }
  .kol-input-container__adornment--start .kol-input-container__icon {
    padding-left: var(--kern-metric-space-default);
  }
  .kol-input-container__adornment--end {
    right: 0;
  }
  .kol-input-container__adornment--end .kol-input-container__icon {
    padding-right: var(--kern-metric-space-small);
  }
  .kol-input-container__adornment .kol-icon {
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-input-container:has(.kol-input-container__adornment--start:not(:empty)) .kol-input {
    padding-left: calc(48 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container:has(.kol-input-container__adornment--start .kol-input-container__smart-button + .kol-input-container__icon) .kol-input {
    padding-left: calc(76 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container:has(.kol-input-container__adornment--end:not(:empty)) .kol-input {
    padding-right: calc(48 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container:has(.kol-input-container__adornment--end .kol-input-container__icon + .kol-input-container__smart-button) .kol-input {
    padding-right: calc(76 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container__container {
    position: relative;
    z-index: 1;
  }
}`,vt=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
@layer kol-theme-component {
  .badge-text-hint {
    color: var(--kern-color-layout-text-inverse);
    background-color: var(--kern-color-layout-text-muted);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .badge-text-hint, .kol-span .kol-span .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field {
    padding: var(--kern-metric-space-none);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--kern-typography-font-family-default);
  }
  .kol-form-field--read-only .kol-form-field__label, .kol-form-field--disabled .kol-form-field__label {
    opacity: 1;
    cursor: not-allowed;
  }
  .kol-form-field__label {
    color: var(--kern-color-layout-text-default);
    padding: var(--kern-metric-baseline-label-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-label-default-padding-bottom) var(--kern-metric-space-none);
    order: 1;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-form-field__label__read-only {
    display: none;
  }
  .kol-form-field__msg {
    order: 4;
  }
  .kol-form-field__msg .kol-alert__icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field__hint {
    color: var(--kern-color-layout-text-default);
    color: var(--kern-color-layout-text-muted, #404565);
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-body-default-padding-bottom) var(--kern-metric-space-none);
    order: 2;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    font-style: normal;
  }
  .kol-form-field__input {
    order: 3;
  }
  .kol-form-field__counter {
    color: var(--kern-color-feedback-loader);
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.25;
  }
  .kol-form-field--required .kol-form-field__label-text::after {
    padding-left: 0.125em;
  }
  .kol-form-field--required .kol-form-field__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-form-field--error {
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-danger);
  }
  .kol-input {
    color: var(--kern-color-layout-text-default);
    background: transparent;
    height: var(--kern-metric-dimension-x-large);
    font-family: var(--kern-typography-font-family-default);
    border: none;
  }
  .kol-input--readonly {
    color: var(--color-black-70);
  }
  .kol-input:disabled {
    opacity: 1;
    color: var(--color-black-60);
  }
  .kol-input:disabled::-moz-placeholder {
    color: var(--color-black-60);
  }
  .kol-input:disabled::placeholder {
    color: var(--color-black-60);
  }
  .kol-input-container {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small) var(--kern-metric-border-radius-small) 0 0;
    position: relative;
    padding: 0 var(--kern-metric-space-default);
    gap: 0;
    border: none;
    border-bottom: var(--kol-input-border-width) solid var(--kol-input-border-color);
    --kol-input-border-color: var(--kern-color-form-input-border);
    --kol-input-border-width: var(--kern-metric-border-width-default);
  }
  .kol-input-container:not(.kol-input-container--disabled):hover {
    box-shadow: 0 calc(-1 * var(--kern-metric-border-width-default)) 0 0 var(--kol-input-border-color) inset;
  }
  .kol-input-container:focus-within {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-border-color);
    border-radius: var(--kern-metric-border-radius-small);
    border-bottom-color: transparent;
  }
  .kol-input-container:focus-within:hover {
    box-shadow: none;
  }
  .kol-input-container:has(.kol-input--readonly) {
    background: inherit;
    --kol-input-border-color: var(--kern-color-layout-border);
    --kol-input-border-width: var(--kern-metric-border-width-light);
  }
  .kol-input-container:has(.kol-input--readonly) .kol-input--readonly {
    cursor: not-allowed;
  }
  .kol-input-container--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: not-allowed;
  }
  .kol-input-container--error {
    --kol-input-border-color: var(--kern-color-feedback-danger);
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-input-container__smart-button .kol-button {
    color: var(--kern-color-feedback-info, );
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
    border-left: 1px solid var(--border-color);
    transition: all 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-input-container__smart-button .kol-button:disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-input-container__smart-button .kol-button:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-input-container__smart-button .kol-button:focus {
    color: var(--kern-color-layout-background-default);
    background-color: var(--kern-color-form-input-border);
    outline: var(--kern-color-form-input-border) solid 2px;
    border: 1 solid var(--kern-color-form-input-border);
    outline-offset: 2px;
  }
  .kol-input {
    opacity: 0 !important;
  }
  .kol-input-container {
    outline: var(--kern-metric-border-width-default) dashed var(--kol-input-border-color);
    display: flex;
    position: relative;
    height: var(--kern-metric-dimension-5x-large);
    padding: 0;
    align-items: center;
    border: none;
  }
  .kol-input-container:hover {
    outline-style: solid;
    outline-width: 4px;
    padding: 0;
    outline-offset: -4px;
  }
  .kol-input-container:focus-within {
    outline-style: solid;
    outline-width: 4px;
    padding: 0;
    outline-offset: -4px;
  }
  .kol-input-container__adornment {
    width: 44px;
  }
  .kol-input-container__adornment--start {
    position: absolute;
    left: var(--kern-metric-space-large);
  }
  .kol-input-container__adornment--start + .kol-input-container__container {
    padding-left: calc(var(--kern-metric-space-large) + 44px);
  }
  .kol-input-container__adornment--end {
    position: absolute;
    right: var(--kern-metric-space-large);
  }
  .kol-input-container__adornment--end + .kol-input-container__container {
    padding-left: calc(var(--kern-metric-space-large) + 44px);
  }
  .kol-input-container__adornment .kol-icon {
    color: var(--color-blue-100);
    display: flex;
    margin: 0 calc(7 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container__container {
    display: flex;
    width: 100%;
    height: 100%;
    padding: var(--kern-metric-space-large);
    align-items: center;
  }
  .kol-input-container__container:has(+ .kol-input-container__adornment--end) {
    padding-right: calc(var(--kern-metric-space-large) + 44px);
  }
  .kol-input-container__button {
    border-radius: var(--kern-metric-border-radius-default);
    display: flex;
    padding: 0 calc(16 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
    justify-content: center;
    border: 1px solid var(--kern-color-action-default);
  }
  .kol-input-container__button .kol-span__label {
    white-space: nowrap;
  }
  .kol-input-container__filename {
    display: none;
  }
  .kol-input-container__filename--has-file {
    color: var(--color-black-100);
    display: flex;
    padding: 0 calc(12 * 1rem / var(--kolibri-root-font-size, 16));
    overflow: hidden;
    flex-grow: 1;
    font-size: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.5;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .kol-input-container--is-dragover {
    border-color: var(--color-blue-100);
  }
}`,yt=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
@layer kol-theme-component {
  .badge-text-hint {
    color: var(--kern-color-layout-text-inverse);
    background-color: var(--kern-color-layout-text-muted);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .badge-text-hint, .kol-span .kol-span .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field {
    padding: var(--kern-metric-space-none);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--kern-typography-font-family-default);
  }
  .kol-form-field--read-only .kol-form-field__label, .kol-form-field--disabled .kol-form-field__label {
    opacity: 1;
    cursor: not-allowed;
  }
  .kol-form-field__label {
    color: var(--kern-color-layout-text-default);
    padding: var(--kern-metric-baseline-label-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-label-default-padding-bottom) var(--kern-metric-space-none);
    order: 1;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-form-field__label__read-only {
    display: none;
  }
  .kol-form-field__msg {
    order: 4;
  }
  .kol-form-field__msg .kol-alert__icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field__hint {
    color: var(--kern-color-layout-text-default);
    color: var(--kern-color-layout-text-muted, #404565);
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-body-default-padding-bottom) var(--kern-metric-space-none);
    order: 2;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    font-style: normal;
  }
  .kol-form-field__input {
    order: 3;
  }
  .kol-form-field__counter {
    color: var(--kern-color-feedback-loader);
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.25;
  }
  .kol-form-field--required .kol-form-field__label-text::after {
    padding-left: 0.125em;
  }
  .kol-form-field--required .kol-form-field__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-form-field--error {
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-danger);
  }
  .kol-input {
    color: var(--kern-color-layout-text-default);
    background: transparent;
    height: var(--kern-metric-dimension-x-large);
    font-family: var(--kern-typography-font-family-default);
    border: none;
  }
  .kol-input--readonly {
    color: var(--color-black-70);
  }
  .kol-input:disabled {
    opacity: 1;
    color: var(--color-black-60);
  }
  .kol-input:disabled::-moz-placeholder {
    color: var(--color-black-60);
  }
  .kol-input:disabled::placeholder {
    color: var(--color-black-60);
  }
  .kol-input-container {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small) var(--kern-metric-border-radius-small) 0 0;
    position: relative;
    padding: 0 var(--kern-metric-space-default);
    gap: 0;
    border: none;
    border-bottom: var(--kol-input-border-width) solid var(--kol-input-border-color);
    --kol-input-border-color: var(--kern-color-form-input-border);
    --kol-input-border-width: var(--kern-metric-border-width-default);
  }
  .kol-input-container:not(.kol-input-container--disabled):hover {
    box-shadow: 0 calc(-1 * var(--kern-metric-border-width-default)) 0 0 var(--kol-input-border-color) inset;
  }
  .kol-input-container:focus-within {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-border-color);
    border-radius: var(--kern-metric-border-radius-small);
    border-bottom-color: transparent;
  }
  .kol-input-container:focus-within:hover {
    box-shadow: none;
  }
  .kol-input-container:has(.kol-input--readonly) {
    background: inherit;
    --kol-input-border-color: var(--kern-color-layout-border);
    --kol-input-border-width: var(--kern-metric-border-width-light);
  }
  .kol-input-container:has(.kol-input--readonly) .kol-input--readonly {
    cursor: not-allowed;
  }
  .kol-input-container--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: not-allowed;
  }
  .kol-input-container--error {
    --kol-input-border-color: var(--kern-color-feedback-danger);
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-input-container__smart-button .kol-button {
    color: var(--kern-color-feedback-info, );
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
    border-left: 1px solid var(--border-color);
    transition: all 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-input-container__smart-button .kol-button:disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-input-container__smart-button .kol-button:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-input-container__smart-button .kol-button:focus {
    color: var(--kern-color-layout-background-default);
    background-color: var(--kern-color-form-input-border);
    outline: var(--kern-color-form-input-border) solid 2px;
    border: 1 solid var(--kern-color-form-input-border);
    outline-offset: 2px;
  }
  .kol-input {
    padding: 0 var(--kern-metric-space-default);
  }
  .kol-input-container {
    padding: 0;
    gap: 0;
    grid-template-columns: 1fr;
  }
  .kol-input-container__smart-button {
    position: relative;
    z-index: 2;
  }
  .kol-input-container__adornment {
    position: absolute;
  }
  .kol-input-container__adornment--start {
    left: 0;
  }
  .kol-input-container__adornment--start .kol-input-container__icon {
    padding-left: var(--kern-metric-space-default);
  }
  .kol-input-container__adornment--end {
    right: 0;
  }
  .kol-input-container__adornment--end .kol-input-container__icon {
    padding-right: var(--kern-metric-space-small);
  }
  .kol-input-container__adornment .kol-icon {
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-input-container:has(.kol-input-container__adornment--start:not(:empty)) .kol-input {
    padding-left: calc(48 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container:has(.kol-input-container__adornment--start .kol-input-container__smart-button + .kol-input-container__icon) .kol-input {
    padding-left: calc(76 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container:has(.kol-input-container__adornment--end:not(:empty)) .kol-input {
    padding-right: calc(48 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container:has(.kol-input-container__adornment--end .kol-input-container__icon + .kol-input-container__smart-button) .kol-input {
    padding-right: calc(76 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container__container {
    position: relative;
    z-index: 1;
  }
  .kol-input-number .kol-input-number__step-button {
    color: var(--kern-color-action-default);
    transition-duration: 0.3s;
    transition-property: background-color, color;
  }
  .kol-input-number .kol-input-number__step-button:focus {
    outline: 0;
  }
  .kol-input-number .kol-input-number__step-button:hover {
    background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-input-number .kol-input {
    min-width: calc(3 * var(--a11y-min-size) + 8px); /* at least 2 buttons + text with a11y min size + gaps */
  }
}`,bt=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
@layer kol-theme-component {
  .badge-text-hint {
    color: var(--kern-color-layout-text-inverse);
    background-color: var(--kern-color-layout-text-muted);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .badge-text-hint, .kol-span .kol-span .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field {
    padding: var(--kern-metric-space-none);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--kern-typography-font-family-default);
  }
  .kol-form-field--read-only .kol-form-field__label, .kol-form-field--disabled .kol-form-field__label {
    opacity: 1;
    cursor: not-allowed;
  }
  .kol-form-field__label {
    color: var(--kern-color-layout-text-default);
    padding: var(--kern-metric-baseline-label-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-label-default-padding-bottom) var(--kern-metric-space-none);
    order: 1;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-form-field__label__read-only {
    display: none;
  }
  .kol-form-field__msg {
    order: 4;
  }
  .kol-form-field__msg .kol-alert__icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field__hint {
    color: var(--kern-color-layout-text-default);
    color: var(--kern-color-layout-text-muted, #404565);
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-body-default-padding-bottom) var(--kern-metric-space-none);
    order: 2;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    font-style: normal;
  }
  .kol-form-field__input {
    order: 3;
  }
  .kol-form-field__counter {
    color: var(--kern-color-feedback-loader);
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.25;
  }
  .kol-form-field--required .kol-form-field__label-text::after {
    padding-left: 0.125em;
  }
  .kol-form-field--required .kol-form-field__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-form-field--error {
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-danger);
  }
  .kol-input {
    color: var(--kern-color-layout-text-default);
    background: transparent;
    height: var(--kern-metric-dimension-x-large);
    font-family: var(--kern-typography-font-family-default);
    border: none;
  }
  .kol-input--readonly {
    color: var(--color-black-70);
  }
  .kol-input:disabled {
    opacity: 1;
    color: var(--color-black-60);
  }
  .kol-input:disabled::-moz-placeholder {
    color: var(--color-black-60);
  }
  .kol-input:disabled::placeholder {
    color: var(--color-black-60);
  }
  .kol-input-container {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small) var(--kern-metric-border-radius-small) 0 0;
    position: relative;
    padding: 0 var(--kern-metric-space-default);
    gap: 0;
    border: none;
    border-bottom: var(--kol-input-border-width) solid var(--kol-input-border-color);
    --kol-input-border-color: var(--kern-color-form-input-border);
    --kol-input-border-width: var(--kern-metric-border-width-default);
  }
  .kol-input-container:not(.kol-input-container--disabled):hover {
    box-shadow: 0 calc(-1 * var(--kern-metric-border-width-default)) 0 0 var(--kol-input-border-color) inset;
  }
  .kol-input-container:focus-within {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-border-color);
    border-radius: var(--kern-metric-border-radius-small);
    border-bottom-color: transparent;
  }
  .kol-input-container:focus-within:hover {
    box-shadow: none;
  }
  .kol-input-container:has(.kol-input--readonly) {
    background: inherit;
    --kol-input-border-color: var(--kern-color-layout-border);
    --kol-input-border-width: var(--kern-metric-border-width-light);
  }
  .kol-input-container:has(.kol-input--readonly) .kol-input--readonly {
    cursor: not-allowed;
  }
  .kol-input-container--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: not-allowed;
  }
  .kol-input-container--error {
    --kol-input-border-color: var(--kern-color-feedback-danger);
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-input-container__smart-button .kol-button {
    color: var(--kern-color-feedback-info, );
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
    border-left: 1px solid var(--border-color);
    transition: all 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-input-container__smart-button .kol-button:disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-input-container__smart-button .kol-button:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-input-container__smart-button .kol-button:focus {
    color: var(--kern-color-layout-background-default);
    background-color: var(--kern-color-form-input-border);
    outline: var(--kern-color-form-input-border) solid 2px;
    border: 1 solid var(--kern-color-form-input-border);
    outline-offset: 2px;
  }
  .kol-input {
    padding: 0 var(--kern-metric-space-default);
  }
  .kol-input-container {
    padding: 0;
    gap: 0;
    grid-template-columns: 1fr;
  }
  .kol-input-container__smart-button {
    position: relative;
    z-index: 2;
  }
  .kol-input-container__adornment {
    position: absolute;
  }
  .kol-input-container__adornment--start {
    left: 0;
  }
  .kol-input-container__adornment--start .kol-input-container__icon {
    padding-left: var(--kern-metric-space-default);
  }
  .kol-input-container__adornment--end {
    right: 0;
  }
  .kol-input-container__adornment--end .kol-input-container__icon {
    padding-right: var(--kern-metric-space-small);
  }
  .kol-input-container__adornment .kol-icon {
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-input-container:has(.kol-input-container__adornment--start:not(:empty)) .kol-input {
    padding-left: calc(48 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container:has(.kol-input-container__adornment--start .kol-input-container__smart-button + .kol-input-container__icon) .kol-input {
    padding-left: calc(76 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container:has(.kol-input-container__adornment--end:not(:empty)) .kol-input {
    padding-right: calc(48 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container:has(.kol-input-container__adornment--end .kol-input-container__icon + .kol-input-container__smart-button) .kol-input {
    padding-right: calc(76 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container__container {
    position: relative;
    z-index: 1;
  }
}`,xt=`@charset "UTF-8";
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
@layer kol-theme-component {
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-field-control__hint {
    color: var(--color-black-70);
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-field-control__label-text {
    color: var(--kern-color-layout-text-default);
    flex-flow: row;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-field-control--required .kol-field-control__label-text::after {
    padding-left: 0.125em;
  }
  .kol-field-control--required .kol-field-control__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-form-field {
    padding: var(--kern-metric-space-none);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--kern-typography-font-family-default);
  }
  .kol-form-field--read-only .kol-form-field__label, .kol-form-field--disabled .kol-form-field__label {
    opacity: 1;
    cursor: not-allowed;
  }
  .kol-form-field__label {
    color: var(--kern-color-layout-text-default);
    padding: var(--kern-metric-baseline-label-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-label-default-padding-bottom) var(--kern-metric-space-none);
    order: 1;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-form-field__label__read-only {
    display: none;
  }
  .kol-form-field__msg {
    order: 4;
  }
  .kol-form-field__msg .kol-alert__icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field__hint {
    color: var(--kern-color-layout-text-default);
    color: var(--kern-color-layout-text-muted, #404565);
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-body-default-padding-bottom) var(--kern-metric-space-none);
    order: 2;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    font-style: normal;
  }
  .kol-form-field__input {
    order: 3;
  }
  .kol-form-field__counter {
    color: var(--kern-color-feedback-loader);
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.25;
  }
  .kol-form-field--required .kol-form-field__label-text::after {
    padding-left: 0.125em;
  }
  .kol-form-field--required .kol-form-field__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-form-field--error {
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-danger);
  }
  .kol-input[type=radio] {
    color: var(--kol-input-radio-color);
    background: var(--kol-input-radio-background-color);
    border-color: var(--kol-input-radio-color);
    border-radius: 100%;
    display: flex;
    width: var(--kern-metric-dimension-large);
    height: var(--kern-metric-dimension-large);
  }
  .kol-input[type=radio]::before {
    border-radius: 100%;
    margin: auto;
    content: "";
  }
  .kol-input[type=radio]:checked::before {
    background-color: var(--kol-input-radio-color);
    width: var(--kern-12, 12px);
    height: var(--kern-12, 12px);
  }
  .kol-input[type=radio]:hover:not(:disabled) {
    --border-width: var(--kern-metric-border-width-bold);
  }
  .kol-input[type=radio]:focus:not(:disabled) {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-radio-color);
    border: 0;
    outline-offset: 0;
  }
  .kol-input--disabled[type=radio] {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-input-radio {
    justify-content: flex-start;
  }
  .kol-form-field {
    gap: var(--kern-metric-space-small);
    flex-wrap: wrap;
    align-items: flex-start;
    border: 0;
    --kol-input-radio-color: var(--kern-color-form-input-border);
    --kol-input-radio-background-color: transparent;
    --border-width: var(--kern-metric-border-width-default);
  }
  .kol-form-field--error {
    --kol-input-radio-color: var(--kern-color-feedback-danger);
    --kol-input-radio-background-color: var(--kern-color-feedback-danger-background);
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kol-input-radio-color);
  }
  .kol-form-field__input {
    gap: var(--kern-metric-space-default);
  }
}`,St=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
@layer kol-theme-component {
  .badge-text-hint {
    color: var(--kern-color-layout-text-inverse);
    background-color: var(--kern-color-layout-text-muted);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .badge-text-hint, .kol-span .kol-span .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field {
    padding: var(--kern-metric-space-none);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--kern-typography-font-family-default);
  }
  .kol-form-field--read-only .kol-form-field__label, .kol-form-field--disabled .kol-form-field__label {
    opacity: 1;
    cursor: not-allowed;
  }
  .kol-form-field__label {
    color: var(--kern-color-layout-text-default);
    padding: var(--kern-metric-baseline-label-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-label-default-padding-bottom) var(--kern-metric-space-none);
    order: 1;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-form-field__label__read-only {
    display: none;
  }
  .kol-form-field__msg {
    order: 4;
  }
  .kol-form-field__msg .kol-alert__icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field__hint {
    color: var(--kern-color-layout-text-default);
    color: var(--kern-color-layout-text-muted, #404565);
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-body-default-padding-bottom) var(--kern-metric-space-none);
    order: 2;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    font-style: normal;
  }
  .kol-form-field__input {
    order: 3;
  }
  .kol-form-field__counter {
    color: var(--kern-color-feedback-loader);
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.25;
  }
  .kol-form-field--required .kol-form-field__label-text::after {
    padding-left: 0.125em;
  }
  .kol-form-field--required .kol-form-field__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-form-field--error {
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-danger);
  }
  .kol-input {
    color: var(--kern-color-layout-text-default);
    background: transparent;
    height: var(--kern-metric-dimension-x-large);
    font-family: var(--kern-typography-font-family-default);
    border: none;
  }
  .kol-input--readonly {
    color: var(--color-black-70);
  }
  .kol-input:disabled {
    opacity: 1;
    color: var(--color-black-60);
  }
  .kol-input:disabled::-moz-placeholder {
    color: var(--color-black-60);
  }
  .kol-input:disabled::placeholder {
    color: var(--color-black-60);
  }
  .kol-input-container {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small) var(--kern-metric-border-radius-small) 0 0;
    position: relative;
    padding: 0 var(--kern-metric-space-default);
    gap: 0;
    border: none;
    border-bottom: var(--kol-input-border-width) solid var(--kol-input-border-color);
    --kol-input-border-color: var(--kern-color-form-input-border);
    --kol-input-border-width: var(--kern-metric-border-width-default);
  }
  .kol-input-container:not(.kol-input-container--disabled):hover {
    box-shadow: 0 calc(-1 * var(--kern-metric-border-width-default)) 0 0 var(--kol-input-border-color) inset;
  }
  .kol-input-container:focus-within {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-border-color);
    border-radius: var(--kern-metric-border-radius-small);
    border-bottom-color: transparent;
  }
  .kol-input-container:focus-within:hover {
    box-shadow: none;
  }
  .kol-input-container:has(.kol-input--readonly) {
    background: inherit;
    --kol-input-border-color: var(--kern-color-layout-border);
    --kol-input-border-width: var(--kern-metric-border-width-light);
  }
  .kol-input-container:has(.kol-input--readonly) .kol-input--readonly {
    cursor: not-allowed;
  }
  .kol-input-container--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: not-allowed;
  }
  .kol-input-container--error {
    --kol-input-border-color: var(--kern-color-feedback-danger);
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-input-container__smart-button .kol-button {
    color: var(--kern-color-feedback-info, );
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
    border-left: 1px solid var(--border-color);
    transition: all 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-input-container__smart-button .kol-button:disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-input-container__smart-button .kol-button:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-input-container__smart-button .kol-button:focus {
    color: var(--kern-color-layout-background-default);
    background-color: var(--kern-color-form-input-border);
    outline: var(--kern-color-form-input-border) solid 2px;
    border: 1 solid var(--kern-color-form-input-border);
    outline-offset: 2px;
  }
  .kol-input-container {
    padding: 0;
    border: 0;
  }
  .kol-input-container:hover, .kol-input-container:focus-within {
    box-shadow: none !important;
  }
  .kol-input-container__adornment {
    padding: 0 var(--kern-metric-space-default);
  }
  .kol-input-container__adornment + .kol-input-container__container .kol-input-range__inputs-wrapper {
    padding-left: 0;
  }
  .kol-input-container:focus-within .kol-input-range__input--number {
    border-color: transparent;
  }
  .kol-input-range__inputs-wrapper {
    display: flex;
    height: 100%;
    padding-left: var(--kern-metric-space-default);
    gap: var(--kern-metric-space-default);
    align-items: center;
  }
  .kol-input-range__input--range {
    background-color: var(--kol-input-border-color);
    height: var(--kern-metric-border-width-default);
    border: none;
  }
  .kol-input-range__input--range:not(:disabled):hover {
    height: var(--kern-metric-border-width-bold);
  }
  .kol-input-range__input--number {
    background-color: transparent;
    align-self: stretch;
    border: none;
    border-bottom: var(--kol-input-border-color) solid var(--kern-metric-border-width-default);
  }
  .kol-input-range__input--number:not(:disabled):hover {
    box-shadow: 0 calc(-1 * var(--kern-metric-border-width-default)) 0 0 var(--kol-input-border-color) inset;
  }
}`,Ct=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
@layer kol-theme-component {
  .badge-text-hint {
    color: var(--kern-color-layout-text-inverse);
    background-color: var(--kern-color-layout-text-muted);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .badge-text-hint, .kol-span .kol-span .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field {
    padding: var(--kern-metric-space-none);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--kern-typography-font-family-default);
  }
  .kol-form-field--read-only .kol-form-field__label, .kol-form-field--disabled .kol-form-field__label {
    opacity: 1;
    cursor: not-allowed;
  }
  .kol-form-field__label {
    color: var(--kern-color-layout-text-default);
    padding: var(--kern-metric-baseline-label-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-label-default-padding-bottom) var(--kern-metric-space-none);
    order: 1;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-form-field__label__read-only {
    display: none;
  }
  .kol-form-field__msg {
    order: 4;
  }
  .kol-form-field__msg .kol-alert__icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field__hint {
    color: var(--kern-color-layout-text-default);
    color: var(--kern-color-layout-text-muted, #404565);
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-body-default-padding-bottom) var(--kern-metric-space-none);
    order: 2;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    font-style: normal;
  }
  .kol-form-field__input {
    order: 3;
  }
  .kol-form-field__counter {
    color: var(--kern-color-feedback-loader);
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.25;
  }
  .kol-form-field--required .kol-form-field__label-text::after {
    padding-left: 0.125em;
  }
  .kol-form-field--required .kol-form-field__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-form-field--error {
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-danger);
  }
  .kol-input {
    color: var(--kern-color-layout-text-default);
    background: transparent;
    height: var(--kern-metric-dimension-x-large);
    font-family: var(--kern-typography-font-family-default);
    border: none;
  }
  .kol-input--readonly {
    color: var(--color-black-70);
  }
  .kol-input:disabled {
    opacity: 1;
    color: var(--color-black-60);
  }
  .kol-input:disabled::-moz-placeholder {
    color: var(--color-black-60);
  }
  .kol-input:disabled::placeholder {
    color: var(--color-black-60);
  }
  .kol-input-container {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small) var(--kern-metric-border-radius-small) 0 0;
    position: relative;
    padding: 0 var(--kern-metric-space-default);
    gap: 0;
    border: none;
    border-bottom: var(--kol-input-border-width) solid var(--kol-input-border-color);
    --kol-input-border-color: var(--kern-color-form-input-border);
    --kol-input-border-width: var(--kern-metric-border-width-default);
  }
  .kol-input-container:not(.kol-input-container--disabled):hover {
    box-shadow: 0 calc(-1 * var(--kern-metric-border-width-default)) 0 0 var(--kol-input-border-color) inset;
  }
  .kol-input-container:focus-within {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-border-color);
    border-radius: var(--kern-metric-border-radius-small);
    border-bottom-color: transparent;
  }
  .kol-input-container:focus-within:hover {
    box-shadow: none;
  }
  .kol-input-container:has(.kol-input--readonly) {
    background: inherit;
    --kol-input-border-color: var(--kern-color-layout-border);
    --kol-input-border-width: var(--kern-metric-border-width-light);
  }
  .kol-input-container:has(.kol-input--readonly) .kol-input--readonly {
    cursor: not-allowed;
  }
  .kol-input-container--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: not-allowed;
  }
  .kol-input-container--error {
    --kol-input-border-color: var(--kern-color-feedback-danger);
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-input-container__smart-button .kol-button {
    color: var(--kern-color-feedback-info, );
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
    border-left: 1px solid var(--border-color);
    transition: all 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-input-container__smart-button .kol-button:disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-input-container__smart-button .kol-button:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-input-container__smart-button .kol-button:focus {
    color: var(--kern-color-layout-background-default);
    background-color: var(--kern-color-form-input-border);
    outline: var(--kern-color-form-input-border) solid 2px;
    border: 1 solid var(--kern-color-form-input-border);
    outline-offset: 2px;
  }
  .kol-input {
    padding: 0 var(--kern-metric-space-default);
  }
  .kol-input-container {
    padding: 0;
    gap: 0;
    grid-template-columns: 1fr;
  }
  .kol-input-container__smart-button {
    position: relative;
    z-index: 2;
  }
  .kol-input-container__adornment {
    position: absolute;
  }
  .kol-input-container__adornment--start {
    left: 0;
  }
  .kol-input-container__adornment--start .kol-input-container__icon {
    padding-left: var(--kern-metric-space-default);
  }
  .kol-input-container__adornment--end {
    right: 0;
  }
  .kol-input-container__adornment--end .kol-input-container__icon {
    padding-right: var(--kern-metric-space-small);
  }
  .kol-input-container__adornment .kol-icon {
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-input-container:has(.kol-input-container__adornment--start:not(:empty)) .kol-input {
    padding-left: calc(48 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container:has(.kol-input-container__adornment--start .kol-input-container__smart-button + .kol-input-container__icon) .kol-input {
    padding-left: calc(76 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container:has(.kol-input-container__adornment--end:not(:empty)) .kol-input {
    padding-right: calc(48 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container:has(.kol-input-container__adornment--end .kol-input-container__icon + .kol-input-container__smart-button) .kol-input {
    padding-right: calc(76 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-input-container__container {
    position: relative;
    z-index: 1;
  }
}`,wt=`@layer kol-theme-component {
  .kol-link {
    --button-min-size: var(--kern-metric-dimension-x-large);
    --button-padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    font-size: var(--kern-typography-font-size-static-medium);
  }
  .kol-link:focus-visible {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-link:disabled {
    opacity: 0.4;
  }
  .kol-link--hide-label {
    --button-padding: var(--kern-metric-space-small);
  }
  .kol-link--inline {
    --button-min-size: 0;
  }
  .kol-link__text {
    color: var(--button-text-color);
    background-color: var(--button-text-background-color);
    border-color: var(--button-text-border-color);
    border-style: solid;
    border-radius: var(--kern-metric-border-radius-default);
    min-width: var(--button-min-size);
    min-height: var(--button-min-size);
    padding: var(--button-padding);
    border-width: var(--kern-metric-border-width-light);
  }
  .kol-link .kol-span__container {
    gap: var(--kern-metric-space-small);
  }
  .kol-link .kol-span__label {
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-link .kol-icon {
    font-size: var(--kern-metric-space-large);
  }
  .kol-link--primary {
    --button-text-background-color-default: var(--kern-color-action-default);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  .kol-link--primary:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-hover);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-hover);
  }
  .kol-link--primary:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-active);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-active);
  }
  .kol-link {
    /* Not specified in Kern! */
  }
  .kol-link--danger {
    --button-text-background-color-default: var(--kern-color-feedback-danger);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  @supports (color-mix: color) {
    .kol-link--danger:not([disabled]):hover {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 85%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-link--danger:not([disabled]):hover {
      --button-text-background-color: #a20d08;
    }
  }
  @supports (color-mix: color) {
    .kol-link--danger:not([disabled]):active {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 80%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-link--danger:not([disabled]):active {
      --button-text-background-color: #980c07;
    }
  }
  .kol-link .badge-text-hint {
    color: var(--button-text-background-color-default);
    background-color: var(--button-text-color);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-link .badge-text-hint, .kol-span .kol-span .kol-link .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  /* Normal button variants */
  .kol-button--secondary,
  .kol-link--secondary,
  .kol-button--normal,
  .kol-link--normal {
    --button-text-background-color-default: var(--kern-neutral-000);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-default);
  }
  .kol-button--secondary:not([disabled]):hover,
  .kol-link--secondary:not([disabled]):hover,
  .kol-button--normal:not([disabled]):hover,
  .kol-link--normal:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--secondary:not([disabled]):active,
  .kol-link--secondary:not([disabled]):active,
  .kol-button--normal:not([disabled]):active,
  .kol-link--normal:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  /* Ghost button variants */
  .kol-button--tertiary,
  .kol-link--tertiary,
  .kol-button--ghost,
  .kol-link--ghost {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-button--tertiary:not([disabled]):hover,
  .kol-link--tertiary:not([disabled]):hover,
  .kol-button--ghost:not([disabled]):hover,
  .kol-link--ghost:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--tertiary:not([disabled]):active,
  .kol-link--tertiary:not([disabled]):active,
  .kol-button--ghost:not([disabled]):active,
  .kol-link--ghost:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-button--tertiary:not(:has(.kol-icon)),
    .kol-link--tertiary:not(:has(.kol-icon)),
    .kol-button--ghost:not(:has(.kol-icon)),
    .kol-link--ghost:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-button--ghost:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--ghost:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-button--tertiary,
    .kol-link--tertiary,
    .kol-button--ghost,
    .kol-link--ghost {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not([disabled]):hover,
    .kol-link--tertiary:not([disabled]):hover,
    .kol-button--ghost:not([disabled]):hover,
    .kol-link--ghost:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
}`,Tt=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
@layer kol-theme-component {
  .kol-link {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-default-padding-top, 6px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-default-padding-bottom, 2px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-medium, 18px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
    color: var(--kern-color-action-default);
    display: inline-flex;
    align-items: flex-start;
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-1);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-link__text {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-link .kol-span__container {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-link .kol-icon {
    color: var(--kern-color-action-default);
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-link:has(.kol-icon) {
    text-decoration: none;
  }
  .kol-link:has(.kol-icon):active .kol-span__label, .kol-link:has(.kol-icon):hover .kol-span__label {
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-3);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-link:has(.kol-icon) .kol-link__text,
  .kol-link:has(.kol-icon) .kol-span__label {
    text-decoration: none;
  }
  .kol-link:visited {
    color: var(--kern-color-action-visited);
  }
  .kol-link:visited .kol-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-link:not(.kol-link--disabled):focus {
    outline: none;
  }
  .kol-link:not(.kol-link--disabled):hover {
    text-decoration-thickness: var(--kern-3);
  }
  .kol-link:not(.kol-link--disabled):active {
    color: var(--kern-color-action-default, );
    text-decoration-thickness: var(--kern-3);
  }
  .kol-link:not(.kol-link--disabled):active .kern-icon {
    color: var(--kern-color-action-default);
  }
  .kol-link:not(.kol-link--disabled):visited {
    color: var(--kern-color-action-visited);
  }
  .kol-link:not(.kol-link--disabled):visited .kern-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-link--small {
    color: var(--kern-color-action-default);
    gap: var(--kern-metric-space-2x-small);
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-small-padding-top, 7px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-small-padding-bottom, 1px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-small, 16px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
  }
  .kol-link--small .kol-icon {
    width: var(--kern-metric-dimension-small);
    min-width: var(--kern-metric-dimension-small);
    height: var(--kern-metric-dimension-small);
    min-height: var(--kern-metric-dimension-small);
  }
  .kol-link:not(.kol-link--stretched):focus-visible {
    box-shadow: var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 2px var(--kern-color-action-on-default), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 4px var(--kern-color-action-focus-border-inside), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 6px var(--kern-color-action-focus-border-outside);
    outline-color: transparent;
    border-radius: var(--kern-metric-border-radius-small, 0.125rem);
    position: relative;
    z-index: 1;
  }
  .kol-link--external-link {
    flex-direction: row-reverse;
  }
}`,Et=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
@layer kol-theme-component {
  .kol-link {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-default-padding-top, 6px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-default-padding-bottom, 2px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-medium, 18px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
    color: var(--kern-color-action-default);
    display: inline-flex;
    align-items: flex-start;
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-1);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-link__text {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-link .kol-span__container {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-link .kol-icon {
    color: var(--kern-color-action-default);
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-link:has(.kol-icon) {
    text-decoration: none;
  }
  .kol-link:has(.kol-icon):active .kol-span__label, .kol-link:has(.kol-icon):hover .kol-span__label {
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-3);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-link:has(.kol-icon) .kol-link__text,
  .kol-link:has(.kol-icon) .kol-span__label {
    text-decoration: none;
  }
  .kol-link:visited {
    color: var(--kern-color-action-visited);
  }
  .kol-link:visited .kol-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-link:not(.kol-link--disabled):focus {
    outline: none;
  }
  .kol-link:not(.kol-link--disabled):hover {
    text-decoration-thickness: var(--kern-3);
  }
  .kol-link:not(.kol-link--disabled):active {
    color: var(--kern-color-action-default, );
    text-decoration-thickness: var(--kern-3);
  }
  .kol-link:not(.kol-link--disabled):active .kern-icon {
    color: var(--kern-color-action-default);
  }
  .kol-link:not(.kol-link--disabled):visited {
    color: var(--kern-color-action-visited);
  }
  .kol-link:not(.kol-link--disabled):visited .kern-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-link--small {
    color: var(--kern-color-action-default);
    gap: var(--kern-metric-space-2x-small);
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-small-padding-top, 7px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-small-padding-bottom, 1px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-small, 16px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
  }
  .kol-link--small .kol-icon {
    width: var(--kern-metric-dimension-small);
    min-width: var(--kern-metric-dimension-small);
    height: var(--kern-metric-dimension-small);
    min-height: var(--kern-metric-dimension-small);
  }
  .kol-link:not(.kol-link--stretched):focus-visible {
    box-shadow: var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 2px var(--kern-color-action-on-default), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 4px var(--kern-color-action-focus-border-inside), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 6px var(--kern-color-action-focus-border-outside);
    outline-color: transparent;
    border-radius: var(--kern-metric-border-radius-small, 0.125rem);
    position: relative;
    z-index: 1;
  }
  .kol-link--external-link {
    flex-direction: row-reverse;
  }
  .kol-button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-default-padding-top, 6px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-default-padding-bottom, 2px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-medium, 18px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
    color: var(--kern-color-action-default);
    display: inline-flex;
    align-items: flex-start;
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-1);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-button__text {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-button .kol-span__container {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-button .kol-icon {
    color: var(--kern-color-action-default);
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-button:has(.kol-icon) {
    text-decoration: none;
  }
  .kol-button:has(.kol-icon):active .kol-span__label, .kol-button:has(.kol-icon):hover .kol-span__label {
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-3);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-button:has(.kol-icon) .kol-link__text,
  .kol-button:has(.kol-icon) .kol-span__label {
    text-decoration: none;
  }
  .kol-button:visited {
    color: var(--kern-color-action-visited);
  }
  .kol-button:visited .kol-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-button:not(.kol-button--disabled):focus {
    outline: none;
  }
  .kol-button:not(.kol-button--disabled):hover {
    text-decoration-thickness: var(--kern-3);
  }
  .kol-button:not(.kol-button--disabled):active {
    color: var(--kern-color-action-default, );
    text-decoration-thickness: var(--kern-3);
  }
  .kol-button:not(.kol-button--disabled):active .kern-icon {
    color: var(--kern-color-action-default);
  }
  .kol-button:not(.kol-button--disabled):visited {
    color: var(--kern-color-action-visited);
  }
  .kol-button:not(.kol-button--disabled):visited .kern-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-button--small {
    color: var(--kern-color-action-default);
    gap: var(--kern-metric-space-2x-small);
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-small-padding-top, 7px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-small-padding-bottom, 1px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-small, 16px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
  }
  .kol-button--small .kol-icon {
    width: var(--kern-metric-dimension-small);
    min-width: var(--kern-metric-dimension-small);
    height: var(--kern-metric-dimension-small);
    min-height: var(--kern-metric-dimension-small);
  }
  .kol-button:not(.kol-button--stretched):focus-visible {
    box-shadow: var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 2px var(--kern-color-action-on-default), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 4px var(--kern-color-action-focus-border-inside), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 6px var(--kern-color-action-focus-border-outside);
    outline-color: transparent;
    border-radius: var(--kern-metric-border-radius-small, 0.125rem);
    position: relative;
    z-index: 1;
  }
  .kol-button--external-link {
    flex-direction: row-reverse;
  }
  .kol-nav {
    padding: var(--kern-metric-space-small);
    --kol-nav-list-item-padding: var(--kern-metric-space-small);
    --kol-nav-item-padding-left: 0;
  }
  .kol-nav .kol-button,
  .kol-nav .kol-link {
    border-radius: var(--kern-metric-border-radius-default);
    width: 100%;
    min-width: var(--a11y-min-size);
    min-height: var(--a11y-min-size);
    padding: 0;
    padding-right: var(--kol-nav-list-item-padding);
    padding-left: calc(var(--kol-nav-item-padding-left) * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-nav .kol-button:hover,
  .kol-nav .kol-link:hover {
    background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-nav--is-compact {
    --kol-nav-list-item-padding: 0 calc(10 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-nav__list {
    gap: var(--kern-metric-space-small);
    --kol-nav-nested-padding-left: calc(var(--kol-nav-item-padding-left) + 8);
  }
  .kol-nav__list-item {
    --kol-nav-item-padding-left: calc(var(--kol-nav-nested-padding-left) + 8);
  }
  .kol-nav__list--horizontal {
    -moz-column-gap: var(--kern-metric-space-small);
         column-gap: var(--kern-metric-space-small);
  }
  .kol-nav__list-item--active > .kol-nav__entry-wrapper .kol-button,
  .kol-nav__list-item--active > .kol-nav__entry-wrapper .kol-link {
    font-weight: var(--kern-typography-font-weight-semi-bold);
  }
  .kol-nav__list--nested {
    margin-top: var(--kern-metric-space-small);
  }
  .kol-nav__toggle-button .kol-button {
    padding: 0 calc(10 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-nav__entry-wrapper {
    background: var(--kern-color-layout-background-hued);
  }
}`,Dt=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
@layer kol-theme-component {
  .kol-pagination .kol-button {
    --button-min-size: var(--kern-metric-dimension-x-large);
    --button-padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    font-size: var(--kern-typography-font-size-static-medium);
  }
  .kol-pagination .kol-button:focus-visible {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-pagination .kol-button:disabled {
    opacity: 0.4;
  }
  .kol-pagination .kol-button--hide-label {
    --button-padding: var(--kern-metric-space-small);
  }
  .kol-pagination .kol-button--inline {
    --button-min-size: 0;
  }
  .kol-pagination .kol-button__text {
    color: var(--button-text-color);
    background-color: var(--button-text-background-color);
    border-color: var(--button-text-border-color);
    border-style: solid;
    border-radius: var(--kern-metric-border-radius-default);
    min-width: var(--button-min-size);
    min-height: var(--button-min-size);
    padding: var(--button-padding);
    border-width: var(--kern-metric-border-width-light);
  }
  .kol-pagination .kol-button .kol-span__container {
    gap: var(--kern-metric-space-small);
  }
  .kol-pagination .kol-button .kol-span__label {
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-pagination .kol-button .kol-icon {
    font-size: var(--kern-metric-space-large);
  }
  .kol-pagination .kol-button--primary {
    --button-text-background-color-default: var(--kern-color-action-default);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  .kol-pagination .kol-button--primary:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-hover);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-hover);
  }
  .kol-pagination .kol-button--primary:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-active);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-active);
  }
  .kol-pagination .kol-button {
    /* Not specified in Kern! */
  }
  .kol-pagination .kol-button--danger {
    --button-text-background-color-default: var(--kern-color-feedback-danger);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  @supports (color-mix: color) {
    .kol-pagination .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 85%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-pagination .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: #a20d08;
    }
  }
  @supports (color-mix: color) {
    .kol-pagination .kol-button--danger:not([disabled]):active {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 80%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-pagination .kol-button--danger:not([disabled]):active {
      --button-text-background-color: #980c07;
    }
  }
  .kol-pagination .kol-button .badge-text-hint {
    color: var(--button-text-background-color-default);
    background-color: var(--button-text-color);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-pagination .kol-button .badge-text-hint, .kol-span .kol-span .kol-pagination .kol-button .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-pagination {
    /* Normal button variants */
  }
  .kol-pagination .kol-button--secondary,
  .kol-pagination .kol-link--secondary,
  .kol-pagination .kol-button--normal,
  .kol-pagination .kol-link--normal {
    --button-text-background-color-default: var(--kern-neutral-000);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-default);
  }
  .kol-pagination .kol-button--secondary:not([disabled]):hover,
  .kol-pagination .kol-link--secondary:not([disabled]):hover,
  .kol-pagination .kol-button--normal:not([disabled]):hover,
  .kol-pagination .kol-link--normal:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-pagination .kol-button--secondary:not([disabled]):active,
  .kol-pagination .kol-link--secondary:not([disabled]):active,
  .kol-pagination .kol-button--normal:not([disabled]):active,
  .kol-pagination .kol-link--normal:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  .kol-pagination {
    /* Ghost button variants */
  }
  .kol-pagination .kol-button--tertiary,
  .kol-pagination .kol-link--tertiary,
  .kol-pagination .kol-button--ghost,
  .kol-pagination .kol-link--ghost {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-pagination .kol-button--tertiary:not([disabled]):hover,
  .kol-pagination .kol-link--tertiary:not([disabled]):hover,
  .kol-pagination .kol-button--ghost:not([disabled]):hover,
  .kol-pagination .kol-link--ghost:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-pagination .kol-button--tertiary:not([disabled]):active,
  .kol-pagination .kol-link--tertiary:not([disabled]):active,
  .kol-pagination .kol-button--ghost:not([disabled]):active,
  .kol-pagination .kol-link--ghost:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-pagination .kol-button--tertiary:not(:has(.kol-icon)),
    .kol-pagination .kol-link--tertiary:not(:has(.kol-icon)),
    .kol-pagination .kol-button--ghost:not(:has(.kol-icon)),
    .kol-pagination .kol-link--ghost:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-pagination .kol-button--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-pagination .kol-link--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-pagination .kol-button--ghost:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-pagination .kol-link--ghost:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-pagination .kol-button--tertiary,
    .kol-pagination .kol-link--tertiary,
    .kol-pagination .kol-button--ghost,
    .kol-pagination .kol-link--ghost {
      text-decoration-line: underline;
    }
    .kol-pagination .kol-button--tertiary:not([disabled]):hover,
    .kol-pagination .kol-link--tertiary:not([disabled]):hover,
    .kol-pagination .kol-button--ghost:not([disabled]):hover,
    .kol-pagination .kol-link--ghost:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-pagination .badge-text-hint {
    color: var(--kern-color-layout-text-inverse);
    background-color: var(--kern-color-layout-text-muted);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-pagination .badge-text-hint, .kol-span .kol-span .kol-pagination .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-pagination .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-pagination .kol-alert--type-info .kol-pagination .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-pagination .kol-alert--type-info .kol-pagination .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-pagination .kol-alert--type-error .kol-pagination .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-pagination .kol-alert--type-error .kol-pagination .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-pagination .kol-alert--type-success .kol-pagination .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-pagination .kol-alert--type-success .kol-pagination .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-pagination .kol-alert--type-warning .kol-pagination .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-pagination .kol-alert--type-warning .kol-pagination .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-pagination .kol-alert {
    /* Variant card base */
  }
  .kol-pagination .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-pagination .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-pagination .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-pagination .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-pagination .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-pagination .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-pagination .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-pagination .kol-alert {
    /* Variant msg */
  }
  .kol-pagination .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-pagination .kol-alert {
    /* Type variants */
  }
  .kol-pagination .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-pagination .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-pagination .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-pagination .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-pagination .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-pagination .kol-alert {
    /* Elements */
  }
  .kol-pagination .kol-alert--variant-card .kol-pagination .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-pagination .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-pagination .kol-alert--variant-card .kol-pagination .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-pagination .kol-alert--variant-msg .kol-pagination .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-pagination .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-pagination .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-pagination .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-pagination .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-pagination .kol-alert--variant-card .kol-pagination .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-pagination .kol-alert--variant-card .kol-pagination .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-alert--variant-msg .kol-pagination .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-form-field {
    padding: var(--kern-metric-space-none);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--kern-typography-font-family-default);
  }
  .kol-pagination .kol-form-field--read-only .kol-pagination .kol-form-field__label, .kol-pagination .kol-form-field--disabled .kol-pagination .kol-form-field__label {
    opacity: 1;
    cursor: not-allowed;
  }
  .kol-pagination .kol-form-field__label {
    color: var(--kern-color-layout-text-default);
    padding: var(--kern-metric-baseline-label-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-label-default-padding-bottom) var(--kern-metric-space-none);
    order: 1;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-pagination .kol-form-field__label__read-only {
    display: none;
  }
  .kol-pagination .kol-form-field__msg {
    order: 4;
  }
  .kol-pagination .kol-form-field__msg .kol-alert__icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-form-field__hint {
    color: var(--kern-color-layout-text-default);
    color: var(--kern-color-layout-text-muted, #404565);
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-body-default-padding-bottom) var(--kern-metric-space-none);
    order: 2;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    font-style: normal;
  }
  .kol-pagination .kol-form-field__input {
    order: 3;
  }
  .kol-pagination .kol-form-field__counter {
    color: var(--kern-color-feedback-loader);
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.25;
  }
  .kol-pagination .kol-form-field--required .kol-pagination .kol-form-field__label-text::after {
    padding-left: 0.125em;
  }
  .kol-pagination .kol-form-field--required .kol-pagination .kol-form-field__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-pagination .kol-form-field--error {
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-danger);
  }
  .kol-pagination .kol-input {
    color: var(--kern-color-layout-text-default);
    background: transparent;
    height: var(--kern-metric-dimension-x-large);
    font-family: var(--kern-typography-font-family-default);
    border: none;
  }
  .kol-pagination .kol-input--readonly {
    color: var(--color-black-70);
  }
  .kol-pagination .kol-input:disabled {
    opacity: 1;
    color: var(--color-black-60);
  }
  .kol-pagination .kol-input:disabled::-moz-placeholder {
    color: var(--color-black-60);
  }
  .kol-pagination .kol-input:disabled::placeholder {
    color: var(--color-black-60);
  }
  .kol-pagination .kol-input-container {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small) var(--kern-metric-border-radius-small) 0 0;
    position: relative;
    padding: 0 var(--kern-metric-space-default);
    gap: 0;
    border: none;
    border-bottom: var(--kol-input-border-width) solid var(--kol-input-border-color);
    --kol-input-border-color: var(--kern-color-form-input-border);
    --kol-input-border-width: var(--kern-metric-border-width-default);
  }
  .kol-pagination .kol-input-container:not(.kol-pagination .kol-input-container--disabled):hover {
    box-shadow: 0 calc(-1 * var(--kern-metric-border-width-default)) 0 0 var(--kol-input-border-color) inset;
  }
  .kol-pagination .kol-input-container:focus-within {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-border-color);
    border-radius: var(--kern-metric-border-radius-small);
    border-bottom-color: transparent;
  }
  .kol-pagination .kol-input-container:focus-within:hover {
    box-shadow: none;
  }
  .kol-pagination .kol-input-container:has(.kol-input--readonly) {
    background: inherit;
    --kol-input-border-color: var(--kern-color-layout-border);
    --kol-input-border-width: var(--kern-metric-border-width-light);
  }
  .kol-pagination .kol-input-container:has(.kol-input--readonly) .kol-input--readonly {
    cursor: not-allowed;
  }
  .kol-pagination .kol-input-container--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: not-allowed;
  }
  .kol-pagination .kol-input-container--error {
    --kol-input-border-color: var(--kern-color-feedback-danger);
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-pagination .kol-input-container__smart-button .kol-button {
    color: var(--kern-color-feedback-info, );
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
    border-left: 1px solid var(--border-color);
    transition: all 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-pagination .kol-input-container__smart-button .kol-button:disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-pagination .kol-input-container__smart-button .kol-button:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-pagination .kol-input-container__smart-button .kol-button:focus {
    color: var(--kern-color-layout-background-default);
    background-color: var(--kern-color-form-input-border);
    outline: var(--kern-color-form-input-border) solid 2px;
    border: 1 solid var(--kern-color-form-input-border);
    outline-offset: 2px;
  }
  .kol-pagination .kol-select {
    color: var(--kern-color-layout-text-default);
    background-color: transparent;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: var(--kern-metric-baseline-body-default-padding-top) 0 var(--kern-metric-baseline-body-default-padding-bottom);
    font-family: var(--kern-typography-font-family-default);
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    font-style: normal;
    text-overflow: ellipsis;
  }
  .kol-pagination .kol-select--error {
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-pagination .kol-select:not([multiple]) {
    padding-right: calc(var(--a11y-min-size) + calc(7 * 1rem / var(--kolibri-root-font-size, 16)));
    padding-left: calc(7 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-select--error[multiple] .kol-pagination .kol-select__option {
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-pagination .kol-select__option {
    background: var(--kern-color-form-input-background);
  }
  .kol-pagination .kol-select__option:checked:not(:disabled) {
    color: var(--kern-color-layout-text-default);
    background-color: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-selected));
  }
  .kol-pagination .kol-select__option:hover:not(:disabled) {
    background-color: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-hover));
  }
  .kol-pagination .kol-select__option:focus:not(:disabled), .kol-pagination .kol-select__option:focus-visible:not(:disabled) {
    background-color: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-focus));
    outline: 0;
  }
  .kol-pagination .kol-select__option:active:not(:disabled) {
    background-color: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-active));
  }
  .kol-pagination .kol-form-field--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-pagination .kol-input-container {
    height: auto;
    min-height: var(--kern-metric-dimension-x-large);
    padding: 0;
    gap: var(--kern-metric-space-none);
  }
  .kol-pagination .kol-input-container__adornment--end {
    padding: 0 var(--kern-metric-space-default) 0 0;
  }
  .kol-pagination .kol-input-container__adornment--start {
    padding: 0 0 0 var(--kern-metric-space-default);
  }
  .kol-pagination .kol-input-container__container:not(:has(select[multiple]))::after {
    transform: translateY(-50%);
    color: var(--kern-color-action-default);
    display: inline-block;
    position: absolute;
    position: absolute;
    top: var(--kern-metric-dimension-default);
    right: var(--kern-metric-dimension-x-small);
    width: var(--kern-metric-dimension-default);
    height: var(--kern-metric-dimension-default);
    content: "\\e925";
    font-family: material-symbols-subset;
    font-size: var(--kern-metric-dimension-default);
    pointer-events: none;
  }
  .kol-pagination {
    display: flex;
    gap: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination__navigation-list {
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination__button--selected .kol-button--normal:disabled {
    --button-text-background-color: var(--kern-color-action-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
    --button-badge-color: var(--button-text-background-color);
    opacity: 1;
  }
  .kol-pagination__separator {
    color: var(--kern-color-action-default);
  }
  .kol-pagination .kol-form-field {
    align-items: center;
  }
}`,Ot=`@layer kol-theme-component {
  .kol-button {
    --button-min-size: var(--kern-metric-dimension-x-large);
    --button-padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    font-size: var(--kern-typography-font-size-static-medium);
  }
  .kol-button:focus-visible {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-button:disabled {
    opacity: 0.4;
  }
  .kol-button--hide-label {
    --button-padding: var(--kern-metric-space-small);
  }
  .kol-button--inline {
    --button-min-size: 0;
  }
  .kol-button__text {
    color: var(--button-text-color);
    background-color: var(--button-text-background-color);
    border-color: var(--button-text-border-color);
    border-style: solid;
    border-radius: var(--kern-metric-border-radius-default);
    min-width: var(--button-min-size);
    min-height: var(--button-min-size);
    padding: var(--button-padding);
    border-width: var(--kern-metric-border-width-light);
  }
  .kol-button .kol-span__container {
    gap: var(--kern-metric-space-small);
  }
  .kol-button .kol-span__label {
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-button .kol-icon {
    font-size: var(--kern-metric-space-large);
  }
  .kol-button--primary {
    --button-text-background-color-default: var(--kern-color-action-default);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  .kol-button--primary:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-hover);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-hover);
  }
  .kol-button--primary:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-active);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-active);
  }
  .kol-button {
    /* Not specified in Kern! */
  }
  .kol-button--danger {
    --button-text-background-color-default: var(--kern-color-feedback-danger);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  @supports (color-mix: color) {
    .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 85%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: #a20d08;
    }
  }
  @supports (color-mix: color) {
    .kol-button--danger:not([disabled]):active {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 80%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-button--danger:not([disabled]):active {
      --button-text-background-color: #980c07;
    }
  }
  .kol-button .badge-text-hint {
    color: var(--button-text-background-color-default);
    background-color: var(--button-text-color);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-button .badge-text-hint, .kol-span .kol-span .kol-button .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  /* Normal button variants */
  .kol-button--secondary,
  .kol-link--secondary,
  .kol-button--normal,
  .kol-link--normal {
    --button-text-background-color-default: var(--kern-neutral-000);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-default);
  }
  .kol-button--secondary:not([disabled]):hover,
  .kol-link--secondary:not([disabled]):hover,
  .kol-button--normal:not([disabled]):hover,
  .kol-link--normal:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--secondary:not([disabled]):active,
  .kol-link--secondary:not([disabled]):active,
  .kol-button--normal:not([disabled]):active,
  .kol-link--normal:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  /* Ghost button variants */
  .kol-button--tertiary,
  .kol-link--tertiary,
  .kol-button--ghost,
  .kol-link--ghost {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-button--tertiary:not([disabled]):hover,
  .kol-link--tertiary:not([disabled]):hover,
  .kol-button--ghost:not([disabled]):hover,
  .kol-link--ghost:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--tertiary:not([disabled]):active,
  .kol-link--tertiary:not([disabled]):active,
  .kol-button--ghost:not([disabled]):active,
  .kol-link--ghost:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-button--tertiary:not(:has(.kol-icon)),
    .kol-link--tertiary:not(:has(.kol-icon)),
    .kol-button--ghost:not(:has(.kol-icon)),
    .kol-link--ghost:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-button--ghost:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--ghost:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-button--tertiary,
    .kol-link--tertiary,
    .kol-button--ghost,
    .kol-link--ghost {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not([disabled]):hover,
    .kol-link--tertiary:not([disabled]):hover,
    .kol-button--ghost:not([disabled]):hover,
    .kol-link--ghost:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-popover-button--inline .kol-button--inline {
    --button-padding: 0;
  }
}`,kt=`@layer kol-theme-component {
  .kol-progress__bar-border {
    display: none;
  }
  .kol-progress__bar-progress {
    fill: var(--kern-color-feedback-loader);
    rx: 0;
    ry: 0;
  }
  .kol-progress__bar-background {
    fill: var(--kern-color-feedback-loader-background);
    rx: 0;
    ry: 0;
    stroke: var(--kern-color-layout-background-default);
  }
  .kol-progress__bar-value {
    margin-left: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-progress__cycle-background {
    fill: transparent;
  }
  .kol-progress__cycle-border {
    display: none;
  }
  .kol-progress__cycle-background {
    fill: transparent;
    stroke: var(--kern-color-feedback-loader-background);
  }
  .kol-progress__cycle-whitespace {
    fill: transparent;
    stroke: var(--kern-color-feedback-loader-background);
    stroke-width: calc(1 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-progress__cycle-progress {
    fill: transparent;
    stroke: var(--kern-color-feedback-loader);
    stroke-linecap: butt;
    stroke-width: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
  }
}`,At=`@layer kol-theme-component {
  .kol-quote__cite {
    display: inline-flex;
    align-items: center;
  }
  .kol-quote__cite::before {
    margin-right: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
  }
}`,jt=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
@layer kol-theme-component {
  .badge-text-hint {
    color: var(--kern-color-layout-text-inverse);
    background-color: var(--kern-color-layout-text-muted);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .badge-text-hint, .kol-span .kol-span .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field {
    padding: var(--kern-metric-space-none);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--kern-typography-font-family-default);
  }
  .kol-form-field--read-only .kol-form-field__label, .kol-form-field--disabled .kol-form-field__label {
    opacity: 1;
    cursor: not-allowed;
  }
  .kol-form-field__label {
    color: var(--kern-color-layout-text-default);
    padding: var(--kern-metric-baseline-label-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-label-default-padding-bottom) var(--kern-metric-space-none);
    order: 1;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-form-field__label__read-only {
    display: none;
  }
  .kol-form-field__msg {
    order: 4;
  }
  .kol-form-field__msg .kol-alert__icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field__hint {
    color: var(--kern-color-layout-text-default);
    color: var(--kern-color-layout-text-muted, #404565);
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-body-default-padding-bottom) var(--kern-metric-space-none);
    order: 2;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    font-style: normal;
  }
  .kol-form-field__input {
    order: 3;
  }
  .kol-form-field__counter {
    color: var(--kern-color-feedback-loader);
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.25;
  }
  .kol-form-field--required .kol-form-field__label-text::after {
    padding-left: 0.125em;
  }
  .kol-form-field--required .kol-form-field__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-form-field--error {
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-danger);
  }
  .kol-input {
    color: var(--kern-color-layout-text-default);
    background: transparent;
    height: var(--kern-metric-dimension-x-large);
    font-family: var(--kern-typography-font-family-default);
    border: none;
  }
  .kol-input--readonly {
    color: var(--color-black-70);
  }
  .kol-input:disabled {
    opacity: 1;
    color: var(--color-black-60);
  }
  .kol-input:disabled::-moz-placeholder {
    color: var(--color-black-60);
  }
  .kol-input:disabled::placeholder {
    color: var(--color-black-60);
  }
  .kol-input-container {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small) var(--kern-metric-border-radius-small) 0 0;
    position: relative;
    padding: 0 var(--kern-metric-space-default);
    gap: 0;
    border: none;
    border-bottom: var(--kol-input-border-width) solid var(--kol-input-border-color);
    --kol-input-border-color: var(--kern-color-form-input-border);
    --kol-input-border-width: var(--kern-metric-border-width-default);
  }
  .kol-input-container:not(.kol-input-container--disabled):hover {
    box-shadow: 0 calc(-1 * var(--kern-metric-border-width-default)) 0 0 var(--kol-input-border-color) inset;
  }
  .kol-input-container:focus-within {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-border-color);
    border-radius: var(--kern-metric-border-radius-small);
    border-bottom-color: transparent;
  }
  .kol-input-container:focus-within:hover {
    box-shadow: none;
  }
  .kol-input-container:has(.kol-input--readonly) {
    background: inherit;
    --kol-input-border-color: var(--kern-color-layout-border);
    --kol-input-border-width: var(--kern-metric-border-width-light);
  }
  .kol-input-container:has(.kol-input--readonly) .kol-input--readonly {
    cursor: not-allowed;
  }
  .kol-input-container--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: not-allowed;
  }
  .kol-input-container--error {
    --kol-input-border-color: var(--kern-color-feedback-danger);
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-input-container__smart-button .kol-button {
    color: var(--kern-color-feedback-info, );
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
    border-left: 1px solid var(--border-color);
    transition: all 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-input-container__smart-button .kol-button:disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-input-container__smart-button .kol-button:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-input-container__smart-button .kol-button:focus {
    color: var(--kern-color-layout-background-default);
    background-color: var(--kern-color-form-input-border);
    outline: var(--kern-color-form-input-border) solid 2px;
    border: 1 solid var(--kern-color-form-input-border);
    outline-offset: 2px;
  }
  .kol-select {
    color: var(--kern-color-layout-text-default);
    background-color: transparent;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: var(--kern-metric-baseline-body-default-padding-top) 0 var(--kern-metric-baseline-body-default-padding-bottom);
    font-family: var(--kern-typography-font-family-default);
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    font-style: normal;
    text-overflow: ellipsis;
  }
  .kol-select--error {
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-select:not([multiple]) {
    padding-right: calc(var(--a11y-min-size) + calc(7 * 1rem / var(--kolibri-root-font-size, 16)));
    padding-left: calc(7 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-select--error[multiple] .kol-select__option {
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-select__option {
    background: var(--kern-color-form-input-background);
  }
  .kol-select__option:checked:not(:disabled) {
    color: var(--kern-color-layout-text-default);
    background-color: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-selected));
  }
  .kol-select__option:hover:not(:disabled) {
    background-color: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-hover));
  }
  .kol-select__option:focus:not(:disabled), .kol-select__option:focus-visible:not(:disabled) {
    background-color: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-focus));
    outline: 0;
  }
  .kol-select__option:active:not(:disabled) {
    background-color: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-active));
  }
  .kol-form-field--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-input-container {
    height: auto;
    min-height: var(--kern-metric-dimension-x-large);
    padding: 0;
    gap: var(--kern-metric-space-none);
  }
  .kol-input-container__adornment--end {
    padding: 0 var(--kern-metric-space-default) 0 0;
  }
  .kol-input-container__adornment--start {
    padding: 0 0 0 var(--kern-metric-space-default);
  }
  .kol-input-container__container:not(:has(select[multiple]))::after {
    transform: translateY(-50%);
    color: var(--kern-color-action-default);
    display: inline-block;
    position: absolute;
    position: absolute;
    top: var(--kern-metric-dimension-default);
    right: var(--kern-metric-dimension-x-small);
    width: var(--kern-metric-dimension-default);
    height: var(--kern-metric-dimension-default);
    content: "\\e925";
    font-family: material-symbols-subset;
    font-size: var(--kern-metric-dimension-default);
    pointer-events: none;
  }
}`,Mt=`@charset "UTF-8";
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
/* Shared styles for combobox and single-select */
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
@layer kol-theme-component {
  .badge-text-hint {
    color: var(--kern-color-layout-text-inverse);
    background-color: var(--kern-color-layout-text-muted);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .badge-text-hint, .kol-span .kol-span .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field {
    padding: var(--kern-metric-space-none);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--kern-typography-font-family-default);
  }
  .kol-form-field--read-only .kol-form-field__label, .kol-form-field--disabled .kol-form-field__label {
    opacity: 1;
    cursor: not-allowed;
  }
  .kol-form-field__label {
    color: var(--kern-color-layout-text-default);
    padding: var(--kern-metric-baseline-label-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-label-default-padding-bottom) var(--kern-metric-space-none);
    order: 1;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-form-field__label__read-only {
    display: none;
  }
  .kol-form-field__msg {
    order: 4;
  }
  .kol-form-field__msg .kol-alert__icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field__hint {
    color: var(--kern-color-layout-text-default);
    color: var(--kern-color-layout-text-muted, #404565);
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-body-default-padding-bottom) var(--kern-metric-space-none);
    order: 2;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    font-style: normal;
  }
  .kol-form-field__input {
    order: 3;
  }
  .kol-form-field__counter {
    color: var(--kern-color-feedback-loader);
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.25;
  }
  .kol-form-field--required .kol-form-field__label-text::after {
    padding-left: 0.125em;
  }
  .kol-form-field--required .kol-form-field__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-form-field--error {
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-danger);
  }
  .kol-input {
    color: var(--kern-color-layout-text-default);
    background: transparent;
    height: var(--kern-metric-dimension-x-large);
    font-family: var(--kern-typography-font-family-default);
    border: none;
  }
  .kol-input--readonly {
    color: var(--color-black-70);
  }
  .kol-input:disabled {
    opacity: 1;
    color: var(--color-black-60);
  }
  .kol-input:disabled::-moz-placeholder {
    color: var(--color-black-60);
  }
  .kol-input:disabled::placeholder {
    color: var(--color-black-60);
  }
  .kol-input-container {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small) var(--kern-metric-border-radius-small) 0 0;
    position: relative;
    padding: 0 var(--kern-metric-space-default);
    gap: 0;
    border: none;
    border-bottom: var(--kol-input-border-width) solid var(--kol-input-border-color);
    --kol-input-border-color: var(--kern-color-form-input-border);
    --kol-input-border-width: var(--kern-metric-border-width-default);
  }
  .kol-input-container:not(.kol-input-container--disabled):hover {
    box-shadow: 0 calc(-1 * var(--kern-metric-border-width-default)) 0 0 var(--kol-input-border-color) inset;
  }
  .kol-input-container:focus-within {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-border-color);
    border-radius: var(--kern-metric-border-radius-small);
    border-bottom-color: transparent;
  }
  .kol-input-container:focus-within:hover {
    box-shadow: none;
  }
  .kol-input-container:has(.kol-input--readonly) {
    background: inherit;
    --kol-input-border-color: var(--kern-color-layout-border);
    --kol-input-border-width: var(--kern-metric-border-width-light);
  }
  .kol-input-container:has(.kol-input--readonly) .kol-input--readonly {
    cursor: not-allowed;
  }
  .kol-input-container--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: not-allowed;
  }
  .kol-input-container--error {
    --kol-input-border-color: var(--kern-color-feedback-danger);
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-input-container__smart-button .kol-button {
    color: var(--kern-color-feedback-info, );
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
    border-left: 1px solid var(--border-color);
    transition: all 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-input-container__smart-button .kol-button:disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-input-container__smart-button .kol-button:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-input-container__smart-button .kol-button:focus {
    color: var(--kern-color-layout-background-default);
    background-color: var(--kern-color-form-input-border);
    outline: var(--kern-color-form-input-border) solid 2px;
    border: 1 solid var(--kern-color-form-input-border);
    outline-offset: 2px;
  }
  .kol-custom-suggestions-option {
    color: var(--kern-color-layout-text-default);
    display: flex;
    min-height: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
    padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    align-items: center;
    transition: 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-custom-suggestions-option:hover:not(:disabled) {
    background: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-hover));
  }
  .kol-custom-suggestions-option:focus:not(:disabled) {
    background: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-hover));
    outline: 0;
  }
  .kol-custom-suggestions-options-group {
    background: var(--kern-color-form-input-background);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
    right: calc(-1 * 1rem / var(--kolibri-root-font-size, 16));
    left: calc(-8 * 1rem / var(--kolibri-root-font-size, 16));
    max-height: calc(40 * 1rem / var(--kolibri-root-font-size, 16) * 5 + 2 * 1rem / var(--kolibri-root-font-size, 16));
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    padding: calc(4 * 1rem / var(--kolibri-root-font-size, 16)) 0;
    overflow-x: hidden;
    overflow-y: auto;
    border: 1px solid var(--kern-color-layout-border);
  }
  .kol-custom-suggestions-toggle {
    color: var(--kern-color-action-default);
    display: grid;
    place-items: center;
    transition: 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-custom-suggestions-toggle:focus {
    outline: 0;
  }
  .kol-input-container--error .kol-custom-suggestions-toggle:not(:disabled) {
    color: var(--kern-color-feedback-danger);
  }
  .kol-custom-suggestions-toggle:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-custom-suggestions-toggle .kol-icon {
    color: inherit;
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-single-select__group,
  .kol-combobox__group {
    display: inline-flex;
    width: 100%;
    align-items: center;
  }
  .kol-single-select__input,
  .kol-combobox__input {
    position: relative;
    padding: 0;
    flex-grow: 1;
    border: none;
  }
  .kol-input-container {
    padding-right: 0;
  }
  .kol-single-select__delete {
    color: var(--kern-color-action-default);
    display: flex;
    width: var(--a11y-min-size);
    height: var(--a11y-min-size);
    align-items: center;
    justify-content: center;
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-single-select__delete:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
}`,Nt=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
@layer kol-theme-component {
  .kol-link {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-default-padding-top, 6px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-default-padding-bottom, 2px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-medium, 18px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
    color: var(--kern-color-action-default);
    display: inline-flex;
    align-items: flex-start;
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-1);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-link__text {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-link .kol-span__container {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-link .kol-icon {
    color: var(--kern-color-action-default);
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-link:has(.kol-icon) {
    text-decoration: none;
  }
  .kol-link:has(.kol-icon):active .kol-span__label, .kol-link:has(.kol-icon):hover .kol-span__label {
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-3);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-link:has(.kol-icon) .kol-link__text,
  .kol-link:has(.kol-icon) .kol-span__label {
    text-decoration: none;
  }
  .kol-link:visited {
    color: var(--kern-color-action-visited);
  }
  .kol-link:visited .kol-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-link:not(.kol-link--disabled):focus {
    outline: none;
  }
  .kol-link:not(.kol-link--disabled):hover {
    text-decoration-thickness: var(--kern-3);
  }
  .kol-link:not(.kol-link--disabled):active {
    color: var(--kern-color-action-default, );
    text-decoration-thickness: var(--kern-3);
  }
  .kol-link:not(.kol-link--disabled):active .kern-icon {
    color: var(--kern-color-action-default);
  }
  .kol-link:not(.kol-link--disabled):visited {
    color: var(--kern-color-action-visited);
  }
  .kol-link:not(.kol-link--disabled):visited .kern-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-link--small {
    color: var(--kern-color-action-default);
    gap: var(--kern-metric-space-2x-small);
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-small-padding-top, 7px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-small-padding-bottom, 1px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-small, 16px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
  }
  .kol-link--small .kol-icon {
    width: var(--kern-metric-dimension-small);
    min-width: var(--kern-metric-dimension-small);
    height: var(--kern-metric-dimension-small);
    min-height: var(--kern-metric-dimension-small);
  }
  .kol-link:not(.kol-link--stretched):focus-visible {
    box-shadow: var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 2px var(--kern-color-action-on-default), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 4px var(--kern-color-action-focus-border-inside), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 6px var(--kern-color-action-focus-border-outside);
    outline-color: transparent;
    border-radius: var(--kern-metric-border-radius-small, 0.125rem);
    position: relative;
    z-index: 1;
  }
  .kol-link--external-link {
    flex-direction: row-reverse;
  }
  .kol-link {
    background-color: var(--kern-color-layout-background-hued);
    padding: var(--kern-metric-space-default);
  }
}`,Pt=`@layer kol-theme-component {
  .kol-spin__loader {
    animation: rotation 1.5s linear infinite;
  }
  .kol-spin__loader:before {
    border-color: var(--kern-color-action-focus-background) var(--kern-color-feedback-loader-background) var(--kern-color-feedback-loader-background) var(--kern-color-feedback-loader-background);
    border-style: solid;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    width: calc(96 * 1rem / var(--kolibri-root-font-size, 16));
    height: calc(96 * 1rem / var(--kolibri-root-font-size, 16));
    border-width: 10px;
    animation-duration: 1.5s;
  }
  .kol-spin__spinner-element--1 {
    background-color: var(--kern-color-feedback-loader);
  }
  .kol-spin__spinner-element--2 {
    background-color: var(--kern-color-feedback-loader);
  }
  .kol-spin__spinner-element--3 {
    background-color: var(--kern-color-feedback-loader);
  }
  .kol-spin__spinner-element--neutral {
    background-color: var(--kern-color-feedback-loader-background);
  }
  @keyframes prixClipFix {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}`,Ft=`@layer kol-theme-component {
  .kol-button {
    --button-min-size: var(--kern-metric-dimension-x-large);
    --button-padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    font-size: var(--kern-typography-font-size-static-medium);
  }
  .kol-button:focus-visible {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-button:disabled {
    opacity: 0.4;
  }
  .kol-button--hide-label {
    --button-padding: var(--kern-metric-space-small);
  }
  .kol-button--inline {
    --button-min-size: 0;
  }
  .kol-button__text {
    color: var(--button-text-color);
    background-color: var(--button-text-background-color);
    border-color: var(--button-text-border-color);
    border-style: solid;
    border-radius: var(--kern-metric-border-radius-default);
    min-width: var(--button-min-size);
    min-height: var(--button-min-size);
    padding: var(--button-padding);
    border-width: var(--kern-metric-border-width-light);
  }
  .kol-button .kol-span__container {
    gap: var(--kern-metric-space-small);
  }
  .kol-button .kol-span__label {
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-button .kol-icon {
    font-size: var(--kern-metric-space-large);
  }
  .kol-button--primary {
    --button-text-background-color-default: var(--kern-color-action-default);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  .kol-button--primary:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-hover);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-hover);
  }
  .kol-button--primary:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-active);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-active);
  }
  .kol-button {
    /* Not specified in Kern! */
  }
  .kol-button--danger {
    --button-text-background-color-default: var(--kern-color-feedback-danger);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  @supports (color-mix: color) {
    .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 85%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: #a20d08;
    }
  }
  @supports (color-mix: color) {
    .kol-button--danger:not([disabled]):active {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 80%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-button--danger:not([disabled]):active {
      --button-text-background-color: #980c07;
    }
  }
  .kol-button .badge-text-hint {
    color: var(--button-text-background-color-default);
    background-color: var(--button-text-color);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-button .badge-text-hint, .kol-span .kol-span .kol-button .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  /* Normal button variants */
  .kol-button--secondary,
  .kol-link--secondary,
  .kol-button--normal,
  .kol-link--normal {
    --button-text-background-color-default: var(--kern-neutral-000);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-default);
  }
  .kol-button--secondary:not([disabled]):hover,
  .kol-link--secondary:not([disabled]):hover,
  .kol-button--normal:not([disabled]):hover,
  .kol-link--normal:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--secondary:not([disabled]):active,
  .kol-link--secondary:not([disabled]):active,
  .kol-button--normal:not([disabled]):active,
  .kol-link--normal:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  /* Ghost button variants */
  .kol-button--tertiary,
  .kol-link--tertiary,
  .kol-button--ghost,
  .kol-link--ghost {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-button--tertiary:not([disabled]):hover,
  .kol-link--tertiary:not([disabled]):hover,
  .kol-button--ghost:not([disabled]):hover,
  .kol-link--ghost:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--tertiary:not([disabled]):active,
  .kol-link--tertiary:not([disabled]):active,
  .kol-button--ghost:not([disabled]):active,
  .kol-link--ghost:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-button--tertiary:not(:has(.kol-icon)),
    .kol-link--tertiary:not(:has(.kol-icon)),
    .kol-button--ghost:not(:has(.kol-icon)),
    .kol-link--ghost:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-button--ghost:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--ghost:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-button--tertiary,
    .kol-link--tertiary,
    .kol-button--ghost,
    .kol-link--ghost {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not([disabled]):hover,
    .kol-link--tertiary:not([disabled]):hover,
    .kol-button--ghost:not([disabled]):hover,
    .kol-link--ghost:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-split-button__button .kol-button__text {
    border-radius: var(--kern-metric-border-radius-default) 0 0 var(--kern-metric-border-radius-default);
    border-right-width: 0;
  }
  .kol-split-button__secondary-button .kol-button__text {
    border-radius: 0 var(--kern-metric-border-radius-default) var(--kern-metric-border-radius-default) 0;
    border-left-width: 0;
  }
}`,It=`@charset "UTF-8";
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
@layer kol-theme-component {
  .kol-table-settings {
    background: var(--kern-color-layout-background-default);
  }
  .kol-table-settings .kol-button {
    --button-min-size: var(--kern-metric-dimension-x-large);
    --button-padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    font-size: var(--kern-typography-font-size-static-medium);
  }
  .kol-table-settings .kol-button:focus-visible {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-table-settings .kol-button:disabled {
    opacity: 0.4;
  }
  .kol-table-settings .kol-button--hide-label {
    --button-padding: var(--kern-metric-space-small);
  }
  .kol-table-settings .kol-button--inline {
    --button-min-size: 0;
  }
  .kol-table-settings .kol-button__text {
    color: var(--button-text-color);
    background-color: var(--button-text-background-color);
    border-color: var(--button-text-border-color);
    border-style: solid;
    border-radius: var(--kern-metric-border-radius-default);
    min-width: var(--button-min-size);
    min-height: var(--button-min-size);
    padding: var(--button-padding);
    border-width: var(--kern-metric-border-width-light);
  }
  .kol-table-settings .kol-button .kol-span__container {
    gap: var(--kern-metric-space-small);
  }
  .kol-table-settings .kol-button .kol-span__label {
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-table-settings .kol-button .kol-icon {
    font-size: var(--kern-metric-space-large);
  }
  .kol-table-settings .kol-button--primary {
    --button-text-background-color-default: var(--kern-color-action-default);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  .kol-table-settings .kol-button--primary:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-hover);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-hover);
  }
  .kol-table-settings .kol-button--primary:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-active);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-active);
  }
  .kol-table-settings .kol-button {
    /* Not specified in Kern! */
  }
  .kol-table-settings .kol-button--danger {
    --button-text-background-color-default: var(--kern-color-feedback-danger);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  @supports (color-mix: color) {
    .kol-table-settings .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 85%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-table-settings .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: #a20d08;
    }
  }
  @supports (color-mix: color) {
    .kol-table-settings .kol-button--danger:not([disabled]):active {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 80%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-table-settings .kol-button--danger:not([disabled]):active {
      --button-text-background-color: #980c07;
    }
  }
  .kol-table-settings .kol-button .badge-text-hint {
    color: var(--button-text-background-color-default);
    background-color: var(--button-text-color);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-table-settings .kol-button .badge-text-hint, .kol-span .kol-span .kol-table-settings .kol-button .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-table-settings {
    /* Normal button variants */
  }
  .kol-table-settings .kol-button--secondary,
  .kol-table-settings .kol-link--secondary,
  .kol-table-settings .kol-button--normal,
  .kol-table-settings .kol-link--normal {
    --button-text-background-color-default: var(--kern-neutral-000);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-default);
  }
  .kol-table-settings .kol-button--secondary:not([disabled]):hover,
  .kol-table-settings .kol-link--secondary:not([disabled]):hover,
  .kol-table-settings .kol-button--normal:not([disabled]):hover,
  .kol-table-settings .kol-link--normal:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-table-settings .kol-button--secondary:not([disabled]):active,
  .kol-table-settings .kol-link--secondary:not([disabled]):active,
  .kol-table-settings .kol-button--normal:not([disabled]):active,
  .kol-table-settings .kol-link--normal:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  .kol-table-settings {
    /* Ghost button variants */
  }
  .kol-table-settings .kol-button--tertiary,
  .kol-table-settings .kol-link--tertiary,
  .kol-table-settings .kol-button--ghost,
  .kol-table-settings .kol-link--ghost {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-table-settings .kol-button--tertiary:not([disabled]):hover,
  .kol-table-settings .kol-link--tertiary:not([disabled]):hover,
  .kol-table-settings .kol-button--ghost:not([disabled]):hover,
  .kol-table-settings .kol-link--ghost:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-table-settings .kol-button--tertiary:not([disabled]):active,
  .kol-table-settings .kol-link--tertiary:not([disabled]):active,
  .kol-table-settings .kol-button--ghost:not([disabled]):active,
  .kol-table-settings .kol-link--ghost:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-table-settings .kol-button--tertiary:not(:has(.kol-icon)),
    .kol-table-settings .kol-link--tertiary:not(:has(.kol-icon)),
    .kol-table-settings .kol-button--ghost:not(:has(.kol-icon)),
    .kol-table-settings .kol-link--ghost:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-table-settings .kol-button--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-table-settings .kol-link--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-table-settings .kol-button--ghost:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-table-settings .kol-link--ghost:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-table-settings .kol-button--tertiary,
    .kol-table-settings .kol-link--tertiary,
    .kol-table-settings .kol-button--ghost,
    .kol-table-settings .kol-link--ghost {
      text-decoration-line: underline;
    }
    .kol-table-settings .kol-button--tertiary:not([disabled]):hover,
    .kol-table-settings .kol-link--tertiary:not([disabled]):hover,
    .kol-table-settings .kol-button--ghost:not([disabled]):hover,
    .kol-table-settings .kol-link--ghost:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-table-settings .kol-popover-button__button .kol-button {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-table-settings .kol-popover-button__button .kol-button:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-table-settings .kol-popover-button__button .kol-button:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-table-settings .kol-popover-button__button .kol-button:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-table-settings .kol-popover-button__button .kol-button:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-table-settings .kol-popover-button__button .kol-button {
      text-decoration-line: underline;
    }
    .kol-table-settings .kol-popover-button__button .kol-button:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-table-settings__content {
    border-radius: var(--kern-metric-border-radius-default);
    padding: var(--kern-metric-space-default);
    border: var(--kern-metric-border-width-light, 1px) solid var(--layout-border);
  }
  .kol-table-settings__error-message {
    display: block;
    margin-top: var(--kern-metric-space-default);
  }
  .kol-table-settings__columns {
    padding: var(--kern-metric-space-small);
  }
  .kol-table-settings__actions {
    display: flex;
    margin-top: var(--kern-metric-space-small);
    padding-top: var(--kern-metric-space-default);
    gap: var(--kern-metric-space-default);
    justify-content: flex-end;
    border-top: var(--kern-metric-border-width-light, 1px) solid var(--layout-border);
  }
  .kol-button:focus {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-button {
    --button-min-size: var(--kern-metric-dimension-x-large);
    --button-padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    font-size: var(--kern-typography-font-size-static-medium);
  }
  .kol-pagination .kol-button:focus-visible {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-pagination .kol-button:disabled {
    opacity: 0.4;
  }
  .kol-pagination .kol-button--hide-label {
    --button-padding: var(--kern-metric-space-small);
  }
  .kol-pagination .kol-button--inline {
    --button-min-size: 0;
  }
  .kol-pagination .kol-button__text {
    color: var(--button-text-color);
    background-color: var(--button-text-background-color);
    border-color: var(--button-text-border-color);
    border-style: solid;
    border-radius: var(--kern-metric-border-radius-default);
    min-width: var(--button-min-size);
    min-height: var(--button-min-size);
    padding: var(--button-padding);
    border-width: var(--kern-metric-border-width-light);
  }
  .kol-pagination .kol-button .kol-span__container {
    gap: var(--kern-metric-space-small);
  }
  .kol-pagination .kol-button .kol-span__label {
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-pagination .kol-button .kol-icon {
    font-size: var(--kern-metric-space-large);
  }
  .kol-pagination .kol-button--primary {
    --button-text-background-color-default: var(--kern-color-action-default);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  .kol-pagination .kol-button--primary:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-hover);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-hover);
  }
  .kol-pagination .kol-button--primary:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-active);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-active);
  }
  .kol-pagination .kol-button {
    /* Not specified in Kern! */
  }
  .kol-pagination .kol-button--danger {
    --button-text-background-color-default: var(--kern-color-feedback-danger);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  @supports (color-mix: color) {
    .kol-pagination .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 85%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-pagination .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: #a20d08;
    }
  }
  @supports (color-mix: color) {
    .kol-pagination .kol-button--danger:not([disabled]):active {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 80%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-pagination .kol-button--danger:not([disabled]):active {
      --button-text-background-color: #980c07;
    }
  }
  .kol-pagination .kol-button .badge-text-hint {
    color: var(--button-text-background-color-default);
    background-color: var(--button-text-color);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-pagination .kol-button .badge-text-hint, .kol-span .kol-span .kol-pagination .kol-button .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-pagination {
    /* Normal button variants */
  }
  .kol-pagination .kol-button--secondary,
  .kol-pagination .kol-link--secondary,
  .kol-pagination .kol-button--normal,
  .kol-pagination .kol-link--normal {
    --button-text-background-color-default: var(--kern-neutral-000);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-default);
  }
  .kol-pagination .kol-button--secondary:not([disabled]):hover,
  .kol-pagination .kol-link--secondary:not([disabled]):hover,
  .kol-pagination .kol-button--normal:not([disabled]):hover,
  .kol-pagination .kol-link--normal:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-pagination .kol-button--secondary:not([disabled]):active,
  .kol-pagination .kol-link--secondary:not([disabled]):active,
  .kol-pagination .kol-button--normal:not([disabled]):active,
  .kol-pagination .kol-link--normal:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  .kol-pagination {
    /* Ghost button variants */
  }
  .kol-pagination .kol-button--tertiary,
  .kol-pagination .kol-link--tertiary,
  .kol-pagination .kol-button--ghost,
  .kol-pagination .kol-link--ghost {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-pagination .kol-button--tertiary:not([disabled]):hover,
  .kol-pagination .kol-link--tertiary:not([disabled]):hover,
  .kol-pagination .kol-button--ghost:not([disabled]):hover,
  .kol-pagination .kol-link--ghost:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-pagination .kol-button--tertiary:not([disabled]):active,
  .kol-pagination .kol-link--tertiary:not([disabled]):active,
  .kol-pagination .kol-button--ghost:not([disabled]):active,
  .kol-pagination .kol-link--ghost:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-pagination .kol-button--tertiary:not(:has(.kol-icon)),
    .kol-pagination .kol-link--tertiary:not(:has(.kol-icon)),
    .kol-pagination .kol-button--ghost:not(:has(.kol-icon)),
    .kol-pagination .kol-link--ghost:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-pagination .kol-button--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-pagination .kol-link--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-pagination .kol-button--ghost:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-pagination .kol-link--ghost:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-pagination .kol-button--tertiary,
    .kol-pagination .kol-link--tertiary,
    .kol-pagination .kol-button--ghost,
    .kol-pagination .kol-link--ghost {
      text-decoration-line: underline;
    }
    .kol-pagination .kol-button--tertiary:not([disabled]):hover,
    .kol-pagination .kol-link--tertiary:not([disabled]):hover,
    .kol-pagination .kol-button--ghost:not([disabled]):hover,
    .kol-pagination .kol-link--ghost:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-pagination .badge-text-hint {
    color: var(--kern-color-layout-text-inverse);
    background-color: var(--kern-color-layout-text-muted);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-pagination .badge-text-hint, .kol-span .kol-span .kol-pagination .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-pagination .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-pagination .kol-alert--type-info .kol-pagination .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-pagination .kol-alert--type-info .kol-pagination .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-pagination .kol-alert--type-error .kol-pagination .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-pagination .kol-alert--type-error .kol-pagination .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-pagination .kol-alert--type-success .kol-pagination .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-pagination .kol-alert--type-success .kol-pagination .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-pagination .kol-alert--type-warning .kol-pagination .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-pagination .kol-alert--type-warning .kol-pagination .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-pagination .kol-alert {
    /* Variant card base */
  }
  .kol-pagination .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-pagination .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-pagination .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-pagination .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-pagination .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-pagination .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-pagination .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-pagination .kol-alert {
    /* Variant msg */
  }
  .kol-pagination .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-pagination .kol-alert {
    /* Type variants */
  }
  .kol-pagination .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-pagination .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-pagination .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-pagination .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-pagination .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-pagination .kol-alert {
    /* Elements */
  }
  .kol-pagination .kol-alert--variant-card .kol-pagination .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-pagination .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-pagination .kol-alert--variant-card .kol-pagination .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-pagination .kol-alert--variant-msg .kol-pagination .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-pagination .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-pagination .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-pagination .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-pagination .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-pagination .kol-alert--variant-card .kol-pagination .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-pagination .kol-alert--variant-card .kol-pagination .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-alert--variant-msg .kol-pagination .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-form-field {
    padding: var(--kern-metric-space-none);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--kern-typography-font-family-default);
  }
  .kol-pagination .kol-form-field--read-only .kol-pagination .kol-form-field__label, .kol-pagination .kol-form-field--disabled .kol-pagination .kol-form-field__label {
    opacity: 1;
    cursor: not-allowed;
  }
  .kol-pagination .kol-form-field__label {
    color: var(--kern-color-layout-text-default);
    padding: var(--kern-metric-baseline-label-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-label-default-padding-bottom) var(--kern-metric-space-none);
    order: 1;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-pagination .kol-form-field__label__read-only {
    display: none;
  }
  .kol-pagination .kol-form-field__msg {
    order: 4;
  }
  .kol-pagination .kol-form-field__msg .kol-alert__icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-form-field__hint {
    color: var(--kern-color-layout-text-default);
    color: var(--kern-color-layout-text-muted, #404565);
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-body-default-padding-bottom) var(--kern-metric-space-none);
    order: 2;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    font-style: normal;
  }
  .kol-pagination .kol-form-field__input {
    order: 3;
  }
  .kol-pagination .kol-form-field__counter {
    color: var(--kern-color-feedback-loader);
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.25;
  }
  .kol-pagination .kol-form-field--required .kol-pagination .kol-form-field__label-text::after {
    padding-left: 0.125em;
  }
  .kol-pagination .kol-form-field--required .kol-pagination .kol-form-field__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-pagination .kol-form-field--error {
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-danger);
  }
  .kol-pagination .kol-input {
    color: var(--kern-color-layout-text-default);
    background: transparent;
    height: var(--kern-metric-dimension-x-large);
    font-family: var(--kern-typography-font-family-default);
    border: none;
  }
  .kol-pagination .kol-input--readonly {
    color: var(--color-black-70);
  }
  .kol-pagination .kol-input:disabled {
    opacity: 1;
    color: var(--color-black-60);
  }
  .kol-pagination .kol-input:disabled::-moz-placeholder {
    color: var(--color-black-60);
  }
  .kol-pagination .kol-input:disabled::placeholder {
    color: var(--color-black-60);
  }
  .kol-pagination .kol-input-container {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small) var(--kern-metric-border-radius-small) 0 0;
    position: relative;
    padding: 0 var(--kern-metric-space-default);
    gap: 0;
    border: none;
    border-bottom: var(--kol-input-border-width) solid var(--kol-input-border-color);
    --kol-input-border-color: var(--kern-color-form-input-border);
    --kol-input-border-width: var(--kern-metric-border-width-default);
  }
  .kol-pagination .kol-input-container:not(.kol-pagination .kol-input-container--disabled):hover {
    box-shadow: 0 calc(-1 * var(--kern-metric-border-width-default)) 0 0 var(--kol-input-border-color) inset;
  }
  .kol-pagination .kol-input-container:focus-within {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-border-color);
    border-radius: var(--kern-metric-border-radius-small);
    border-bottom-color: transparent;
  }
  .kol-pagination .kol-input-container:focus-within:hover {
    box-shadow: none;
  }
  .kol-pagination .kol-input-container:has(.kol-input--readonly) {
    background: inherit;
    --kol-input-border-color: var(--kern-color-layout-border);
    --kol-input-border-width: var(--kern-metric-border-width-light);
  }
  .kol-pagination .kol-input-container:has(.kol-input--readonly) .kol-input--readonly {
    cursor: not-allowed;
  }
  .kol-pagination .kol-input-container--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: not-allowed;
  }
  .kol-pagination .kol-input-container--error {
    --kol-input-border-color: var(--kern-color-feedback-danger);
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-pagination .kol-input-container__smart-button .kol-button {
    color: var(--kern-color-feedback-info, );
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
    border-left: 1px solid var(--border-color);
    transition: all 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-pagination .kol-input-container__smart-button .kol-button:disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-pagination .kol-input-container__smart-button .kol-button:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-pagination .kol-input-container__smart-button .kol-button:focus {
    color: var(--kern-color-layout-background-default);
    background-color: var(--kern-color-form-input-border);
    outline: var(--kern-color-form-input-border) solid 2px;
    border: 1 solid var(--kern-color-form-input-border);
    outline-offset: 2px;
  }
  .kol-pagination .kol-select {
    color: var(--kern-color-layout-text-default);
    background-color: transparent;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: var(--kern-metric-baseline-body-default-padding-top) 0 var(--kern-metric-baseline-body-default-padding-bottom);
    font-family: var(--kern-typography-font-family-default);
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    font-style: normal;
    text-overflow: ellipsis;
  }
  .kol-pagination .kol-select--error {
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-pagination .kol-select:not([multiple]) {
    padding-right: calc(var(--a11y-min-size) + calc(7 * 1rem / var(--kolibri-root-font-size, 16)));
    padding-left: calc(7 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-select--error[multiple] .kol-pagination .kol-select__option {
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-pagination .kol-select__option {
    background: var(--kern-color-form-input-background);
  }
  .kol-pagination .kol-select__option:checked:not(:disabled) {
    color: var(--kern-color-layout-text-default);
    background-color: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-selected));
  }
  .kol-pagination .kol-select__option:hover:not(:disabled) {
    background-color: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-hover));
  }
  .kol-pagination .kol-select__option:focus:not(:disabled), .kol-pagination .kol-select__option:focus-visible:not(:disabled) {
    background-color: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-focus));
    outline: 0;
  }
  .kol-pagination .kol-select__option:active:not(:disabled) {
    background-color: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-active));
  }
  .kol-pagination .kol-form-field--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-pagination .kol-input-container {
    height: auto;
    min-height: var(--kern-metric-dimension-x-large);
    padding: 0;
    gap: var(--kern-metric-space-none);
  }
  .kol-pagination .kol-input-container__adornment--end {
    padding: 0 var(--kern-metric-space-default) 0 0;
  }
  .kol-pagination .kol-input-container__adornment--start {
    padding: 0 0 0 var(--kern-metric-space-default);
  }
  .kol-pagination .kol-input-container__container:not(:has(select[multiple]))::after {
    transform: translateY(-50%);
    color: var(--kern-color-action-default);
    display: inline-block;
    position: absolute;
    position: absolute;
    top: var(--kern-metric-dimension-default);
    right: var(--kern-metric-dimension-x-small);
    width: var(--kern-metric-dimension-default);
    height: var(--kern-metric-dimension-default);
    content: "\\e925";
    font-family: material-symbols-subset;
    font-size: var(--kern-metric-dimension-default);
    pointer-events: none;
  }
  .kol-pagination {
    display: flex;
    gap: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination__navigation-list {
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination__button--selected .kol-button--normal:disabled {
    --button-text-background-color: var(--kern-color-action-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
    --button-badge-color: var(--button-text-background-color);
    opacity: 1;
  }
  .kol-pagination__separator {
    color: var(--kern-color-action-default);
  }
  .kol-pagination .kol-form-field {
    align-items: center;
  }
  :host {
    display: flex;
    gap: var(--kern-metric-space-default);
    flex-direction: column;
  }
  .kol-table {
    line-height: 1.25;
    word-break: break-word;
  }
  .kol-table__head, .kol-table__cell {
    box-shadow: inset 0 -1px 0 0 var(--kern-color-layout-border);
    padding: calc(var(--kern-metric-baseline-body-default-padding-top) + var(--kern-metric-space-small)) var(--kern-metric-space-x-small) calc(var(--kern-metric-baseline-body-default-padding-bottom) + var(--kern-metric-space-small)) var(--kern-metric-space-x-small);
  }
  .kol-table__head--numeric, .kol-table__cell--numeric {
    text-align: right;
  }
  .kol-table th {
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
  }
  .kol-table th .kol-button {
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
  }
  .kol-table th .kol-button .kol-span__container {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-table__footer {
    box-shadow: inset 0 1px 0 0 var(--kern-color-layout-border);
  }
  .kol-table__footer .kol-table__cell {
    font-weight: var(--kern-typography-font-weight-semi-bold);
  }
  .kol-table__table {
    width: 100%;
    border-spacing: 0;
  }
  .kol-table__caption {
    display: table-caption;
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
    padding-right: calc(var(--a11y-min-size) + var(--kern-metric-space-small));
  }
  .kol-table__cell--subtext {
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
  }
  .kol-table__cell--header {
    transition: background-color 80ms cubic-bezier(0.65, 0, 0.35, 1), box-shadow 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-table__cell--header[data-sort]:not([data-sort=NOS]) .kol-button {
    cursor: pointer;
  }
  .kol-table__cell--header[data-sort]:not([data-sort=NOS]) .kol-button:hover {
    background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-table__cell--header[data-sort]:not([data-sort=NOS]) .kol-button:focus-within {
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-table__cell--selection {
    width: calc(52 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-table__cell-actions {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-table__cell-actions .kol-button {
    --button-min-size: var(--kern-metric-dimension-x-large);
    --button-padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    font-size: var(--kern-typography-font-size-static-medium);
  }
  .kol-table__cell-actions .kol-button:focus-visible {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-table__cell-actions .kol-button:disabled {
    opacity: 0.4;
  }
  .kol-table__cell-actions .kol-button--hide-label {
    --button-padding: var(--kern-metric-space-small);
  }
  .kol-table__cell-actions .kol-button--inline {
    --button-min-size: 0;
  }
  .kol-table__cell-actions .kol-button__text {
    color: var(--button-text-color);
    background-color: var(--button-text-background-color);
    border-color: var(--button-text-border-color);
    border-style: solid;
    border-radius: var(--kern-metric-border-radius-default);
    min-width: var(--button-min-size);
    min-height: var(--button-min-size);
    padding: var(--button-padding);
    border-width: var(--kern-metric-border-width-light);
  }
  .kol-table__cell-actions .kol-button .kol-span__container {
    gap: var(--kern-metric-space-small);
  }
  .kol-table__cell-actions .kol-button .kol-span__label {
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-table__cell-actions .kol-button .kol-icon {
    font-size: var(--kern-metric-space-large);
  }
  .kol-table__cell-actions .kol-button--primary {
    --button-text-background-color-default: var(--kern-color-action-default);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  .kol-table__cell-actions .kol-button--primary:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-hover);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-hover);
  }
  .kol-table__cell-actions .kol-button--primary:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-active);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-active);
  }
  .kol-table__cell-actions .kol-button {
    /* Not specified in Kern! */
  }
  .kol-table__cell-actions .kol-button--danger {
    --button-text-background-color-default: var(--kern-color-feedback-danger);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  @supports (color-mix: color) {
    .kol-table__cell-actions .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 85%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-table__cell-actions .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: #a20d08;
    }
  }
  @supports (color-mix: color) {
    .kol-table__cell-actions .kol-button--danger:not([disabled]):active {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 80%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-table__cell-actions .kol-button--danger:not([disabled]):active {
      --button-text-background-color: #980c07;
    }
  }
  .kol-table__cell-actions .kol-button .badge-text-hint {
    color: var(--button-text-background-color-default);
    background-color: var(--button-text-color);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-table__cell-actions .kol-button .badge-text-hint, .kol-span .kol-span .kol-table__cell-actions .kol-button .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-table__cell-actions {
    /* Normal button variants */
  }
  .kol-table__cell-actions .kol-button--secondary,
  .kol-table__cell-actions .kol-link--secondary,
  .kol-table__cell-actions .kol-button--normal,
  .kol-table__cell-actions .kol-link--normal {
    --button-text-background-color-default: var(--kern-neutral-000);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-default);
  }
  .kol-table__cell-actions .kol-button--secondary:not([disabled]):hover,
  .kol-table__cell-actions .kol-link--secondary:not([disabled]):hover,
  .kol-table__cell-actions .kol-button--normal:not([disabled]):hover,
  .kol-table__cell-actions .kol-link--normal:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-table__cell-actions .kol-button--secondary:not([disabled]):active,
  .kol-table__cell-actions .kol-link--secondary:not([disabled]):active,
  .kol-table__cell-actions .kol-button--normal:not([disabled]):active,
  .kol-table__cell-actions .kol-link--normal:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  .kol-table__cell-actions {
    /* Ghost button variants */
  }
  .kol-table__cell-actions .kol-button--tertiary,
  .kol-table__cell-actions .kol-link--tertiary,
  .kol-table__cell-actions .kol-button--ghost,
  .kol-table__cell-actions .kol-link--ghost {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-table__cell-actions .kol-button--tertiary:not([disabled]):hover,
  .kol-table__cell-actions .kol-link--tertiary:not([disabled]):hover,
  .kol-table__cell-actions .kol-button--ghost:not([disabled]):hover,
  .kol-table__cell-actions .kol-link--ghost:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-table__cell-actions .kol-button--tertiary:not([disabled]):active,
  .kol-table__cell-actions .kol-link--tertiary:not([disabled]):active,
  .kol-table__cell-actions .kol-button--ghost:not([disabled]):active,
  .kol-table__cell-actions .kol-link--ghost:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-table__cell-actions .kol-button--tertiary:not(:has(.kol-icon)),
    .kol-table__cell-actions .kol-link--tertiary:not(:has(.kol-icon)),
    .kol-table__cell-actions .kol-button--ghost:not(:has(.kol-icon)),
    .kol-table__cell-actions .kol-link--ghost:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-table__cell-actions .kol-button--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-table__cell-actions .kol-link--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-table__cell-actions .kol-button--ghost:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-table__cell-actions .kol-link--ghost:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-table__cell-actions .kol-button--tertiary,
    .kol-table__cell-actions .kol-link--tertiary,
    .kol-table__cell-actions .kol-button--ghost,
    .kol-table__cell-actions .kol-link--ghost {
      text-decoration-line: underline;
    }
    .kol-table__cell-actions .kol-button--tertiary:not([disabled]):hover,
    .kol-table__cell-actions .kol-link--tertiary:not([disabled]):hover,
    .kol-table__cell-actions .kol-button--ghost:not([disabled]):hover,
    .kol-table__cell-actions .kol-link--ghost:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-table__cell-actions .kol-link {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-default-padding-top, 6px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-default-padding-bottom, 2px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-medium, 18px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
    color: var(--kern-color-action-default);
    display: inline-flex;
    align-items: flex-start;
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-1);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-table__cell-actions .kol-link__text {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-table__cell-actions .kol-link .kol-span__container {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-table__cell-actions .kol-link .kol-icon {
    color: var(--kern-color-action-default);
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-table__cell-actions .kol-link:has(.kol-icon) {
    text-decoration: none;
  }
  .kol-table__cell-actions .kol-link:has(.kol-icon):active .kol-span__label, .kol-table__cell-actions .kol-link:has(.kol-icon):hover .kol-span__label {
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-3);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-table__cell-actions .kol-link:has(.kol-icon) .kol-link__text,
  .kol-table__cell-actions .kol-link:has(.kol-icon) .kol-span__label {
    text-decoration: none;
  }
  .kol-table__cell-actions .kol-link:visited {
    color: var(--kern-color-action-visited);
  }
  .kol-table__cell-actions .kol-link:visited .kol-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-table__cell-actions .kol-link:not(.kol-table__cell-actions .kol-link--disabled):focus {
    outline: none;
  }
  .kol-table__cell-actions .kol-link:not(.kol-table__cell-actions .kol-link--disabled):hover {
    text-decoration-thickness: var(--kern-3);
  }
  .kol-table__cell-actions .kol-link:not(.kol-table__cell-actions .kol-link--disabled):active {
    color: var(--kern-color-action-default, );
    text-decoration-thickness: var(--kern-3);
  }
  .kol-table__cell-actions .kol-link:not(.kol-table__cell-actions .kol-link--disabled):active .kern-icon {
    color: var(--kern-color-action-default);
  }
  .kol-table__cell-actions .kol-link:not(.kol-table__cell-actions .kol-link--disabled):visited {
    color: var(--kern-color-action-visited);
  }
  .kol-table__cell-actions .kol-link:not(.kol-table__cell-actions .kol-link--disabled):visited .kern-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-table__cell-actions .kol-link--small {
    color: var(--kern-color-action-default);
    gap: var(--kern-metric-space-2x-small);
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-small-padding-top, 7px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-small-padding-bottom, 1px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-small, 16px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
  }
  .kol-table__cell-actions .kol-link--small .kol-icon {
    width: var(--kern-metric-dimension-small);
    min-width: var(--kern-metric-dimension-small);
    height: var(--kern-metric-dimension-small);
    min-height: var(--kern-metric-dimension-small);
  }
  .kol-table__cell-actions .kol-link:not(.kol-table__cell-actions .kol-link--stretched):focus-visible {
    box-shadow: var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 2px var(--kern-color-action-on-default), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 4px var(--kern-color-action-focus-border-inside), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 6px var(--kern-color-action-focus-border-outside);
    outline-color: transparent;
    border-radius: var(--kern-metric-border-radius-small, 0.125rem);
    position: relative;
    z-index: 1;
  }
  .kol-table__cell-actions .kol-link--external-link {
    flex-direction: row-reverse;
  }
  .kol-table:has(.kol-table__selection-input--radio) {
    --kol-input-radio-color: var(--kern-color-form-input-border);
    --kol-input-radio-background-color: transparent;
    --border-width: var(--kern-metric-border-width-default);
  }
  .kol-table:has(.kol-table__selection-input--radio) .kol-table__selection-input--radio[type=radio] {
    color: var(--kol-input-radio-color);
    background: var(--kol-input-radio-background-color);
    border-color: var(--kol-input-radio-color);
    border-radius: 100%;
    display: flex;
    width: var(--kern-metric-dimension-large);
    height: var(--kern-metric-dimension-large);
  }
  .kol-table:has(.kol-table__selection-input--radio) .kol-table__selection-input--radio[type=radio]::before {
    border-radius: 100%;
    margin: auto;
    content: "";
  }
  .kol-table:has(.kol-table__selection-input--radio) .kol-table__selection-input--radio[type=radio]:checked::before {
    background-color: var(--kol-input-radio-color);
    width: var(--kern-12, 12px);
    height: var(--kern-12, 12px);
  }
  .kol-table:has(.kol-table__selection-input--radio) .kol-table__selection-input--radio[type=radio]:hover:not(:disabled) {
    --border-width: var(--kern-metric-border-width-bold);
  }
  .kol-table:has(.kol-table__selection-input--radio) .kol-table__selection-input--radio[type=radio]:focus:not(:disabled) {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-radio-color);
    border: 0;
    outline-offset: 0;
  }
  .kol-table:has(.kol-table__selection-input--radio) .kol-table__selection-input--radio--disabled[type=radio] {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-table:has(.kol-table__selection-input--radio) .kol-input-radio {
    justify-content: flex-start;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small);
    width: var(--kern-metric-dimension-large);
    height: var(--kern-metric-dimension-large);
    margin: 0;
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    border: var(--kern-metric-border-width-default) solid var(--kern-color-form-input-border);
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):hover, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):hover {
    border: var(--kern-metric-border-width-bold) solid var(--kern-color-form-input-border);
    transition: none;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):focus, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):focus-visible, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):focus, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):focus-visible {
    box-shadow: 0 0 0 var(--kern-metric-border-width-bold) var(--kern-color-form-input-border);
    outline: 0;
    border: 0;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):focus:hover, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):focus-visible:hover, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):focus:hover, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):focus-visible:hover {
    border: 0;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):checked:focus, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):checked:focus-visible, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):checked:focus, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):checked:focus-visible {
    box-shadow: 0 0 0 var(--kern-metric-border-width-bold) var(--kern-color-form-input-border);
    outline: 0;
    border: 0;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):checked:focus:hover, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):checked:focus-visible:hover, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):checked:focus:hover, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):checked:focus-visible:hover {
    border: 0;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input[disabled], .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input[disabled] {
    opacity: var(--kern-color-action-state-opacity-disabled);
    outline: 0;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input[disabled]:checked, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input[disabled]:checked {
    outline: 0;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input[disabled]:hover, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input[disabled]:hover {
    cursor: default;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input[disabled] ~ .kern-label, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input[disabled] ~ .kern-label {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: default;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection .kol-icon {
    display: flex;
    position: absolute;
    inset: auto;
    z-index: 1;
    font-size: calc(28 * 1rem / var(--kolibri-root-font-size, 16));
    pointer-events: none;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection--disabled .kol-icon, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-label--disabled .kol-icon {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  @supports not selector(:has(*)) {
    .kol-table .kol-table__selection-input--radio {
      --kol-input-radio-color: var(--kern-color-form-input-border);
      --kol-input-radio-background-color: transparent;
      --border-width: var(--kern-metric-border-width-default);
    }
    .kol-table .kol-table__selection-input--radio[type=radio] {
      color: var(--kol-input-radio-color);
      background: var(--kol-input-radio-background-color);
      border-color: var(--kol-input-radio-color);
      border-radius: 100%;
      display: flex;
      width: var(--kern-metric-dimension-large);
      height: var(--kern-metric-dimension-large);
    }
    .kol-table .kol-table__selection-input--radio[type=radio]::before {
      border-radius: 100%;
      margin: auto;
      content: "";
    }
    .kol-table .kol-table__selection-input--radio[type=radio]:checked::before {
      background-color: var(--kol-input-radio-color);
      width: var(--kern-12, 12px);
      height: var(--kern-12, 12px);
    }
    .kol-table .kol-table__selection-input--radio[type=radio]:hover:not(:disabled) {
      --border-width: var(--kern-metric-border-width-bold);
    }
    .kol-table .kol-table__selection-input--radio[type=radio]:focus:not(:disabled) {
      outline: var(--kern-metric-border-width-bold) solid var(--kol-input-radio-color);
      border: 0;
      outline-offset: 0;
    }
    .kol-table .kol-table__selection-input--radio--disabled[type=radio] {
      opacity: var(--kern-color-action-state-opacity-disabled);
    }
    .kol-table .kol-input-radio {
      justify-content: flex-start;
    }
    .kol-table .kol-table__selection__input, .kol-table .kol-table__selection-input {
      background: var(--kern-color-form-input-background);
      border-radius: var(--kern-metric-border-radius-small);
      width: var(--kern-metric-dimension-large);
      height: var(--kern-metric-dimension-large);
      margin: 0;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
      border: var(--kern-metric-border-width-default) solid var(--kern-color-form-input-border);
    }
    .kol-table .kol-table__selection__input:not(:disabled):hover, .kol-table .kol-table__selection-input:not(:disabled):hover {
      border: var(--kern-metric-border-width-bold) solid var(--kern-color-form-input-border);
      transition: none;
    }
    .kol-table .kol-table__selection__input:not(:disabled):focus, .kol-table .kol-table__selection__input:not(:disabled):focus-visible, .kol-table .kol-table__selection-input:not(:disabled):focus, .kol-table .kol-table__selection-input:not(:disabled):focus-visible {
      box-shadow: 0 0 0 var(--kern-metric-border-width-bold) var(--kern-color-form-input-border);
      outline: 0;
      border: 0;
    }
    .kol-table .kol-table__selection__input:not(:disabled):focus:hover, .kol-table .kol-table__selection__input:not(:disabled):focus-visible:hover, .kol-table .kol-table__selection-input:not(:disabled):focus:hover, .kol-table .kol-table__selection-input:not(:disabled):focus-visible:hover {
      border: 0;
    }
    .kol-table .kol-table__selection__input:not(:disabled):checked:focus, .kol-table .kol-table__selection__input:not(:disabled):checked:focus-visible, .kol-table .kol-table__selection-input:not(:disabled):checked:focus, .kol-table .kol-table__selection-input:not(:disabled):checked:focus-visible {
      box-shadow: 0 0 0 var(--kern-metric-border-width-bold) var(--kern-color-form-input-border);
      outline: 0;
      border: 0;
    }
    .kol-table .kol-table__selection__input:not(:disabled):checked:focus:hover, .kol-table .kol-table__selection__input:not(:disabled):checked:focus-visible:hover, .kol-table .kol-table__selection-input:not(:disabled):checked:focus:hover, .kol-table .kol-table__selection-input:not(:disabled):checked:focus-visible:hover {
      border: 0;
    }
    .kol-table .kol-table__selection__input[disabled], .kol-table .kol-table__selection-input[disabled] {
      opacity: var(--kern-color-action-state-opacity-disabled);
      outline: 0;
    }
    .kol-table .kol-table__selection__input[disabled]:checked, .kol-table .kol-table__selection-input[disabled]:checked {
      outline: 0;
    }
    .kol-table .kol-table__selection__input[disabled]:hover, .kol-table .kol-table__selection-input[disabled]:hover {
      cursor: default;
    }
    .kol-table .kol-table__selection__input[disabled] ~ .kern-label, .kol-table .kol-table__selection-input[disabled] ~ .kern-label {
      opacity: var(--kern-color-action-state-opacity-disabled);
      cursor: default;
    }
    .kol-table .kol-table__selection .kol-icon {
      display: flex;
      position: absolute;
      inset: auto;
      z-index: 1;
      font-size: calc(28 * 1rem / var(--kolibri-root-font-size, 16));
      pointer-events: none;
    }
    .kol-table .kol-table__selection--disabled .kol-icon, .kol-table .kol-table__selection-label--disabled .kol-icon {
      opacity: var(--kern-color-action-state-opacity-disabled);
    }
  }
}`,Lt=`@charset "UTF-8";
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
@layer kol-theme-component {
  .kol-table-settings {
    background: var(--kern-color-layout-background-default);
  }
  .kol-table-settings .kol-button {
    --button-min-size: var(--kern-metric-dimension-x-large);
    --button-padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    font-size: var(--kern-typography-font-size-static-medium);
  }
  .kol-table-settings .kol-button:focus-visible {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-table-settings .kol-button:disabled {
    opacity: 0.4;
  }
  .kol-table-settings .kol-button--hide-label {
    --button-padding: var(--kern-metric-space-small);
  }
  .kol-table-settings .kol-button--inline {
    --button-min-size: 0;
  }
  .kol-table-settings .kol-button__text {
    color: var(--button-text-color);
    background-color: var(--button-text-background-color);
    border-color: var(--button-text-border-color);
    border-style: solid;
    border-radius: var(--kern-metric-border-radius-default);
    min-width: var(--button-min-size);
    min-height: var(--button-min-size);
    padding: var(--button-padding);
    border-width: var(--kern-metric-border-width-light);
  }
  .kol-table-settings .kol-button .kol-span__container {
    gap: var(--kern-metric-space-small);
  }
  .kol-table-settings .kol-button .kol-span__label {
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-table-settings .kol-button .kol-icon {
    font-size: var(--kern-metric-space-large);
  }
  .kol-table-settings .kol-button--primary {
    --button-text-background-color-default: var(--kern-color-action-default);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  .kol-table-settings .kol-button--primary:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-hover);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-hover);
  }
  .kol-table-settings .kol-button--primary:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-active);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-active);
  }
  .kol-table-settings .kol-button {
    /* Not specified in Kern! */
  }
  .kol-table-settings .kol-button--danger {
    --button-text-background-color-default: var(--kern-color-feedback-danger);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  @supports (color-mix: color) {
    .kol-table-settings .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 85%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-table-settings .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: #a20d08;
    }
  }
  @supports (color-mix: color) {
    .kol-table-settings .kol-button--danger:not([disabled]):active {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 80%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-table-settings .kol-button--danger:not([disabled]):active {
      --button-text-background-color: #980c07;
    }
  }
  .kol-table-settings .kol-button .badge-text-hint {
    color: var(--button-text-background-color-default);
    background-color: var(--button-text-color);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-table-settings .kol-button .badge-text-hint, .kol-span .kol-span .kol-table-settings .kol-button .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-table-settings {
    /* Normal button variants */
  }
  .kol-table-settings .kol-button--secondary,
  .kol-table-settings .kol-link--secondary,
  .kol-table-settings .kol-button--normal,
  .kol-table-settings .kol-link--normal {
    --button-text-background-color-default: var(--kern-neutral-000);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-default);
  }
  .kol-table-settings .kol-button--secondary:not([disabled]):hover,
  .kol-table-settings .kol-link--secondary:not([disabled]):hover,
  .kol-table-settings .kol-button--normal:not([disabled]):hover,
  .kol-table-settings .kol-link--normal:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-table-settings .kol-button--secondary:not([disabled]):active,
  .kol-table-settings .kol-link--secondary:not([disabled]):active,
  .kol-table-settings .kol-button--normal:not([disabled]):active,
  .kol-table-settings .kol-link--normal:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  .kol-table-settings {
    /* Ghost button variants */
  }
  .kol-table-settings .kol-button--tertiary,
  .kol-table-settings .kol-link--tertiary,
  .kol-table-settings .kol-button--ghost,
  .kol-table-settings .kol-link--ghost {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-table-settings .kol-button--tertiary:not([disabled]):hover,
  .kol-table-settings .kol-link--tertiary:not([disabled]):hover,
  .kol-table-settings .kol-button--ghost:not([disabled]):hover,
  .kol-table-settings .kol-link--ghost:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-table-settings .kol-button--tertiary:not([disabled]):active,
  .kol-table-settings .kol-link--tertiary:not([disabled]):active,
  .kol-table-settings .kol-button--ghost:not([disabled]):active,
  .kol-table-settings .kol-link--ghost:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-table-settings .kol-button--tertiary:not(:has(.kol-icon)),
    .kol-table-settings .kol-link--tertiary:not(:has(.kol-icon)),
    .kol-table-settings .kol-button--ghost:not(:has(.kol-icon)),
    .kol-table-settings .kol-link--ghost:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-table-settings .kol-button--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-table-settings .kol-link--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-table-settings .kol-button--ghost:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-table-settings .kol-link--ghost:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-table-settings .kol-button--tertiary,
    .kol-table-settings .kol-link--tertiary,
    .kol-table-settings .kol-button--ghost,
    .kol-table-settings .kol-link--ghost {
      text-decoration-line: underline;
    }
    .kol-table-settings .kol-button--tertiary:not([disabled]):hover,
    .kol-table-settings .kol-link--tertiary:not([disabled]):hover,
    .kol-table-settings .kol-button--ghost:not([disabled]):hover,
    .kol-table-settings .kol-link--ghost:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-table-settings .kol-popover-button__button .kol-button {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-table-settings .kol-popover-button__button .kol-button:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-table-settings .kol-popover-button__button .kol-button:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-table-settings .kol-popover-button__button .kol-button:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-table-settings .kol-popover-button__button .kol-button:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-table-settings .kol-popover-button__button .kol-button {
      text-decoration-line: underline;
    }
    .kol-table-settings .kol-popover-button__button .kol-button:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-table-settings__content {
    border-radius: var(--kern-metric-border-radius-default);
    padding: var(--kern-metric-space-default);
    border: var(--kern-metric-border-width-light, 1px) solid var(--layout-border);
  }
  .kol-table-settings__error-message {
    display: block;
    margin-top: var(--kern-metric-space-default);
  }
  .kol-table-settings__columns {
    padding: var(--kern-metric-space-small);
  }
  .kol-table-settings__actions {
    display: flex;
    margin-top: var(--kern-metric-space-small);
    padding-top: var(--kern-metric-space-default);
    gap: var(--kern-metric-space-default);
    justify-content: flex-end;
    border-top: var(--kern-metric-border-width-light, 1px) solid var(--layout-border);
  }
  .kol-button:focus {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-button {
    --button-min-size: var(--kern-metric-dimension-x-large);
    --button-padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    font-size: var(--kern-typography-font-size-static-medium);
  }
  .kol-pagination .kol-button:focus-visible {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-pagination .kol-button:disabled {
    opacity: 0.4;
  }
  .kol-pagination .kol-button--hide-label {
    --button-padding: var(--kern-metric-space-small);
  }
  .kol-pagination .kol-button--inline {
    --button-min-size: 0;
  }
  .kol-pagination .kol-button__text {
    color: var(--button-text-color);
    background-color: var(--button-text-background-color);
    border-color: var(--button-text-border-color);
    border-style: solid;
    border-radius: var(--kern-metric-border-radius-default);
    min-width: var(--button-min-size);
    min-height: var(--button-min-size);
    padding: var(--button-padding);
    border-width: var(--kern-metric-border-width-light);
  }
  .kol-pagination .kol-button .kol-span__container {
    gap: var(--kern-metric-space-small);
  }
  .kol-pagination .kol-button .kol-span__label {
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-pagination .kol-button .kol-icon {
    font-size: var(--kern-metric-space-large);
  }
  .kol-pagination .kol-button--primary {
    --button-text-background-color-default: var(--kern-color-action-default);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  .kol-pagination .kol-button--primary:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-hover);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-hover);
  }
  .kol-pagination .kol-button--primary:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-active);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-active);
  }
  .kol-pagination .kol-button {
    /* Not specified in Kern! */
  }
  .kol-pagination .kol-button--danger {
    --button-text-background-color-default: var(--kern-color-feedback-danger);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  @supports (color-mix: color) {
    .kol-pagination .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 85%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-pagination .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: #a20d08;
    }
  }
  @supports (color-mix: color) {
    .kol-pagination .kol-button--danger:not([disabled]):active {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 80%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-pagination .kol-button--danger:not([disabled]):active {
      --button-text-background-color: #980c07;
    }
  }
  .kol-pagination .kol-button .badge-text-hint {
    color: var(--button-text-background-color-default);
    background-color: var(--button-text-color);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-pagination .kol-button .badge-text-hint, .kol-span .kol-span .kol-pagination .kol-button .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-pagination {
    /* Normal button variants */
  }
  .kol-pagination .kol-button--secondary,
  .kol-pagination .kol-link--secondary,
  .kol-pagination .kol-button--normal,
  .kol-pagination .kol-link--normal {
    --button-text-background-color-default: var(--kern-neutral-000);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-default);
  }
  .kol-pagination .kol-button--secondary:not([disabled]):hover,
  .kol-pagination .kol-link--secondary:not([disabled]):hover,
  .kol-pagination .kol-button--normal:not([disabled]):hover,
  .kol-pagination .kol-link--normal:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-pagination .kol-button--secondary:not([disabled]):active,
  .kol-pagination .kol-link--secondary:not([disabled]):active,
  .kol-pagination .kol-button--normal:not([disabled]):active,
  .kol-pagination .kol-link--normal:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  .kol-pagination {
    /* Ghost button variants */
  }
  .kol-pagination .kol-button--tertiary,
  .kol-pagination .kol-link--tertiary,
  .kol-pagination .kol-button--ghost,
  .kol-pagination .kol-link--ghost {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-pagination .kol-button--tertiary:not([disabled]):hover,
  .kol-pagination .kol-link--tertiary:not([disabled]):hover,
  .kol-pagination .kol-button--ghost:not([disabled]):hover,
  .kol-pagination .kol-link--ghost:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-pagination .kol-button--tertiary:not([disabled]):active,
  .kol-pagination .kol-link--tertiary:not([disabled]):active,
  .kol-pagination .kol-button--ghost:not([disabled]):active,
  .kol-pagination .kol-link--ghost:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-pagination .kol-button--tertiary:not(:has(.kol-icon)),
    .kol-pagination .kol-link--tertiary:not(:has(.kol-icon)),
    .kol-pagination .kol-button--ghost:not(:has(.kol-icon)),
    .kol-pagination .kol-link--ghost:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-pagination .kol-button--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-pagination .kol-link--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-pagination .kol-button--ghost:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-pagination .kol-link--ghost:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-pagination .kol-button--tertiary,
    .kol-pagination .kol-link--tertiary,
    .kol-pagination .kol-button--ghost,
    .kol-pagination .kol-link--ghost {
      text-decoration-line: underline;
    }
    .kol-pagination .kol-button--tertiary:not([disabled]):hover,
    .kol-pagination .kol-link--tertiary:not([disabled]):hover,
    .kol-pagination .kol-button--ghost:not([disabled]):hover,
    .kol-pagination .kol-link--ghost:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-pagination .badge-text-hint {
    color: var(--kern-color-layout-text-inverse);
    background-color: var(--kern-color-layout-text-muted);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-pagination .badge-text-hint, .kol-span .kol-span .kol-pagination .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-pagination .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-pagination .kol-alert--type-info .kol-pagination .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-pagination .kol-alert--type-info .kol-pagination .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-pagination .kol-alert--type-error .kol-pagination .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-pagination .kol-alert--type-error .kol-pagination .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-pagination .kol-alert--type-success .kol-pagination .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-pagination .kol-alert--type-success .kol-pagination .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-pagination .kol-alert--type-warning .kol-pagination .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-pagination .kol-alert--type-warning .kol-pagination .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-pagination .kol-alert {
    /* Variant card base */
  }
  .kol-pagination .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-pagination .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-pagination .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-pagination .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-pagination .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-pagination .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-pagination .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-pagination .kol-alert {
    /* Variant msg */
  }
  .kol-pagination .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-pagination .kol-alert {
    /* Type variants */
  }
  .kol-pagination .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-pagination .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-pagination .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-pagination .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-pagination .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-pagination .kol-alert {
    /* Elements */
  }
  .kol-pagination .kol-alert--variant-card .kol-pagination .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-pagination .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-pagination .kol-alert--variant-card .kol-pagination .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-pagination .kol-alert--variant-msg .kol-pagination .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-pagination .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-pagination .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-pagination .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-pagination .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-pagination .kol-alert--variant-card .kol-pagination .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-pagination .kol-alert--variant-card .kol-pagination .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-alert--variant-msg .kol-pagination .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-form-field {
    padding: var(--kern-metric-space-none);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--kern-typography-font-family-default);
  }
  .kol-pagination .kol-form-field--read-only .kol-pagination .kol-form-field__label, .kol-pagination .kol-form-field--disabled .kol-pagination .kol-form-field__label {
    opacity: 1;
    cursor: not-allowed;
  }
  .kol-pagination .kol-form-field__label {
    color: var(--kern-color-layout-text-default);
    padding: var(--kern-metric-baseline-label-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-label-default-padding-bottom) var(--kern-metric-space-none);
    order: 1;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-pagination .kol-form-field__label__read-only {
    display: none;
  }
  .kol-pagination .kol-form-field__msg {
    order: 4;
  }
  .kol-pagination .kol-form-field__msg .kol-alert__icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-form-field__hint {
    color: var(--kern-color-layout-text-default);
    color: var(--kern-color-layout-text-muted, #404565);
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-body-default-padding-bottom) var(--kern-metric-space-none);
    order: 2;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    font-style: normal;
  }
  .kol-pagination .kol-form-field__input {
    order: 3;
  }
  .kol-pagination .kol-form-field__counter {
    color: var(--kern-color-feedback-loader);
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.25;
  }
  .kol-pagination .kol-form-field--required .kol-pagination .kol-form-field__label-text::after {
    padding-left: 0.125em;
  }
  .kol-pagination .kol-form-field--required .kol-pagination .kol-form-field__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-pagination .kol-form-field--error {
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-danger);
  }
  .kol-pagination .kol-input {
    color: var(--kern-color-layout-text-default);
    background: transparent;
    height: var(--kern-metric-dimension-x-large);
    font-family: var(--kern-typography-font-family-default);
    border: none;
  }
  .kol-pagination .kol-input--readonly {
    color: var(--color-black-70);
  }
  .kol-pagination .kol-input:disabled {
    opacity: 1;
    color: var(--color-black-60);
  }
  .kol-pagination .kol-input:disabled::-moz-placeholder {
    color: var(--color-black-60);
  }
  .kol-pagination .kol-input:disabled::placeholder {
    color: var(--color-black-60);
  }
  .kol-pagination .kol-input-container {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small) var(--kern-metric-border-radius-small) 0 0;
    position: relative;
    padding: 0 var(--kern-metric-space-default);
    gap: 0;
    border: none;
    border-bottom: var(--kol-input-border-width) solid var(--kol-input-border-color);
    --kol-input-border-color: var(--kern-color-form-input-border);
    --kol-input-border-width: var(--kern-metric-border-width-default);
  }
  .kol-pagination .kol-input-container:not(.kol-pagination .kol-input-container--disabled):hover {
    box-shadow: 0 calc(-1 * var(--kern-metric-border-width-default)) 0 0 var(--kol-input-border-color) inset;
  }
  .kol-pagination .kol-input-container:focus-within {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-border-color);
    border-radius: var(--kern-metric-border-radius-small);
    border-bottom-color: transparent;
  }
  .kol-pagination .kol-input-container:focus-within:hover {
    box-shadow: none;
  }
  .kol-pagination .kol-input-container:has(.kol-input--readonly) {
    background: inherit;
    --kol-input-border-color: var(--kern-color-layout-border);
    --kol-input-border-width: var(--kern-metric-border-width-light);
  }
  .kol-pagination .kol-input-container:has(.kol-input--readonly) .kol-input--readonly {
    cursor: not-allowed;
  }
  .kol-pagination .kol-input-container--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: not-allowed;
  }
  .kol-pagination .kol-input-container--error {
    --kol-input-border-color: var(--kern-color-feedback-danger);
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-pagination .kol-input-container__smart-button .kol-button {
    color: var(--kern-color-feedback-info, );
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
    border-left: 1px solid var(--border-color);
    transition: all 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-pagination .kol-input-container__smart-button .kol-button:disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-pagination .kol-input-container__smart-button .kol-button:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-pagination .kol-input-container__smart-button .kol-button:focus {
    color: var(--kern-color-layout-background-default);
    background-color: var(--kern-color-form-input-border);
    outline: var(--kern-color-form-input-border) solid 2px;
    border: 1 solid var(--kern-color-form-input-border);
    outline-offset: 2px;
  }
  .kol-pagination .kol-select {
    color: var(--kern-color-layout-text-default);
    background-color: transparent;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: var(--kern-metric-baseline-body-default-padding-top) 0 var(--kern-metric-baseline-body-default-padding-bottom);
    font-family: var(--kern-typography-font-family-default);
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    font-style: normal;
    text-overflow: ellipsis;
  }
  .kol-pagination .kol-select--error {
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-pagination .kol-select:not([multiple]) {
    padding-right: calc(var(--a11y-min-size) + calc(7 * 1rem / var(--kolibri-root-font-size, 16)));
    padding-left: calc(7 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination .kol-select--error[multiple] .kol-pagination .kol-select__option {
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-pagination .kol-select__option {
    background: var(--kern-color-form-input-background);
  }
  .kol-pagination .kol-select__option:checked:not(:disabled) {
    color: var(--kern-color-layout-text-default);
    background-color: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-selected));
  }
  .kol-pagination .kol-select__option:hover:not(:disabled) {
    background-color: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-hover));
  }
  .kol-pagination .kol-select__option:focus:not(:disabled), .kol-pagination .kol-select__option:focus-visible:not(:disabled) {
    background-color: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-focus));
    outline: 0;
  }
  .kol-pagination .kol-select__option:active:not(:disabled) {
    background-color: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-active));
  }
  .kol-pagination .kol-form-field--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-pagination .kol-input-container {
    height: auto;
    min-height: var(--kern-metric-dimension-x-large);
    padding: 0;
    gap: var(--kern-metric-space-none);
  }
  .kol-pagination .kol-input-container__adornment--end {
    padding: 0 var(--kern-metric-space-default) 0 0;
  }
  .kol-pagination .kol-input-container__adornment--start {
    padding: 0 0 0 var(--kern-metric-space-default);
  }
  .kol-pagination .kol-input-container__container:not(:has(select[multiple]))::after {
    transform: translateY(-50%);
    color: var(--kern-color-action-default);
    display: inline-block;
    position: absolute;
    position: absolute;
    top: var(--kern-metric-dimension-default);
    right: var(--kern-metric-dimension-x-small);
    width: var(--kern-metric-dimension-default);
    height: var(--kern-metric-dimension-default);
    content: "\\e925";
    font-family: material-symbols-subset;
    font-size: var(--kern-metric-dimension-default);
    pointer-events: none;
  }
  .kol-pagination {
    display: flex;
    gap: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination__navigation-list {
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-pagination__button--selected .kol-button--normal:disabled {
    --button-text-background-color: var(--kern-color-action-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
    --button-badge-color: var(--button-text-background-color);
    opacity: 1;
  }
  .kol-pagination__separator {
    color: var(--kern-color-action-default);
  }
  .kol-pagination .kol-form-field {
    align-items: center;
  }
  :host {
    display: flex;
    gap: var(--kern-metric-space-default);
    flex-direction: column;
  }
  .kol-table {
    line-height: 1.25;
    word-break: break-word;
  }
  .kol-table__head, .kol-table__cell {
    box-shadow: inset 0 -1px 0 0 var(--kern-color-layout-border);
    padding: calc(var(--kern-metric-baseline-body-default-padding-top) + var(--kern-metric-space-small)) var(--kern-metric-space-x-small) calc(var(--kern-metric-baseline-body-default-padding-bottom) + var(--kern-metric-space-small)) var(--kern-metric-space-x-small);
  }
  .kol-table__head--numeric, .kol-table__cell--numeric {
    text-align: right;
  }
  .kol-table th {
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
  }
  .kol-table th .kol-button {
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
  }
  .kol-table th .kol-button .kol-span__container {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-table__footer {
    box-shadow: inset 0 1px 0 0 var(--kern-color-layout-border);
  }
  .kol-table__footer .kol-table__cell {
    font-weight: var(--kern-typography-font-weight-semi-bold);
  }
  .kol-table__table {
    width: 100%;
    border-spacing: 0;
  }
  .kol-table__caption {
    display: table-caption;
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
    padding-right: calc(var(--a11y-min-size) + var(--kern-metric-space-small));
  }
  .kol-table__cell--subtext {
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
  }
  .kol-table__cell--header {
    transition: background-color 80ms cubic-bezier(0.65, 0, 0.35, 1), box-shadow 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-table__cell--header[data-sort]:not([data-sort=NOS]) .kol-button {
    cursor: pointer;
  }
  .kol-table__cell--header[data-sort]:not([data-sort=NOS]) .kol-button:hover {
    background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-table__cell--header[data-sort]:not([data-sort=NOS]) .kol-button:focus-within {
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-table__cell--selection {
    width: calc(52 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-table__cell-actions {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-table__cell-actions .kol-button {
    --button-min-size: var(--kern-metric-dimension-x-large);
    --button-padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    font-size: var(--kern-typography-font-size-static-medium);
  }
  .kol-table__cell-actions .kol-button:focus-visible {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-table__cell-actions .kol-button:disabled {
    opacity: 0.4;
  }
  .kol-table__cell-actions .kol-button--hide-label {
    --button-padding: var(--kern-metric-space-small);
  }
  .kol-table__cell-actions .kol-button--inline {
    --button-min-size: 0;
  }
  .kol-table__cell-actions .kol-button__text {
    color: var(--button-text-color);
    background-color: var(--button-text-background-color);
    border-color: var(--button-text-border-color);
    border-style: solid;
    border-radius: var(--kern-metric-border-radius-default);
    min-width: var(--button-min-size);
    min-height: var(--button-min-size);
    padding: var(--button-padding);
    border-width: var(--kern-metric-border-width-light);
  }
  .kol-table__cell-actions .kol-button .kol-span__container {
    gap: var(--kern-metric-space-small);
  }
  .kol-table__cell-actions .kol-button .kol-span__label {
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-table__cell-actions .kol-button .kol-icon {
    font-size: var(--kern-metric-space-large);
  }
  .kol-table__cell-actions .kol-button--primary {
    --button-text-background-color-default: var(--kern-color-action-default);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  .kol-table__cell-actions .kol-button--primary:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-hover);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-hover);
  }
  .kol-table__cell-actions .kol-button--primary:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-active);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-active);
  }
  .kol-table__cell-actions .kol-button {
    /* Not specified in Kern! */
  }
  .kol-table__cell-actions .kol-button--danger {
    --button-text-background-color-default: var(--kern-color-feedback-danger);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  @supports (color-mix: color) {
    .kol-table__cell-actions .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 85%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-table__cell-actions .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: #a20d08;
    }
  }
  @supports (color-mix: color) {
    .kol-table__cell-actions .kol-button--danger:not([disabled]):active {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 80%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-table__cell-actions .kol-button--danger:not([disabled]):active {
      --button-text-background-color: #980c07;
    }
  }
  .kol-table__cell-actions .kol-button .badge-text-hint {
    color: var(--button-text-background-color-default);
    background-color: var(--button-text-color);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-table__cell-actions .kol-button .badge-text-hint, .kol-span .kol-span .kol-table__cell-actions .kol-button .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-table__cell-actions {
    /* Normal button variants */
  }
  .kol-table__cell-actions .kol-button--secondary,
  .kol-table__cell-actions .kol-link--secondary,
  .kol-table__cell-actions .kol-button--normal,
  .kol-table__cell-actions .kol-link--normal {
    --button-text-background-color-default: var(--kern-neutral-000);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-default);
  }
  .kol-table__cell-actions .kol-button--secondary:not([disabled]):hover,
  .kol-table__cell-actions .kol-link--secondary:not([disabled]):hover,
  .kol-table__cell-actions .kol-button--normal:not([disabled]):hover,
  .kol-table__cell-actions .kol-link--normal:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-table__cell-actions .kol-button--secondary:not([disabled]):active,
  .kol-table__cell-actions .kol-link--secondary:not([disabled]):active,
  .kol-table__cell-actions .kol-button--normal:not([disabled]):active,
  .kol-table__cell-actions .kol-link--normal:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  .kol-table__cell-actions {
    /* Ghost button variants */
  }
  .kol-table__cell-actions .kol-button--tertiary,
  .kol-table__cell-actions .kol-link--tertiary,
  .kol-table__cell-actions .kol-button--ghost,
  .kol-table__cell-actions .kol-link--ghost {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-table__cell-actions .kol-button--tertiary:not([disabled]):hover,
  .kol-table__cell-actions .kol-link--tertiary:not([disabled]):hover,
  .kol-table__cell-actions .kol-button--ghost:not([disabled]):hover,
  .kol-table__cell-actions .kol-link--ghost:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-table__cell-actions .kol-button--tertiary:not([disabled]):active,
  .kol-table__cell-actions .kol-link--tertiary:not([disabled]):active,
  .kol-table__cell-actions .kol-button--ghost:not([disabled]):active,
  .kol-table__cell-actions .kol-link--ghost:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-table__cell-actions .kol-button--tertiary:not(:has(.kol-icon)),
    .kol-table__cell-actions .kol-link--tertiary:not(:has(.kol-icon)),
    .kol-table__cell-actions .kol-button--ghost:not(:has(.kol-icon)),
    .kol-table__cell-actions .kol-link--ghost:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-table__cell-actions .kol-button--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-table__cell-actions .kol-link--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-table__cell-actions .kol-button--ghost:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-table__cell-actions .kol-link--ghost:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-table__cell-actions .kol-button--tertiary,
    .kol-table__cell-actions .kol-link--tertiary,
    .kol-table__cell-actions .kol-button--ghost,
    .kol-table__cell-actions .kol-link--ghost {
      text-decoration-line: underline;
    }
    .kol-table__cell-actions .kol-button--tertiary:not([disabled]):hover,
    .kol-table__cell-actions .kol-link--tertiary:not([disabled]):hover,
    .kol-table__cell-actions .kol-button--ghost:not([disabled]):hover,
    .kol-table__cell-actions .kol-link--ghost:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-table__cell-actions .kol-link {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-default-padding-top, 6px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-default-padding-bottom, 2px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-medium, 18px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
    color: var(--kern-color-action-default);
    display: inline-flex;
    align-items: flex-start;
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-1);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-table__cell-actions .kol-link__text {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-table__cell-actions .kol-link .kol-span__container {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-table__cell-actions .kol-link .kol-icon {
    color: var(--kern-color-action-default);
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-table__cell-actions .kol-link:has(.kol-icon) {
    text-decoration: none;
  }
  .kol-table__cell-actions .kol-link:has(.kol-icon):active .kol-span__label, .kol-table__cell-actions .kol-link:has(.kol-icon):hover .kol-span__label {
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-3);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-table__cell-actions .kol-link:has(.kol-icon) .kol-link__text,
  .kol-table__cell-actions .kol-link:has(.kol-icon) .kol-span__label {
    text-decoration: none;
  }
  .kol-table__cell-actions .kol-link:visited {
    color: var(--kern-color-action-visited);
  }
  .kol-table__cell-actions .kol-link:visited .kol-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-table__cell-actions .kol-link:not(.kol-table__cell-actions .kol-link--disabled):focus {
    outline: none;
  }
  .kol-table__cell-actions .kol-link:not(.kol-table__cell-actions .kol-link--disabled):hover {
    text-decoration-thickness: var(--kern-3);
  }
  .kol-table__cell-actions .kol-link:not(.kol-table__cell-actions .kol-link--disabled):active {
    color: var(--kern-color-action-default, );
    text-decoration-thickness: var(--kern-3);
  }
  .kol-table__cell-actions .kol-link:not(.kol-table__cell-actions .kol-link--disabled):active .kern-icon {
    color: var(--kern-color-action-default);
  }
  .kol-table__cell-actions .kol-link:not(.kol-table__cell-actions .kol-link--disabled):visited {
    color: var(--kern-color-action-visited);
  }
  .kol-table__cell-actions .kol-link:not(.kol-table__cell-actions .kol-link--disabled):visited .kern-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-table__cell-actions .kol-link--small {
    color: var(--kern-color-action-default);
    gap: var(--kern-metric-space-2x-small);
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-small-padding-top, 7px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-small-padding-bottom, 1px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-small, 16px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
  }
  .kol-table__cell-actions .kol-link--small .kol-icon {
    width: var(--kern-metric-dimension-small);
    min-width: var(--kern-metric-dimension-small);
    height: var(--kern-metric-dimension-small);
    min-height: var(--kern-metric-dimension-small);
  }
  .kol-table__cell-actions .kol-link:not(.kol-table__cell-actions .kol-link--stretched):focus-visible {
    box-shadow: var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 2px var(--kern-color-action-on-default), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 4px var(--kern-color-action-focus-border-inside), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 6px var(--kern-color-action-focus-border-outside);
    outline-color: transparent;
    border-radius: var(--kern-metric-border-radius-small, 0.125rem);
    position: relative;
    z-index: 1;
  }
  .kol-table__cell-actions .kol-link--external-link {
    flex-direction: row-reverse;
  }
  .kol-table:has(.kol-table__selection-input--radio) {
    --kol-input-radio-color: var(--kern-color-form-input-border);
    --kol-input-radio-background-color: transparent;
    --border-width: var(--kern-metric-border-width-default);
  }
  .kol-table:has(.kol-table__selection-input--radio) .kol-table__selection-input--radio[type=radio] {
    color: var(--kol-input-radio-color);
    background: var(--kol-input-radio-background-color);
    border-color: var(--kol-input-radio-color);
    border-radius: 100%;
    display: flex;
    width: var(--kern-metric-dimension-large);
    height: var(--kern-metric-dimension-large);
  }
  .kol-table:has(.kol-table__selection-input--radio) .kol-table__selection-input--radio[type=radio]::before {
    border-radius: 100%;
    margin: auto;
    content: "";
  }
  .kol-table:has(.kol-table__selection-input--radio) .kol-table__selection-input--radio[type=radio]:checked::before {
    background-color: var(--kol-input-radio-color);
    width: var(--kern-12, 12px);
    height: var(--kern-12, 12px);
  }
  .kol-table:has(.kol-table__selection-input--radio) .kol-table__selection-input--radio[type=radio]:hover:not(:disabled) {
    --border-width: var(--kern-metric-border-width-bold);
  }
  .kol-table:has(.kol-table__selection-input--radio) .kol-table__selection-input--radio[type=radio]:focus:not(:disabled) {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-radio-color);
    border: 0;
    outline-offset: 0;
  }
  .kol-table:has(.kol-table__selection-input--radio) .kol-table__selection-input--radio--disabled[type=radio] {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-table:has(.kol-table__selection-input--radio) .kol-input-radio {
    justify-content: flex-start;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small);
    width: var(--kern-metric-dimension-large);
    height: var(--kern-metric-dimension-large);
    margin: 0;
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    border: var(--kern-metric-border-width-default) solid var(--kern-color-form-input-border);
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):hover, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):hover {
    border: var(--kern-metric-border-width-bold) solid var(--kern-color-form-input-border);
    transition: none;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):focus, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):focus-visible, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):focus, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):focus-visible {
    box-shadow: 0 0 0 var(--kern-metric-border-width-bold) var(--kern-color-form-input-border);
    outline: 0;
    border: 0;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):focus:hover, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):focus-visible:hover, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):focus:hover, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):focus-visible:hover {
    border: 0;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):checked:focus, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):checked:focus-visible, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):checked:focus, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):checked:focus-visible {
    box-shadow: 0 0 0 var(--kern-metric-border-width-bold) var(--kern-color-form-input-border);
    outline: 0;
    border: 0;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):checked:focus:hover, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input:not(:disabled):checked:focus-visible:hover, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):checked:focus:hover, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input:not(:disabled):checked:focus-visible:hover {
    border: 0;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input[disabled], .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input[disabled] {
    opacity: var(--kern-color-action-state-opacity-disabled);
    outline: 0;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input[disabled]:checked, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input[disabled]:checked {
    outline: 0;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input[disabled]:hover, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input[disabled]:hover {
    cursor: default;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection__input[disabled] ~ .kern-label, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-input[disabled] ~ .kern-label {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: default;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection .kol-icon {
    display: flex;
    position: absolute;
    inset: auto;
    z-index: 1;
    font-size: calc(28 * 1rem / var(--kolibri-root-font-size, 16));
    pointer-events: none;
  }
  .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection--disabled .kol-icon, .kol-table:not(:has(.kol-table__selection-input--radio)) .kol-table__selection-label--disabled .kol-icon {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  @supports not selector(:has(*)) {
    .kol-table .kol-table__selection-input--radio {
      --kol-input-radio-color: var(--kern-color-form-input-border);
      --kol-input-radio-background-color: transparent;
      --border-width: var(--kern-metric-border-width-default);
    }
    .kol-table .kol-table__selection-input--radio[type=radio] {
      color: var(--kol-input-radio-color);
      background: var(--kol-input-radio-background-color);
      border-color: var(--kol-input-radio-color);
      border-radius: 100%;
      display: flex;
      width: var(--kern-metric-dimension-large);
      height: var(--kern-metric-dimension-large);
    }
    .kol-table .kol-table__selection-input--radio[type=radio]::before {
      border-radius: 100%;
      margin: auto;
      content: "";
    }
    .kol-table .kol-table__selection-input--radio[type=radio]:checked::before {
      background-color: var(--kol-input-radio-color);
      width: var(--kern-12, 12px);
      height: var(--kern-12, 12px);
    }
    .kol-table .kol-table__selection-input--radio[type=radio]:hover:not(:disabled) {
      --border-width: var(--kern-metric-border-width-bold);
    }
    .kol-table .kol-table__selection-input--radio[type=radio]:focus:not(:disabled) {
      outline: var(--kern-metric-border-width-bold) solid var(--kol-input-radio-color);
      border: 0;
      outline-offset: 0;
    }
    .kol-table .kol-table__selection-input--radio--disabled[type=radio] {
      opacity: var(--kern-color-action-state-opacity-disabled);
    }
    .kol-table .kol-input-radio {
      justify-content: flex-start;
    }
    .kol-table .kol-table__selection__input, .kol-table .kol-table__selection-input {
      background: var(--kern-color-form-input-background);
      border-radius: var(--kern-metric-border-radius-small);
      width: var(--kern-metric-dimension-large);
      height: var(--kern-metric-dimension-large);
      margin: 0;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
      border: var(--kern-metric-border-width-default) solid var(--kern-color-form-input-border);
    }
    .kol-table .kol-table__selection__input:not(:disabled):hover, .kol-table .kol-table__selection-input:not(:disabled):hover {
      border: var(--kern-metric-border-width-bold) solid var(--kern-color-form-input-border);
      transition: none;
    }
    .kol-table .kol-table__selection__input:not(:disabled):focus, .kol-table .kol-table__selection__input:not(:disabled):focus-visible, .kol-table .kol-table__selection-input:not(:disabled):focus, .kol-table .kol-table__selection-input:not(:disabled):focus-visible {
      box-shadow: 0 0 0 var(--kern-metric-border-width-bold) var(--kern-color-form-input-border);
      outline: 0;
      border: 0;
    }
    .kol-table .kol-table__selection__input:not(:disabled):focus:hover, .kol-table .kol-table__selection__input:not(:disabled):focus-visible:hover, .kol-table .kol-table__selection-input:not(:disabled):focus:hover, .kol-table .kol-table__selection-input:not(:disabled):focus-visible:hover {
      border: 0;
    }
    .kol-table .kol-table__selection__input:not(:disabled):checked:focus, .kol-table .kol-table__selection__input:not(:disabled):checked:focus-visible, .kol-table .kol-table__selection-input:not(:disabled):checked:focus, .kol-table .kol-table__selection-input:not(:disabled):checked:focus-visible {
      box-shadow: 0 0 0 var(--kern-metric-border-width-bold) var(--kern-color-form-input-border);
      outline: 0;
      border: 0;
    }
    .kol-table .kol-table__selection__input:not(:disabled):checked:focus:hover, .kol-table .kol-table__selection__input:not(:disabled):checked:focus-visible:hover, .kol-table .kol-table__selection-input:not(:disabled):checked:focus:hover, .kol-table .kol-table__selection-input:not(:disabled):checked:focus-visible:hover {
      border: 0;
    }
    .kol-table .kol-table__selection__input[disabled], .kol-table .kol-table__selection-input[disabled] {
      opacity: var(--kern-color-action-state-opacity-disabled);
      outline: 0;
    }
    .kol-table .kol-table__selection__input[disabled]:checked, .kol-table .kol-table__selection-input[disabled]:checked {
      outline: 0;
    }
    .kol-table .kol-table__selection__input[disabled]:hover, .kol-table .kol-table__selection-input[disabled]:hover {
      cursor: default;
    }
    .kol-table .kol-table__selection__input[disabled] ~ .kern-label, .kol-table .kol-table__selection-input[disabled] ~ .kern-label {
      opacity: var(--kern-color-action-state-opacity-disabled);
      cursor: default;
    }
    .kol-table .kol-table__selection .kol-icon {
      display: flex;
      position: absolute;
      inset: auto;
      z-index: 1;
      font-size: calc(28 * 1rem / var(--kolibri-root-font-size, 16));
      pointer-events: none;
    }
    .kol-table .kol-table__selection--disabled .kol-icon, .kol-table .kol-table__selection-label--disabled .kol-icon {
      opacity: var(--kern-color-action-state-opacity-disabled);
    }
  }
}`,Rt=`@layer kol-theme-component {
  .kol-tabs .kol-button {
    --button-min-size: var(--kern-metric-dimension-x-large);
    --button-padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    font-size: var(--kern-typography-font-size-static-medium);
  }
  .kol-tabs .kol-button:focus-visible {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-tabs .kol-button:disabled {
    opacity: 0.4;
  }
  .kol-tabs .kol-button--hide-label {
    --button-padding: var(--kern-metric-space-small);
  }
  .kol-tabs .kol-button--inline {
    --button-min-size: 0;
  }
  .kol-tabs .kol-button__text {
    color: var(--button-text-color);
    background-color: var(--button-text-background-color);
    border-color: var(--button-text-border-color);
    border-style: solid;
    border-radius: var(--kern-metric-border-radius-default);
    min-width: var(--button-min-size);
    min-height: var(--button-min-size);
    padding: var(--button-padding);
    border-width: var(--kern-metric-border-width-light);
  }
  .kol-tabs .kol-button .kol-span__container {
    gap: var(--kern-metric-space-small);
  }
  .kol-tabs .kol-button .kol-span__label {
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-tabs .kol-button .kol-icon {
    font-size: var(--kern-metric-space-large);
  }
  .kol-tabs .kol-button--primary {
    --button-text-background-color-default: var(--kern-color-action-default);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  .kol-tabs .kol-button--primary:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-hover);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-hover);
  }
  .kol-tabs .kol-button--primary:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-active);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-active);
  }
  .kol-tabs .kol-button {
    /* Not specified in Kern! */
  }
  .kol-tabs .kol-button--danger {
    --button-text-background-color-default: var(--kern-color-feedback-danger);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  @supports (color-mix: color) {
    .kol-tabs .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 85%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-tabs .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: #a20d08;
    }
  }
  @supports (color-mix: color) {
    .kol-tabs .kol-button--danger:not([disabled]):active {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 80%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-tabs .kol-button--danger:not([disabled]):active {
      --button-text-background-color: #980c07;
    }
  }
  .kol-tabs .kol-button .badge-text-hint {
    color: var(--button-text-background-color-default);
    background-color: var(--button-text-color);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-tabs .kol-button .badge-text-hint, .kol-span .kol-span .kol-tabs .kol-button .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-tabs {
    /* Normal button variants */
  }
  .kol-tabs .kol-button--secondary,
  .kol-tabs .kol-link--secondary,
  .kol-tabs .kol-button--normal,
  .kol-tabs .kol-link--normal {
    --button-text-background-color-default: var(--kern-neutral-000);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-default);
  }
  .kol-tabs .kol-button--secondary:not([disabled]):hover,
  .kol-tabs .kol-link--secondary:not([disabled]):hover,
  .kol-tabs .kol-button--normal:not([disabled]):hover,
  .kol-tabs .kol-link--normal:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-tabs .kol-button--secondary:not([disabled]):active,
  .kol-tabs .kol-link--secondary:not([disabled]):active,
  .kol-tabs .kol-button--normal:not([disabled]):active,
  .kol-tabs .kol-link--normal:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  .kol-tabs {
    /* Ghost button variants */
  }
  .kol-tabs .kol-button--tertiary,
  .kol-tabs .kol-link--tertiary,
  .kol-tabs .kol-button--ghost,
  .kol-tabs .kol-link--ghost {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-tabs .kol-button--tertiary:not([disabled]):hover,
  .kol-tabs .kol-link--tertiary:not([disabled]):hover,
  .kol-tabs .kol-button--ghost:not([disabled]):hover,
  .kol-tabs .kol-link--ghost:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-tabs .kol-button--tertiary:not([disabled]):active,
  .kol-tabs .kol-link--tertiary:not([disabled]):active,
  .kol-tabs .kol-button--ghost:not([disabled]):active,
  .kol-tabs .kol-link--ghost:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-tabs .kol-button--tertiary:not(:has(.kol-icon)),
    .kol-tabs .kol-link--tertiary:not(:has(.kol-icon)),
    .kol-tabs .kol-button--ghost:not(:has(.kol-icon)),
    .kol-tabs .kol-link--ghost:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-tabs .kol-button--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-tabs .kol-link--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-tabs .kol-button--ghost:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-tabs .kol-link--ghost:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-tabs .kol-button--tertiary,
    .kol-tabs .kol-link--tertiary,
    .kol-tabs .kol-button--ghost,
    .kol-tabs .kol-link--ghost {
      text-decoration-line: underline;
    }
    .kol-tabs .kol-button--tertiary:not([disabled]):hover,
    .kol-tabs .kol-link--tertiary:not([disabled]):hover,
    .kol-tabs .kol-button--ghost:not([disabled]):hover,
    .kol-tabs .kol-link--ghost:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-tabs .kol-button {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-tabs .kol-button:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-tabs .kol-button:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-tabs .kol-button:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-tabs .kol-button:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-tabs .kol-button {
      text-decoration-line: underline;
    }
    .kol-tabs .kol-button:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-tabs__button-group {
    display: flex;
    gap: var(--kern-metric-space-small);
    border-bottom: 1px solid var(--kern-color-action-default);
  }
  .kol-tabs__button-group .kol-button.kol-button--normal {
    text-decoration: none;
  }
  .kol-tabs__button-group .kol-button:focus-visible {
    border-radius: 0;
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-tabs__button-group .kol-button.selected {
    border-bottom-color: var(--kern-color-action-default);
    text-decoration: none;
  }
  .kol-tabs__content {
    padding-top: var(--kern-metric-space-large);
  }
}`,zt=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
@layer kol-theme-component {
  .badge-text-hint {
    color: var(--kern-color-layout-text-inverse);
    background-color: var(--kern-color-layout-text-muted);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .badge-text-hint, .kol-span .kol-span .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field {
    padding: var(--kern-metric-space-none);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    font-family: var(--kern-typography-font-family-default);
  }
  .kol-form-field--read-only .kol-form-field__label, .kol-form-field--disabled .kol-form-field__label {
    opacity: 1;
    cursor: not-allowed;
  }
  .kol-form-field__label {
    color: var(--kern-color-layout-text-default);
    padding: var(--kern-metric-baseline-label-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-label-default-padding-bottom) var(--kern-metric-space-none);
    order: 1;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-medium);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
  }
  .kol-form-field__label__read-only {
    display: none;
  }
  .kol-form-field__msg {
    order: 4;
  }
  .kol-form-field__msg .kol-alert__icon {
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-form-field__hint {
    color: var(--kern-color-layout-text-default);
    color: var(--kern-color-layout-text-muted, #404565);
    padding: var(--kern-metric-baseline-body-default-padding-top) var(--kern-metric-space-none) var(--kern-metric-baseline-body-default-padding-bottom) var(--kern-metric-space-none);
    order: 2;
    font-size: var(--kern-typography-font-size-static-medium);
    font-weight: var(--kern-typography-font-weight-regular);
    line-height: var(--kern-typography-line-height-static-medium);
    letter-spacing: var(--kern-metric-space-none);
    font-style: normal;
  }
  .kol-form-field__input {
    order: 3;
  }
  .kol-form-field__counter {
    color: var(--kern-color-feedback-loader);
    margin-top: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
    font-size: calc(14.4 * 1rem / var(--kolibri-root-font-size, 16));
    font-weight: 400;
    line-height: 1.25;
  }
  .kol-form-field--required .kol-form-field__label-text::after {
    padding-left: 0.125em;
  }
  .kol-form-field--required .kol-form-field__tooltip .span-label::after {
    padding-left: 0.125em;
  }
  .kol-form-field--error {
    padding-left: var(--kern-metric-space-default);
    border-left: var(--kern-metric-border-width-bold) solid var(--kern-color-feedback-danger);
  }
  .kol-input {
    color: var(--kern-color-layout-text-default);
    background: transparent;
    height: var(--kern-metric-dimension-x-large);
    font-family: var(--kern-typography-font-family-default);
    border: none;
  }
  .kol-input--readonly {
    color: var(--color-black-70);
  }
  .kol-input:disabled {
    opacity: 1;
    color: var(--color-black-60);
  }
  .kol-input:disabled::-moz-placeholder {
    color: var(--color-black-60);
  }
  .kol-input:disabled::placeholder {
    color: var(--color-black-60);
  }
  .kol-input-container {
    background: var(--kern-color-form-input-background);
    border-radius: var(--kern-metric-border-radius-small) var(--kern-metric-border-radius-small) 0 0;
    position: relative;
    padding: 0 var(--kern-metric-space-default);
    gap: 0;
    border: none;
    border-bottom: var(--kol-input-border-width) solid var(--kol-input-border-color);
    --kol-input-border-color: var(--kern-color-form-input-border);
    --kol-input-border-width: var(--kern-metric-border-width-default);
  }
  .kol-input-container:not(.kol-input-container--disabled):hover {
    box-shadow: 0 calc(-1 * var(--kern-metric-border-width-default)) 0 0 var(--kol-input-border-color) inset;
  }
  .kol-input-container:focus-within {
    outline: var(--kern-metric-border-width-bold) solid var(--kol-input-border-color);
    border-radius: var(--kern-metric-border-radius-small);
    border-bottom-color: transparent;
  }
  .kol-input-container:focus-within:hover {
    box-shadow: none;
  }
  .kol-input-container:has(.kol-input--readonly) {
    background: inherit;
    --kol-input-border-color: var(--kern-color-layout-border);
    --kol-input-border-width: var(--kern-metric-border-width-light);
  }
  .kol-input-container:has(.kol-input--readonly) .kol-input--readonly {
    cursor: not-allowed;
  }
  .kol-input-container--disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
    cursor: not-allowed;
  }
  .kol-input-container--error {
    --kol-input-border-color: var(--kern-color-feedback-danger);
    background: var(--kern-color-feedback-danger-background);
  }
  .kol-input-container__smart-button .kol-button {
    color: var(--kern-color-feedback-info, );
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
    border-left: 1px solid var(--border-color);
    transition: all 80ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .kol-input-container__smart-button .kol-button:disabled {
    opacity: var(--kern-color-action-state-opacity-disabled);
  }
  .kol-input-container__smart-button .kol-button:not(:disabled):hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-input-container__smart-button .kol-button:focus {
    color: var(--kern-color-layout-background-default);
    background-color: var(--kern-color-form-input-border);
    outline: var(--kern-color-form-input-border) solid 2px;
    border: 1 solid var(--kern-color-form-input-border);
    outline-offset: 2px;
  }
  .kol-input-container {
    height: auto;
    min-height: var(--kern-metric-dimension-x-large);
  }
  .kol-textarea {
    background: transparent;
    display: block;
    height: auto;
    border: none;
  }
}`,Bt=`@charset "UTF-8";
/* TODO: h5 & h6 gibt es bei KernUX nicht, das ist ein Vorschlag damit die Styles nicht leer bleiben und noch als headline erkennbar sind */
@layer kol-theme-component {
  :host {
    top: var(--kern-metric-space-large);
    right: var(--kern-metric-space-large);
    width: calc(440 * 1rem / var(--kolibri-root-font-size, 16));
    max-width: 100%;
  }
  .kol-alert {
    position: relative;
    flex-direction: column;
    --alert-background-color: var(--kern-color-layout-background-default);
    /* Type modifiers with icons */
  }
  .kol-alert--type-info .kol-alert__icon {
    color: var(--kern-color-feedback-info);
  }
  .kol-alert--type-info .kol-alert__icon::before {
    content: "\\e910";
  }
  .kol-alert--type-error .kol-alert__icon {
    color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-error .kol-alert__icon::before {
    content: "\\e919";
  }
  .kol-alert--type-success .kol-alert__icon {
    color: var(--kern-color-feedback-success);
  }
  .kol-alert--type-success .kol-alert__icon::before {
    content: "\\e906";
  }
  .kol-alert--type-warning .kol-alert__icon {
    color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-warning .kol-alert__icon::before {
    content: "\\e903";
  }
  .kol-alert {
    /* Variant card base */
  }
  .kol-alert--variant-card {
    border-radius: var(--kern-metric-border-radius-default);
    border: var(--kern-metric-border-width-default) solid transparent;
  }
  .kol-alert--variant-card.kol-alert--type-default {
    border-color: var(--kern-color-form-input-border);
  }
  .kol-alert--variant-card.kol-alert--type-error {
    border-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--variant-card.kol-alert--type-info {
    border-color: var(--kern-color-feedback-info);
  }
  .kol-alert--variant-card.kol-alert--type-success {
    border-color: var(--kern-color-feedback-success);
  }
  .kol-alert--variant-card.kol-alert--type-warning {
    border-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--variant-card .kol-alert__closer {
    top: var(--kern-metric-space-default);
  }
  .kol-alert {
    /* Variant msg */
  }
  .kol-alert--variant-msg {
    color: var(--alert-msg-text-color);
  }
  .kol-alert {
    /* Type variants */
  }
  .kol-alert--type-default {
    --alert-accent-color: var(--kern-color-form-input-background);
    --alert-msg-text-color: var(--kern-color-form-input-border);
  }
  .kol-alert--type-info {
    --alert-accent-color: var(--kern-color-feedback-info-background);
    --alert-msg-text-color: var(--kern-color-feedback-info,);
  }
  .kol-alert--type-error {
    --alert-accent-color: var(--kern-color-feedback-danger-background);
    --alert-msg-text-color: var(--kern-color-feedback-danger);
  }
  .kol-alert--type-warning {
    --alert-accent-color: var(--kern-color-feedback-warning-background);
    --alert-msg-text-color: var(--kern-color-feedback-warning);
  }
  .kol-alert--type-success {
    --alert-accent-color: var(--kern-color-feedback-success-background);
    --alert-msg-text-color: var(--kern-color-feedback-success);
  }
  .kol-alert {
    /* Elements */
  }
  .kol-alert--variant-card .kol-alert__content {
    background: var(--kern-color-layout-background-default, #fff);
    display: flex;
    padding: var(--kern-metric-space-default) var(--kern-metric-space-large) var(--kern-metric-space-default) var(--kern-metric-space-large);
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-alert__container {
    display: flex;
    gap: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
    align-items: center;
  }
  .kol-alert--variant-card .kol-alert__container {
    background-color: var(--alert-accent-color);
    padding: var(--kern-metric-space-default);
  }
  .kol-alert--variant-msg .kol-alert__container {
    gap: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__container-content {
    display: grid;
    gap: calc(4rem / var(--kolibri-root-font-size));
  }
  .kol-alert__closer {
    border-radius: var(--kern-metric-border-radius-default);
  }
  .kol-alert__closer:hover {
    background: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-alert__closer .kol-icon {
    color: var(--kern-color-action-default);
    font-size: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert__heading {
    color: var(--kern-color-layout-text-default);
    margin: 0;
    padding: var(--kern-metric-baseline-title-default-padding-top) 0 var(--kern-metric-baseline-title-default-padding-bottomx) 0;
    vertical-align: baseline;
    font-family: var(--kern-typography-font-family-default);
    font-size: 100%;
    font-size: var(--kern-typography-font-size-adaptive-medium);
    font-weight: var(--kern-typography-font-weight-semi-bold);
    line-height: var(--kern-typography-line-height-adaptive-medium);
    letter-spacing: var(--kern-metric-space-none, 0);
    border: 0;
    font-style: normal;
  }
  .kol-alert__heading::after {
    content: "\xA0"; /* nbsp */
    white-space: pre; /* ensure space renders */
  }
  .kol-alert--variant-card .kol-alert__heading {
    padding: var(--kern-metric-space-small) 0;
  }
  .kol-alert--variant-card .kol-alert__icon {
    font-size: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-alert--variant-msg .kol-alert__icon {
    font-size: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-toast-item {
    margin-top: var(--kern-metric-space-large);
  }
}`,Vt=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
@layer kol-theme-component {
  .kol-button {
    --button-min-size: var(--kern-metric-dimension-x-large);
    --button-padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    font-size: var(--kern-typography-font-size-static-medium);
  }
  .kol-button:focus-visible {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-button:disabled {
    opacity: 0.4;
  }
  .kol-button--hide-label {
    --button-padding: var(--kern-metric-space-small);
  }
  .kol-button--inline {
    --button-min-size: 0;
  }
  .kol-button__text {
    color: var(--button-text-color);
    background-color: var(--button-text-background-color);
    border-color: var(--button-text-border-color);
    border-style: solid;
    border-radius: var(--kern-metric-border-radius-default);
    min-width: var(--button-min-size);
    min-height: var(--button-min-size);
    padding: var(--button-padding);
    border-width: var(--kern-metric-border-width-light);
  }
  .kol-button .kol-span__container {
    gap: var(--kern-metric-space-small);
  }
  .kol-button .kol-span__label {
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-button .kol-icon {
    font-size: var(--kern-metric-space-large);
  }
  .kol-button--primary {
    --button-text-background-color-default: var(--kern-color-action-default);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  .kol-button--primary:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-hover);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-hover);
  }
  .kol-button--primary:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-active);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-active);
  }
  .kol-button {
    /* Not specified in Kern! */
  }
  .kol-button--danger {
    --button-text-background-color-default: var(--kern-color-feedback-danger);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  @supports (color-mix: color) {
    .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 85%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-button--danger:not([disabled]):hover {
      --button-text-background-color: #a20d08;
    }
  }
  @supports (color-mix: color) {
    .kol-button--danger:not([disabled]):active {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 80%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-button--danger:not([disabled]):active {
      --button-text-background-color: #980c07;
    }
  }
  .kol-button .badge-text-hint {
    color: var(--button-text-background-color-default);
    background-color: var(--button-text-color);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-button .badge-text-hint, .kol-span .kol-span .kol-button .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  /* Normal button variants */
  .kol-button--secondary,
  .kol-link--secondary,
  .kol-button--normal,
  .kol-link--normal {
    --button-text-background-color-default: var(--kern-neutral-000);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-default);
  }
  .kol-button--secondary:not([disabled]):hover,
  .kol-link--secondary:not([disabled]):hover,
  .kol-button--normal:not([disabled]):hover,
  .kol-link--normal:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--secondary:not([disabled]):active,
  .kol-link--secondary:not([disabled]):active,
  .kol-button--normal:not([disabled]):active,
  .kol-link--normal:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  /* Ghost button variants */
  .kol-button--tertiary,
  .kol-link--tertiary,
  .kol-button--ghost,
  .kol-link--ghost {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-button--tertiary:not([disabled]):hover,
  .kol-link--tertiary:not([disabled]):hover,
  .kol-button--ghost:not([disabled]):hover,
  .kol-link--ghost:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--tertiary:not([disabled]):active,
  .kol-link--tertiary:not([disabled]):active,
  .kol-button--ghost:not([disabled]):active,
  .kol-link--ghost:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-button--tertiary:not(:has(.kol-icon)),
    .kol-link--tertiary:not(:has(.kol-icon)),
    .kol-button--ghost:not(:has(.kol-icon)),
    .kol-link--ghost:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-button--ghost:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--ghost:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-button--tertiary,
    .kol-link--tertiary,
    .kol-button--ghost,
    .kol-link--ghost {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not([disabled]):hover,
    .kol-link--tertiary:not([disabled]):hover,
    .kol-button--ghost:not([disabled]):hover,
    .kol-link--ghost:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-link {
    --button-min-size: var(--kern-metric-dimension-x-large);
    --button-padding: var(--kern-metric-space-small) var(--kern-metric-space-default);
    font-size: var(--kern-typography-font-size-static-medium);
  }
  .kol-link:focus-visible {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
  .kol-link:disabled {
    opacity: 0.4;
  }
  .kol-link--hide-label {
    --button-padding: var(--kern-metric-space-small);
  }
  .kol-link--inline {
    --button-min-size: 0;
  }
  .kol-link__text {
    color: var(--button-text-color);
    background-color: var(--button-text-background-color);
    border-color: var(--button-text-border-color);
    border-style: solid;
    border-radius: var(--kern-metric-border-radius-default);
    min-width: var(--button-min-size);
    min-height: var(--button-min-size);
    padding: var(--button-padding);
    border-width: var(--kern-metric-border-width-light);
  }
  .kol-link .kol-span__container {
    gap: var(--kern-metric-space-small);
  }
  .kol-link .kol-span__label {
    font-weight: var(--kern-typography-font-weight-medium);
  }
  .kol-link .kol-icon {
    font-size: var(--kern-metric-space-large);
  }
  .kol-link--primary {
    --button-text-background-color-default: var(--kern-color-action-default);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  .kol-link--primary:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-hover);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-hover);
  }
  .kol-link--primary:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-shade-active);
    --button-text-border-color: var(--kern-color-action-state-indicator-shade-active);
  }
  .kol-link {
    /* Not specified in Kern! */
  }
  .kol-link--danger {
    --button-text-background-color-default: var(--kern-color-feedback-danger);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-color: var(--kern-color-action-on-default);
  }
  @supports (color-mix: color) {
    .kol-link--danger:not([disabled]):hover {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 85%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-link--danger:not([disabled]):hover {
      --button-text-background-color: #a20d08;
    }
  }
  @supports (color-mix: color) {
    .kol-link--danger:not([disabled]):active {
      --button-text-background-color: color-mix(in srgb, var(--kern-color-feedback-danger) 80%, black);
    }
  }
  @supports not (color-mix: color) {
    .kol-link--danger:not([disabled]):active {
      --button-text-background-color: #980c07;
    }
  }
  .kol-link .badge-text-hint {
    color: var(--button-text-background-color-default);
    background-color: var(--button-text-color);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .kol-link .badge-text-hint, .kol-span .kol-span .kol-link .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  /* Normal button variants */
  .kol-button--secondary,
  .kol-link--secondary,
  .kol-button--normal,
  .kol-link--normal {
    --button-text-background-color-default: var(--kern-neutral-000);
    --button-text-background-color: var(--button-text-background-color-default);
    --button-text-border-color: var(--kern-color-action-default);
    --button-text-color: var(--kern-color-action-default);
  }
  .kol-button--secondary:not([disabled]):hover,
  .kol-link--secondary:not([disabled]):hover,
  .kol-button--normal:not([disabled]):hover,
  .kol-link--normal:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--secondary:not([disabled]):active,
  .kol-link--secondary:not([disabled]):active,
  .kol-button--normal:not([disabled]):active,
  .kol-link--normal:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  /* Ghost button variants */
  .kol-button--tertiary,
  .kol-link--tertiary,
  .kol-button--ghost,
  .kol-link--ghost {
    --button-text-background-color: transparent;
    --button-text-border-color: transparent;
    --button-text-color: var(--kern-color-action-default);
    --button-badge-color: var(--kern-neutral-000);
    text-decoration-color: var(--kern-color-action-default);
  }
  .kol-button--tertiary:not([disabled]):hover,
  .kol-link--tertiary:not([disabled]):hover,
  .kol-button--ghost:not([disabled]):hover,
  .kol-link--ghost:not([disabled]):hover {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-hover-opacity);
  }
  .kol-button--tertiary:not([disabled]):active,
  .kol-link--tertiary:not([disabled]):active,
  .kol-button--ghost:not([disabled]):active,
  .kol-link--ghost:not([disabled]):active {
    --button-text-background-color: var(--kern-color-action-state-indicator-tint-active-opacity);
  }
  @supports selector(:has(*)) {
    .kol-button--tertiary:not(:has(.kol-icon)),
    .kol-link--tertiary:not(:has(.kol-icon)),
    .kol-button--ghost:not(:has(.kol-icon)),
    .kol-link--ghost:not(:has(.kol-icon)) {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--tertiary:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-button--ghost:not(:has(.kol-icon)):not([disabled]):hover,
    .kol-link--ghost:not(:has(.kol-icon)):not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  @supports not selector(:has(*)) {
    .kol-button--tertiary,
    .kol-link--tertiary,
    .kol-button--ghost,
    .kol-link--ghost {
      text-decoration-line: underline;
    }
    .kol-button--tertiary:not([disabled]):hover,
    .kol-link--tertiary:not([disabled]):hover,
    .kol-button--ghost:not([disabled]):hover,
    .kol-link--ghost:not([disabled]):hover {
      text-decoration-thickness: var(--kern-3, 3px);
    }
  }
  .kol-toolbar {
    gap: var(--kern-metric-space-default);
  }
}`,Ht=`@charset "UTF-8";
/**
 * @file _mixims.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 30.07.2025
 * @@VERSION@@
 * @brief Styles und wiederverwendbare Snippets für mehrere Komponenten.
 *
 * Diese Datei enthält wiederverwendbare Snippets, die in mehrere Komponenten
 * eingesetzt werden können.
 */
@layer kol-theme-component {
  .kol-tree-item {
    display: flex;
    gap: var(--kern-metric-space-small);
    flex-direction: column;
    --indentation: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-tree-item .kol-tree-item__text {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-default-padding-top, 6px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-default-padding-bottom, 2px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-medium, 18px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
    color: var(--kern-color-action-default);
    display: inline-flex;
    align-items: flex-start;
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-1);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-tree-item .kol-tree-item__text__text {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-tree-item .kol-tree-item__text .kol-span__container {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-tree-item .kol-tree-item__text .kol-icon {
    color: var(--kern-color-action-default);
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-tree-item .kol-tree-item__text:has(.kol-icon) {
    text-decoration: none;
  }
  .kol-tree-item .kol-tree-item__text:has(.kol-icon):active .kol-span__label, .kol-tree-item .kol-tree-item__text:has(.kol-icon):hover .kol-span__label {
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-3);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-tree-item .kol-tree-item__text:has(.kol-icon) .kol-link__text,
  .kol-tree-item .kol-tree-item__text:has(.kol-icon) .kol-span__label {
    text-decoration: none;
  }
  .kol-tree-item .kol-tree-item__text:visited {
    color: var(--kern-color-action-visited);
  }
  .kol-tree-item .kol-tree-item__text:visited .kol-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-tree-item .kol-tree-item__text:not(.kol-tree-item .kol-tree-item__text--disabled):focus {
    outline: none;
  }
  .kol-tree-item .kol-tree-item__text:not(.kol-tree-item .kol-tree-item__text--disabled):hover {
    text-decoration-thickness: var(--kern-3);
  }
  .kol-tree-item .kol-tree-item__text:not(.kol-tree-item .kol-tree-item__text--disabled):active {
    color: var(--kern-color-action-default, );
    text-decoration-thickness: var(--kern-3);
  }
  .kol-tree-item .kol-tree-item__text:not(.kol-tree-item .kol-tree-item__text--disabled):active .kern-icon {
    color: var(--kern-color-action-default);
  }
  .kol-tree-item .kol-tree-item__text:not(.kol-tree-item .kol-tree-item__text--disabled):visited {
    color: var(--kern-color-action-visited);
  }
  .kol-tree-item .kol-tree-item__text:not(.kol-tree-item .kol-tree-item__text--disabled):visited .kern-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-tree-item .kol-tree-item__text--small {
    color: var(--kern-color-action-default);
    gap: var(--kern-metric-space-2x-small);
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-small-padding-top, 7px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-small-padding-bottom, 1px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-small, 16px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
  }
  .kol-tree-item .kol-tree-item__text--small .kol-icon {
    width: var(--kern-metric-dimension-small);
    min-width: var(--kern-metric-dimension-small);
    height: var(--kern-metric-dimension-small);
    min-height: var(--kern-metric-dimension-small);
  }
  .kol-tree-item .kol-tree-item__text:not(.kol-tree-item .kol-tree-item__text--stretched):focus-visible {
    box-shadow: var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 2px var(--kern-color-action-on-default), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 4px var(--kern-color-action-focus-border-inside), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 6px var(--kern-color-action-focus-border-outside);
    outline-color: transparent;
    border-radius: var(--kern-metric-border-radius-small, 0.125rem);
    position: relative;
    z-index: 1;
  }
  .kol-tree-item .kol-tree-item__text--external-link {
    flex-direction: row-reverse;
  }
  .kol-tree-item__link {
    background-color: var(--kern-color-layout-background-hued);
    display: flex;
    gap: var(--kern-metric-space-small);
    flex-direction: row;
  }
  .kol-tree-item__link .kol-tree-item__toggle-button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-default-padding-top, 6px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-default-padding-bottom, 2px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-medium, 18px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
    color: var(--kern-color-action-default);
    display: inline-flex;
    align-items: flex-start;
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-1);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-tree-item__link .kol-tree-item__toggle-button__text {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-tree-item__link .kol-tree-item__toggle-button .kol-span__container {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-tree-item__link .kol-tree-item__toggle-button .kol-icon {
    color: var(--kern-color-action-default);
    font-size: var(--kern-metric-dimension-default);
  }
  .kol-tree-item__link .kol-tree-item__toggle-button:has(.kol-icon) {
    text-decoration: none;
  }
  .kol-tree-item__link .kol-tree-item__toggle-button:has(.kol-icon):active .kol-span__label, .kol-tree-item__link .kol-tree-item__toggle-button:has(.kol-icon):hover .kol-span__label {
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
    text-decoration-style: solid;
    text-decoration-thickness: var(--kern-3);
    text-underline-offset: var(--kern-metric-space-2x-small);
    text-underline-position: from-font;
  }
  .kol-tree-item__link .kol-tree-item__toggle-button:has(.kol-icon) .kol-link__text,
  .kol-tree-item__link .kol-tree-item__toggle-button:has(.kol-icon) .kol-span__label {
    text-decoration: none;
  }
  .kol-tree-item__link .kol-tree-item__toggle-button:visited {
    color: var(--kern-color-action-visited);
  }
  .kol-tree-item__link .kol-tree-item__toggle-button:visited .kol-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-tree-item__link .kol-tree-item__toggle-button:not(.kol-tree-item__link .kol-tree-item__toggle-button--disabled):focus {
    outline: none;
  }
  .kol-tree-item__link .kol-tree-item__toggle-button:not(.kol-tree-item__link .kol-tree-item__toggle-button--disabled):hover {
    text-decoration-thickness: var(--kern-3);
  }
  .kol-tree-item__link .kol-tree-item__toggle-button:not(.kol-tree-item__link .kol-tree-item__toggle-button--disabled):active {
    color: var(--kern-color-action-default, );
    text-decoration-thickness: var(--kern-3);
  }
  .kol-tree-item__link .kol-tree-item__toggle-button:not(.kol-tree-item__link .kol-tree-item__toggle-button--disabled):active .kern-icon {
    color: var(--kern-color-action-default);
  }
  .kol-tree-item__link .kol-tree-item__toggle-button:not(.kol-tree-item__link .kol-tree-item__toggle-button--disabled):visited {
    color: var(--kern-color-action-visited);
  }
  .kol-tree-item__link .kol-tree-item__toggle-button:not(.kol-tree-item__link .kol-tree-item__toggle-button--disabled):visited .kern-icon {
    color: var(--kern-color-action-visited);
  }
  .kol-tree-item__link .kol-tree-item__toggle-button--small {
    color: var(--kern-color-action-default);
    gap: var(--kern-metric-space-2x-small);
    color: var(--kern-color-layout-text-default, #171A2B);
    font-family: var(--kern-typography-font-family-default, "Fira Sans");
    font-style: normal;
    letter-spacing: var(--kern-metric-space-none, 0px);
    padding: var(--kern-metric-baseline-body-small-padding-top, 7px) var(--kern-metric-space-none, 0px) var(--kern-metric-baseline-body-small-padding-bottom, 1px) var(--kern-metric-space-none, 0px);
    font-size: var(--kern-typography-font-size-static-small, 16px);
    font-weight: var(--kern-typography-font-weight-regular, 400);
    line-height: var(--kern-typography-line-height-static-medium, 24px);
  }
  .kol-tree-item__link .kol-tree-item__toggle-button--small .kol-icon {
    width: var(--kern-metric-dimension-small);
    min-width: var(--kern-metric-dimension-small);
    height: var(--kern-metric-dimension-small);
    min-height: var(--kern-metric-dimension-small);
  }
  .kol-tree-item__link .kol-tree-item__toggle-button:not(.kol-tree-item__link .kol-tree-item__toggle-button--stretched):focus-visible {
    box-shadow: var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 2px var(--kern-color-action-on-default), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 4px var(--kern-color-action-focus-border-inside), var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) var(--kern-metric-space-none, 0) 6px var(--kern-color-action-focus-border-outside);
    outline-color: transparent;
    border-radius: var(--kern-metric-border-radius-small, 0.125rem);
    position: relative;
    z-index: 1;
  }
  .kol-tree-item__link .kol-tree-item__toggle-button--external-link {
    flex-direction: row-reverse;
  }
  .kol-tree-item__link .kol-tree-item__toggle-button {
    align-items: center;
  }
  .kol-tree-item__link .kol-tree-item__toggle-button:hover .kol-icon {
    font-size: calc(32 * 1rem / var(--kolibri-root-font-size, 16));
  }
  .kol-tree-item__link .kol-link {
    width: 100%;
    padding-right: 0;
    padding-left: max(var(--indentation) * var(--level));
  }
  .kol-tree-item__link .kol-link:focus {
    outline-color: var(--kern-color-action-focus-background);
  }
  .kol-tree-item__link .kol-link .kol-span,
  .kol-tree-item__link .kol-link .kol-span__container,
  .kol-tree-item__link .kol-link .kol-span__label,
  .kol-tree-item__link .kol-link .kol-tree-item__link-inner,
  .kol-tree-item__link .kol-link .kol-tree-item__text {
    width: 100%;
  }
  .kol-tree-item__link-inner {
    gap: var(--kern-metric-space-x-small);
  }
  .kol-tree-item__link--active {
    background: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-active));
  }
  .kol-tree-item__link:hover {
    background: rgb(from var(--kern-color-action-default) r g b/var(--kern-color-action-state-opacity-hover));
  }
  .kol-tree-item__children {
    display: flex;
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
}`,Ut=`@layer kol-theme-component {
  .kol-tree__treeview-navigation {
    display: flex;
    gap: var(--kern-metric-space-small);
    flex-direction: column;
  }
  .kol-tree__treeview-navigation:focus-within {
    border-radius: var(--kern-metric-border-radius-default);
    box-shadow: 0 0 0 2px var(--kern-color-action-on-default), 0 0 0 4px var(--kern-color-action-focus-border-inside), 0 0 0 6px var(--kern-color-action-focus-border-outside);
    outline: 0;
  }
}`,Wt=$e.createTheme(`kern-v2`,{GLOBAL:`@charset "UTF-8";
/* @use '~@kern-ux/native/src/scss/core/tokens/_index'; */
[class*=" kolicon-"] {
  /* Icon mappings */
}
[class*=" kolicon-"].kolicon-plus {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-plus::before {
  content: "\\e926";
}
[class*=" kolicon-"].kolicon-minus {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-minus::before {
  content: "\\e92c";
}
[class*=" kolicon-"].kolicon-chevron-down {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-chevron-down::before {
  content: "\\e925";
}
[class*=" kolicon-"].kolicon-chevron-left {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-chevron-left::before {
  content: "\\e91d";
}
[class*=" kolicon-"].kolicon-chevron-right {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-chevron-right::before {
  content: "\\e91c";
}
[class*=" kolicon-"].kolicon-chevron-up {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-chevron-up::before {
  content: "\\e924";
}
[class*=" kolicon-"].kolicon-eye-closed {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-eye-closed::before {
  content: "\\e904";
}
[class*=" kolicon-"].kolicon-eye {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-eye::before {
  content: "\\e905";
}
[class*=" kolicon-"].kolicon-house {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-house::before {
  content: "\\e912";
}
[class*=" kolicon-"].kolicon-link-external {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-link-external::before {
  content: "\\e90a";
}
[class*=" kolicon-"].kolicon-version {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-version::before {
  content: "\\e930";
}
[class*=" kolicon-"].kolicon-alert-warning {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-alert-warning::before {
  content: "\\e903";
}
[class*=" kolicon-"].kolicon-alert-error {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-alert-error::before {
  content: "\\e919";
}
[class*=" kolicon-"].kolicon-alert-success {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-alert-success::before {
  content: "\\e906";
}
[class*=" kolicon-"].kolicon-alert-info {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-alert-info::before {
  content: "\\e910";
}
[class*=" kolicon-"].kolicon-check {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-check::before {
  content: "\\e91f";
}
[class*=" kolicon-"].kolicon-cross {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-cross::before {
  content: "\\e91b";
}
[class*=" kolicon-"].kolicon-chevron-double-left {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-chevron-double-left::before {
  content: "\\e90f";
}
[class*=" kolicon-"].kolicon-chevron-double-right {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-chevron-double-right::before {
  content: "\\e90e";
}
[class*=" kolicon-"].kolicon-cogwheel {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-cogwheel::before {
  content: "\\e92e";
}
[class*=" kolicon-"].kolicon-settings {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-settings::before {
  content: "\\e92e";
}
[class*=" kolicon-"].kolicon-up {
  font-family: material-symbols-subset;
}
[class*=" kolicon-"].kolicon-up::before {
  content: "\\e915";
}

/**
 * @file _colors.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 17.04.2025
 * @modified 23.05.2025
 * @@VERSION@@
 * @brief Tokens für die Colors.
 *
 * Diese Datei enthält die Tokens für die Colors
 * Colors sind als HEX-Werte bereitgestellt.
 */
:root {
  /* Dark Blue 025 */
  --kern-darkblue-025: #f6f6fa;
  /* Dark Blue 050 */
  --kern-darkblue-050: #ebeff9;
  /* Dark Blue 100 */
  --kern-darkblue-100: #d7e0f4;
  /* Dark Blue 150 */
  --kern-darkblue-150: #c4d1ee;
  /* Dark Blue 200 */
  --kern-darkblue-200: #aabce7;
  /* Dark Blue 250 */
  --kern-darkblue-250: #96acdf;
  /* Dark Blue 300 */
  --kern-darkblue-300: #7a9ad6;
  /* Dark Blue 350 */
  --kern-darkblue-350: #658bce;
  /* Dark Blue 400 */
  --kern-darkblue-400: #507bc5;
  /* Dark Blue 450 */
  --kern-darkblue-450: #3668bb;
  /* Dark Blue 500 */
  --kern-darkblue-500: #3c5fcf;
  /* Dark Blue 550 */
  --kern-darkblue-550: #2c52b8;
  /* Dark Blue 600 */
  --kern-darkblue-600: #2f4fad;
  /* Dark Blue 650 */
  --kern-darkblue-650: #2145a3;
  /* Dark Blue 700 */
  --kern-darkblue-700: #2d47a3;
  /* Dark Blue 750 */
  --kern-darkblue-750: #1f3b8f;
  /* Dark Blue 800 */
  --kern-darkblue-800: #19327f;
  /* Dark Blue 850 */
  --kern-darkblue-850: #152973;
  /* Dark Blue 900 */
  --kern-darkblue-900: #101f5c;
  /* Dark Blue 950 */
  --kern-darkblue-950: #0c1747;
}

:root {
  /* Light Blue 025 */
  --kern-lightblue-025: #f8fafe;
  /* Light Blue 050 */
  --kern-lightblue-050: #def4fc;
  /* Light Blue 100 */
  --kern-lightblue-100: #c4e8f8;
  /* Light Blue 150 */
  --kern-lightblue-150: #abdcf3;
  /* Light Blue 200 */
  --kern-lightblue-200: #90d0ee;
  /* Light Blue 250 */
  --kern-lightblue-250: #71c2e8;
  /* Light Blue 300 */
  --kern-lightblue-300: #4db2e0;
  /* Light Blue 350 */
  --kern-lightblue-350: #3ba4d4;
  /* Light Blue 400 */
  --kern-lightblue-400: #2f96c7;
  /* Light Blue 450 */
  --kern-lightblue-450: #1f84b7;
  /* Light Blue 500 */
  --kern-lightblue-500: #1c74a5;
  /* Light Blue 550 */
  --kern-lightblue-550: #0d6596;
  /* Light Blue 600 */
  --kern-lightblue-600: #00648f;
  /* Light Blue 650 */
  --kern-lightblue-650: #00507c;
  /* Light Blue 700 */
  --kern-lightblue-700: #00466d;
  /* Light Blue 750 */
  --kern-lightblue-750: #003a59;
  /* Light Blue 800 */
  --kern-lightblue-800: #002f48;
  /* Light Blue 850 */
  --kern-lightblue-850: #002238;
  /* Light Blue 900 */
  --kern-lightblue-900: #001828;
  /* Light Blue 950 */
  --kern-lightblue-950: #000e1a;
}

:root {
  /* Turquoise 025 */
  --kern-turquoise-025: #f6f9f9;
  /* Turquoise 050 */
  --kern-turquoise-050: #eef6f7;
  /* Turquoise 100 */
  --kern-turquoise-100: #d3eaec;
  /* Turquoise 150 */
  --kern-turquoise-150: #b8dee0;
  /* Turquoise 200 */
  --kern-turquoise-200: #a0d1d5;
  /* Turquoise 250 */
  --kern-turquoise-250: #88c4c9;
  /* Turquoise 300 */
  --kern-turquoise-300: #69b5bc;
  /* Turquoise 350 */
  --kern-turquoise-350: #52a9b1;
  /* Turquoise 400 */
  --kern-turquoise-400: #3b9ba5;
  /* Turquoise 450 */
  --kern-turquoise-450: #268d98;
  /* Turquoise 500 */
  --kern-turquoise-500: #157f8c;
  /* Turquoise 550 */
  --kern-turquoise-550: #0a7581;
  /* Turquoise 600 */
  --kern-turquoise-600: #006a77;
  /* Turquoise 650 */
  --kern-turquoise-650: #005d6b;
  /* Turquoise 700 */
  --kern-turquoise-700: #00545f;
  /* Turquoise 750 */
  --kern-turquoise-750: #004651;
  /* Turquoise 800 */
  --kern-turquoise-800: #003d46;
  /* Turquoise 850 */
  --kern-turquoise-850: #00343c;
  /* Turquoise 900 */
  --kern-turquoise-900: #002a31;
  /* Turquoise 950 */
  --kern-turquoise-950: #002126;
}

:root {
  /* Green 025 */
  --kern-green-025: #f8faf8;
  /* Green 050 */
  --kern-green-050: #f1f7f2;
  /* Green 100 */
  --kern-green-100: #dcecdf;
  /* Green 150 */
  --kern-green-150: #c7e1cc;
  /* Green 200 */
  --kern-green-200: #b0d5b7;
  /* Green 250 */
  --kern-green-250: #99c9a3;
  /* Green 300 */
  --kern-green-300: #80bc8d;
  /* Green 350 */
  --kern-green-350: #69b079;
  /* Green 400 */
  --kern-green-400: #52a364;
  /* Green 450 */
  --kern-green-450: #3c9650;
  /* Green 500 */
  --kern-green-500: #26893c;
  /* Green 550 */
  --kern-green-550: #147c2a;
  /* Green 600 */
  --kern-green-600: #026f1a;
  /* Green 650 */
  --kern-green-650: #00650d;
  /* Green 700 */
  --kern-green-700: #005700;
  /* Green 750 */
  --kern-green-750: #004e00;
  /* Green 800 */
  --kern-green-800: #004200;
  /* Green 850 */
  --kern-green-850: #003700;
  /* Green 900 */
  --kern-green-900: #002a00;
  /* Green 950 */
  --kern-green-950: #001f00;
}

:root {
  /* Limette 025 */
  --kern-limette-025: #f1faf1;
  /* Limette 050 */
  --kern-limette-050: #e6f4e6;
  /* Limette 100 */
  --kern-limette-100: #c8e5c8;
  /* Limette 150 */
  --kern-limette-150: #abd7ab;
  /* Limette 200 */
  --kern-limette-200: #8dc88d;
  /* Limette 250 */
  --kern-limette-250: #73bb73;
  /* Limette 300 */
  --kern-limette-300: #5aac5a;
  /* Limette 350 */
  --kern-limette-350: #429e42;
  /* Limette 400 */
  --kern-limette-400: #309230;
  /* Limette 450 */
  --kern-limette-450: #208420;
  /* Limette 500 */
  --kern-limette-500: #117611;
  /* Limette 550 */
  --kern-limette-550: #036803;
  /* Limette 600 */
  --kern-limette-600: #005c00;
  /* Limette 650 */
  --kern-limette-650: #004e00;
  /* Limette 700 */
  --kern-limette-700: #004300;
  /* Limette 750 */
  --kern-limette-750: #003900;
  /* Limette 800 */
  --kern-limette-800: #002d00;
  /* Limette 850 */
  --kern-limette-850: #002400;
  /* Limette 900 */
  --kern-limette-900: #001a00;
  /* Limette 950 */
  --kern-limette-950: #001200;
}

:root {
  /* Yellow 025 */
  --kern-yellow-025: #eafadf;
  /* Yellow 050 */
  --kern-yellow-050: #dff4ca;
  /* Yellow 100 */
  --kern-yellow-100: #c6e699;
  /* Yellow 150 */
  --kern-yellow-150: #b1da71;
  /* Yellow 200 */
  --kern-yellow-200: #9ccd4e;
  /* Yellow 250 */
  --kern-yellow-250: #87be2c;
  /* Yellow 300 */
  --kern-yellow-300: #72b00f;
  /* Yellow 350 */
  --kern-yellow-350: #5da100;
  /* Yellow 400 */
  --kern-yellow-400: #499200;
  /* Yellow 450 */
  --kern-yellow-450: #368300;
  /* Yellow 500 */
  --kern-yellow-500: #237400;
  /* Yellow 550 */
  --kern-yellow-550: #126500;
  /* Yellow 600 */
  --kern-yellow-600: #015700;
  /* Yellow 650 */
  --kern-yellow-650: #004c00;
  /* Yellow 700 */
  --kern-yellow-700: #003f00;
  /* Yellow 750 */
  --kern-yellow-750: #003300;
  /* Yellow 800 */
  --kern-yellow-800: #002800;
  /* Yellow 850 */
  --kern-yellow-850: #001c00;
  /* Yellow 900 */
  --kern-yellow-900: #001300;
  /* Yellow 950 */
  --kern-yellow-950: #000a00;
}

:root {
  /* Orange 025 */
  --kern-orange-025: #fafaf6;
  /* Orange 050 */
  --kern-orange-050: #f3f4e9;
  /* Orange 100 */
  --kern-orange-100: #e2e6c9;
  /* Orange 150 */
  --kern-orange-150: #d1d7aa;
  /* Orange 200 */
  --kern-orange-200: #bfc889;
  /* Orange 250 */
  --kern-orange-250: #adb969;
  /* Orange 300 */
  --kern-orange-300: #99a948;
  /* Orange 350 */
  --kern-orange-350: #889930;
  /* Orange 400 */
  --kern-orange-400: #768a1a;
  /* Orange 450 */
  --kern-orange-450: #647a06;
  /* Orange 500 */
  --kern-orange-500: #526b00;
  /* Orange 550 */
  --kern-orange-550: #415c00;
  /* Orange 600 */
  --kern-orange-600: #314d00;
  /* Orange 650 */
  --kern-orange-650: #233f00;
  /* Orange 700 */
  --kern-orange-700: #173200;
  /* Orange 750 */
  --kern-orange-750: #0d2600;
  /* Orange 800 */
  --kern-orange-800: #051a00;
  /* Orange 850 */
  --kern-orange-850: #001000;
  /* Orange 900 */
  --kern-orange-900: #000800;
  /* Orange 950 */
  --kern-orange-950: #000200;
}

:root {
  /* Red 025 */
  --kern-red-025: #fafaf9;
  /* Red 050 */
  --kern-red-050: #f6f2f0;
  /* Red 100 */
  --kern-red-100: #ebe0dc;
  /* Red 150 */
  --kern-red-150: #e0cfc8;
  /* Red 200 */
  --kern-red-200: #d4bdb3;
  /* Red 250 */
  --kern-red-250: #c8ac9f;
  /* Red 300 */
  --kern-red-300: #bb998a;
  /* Red 350 */
  --kern-red-350: #ae8776;
  /* Red 400 */
  --kern-red-400: #a07562;
  /* Red 450 */
  --kern-red-450: #92634e;
  /* Red 500 */
  --kern-red-500: #83513a;
  /* Red 550 */
  --kern-red-550: #744027;
  /* Red 600 */
  --kern-red-600: #642f15;
  /* Red 650 */
  --kern-red-650: #541f05;
  /* Red 700 */
  --kern-red-700: #441000;
  /* Red 750 */
  --kern-red-750: #350300;
  /* Red 800 */
  --kern-red-800: #260000;
  /* Red 850 */
  --kern-red-850: #1a0000;
  /* Red 900 */
  --kern-red-900: #0f0000;
  /* Red 950 */
  --kern-red-950: #060000;
}

:root {
  /* Violet 025 */
  --kern-violet-025: #faf9fa;
  /* Violet 050 */
  --kern-violet-050: #f4f1f4;
  /* Violet 100 */
  --kern-violet-100: #e8dde8;
  /* Violet 150 */
  --kern-violet-150: #ddcfdd;
  /* Violet 200 */
  --kern-violet-200: #cdb8cd;
  /* Violet 250 */
  --kern-violet-250: #bfa3bf;
  /* Violet 300 */
  --kern-violet-300: #b18eb1;
  /* Violet 350 */
  --kern-violet-350: #a2779f;
  /* Violet 400 */
  --kern-violet-400: #94628e;
  /* Violet 450 */
  --kern-violet-450: #844d7b;
  /* Violet 500 */
  --kern-violet-500: #753969;
  /* Violet 550 */
  --kern-violet-550: #662558;
  /* Violet 600 */
  --kern-violet-600: #551246;
  /* Violet 650 */
  --kern-violet-650: #450036;
  /* Violet 700 */
  --kern-violet-700: #360026;
  /* Violet 750 */
  --kern-violet-750: #280018;
  /* Violet 800 */
  --kern-violet-800: #1b000b;
  /* Violet 850 */
  --kern-violet-850: #100001;
  /* Violet 900 */
  --kern-violet-900: #070000;
  /* Violet 950 */
  --kern-violet-950: #010000;
}

:root {
  /* Neutral 000 */
  --kern-neutral-000: #ffffff;
  /* Neutral 025 */
  --kern-neutral-025: #f9f9f9;
  /* Neutral 050 */
  --kern-neutral-050: #f5f5f6;
  /* Neutral 100 */
  --kern-neutral-100: #e8e8ea;
  /* Neutral 150 */
  --kern-neutral-150: #dbdbde;
  /* Neutral 200 */
  --kern-neutral-200: #cecdd2;
  /* Neutral 250 */
  --kern-neutral-250: #c0bfc5;
  /* Neutral 300 */
  --kern-neutral-300: #b5b4bb;
  /* Neutral 350 */
  --kern-neutral-350: #a7a6ae;
  /* Neutral 400 */
  --kern-neutral-400: #9897a0;
  /* Neutral 450 */
  --kern-neutral-450: #8a8993;
  /* Neutral 500 */
  --kern-neutral-500: #7c7b85;
  /* Neutral 550 */
  --kern-neutral-550: #6d6c77;
  /* Neutral 600 */
  --kern-neutral-600: #605f6b;
  /* Neutral 650 */
  --kern-neutral-650: #52515d;
  /* Neutral 700 */
  --kern-neutral-700: #45444f;
  /* Neutral 750 */
  --kern-neutral-750: #383742;
  /* Neutral 800 */
  --kern-neutral-800: #2c2b35;
  /* Neutral 850 */
  --kern-neutral-850: #22212a;
  /* Neutral 900 */
  --kern-neutral-900: #18171e;
  /* Neutral 950 */
  --kern-neutral-950: #0f0e14;
  /* Neutral 1000 */
  --kern-neutral-1000: #000000;
}

:root {
  /* Dataport Red 025 */
  --kern-dataport-red-025: #f9f8f8;
  /* Dataport Red 050 */
  --kern-dataport-red-050: #f5f1f0;
  /* Dataport Red 100 */
  --kern-dataport-red-100: #e8ddd9;
  /* Dataport Red 150 */
  --kern-dataport-red-150: #dbcac3;
  /* Dataport Red 200 */
  --kern-dataport-red-200: #ceb6ad;
  /* Dataport Red 250 */
  --kern-dataport-red-250: #c1a398;
  /* Dataport Red 300 */
  --kern-dataport-red-300: #b38f82;
  /* Dataport Red 350 */
  --kern-dataport-red-350: #a57c6e;
  /* Dataport Red 400 */
  --kern-dataport-red-400: #986a5b;
  /* Dataport Red 450 */
  --kern-dataport-red-450: #8a5848;
  /* Dataport Red 500 */
  --kern-dataport-red-500: #7c4635;
  /* Dataport Red 550 */
  --kern-dataport-red-550: #6e3523;
  /* Dataport Red 600 */
  --kern-dataport-red-600: #602413;
  /* Dataport Red 650 */
  --kern-dataport-red-650: #521404;
  /* Dataport Red 700 */
  --kern-dataport-red-700: #440600;
  /* Dataport Red 750 */
  --kern-dataport-red-750: #360000;
  /* Dataport Red 800 */
  --kern-dataport-red-800: #290000;
  /* Dataport Red 850 */
  --kern-dataport-red-850: #1d0000;
  /* Dataport Red 900 */
  --kern-dataport-red-900: #130000;
  /* Dataport Red 950 */
  --kern-dataport-red-950: #0a0000;
}

:root {
  /* Gray 025 */
  --kern-gray-025: #f9f9f9;
  /* Gray 050 */
  --kern-gray-050: #f6f6f6;
  /* Gray 100 */
  --kern-gray-100: #eaeaea;
  /* Gray 150 */
  --kern-gray-150: #dddddd;
  /* Gray 200 */
  --kern-gray-200: #d4d4d4;
  /* Gray 250 */
  --kern-gray-250: #c9c9c9;
  /* Gray 300 */
  --kern-gray-300: #bdbdbd;
  /* Gray 350 */
  --kern-gray-350: #b3b3b3;
  /* Gray 400 */
  --kern-gray-400: #a8a8a8;
  /* Gray 450 */
  --kern-gray-450: #9d9d9d;
  /* Gray 500 */
  --kern-gray-500: #909090;
  /* Gray 550 */
  --kern-gray-550: #878787;
  /* Gray 600 */
  --kern-gray-600: #7b7b7b;
  /* Gray 650 */
  --kern-gray-650: #707070;
  /* Gray 700 */
  --kern-gray-700: #666666;
  /* Gray 750 */
  --kern-gray-750: #5a5a5a;
  /* Gray 800 */
  --kern-gray-800: #4f4f4f;
  /* Gray 850 */
  --kern-gray-850: #444444;
  /* Gray 900 */
  --kern-gray-900: #3a3a3a;
  /* Gray 950 */
  --kern-gray-950: #2e2e2e;
}

/**
 * @file _font.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 17.04.2025
 * @modified 23.05.2025
 * @@VERSION@@
 * @brief Tokens für die Font.
 *
 * Diese Datei enthält die Tokens für die Font
 */
:root {
  /* primitive-font-familiy */
  --kern-typography-font-family-fira-sans: Fira Sans;
  --kern-typography-font-family-fira-mono: Fira Mono;
  /* primitive-font-size */
  --kern-font-size-12: calc(12 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-font-size-14: calc(14 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-font-size-16: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-font-size-18: calc(18 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-font-size-20: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-font-size-21: calc(21 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-font-size-24: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-font-size-26: calc(26 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-font-size-32: calc(32 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-font-size-40: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-font-size-48: calc(48 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-font-size-56: calc(56 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-font-size-72: calc(72 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-font-size-80: calc(80 * 1rem / var(--kolibri-root-font-size, 16));
}

/**
 * @file _sizes.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 17.04.2025
 * @modified 23.05.2025
 * @@VERSION@@
 * @brief Tokens für die Sizes.
 *
 * Diese Datei enthält die Tokens für die Sizes
 */
:root {
  /* primitive-number */
  --kern-0: calc(0 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-1: calc(1 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-2: calc(2 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-3: calc(3 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-4: calc(4 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-5: calc(5 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-6: calc(6 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-7: calc(7 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-8: calc(8 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-9: calc(9 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-10: calc(10 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-14: calc(14 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-12: calc(12 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-16: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-18: calc(18 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-20: calc(20 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-24: calc(24 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-32: calc(32 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-40: calc(40 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-48: calc(48 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-56: calc(56 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-64: calc(64 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-80: calc(80 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-96: calc(96 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-128: calc(128 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-160: calc(160 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-192: calc(192 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-224: calc(224 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-240: calc(240 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-256: calc(256 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-352: calc(352 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-360: calc(360 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-384: calc(384 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-480: calc(480 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-512: calc(512 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-736: calc(736 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-768: calc(768 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-992: calc(992 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-1024: calc(1024 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-1140: calc(1140 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-1248: calc(1248 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-1280: calc(1280 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-1504: calc(1504 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-1536: calc(1536 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-1600: calc(1600 * 1rem / var(--kolibri-root-font-size, 16));
  --kern-1920: calc(1920 * 1rem / var(--kolibri-root-font-size, 16));
}

/**
 * @file _variables.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 26.05.2025
 * @@VERSION@@
 * @brief Tokens für mertics, components, typography.
 *
 * Diese Datei enthält Tokens, um die Sizes zu definieren.
 * Variationen (Mobile und Desktop).
 */
:root {
  --kern-metric-border-width-none: var(--kern-0);
  --kern-metric-border-width-light: var(--kern-1);
  --kern-metric-border-width-default: var(--kern-2);
  --kern-metric-border-width-bold: var(--kern-4);
  --kern-metric-border-width-heavy: var(--kern-8);
  --kern-metric-border-radius-none: var(--kern-0);
  --kern-metric-border-radius-small: var(--kern-2);
  --kern-metric-border-radius-default: var(--theme-border-radius);
  --kern-metric-border-radius-large: var(--kern-8);
  --kern-metric-border-radius-circle: 50%;
  --kern-component-badge-space-left: var(--kern-12);
  --kern-component-description-list-term-max-width: var(--kern-352);
  --kern-component-alert-icon-size: var(--kern-32);
  --kern-component-kopfzeile-font-family: 'Fira Sans', 'Fira Sans Regular', 'Noto Sans', 'Noto Sans Regular', 'SF Pro Text', 'Segoe UI', SegoeUI, Roboto, Arial,
  	Helvetica, sans-serif;
  --kern-component-kopfzeile-font-size: var(--kern-font-size-14);
  --kern-component-kopfzeile-line-height: var(--kern-font-size-16);
  --kern-component-kopfzeile-padding: var(--kern-7);
  --kern-metric-dimension-2x-small: var(--kern-8);
  --kern-metric-dimension-x-small: var(--kern-16);
  --kern-metric-dimension-small: var(--kern-20);
  --kern-metric-dimension-default: var(--kern-24);
  --kern-metric-dimension-large: var(--kern-32);
  --kern-metric-dimension-x-large: var(--kern-48);
  --kern-metric-dimension-2x-large: var(--kern-56);
  --kern-metric-dimension-3x-large: var(--kern-64);
  --kern-metric-dimension-4x-large: var(--kern-80);
  --kern-metric-dimension-5x-large: var(--kern-96);
  --kern-metric-dimension-media-small: var(--kern-96);
  --kern-metric-dimension-media-default: var(--kern-160);
  --kern-metric-dimension-media-large: var(--kern-240);
  --kern-metric-screen-size: var(--kern-360);
  --kern-metric-space-none: var(--kern-0);
  --kern-metric-space-2x-small: var(--kern-2);
  --kern-metric-space-x-small: var(--kern-4);
  --kern-metric-space-small: var(--kern-8);
  --kern-metric-space-default: var(--kern-16);
  --kern-metric-space-large: var(--kern-24);
  --kern-metric-space-x-large: var(--kern-32);
  --kern-typography-font-family-default: var(--kern-typography-font-family-fira-sans);
  --kern-typography-line-height-static-medium: var(--kern-font-size-24);
  --kern-typography-line-height-static-large: var(--kern-font-size-32);
  --kern-typography-line-height-adaptive-medium: var(--kern-font-size-24);
  --kern-typography-line-height-adaptive-large: var(--kern-font-size-32);
  --kern-typography-line-height-adaptive-x-large: var(--kern-font-size-40);
  --kern-typography-line-height-adaptive-2x-large: var(--kern-font-size-56);
  --kern-typography-font-size-static-small: var(--kern-font-size-16);
  --kern-typography-font-size-static-medium: var(--kern-font-size-18);
  --kern-typography-font-size-static-large: var(--kern-font-size-21);
  --kern-typography-font-size-adaptive-medium: var(--kern-font-size-21);
  --kern-typography-font-size-adaptive-large: var(--kern-font-size-26);
  --kern-typography-font-size-adaptive-x-large: var(--kern-font-size-32);
  --kern-typography-font-size-adaptive-2x-large: var(--kern-font-size-48);
  --kern-metric-baseline-body-default-padding-top: var(--kern-6);
  --kern-metric-baseline-body-default-padding-bottom: var(--kern-2);
  --kern-metric-baseline-body-large-padding-top: var(--kern-1);
  --kern-metric-baseline-body-large-padding-bottom: var(--kern-7);
  --kern-metric-baseline-body-small-padding-top: var(--kern-7);
  --kern-metric-baseline-body-small-padding-bottom: var(--kern-1);
  --kern-metric-baseline-heading-display-padding-top: var(--kern-12);
  --kern-metric-baseline-heading-display-padding-bottom: var(--kern-12);
  --kern-metric-baseline-heading-x-large-padding-top: var(--kern-9);
  --kern-metric-baseline-heading-x-large-padding-bottom: var(--kern-7);
  --kern-metric-baseline-heading-large-padding-top: var(--kern-7);
  --kern-metric-baseline-heading-large-padding-bottom: var(--kern-9);
  --kern-metric-baseline-heading-medium-padding-top: var(--kern-5);
  --kern-metric-baseline-heading-medium-padding-bottom: var(--kern-3);
  --kern-metric-baseline-heading-small-padding-top: var(--kern-6);
  --kern-metric-baseline-heading-small-padding-bottom: var(--kern-2);
  --kern-metric-baseline-title-large-padding-top: var(--kern-7);
  --kern-metric-baseline-title-large-padding-bottom: var(--kern-9);
  --kern-metric-baseline-title-default-padding-top: var(--kern-5);
  --kern-metric-baseline-title-default-padding-bottom: var(--kern-3);
  --kern-metric-baseline-title-small-padding-top: var(--kern-6);
  --kern-metric-baseline-title-small-padding-bottom: var(--kern-2);
  --kern-metric-baseline-preline-large-padding-top: var(--kern-1);
  --kern-metric-baseline-preline-large-padding-bottom: var(--kern-7);
  --kern-metric-baseline-preline-default-padding-top: var(--kern-6);
  --kern-metric-baseline-preline-default-padding-bottom: var(--kern-2);
  --kern-metric-baseline-preline-small-padding-top: var(--kern-7);
  --kern-metric-baseline-preline-small-padding-bottom: var(--kern-1);
  --kern-metric-baseline-subline-large-padding-top: var(--kern-1);
  --kern-metric-baseline-subline-large-padding-bottom: var(--kern-7);
  --kern-metric-baseline-subline-default-padding-top: var(--kern-6);
  --kern-metric-baseline-subline-default-padding-bottom: var(--kern-2);
  --kern-metric-baseline-subline-small-padding-top: var(--kern-7);
  --kern-metric-baseline-subline-small-padding-bottom: var(--kern-9);
  --kern-metric-baseline-label-large-padding-top: var(--kern-1);
  --kern-metric-baseline-label-large-padding-bottom: var(--kern-7);
  --kern-metric-baseline-label-default-padding-top: var(--kern-6);
  --kern-metric-baseline-label-default-padding-bottom: var(--kern-2);
  --kern-metric-baseline-label-small-padding-top: var(--kern-7);
  --kern-metric-baseline-label-small-padding-bottom: var(--kern-1);
  --kern-typography-font-weight-regular: 400;
  --kern-typography-font-weight-medium: 500;
  --kern-typography-font-weight-semi-bold: 600;
}
@media (min-width: 768px) {
  :root {
    --kern-component-kopfzeile-padding: var(--kern-7);
    --kern-component-alert-icon-size: var(--kern-40);
    --kern-component-kopfzeile-font-size: var(--kern-font-size-16);
    --kern-component-kopfzeile-line-height: var(--kern-font-size-20);
    --kern-component-kopfzeile-padding: var(--kern-5);
    --kern-metric-dimension-media-small: var(--kern-128);
    --kern-metric-dimension-media-default: var(--kern-192);
    --kern-metric-dimension-media-large: var(--kern-360);
    --kern-metric-screen-size: var(--kern-1920);
    --kern-typography-line-height-adaptive-medium: var(--kern-font-size-32);
    --kern-typography-line-height-adaptive-large: var(--kern-font-size-40);
    --kern-typography-line-height-adaptive-x-large: var(--kern-font-size-56);
    --kern-typography-line-height-adaptive-2x-large: var(--kern-font-size-80);
    --kern-typography-font-size-adaptive-medium: var(--kern-font-size-24);
    --kern-typography-font-size-adaptive-large: var(--kern-font-size-32);
    --kern-typography-font-size-adaptive-x-large: var(--kern-font-size-48);
    --kern-typography-font-size-adaptive-2x-large: var(--kern-font-size-72);
    --kern-metric-baseline-heading-x-large-padding-top: var(--kern-12);
    --kern-metric-baseline-heading-x-large-padding-bottom: var(--kern-12);
    --kern-metric-baseline-heading-large-padding-top: var(--kern-9);
    --kern-metric-baseline-heading-large-padding-bottom: var(--kern-7);
    --kern-metric-baseline-heading-medium-padding-top: var(--kern-8);
    --kern-metric-baseline-heading-medium-padding-bottom: var(--kern-8);
    --kern-metric-baseline-heading-display-padding-top: var(--kern-16);
    --kern-metric-baseline-heading-display-padding-bottom: var(--kern-16);
    --kern-metric-baseline-title-large-padding-top: var(--kern-9);
    --kern-metric-baseline-title-large-padding-bottom: var(--kern-7);
    --kern-metric-baseline-title-default-padding-top: var(--kern-8);
    --kern-metric-baseline-title-default-padding-bottom: var(--kern-8);
  }
}

:root {
  --theme-border-radius: var(--kern-4);
  --theme-action-default: var(--kern-darkblue-700-lightness) var(--kern-darkblue-700-chroma) var(--kern-darkblue-700-hue);
}

/**
 * @file _themes.scss
 * @author Darko Pervan, darko.pervan@dataport.de / KERN-Team
 * @author Tom Marienfeld, tom.marienfeld@dataport.de / KERN-Team
 * @date 16.12.2024
 * @modified 26.05.2025
 * @@VERSION@@
 * @brief Tokens für Color-Themes.
 *
 * Diese Datei enthält Tokens, um die Colors zu definieren.
 * Variationen (Light und Dark).
 */
:root {
  /* action */
  --kern-color-action-default: #2d47a3;
  --kern-color-action-on-default: #ffffff;
  --kern-color-action-visited: #74009e;
  /* action-focus */
  --kern-color-action-focus-background: #404464;
  --kern-color-action-focus-border-inside: #6e7596;
  --kern-color-action-focus-border-outside: #c2c6d6;
  /* action-state */
  /* action-state-indicator */
  --kern-color-action-state-indicator-default: var(--kern-color-action-default);
  --kern-color-action-state-indicator-shade: var(--kern-color-layout-text-default);
  --kern-color-action-state-indicator-tint: var(--kern-color-action-on-default);
  /* action-state-opacity */
  --kern-color-action-state-opacity-hover: 0.08;
  --kern-color-action-state-opacity-focus: 0.32;
  --kern-color-action-state-opacity-pressed: 0.32;
  --kern-color-action-state-opacity-selected: 0.12;
  --kern-color-action-state-opacity-disabled: 0.4;
  --kern-color-action-state-opacity-active: 0.16;
  --kern-color-action-state-opacity-overlay: 0.72;
  /* feedback */
  --kern-color-feedback-danger: #be0f09;
  --kern-color-feedback-danger-background: #feebe7;
  --kern-color-feedback-info: #00648f;
  --kern-color-feedback-info-background: #def4fc;
  --kern-color-feedback-success: #006b50;
  --kern-color-feedback-success-background: #dff6ee;
  --kern-color-feedback-warning: #8a4e00;
  --kern-color-feedback-warning-background: #fff0d1;
  /* feedback-loader */
  --kern-color-feedback-loader: #404464;
  --kern-color-feedback-loader-background: #e0e2eb;
  /* form-inputs */
  --kern-color-form-input-background: #f6f6f8;
  --kern-color-form-input-background-inverted: #ffffff;
  --kern-color-form-input-border: #171a2b;
  /* layout */
  --kern-color-layout-border: #a6abc4;
  --layout-border: #a5aac3;
  /* layout-text */
  --kern-color-layout-text-default: #171a2b;
  --kern-color-layout-text-inverse: #f6f6f8;
  --kern-color-layout-text-muted: #404464;
  /* layout-background */
  --kern-color-layout-background-default: #ffffff;
  --kern-color-layout-background-hued: #f6f6f8;
  --kern-color-layout-background-overlay: rgb(0, 0, 0, 0.72);
  --kern-color-action-state-indicator-shade-hover: #2f57c0;
  --kern-color-action-state-indicator-shade-active: #4671dd;
  --kern-color-action-state-indicator-tint-hover: #ebeff9;
  --kern-color-action-state-indicator-tint-active: #d7e0f4;
  --kern-color-action-state-indicator-tint-hover-opacity: rgb(45, 71, 163, 0.08);
  --kern-color-action-state-indicator-tint-active-opacity: rgb(45, 71, 163, 0.16);
}

@layer kol-theme-global {
  /* Properties */
  :host {
    --font-family: var(--kern-typography-font-family-default, sans-serif);
  }
  /* Font */
  :host {
    font-family: var(--font-family);
    font-size: calc(16 * 1rem / var(--kolibri-root-font-size, 16));
  }
  /* Hint */
  .badge-text-hint {
    color: var(--kern-color-layout-text-inverse);
    background-color: var(--kern-color-layout-text-muted);
    border-radius: var(--kern-metric-border-radius-default);
    padding: 0 0.3em;
  }
  .kol-span .badge-text-hint, .kol-span .kol-span .badge-text-hint {
    /* kol-span is a flex-element without white space between elements */
    margin-left: 0.25em;
  }
  .kol-tooltip__floating {
    border-radius: var(--kern-metric-border-radius-large);
    border: var(--kern-metric-border-width-light) solid var(--kern-color-layout-border);
  }
  .kol-tooltip__arrow {
    background-color: var(--kern-color-layout-background-default);
    border: var(--kern-metric-border-width-light) solid var(--kern-color-layout-border);
  }
  .kol-tooltip__content {
    color: var(--kern-color-layout-text-default);
    background-color: var(--kern-color-layout-background-default);
    border-radius: var(--kern-metric-border-radius-large);
    max-width: calc(400 * 1rem / var(--kolibri-root-font-size, 16));
    padding: calc(12 * 1rem / var(--kolibri-root-font-size, 16));
    line-height: 1.55;
  }
  blockquote {
    margin: var(--kern-metric-space-small) var(--kern-metric-space-large);
  }
}`,"KOL-ABBR":et,"KOL-ACCORDION":tt,"KOL-ALERT":nt,"KOL-BADGE":rt,"KOL-BREADCRUMB":it,"KOL-BUTTON":ot,"KOL-BUTTON-LINK":at,"KOL-CARD":st,"KOL-COMBOBOX":ct,"KOL-DETAILS":lt,"KOL-DIALOG":ut,"KOL-DRAWER":dt,"KOL-FORM":ft,"KOL-HEADING":pt,"KOL-INPUT-CHECKBOX":mt,"KOL-INPUT-COLOR":ht,"KOL-INPUT-DATE":gt,"KOL-INPUT-EMAIL":_t,"KOL-INPUT-FILE":vt,"KOL-INPUT-NUMBER":yt,"KOL-INPUT-PASSWORD":bt,"KOL-INPUT-RADIO":xt,"KOL-INPUT-RANGE":St,"KOL-INPUT-TEXT":Ct,"KOL-LINK":Tt,"KOL-LINK-BUTTON":wt,"KOL-NAV":Et,"KOL-PAGINATION":Dt,"KOL-POPOVER-BUTTON":Ot,"KOL-PROGRESS":kt,"KOL-QUOTE":At,"KOL-SELECT":jt,"KOL-SINGLE-SELECT":Mt,"KOL-SKIP-NAV":Nt,"KOL-SPIN":Pt,"KOL-SPLIT-BUTTON":Ft,"KOL-TABLE-STATEFUL":It,"KOL-TABLE-STATELESS":Lt,"KOL-TABS":Rt,"KOL-TEXTAREA":zt,"KOL-TOAST-CONTAINER":Bt,"KOL-TOOLBAR":Vt,"KOL-TREE":Ut,"KOL-TREE-ITEM":Ht}),Gt,L,Kt,R,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an={},on=[],sn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,z=Array.isArray;function B(e,t){for(var n in t)e[n]=t[n];return e}function cn(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function V(e,t,n){var r,i,a,o={};for(a in t)a==`key`?r=t[a]:a==`ref`?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?Gt.call(arguments,2):n),typeof e==`function`&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return H(e,o,r,i,null)}function H(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Kt,__i:-1,__u:0};return i==null&&L.vnode!=null&&L.vnode(a),a}function ln(){return{current:null}}function U(e){return e.children}function W(e,t){this.props=e,this.context=t}function G(e,t){if(t==null)return e.__?G(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?G(e):null}function un(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],a=B({},t);a.__v=t.__v+1,L.vnode&&L.vnode(a),xn(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??G(t),!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,Cn(r,a,i),t.__e=t.__=null,a.__e!=n&&dn(a)}}function dn(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),dn(e)}function fn(e){(!e.__d&&(e.__d=!0)&&R.push(e)&&!pn.__r++||qt!=L.debounceRendering)&&((qt=L.debounceRendering)||Jt)(pn)}function pn(){try{for(var e,t=1;R.length;)R.length>t&&R.sort(Yt),e=R.shift(),t=R.length,un(e)}finally{R.length=pn.__r=0}}function mn(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,g,_,v=r&&r.__k||on,y=t.length;for(c=hn(n,t,v,c,y),d=0;d<y;d++)(p=n.__k[d])!=null&&(f=p.__i!=-1&&v[p.__i]||an,p.__i=d,g=xn(e,p,f,i,a,o,s,c,l,u),m=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&En(f.ref,null,p),u.push(p.ref,p.__c||m,p)),h==null&&m!=null&&(h=m),(_=!!(4&p.__u))||f.__k===p.__k?(c=gn(p,c,e,_),_&&f.__e&&(f.__e=null)):typeof p.type==`function`&&g!==void 0?c=g:m&&(c=m.nextSibling),p.__u&=-7);return n.__e=h,c}function hn(e,t,n,r,i){var a,o,s,c,l,u=n.length,d=u,f=0;for(e.__k=Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(typeof o==`string`||typeof o==`number`||typeof o==`bigint`||o.constructor==String?o=e.__k[a]=H(null,o,null,null,null):z(o)?o=e.__k[a]=H(U,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=H(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,c=a+f,o.__=e,o.__b=e.__b+1,s=null,(l=o.__i=_n(o,n,c,d))!=-1&&(d--,(s=n[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(i>u?f--:i<u&&f++),typeof o.type!=`function`&&(o.__u|=4)):l!=c&&(l==c-1?f--:l==c+1?f++:(l>c?f--:f++,o.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<u;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=G(s)),Dn(s,s));return r}function gn(e,t,n,r){var i,a;if(typeof e.type==`function`){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=gn(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=G(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t&&=t.nextSibling;while(t!=null&&t.nodeType==8);return t}function K(e,t){return t||=[],e==null||typeof e==`boolean`||(z(e)?e.some(function(e){K(e,t)}):t.push(e)),t}function _n(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l!=null&&(2&l.__u)==0;if(l===null&&s==null||u&&s==l.key&&c==l.type)return n;if(r>(u?1:0)){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])!=null&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function vn(e,t,n){t[0]==`-`?e.setProperty(t,n??``):e[t]=n==null?``:typeof n!=`number`||sn.test(t)?n:n+`px`}function yn(e,t,n,r,i){var a,o;n:if(t==`style`)if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||vn(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||vn(e.style,t,n[t])}else if(t[0]==`o`&&t[1]==`n`)a=t!=(t=t.replace($t,`$1`)),o=t.toLowerCase(),t=o in e||t==`onFocusOut`||t==`onFocusIn`?o.slice(2):t.slice(2),e.l||={},e.l[t+a]=n,n?r?n[Qt]=r[Qt]:(n[Qt]=en,e.addEventListener(t,a?nn:tn,a)):e.removeEventListener(t,a?nn:tn,a);else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function bn(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[Zt]==null)t[Zt]=en++;else if(t[Zt]<n[Qt])return;return n(L.event?L.event(t):t)}}}function xn(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,m,h,g,_,v,y,b,x,ee,te,S,C=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),a=[s=t.__e=n.__e]),(u=L.__b)&&u(t);n:if(typeof C==`function`)try{if(_=t.props,v=C.prototype&&C.prototype.render,y=(u=C.contextType)&&r[u.__c],b=u?y?y.props.value:u.__:r,n.__c?g=(d=t.__c=n.__c).__=d.__E:(v?t.__c=d=new C(_,b):(t.__c=d=new W(_,b),d.constructor=C,d.render=On),y&&y.sub(d),d.state||={},d.__n=r,f=d.__d=!0,d.__h=[],d._sb=[]),v&&d.__s==null&&(d.__s=d.state),v&&C.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=B({},d.__s)),B(d.__s,C.getDerivedStateFromProps(_,d.__s))),p=d.props,m=d.state,d.__v=t,f)v&&C.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),v&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(v&&C.getDerivedStateFromProps==null&&_!==p&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(_,b),t.__v==n.__v||!d.__e&&d.shouldComponentUpdate!=null&&!1===d.shouldComponentUpdate(_,d.__s,b)){t.__v!=n.__v&&(d.props=_,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(e){e&&(e.__=t)}),on.push.apply(d.__h,d._sb),d._sb=[],d.__h.length&&o.push(d);break n}d.componentWillUpdate!=null&&d.componentWillUpdate(_,d.__s,b),v&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(p,m,h)})}if(d.context=b,d.props=_,d.__P=e,d.__e=!1,x=L.__r,ee=0,v)d.state=d.__s,d.__d=!1,x&&x(t),u=d.render(d.props,d.state,d.context),on.push.apply(d.__h,d._sb),d._sb=[];else do d.__d=!1,x&&x(t),u=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++ee<25);d.state=d.__s,d.getChildContext!=null&&(r=B(B({},r),d.getChildContext())),v&&!f&&d.getSnapshotBeforeUpdate!=null&&(h=d.getSnapshotBeforeUpdate(p,m)),te=u!=null&&u.type===U&&u.key==null?wn(u.props.children):u,s=mn(e,z(te)?te:[te],t,n,r,i,a,o,s,c,l),d.base=t.__e,t.__u&=-161,d.__h.length&&o.push(d),g&&(d.__E=d.__=null)}catch(e){if(t.__v=null,c||a!=null)if(e.then){for(t.__u|=c?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a[a.indexOf(s)]=null,t.__e=s}else{for(S=a.length;S--;)cn(a[S]);Sn(t)}else t.__e=n.__e,t.__k=n.__k,e.then||Sn(t);L.__e(e,t,n)}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=Tn(n.__e,t,n,r,i,a,o,c,l);return(u=L.diffed)&&u(t),128&t.__u?void 0:s}function Sn(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(Sn))}function Cn(e,t,n){for(var r=0;r<n.length;r++)En(n[r],n[++r],n[++r]);L.__c&&L.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){L.__e(e,t.__v)}})}function wn(e){return typeof e!=`object`||!e||e.__b>0?e:z(e)?e.map(wn):B({},e)}function Tn(e,t,n,r,i,a,o,s,c){var l,u,d,f,p,m,h,g=n.props||an,_=t.props,v=t.type;if(v==`svg`?i=`http://www.w3.org/2000/svg`:v==`math`?i=`http://www.w3.org/1998/Math/MathML`:i||=`http://www.w3.org/1999/xhtml`,a!=null){for(l=0;l<a.length;l++)if((p=a[l])&&`setAttribute`in p==!!v&&(v?p.localName==v:p.nodeType==3)){e=p,a[l]=null;break}}if(e==null){if(v==null)return document.createTextNode(_);e=document.createElementNS(i,v,_.is&&_),s&&=(L.__m&&L.__m(t,a),!1),a=null}if(v==null)g===_||s&&e.data==_||(e.data=_);else{if(a&&=Gt.call(e.childNodes),!s&&a!=null)for(g={},l=0;l<e.attributes.length;l++)g[(p=e.attributes[l]).name]=p.value;for(l in g)p=g[l],l==`dangerouslySetInnerHTML`?d=p:l==`children`||l in _||l==`value`&&`defaultValue`in _||l==`checked`&&`defaultChecked`in _||yn(e,l,null,p,i);for(l in _)p=_[l],l==`children`?f=p:l==`dangerouslySetInnerHTML`?u=p:l==`value`?m=p:l==`checked`?h=p:s&&typeof p!=`function`||g[l]===p||yn(e,l,p,g[l],i);if(u)s||d&&(u.__html==d.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(d&&(e.innerHTML=``),mn(t.type==`template`?e.content:e,z(f)?f:[f],t,n,r,v==`foreignObject`?`http://www.w3.org/1999/xhtml`:i,a,o,a?a[0]:n.__k&&G(n,0),s,c),a!=null)for(l=a.length;l--;)cn(a[l]);s||(l=`value`,v==`progress`&&m==null?e.removeAttribute(`value`):m!=null&&(m!==e[l]||v==`progress`&&!m||v==`option`&&m!=g[l])&&yn(e,l,m,g[l],i),l=`checked`,h!=null&&h!=e[l]&&yn(e,l,h,g[l],i))}return e}function En(e,t,n){try{if(typeof e==`function`){var r=typeof e.__u==`function`;r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(e){L.__e(e,n)}}function Dn(e,t,n){var r,i;if(L.unmount&&L.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||En(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){L.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Dn(r[i],t,n||typeof e.type!=`function`);n||cn(e.__e),e.__c=e.__=e.__e=void 0}function On(e,t,n){return this.constructor(e,n)}function q(e,t,n){var r,i,a,o;t==document&&(t=document.documentElement),L.__&&L.__(e,t),i=(r=typeof n==`function`)?null:n&&n.__k||t.__k,a=[],o=[],xn(t,e=(!r&&n||t).__k=V(U,null,[e]),i||an,an,t.namespaceURI,!r&&n?[n]:i?null:t.firstChild?Gt.call(t.childNodes):null,a,!r&&n?n:i?i.__e:t.firstChild,r,o),Cn(a,e,o)}function kn(e,t){q(e,t,kn)}function An(e,t,n){var r,i,a,o,s=B({},e.props);for(a in e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)a==`key`?r=t[a]:a==`ref`?i=t[a]:s[a]=t[a]===void 0&&o!=null?o[a]:t[a];return arguments.length>2&&(s.children=arguments.length>3?Gt.call(arguments,2):n),H(e.type,s,r||e.key,i||e.ref,null)}function jn(e){function t(e){var n,r;return this.getChildContext||(n=new Set,(r={})[t.__c]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&n.forEach(function(e){e.__e=!0,fn(e)})},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n&&n.delete(e),t&&t.call(e)}}),e.children}return t.__c=`__cC`+ rn++,t.__=e,t.Provider=t.__l=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}Gt=on.slice,L={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(t){e=t}throw e}},Kt=0,W.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=B({},this.state);typeof e==`function`&&(e=e(B({},n),this.props)),e&&B(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),fn(this))},W.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),fn(this))},W.prototype.render=U,R=[],Jt=typeof Promise==`function`?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Yt=function(e,t){return e.__v.__b-t.__v.__b},pn.__r=0,Xt=Math.random().toString(8),Zt=`__d`+Xt,Qt=`__a`+Xt,$t=/(PointerCapture)$|Capture$/i,en=0,tn=bn(!1),nn=bn(!0),rn=0;var J,Y,Mn,Nn,X=0,Pn=[],Z=L,Fn=Z.__b,In=Z.__r,Ln=Z.diffed,Rn=Z.__c,zn=Z.unmount,Bn=Z.__;function Q(e,t){Z.__h&&Z.__h(Y,e,X||t),X=0;var n=Y.__H||={__:[],__h:[]};return e>=n.__.length&&n.__.push({}),n.__[e]}function Vn(e){return X=1,Hn(ir,e)}function Hn(e,t,n){var r=Q(J++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):ir(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=Y,!Y.__f)){var i=function(e,t,n){if(!r.__c.__H)return!0;var i=r.__c.__H.__.filter(function(e){return e.__c});if(i.every(function(e){return!e.__N}))return!a||a.call(this,e,t,n);var o=r.__c.props!==e;return i.some(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}}),a&&a.call(this,e,t,n)||o};Y.__f=!0;var a=Y.shouldComponentUpdate,o=Y.componentWillUpdate;Y.componentWillUpdate=function(e,t,n){if(this.__e){var r=a;a=void 0,i(e,t,n),a=r}o&&o.call(this,e,t,n)},Y.shouldComponentUpdate=i}return r.__N||r.__}function Un(e,t){var n=Q(J++,3);!Z.__s&&rr(n.__H,t)&&(n.__=e,n.u=t,Y.__H.__h.push(n))}function Wn(e,t){var n=Q(J++,4);!Z.__s&&rr(n.__H,t)&&(n.__=e,n.u=t,Y.__h.push(n))}function Gn(e){return X=5,qn(function(){return{current:e}},[])}function Kn(e,t,n){X=6,Wn(function(){if(typeof e==`function`){var n=e(t());return function(){e(null),n&&typeof n==`function`&&n()}}if(e)return e.current=t(),function(){return e.current=null}},n==null?n:n.concat(e))}function qn(e,t){var n=Q(J++,7);return rr(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Jn(e,t){return X=8,qn(function(){return e},t)}function Yn(e){var t=Y.context[e.__c],n=Q(J++,9);return n.c=e,t?(n.__??(n.__=!0,t.sub(Y)),t.props.value):e.__}function Xn(e,t){Z.useDebugValue&&Z.useDebugValue(t?t(e):e)}function Zn(){var e=Q(J++,11);if(!e.__){for(var t=Y.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||=[0,0];e.__=`P`+n[0]+`-`+ n[1]++}return e.__}function Qn(){for(var e;e=Pn.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(tr),t.__h.some(nr),t.__h=[]}catch(n){t.__h=[],Z.__e(n,e.__v)}}}Z.__b=function(e){Y=null,Fn&&Fn(e)},Z.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Bn&&Bn(e,t)},Z.__r=function(e){In&&In(e),J=0;var t=(Y=e.__c).__H;t&&(Mn===Y?(t.__h=[],Y.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(tr),t.__h.some(nr),t.__h=[],J=0)),Mn=Y},Z.diffed=function(e){Ln&&Ln(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Pn.push(t)!==1&&Nn===Z.requestAnimationFrame||((Nn=Z.requestAnimationFrame)||er)(Qn)),t.__H.__.some(function(e){e.u&&(e.__H=e.u),e.u=void 0})),Mn=Y=null},Z.__c=function(e,t){t.some(function(e){try{e.__h.some(tr),e.__h=e.__h.filter(function(e){return!e.__||nr(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],Z.__e(n,e.__v)}}),Rn&&Rn(e,t)},Z.unmount=function(e){zn&&zn(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(e){try{tr(e)}catch(e){t=e}}),n.__H=void 0,t&&Z.__e(t,n.__v))};var $n=typeof requestAnimationFrame==`function`;function er(e){var t,n=function(){clearTimeout(r),$n&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);$n&&(t=requestAnimationFrame(n))}function tr(e){var t=Y,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),Y=t}function nr(e){var t=Y;e.__c=e.__(),Y=t}function rr(e,t){return!e||e.length!==t.length||t.some(function(t,n){return t!==e[n]})}function ir(e,t){return typeof t==`function`?t(e):t}function ar(e,t){for(var n in t)e[n]=t[n];return e}function or(e,t){for(var n in e)if(n!==`__source`&&!(n in t))return!0;for(var r in t)if(r!==`__source`&&e[r]!==t[r])return!0;return!1}function sr(e,t){var n=t(),r=Vn({t:{__:n,u:t}}),i=r[0].t,a=r[1];return Wn(function(){i.__=n,i.u=t,cr(i)&&a({t:i})},[e,n,t]),Un(function(){return cr(i)&&a({t:i}),e(function(){cr(i)&&a({t:i})})},[e]),n}function cr(e){try{return!((t=e.__)===(n=e.u())&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}var t,n}function lr(e){e()}function ur(e){return e}function dr(){return[!1,lr]}var fr=Wn;function pr(e,t){this.props=e,this.context=t}function mr(e,t){function n(e){var n=this.props.ref;return n!=e.ref&&n&&(typeof n==`function`?n(null):n.current=null),t?!t(this.props,e)||n!=e.ref:or(this.props,e)}function r(t){return this.shouldComponentUpdate=n,V(e,t)}return r.displayName=`Memo(`+(e.displayName||e.name)+`)`,r.__f=r.prototype.isReactComponent=!0,r.type=e,r}(pr.prototype=new W).isPureReactComponent=!0,pr.prototype.shouldComponentUpdate=function(e,t){return or(this.props,e)||or(this.state,t)};var hr=L.__b;L.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),hr&&hr(e)};var gr=typeof Symbol<`u`&&Symbol.for&&Symbol.for(`react.forward_ref`)||3911;function _r(e){function t(t){var n=ar({},t);return delete n.ref,e(n,t.ref||null)}return t.$$typeof=gr,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName=`ForwardRef(`+(e.displayName||e.name)+`)`,t}var vr=function(e,t){return e==null?null:K(K(e).map(t))},yr={map:vr,forEach:vr,count:function(e){return e?K(e).length:0},only:function(e){var t=K(e);if(t.length!==1)throw`Children.only`;return t[0]},toArray:K},br=L.__e;L.__e=function(e,t,n,r){if(e.then){for(var i,a=t;a=a.__;)if((i=a.__c)&&i.__c)return t.__e??(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}br(e,t,n,r)};var xr=L.unmount;function Sr(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(e){typeof e.__c==`function`&&e.__c()}),e.__c.__H=null),(e=ar({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(e){return Sr(e,t,n)})),e}function Cr(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return Cr(e,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function wr(){this.__u=0,this.o=null,this.__b=null}function Tr(e){var t=e.__&&e.__.__c;return t&&t.__a&&t.__a(e)}function Er(e){var t,n,r,i=null;function a(a){if(t||(t=e()).then(function(e){e&&(i=e.default||e),r=!0},function(e){n=e,r=!0}),n)throw n;if(!r)throw t;return i?V(i,a):null}return a.displayName=`Lazy`,a.__f=!0,a}function Dr(){this.i=null,this.l=null}L.unmount=function(e){var t=e.__c;t&&(t.__z=!0),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),xr&&xr(e)},(wr.prototype=new W).__c=function(e,t){var n=t.__c,r=this;r.o??=[],r.o.push(n);var i=Tr(r.__v),a=!1,o=function(){a||r.__z||(a=!0,n.__R=null,i?i(c):c())};n.__R=o;var s=n.__P;n.__P=null;var c=function(){if(!--r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=Cr(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.o.pop();)t.__P=s,t.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o)},wr.prototype.componentWillUnmount=function(){this.o=[]},wr.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement(`div`),r=this.__v.__k[0].__c;this.__v.__k[0]=Sr(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__a&&V(U,null,e.fallback);return i&&(i.__u&=-33),[V(U,null,t.__a?null:e.children),i]};var Or=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!==`t`||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};function kr(e){return this.getChildContext=function(){return e.context},e.children}function Ar(e){var t=this,n=e.h;if(t.componentWillUnmount=function(){q(null,t.v),t.v=null,t.h=null},t.h&&t.h!==n&&t.componentWillUnmount(),!t.v){for(var r=t.__v;r!==null&&!r.__m&&r.__!==null;)r=r.__;t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],__k:{__m:r.__m},contains:function(){return!0},namespaceURI:n.namespaceURI,insertBefore:function(e,n){this.childNodes.push(e),t.h.insertBefore(e,n)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.h.removeChild(e)}}}q(V(kr,{context:t.context},e.__v),t.v)}function jr(e,t){var n=V(Ar,{__v:e,h:t});return n.containerInfo=t,n}(Dr.prototype=new W).__a=function(e){var t=this,n=Tr(t.__v),r=t.l.get(e);return r[0]++,function(i){var a=function(){t.props.revealOrder?(r.push(i),Or(t,e,r)):i()};n?n(a):a()}},Dr.prototype.render=function(e){this.i=null,this.l=new Map;var t=K(e.children);e.revealOrder&&e.revealOrder[0]===`b`&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},Dr.prototype.componentDidUpdate=Dr.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Or(e,n,t)})};var Mr=typeof Symbol<`u`&&Symbol.for&&Symbol.for(`react.element`)||60103,Nr=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Pr=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Fr=/[A-Z0-9]/g,Ir=typeof document<`u`,Lr=function(e){return(typeof Symbol<`u`&&typeof Symbol()==`symbol`?/fil|che|rad/:/fil|che|ra/).test(e)};function Rr(e,t,n){return t.__k??(t.textContent=``),q(e,t),typeof n==`function`&&n(),e?e.__c:null}function zr(e,t,n){return kn(e,t),typeof n==`function`&&n(),e?e.__c:null}W.prototype.isReactComponent=!0,[`componentWillMount`,`componentWillReceiveProps`,`componentWillUpdate`].forEach(function(e){Object.defineProperty(W.prototype,e,{configurable:!0,get:function(){return this[`UNSAFE_`+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Br=L.event;L.event=function(e){return Br&&(e=Br(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var Vr,Hr={configurable:!0,get:function(){return this.class}},Ur=L.vnode;L.vnode=function(e){typeof e.type==`string`&&function(e){var t=e.props,n=e.type,r={},i=n.indexOf(`-`)==-1;for(var a in t){var o=t[a];if(!(a===`value`&&`defaultValue`in t&&o==null||Ir&&a===`children`&&n===`noscript`||a===`class`||a===`className`)){var s=a.toLowerCase();a===`defaultValue`&&`value`in t&&t.value==null?a=`value`:a===`download`&&!0===o?o=``:s===`translate`&&o===`no`?o=!1:s[0]===`o`&&s[1]===`n`?s===`ondoubleclick`?a=`ondblclick`:s!==`onchange`||n!==`input`&&n!==`textarea`||Lr(t.type)?s===`onfocus`?a=`onfocusin`:s===`onblur`?a=`onfocusout`:Pr.test(a)&&(a=s):s=a=`oninput`:i&&Nr.test(a)?a=a.replace(Fr,`-$&`).toLowerCase():o===null&&(o=void 0),s===`oninput`&&r[a=s]&&(a=`oninputCapture`),r[a]=o}}n==`select`&&(r.multiple&&Array.isArray(r.value)&&(r.value=K(t.children).forEach(function(e){e.props.selected=r.value.indexOf(e.props.value)!=-1})),r.defaultValue!=null&&(r.value=K(t.children).forEach(function(e){e.props.selected=r.multiple?r.defaultValue.indexOf(e.props.value)!=-1:r.defaultValue==e.props.value}))),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,`className`,Hr)):t.className&&(r.class=r.className=t.className),e.props=r}(e),e.$$typeof=Mr,Ur&&Ur(e)};var Wr=L.__r;L.__r=function(e){Wr&&Wr(e),Vr=e.__c};var Gr=L.diffed;L.diffed=function(e){Gr&&Gr(e);var t=e.props,n=e.__e;n!=null&&e.type===`textarea`&&`value`in t&&t.value!==n.value&&(n.value=t.value==null?``:t.value),Vr=null};var Kr={ReactCurrentDispatcher:{current:{readContext:function(e){return Vr.__n[e.__c].props.value},useCallback:Jn,useContext:Yn,useDebugValue:Xn,useDeferredValue:ur,useEffect:Un,useId:Zn,useImperativeHandle:Kn,useInsertionEffect:fr,useLayoutEffect:Wn,useMemo:qn,useReducer:Hn,useRef:Gn,useState:Vn,useSyncExternalStore:sr,useTransition:dr}}};function qr(e){return V.bind(null,e)}function Jr(e){return!!e&&e.$$typeof===Mr}function Yr(e){return Jr(e)&&e.type===U}function Xr(e){return!!e&&typeof e.displayName==`string`&&e.displayName.indexOf(`Memo(`)==0}function Zr(e){return Jr(e)?An.apply(null,arguments):e}function Qr(e){return!!e.__k&&(q(null,e),!0)}function $r(e){return e&&(e.base||e.nodeType===1&&e)||null}var ei={useState:Vn,useId:Zn,useReducer:Hn,useEffect:Un,useLayoutEffect:Wn,useInsertionEffect:fr,useTransition:dr,useDeferredValue:ur,useSyncExternalStore:sr,startTransition:lr,useRef:Gn,useImperativeHandle:Kn,useMemo:qn,useCallback:Jn,useContext:Yn,useDebugValue:Xn,version:`18.3.1`,Children:yr,render:Rr,hydrate:zr,unmountComponentAtNode:Qr,createPortal:jr,createElement:V,createContext:jn,createFactory:qr,cloneElement:Zr,createRef:ln,Fragment:U,isValidElement:Jr,isElement:Jr,isFragment:Yr,isMemo:Xr,findDOMNode:$r,Component:W,PureComponent:pr,memo:mr,forwardRef:_r,flushSync:function(e,t){var n=L.debounceRendering;L.debounceRendering=function(e){return e()};var r=e(t);return L.debounceRendering=n,r},unstable_batchedUpdates:function(e,t){return e(t)},StrictMode:U,Suspense:wr,SuspenseList:Dr,lazy:Er,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Kr},ti=e=>e.toLowerCase().split(`-`).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(``),ni=e=>e.replace(/([A-Z])/g,e=>`-${e[0].toLowerCase()}`),ri=(e,t,n={})=>{if(e instanceof Element){let r=ii(e.classList,t,n);r!==``&&(e.className=r),Object.keys(t).forEach(n=>{if(!(n===`children`||n===`style`||n===`ref`||n===`class`||n===`className`||n===`forwardedRef`))if(n.indexOf(`on`)===0&&n[2]===n[2].toUpperCase()){let r=n.substring(2),i=r[0].toLowerCase()+r.substring(1);oi(i)||si(e,i,t[n])}else e[n]=t[n],typeof t[n]==`string`&&e.setAttribute(ni(n),t[n])})}},ii=(e,t,n)=>{let r=t.className||t.class,i=n.className||n.class,a=ci(e),o=ci(r?r.split(` `):[]),s=ci(i?i.split(` `):[]),c=[];return a.forEach(e=>{o.has(e)?(c.push(e),o.delete(e)):s.has(e)||c.push(e)}),o.forEach(e=>c.push(e)),c.join(` `)},ai=e=>{switch(e){case`doubleclick`:return`dblclick`}return e},oi=e=>{if(typeof document>`u`)return!0;{let t=`on`+ai(e),n=t in document;if(!n){let e=document.createElement(`div`);e.setAttribute(t,`return;`),n=typeof e[t]==`function`}return n}},si=(e,t,n)=>{let r=e.__events||={},i=r[t];i&&e.removeEventListener(t,i),e.addEventListener(t,r[t]=function(e){n&&n.call(this,e)})},ci=e=>{let t=new Map;return e.forEach(e=>t.set(e,e)),t},li,ui=(e,t)=>{typeof e==`function`?e(t):e!=null&&(e.current=t)},di=(...e)=>t=>{e.forEach(e=>{ui(e,t)})},fi=(e,t)=>{let n=(t,n)=>ei.createElement(e,{...t,forwardedRef:n});return n.displayName=t,ei.forwardRef(n)},pi=(e,t,n,r)=>{let i=ti(e);return fi(class extends ei.Component{componentEl;setComponentElRef=e=>{this.componentEl=e};constructor(e){super(e)}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(e){ri(this.componentEl,this.props,e)}render(){let{children:t,forwardedRef:n,style:r,className:i,ref:a,...o}=this.props,s={...Object.keys(o).reduce((e,t)=>{let n=o[t];if(t.indexOf(`on`)===0&&t[2]===t[2].toUpperCase()){let r=t.substring(2).toLowerCase();typeof document<`u`&&oi(r)&&(e[t]=n)}else{let r=typeof n;(r===`string`||r===`boolean`||r===`number`)&&(e[ni(t)]=n)}return e},{}),ref:di(n,this.setComponentElRef),style:r};return V(typeof li==`function`?li(e):e,s,t)}static get displayName(){return i}},i)},mi=pi(`kol-badge`),hi=pi(`kol-button`),gi=pi(`kol-card`),_i=pi(`kol-input-text`),vi=pi(`kol-single-select`),yi=[{id:`betrieb`,name:`Betrieb`,color:`#00883d`},{id:`infrastruktur`,name:`Infrastruktur`,color:`#c5192d`},{id:`plattform`,name:`Plattform`,color:`#003d82`},{id:`zugang`,name:`Zugang`,color:`#f39c12`}],bi=[{id:`1`,name:`Advanced Encryption Standard`,category:`betrieb`,description:`AES verschlüsselt Daten symmetrisch. Ver- und Entschlüsselung erfolgt mit dem gleichen Schlüssel.`,logo:`https://technologie.deutschland-stack.gov.de/logos/ea1f7d95bfc86df67400a503baea0601fd4e5a672f77067915c08d796b31c016.png`,tags:[`schluessel`,`symmetrisch`,`verschluesselung`],featured:!1},{id:`2`,name:`Agent Network Protocol`,category:`plattform`,description:`ANP ermöglicht sichere, dezentralisierte Kommunikation zwischen KI-Agenten über offene Internet-Infrastrukturen. Fungiert als standardisiertes Peer-to-Peer-Protokoll für agentengesteuerte Kollaborationen und etabliert ein "HTTP für das Agent-Internet-Zeitalter" durch interoperable Identitätsverwaltung und semantische Datenverknüpfung.`,logo:`https://technologie.deutschland-stack.gov.de/logos/f851e80651a6f09f22b45ccd169fe3ebbee3a43fc2e83a6179c1825ed06c4583.png`,tags:[`agent`,`kommunikation`,`agentische-ki`],featured:!1},{id:`3`,name:`Agent-to-Agent Protocol`,category:`plattform`,description:`A2A ermöglicht KI-Agenten, die auf unterschiedlichen Frameworks verschiedener Unternehmen basieren und auf separaten Servern laufen, effektiv zu kommunizieren und zusammenzuarbeiten. A2A zielt darauf ab, eine gemeinsame Sprache für Agenten bereitzustellen und so ein stärker vernetztes, leistungsfähigeres und innovativeres KI-Ökosystem zu fördern. A2A integriert ACP (Agent Communication Protocol).`,logo:`https://technologie.deutschland-stack.gov.de/logos/94eb78506809ea76f57f09083f66998b41a5fdb1fba06e996b23e90ebd439011.png`,tags:[`agent`,`prozess`,`agentische-ki`,`automatisierung`],featured:!1},{id:`4`,name:`Agent-User Interaction Protocol (AG-UI)`,category:`plattform`,description:`AG-UI standardisiert Status, Ziel und Interaktion von KI-Agenten und deren Laufzeit gegenüber den Nutzenden.`,logo:`https://technologie.deutschland-stack.gov.de/logos/f25b349d85d5b846a0f4e7e49c0e9ad59d2659855901c4338e088c985eb9503b.png`,tags:[`agent`,`agentische-ki`,`user-interface`],featured:!1},{id:`5`,name:`Android`,category:`zugang`,description:`Android ist ein offenes Betriebssystem für die Arbeit auf mobilen Endgeräten.`,logo:`https://technologie.deutschland-stack.gov.de/logos/86179d131fd1e4ea2eb8c62e57dc62ea60ce64eeb2fd26d1e1aec14b57e0a33c.png`,tags:[`mobil`,`app`,`betriebssystem`],featured:!1},{id:`6`,name:`Angel-ML`,category:`plattform`,description:`Angel-ML ist eine hochperformante verteilte Machine Learning-Plattform, die auf der Parameter Server-Philosophie basiert und von Tencent entwickelt wurde. Das System ist speziell für Big Data-Szenarien optimiert und bietet eine Full-Stack-Lösung für Feature Engineering, Modelltraining, Parameter-Tuning und Model Serving. Angel unterstützt verschiedene ML-Algorithmen wie statistische Verfahren, neuronale Netze und Graph Computing und ist das erste chinesische Open-Source-Projekt, das von der Linux Foundation AI graduiert wurde.`,logo:`https://technologie.deutschland-stack.gov.de/logos/368cb76534a255996c3a7892d13b93af7d06733c72bbb4106553545cfd9a0589.png`,tags:[`machine-learning`,`verarbeitung`,`ml`],featured:!1},{id:`7`,name:`Angular`,category:`betrieb`,description:`Angular ist ein Webframework, das Entwicklern die Erstellung schneller und zuverlässiger Anwendungen ermöglicht.`,logo:`https://technologie.deutschland-stack.gov.de/logos/05c03673494d1ae92ddaaa0ab9d0c4e6de9decf5e3d5bc20e8c032fb2edb52b7.png`,tags:[`webframework`,`user-interface`],featured:!1},{id:`8`,name:`Appsmith`,category:`plattform`,description:`Appsmith will die Erstellung individueller Admin-Panels und interner Apps mit vorgefertigten Widgets und Datenquellenanbindung beschleunigen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/b8194649c4ed39bd0ef22c72eac8f25f1426926f48aeedd21fd111833150c3de.png`,tags:[`rest-graphql`,`open-source`,`drag-drop`,`javascript`],featured:!1},{id:`9`,name:`Axolotl`,category:`plattform`,description:`Axolotl ist ein Framework zum Feintuning von großen Sprachmodellen. Dafür können optimierte Workflows genutzt werden.`,logo:`https://technologie.deutschland-stack.gov.de/logos/f4f5fe1ee6a2b003aeee64a4563a767829276e3f5adc4cf3beee647b12ee3e07.png`,tags:[`verarbeitung`,`training`,`feintuning`],featured:!1},{id:`10`,name:`Blink`,category:`zugang`,description:`Blink ist eine Browser-Engine zum Rendern von Webseiten. Es wird insbesondere von Google für Chrome, Microsoft für Edge und Opera genutzt.`,logo:`https://technologie.deutschland-stack.gov.de/logos/d619a23cab9cb0d2a6d887716bde949acd3af071523f3f2b7c71369aceec8192.png`,tags:[`webseite`,`browser-engine`,`rendern`],featured:!1},{id:`11`,name:`Bluetooth`,category:`infrastruktur`,description:`Bluetooth ermöglicht eine Ad-hoc oder Punkt-zu-Punkt Funk-Verbindung. Die Verbindung von zwei Geräten erfolgt über die Aktivierung zwischen den Geräte (Koppeln/ Pairing). Bluetooth bietet in der Variante LE ergänzende Funktionen zu Broadcast, Mesh und Geräteposition.`,logo:`https://technologie.deutschland-stack.gov.de/logos/31d1c87a4a9a554a4e4453d714701b5f82a7006ec737797f36ccd66ebcea4753.png`,tags:[`kurze-distanz`,`pairing`,`koppeln`,`drahtlos`,`funk`,`wpan`],featured:!1},{id:`12`,name:`Border Gateway Protocol (BGP)`,category:`infrastruktur`,description:`BGP ist ein entscheidendes Routing-Protokoll im Internet, das Netzwerke miteinander verbindet und dafür sorgt, dass Datenpakete ihren optimalen Weg durch verschiedene autonome Systeme finden. BGP ermöglicht es Internetdienstleistern (ISPs) und größeren Netzwerken, Routeninformationen effizient auszutauschen, um die Datenübertragung zu optimieren. Es spielt eine Schlüsselrolle bei der Aufrechterhaltung der Stabilität und Skalierbarkeit der globalen Internetinfrastruktur`,logo:`https://technologie.deutschland-stack.gov.de/logos/8113b974fdfd48ae1568e95aa2ea200dafbbeaea1e519eafe8294d3f85f14433.png`,tags:[`netzwerk`,`isp`,`routing`],featured:!1},{id:`13`,name:`Budibase`,category:`plattform`,description:`Budibase ermöglicht das schnelle Erstellen interner Business-Apps, mit vorgefertigten Komponenten und breiter Datenquellenunterstützung.`,logo:`https://technologie.deutschland-stack.gov.de/logos/35a8d30a0d33c31efa3ea82da00a4687b4267d504b616948c22a3f3cc7cf7d42.png`,tags:[`automations`,`open-source`,`datenquellen`,`low-code`],featured:!1},{id:`14`,name:`C++`,category:`betrieb`,description:`C++ ist eine objektorientierte Programmiersprache für die Entwicklung von Systemsoftware.`,logo:`https://technologie.deutschland-stack.gov.de/logos/d273d125b78c6f0ae94a2a562b03e9073bd7bc5318b5c44e91fe755dd3869af3.png`,tags:[`programmierung`,`sprache`],featured:!1},{id:`15`,name:`Cassandra`,category:`plattform`,description:`Cassandra ist eine spaltenbasierte NoSQL-Datenbank.`,logo:`https://technologie.deutschland-stack.gov.de/logos/20db70e5925917d705a13873122ac76b08435309ab847046dbbb5c9ff401efef.png`,tags:[`nosql`,`datenbank`,`spalten`],featured:!1},{id:`16`,name:`Chroma`,category:`plattform`,description:`Chroma ist eine Vektor-Datenbank.`,logo:`https://technologie.deutschland-stack.gov.de/logos/c9f39800739458fe7b315fcc86d3fc10e925ee7c4c5ff5a415b18f532e80eef6.png`,tags:[`datenbank`,`vektor`],featured:!1},{id:`17`,name:`circleCI`,category:`betrieb`,description:`CircleCI ist eine CI/CD-Plattform zur Automatisierung des Softwareentwicklungsprozesses. Für mobile Entwickler bietet CircleCI robuste Umgebungen zum Erstellen, Testen und Bereitstellen von iOS- und Android-Apps.`,logo:`https://technologie.deutschland-stack.gov.de/logos/c258163c041ff3abef3dfe84010890f37b8feb62c74e192c4f6cdf1d8750d477.png`,tags:[`pipeline`,`cd`,`bereitstellung`,`ci`],featured:!1},{id:`18`,name:`Comma-Separated Values (CSV)`,category:`plattform`,description:`CSV ist ein Datenformat für den Datenaustausch.`,logo:`https://technologie.deutschland-stack.gov.de/logos/3bb96419f6c8d7ffd826331c11f7bdff7751d3918ae7df6ee8446f5dfc4034a6.png`,tags:[`datenformat`],featured:!1},{id:`19`,name:`Comprehensive Knowledge Archive Network (CKAN)`,category:`plattform`,description:`CKAN ist ein Werkzeug für Open Data Portale zur Katalogisierung, Veröffentlichung, Suche und Bereitstellung von Daten.`,logo:`https://technologie.deutschland-stack.gov.de/logos/23f2f26e905a41cf91375e8c230ad6b9162a766db536e61341eb9151fa1c11fa.png`,tags:[`veroeffentlichung`,`datenkatalog`,`open-data`,`suche`,`bereitstellung`],featured:!1},{id:`20`,name:`Contour`,category:`plattform`,description:`Contour ist ein Open-Source Ingress Controller für Kubernetes, der den Envoy Proxy und Lastenausgleich nutzt. Er fungiert als Steuerungsebene (Control Plane) für Envoy und ermöglicht dynamische Konfigurationsaktualisierungen sowie die Delegation von Ingress-Funktionen. Contour ist leichtgewichtig und bietet Funktionen wie TLS-Terminierung, HTTP zu HTTPS-Weiterleitung und verschiedene Lastausgleichsoptionen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/6941a28a18e158b27bc2e5898819bbd046865bfcb35a09d6d2e18d6e3a36d49f.png`,tags:[`controller`,`orchestrierung`,`ingress`],featured:!1},{id:`21`,name:`CouchDB`,category:`plattform`,description:`CouchDB ist eine dokumentenorientierte NoSQL-Datenbank.`,logo:`https://technologie.deutschland-stack.gov.de/logos/05b44aca484e8cba0968cfc75dd7e5841fab9b82f70bc1eccd6176a0d1a53779.png`,tags:[`nosql`,`datenbank`,`dokumentenbasiert`],featured:!1},{id:`22`,name:`CSS`,category:`betrieb`,description:`Cascading Style Sheets (CSS) ist eine Kernsprache der offenen Webplattform und wird zum Hinzufügen von Stilen (z. B. Schriftarten, Farben, Abstände) zu Webdokumenten verwendet.`,logo:`https://technologie.deutschland-stack.gov.de/logos/79883b62e1ce6e2694e326045d0db38260d5797ec04e27a154917a1c7f223754.png`,tags:[`stil`,`user-interface`],featured:!1},{id:`23`,name:`Data Catalog Vocabulary (DCAT)`,category:`plattform`,description:`DCAT dient der Beschreibung von Daten in Datenkatalogen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/6fb753239ff6b000653cd2026421bc71b84b2ff7d0ba1c5534ae44f70fd4a65a.png`,tags:[`datenkatalog`,`open-data`],featured:!1},{id:`24`,name:`Docker Swarm`,category:`plattform`,description:`Docker Swarm ist ein in die Docker-Engine integriertes Orchestrierungswerkzeug mit dem mehrere Docker-Hosts gebündelt werden können. Derart kann ein Cluster definiert werden. Es automatisiert das Deployment, die Skalierung und die Verwaltung von Containern und bietet eine einfache Benutzeroberfläche und integrierte Funktionen wie Service Discovery, Lastenausgleich und hohe Verfügbarkeit.`,logo:`https://technologie.deutschland-stack.gov.de/logos/1019704913e6e818bf43fa450dc6232d1d7b451c0bb3b40c4a88c148d3cc6c61.png`,tags:[`orchestrierung`,`container`],featured:!1},{id:`25`,name:`Domain Name System (DNS)`,category:`infrastruktur`,description:`Das DNS ist ein hierarchisches, dezentrales Namensauflösungssystem, das menschenlesbare Domainnamen in IP-Adressen übersetzt. DNS ist fundamental für das Funktionieren des modernen Internets und ermöglicht die Navigation zwischen verschiedenen Online-Diensten.`,logo:`https://technologie.deutschland-stack.gov.de/logos/fab01fa865acc89a0bd07cf51768f0a5e72e0fd2ae2c67b52c6cb8908596c88a.png`,tags:[`adresse`,`netzwerk`],featured:!1},{id:`26`,name:`Dynamic Host Configuration Protocol (DHCP)`,category:`infrastruktur`,description:`DHCP ermöglicht automatische Netzwerkkonfiguration durch dynamische Zuweisung von IP-Adressen und Netzwerkparametern an verbundene Geräte. Fungiert als zentraler Service für Plug-and-Play-Netzwerkkonnektivität und reduziert manuellen Administrationsaufwand in lokalen und Unternehmensnetzwerken.`,logo:`https://technologie.deutschland-stack.gov.de/logos/e14790709b2b9424faf464e327769587e3b870830e820b5ae72b66202246bf71.png`,tags:[`adresse`,`netzwerk`],featured:!1},{id:`27`,name:`Elliptic Curve Integrated Encryption Scheme`,category:`betrieb`,description:`ECIES ist ein hybrides Verschlüsselungsverfahren unter Kombination von Diffie-Hellman und elliptischen Kurven.`,logo:`https://technologie.deutschland-stack.gov.de/logos/2864352165c46db240eb1d5346ae47817bf18f8957dc250b4d95b47e1de11c3b.png`,tags:[`schluessel`,`hybrid`,`verschluesselung`],featured:!1},{id:`28`,name:`Emissary Ingress`,category:`plattform`,description:`Ingress ist ein Open-Source-API-Gateway und Kubernetes-Ingress-Controller, der auf Envoy Proxy basiert und als zentraler Einstiegspunkt für den Datenverkehr zu Diensten in einem Kubernetes-Cluster fungiert. Er ermöglicht Entwicklern, den Datenverkehr zu ihren Anwendungen selbstständig über Kubernetes Custom Resource Definitions (CRDs) zu verwalten und bietet Funktionen wie Traffic-Management, Authentifizierung, Autorisierung, Rate Limiting und Observability.`,logo:`https://technologie.deutschland-stack.gov.de/logos/0fba33a527a475fed009b7d11ac9537c92db90c0328e758fa562d51ad0bf07d3.png`,tags:[`api`,`orchestrierung`,`gateway`],featured:!1},{id:`29`,name:`Envoy Proxy`,category:`plattform`,description:`Envoy Proxy ist ein Open-Source-Proxy für Microservices. Ursprünglich von Lyft entwickelt und jetzt ein Projekt der Cloud Native Computing Foundation (CNCF) dient Envoy als Edge-Proxy an der Netzwerkschnittstelle oder als Sidecar-Proxy für Anwendungen. Er bietet Funktionen wie Lastausgleich, Service-Discovery, dynamische Konfiguration, Resilienz (z. B. Timeouts, Wiederholungsversuche) und Beobachtbarkeit (Metriken).`,logo:`https://technologie.deutschland-stack.gov.de/logos/00849242bca56ef299785a3f342d2b12d63fa49e49b1b425dbfab848eacc9186.png`,tags:[`proxy`,`orchestrierung`],featured:!1},{id:`30`,name:`Ethernet`,category:`infrastruktur`,description:`Mit Ethernet können kabelgebunden in kleiner bis mittlerer Reichweite Endgeräte vernetzt werden. Die IEEE standardisiert die Technologie mit IEEE 802.3 ff. Die Konfiguration erfolgt zumeist automatisch über das Betriebssystem. Wi-Fi dient als Kennzeichen für zertifizierte Produkte zur Sicherstellung von Interoperabilität.`,logo:`https://technologie.deutschland-stack.gov.de/logos/b7413d6096d3061cc59513240582bdeb01c42e5bb8878cc4149b97279de89079.png`,tags:[`paket`,`kabelgebunden`,`rj`,`lan`,`frame`],featured:!1},{id:`31`,name:`Extensible Markup Language (XML)`,category:`plattform`,description:`XML ist ein Datenformat für den Datenaustausch.`,logo:`https://technologie.deutschland-stack.gov.de/logos/eabcf2149781ee22f8660a100cd8fbc7ac2602deedeb68d2d5fd9b702ef7d7fe.png`,tags:[`datenformat`],featured:!1},{id:`32`,name:`File Transfer Protocol über TLS (FTPS)`,category:`infrastruktur`,description:`FTPS dient der über TLS gesicherten Übertragung von Dateien. Es wurde entwickelt, um Dateien zuverlässig zu übertragen, Verzeichnisse zu verwalten (z.B. anlegen, löschen, navigieren) und den Zugriff auf entfernte Dateisysteme zu ermöglichen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/8b8bc38dbc3847590ad66d13a5cc04a6a9cd20ceedd20a13ef60bed6e2c00d44.png`,tags:[`datei`,`datenuebertragung`],featured:!1},{id:`33`,name:`Flutter`,category:`betrieb`,description:`Flutter ist ein Open-Source-UI-Toolkit zum Erstellen nativ kompilierter Anwendungen für Mobil-, Web-, Desktop- und eingebettete Geräte aus einer einzigen Codebasis.`,logo:`https://technologie.deutschland-stack.gov.de/logos/8ec3fa4f349b707baaff0744753dfb24a09e48ab56964d0693a2d7d777953365.png`,tags:[`user-interface`],featured:!1},{id:`34`,name:`flux`,category:`betrieb`,description:`Flux ist ein Werkzeug zur Synchronisation von Ressourcen (u.a. Git Repo) und einem Kubernetes Clusters.`,logo:`https://technologie.deutschland-stack.gov.de/logos/7ddd84bd3fc8909b0bf05d0db8c19f0452def918a0442d353959cd4777a7febf.png`,tags:[`pipeline`,`cd`,`bereitstellung`,`ci`],featured:!1},{id:`35`,name:`Gecko`,category:`zugang`,description:`Gecko ist eine Browser-Engine zum Rendern von Webseiten. Es wird insbesondere von Mozilla für Firefox genutzt.`,logo:`https://technologie.deutschland-stack.gov.de/logos/93622070fc4e2db7cf9331da78653110c5bd65f57128356007e140773ce10543.png`,tags:[`webseite`,`browser-engine`,`rendern`],featured:!1},{id:`36`,name:`general-purpose Remote Procedure Calls`,category:`plattform`,description:`gRPC ist ein leistungsstarkes, quelloffenes Framework, das effiziente Kommunikation zwischen verteilten Diensten ermöglicht. Es nutzt HTTP/2 und Protocol Buffers für schnelle, typsichere Datenübertragung und bietet Funktionen wie bidirektionales Streaming und Authentifizierung. Damit vereinfacht gRPC die Entwicklung von skalierbaren Microservices-Architekturen und verbessert im Vergleich zu REST die Leistung deutlich.`,logo:`https://technologie.deutschland-stack.gov.de/logos/b5a175ce10b22f1447e4ea9e5d3458abe2dd795c33a9de5941baf986ecef6a31.png`,tags:[`rpc`,`api`,`schnittstelle`],featured:!1},{id:`37`,name:`GitHub Actions`,category:`betrieb`,description:`GitHub Actions können Entwicklungsprozesse automatisieren und anpassen (CI/CD).`,logo:`https://technologie.deutschland-stack.gov.de/logos/e78e1b1907fd1c119d4a1bd5ec25f89ec82349d8feebf85d5d7ba44cbfbe26f8.png`,tags:[`pipeline`,`cd`,`bereitstellung`,`ci`],featured:!1},{id:`38`,name:`GitLab`,category:`betrieb`,description:`GitLab ist eine Plattform für den gesamten DevSecOps-Lebenszyklus. GitLab bietet Funktionen für Versionskontrolle (basierend auf Git), Projektplanung, Continuous Integration/Continuous Deployment (CI/CD), Code-Überprüfung, Sicherheitsscans und Fehlerverfolgung in einer einzigen Umgebung.`,logo:`https://technologie.deutschland-stack.gov.de/logos/615cdd4751ceb263d0d07548bb4b96929644313badfd633bfb886b992181be28.png`,tags:[`pipeline`,`cd`,`bereitstellung`,`ci`],featured:!1},{id:`39`,name:`Glasfaser`,category:`infrastruktur`,description:`Mit Glasfaser können Daten durch dünne Fasern in Lichtgeschwindigkeit übertragen werden. Im Kern werden Glasfaser für die Backbones genutzt aber zunehmend bis zum Endanschluss ausgebaut.`,logo:`https://technologie.deutschland-stack.gov.de/logos/8553c62f6cfa0c2eb48e1138d935c79ddd5d3c776969e3987eec488009888d33.png`,tags:[`gigabit`,`kabel`],featured:!1},{id:`40`,name:`Go`,category:`betrieb`,description:`Go ist eine Programmiersprache für Cloud- und Netzwerkanwendungen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/78d8d07ab99d2297de6120cace438d6bea607c896f7d3bdd1253c8457ca7e5b0.png`,tags:[`programmierung`,`sprache`],featured:!1},{id:`41`,name:`GraphQL`,category:`plattform`,description:`Ein Abfragesprache und Laufzeitumgebung, die es Clients ermöglicht, genau die Daten abzufragen, die sie benötigen. Sie bietet eine effiziente und flexible Alternative zu traditionellen APIs, indem sie es Clients ermöglicht, nur die exakt benötigten Daten mit einem einzigen Aufruf abzurufen. Ein zentrales Element ist das GraphQL-Schema, das die Datenstrukturen definiert, und der Client sendet eine Abfrage (Query), die durch das Schema validiert und von einem Resolver auf dem Server ausgeführt wird.`,logo:`https://technologie.deutschland-stack.gov.de/logos/16f47928b4c83e8eba68c89843fc190eb23b4ffd991aa0bca5086f47ee385964.png`,tags:[`abfrage`,`daten`,`schnittstelle`],featured:!1},{id:`42`,name:`Haystack`,category:`plattform`,description:`Haystack ist Framework für die Entwicklung von KI-Anwendungen. Das Framework ermöglicht es Entwicklern, produktionsreife Systeme für Aufgaben wie Retrieval-Augmented Generation (RAG), Dokumentensuche und Frage-Antwort-Systeme zu erstellen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/ee0c160c914ce32635f3f9738f06bbc399e9ffb98c1fba31869dffc8b8d1c564.png`,tags:[`orchestrierung`,`rag`,`verarbeitung`,`pipeline`],featured:!1},{id:`43`,name:`HBase`,category:`plattform`,description:`HBase ist eine spaltenorientierte NoSQL Datenbank. HBase ist Teil des Apache Hadoop-Ökosystems und basiert auf dem Bigtable-Modell.`,logo:`https://technologie.deutschland-stack.gov.de/logos/3167a07ca385dc19bf523670cbf724667ca1ae40b333644c29196bcc27192a46.png`,tags:[`nosql`,`datenbank`,`spalten`],featured:!1},{id:`44`,name:`HuggingFace Transformers`,category:`plattform`,description:`HuggingFace Transformers ist eine Open-Source-Bibliothek für state-of-the-art Machine Learning Modelle in Text-, Vision-, Audio- und multimodalen Anwendungen. Die Bibliothek fungiert als zentrales Model-Definition-Framework, das nahtlose Kompatibilität zwischen verschiedenen Deep Learning Frameworks wie PyTorch, TensorFlow und JAX bietet. Transformers demokratisiert den Zugang zu über 1 Million vortrainierten Modellen auf dem Hugging Face Hub und ermöglicht sowohl Inferenz als auch Training mit einer einheitlichen API.`,logo:`https://technologie.deutschland-stack.gov.de/logos/984b09a4e4537b7016105c5fe1ec4fc384c36a1a5f07b1fc6cb70dfcd06964be.png`,tags:[`deep-learning`,`dl`,`transformer`,`verarbeitung`],featured:!1},{id:`45`,name:`Hypertext Transfer Protocol (HTTP)`,category:`infrastruktur`,description:`HTTP wird verwendet um Ressoucen wie Webseiten, APIs, Formulare, Bilder oder Videos abzurufen und zu senden.`,logo:`https://technologie.deutschland-stack.gov.de/logos/611201c80cd0c9f6b1dc57035a6983f9bed5ceaef0460427cfa7776e82a52035.png`,tags:[`multiplexing`,`datenuebertragung`,`webseiten`,`internet`],featured:!1},{id:`46`,name:`Internal Gateway Protocols (IGP)`,category:`infrastruktur`,description:`IGP sind Routing-Protokolle, die für die automatische Weiterleitung von Datenpaketen innerhalb eines autonomen Systems verwendet werden. Sie ermöglichen es Routern, dynamisch die besten Pfade zu Zielnetzwerken zu ermitteln und sich automatisch an Netzwerkänderungen anzupassen. IGPs sind essentiell für die Funktionsfähigkeit moderner IP-Netzwerke in Unternehmen und Service-Provider-Umgebungen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/e0937879a6b5ad450ba20172c3041a59ab37b2d98a1e91b1aeaaad3a962edf4b.png`,tags:[`netzwerk`,`internet`],featured:!1},{id:`47`,name:`Internet Message Access Protocol Secure (IMAPS)`,category:`infrastruktur`,description:`IMAPS dient dem sicheren Zugriff auf E-Mails auf Mailservern. Die E-Mails verbleiben dabei auf dem Mailserver.`,logo:`https://technologie.deutschland-stack.gov.de/logos/1f4afc32e0b84f6b451588f2487892fbcb9405546cc5fb1b53cd07279f5606c2.png`,tags:[`dateiuebertragung`,`e-mail`],featured:!1},{id:`48`,name:`Internet Protocol Security (IPSec)`,category:`infrastruktur`,description:`IPSec ist eine Protokoll-Suite, die Sicherheitsdienste für IP-basierte Netzwerkkommunikation bereitstellt. Es bietet Authentifizierung, Integrität und Vertraulichkeit auf der Netzwerkebene (Layer 3) des OSI-Modells. IPSec wird hauptsächlich für VPN-Verbindungen, sichere Site-to-Site-Kommunikation und End-to-End-Verschlüsselung verwendet.`,logo:`https://technologie.deutschland-stack.gov.de/logos/112787bc179a95d5d564c4035d271e38d5cd72fe180b85d27c4b1c5d92dc1f29.png`,tags:[`ikev`,`netzwerk`,`sicherheit`],featured:!1},{id:`49`,name:`Internet Protocol Version 6 (IPv6)`,category:`infrastruktur`,description:`IPv6 dient der Adressierung in der Vermittlung. IP selbst stellt keine Verbindung her.`,logo:`https://technologie.deutschland-stack.gov.de/logos/21b7563f64f3a746941a5f0f290b7ccfe1021f0a9c3a7eb737bc7d5a10daaae0.png`,tags:[`adresse`,`internet`],featured:!1},{id:`50`,name:`iOS`,category:`zugang`,description:`iOS ist das Betriebssystem für die Arbeit auf mobilen Endgeräten von Apple.`,logo:`https://technologie.deutschland-stack.gov.de/logos/60e901cf053f3de76cfd0e1a7f11596f7bab54a90c6bbb5eeadcaef6ba7490b6.png`,tags:[`mobil`,`app`,`betriebssystem`],featured:!1},{id:`51`,name:`Istio`,category:`plattform`,description:`Istio ist ein Open-Source Service Mesh zum Management von Microservices in containerisierten Umgebungen. Es erleichtert das Sichern, Verbinden und Überwachen verteilter Anwendungen, indem es Funktionen wie Lastenausgleich, Authentifizierung, Autorisierung, Traffic-Steuerung und detaillierte Einblicke in die Kommunikation zwischen Diensten bereitstellt.`,logo:`https://technologie.deutschland-stack.gov.de/logos/8d4edce443982d1106e7bf8a7c318d6d50061df4a8f3d8fc23fd7591965ac46d.png`,tags:[`load-balancer`,`orchestrierung`,`mesh`],featured:!1},{id:`52`,name:`Java`,category:`betrieb`,description:`Java dient der plattformunabhängige Softwareentwicklung . Der Quellcode wird kompiliert und als Ergebnis im Java Runtime Environment ausgeführt.`,logo:`https://technologie.deutschland-stack.gov.de/logos/955f02853e361d760d410f458b58de598e846c50d2b8feb1414761a4c4694450.png`,tags:[`programmierung`,`plattformunabhaengig`,`sprache`],featured:!1},{id:`53`,name:`JavaScript (ECMA Script)`,category:`betrieb`,description:`JavaScript wird primär für die Entwicklung von dynamischen Webseiten verwendet.`,logo:`https://technologie.deutschland-stack.gov.de/logos/d7a2fee88f5057b0016c7345031dc11990438b85c3621a573514674f969804a3.png`,tags:[`programmierung`,`sprache`],featured:!1},{id:`54`,name:`JavaScript Object Notation (JSON)`,category:`plattform`,description:`JSON ist ein Datenformat für den Datenaustausch.`,logo:`https://technologie.deutschland-stack.gov.de/logos/772d7e60113d7c7c3fdcf90a934414aa19d9301626a1bf006c853ea5d9d00331.png`,tags:[`datenformat`],featured:!1},{id:`55`,name:`Jenkins`,category:`betrieb`,description:`Jenkins ist ein Open-Source-Automatisierungsserver, der für die kontinuierliche Integration (CI) und kontinuierliche Bereitstellung (CD) von Software verwendet wird.`,logo:`https://technologie.deutschland-stack.gov.de/logos/ad42a5ae87c4d44d0fb91fd20e690b9473d5e8461c9b65e8c6127d9ec64a9f68.png`,tags:[`pipeline`,`cd`,`bereitstellung`,`ci`],featured:!1},{id:`56`,name:`Joget`,category:`plattform`,description:`Joget beschleunigt die Entwicklung und Automatisierung von Enterprise-Anwendungen mit visuellem Builder, Governance-Funktionen und neuen AI-Fähigkeiten in DX 9.`,logo:`https://technologie.deutschland-stack.gov.de/logos/1e737a952dc5c6640b4194e76e59c6e6ea5263ccf331f98b574bdfd56d6e854f.png`,tags:[`plugins`,`no-code-low-code`,`ai`,`workflow`,`java`],featured:!1},{id:`57`,name:`JSON Web Tokens (JWT)`,category:`infrastruktur`,description:`Ermöglicht sichere Übertragung von strukturierten Informationen zwischen Parteien als selbstverifizierende JSON-Objekte. Fungiert als kompakter, URL-sicherer Token-Standard für Authentifizierung, Autorisierung und sichere Datenübertragung ohne zentrale Session-Speicherung.`,logo:`https://technologie.deutschland-stack.gov.de/logos/4fbe038b25e4711e828d29229f2e5a06f44212da7d3d009be2c8b962f1faaf9b.png`,tags:[`authentifizierungm-autorisierung`,`token`,`json`],featured:!1},{id:`58`,name:`Kerberos`,category:`betrieb`,description:`Ermöglicht sichere Netzwerk-Authentifizierung durch ein Ticket-basiertes System ohne Übertragung von Passwörtern über das Netzwerk. Fungiert als vertrauenswürdiger Drittanbieter (Key Distribution Center) für Single Sign-On in Enterprise-Umgebungen und stellt mutual Authentication zwischen Clients und Services sicher.`,logo:`https://technologie.deutschland-stack.gov.de/logos/869ba582387efe083c633d3d80a12f6ac333cd4d2d9bf43dd3eb20c6393325f4.png`,tags:[`authentifizierung`,`token`,`zugriff`,`autorisierung`],featured:!1},{id:`59`,name:`Kong`,category:`plattform`,description:`Kong ist eine API-Management-Plattform für Microservices und Zugriffe auf Backend-Services. Es fungiert als Middleware. Kong ist eine Open-Source-Lösung, die auf NGINX basiert und für ihre Skalierbarkeit und Sicherheit bekannt ist.`,logo:`https://technologie.deutschland-stack.gov.de/logos/0793165090b5056fde53439ba2b5904acce4d983d942fe81e18460a889e319ac.png`,tags:[`gateway`,`orchestrierung`,`schnittstelle`],featured:!1},{id:`60`,name:`Kubernetes`,category:`plattform`,description:`Kubernetes ist eine Open-Source-Plattform zur Automatisierung der Bereitstellung, Skalierung und Verwaltung containerisierter Anwendungen. Das System orchestriert Container-Workloads über Cluster von Maschinen hinweg und bietet dabei umfangreiche APIs für Netzwerk-, Speicher- und Runtime-Integrationen. Kubernetes ist zum de-facto Standard für Container-Orchestrierung geworden und bildet das Fundament moderner Cloud-Native-Architekturen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/cac21696cfdb6ee4a0b97ab3d0c1bc1a6ce9dc0e3389a45b6b5ffb720d667890.png`,tags:[`orchestrierung`,`container`],featured:!1},{id:`61`,name:`LangGraph`,category:`plattform`,description:`LangGraph ist ein low-level Orchestrierungs-Framework für den Aufbau, die Verwaltung und das Deployment von langlebigen, zustandsbehafteten AI-Agenten und Multi-Agent-Workflows. Das Framework nutzt eine graph-basierte Architektur zur Modellierung komplexer Agent-Interaktionen, wobei Knoten (Nodes) die Agent-Logik enthalten und Kanten (Edges) den Kontrollfluss zwischen ihnen definieren. LangGraph ermöglicht sowohl vordefinierte Workflows als auch dynamische Agenten-Systeme mit Human-in-the-Loop-Funktionalitäten.`,logo:`https://technologie.deutschland-stack.gov.de/logos/187304c9cc751996412a38051e565018e6dde23d78b0af5c4be6b39209713e24.png`,tags:[`ki`,`agent`],featured:!1},{id:`62`,name:`MariaDB`,category:`plattform`,description:`MariaDB ist ein relationales Datenbankmanagementsystem für die Organisation von strukturierten Daten in Tabellen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/f91da27840d04f3c6edeacea21ced3de972926c71ff3c47893fc2e08793c3f0b.png`,tags:[`datenbank`,`sql`,`relational`],featured:!1},{id:`63`,name:`Markdown (MD)`,category:`plattform`,description:`MD ist ein Datenformat für den Datenaustausch.`,logo:`https://technologie.deutschland-stack.gov.de/logos/9337bc614dcd0a676ced7cd0920a1018383d8cf9aa42a3d9e72e840ea541ca13.png`,tags:[`datenformat`],featured:!1},{id:`64`,name:`Media Access Control (MAC)`,category:`infrastruktur`,description:`MAC ist eine Unterschicht der Sicherungsschicht (Layer 2) im OSI-Modell, die den Zugriff auf das Übertragungsmedium in Netzwerken regelt. MAC-Protokolle koordinieren, wie mehrere Geräte gemeinsam auf ein geteiltes Kommunikationsmedium zugreifen können, ohne sich gegenseitig zu stören. Jedes Netzwerkgerät erhält eine eindeutige MAC-Adresse zur Identifikation im lokalen Netzwerksegment.`,logo:`https://technologie.deutschland-stack.gov.de/logos/72783e60cc7c2a13d10f9641b0fd71c418a0da3ed4cc7a2b8b2776cd0e3bdc0f.png`,tags:[`identifier`,`uuid`,`adresse`,`guid`,`oui`],featured:!1},{id:`65`,name:`Messaging Layer Security (MLS)`,category:`infrastruktur`,description:`MLS dient der Ende-zu-Ende-Verschlüsselung von Nachrichten in kleinen und großen Gruppen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/fb9d69c166a7fc2fe3b922d86529fc6083df76988c1cf13a29f3c7119c87f43e.png`,tags:[`sicherheit`,`kurznachricht`,`datenuebertragung`],featured:!1},{id:`66`,name:`Milvus`,category:`plattform`,description:`Milvus ist eine Vektor-Datenbank.`,logo:`https://technologie.deutschland-stack.gov.de/logos/bd8ea4b17eef285945757be4dc88672ba88d92c7e1ce9f1294c9fd625f06c3ca.png`,tags:[`datenbank`,`vektor`],featured:!1},{id:`67`,name:`MLflow`,category:`plattform`,description:`MLflow ist eine Open-Source-Plattform für das Management des gesamten Machine Learning-Lifecycles, die von Databricks entwickelt wurde und Experiment-Tracking, Modellverpackung, Deployment und eine zentrale Modellregistrierung vereint. Die Plattform ermöglicht es Data Scientists und ML-Engineers, Experimente zu verfolgen, Parameter und Metriken zu protokollieren, Modelle zu versionieren und sie konsistent über verschiedene Umgebungen hinweg zu deployen. MLflow unterstützt alle gängigen ML-Frameworks und Sprachen (Python, R, Java) sowie GenAI-Anwendungen mit LLM-Tracing und Prompt-Management.`,logo:`https://technologie.deutschland-stack.gov.de/logos/0b623c47e9b524a99aa71764acb8afa9786acee9f662655974d95e64fb2df6a6.png`,tags:[`machine-learning`,`verarbeitung`],featured:!1},{id:`68`,name:`Mobilfunk`,category:`infrastruktur`,description:`Der Mobilfunk wird zum Vernetzen von Mobilfunkgeräte (Smartphones) genutzt und erfolgt über die Verbindung zu Basisstationen zwecks weiterer Verteilung. Die Verbindung zum Netzwerk-Betreiber erfolgt über das Subscriber Identity Module (SIM).`,logo:`https://technologie.deutschland-stack.gov.de/logos/cbfb6ebae1d407076fba1a87a9df7982a3153736bd34c841674408cd828e7f01.png`,tags:[`lte`,`funk`,`zelle`,`drahtlos`],featured:!1},{id:`69`,name:`Model Context Protocol (MCP)`,category:`plattform`,description:`MCP ist ein offenes Protokoll, welches standardisiert wie Anwendungen Kontextinformationen an große Sprachmodelle liefert. MCP liefert einen standardisierten Weg um KI Modelle mit verschiedenen Datenquellen und -werkzeugen zu verbinden. MCP ermöglicht Agenten und komplexe Workflows auf Basis von großen Sprachmodellen zu bauen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/485178e9ce224282d4c49955f5e21511324a41bca45e652b0f6854f473d6e02d.png`,tags:[`agent`,`agentische-ki`,`kontext`],featured:!1},{id:`70`,name:`Module Lattice Based Key Encapsulation Mechanism`,category:`betrieb`,description:`ML-KEM unterstützt bei der Generierung eines Schlüssels für symmetrische Verschlüsselungsverfahren. ML-KEM ist ein Post-Quanten-Algorithmus.`,logo:`https://technologie.deutschland-stack.gov.de/logos/6319704d8728301e2d2688e9496132ecafe49b4dea802765685fcffcb6f8f473.png`,tags:[`schluessel`,`kryptografie`,`post-quanten-kryptografie`,`verschluesselung`],featured:!1},{id:`71`,name:`MongoDB`,category:`plattform`,description:`MongoDB ist eine dokumentenorientierte NoSQL-Datenbank.`,logo:`https://technologie.deutschland-stack.gov.de/logos/61256643011afe1f74a80eb5af91204826a4f48ff076403b49e02eb9c63ad09d.png`,tags:[`nosql`,`datenbank`,`dokumentenbasiert`],featured:!1},{id:`72`,name:`Multiprotocol Label Switching (MPLS)`,category:`infrastruktur`,description:`MPLS dient der Übertragung von Datenpaketen in einem verbindungslosen Netz. Das Verfahren zur Verteilung wird in großen Netzwerken eingesetzt.`,logo:`https://technologie.deutschland-stack.gov.de/logos/74f7fa4c7fe4c4340988d4837942239338e16c5370099beac695f498e74d1842.png`,tags:[`netzwerk`,`weitverkehr`],featured:!1},{id:`73`,name:`MySQL Server`,category:`plattform`,description:`MySQL ist ein relationales Datenbankmanagementsystem für die Organisation von strukturierten Daten in Tabellen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/3ba183cf158b0298fe5202018c00250c23e2ce24ad4b03ddf958be6cb3039a17.png`,tags:[`datenbank`,`sql`,`relational`],featured:!1},{id:`74`,name:`n8n`,category:`plattform`,description:`n8n ist eine flexible Automatisierungsplattform mit 400+ Integrationen, die visuelles Bauen und Code kombiniert und Self-Hosting erlaubt.`,logo:`https://technologie.deutschland-stack.gov.de/logos/90771d2503e8ec4bce4adf0ddb6d78f3671fd073eb14f010c0f51afc9b33dfa5.png`,tags:[`automatisierung`,`open-source`,`no-code`,`api`,`integration`],featured:!1},{id:`75`,name:`Neo4J`,category:`plattform`,description:`Neo4j ist eine Graphdatenbank.`,logo:`https://technologie.deutschland-stack.gov.de/logos/c191f9b433f69436c36f612fb1075e7373b8e142942e0fb28f19bff8a916171e.png`,tags:[`nosql`,`datenbank`,`graph`],featured:!1},{id:`76`,name:`NextJS`,category:`betrieb`,description:`Next.js ist ein React-Framework zum Erstellen von Full-Stack-Webanwendungen. Sie verwenden React-Komponenten zum Erstellen von Benutzeroberflächen und Next.js für zusätzliche Funktionen und Optimierungen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/d4024e597420561a80d6316bf3b671ef9ce2507e82dc03f2c711f229c9a56a46.png`,tags:[`rendering`,`user-interface`],featured:!1},{id:`77`,name:`NGINX`,category:`plattform`,description:`NGINX ein Open-Source-Webserver der auch als Reverse-Proxy, HTTP-Cache und Load-Balancer eingesetzt wird. Er ist bekannt für seine hohe Leistung bei der Verarbeitung vieler gleichzeitiger Anfragen, seine Effizienz bei geringer Speichernutzung und seine Flexibilität.`,logo:`https://technologie.deutschland-stack.gov.de/logos/fc8806d3a905809cc6effb15b44c8d8788e94c2ec8f02ffd36064bf3f6226752.png`,tags:[`proxy`,`load-balancer`,`gateway`,`orchestrierung`],featured:!1},{id:`78`,name:`Node-RED`,category:`plattform`,description:`Node-RED ist eine Open-Source-Software, die es ermöglicht, visuell Programmierflüsse zu erstellen. Diese Software wird häufig im Bereich der Internet der Dinge (IoT) und zur Automatisierung von Prozessen eingesetzt.`,logo:`https://technologie.deutschland-stack.gov.de/logos/ac1bd92a02f0923ab8ae2b0fd3a342e47a721feb504e632c7ea7242d091a7de8.png`,tags:[`no-code`,`javascript`,`low-code`],featured:!1},{id:`79`,name:`Nomad`,category:`plattform`,description:`Nomad ist ein Open-Source-System zur Orchestrierung von Anwendungen und deren Workloads auf hybriden Umgebungen. Es ist eine flexible Lösung, die für ihre Einfachheit und Benutzerfreundlichkeit bekannt ist, da sie eine einzelne Binärdatei zur Installation und Konfiguration bietet.`,logo:`https://technologie.deutschland-stack.gov.de/logos/b5372a728d6415b3b874b1bebcbb8049c240e1c47cfeecf22800f9e5f0e3ed9d.png`,tags:[`orchestrierung`,`container`],featured:!1},{id:`80`,name:`NQdrant`,category:`plattform`,description:`Qdrant ist eine container-basierte Vektor-Datenbank mit integrierter Ähnlichkeitssuche.`,logo:`https://technologie.deutschland-stack.gov.de/logos/c9a47c4d0d5d2a0895b74de7892f9f2821a85e556f17427e539be17c2df85cba.png`,tags:[`datenbank`,`container`,`vektor`],featured:!1},{id:`81`,name:`One-Time Password (OTP)`,category:`betrieb`,description:`OTP liefert ein temporäres automatisch generiertes Passwort zur Identifikation eines Nutzer für eine einzelne Transaktion oder Sitzung. Das temporäre Passwort kann über verschiedenen Kanäle ausgebracht werden (SMS, App, Mail).`,logo:`https://technologie.deutschland-stack.gov.de/logos/fcf785b27fa6f780b9c310f925aa0a0339cd046fd5a56946fcaa1b4c22f8cc4d.png`,tags:[`mfa`,`fa`,`multi-faktor`,`passwort`,`zugriff`],featured:!1},{id:`82`,name:`Open Archives Initiative Protocol for Metadata Harvesting`,category:`plattform`,description:`OAI-PMH ist ein leichtgewichtiges Protokoll für Metadaten.`,logo:`https://technologie.deutschland-stack.gov.de/logos/69c4c9294115b38af57a5062c178fe8a57bd2ed109bd909e38a43a7d8a469701.png`,tags:[`datenkatalog`,`metadaten`],featured:!1},{id:`83`,name:`Open Authorization (OAuth)`,category:`betrieb`,description:`Ermöglicht sichere Autorisierung und delegierten Zugriff auf Ressourcen ohne Preisgabe von Benutzeranmeldedaten. Fungiert als standardisiertes Framework für die Berechtigung von Drittanbieter-Anwendungen zum Zugriff auf geschützte APIs und Benutzerdaten.`,logo:`https://technologie.deutschland-stack.gov.de/logos/456a0e2d7dce027258e96e7e7569e09737e38ecdf13bb4b4ed5d5251fc375430.png`,tags:[`protokoll`,`zugriff`,`autorisierung`],featured:!1},{id:`84`,name:`Open ID Connect (OIDC)`,category:`betrieb`,description:`OIDC erweitert OAuth 2.0 um standardisierte Authentifizierung und Identitätsverwaltung durch ID Tokens, ermöglicht einheitliche Benutzeranmeldung über verschiedene Anwendungen hinweg und stellt strukturierte Identitätsinformationen in einem interoperablen Format bereit.`,logo:`https://technologie.deutschland-stack.gov.de/logos/075ec15d5eb524650a5b0cde0219729da0fefa27f6b66f107df935a646cace03.png`,tags:[`authentifizierung`,`protokoll`,`zugriff`],featured:!1},{id:`85`,name:`Open Internet Exchange Point (IXP OIX-1)`,category:`infrastruktur`,description:`IXP OIX-1 ist eine Zertifizierung für Internet-Knotenpunkte (IXPs) für die Sicherstellung verschiedener Standards zu Leistungsfähigkeit, Verfügbarkeit, Ausfallsicherheit und Datensicherheit. Ein IXP verbindet Internetdienstanbieter (ISPs) und Content-Netzwerke (CDNs) um den Datenverkehr zu optimieren.`,logo:`https://technologie.deutschland-stack.gov.de/logos/9e0b5cc1273842618ccafdedb54a52ba291dad51d8f38805602847d6eab1bace.png`,tags:[`netz`,`netzwerk`,`internet-exchange-point`,`ixp`],featured:!1},{id:`86`,name:`Open Neural Network Exchange`,category:`plattform`,description:`ONNX ist ein offener Standard zur Darstellung von Machine Learning-Modellen, der die Interoperabilität zwischen verschiedenen AI-Frameworks ermöglicht. Der Standard definiert ein erweiterbares Berechnungsmodell sowie Standard-Datentypen und Operatoren, wodurch Modelle zwischen Frameworks wie PyTorch, TensorFlow, scikit-learn und anderen portiert werden können. ONNX fungiert als universelle "Sprache" für neuronale Netzwerke und eliminiert die Notwendigkeit komplexer Konvertierungs-Pipelines zwischen verschiedenen ML-Ökosystemen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/7e5a308c1b464d60c4869afeb64482b09eda8a5d6e1ee429bc2c915d56ed5174.png`,tags:[`machine-learning`,`neuronale-netze`,`verarbeitung`,`ml`],featured:!1},{id:`87`,name:`Open Shortest Path First (OSPF)`,category:`infrastruktur`,description:`OSPF ist ein Link-State-Routing-Protokoll, das in IP-Netzwerken zur automatischen Berechnung der optimalen Routen zwischen Netzwerkknoten verwendet wird. Es ermöglicht Routern, dynamisch die kürzesten Pfade durch ein Netzwerk zu finden und sich automatisch an Netzwerkänderungen anzupassen. OSPF arbeitet hierarchisch mit Areas und eignet sich besonders für große Unternehmensnetzwerke.`,logo:`https://technologie.deutschland-stack.gov.de/logos/9c179e212c97be975203a6140d863bc9ed0181f4267f77e6f1ea6afe160c68c1.png`,tags:[`netzwerk`,`routing`],featured:!1},{id:`88`,name:`OpenAPI`,category:`plattform`,description:`OpenAPI ist eine herstellerunabhängige Spezifikation zur Beschreibung von RESTful APIs. Sie ermöglicht eine standardisierte, maschinen- und menschenlesbare Beschreibung von Schnittstellen (inklusive Endpunkte, Operationen, Datenstrukturen). Die Spezifikation entstand aus dem früheren Projekt Swagger und wird heute unter der Schirmherrschaft der OpenAPI-Initiative weiterentwickelt.`,logo:`https://technologie.deutschland-stack.gov.de/logos/7499be3161fbfa2b9638a39719d23554cb342fb747bb1d793a44c354e948b284.png`,tags:[`rest`,`api`,`schnittstelle`,`rpc`],featured:!1},{id:`89`,name:`OpenKruise`,category:`betrieb`,description:`OpenKruise ist eine Open-Source-Anwendungssuite, die Kubernetes um Funktionen für das Management von großen Anwendungen erweitert. Als ein Projekt der Cloud Native Computing Foundation (CNCF) bietet OpenKruise Funktionen für die Automatisierung von Deployment, Upgrades und Betrieb von Anwendungen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/0aa71c298993f8659e9012db27251e40f6cbdbb37bc80427cda14e0a562d7730.png`,tags:[`pipeline`,`cd`,`bereitstellung`,`ci`],featured:!1},{id:`90`,name:`OpenShift Origin (OKD)`,category:`plattform`,description:`OpenShift ist eine Kubernetes-basierte Plattform von Red Hat für die Entwicklung und Bereitstellung von Cloud-nativen Anwendungen, die eine einheitliche Basis für Hybrid-Cloud-, Multi-Cloud- und Edge-Umgebungen bietet und den gesamten Lebenszyklus von Anwendunen unterstützt. OKD ist die Community Version von OpenShift welche 2018 abgeleitet wurde.`,logo:`https://technologie.deutschland-stack.gov.de/logos/f95312954bba333ed4f44897574a3bfbf25abd1ac4e080b2e8fbda6ed103a46b.png`,tags:[`orchestrierung`,`container`],featured:!1},{id:`91`,name:`PHP`,category:`betrieb`,description:`PHP dient der serverseitigen Entwicklung von dynamischen Webseiten und Anwendungen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/c6dd72a5e8197755964f5fdec7b7ac5354962772379a5a9cb0bf0e16bb2c7006.png`,tags:[`programmierung`,`sprache`],featured:!1},{id:`92`,name:`Piveau`,category:`plattform`,description:`Piveau ist ein Datenmanagement Werkzeug für die Verarbeitungskette von der Erfassung, Aggregation, Bereitstellung bis zur Nutzung der Daten.`,logo:`https://technologie.deutschland-stack.gov.de/logos/3a6d1663ff587d9b0482d9410793ec2851c1098ff19f4157ef937a9a14c81065.png`,tags:[`aggregation`,`datennutzung`,`bereitstellung`,`erfassung`,`datenkonvertierung`],featured:!1},{id:`93`,name:`Portainer`,category:`plattform`,description:`Portainer ist eine benutzerfreundliche, webbasierte Management-Plattform für Container, die es ermöglicht, Docker- und Kubernetes-Umgebungen mit einer einfachen Oberfläche zu verwalten und zu überwachen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/26a4cb97f4060f6efc84f4660edf8e33c51c2b7889d2d7299ee90144aeb83803.png`,tags:[`orchestrierung`],featured:!1},{id:`94`,name:`PostgreSQL`,category:`plattform`,description:`PostgreSQL ist ein objektrelationales Datenbankmanagementsystem (ORDBMS), das für seine Einhaltung von SQL-Standards, seine Erweiterbarkeit und seine Zuverlässigkeit bekannt ist. Es wird häufig in Anwendungen eingesetzt, die komplexe Transaktionen und große Datenmengen verarbeiten.`,logo:`https://technologie.deutschland-stack.gov.de/logos/ff92fb5d12a7fa6b23c2eb403d2edf4fbc58ced802021e1f02c3583cb70957be.png`,tags:[`open-source`,`datenbank`,`sql`,`relational`],featured:!1},{id:`95`,name:`PromptFlow`,category:`plattform`,description:`PromptFlow ist ein Framework von Entwicklungswerkzeugen für KI-Anwendungen von der Ideenfindung bis zum Monitoring.`,logo:`https://technologie.deutschland-stack.gov.de/logos/f8956132eb8e50d506a860e14507134bf0756ef8d1b1f1196f7f5e929160ef36.png`,tags:[`entwicklung`,`verarbeitung`],featured:!1},{id:`96`,name:`Pyro`,category:`plattform`,description:`Pyro ist eine universelle probabilistische Programmiersprache (PPL) basierend auf PyTorch, die tiefes probabilistisches Modellieren für AI-Forschung ermöglicht. Sie vereint moderne Deep Learning-Ansätze mit Bayesianischer Modellierung und bietet flexible, skalierbare Inferenzalgorithmen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/edeafd8654186b9a6f1a34f8ad10c8a5d085908a2be4a8e1312a75d4c40dfc43.png`,tags:[`deep-learning`,`verarbeitung`,`probabilistische-programmierung`,`ppl`],featured:!1},{id:`97`,name:`Python`,category:`betrieb`,description:`Python ist eine Programmiersprache zur Webentwicklung und für Prototyping.`,logo:`https://technologie.deutschland-stack.gov.de/logos/e5eff4271fad17114293879fcf7dd553cde92476d052a5ac9d6faec1e4799e9f.png`,tags:[`programmierung`,`sprache`],featured:!1},{id:`98`,name:`PyTorch`,category:`plattform`,description:`PyTorch ist eine Bibliothek für maschinelles Lernen, Deep Learning und Natural Language Processing.`,logo:`https://technologie.deutschland-stack.gov.de/logos/f818a73508cc776103a0562ecf5a16138cadb5c76843d33ebca4b37900554318.png`,tags:[`deep-learning`,`neuronale-netze`,`verarbeitung`,`nlp`,`machine-learning`],featured:!1},{id:`99`,name:`Quick UDP Internet Connections (QUIC)`,category:`infrastruktur`,description:`QUIC ist ein verbindungsorientiertes, performantes und verschlüsseltes Protokoll für die Datenübertragung.`,logo:`https://technologie.deutschland-stack.gov.de/logos/846035de70224ae0c990ceeaf0b03779d6ba37ebf382395ad54fe6518cfd5b02.png`,tags:[`sicherheit`,`datenuebertragung`],featured:!1},{id:`100`,name:`R`,category:`betrieb`,description:`R ist eine Programmiersprache Analyse, Bereinigung, Modellierung und Visualisierung von Daten.`,logo:`https://technologie.deutschland-stack.gov.de/logos/78b4fc7952f18bcdd48077dd52bb7eb5aa07141828ec743b9528445c47771582.png`,tags:[`programmierung`,`sprache`],featured:!1},{id:`101`,name:`RAGFlow`,category:`plattform`,description:`RAGFlow wird als Engine für Retrieval-Augmented Generation (RAG) eingesetzt um Ergebnisse anhand von Kontext zu verbessern beziehungsweise die Wissensbasis zu erweitern.`,logo:`https://technologie.deutschland-stack.gov.de/logos/9bffc55ba871d69df376f299767c3c3734cef17c05da8c339a8a9de3868d9aad.png`,tags:[`retrieval-augmented-generation`,`rag`,`verarbeitung`],featured:!1},{id:`102`,name:`Rancher`,category:`plattform`,description:`Rancher ist eine Open-Source-Plattform zur Verwaltung und Bereitstellung mehrerer Kubernetes-Cluster und Container-Anwendungen. Es bietet eine einfache Benutzeroberfläche.`,logo:`https://technologie.deutschland-stack.gov.de/logos/386d8e1beb984d1ad08e06750aad0fb93fba7865f8fb6a96fdc7af89267b76d9.png`,tags:[`orchestrierung`,`container`],featured:!1},{id:`103`,name:`React`,category:`betrieb`,description:`Mit React können Sie Benutzeroberflächen aus einzelnen Teilen, sogenannten Komponenten, erstellen. Kombinieren Sie diese dann zu ganzen Webseiten und Apps.`,logo:`https://technologie.deutschland-stack.gov.de/logos/941d83aa71a303c0de8487467ed2a01473fc6c50103e8004f2ebfbb8c90c33d8.png`,tags:[`webdesign`,`components`,`user-interface`],featured:!1},{id:`104`,name:`Representational State Transfer`,category:`plattform`,description:`REST ist ein Architekturstil für verteilte Systeme, der 2000 von Roy Fielding definiert wurde. REST basiert auf den etablierten Web-Standards HTTP, URI und JSON und ermöglicht eine einfache, skalierbare Kommunikation zwischen verschiedenen Systemen über das Internet. REST Schnittstellen folgen einem ressourcenorientierten Ansatz mit einheitlichen Schnittstellen und sind zustandslos konzipiert.`,logo:`https://technologie.deutschland-stack.gov.de/logos/8fefa273a8833cc0268ea8fbef1e655de183dd376fed3452e114d3809df27d61.png`,tags:[`schnittstelle`],featured:!1},{id:`105`,name:`Resource Description Framework (RDF)`,category:`plattform`,description:`RDF ist ein Datenformat für den Datenaustausch.`,logo:`https://technologie.deutschland-stack.gov.de/logos/fe0c91c346fd5059386ac912370d136192cf008de8a0c9ca6ed620c79c4b392a.png`,tags:[`datenformat`],featured:!1},{id:`106`,name:`Rivest–Shamir–Adleman`,category:`betrieb`,description:`RSA ist ein asymmetrisches kryptographisches Verfahren für das Verschlüsseln und Signieren auf Basis des Faktorisierungsproblems. Es wird eine Schlüssellänge von mindestens 3000 empfohlen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/239a2e2e2fe32f2a798dbca63e97dc6873c578aea06b0d90aa3b0942d1a921c3.png`,tags:[`asymmetrisch`,`pki`,`schluessel`,`kryptografie`,`algorithmus`,`verschluesselung`],featured:!1},{id:`107`,name:`Robot Framework`,category:`plattform`,description:`Robot Framework ist ein Framework für Automatisierung von Tests und im Rahmen von Robot Process Automation. Genutzt wird eine prozedurale Skriptsprache.`,logo:`https://technologie.deutschland-stack.gov.de/logos/67cfd8fcf111af4639bb16534adc104bfe555fcfbe17601e0dd32961d1b92bb6.png`,tags:[`robot-process-automation`,`verarbeitung`,`rpa`],featured:!1},{id:`108`,name:`Rust`,category:`betrieb`,description:`Rust ist eine systemnahe Programmiersprache. Rust arbeitet mit Typen statt einer Garbage Collection um Speichermanagement zu verbessern.`,logo:`https://technologie.deutschland-stack.gov.de/logos/83c38ca14d64d7d92b925998e6fd9f66abb07767239dfe9fdc6a178e796b9ae6.png`,tags:[`programmierung`,`sprache`],featured:!1},{id:`109`,name:`Scylla`,category:`plattform`,description:`Scylla ist eine spaltenorientierte NoSQL Datenbank.`,logo:`https://technologie.deutschland-stack.gov.de/logos/ee7229c440098c50604965796c9dfaa2bbfd5e237ccb007bc24962185bd21736.png`,tags:[`nosql`,`datenbank`,`spalten`],featured:!1},{id:`110`,name:`SD-WAN Service Attributes and Service Framework (MEF)`,category:`infrastruktur`,description:`MEF definiert SD-WAN Services und Attribute. SD-WAN ist eine Technologie zur Verbindung weit entfernter Netzwerksegemente über verschiedene Anschlusstypen/ Medien.`,logo:`https://technologie.deutschland-stack.gov.de/logos/f7a16e544d053e463d16904b12334512e86b014f7d45b62cbff1156e42ed4d98.png`,tags:[`netz`,`sd-wan`,`netzwerk`,`wide-area`,`wan`],featured:!1},{id:`111`,name:`Secure Hash Algorithm`,category:`betrieb`,description:`SHA wandelt Daten in einen eindeutigen Prüfwert um. Der Prüfwert kann zu Sicherstellung der Integrität genutzt werden (digitaler Fingerabdruck).`,logo:`https://technologie.deutschland-stack.gov.de/logos/e694fd382ec52076c56eef157bfe3e361b202a1839f3d2d4a056abe2b2f6a8de.png`,tags:[`schluessel`,`integritaet`,`manipulation`,`pruefwert`],featured:!1},{id:`112`,name:`Segment Routing (SR)`,category:`infrastruktur`,description:`Segment Routing ist eine Technologie zur Vereinfachung des Routens von Daten. Zur Optimierung werden Pfadinformationen im Header gespeichert.`,logo:`https://technologie.deutschland-stack.gov.de/logos/571057fb368f948ffc5295f16685177cbd8148557d33bcf24628cac426f848f0.png`,tags:[`netz`,`netzwerk`,`segment`,`routing`],featured:!1},{id:`113`,name:`Selenium`,category:`betrieb`,description:`Selenium ist ein Open‑Source‑Projekt, das Entwicklern und Testern ermöglicht, Web‑Browser automatisch zu steuern. Mit Selenium können wiederkehrende Aufgaben – etwa das Öffnen einer Webseite, das Ausfüllen von Formularen, das Klicken auf Buttons oder das Prüfen von Inhalten – programmgesteuert durchgeführt werden. Der Hauptzweck liegt darin, funktionale Tests von Web‑Anwendungen zu automatisieren, sodass die Qualität der Software zuverlässig und effizient überprüft werden kann, ohne dass jede Testschritt manuell ausgeführt werden muss. Durch die Unterstützung verschiedener Browser (wie Chrome, Firefox, Edge und Safari) und Programmiersprachen (z. B. Java, Python, C#) lässt sich Selenium flexibel in bestehende Entwicklungs‑ und Continuous‑Integration‑Umgebungen integrieren.`,logo:`https://technologie.deutschland-stack.gov.de/logos/a7407278612de9b8fb2a26037213908c8ebb54c4d6d95e8a0f34045088b0ebcf.png`,tags:[`automation`,`testing`,`user-interface`],featured:!1},{id:`114`,name:`Session Initiation Protocol (SIP)`,category:`infrastruktur`,description:`SIP ist ein Netzprotokoll zur Etablierung und Steuerung von Kommunikationssitzungen mit mehreren Teilnehmenden. SIP ist Grundlage für IP-Telefonie (Voice over IP).`,logo:`https://technologie.deutschland-stack.gov.de/logos/2b4c30fd71bf366a8b6badbdc405483d0a5c8d1d7fc596d68e62418d415f748d.png`,tags:[`telefonie`,`kommunikation`],featured:!1},{id:`115`,name:`Simple Mail Transfer Protocol Secure (SMTPS)`,category:`infrastruktur`,description:`SMTPS dient dem sicheren Austausch von E-Mails.`,logo:`https://technologie.deutschland-stack.gov.de/logos/0989f57d36ab6834b9db46f90315a0bec2f5b63bf4cb0960f51f67754abc9748.png`,tags:[`msa`,`e-mail`,`mta`,`datenuebertragung`,`mua`],featured:!1},{id:`116`,name:`Simple Object Access Protocol`,category:`plattform`,description:`SOAP ist ein Protokoll, das den Austausch von strukturierten Informationen in verteilten und dezentralisierten Umgebungen ermöglicht. Es nutzt XML als Format für Anfragen und Antworten und arbeitet oft über HTTP, kann aber auch andere Protokolle nutzen. Der Hauptzweck von SOAP liegt in der Unterstützung von Interoperabilität und Sicherheit in komplexen Unternehmensanwendungen, wobei es strikt definierten Standards für Webservices folgt.`,logo:`https://technologie.deutschland-stack.gov.de/logos/932a5d4e85f19fc342bd4dc8c6ed1b2c23c0f45fbe9559a62844abd0587cb49d.png`,tags:[`api`,`xml`,`schnittstelle`],featured:!1},{id:`117`,name:`spaCy`,category:`plattform`,description:`spaCy ist eine Python-Bibliothek für Natural Language Processing. Sie bietet Informationsextraktion, Textanalyse und Vorverarbeitung für Deep Learning. Die Bibliothek bietet gebrauchsfertige Modelle sowie die Möglichkeit zum Training eigener Modelle.`,logo:`https://technologie.deutschland-stack.gov.de/logos/3a7a3cb2a1d5987a820e0b9bc2e4e490000ddeb3a1fdf7a5e0e5e7caae15f256.png`,tags:[`dl`,`verarbeitung`,`nlp`],featured:!1},{id:`118`,name:`Spinnaker`,category:`betrieb`,description:`Spinnaker ist eine quelloffene Continuous-Delivery-(CD)-Plattform. Sie konzentriert sich auf die schnelle und sichere Bereitstellung von Softwareänderungen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/dac742d7124ea0c3cea5a726e821637f07ee7749d7e2148a6e8f159fae982197.png`,tags:[`pipeline`,`cd`,`bereitstellung`,`ci`],featured:!1},{id:`119`,name:`Swift`,category:`betrieb`,description:`Swift dient für die Entwicklung von Apps für Apple-Geräte.`,logo:`https://technologie.deutschland-stack.gov.de/logos/d2461fcfb016d21d5f1ed56d9637f5b2df7d112355cfc0a9d8ecb7e0587a3966.png`,tags:[`multi-plattform`,`programmierung`,`sprache`],featured:!1},{id:`120`,name:`TensorFlow`,category:`plattform`,description:`TensorFlow ist eine Bibliothek für maschinelles Lernen und Künstliche Intelligen. Es wird insbesondere für Training und Inferenz von neuronalen Netzen eingesetzt.`,logo:`https://technologie.deutschland-stack.gov.de/logos/50f89a28952b1af3c87ee9eef483ecbc89c1c3653903047bb4ae7bf1596a670c.png`,tags:[`machine-learning`,`inferenz`,`verarbeitung`,`training`],featured:!1},{id:`121`,name:`Traefik`,category:`plattform`,description:`Traefik ist ein moderner, Cloud-nativer Open-Source-Reverse-Proxy und Load Balancer. Er integriert sich dynamisch in bestehende Infrastrukturen wie Docker und Kubernetes, verwaltet eingehenden Traffic und leitet ihn an die richtigen Dienste weiter.`,logo:`https://technologie.deutschland-stack.gov.de/logos/945f062daf8952e8af67bd4d3c6db67c5ea8f42489153f025dd45d69d2d796a9.png`,tags:[`proxy`,`load-balancer`,`orchestrierung`],featured:!1},{id:`122`,name:`Transmission Control Protocol (TCP)`,category:`infrastruktur`,description:`TCP ist in Verbindung mit IP Kern für die Funktionsfähigkeit des Internet. Die Datenübertragung erfolgt durch Zerlegung in einzelne Pakete inklusive der Sicherstellung der Übermittlung.`,logo:`https://technologie.deutschland-stack.gov.de/logos/f3cd04299a4bde9e0acc7cbba2d28910adbd335a83db966757b1ea1b49f0706c.png`,tags:[`paket`,`datenuebertragung`,`zustellung`,`datenintegritaet`],featured:!1},{id:`123`,name:`Transport Layer Security (TLS)`,category:`infrastruktur`,description:`TLS dient der Verschlüsselung der Datenübertragung. TLS besteht aus dem Austausch von Schlüsseln, der Authentifizierung und der Realisierung der sicheren Datenübertragung.`,logo:`https://technologie.deutschland-stack.gov.de/logos/e4eee8dc13049e71f793a6f7faba077e563a9477b486108396cec12811cad439.png`,tags:[`ssl`,`sicherheit`,`sdns`,`datenuebertragung`],featured:!1},{id:`124`,name:`TypeScript`,category:`betrieb`,description:`TypeScript ist eine Programmiersprache die JavaScript um statische Typisierung erweitert.`,logo:`https://technologie.deutschland-stack.gov.de/logos/df1fde8caf51c90363b196965d550785e2efa7d3709ff8decfbde26442dd51cf.png`,tags:[`programmierung`,`sprache`],featured:!1},{id:`125`,name:`User Datagram Protocol (UDP)`,category:`infrastruktur`,description:`UDP ist ein einfaches Datenübertragungsprotokoll ohne Zusatzfunktionen.`,logo:`https://technologie.deutschland-stack.gov.de/logos/0b518316f9224dcc0a5182f335d46aa662580acb09fc641028b4c73425a2aa5e.png`,tags:[`datenuebertragung`,`echtzeit`],featured:!1},{id:`126`,name:`WebKit`,category:`zugang`,description:`WebKit ist eine Browser-Engine zum Rendern von Webseiten. Es wird insbesondere von Apple für Safari genutzt.`,logo:`https://technologie.deutschland-stack.gov.de/logos/51ccaeb506d23f450e7ac3a7508ee24f96a2d29c9e831524a233d8f461e59826.png`,tags:[`webseite`,`browser-engine`,`rendern`],featured:!1},{id:`127`,name:`WiFi`,category:`infrastruktur`,description:`Mit Wireless LAN können in kleiner bis mittlerer Reichweite Endgeräte vernetzt werden (Ad-hoc, via Basisstation/ Access Point oder als Mesh). Die IEEE standardisiert die Technologie mit IEEE 802.11 ff. Die Konfiguration erfolgt durch SSID und Passwort. Wi-Fi dient als Kennzeichen für zertifizierte Produkte zur Sicherstellung von Interoperabilität.`,logo:`https://technologie.deutschland-stack.gov.de/logos/5f26563a33e2d527af40fa7db14fa80083f53e12e5143265cbc85a416f286bed.png`,tags:[`funk`,`hotspot`,`tethering`,`drahtlos`],featured:!1},{id:`128`,name:`YAML Ain't Markup Language`,category:`plattform`,description:`YAML ist ein Datenformat für den Datenaustausch.`,logo:`https://technologie.deutschland-stack.gov.de/logos/1d30ee4863b90467223004c9223dacfed1d230fa5c6e307670fe6c3df5bbc9ca.png`,tags:[`datenformat`],featured:!1}],xi=0;Array.isArray;function $(e,t,n,r,i,a){t||={};var o,s,c=t;if(`ref`in c)for(s in c={},t)s==`ref`?o=t[s]:c[s]=t[s];var l={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--xi,__i:-1,__u:0,__source:i,__self:a};if(typeof e==`function`&&(o=e.defaultProps))for(s in o)c[s]===void 0&&(c[s]=o[s]);return L.vnode&&L.vnode(l),l}function Si({article:e}){let t=yi.find(t=>t.id===e.category),n=t?.color??`#003d82`,r=t?.name??`Allgemein`;return $(`div`,{className:`article-card-wrapper`,children:[$(gi,{_label:e.name,className:`article-card`,children:$(`div`,{className:`card-content`,children:[$(`div`,{className:`card-header`,children:[e.logo&&$(`img`,{src:e.logo,alt:``,role:`presentation`,className:`card-logo`,loading:`lazy`}),$(`span`,{className:`card-category-dot`,style:{background:n},title:r,"aria-label":`Kategorie: ${r}`})]}),$(`p`,{className:`card-description`,children:e.description}),$(`div`,{className:`card-tags`,children:e.tags.slice(0,4).map(e=>$(mi,{_label:e,_color:`#e8eaed`,className:`tag-badge`},e))})]})}),e.featured&&$(`div`,{className:`featured-indicator`,children:$(mi,{_label:`Empfohlen`,_color:{backgroundColor:`#003d82`,foregroundColor:`#ffffff`}})})]})}function Ci({categories:e,articles:t,filters:n,onFilterChange:r,totalCount:i}){let a=t.length;return $(`main`,{id:`main-content`,className:`category-container`,children:[$(`div`,{className:`category-filters`,role:`toolbar`,"aria-label":`Kategorien filtern`,children:[$(`span`,{className:`category-filters__label`,children:`Kategorie:`}),$(hi,{_label:`Alle`,_variant:n.selectedCategory===null?`primary`:`secondary`,_on:{onClick:()=>r({...n,selectedCategory:null})}}),e.map(e=>$(hi,{_label:e.name,_variant:n.selectedCategory===e.id?`primary`:`secondary`,_on:{onClick:()=>r({...n,selectedCategory:n.selectedCategory===e.id?null:e.id})}},e.id))]}),$(`p`,{className:`results-info`,"aria-live":`polite`,"aria-atomic":`true`,children:n.searchQuery||n.selectedCategory?$(U,{children:[$(`strong`,{children:a}),` von `,i,` Einträgen`,n.selectedCategory&&$(U,{children:[` in `,$(`em`,{children:e.find(e=>e.id===n.selectedCategory)?.name})]}),n.searchQuery&&$(U,{children:[` für „`,n.searchQuery,`"`]})]}):$(U,{children:[$(`strong`,{children:i}),` Technologien & Standards`]})}),t.length===0?$(`div`,{className:`articles-grid`,children:$(`div`,{className:`empty-state`,children:[$(`div`,{className:`empty-state__icon`,"aria-hidden":`true`,children:`🔍`}),$(`p`,{className:`empty-state__title`,children:`Keine Einträge gefunden`}),$(`p`,{children:`Bitte passen Sie Ihre Suche oder den Kategoriefilter an.`})]})}):$(`div`,{className:`articles-grid`,children:t.map(e=>$(Si,{article:e},e.id))})]})}function wi(){let e=new Date().getFullYear();return $(`footer`,{className:`footer`,children:[$(`div`,{className:`footer__inner`,children:[$(`div`,{className:`footer__brand`,children:[$(`p`,{className:`footer-title`,children:`D-Stack Landscape`}),$(`p`,{className:`footer-sub`,children:`Technologie-Übersicht des Deutschland Stack`})]}),$(`nav`,{className:`footer__links`,"aria-label":`Footer-Navigation`,children:[$(`a`,{href:`https://technologie.deutschland-stack.gov.de/`,rel:`noopener noreferrer`,children:`Deutschland Stack`}),$(`a`,{href:`https://www.digitale-verwaltung.de/`,rel:`noopener noreferrer`,children:`Digitale Verwaltung`}),$(`a`,{href:`https://public-ui.github.io/`,rel:`noopener noreferrer`,children:`KoliBri Design System`})]})]}),$(`div`,{className:`footer__inner`,children:$(`p`,{className:`footer__copy`,children:[`© `,e,` Digitale Verwaltung Deutschland · Erstellt mit`,` `,$(`a`,{href:`https://public-ui.github.io/`,rel:`noopener noreferrer`,children:`KoliBri`}),` `,`und dem KERN-Theme · Lizenz: EUPL-1.2`]})})]})}function Ti(){return $(U,{children:[$(`a`,{href:`#main-content`,className:`skip-nav`,children:`Direkt zum Inhalt springen`}),$(`header`,{className:`header`,children:[$(`div`,{className:`header__official-strip`,role:`banner`,children:[$(`div`,{className:`official-label`,children:[$(`span`,{className:`official-label__emblem`,"aria-hidden":`true`,children:[$(`span`,{}),$(`span`,{}),$(`span`,{})]}),`Eine offizielle Website der Bundesrepublik Deutschland`]}),$(`span`,{className:`official-info`,children:$(`a`,{href:`https://www.bund.de/DE/Service/Hinweis-Bundeswebseiten/hinweis-bundeswebseiten.html`,rel:`noopener noreferrer`,children:`Wie Sie offizielle Websites erkennen`})})]}),$(`div`,{className:`header__brand-bar`,children:$(`a`,{href:`https://technologie.deutschland-stack.gov.de/`,className:`brand-logo`,rel:`noopener noreferrer`,children:[$(`span`,{children:`technologie.deutschland-stack.gov.de`}),$(`span`,{className:`brand-logo__badge`,children:`Gov`})]})}),$(`div`,{className:`header__content`,children:[$(`p`,{className:`header__eyebrow`,children:`Digitale Verwaltung · Deutschland Stack`}),$(`h1`,{children:`Technologie-Landscape`}),$(`p`,{className:`header__subtitle`,children:`Interaktive Übersicht der Technologien, Standards und Komponenten des Deutschland Stack – dem digitalen Ökosystem der öffentlichen Verwaltung.`})]})]})]})}function Ei({filters:e,onFilterChange:t,categories:n}){let r=[{label:`Alle Kategorien`,value:``},...n.map(e=>({label:e.name,value:e.id}))];return $(`section`,{className:`search-bar`,"aria-label":`Suche und Filter`,children:$(`div`,{className:`search-bar__inner`,children:[$(_i,{_label:`Suche`,_value:e.searchQuery,_placeholder:`Technologie oder Stichwort suchen …`,_on:{onInput:(n,r)=>t({...e,searchQuery:r})}}),$(vi,{_label:`Kategorie`,_options:r,_value:e.selectedCategory||``,_on:{onChange:(n,r)=>t({...e,selectedCategory:r||null})}})]})})}function Di(e){let[t,n]=Vn({searchQuery:``,selectedCategory:null});return{filters:t,setFilters:n,filtered:qn(()=>e.filter(e=>{let n=e.name.toLowerCase().includes(t.searchQuery.toLowerCase())||e.description.toLowerCase().includes(t.searchQuery.toLowerCase()),r=!t.selectedCategory||e.category===t.selectedCategory;return n&&r}),[e,t])}}function Oi(){let{filters:e,setFilters:t,filtered:n}=Di(bi);return $(`div`,{className:`app`,children:[$(Ti,{}),$(Ei,{filters:e,onFilterChange:t,categories:yi}),$(Ci,{categories:yi,articles:n,filters:e,onFilterChange:t,totalCount:bi.length}),$(wi,{})]})}x(Wt,ge,{translation:{name:`de`}}).then(()=>{d.patchTheme(`kern-v2`,{"KOL-INPUT-TEXT":`
					kol-input-text {
						--kol-input-background: #ffffff;
						--kol-color-primary: #003d82;
					}
				`,"KOL-SINGLE-SELECT":`
					kol-single-select {
						--kol-input-background: #ffffff;
						--kol-color-primary: #003d82;
					}
				`,"KOL-BUTTON":`
					kol-button {
						--kol-color-primary: #003d82;
					}
				`,"KOL-CARD":`
					kol-card {
						--kol-color-primary: #003d82;
						border-radius: 6px;
						box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05);
					}
				`,"KOL-BADGE":`
					kol-badge {
						font-size: 0.7rem;
						font-family: 'Fira Sans', system-ui, sans-serif;
					}
				`},{append:!0});let e=document.querySelector(`div#app`);e instanceof HTMLElement&&q($(Oi,{}),e)}).catch(console.error);export{le as a,v as c,oe as i,fe as n,ae as o,de as r,te as s,pe as t};