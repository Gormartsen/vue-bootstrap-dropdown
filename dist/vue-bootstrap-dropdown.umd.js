(function(e,a){typeof exports=="object"&&typeof module<"u"?module.exports=a(require("vue")):typeof define=="function"&&define.amd?define(["vue"],a):(e=typeof globalThis<"u"?globalThis:e||self,e.VueBootstrapDropdown=a(e.Vue))})(this,function(e){"use strict";const a=(t,n)=>{const s=t.__vccOpts||t;for(const[c,l]of n)s[c]=l;return s};var u=0,h=function(){return"dropdown-"+u++},f=["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"],d=["click"];(window.ontouchstart||navigator.msMaxTouchPoints>0)&&d.push("touchstart");var o=[],p=function(t){for(var n in o){var s=o[n].el,c=o[n].fn;t.target!==s&&!s.contains(t.target)&&w(c,t)}},w=function(t,n){!t||setTimeout(function(){t(n)},10)},m=function(){for(var t in d)document.addEventListener(d[t],p)},b=function(){if(!(o.length>0))for(var t in d)document.removeEventListener(d[t],p)};const C={name:"bootstrap-dropdown",data(){return{isShow:!1,isManualHide:!1}},props:["title","placement","btn-class","btn-split","dropdown-class","noAutoHide"],emits:["hidden","show","click"],watch:{isShow:function(t){return t?this.$emit("show"):this.$emit("hidden")}},computed:{dropdownPointer:function(){return this},dropdownClassComputed:function(){var t="";return this.isShow&&(t=t+" show"),this.dropdownClass&&(t=t+" "+this.dropdownClass),t}},methods:{hide:function(){this.isManualHide=!0},clickInside:function(){this.noAutoHide&&this.isManualHide!==!0&&this.isShow||this.switchState()},switchState:function(){this.isShow=!this.isShow,this.isManualHide=!1,f.indexOf(this.placement)!==-1&&this.placement}},beforeUnmount(){for(var t in o)o[t].el===this.$el&&o.splice(t,1);b()},mounted(){m();var t=this;o.push({el:this.$el,fn:function(){t.isShow=!1}})},created:function(){this.id=h()}},k=["id","aria-expanded"],S=["innerHTML"],g=e.createElementVNode("i",{class:"fa-solid fa-chevron-down ps-3"},null,-1),_={key:1,class:"btn-group"},E=["id","innerHTML"],v=["aria-expanded"],y=[e.createElementVNode("i",{class:"fa-solid fa-chevron-down"},null,-1),e.createElementVNode("span",{class:"visually-hidden"},"Toggle Dropdown",-1)],V=["aria-labelledby"];function H(t,n,s,c,l,i){return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["dropdown",{show:l.isShow}])},[t.btnSplit?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("button",{key:0,class:e.normalizeClass(["btn",t.btnClass]),type:"button","data-toggle":"dropdown","aria-haspopup":"true",id:t.id,ref:"button",onClick:n[0]||(n[0]=(...r)=>i.switchState&&i.switchState(...r)),"aria-expanded":l.isShow},[e.createElementVNode("span",{innerHTML:s.title},null,8,S),g],10,k)),t.btnSplit?(e.openBlock(),e.createElementBlock("div",_,[e.createElementVNode("button",{class:e.normalizeClass(["btn",t.btnClass]),type:"button","data-toggle":"dropdown","aria-haspopup":"true",id:t.id,ref:"button",innerHTML:s.title,onClick:n[1]||(n[1]=r=>t.$emit("click"))},null,10,E),e.createElementVNode("button",{class:e.normalizeClass(["btn dropdown-toggle-split",t.btnClass]),type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":l.isShow,onClick:n[2]||(n[2]=(...r)=>i.switchState&&i.switchState(...r))},y,10,v)])):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(["dropdown-menu",i.dropdownClassComputed]),ref:"popup","data-bs-popper":"static","aria-labelledby":t.id,onClick:n[3]||(n[3]=(...r)=>i.clickInside&&i.clickInside(...r))},[e.renderSlot(t.$slots,"default",{dropdown:i.dropdownPointer})],10,V)],2)}return a(C,[["render",H]])});
