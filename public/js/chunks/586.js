(self.webpackChunk_efelle_quotes_module=self.webpackChunk_efelle_quotes_module||[]).push([[586],{586:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>s});const r={data:function(){return{form:{author:"",quote:""},errors:{}}},methods:{submit:function(){var t=this;axios.post("/api/quotes",this.form).then((function(e){toast("Quote successfully created","success"),t.$router.push("/quotes")})).catch((function(e){t.errors=e.response.data.errors,toast(e.response.data.message,"failed")}))}}};const s=(0,o(900).Z)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"quote-page"},[o("portal",{attrs:{to:"title"}},[o("page-title",{attrs:{icon:"quote-right"}},[t._v("Create Quote")])],1),t._v(" "),o("portal",{attrs:{to:"actions"}},[o("div",{staticClass:"buttons"},["sm"!=t.$mq?o("ui-button",{key:"go-back-btn",attrs:{to:{name:"quotes"},variant:"secondary"}},[t._v("Go Back")]):t._e(),t._v(" "),o("ui-button",{key:"save-btn",attrs:{variant:"primary"},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Save")])],1)]),t._v(" "),o("section-card",{attrs:{id:"quote_panel_general",title:"General Information",description:"General information about this quote.",tabindex:"-1"}},[o("ui-input-group",{attrs:{id:"quote-author",name:"author",label:"Author",autocomplete:"off",autofocus:"",required:"","has-error":"author"in t.errors,"error-message":t.errors.author},model:{value:t.form.author,callback:function(e){t.$set(t.form,"author",e)},expression:"form.author"}}),t._v(" "),o("ui-textarea-group",{attrs:{id:"quote-quote",name:"quote",label:"Quote",help:"Enter your quote here.",autocomplete:"off","has-error":"quote"in t.errors,"error-message":t.errors.quote},model:{value:t.form.quote,callback:function(e){t.$set(t.form,"quote",e)},expression:"form.quote"}})],1)],1)}),[],!1,null,null,null).exports},900:(t,e,o)=>{"use strict";function r(t,e,o,r,s,a,n,u){var i,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=o,l._compiled=!0),r&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),n?(i=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},l._ssrRegister=i):s&&(i=u?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),i)if(l.functional){l._injectStyles=i;var c=l.render;l.render=function(t,e){return i.call(e),c(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,i):[i]}return{exports:t,options:l}}o.d(e,{Z:()=>r})}}]);