(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{3:function(e,t,n){n("NFw3"),e.exports=n("RyBK")},"3czj":function(e,t){},"5mJH":function(e,t,n){"use strict";n.r(t);var o=n("VphZ"),r=n("LvDl"),i=n.n(r),a=(n("av6O"),o.c("svg"));function l(){a.html("");a.node().offsetWidth,o.c("svg").append("image").attr("xlink:href","http://lorempixel.com/200/200/").attr("width",200).attr("height",200)}l(),window.addEventListener("resize",i.a.debounce(l,200))},RyBK:function(e,t,n){"use strict";n.r(t);var o=n("yA1Q");window.ttData=window.ttData||{};var r=document.getElementById("related-content-container");r&&window.ttData.gutenTag&&n.e(3).then(n.bind(null,"Nl4J")).then(e=>{var{default:t}=e;return Object(o.c)(Object(o.b)(t,{title:"Read more",gutenTag:window.ttData.gutenTag}),r)});var i=document.getElementById("ribbon-container");i&&n.e(4).then(n.bind(null,"rKEY")).then(e=>{var{default:t}=e;return Object(o.c)(Object(o.b)(t,null),i)}),n.e(5).then(n.bind(null,"z+Ii")).then(e=>{var{default:t}=e;(new t).init()});n("3ZZD"),n("3czj"),n("5mJH")},yA1Q:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return z}));var o=function(){},r={},i=[],a=[];function l(e,t){var n,l,s,p,c=a;for(p=arguments.length;p-- >2;)i.push(arguments[p]);for(t&&null!=t.children&&(i.length||i.push(t.children),delete t.children);i.length;)if((l=i.pop())&&void 0!==l.pop)for(p=l.length;p--;)i.push(l[p]);else"boolean"==typeof l&&(l=null),(s="function"!=typeof e)&&(null==l?l="":"number"==typeof l?l=String(l):"string"!=typeof l&&(s=!1)),s&&n?c[c.length-1]+=l:c===a?c=[l]:c.push(l),n=s;var u=new o;return u.nodeName=e,u.children=c,u.attributes=null==t?void 0:t,u.key=null==t?void 0:t.key,void 0!==r.vnode&&r.vnode(u),u}function s(e,t){for(var n in t)e[n]=t[n];return e}function p(e,t){e&&("function"==typeof e?e(t):e.current=t)}var c="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var u=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,d=[];function f(e){!e._dirty&&(e._dirty=!0)&&1==d.push(e)&&(r.debounceRendering||c)(v)}function v(){for(var e;e=d.pop();)e._dirty&&E(e)}function m(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&h(e,t.nodeName):n||e._componentConstructor===t.nodeName}function h(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function _(e){var t=s({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function b(e){var t=e.parentNode;t&&t.removeChild(e)}function y(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)p(n,null),p(o,e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===u.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,g,a):e.removeEventListener(t,g,a),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var l=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(l?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function g(e){return this._listeners[e.type](r.event&&r.event(e)||e)}var w=[],C=0,x=!1,N=!1;function k(){for(var e;e=w.shift();)r.afterMount&&r.afterMount(e),e.componentDidMount&&e.componentDidMount()}function S(e,t,n,o,r,i){C++||(x=null!=r&&void 0!==r.ownerSVGElement,N=null!=e&&!("__preactattr_"in e));var a=B(e,t,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--C||(N=!1,i||k()),a}function B(e,t,n,o,r){var i=e,a=x;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),U(e,!0))),i.__preactattr_=!0,i;var l,s,p=t.nodeName;if("function"==typeof p)return function(e,t,n,o){var r=e&&e._component,i=r,a=e,l=r&&e._componentConstructor===t.nodeName,s=l,p=_(t);for(;r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;r&&s&&(!o||r._component)?(M(r,p,3,n,o),e=r.base):(i&&!l&&(W(i),e=a=null),r=L(t.nodeName,p,n),e&&!r.nextBase&&(r.nextBase=e,a=null),M(r,p,1,n,o),e=r.base,a&&e!==a&&(a._component=null,U(a,!1)));return e}(e,t,n,o);if(x="svg"===p||"foreignObject"!==p&&x,p=String(p),(!e||!h(e,p))&&(l=p,(s=x?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l)).normalizedNodeName=l,i=s,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),U(e,!0)}var c=i.firstChild,u=i.__preactattr_,d=t.children;if(null==u){u=i.__preactattr_={};for(var f=i.attributes,v=f.length;v--;)u[f[v].name]=f[v].value}return!N&&d&&1===d.length&&"string"==typeof d[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=d[0]&&(c.nodeValue=d[0]):(d&&d.length||null!=c)&&function(e,t,n,o,r){var i,a,l,s,p,c=e.childNodes,u=[],d={},f=0,v=0,h=c.length,_=0,y=t?t.length:0;if(0!==h)for(var g=0;g<h;g++){var w=c[g],C=w.__preactattr_;null!=(x=y&&C?w._component?w._component.__key:C.key:null)?(f++,d[x]=w):(C||(void 0!==w.splitText?!r||w.nodeValue.trim():r))&&(u[_++]=w)}if(0!==y)for(g=0;g<y;g++){var x;if(s=t[g],p=null,null!=(x=s.key))f&&void 0!==d[x]&&(p=d[x],d[x]=void 0,f--);else if(v<_)for(i=v;i<_;i++)if(void 0!==u[i]&&m(a=u[i],s,r)){p=a,u[i]=void 0,i===_-1&&_--,i===v&&v++;break}p=B(p,s,n,o),l=c[g],p&&p!==e&&p!==l&&(null==l?e.appendChild(p):p===l.nextSibling?b(l):e.insertBefore(p,l))}if(f)for(var g in d)void 0!==d[g]&&U(d[g],!1);for(;v<=_;)void 0!==(p=u[_--])&&U(p,!1)}(i,d,n,o,N||null!=u.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||y(e,o,n[o],n[o]=void 0,x);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||y(e,o,n[o],n[o]=t[o],x)}(i,t.attributes,u),x=a,i}function U(e,t){var n=e._component;n?W(n):(null!=e.__preactattr_&&p(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||b(e),T(e))}function T(e){for(e=e.lastChild;e;){var t=e.previousSibling;U(e,!0),e=t}}var D=[];function L(e,t,n){var o,r=D.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),j.call(o,t,n)):((o=new j(t,n)).constructor=e,o.render=P);r--;)if(D[r].constructor===e)return o.nextBase=D[r].nextBase,D.splice(r,1),o;return o}function P(e,t,n){return this.constructor(e,n)}function M(e,t,n,o,i){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o)),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===r.syncComponentUpdates&&e.base?f(e):E(e,1,i)),p(e.__ref,e))}function E(e,t,n,o){if(!e._disable){var i,a,l,p=e.props,c=e.state,u=e.context,d=e.prevProps||p,f=e.prevState||c,v=e.prevContext||u,m=e.base,h=e.nextBase,b=m||h,y=e._component,g=!1,x=v;if(e.constructor.getDerivedStateFromProps&&(c=s(s({},c),e.constructor.getDerivedStateFromProps(p,c)),e.state=c),m&&(e.props=d,e.state=f,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(p,c,u)?g=!0:e.componentWillUpdate&&e.componentWillUpdate(p,c,u),e.props=p,e.state=c,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!g){i=e.render(p,c,u),e.getChildContext&&(u=s(s({},u),e.getChildContext())),m&&e.getSnapshotBeforeUpdate&&(x=e.getSnapshotBeforeUpdate(d,f));var N,B,T=i&&i.nodeName;if("function"==typeof T){var D=_(i);(a=y)&&a.constructor===T&&D.key==a.__key?M(a,D,1,u,!1):(N=a,e._component=a=L(T,D,u),a.nextBase=a.nextBase||h,a._parentComponent=e,M(a,D,0,u,!1),E(a,1,n,!0)),B=a.base}else l=b,(N=y)&&(l=e._component=null),(b||1===t)&&(l&&(l._component=null),B=S(l,i,u,n||!m,b&&b.parentNode,!0));if(b&&B!==b&&a!==y){var P=b.parentNode;P&&B!==P&&(P.replaceChild(B,b),N||(b._component=null,U(b,!1)))}if(N&&W(N),e.base=B,B&&!o){for(var j=e,z=e;z=z._parentComponent;)(j=z).base=B;B._component=j,B._componentConstructor=j.constructor}}for(!m||n?w.push(e):g||(e.componentDidUpdate&&e.componentDidUpdate(d,f,x),r.afterUpdate&&r.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);C||o||k()}}function W(e){r.beforeUnmount&&r.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?W(n):t&&(null!=t.__preactattr_&&p(t.__preactattr_.ref,null),e.nextBase=t,b(t),D.push(e),T(t)),p(e.__ref,null)}function j(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function z(e,t,n){return S(n,e,{},!1,t,!1)}s(j.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=s(s({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),f(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),E(this,2)},render:function(){}})}},[[3,0,1,2]]]);
//# sourceMappingURL=main.32d0a5cae7.mjs.map