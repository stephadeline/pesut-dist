(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"64qa":function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return c}));var a={0:"Jan.",1:"Feb.",2:"March",3:"April",4:"May",5:"June",6:"July",7:"Aug.",8:"Sept.",9:"Oct.",10:"Nov.",11:"Dec."};function n(t){return void 0===t&&(t=new Date),a[t.getMonth()]}function s(t){return void 0===t&&(t=new Date),n(t)+" "+t.getDate()+", "+t.getFullYear()}function i(t){return null==t}var o=new RegExp(/\s+([^\s]*)\s*$/);function c(t,e){return void 0===e&&(e=" "),i(t)?"":String(t).replace(o,e+"$1")}},Nl4J:function(t,e,r){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}r.r(e);var n=r("yA1Q"),s=r("64qa"),i=t=>{var{headline:e,url:r,pub_date:a,sitewide_image:i}=t;return Object(n.b)("article",{class:"story"},Object(n.b)("a",{class:"story-link dim",href:r,target:"_blank","ga-event-category":"read more","ga-event-action":"automated by tag","ga-event-label":"apps page"},Object(n.b)("div",{class:"story-media"},Object(n.b)("div",{class:"story-art"},Object(n.b)("img",{src:i.thumbnails.letterbox,alt:i.description})),Object(n.b)("div",{class:"story-text"},Object(n.b)("header",{class:"story-header"},Object(n.b)("h4",{class:"story-headline"},e),Object(n.b)("p",{class:"story-byline"},Object(s.a)(new Date(a))))))))},o=r("xcSt");class c extends n.a{constructor(){super(),this.state={stories:[]}}componentDidMount(){var{gutenTag:t,numberOfStories:e}=this.props;fetch(Object(o.a)({gutenTag:t,numberOfStories:e})).then(t=>t.json()).then(t=>{var{results:e}=t;return this.setState({stories:e})})}render(t,e){var{title:r}=t,{stories:s}=e;return Object(n.b)("section",{class:"related-stories"},Object(n.b)("p",{class:"related-content__title"},r),Object(n.b)("nav",{class:"stories"},s.map(t=>Object(n.b)(i,a({key:t.id},t)))))}}c.defaultProps={numberOfStories:4,title:"Read more"};e.default=c},xcSt:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a}));var a="https://www.texastribune.org/api/v2/articles/most_viewed/?format=json&limit=5",n=t=>{var{gutenTag:e,numberOfStories:r=4}=t;return"https://www.texastribune.org/api/v2/articles/?content_type=story,audio,video,pointer&tag=".concat(e,"&tag!=object-tribcast&fields=id,url,pub_date,headline,summary,sitewide_image&limit=").concat(r,"&format=json")}}}]);
//# sourceMappingURL=RelatedContent.887975d311.mjs.map