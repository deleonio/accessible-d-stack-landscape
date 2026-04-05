/*!
 * KoliBri - The accessible HTML-Standard
 */function a(e){var t,r;const o={};for(const s of[...(t=e.required)!==null&&t!==void 0?t:[],...(r=e.optional)!==null&&r!==void 0?r:[]])o[s.propName]=s.getDefaultValue();return o}class n{constructor(t,r){this.rawProps={},this.setState=t.setState,this.getState=t.getState,this.renderProps=a(r)}setRawProp(t,r){this.rawProps[t]=r}getRawProp(t){return this.rawProps[t]}setRenderProp(t,r){this.renderProps[t]=r}getRenderProp(t){return this.renderProps[t]}}export{n as B};
