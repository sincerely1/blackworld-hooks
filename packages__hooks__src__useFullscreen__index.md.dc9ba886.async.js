(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{Awmt:function(e,t,n){},MZF8:function(e,t,n){"use strict";var l=n("ogwx");n.d(t,"a",(function(){return l["b"]}));n("VCU9")},sQIv:function(e,t,n){"use strict";n.r(t);var l=n("uLvW"),a=n.n(l),r=n("6Asg"),c=n("SF98"),u=n("tP2i"),m=n("wFzW"),o=a.a.memo((e=>{var t=e.demos,n=t["usefullscreen-demo1"].component,l=t["usefullscreen-demo2"].component,o=t["usefullscreen-demo3"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"usefullscreen"},a.a.createElement(r["AnchorLink"],{to:"#usefullscreen","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"useFullscreen"),a.a.createElement("p",null,"\u7ba1\u7406 DOM \u5168\u5c4f\u7684 Hook\u3002"),a.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},a.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),a.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),a.a.createElement(c["default"],t["usefullscreen-demo1"].previewerProps,a.a.createElement(n,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h3",{id:"\u9875\u9762\u5168\u5c4f"},a.a.createElement(r["AnchorLink"],{to:"#\u9875\u9762\u5168\u5c4f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u9875\u9762\u5168\u5c4f")),a.a.createElement(c["default"],t["usefullscreen-demo2"].previewerProps,a.a.createElement(l,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h3",{id:"\u4e0e\u5176\u5b83\u5168\u5c4f\u64cd\u4f5c\u5171\u5b58"},a.a.createElement(r["AnchorLink"],{to:"#\u4e0e\u5176\u5b83\u5168\u5c4f\u64cd\u4f5c\u5171\u5b58","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4e0e\u5176\u5b83\u5168\u5c4f\u64cd\u4f5c\u5171\u5b58")),a.a.createElement(c["default"],t["usefullscreen-demo3"].previewerProps,a.a.createElement(o,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"api"},a.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement(u["a"],{code:"const [isFullscreen, {\n  enterFullscreen,\n  exitFullscreen,\n  toggleFullscreen,\n  isEnabled,\n}] = useFullScreen(\n  target,\n  options?: Options\n);",lang:"typescript"}),a.a.createElement("h3",{id:"params"},a.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Params"),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"target"),a.a.createElement("td",null,"DOM \u8282\u70b9\u6216\u8005 ref"),a.a.createElement("td",null,a.a.createElement("code",null,"Element")," | ",a.a.createElement("code",null,"() => Element")," | ",a.a.createElement("code",null,"MutableRefObject<Element>")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"options"),a.a.createElement("td",null,"\u8bbe\u7f6e"),a.a.createElement("td",null,a.a.createElement("code",null,"Options")),a.a.createElement("td",null,"-")))),a.a.createElement("h3",{id:"options"},a.a.createElement(r["AnchorLink"],{to:"#options","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Options"),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"onExit"),a.a.createElement("td",null,"\u9000\u51fa\u5168\u5c4f\u89e6\u53d1"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"onEnter"),a.a.createElement("td",null,"\u5168\u5c4f\u89e6\u53d1"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"pageFullscreen"),a.a.createElement("td",null,"\u662f\u5426\u662f\u9875\u9762\u5168\u5c4f\u3002\u5f53\u53c2\u6570\u7c7b\u578b\u4e3a\u5bf9\u8c61\u65f6\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c4f\u5143\u7d20\u7684\u7c7b\u540d\u548c ",a.a.createElement("code",null,"z-index")),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")," | ",a.a.createElement("code",null,"{"," className?: string, zIndex?: number ","}")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))))),a.a.createElement("h3",{id:"result"},a.a.createElement(r["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Result"),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"isFullscreen"),a.a.createElement("td",null,"\u662f\u5426\u5168\u5c4f"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean"))),a.a.createElement("tr",null,a.a.createElement("td",null,"enterFullscreen"),a.a.createElement("td",null,"\u8bbe\u7f6e\u5168\u5c4f"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void"))),a.a.createElement("tr",null,a.a.createElement("td",null,"exitFullscreen"),a.a.createElement("td",null,"\u9000\u51fa\u5168\u5c4f"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void"))),a.a.createElement("tr",null,a.a.createElement("td",null,"toggleFullscreen"),a.a.createElement("td",null,"\u5207\u6362\u5168\u5c4f"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void"))),a.a.createElement("tr",null,a.a.createElement("td",null,"isEnabled"),a.a.createElement("td",null,"\u662f\u5426\u652f\u6301\u5168\u5c4f"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean"))))))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),n=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(o,{demos:n})}},wFzW:function(e,t,n){"use strict";var l=n("uLvW"),a=n.n(l),r=n("bIC1"),c=n.n(r);n("Awmt");function u(e,t){return E(e)||i(e,t)||o(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function i(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(m){u=!0,a=m}finally{try{c||null==n["return"]||n["return"]()}finally{if(u)throw a}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=Object(l["useRef"])(),r=Object(l["useState"])(!1),m=u(r,2),o=m[0],d=m[1],i=Object(l["useState"])(!1),E=u(i,2),s=E[0],h=E[1];return Object(l["useEffect"])((function(){var e=n.current,t=c()((function(){d(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":o||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s}}]);