(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var a,i=(a=t(7294))&&a.__esModule?a:{default:a},s=t(1063),o=t(4651),c=t(7426);var l={};function u(e,n,t,r){if(e&&s.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,a=o.useRouter(),d=i.default.useMemo((function(){var n=s.resolveHref(a,e.href,!0),t=r(n,2),i=t[0],o=t[1];return{href:i,as:e.as?s.resolveHref(a,e.as):o||i}}),[a,e.href,e.as]),f=d.href,p=d.as,h=e.children,m=e.replace,v=e.shallow,g=e.scroll,j=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(n=i.default.Children.only(h))&&"object"===typeof n&&n.ref,x=c.useIntersection({rootMargin:"200px"}),y=r(x,2),O=y[0],w=y[1],N=i.default.useCallback((function(e){O(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,O]);i.default.useEffect((function(){var e=w&&t&&s.isLocalURL(f),n="undefined"!==typeof j?j:a&&a.locale,r=l[f+"%"+p+(n?"%"+n:"")];e&&!r&&u(a,f,p,{locale:n})}),[p,f,w,j,t,a]);var E={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,i,o,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(t))&&(e.preventDefault(),null==o&&r.indexOf("#")>=0&&(o=!1),n[a?"replace":"push"](t,r,{shallow:i,locale:c,scroll:o}))}(e,a,f,p,m,v,g,j)},onMouseEnter:function(e){s.isLocalURL(f)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(a,f,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof j?j:a&&a.locale,C=a&&a.isLocaleDomain&&s.getDomainLocale(p,k,a&&a.locales,a&&a.domainLocales);E.href=C||s.addBasePath(s.addLocale(p,k,a&&a.defaultLocale))}return i.default.cloneElement(n,E)};n.default=d},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,c=a.useRef(),l=a.useState(!1),u=r(l,2),d=u[0],f=u[1],p=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||d||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=o.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return o.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,i=r.observer,s=r.elements;return s.set(e,n),i.observe(e),function(){s.delete(e),i.unobserve(e),0===s.size&&(i.disconnect(),o.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,d]);return a.useEffect((function(){if(!s&&!d){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),[p,d]};var a=t(7294),i=t(3447),s="undefined"!==typeof IntersectionObserver;var o=new Map},3091:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return B}});var r=t(9008),a=t(1664),i=t(7294),s=t(8152),o=t(4942),c=t(8718);function l(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var u={};function d(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&u[n[0]]||("string"===typeof n[0]&&(u[n[0]]=new Date),l.apply(void 0,n))}function f(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function p(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return d("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],a=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var s=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!s(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!n.services.backendConnector.backend||!(!s(r,e)||a&&!s(i,e))))}function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,i.useContext)(c.OO)||{},a=r.i18n,o=r.defaultNS,l=t||a||(0,c.nI)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new c.zv),!l){d("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},h=[u,{},!1];return h.t=u,h.i18n={},h.ready=!1,h}l.options.react&&void 0!==l.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var v=m(m(m({},(0,c.JP)()),l.options.react),n),g=v.useSuspense,j=v.keyPrefix,b=e||o||l.options&&l.options.defaultNS;b="string"===typeof b?[b]:b||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(b);var x=(l.isInitialized||l.initializedStoreOnce)&&b.every((function(e){return p(e,l,v)}));function y(){return l.getFixedT(null,"fallback"===v.nsMode?b:b[0],j)}var O=(0,i.useState)(y),w=(0,s.Z)(O,2),N=w[0],E=w[1],k=(0,i.useRef)(!0);(0,i.useEffect)((function(){var e=v.bindI18n,n=v.bindI18nStore;function t(){k.current&&E(y)}return k.current=!0,x||g||f(l,b,(function(){k.current&&E(y)})),e&&l&&l.on(e,t),n&&l&&l.store.on(n,t),function(){k.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,t)})),n&&l&&n.split(" ").forEach((function(e){return l.store.off(e,t)}))}}),[l,b.join()]);var C=(0,i.useRef)(!0);(0,i.useEffect)((function(){k.current&&!C.current&&E(y),C.current=!1}),[l]);var L=[N,l,x];if(L.t=N,L.i18n=l,L.ready=x,x)return L;if(!x&&!g)return L;throw new Promise((function(e){f(l,b,(function(){e()}))}))}var g=t(5893);function j(e){var n=e.short,t=v(),r=t.t,a=t.i18n,s=(0,i.useState)(a.language),o=s[0],c=s[1],l=(0,i.useState)(null),u=l[0],d=l[1];return(0,i.useEffect)((function(){d((0,g.jsx)("select",{className:n?"uppercase":"",value:o,onChange:function(e){o!=e.target.value&&Object.keys(a.services.resourceStore.data).includes(e.target.value)&&(a.changeLanguage(e.target.value),c(e.target.value))},children:Object.keys(a.services.resourceStore.data).map((function(e){return(0,g.jsx)("option",{value:e,children:n?e:r(e)},e)}))}))}),[o,r,a]),(0,g.jsx)("div",{className:"select-container",children:u})}function b(){var e=v(),n=e.t;e.i18n;return(0,g.jsx)("header",{children:(0,g.jsxs)("div",{className:"container",children:[(0,g.jsxs)("div",{className:"logo-nav",children:[(0,g.jsx)("img",{src:"/assets/logo.svg",alt:"Logo"}),(0,g.jsx)("nav",{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)(a.default,{href:"/",children:(0,g.jsx)("a",{children:n("header_home")})})}),(0,g.jsx)("li",{children:(0,g.jsx)(a.default,{href:"/documentation",children:(0,g.jsx)("a",{children:n("header_documentation")})})}),(0,g.jsx)("li",{children:(0,g.jsx)(a.default,{href:"/support",children:(0,g.jsx)("a",{children:n("header_support")})})})]})})]}),(0,g.jsxs)("div",{className:"cta-lang",children:[(0,g.jsx)(a.default,{href:"/download",children:(0,g.jsx)("a",{className:"btn btn-s btn-primary",children:n("header_download")})}),(0,g.jsx)(j,{short:!0})]})]})})}function x(){return(0,g.jsx)("footer",{children:(0,g.jsxs)("div",{className:"container",children:[(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-sm-3 col-6"}),(0,g.jsx)("div",{className:"col-sm-3 col-6"}),(0,g.jsx)("div",{className:"col-sm-3 col-6"}),(0,g.jsx)("div",{className:"col-sm-3 col-6"})]}),(0,g.jsx)("hr",{}),(0,g.jsxs)("div",{children:[(0,g.jsx)("img",{src:"/assets/logo.svg",alt:"Logo"}),(0,g.jsx)(j,{short:!1})]})]})})}function y(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var O=t(1002),w=t(1739),N=t.n(w),E=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function k(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(N()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var a=new RegExp(E),i=null;null!==(i=a.exec(e));)if(i[0].trim())if(i[1]){var s=i[1].trim(),o=[s,""];s.indexOf("=")>-1&&(o=s.split("=")),n.attrs[o[0]]=o[1],a.lastIndex--}else i[2]&&(n.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return n}var C=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,L=/^\s*$/,P=Object.create(null);function S(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(S,"")+"</"+n.name+">";case"comment":return e+"\x3c!--"+n.comment+"--\x3e"}}var _={parse:function(e,n){n||(n={}),n.components||(n.components=P);var t,r=[],a=[],i=-1,s=!1;if(0!==e.indexOf("<")){var o=e.indexOf("<");r.push({type:"text",content:-1===o?e:e.substring(0,o)})}return e.replace(C,(function(o,c){if(s){if(o!=="</"+t.name+">")return;s=!1}var l,u="/"!==o.charAt(1),d=o.startsWith("\x3c!--"),f=c+o.length,p=e.charAt(f);if(d){var h=k(o);return i<0?(r.push(h),r):((l=a[i]).children.push(h),r)}if(u&&(i++,"tag"===(t=k(o)).type&&n.components[t.name]&&(t.type="component",s=!0),t.voidElement||s||!p||"<"===p||t.children.push({type:"text",content:e.slice(f,e.indexOf("<",f))}),0===i&&r.push(t),(l=a[i-1])&&l.children.push(t),a[i]=t),(!u||t.voidElement)&&(i>-1&&(t.voidElement||t.name===o.slice(2,-1))&&(i--,t=-1===i?r:a[i]),!s&&"<"!==p&&p)){l=-1===i?r:a[i].children;var m=e.indexOf("<",f),v=e.slice(f,-1===m?void 0:m);L.test(v)&&(v=" "),(m>-1&&i+l.length>=0||" "!==v)&&l.push({type:"text",content:v})}})),r},stringify:function(e){return e.reduce((function(e,n){return e+S("",n)}),"")}},I=["format"],M=["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"];function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function R(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function T(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function Z(e){return Array.isArray(e)?e:[e]}function q(e,n){if(!e)return"";var t="",r=Z(e),a=n.transKeepBasicHtmlNodesFor||[];return r.forEach((function(e,r){if("string"===typeof e)t+="".concat(e);else if(i.isValidElement(e)){var s=Object.keys(e.props).length,o=a.indexOf(e.type)>-1,c=e.props.children;if(!c&&o&&0===s)t+="<".concat(e.type,"/>");else if(c||o&&0===s)if(e.props.i18nIsDynamicList)t+="<".concat(r,"></").concat(r,">");else if(o&&1===s&&"string"===typeof c)t+="<".concat(e.type,">").concat(c,"</").concat(e.type,">");else{var u=q(c,n);t+="<".concat(r,">").concat(u,"</").concat(r,">")}else t+="<".concat(r,"></").concat(r,">")}else if(null===e)l("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,O.Z)(e)){var d=e.format,f=y(e,I),p=Object.keys(f);if(1===p.length){var h=d?"".concat(p[0],", ").concat(d):p[0];t+="{{".concat(h,"}}")}else l("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else l("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function K(e,n,t,r,a){if(""===n)return[];var s=r.transKeepBasicHtmlNodesFor||[],o=n&&new RegExp(s.join("|")).test(n);if(!e&&!o)return[n];var c={};!function e(n){Z(n).forEach((function(n){"string"!==typeof n&&(R(n)?e(T(n)):"object"!==(0,O.Z)(n)||i.isValidElement(n)||Object.assign(c,n))}))}(e);var l=_.parse("<0>".concat(n,"</0>")),u=D(D({},c),a);function d(e,n,t){var r=T(e),a=p(r,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return i.isValidElement(e)}))}(r)&&0===a.length?r:a}function f(e,n,t,r,a){e.dummy&&(e.children=n),t.push(i.cloneElement(e,D(D({},e.props),{},{key:r}),a?void 0:n))}function p(n,a,c){var l=Z(n);return Z(a).reduce((function(n,a,h){var m=a.children&&a.children[0]&&a.children[0].content&&t.services.interpolator.interpolate(a.children[0].content,u,t.language);if("tag"===a.type){var v=l[parseInt(a.name,10)];!v&&1===c.length&&c[0][a.name]&&(v=c[0][a.name]),v||(v={});var g=0!==Object.keys(a.attrs).length?function(e,n){var t=D({},n);return t.props=Object.assign(e.props,n.props),t}({props:a.attrs},v):v,j=i.isValidElement(g),b=j&&R(a,!0)&&!a.voidElement,x=o&&"object"===(0,O.Z)(g)&&g.dummy&&!j,y="object"===(0,O.Z)(e)&&null!==e&&Object.hasOwnProperty.call(e,a.name);if("string"===typeof g){var w=t.services.interpolator.interpolate(g,u,t.language);n.push(w)}else if(R(g)||b){f(g,d(g,a,c),n,h)}else if(x){var N=p(l,a.children,c);n.push(i.cloneElement(g,D(D({},g.props),{},{key:h}),N))}else if(Number.isNaN(parseFloat(a.name))){if(y)f(g,d(g,a,c),n,h,a.voidElement);else if(r.transSupportBasicHtmlNodes&&s.indexOf(a.name)>-1)if(a.voidElement)n.push(i.createElement(a.name,{key:"".concat(a.name,"-").concat(h)}));else{var E=p(l,a.children,c);n.push(i.createElement(a.name,{key:"".concat(a.name,"-").concat(h)},E))}else if(a.voidElement)n.push("<".concat(a.name," />"));else{var k=p(l,a.children,c);n.push("<".concat(a.name,">").concat(k,"</").concat(a.name,">"))}}else if("object"!==(0,O.Z)(g)||j)1===a.children.length&&m?n.push(i.cloneElement(g,D(D({},g.props),{},{key:h}),m)):n.push(i.cloneElement(g,D(D({},g.props),{},{key:h})));else{var C=a.children[0]?m:null;C&&n.push(C)}}else if("text"===a.type){var L=r.transWrapTextNodes,P=t.services.interpolator.interpolate(a.content,u,t.language);L?n.push(i.createElement(L,{key:"".concat(a.name,"-").concat(h)},P)):n.push(P)}return n}),[])}return T(p([{dummy:!0,children:e||[]}],l,Z(e||[]))[0])}function z(e){var n=e.children,t=e.count,r=e.parent,a=e.i18nKey,s=e.tOptions,o=void 0===s?{}:s,l=e.values,u=e.defaults,f=e.components,p=e.ns,h=e.i18n,m=e.t,v=y(e,M),g=(0,i.useContext)(c.OO)||{},j=g.i18n,b=g.defaultNS,x=h||j||(0,c.nI)();if(!x)return d("You will need to pass in an i18next instance by using i18nextReactModule"),n;var O=m||x.t.bind(x)||function(e){return e},w=D(D({},(0,c.JP)()),x.options&&x.options.react),N=p||O.ns||b||x.options&&x.options.defaultNS;N="string"===typeof N?[N]:N||["translation"];var E=u||q(n,w)||w.transEmptyNodeValue||a,k=w.hashTransKey,C=a||(k?k(E):E),L=l?o.interpolation:{interpolation:D(D({},o.interpolation),{},{prefix:"#$?",suffix:"?$#"})},P=D(D(D(D({},o),{},{count:t},l),L),{},{defaultValue:E,ns:N}),S=K(f||n,C?O(C,P):E,x,w,P),_=void 0!==r?r:w.defaultTransParent;return _?i.createElement(_,v,S):S}function B(){var e=v(),n=e.t;e.i18n;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(r.default,{children:[(0,g.jsx)("title",{children:"Hello World"}),(0,g.jsx)("meta",{name:"description",content:"Official website for SomethingOS"})]}),(0,g.jsx)(b,{}),(0,g.jsxs)("main",{children:[(0,g.jsx)("section",{className:"intro",children:(0,g.jsxs)("div",{className:"container",children:[(0,g.jsx)("h1",{children:(0,g.jsx)(z,{i18nKey:"index_h1",components:[(0,g.jsx)("strong",{},"0")]})}),(0,g.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis urna placerat, congue purus sit amet, semper nunc."}),(0,g.jsx)(a.default,{href:"/download",children:(0,g.jsx)("a",{className:"btn btn-l btn-duotone",children:n("index_cta")})})]})}),(0,g.jsxs)("section",{className:"about",children:[(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:(0,g.jsx)("path",{fill:"#ffffff",fillOpacity:"1",d:"M0,256L48,234.7C96,213,192,171,288,165.3C384,160,480,192,576,176C672,160,768,96,864,85.3C960,75,1056,117,1152,154.7C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"})}),(0,g.jsxs)("div",{className:"container",children:[(0,g.jsx)("h2",{children:"About this system"}),(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-md-6",children:(0,g.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia ornare finibus. Nunc vel augue massa. Sed commodo nunc at quam feugiat rutrum. In vulputate nunc justo, sit amet sollicitudin mi accumsan sed. Morbi ut blandit ante. Aenean vitae eros arcu. Etiam bibendum viverra odio id lobortis."})}),(0,g.jsx)("div",{className:"col-md-6"})]}),(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-md-6"}),(0,g.jsx)("div",{className:"col-md-6",children:(0,g.jsx)("p",{children:"Curabitur non orci urna. Ut ac augue ut dolor ultrices bibendum in eget felis. Mauris id tellus eu nisi iaculis vestibulum et nec sapien. Aenean placerat, ex at ornare porta, tellus justo viverra eros, at bibendum ligula justo dictum mauris. Aliquam aliquam hendrerit nisi id luctus. Fusce ac aliquet dui."})})]}),(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-md-6",children:(0,g.jsx)("p",{children:"Vestibulum a blandit nisl. Nam tristique eget neque id sollicitudin. Phasellus eu ex erat. Sed efficitur convallis porta. Curabitur sed nisl condimentum, consequat orci vitae, convallis dolor. Vivamus porttitor iaculis rhoncus. Nunc non faucibus sapien. Aliquam erat volutpat."})}),(0,g.jsx)("div",{className:"col-md-6"})]})]}),(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:(0,g.jsx)("path",{fill:"#ffffff",fillOpacity:"1",d:"M0,96L60,117.3C120,139,240,181,360,170.7C480,160,600,96,720,85.3C840,75,960,117,1080,122.7C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"})})]}),(0,g.jsx)("section",{className:"download",children:(0,g.jsxs)("div",{className:"container",children:[(0,g.jsx)("h2",{children:"Download Now"}),(0,g.jsx)(a.default,{href:"/download",children:(0,g.jsx)("a",{className:"btn btn-s btn-primary",children:".iso | 2,82 GB"})})]})})]}),(0,g.jsx)(x,{})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3091)}])},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)},1739:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);