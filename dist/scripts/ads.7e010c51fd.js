(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1OyB":function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}i.d(t,"a",(function(){return n}))},vuIU:function(e,t,i){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}i.d(t,"a",(function(){return r}))},"z+Ii":function(e,t,i){"use strict";i.r(t);var n=i("1OyB"),r=i("vuIU");var o=function(e){return new Promise((function(t,i){var n=document.createElement("script");n.src=e,n.async=!0,n.onload=t,n.onerror=i,document.body.appendChild(n)}))};var a=function(e,t){return e instanceof Node||e instanceof Window?[e]:Array.prototype.slice.call("string"==typeof e?(t||document).querySelectorAll(e):e||[])},s=0;var g=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.adFields,r=void 0===i?{adUnit:"/5805113/basic",dimensions:[300,250]}:i,o=t.globalMappings,a=void 0===o?{banner:[[[768,130],[[728,90]]]]}:o,s=t.attributePrefix,g=void 0===s?"dv-gpt-":s,c=t.gptSrc,d=void 0===c?"https://www.googletagservices.com/tag/js/gpt.js":c,u=t.idPrefix,l=void 0===u?"dv-gpt-":u,h=t.selector,v=void 0===h?".dv-gpt-ad":h,f=t.targetingKey,p=void 0===f?"tribpedia":f,b=t.targetingValue;Object(n.a)(this,e),this.adFields=r,this.globalMappings=a,this.attributePrefix=g,this.gptSrc=d,this.idPrefix=l,this.selector=v,this.targetingKey=p,this.targetingValue=b,this.initialized=!1,this.slots=null,this.createAds=this.createAds.bind(this),this.onIntersection=this.onIntersection.bind(this),this.setupService=this.setupService.bind(this)}return Object(r.a)(e,[{key:"init",value:function(){var e=this;if(!this.initialized){this.elements=a(this.selector),this.count=this.elements.length;this.observer=new IntersectionObserver(this.onIntersection,{rootMargin:"500px 0px",threshold:.01}),window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],o(this.gptSrc).then((function(){window.googletag.cmd.push(e.setupService,e.createAds),e.initialized=!0}))}}},{key:"setupService",value:function(){var e=this;window.googletag.cmd.push((function(){var t=window.googletag.pubads();e.targetingKey&&e.targetingValue&&t.setTargeting(e.targetingKey,e.targetingValue),t.disableInitialLoad(),window.googletag.enableServices()}))}},{key:"createAds",value:function(){var e=this,t=this.adFields,i=t.adUnit,n=t.dimensions,r=this.globalMappings.banner;this.elements.forEach((function(t){var o,a,g=function(e,t){var i=function(e){var t={};if(!e||1!==e.nodeType)return t;var i=e.attributes;if(0===i.length)return t;for(var n=0;n<i.length;n++)t[i[n].name]=i[n].value;return t}(e),n={};return Object.keys(i).forEach((function(e){if(e.substr(0,t.length)===t){var r=i[e],o=e.slice(t.length).replace(/[-_]+(\w?)/g,(function(e,t){return t.toUpperCase()}));n[o]=r}})),n}(t,e.attributePrefix),c=Object.assign({},{adUnit:i,dimensions:n},g),d=(o=e.idPrefix,a=++s+"",o?o+a:a);t.setAttribute("id",d);var u=window.googletag.defineSlot(c.adUnit,c.dimensions,d);u.defineSizeMapping(r),c.targetingKey&&c.targetingValue&&u.setTargeting(c.targetingKey,c.targetingValue),u.setCollapseEmptyDiv(!0),u.addService(window.googletag.pubads()),window.googletag.display(d),t.__slot__=u,e.observer.observe(t)}))}},{key:"onIntersection",value:function(e){var t=this;e.forEach((function(e){if(e.isIntersecting){var i=e.target;t.count-=1,t.observer.unobserve(i),window.googletag.pubads().refresh([i.__slot__]),t.count>0||t.observer.disconnect()}}))}}]),e}();t.default=g}}]);
//# sourceMappingURL=ads.7e010c51fd.js.map