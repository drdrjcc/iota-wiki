"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[53608,29514,1755],{62630:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=n(67294),r=n(69075),o=n(88746),l=n(11614);function i(e){var t=e.year,n=e.posts;return a.createElement(a.Fragment,null,a.createElement("h3",null,t),a.createElement("ul",null,n.map((function(e){return a.createElement("li",{key:e.metadata.date},a.createElement(o.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function s(e){var t=e.years;return a.createElement("section",{className:"margin-vert--lg"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},t.map((function(e,t){return a.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},a.createElement(i,e))})))))}function c(e){var t,n,o=e.archive,i=(0,l.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),c=(0,l.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),u=(t=o.blogPosts,n=t.reduceRight((function(e,t){var n=t.metadata.date.split("-")[0],a=e.get(n)||[];return e.set(n,[t].concat(a))}),new Map),Array.from(n,(function(e){return{year:e[0],posts:e[1]}})));return a.createElement(r.Z,{title:i,description:c},a.createElement("header",{className:"hero hero--primary"},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},i),a.createElement("p",{className:"hero__subtitle"},c))),a.createElement("main",null,u.length>0&&a.createElement(s,{years:u})))}},15502:function(e,t,n){var a=n(67294).createContext(void 0);t.Z=a},26266:function(e,t,n){var a=n(67294),r=n(15502);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},8311:function(e,t,n){n.d(t,{Z:function(){return r}});var a=[{name:"Youtube",icon:"\ue907"},{name:"GitHub",icon:"\ue902"},{name:"Discord",icon:"\ue900"},{name:"Twitter",icon:"\ue906"},{name:"Reddit",icon:"\ue905"},{name:"LinkedIn",icon:"\ue904"},{name:"Instagram",icon:"\ue903"},{name:"Facebook",icon:"\ue901"}];function r(e){for(var t=0;t<a.length;t++)if(e.toLowerCase().includes(a[t].name.toLowerCase()))return a[t];return null}},81602:function(e,t,n){n.d(t,{Z:function(){return _}});var a=n(87462),r=n(63366),o=n(67294),l=n(86010),i=n(88746),s=n(86881),c=n(51402),u=n(45697),m=n.n(u),d=n(92603),f=n(8311);function v(e){var t=e.url,n=e.backgroundColor,a=(0,f.Z)(t);return o.createElement("a",{className:"social__link padding-horiz--sm padding-vert--md",style:{backgroundColor:n},href:t},o.createElement("div",{className:"social__font social__icon"},a.icon),o.createElement("div",{className:"social__title"},a.name))}v.propTypes={url:m().string,backgroundColor:m().string};var p=function(){var e=(0,s.LU)().socials;return o.createElement("div",{className:"social"},e&&e.map((function(e,t){return o.createElement(v,(0,a.Z)({key:t},e))})))},b=["to","href","label","prependBaseUrlToHref"];function g(e){var t=e.to,n=e.href,l=e.label,s=e.prependBaseUrlToHref,u=(0,r.Z)(e,b),m=(0,c.Z)(t),d=(0,c.Z)(n,{forcePrependBaseUrl:!0});return o.createElement(i.Z,(0,a.Z)({className:"footer__link-item"},n?{href:s?d:n}:{to:m},u),l)}g.propTypes={to:m().string,href:m().string,label:m().string,prependBaseUrlToHref:m().bool};var h=function(e){var t=e.sources,n=e.alt;return o.createElement(d.Z,{className:"footer__logo",alt:n,sources:t})};h.propTypes={sources:m().shape({light:m().string,dark:m().string}),alt:m().string};var _=function(){var e=(0,s.LU)().footer,t=e||{},n=t.copyright,a=t.links,r=void 0===a?[]:a,u=t.logo,m=void 0===u?{}:u,d={light:(0,c.Z)(m.src),dark:(0,c.Z)(m.srcDark||m.src)};return e?o.createElement("footer",{className:(0,l.Z)("footer","padding--none",{"footer--dark":"dark"===e.style})},o.createElement("div",{className:"container"},r&&r.length>0&&o.createElement("div",{className:"row footer__links padding-vert--xl"},r.map((function(e,t){return o.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.createElement("li",{key:e.href||e.to,className:"footer__item"},o.createElement(g,e))}))):null)}))),(m||n)&&o.createElement("div",{className:"footer__bottom padding-bottom--xl"},m&&(m.src||m.srcDark)&&o.createElement("div",null,m.href?o.createElement(i.Z,{href:m.href},o.createElement(h,{alt:m.alt,sources:d})):o.createElement(h,{alt:m.alt,sources:d})),n?o.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null)),o.createElement(p,null)):null}},94288:function(e,t,n){n.d(t,{Z:function(){return D}});var a=n(87462),r=n(67294),o=n(86010),l=n(11614),i=n(43101),s=n(45697),c=n.n(s),u=n(86881),m=n(5730),d=(0,r.memo)((function(e){var t=e.className,n=e.styles,a=e.icons,l=e.checked,i=e.disabled,s=e.onChange,c=(0,r.useState)(l),u=c[0],m=c[1],d=(0,r.useState)(!1),f=d[0],v=d[1],p=(0,r.useRef)(null);return r.createElement("div",{className:(0,o.Z)("toggle",t,{"toggle--checked":u,"toggle--focused":f,"toggle--disabled":i}),role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=p.current)?void 0:e.click()}},r.createElement("div",{className:"toggle__icon toggle__icon--unchecked",style:n.unchecked},a.unchecked),r.createElement("div",{className:"toggle__icon toggle__icon--checked",style:n.checked},a.checked),r.createElement("input",{ref:p,checked:u,type:"checkbox",className:"toggle__screenreader-only","aria-label":"Switch between dark and light mode",onChange:s,onClick:function(){return m(!u)},onFocus:function(){return v(!0)},onBlur:function(){return v(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=p.current)||t.click())}}))}));function f(e){var t=(0,u.LU)().colorMode.switchConfig,n=t.darkIcon,o=t.darkIconStyle,l=t.lightIcon,i=t.lightIconStyle,s=(0,m.Z)();return r.createElement(d,(0,a.Z)({disabled:!s,styles:{unchecked:i,checked:o},icons:{unchecked:l,checked:n}},e))}d.displayName="ToggleMemo",d.propTypes={className:c().string,styles:c().shape({unchecked:c().any,checked:c().any}),icons:c().shape({unchecked:c().string,checked:c().string}),checked:c().bool,disabled:c().bool,onChange:c().func};var v=n(26266),p=n(98565),b=n(74909),g=n(27213),h=n(57617),_=n(64408),E=n(90974),k=n(3089),y=n(45962),N={toggle:"toggle_2xs0",navbarHideable:"navbarHideable_1VR7",navbarHidden:"navbarHidden_1FmO",navbarSidebarToggle:"navbarSidebarToggle_nWi-"},Z="right";function w(){return(0,u.LU)().navbar.items}function C(){var e=(0,u.LU)().colorMode.disableSwitch,t=(0,v.Z)(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?o():a()}),[a,o]),disabled:e}}function T(e){var t,n=e.sidebarShown,a=e.toggleSidebar,o=null==(t=(0,u.g8)())?void 0:t({toggleSidebar:a}),l=(0,u.D9)(o),i=(0,r.useState)((function(){return!1})),s=i[0],c=i[1];(0,r.useEffect)((function(){o&&!l&&c(!0)}),[o,l]);var m=!!o;return(0,r.useEffect)((function(){m?n||c(!0):c(!1)}),[n,m]),{shown:s,hide:(0,r.useCallback)((function(){c(!1)}),[]),content:o}}function S(e){var t=e.sidebarShown,n=e.toggleSidebar;(0,b.Z)(t);var i=w(),s=C(),c=T({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(E.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&r.createElement(f,{className:N.navbarSidebarToggle,checked:s.isDarkTheme,onChange:s.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},r.createElement(y.Z,{color:"var(--ifm-color-emphasis-600)",className:N.navbarSidebarCloseSvg}))),r.createElement("div",{className:(0,o.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":c.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},i.map((function(e,t){return r.createElement(_.Z,(0,a.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},i.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:c.hide},r.createElement(l.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),c.content)))}T.propTypes={sidebarShown:c().bool,toggleSidebar:c().bool},S.propTypes={sidebarShown:c().bool,toggleSidebar:c().func};var D=function(){var e,t=(0,u.LU)().navbar,n=t.hideOnScroll,l=t.style,s=function(){var e=(0,g.Z)(),t="mobile"===e,n=(0,r.useState)(!1),a=n[0],o=n[1];(0,u.Rb)((function(){if(a)return o(!1),!1}));var l=(0,r.useCallback)((function(){o((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&o(!1)}),[e]),{shouldRender:t,toggle:l,shown:a}}(),c=C(),m=(0,h.gA)(),d=(0,p.Z)(n),v=d.navbarRef,b=d.isNavbarVisible,y=w(),T=y.some((function(e){return"search"===e.type})),D=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:Z)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:Z)}))}}(y),x=D.leftItems,B=D.rightItems;return r.createElement("nav",{ref:v,className:(0,o.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===l,"navbar--primary":"primary"===l,"navbar-sidebar--show":s.shown},e[N.navbarHideable]=n,e[N.navbarHidden]=n&&!b,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},r.createElement(E.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),x.map((function(e,t){return r.createElement(_.Z,(0,a.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},B.map((function(e,t){return r.createElement(_.Z,(0,a.Z)({},e,{key:t}))})),r.createElement("div",{className:"navbar__item navbar__item--dock"},!c.disabled&&r.createElement(f,{className:N.toggle,checked:c.isDarkTheme,onChange:c.toggle}),!T&&r.createElement(i.Z,null),((null==y?void 0:y.length)>0||m)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:s.toggle,onKeyDown:s.toggle},r.createElement(k.Z,null))))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:s.toggle}),s.shouldRender&&r.createElement(S,{sidebarShown:s.shown,toggleSidebar:s.toggle}))}},78358:function(e,t,n){n.d(t,{O:function(){return g}});var a=n(87462),r=n(63366),o=n(67294),l=n(86010),i=n(45697),s=n.n(i),c=n(88746),u=n(51402),m=n(13617),d=n(71699),f=["activeBasePath","activeBaseRegex","to","href","label","sublabel","icon","activeClassName","prependBaseUrlToHref"],v=["className","isDropdownItem"],p=["className"],b=["mobile","to","label"];function g(e){var t=e.activeBasePath,n=e.activeBaseRegex,l=e.to,i=e.href,s=e.label,v=e.sublabel,p=e.icon,b=e.activeClassName,g=void 0===b?"navbar__link--active":b,h=e.prependBaseUrlToHref,_=(0,r.Z)(e,f),E=(0,u.Z)(l),k=(0,u.Z)(t),y=(0,u.Z)(i,{forcePrependBaseUrl:!0}),N=s&&i&&!(0,d.Z)(i),Z="dropdown__link--active"===g;return o.createElement(c.Z,(0,a.Z)({},i?{href:h?y:i}:Object.assign({isNavLink:!0,activeClassName:g,to:E},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(k)}}:null),_),o.createElement("div",{className:"link"},p&&o.createElement("div",{className:"link__icon"},p),o.createElement("div",{className:"link__body"},o.createElement("div",{className:"link__label"},N?o.createElement("span",null,s,o.createElement(m.Z,Z&&{width:12,height:12})):s),v&&o.createElement("div",{className:"link__sublabel"},v))))}function h(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,s=(0,r.Z)(e,v),c=o.createElement(g,(0,a.Z)({className:(0,l.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},s));return i?o.createElement("li",null,c):c}function _(e){var t=e.className,n=(0,r.Z)(e,p);return delete n.isDropdownItem,o.createElement("li",{className:"menu__list-item"},o.createElement(g,(0,a.Z)({className:(0,l.Z)("menu__link",t)},n)))}function E(e){var t=e.mobile,n=void 0!==t&&t,l=e.to,i=e.label,s=(0,r.Z)(e,b);if(delete s.position,"category-header"===l){return o.createElement("li",{style:{fontSize:"10px",color:"var(--ifm-color-emphasis-600)",paddingTop:"10px"}},i)}var c=n?_:h;return o.createElement(c,(0,a.Z)({to:l,label:i},s))}g.propTypes={activeBasePath:s().string,activeBaseRegex:s().string,to:s().string,href:s().string,label:s().string,sublabel:s().string,icon:s().string,activeClassName:s().string,prependBaseUrlToHref:s().bool},g.defaultProps={activeClassName:"navbar__link--active"},h.propTypes={className:s().string,isDropdownItem:s().bool},h.defaultProps={isDropdownItem:!1},_.propTypes={className:s().string},E.propTypes={mobile:s().bool,to:s().string,label:s().string},E.defaultProps={mobile:!1},t.Z=E},61142:function(e,t,n){var a=n(87462),r=n(63366),o=n(67294),l=n(86010),i=n(45697),s=n.n(i),c=n(86881),u=n(78358),m=n(64408),d=["items","position","className"],f=["items","className"],v=["mobile"];function p(e,t){return!!(0,c.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function b(e){var t,n=e.items,i=e.position,s=e.className,f=(0,r.Z)(e,d),v=(0,o.useRef)(null),b=(0,o.useRef)(null),g=(0,o.useState)(!1),h=g[0],_=g[1],E=function(e,t,n){var a=t.filter((function(e){return p(e,n)}));return a.length?Object.assign({},a[0],{label:e.label+" > "+a[0].label}):e}(f,n,(0,c.be)());return(0,o.useEffect)((function(){var e=function(e){v.current&&!v.current.contains(e.target)&&_(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[v]),o.createElement("div",{ref:v,className:(0,l.Z)("dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":h})},o.createElement(u.O,(0,a.Z)({className:(0,l.Z)("navbar__item navbar__link",s)},E,{onClick:f.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),_(!h))}}),null!=(t=f.children)?t:f.label),o.createElement("ul",{ref:b,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(m.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),_(!1);var a=v.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function g(e){var t,n=e.items,i=e.className,s=(0,r.Z)(e,f);delete s.position;var d=(0,c.be)(),v=function(e,t){return e.some((function(e){return p(e,t)}))}(n,d),b=(0,c.uR)({initialState:function(){return!v}}),g=b.collapsed,h=b.toggleCollapsed,_=b.setCollapsed;return(0,o.useEffect)((function(){v&&_(!v)}),[d,v]),o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":g})},o.createElement(u.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",i)},s,{onClick:function(e){e.preventDefault(),h()}}),null!=(t=s.children)?t:s.label),o.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return o.createElement(m.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:s.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function h(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,v);delete a.isDropdownItem;var l=n?g:b;return o.createElement(l,a)}b.propTypes=Object.assign({items:s().array,position:s().string,className:s().string},u.O.propTypes),g.propTypes=Object.assign({items:s().array,className:s().string},u.O.propTypes),h.propTypes={mobile:s().bool},h.defaultProps={mobile:!1},t.Z=h},64408:function(e,t,n){n.d(t,{Z:function(){return R}});var a=n(87462),r=n(63366),o=n(67294),l=n(45697),i=n.n(l),s=n(78358),c=n(61142),u=n(86010),m=n(86881),d=n(98565),f=["items","label","className"],v=["className","to","href","label"],p=["items_","layout","position","className"],b=["items_","className"],g=["mobile"];function h(e,t){return!!(0,m.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||e.activeBasePath&&t.startsWith(e.activeBasePath))}function _(e,t){return e.some((function(e){return h(e,t)}))}function E(e){var t,n=e.items,a=e.label,o=e.className,l=(0,r.Z)(e,f),i={items:[],index:0};n?(a&&i.items.push({label:a,className:o}),(t=i.items).push.apply(t,n)):i.items.push(Object.assign({label:a,className:o},l));return i}function k(e){var t=e.className,n=e.to,l=e.href,i=e.label,c=(0,r.Z)(e,v);if(n||l)return o.createElement(s.O,(0,a.Z)({className:(0,u.Z)("dropdown__link",t),activeClassName:"dropdown__link--active",to:n,href:l,label:i},c));if(i)return o.createElement("div",{className:"dropdown__label"},i);throw"Mega dropdown item must be a link or a category header."}function y(e){var t=[];return e.map((function(e){e.items.map((function(e){t.push(e)}))})),t}function N(e,t,n){var a=t.filter((function(e){return h(e,n)}));return a.length?{activeBaseRegex:a[0].activeBaseRegex,label:e.label+" | "+a[0].label}:e}function Z(e){var t,n=e.items_,l=e.layout,i=e.position,c=e.className,f=(0,r.Z)(e,p),v=(0,m.be)(),b=(0,o.useRef)(null),g=(0,o.useState)(!1),h=g[0],Z=g[1],w=(0,m.LU)().navbar.hideOnScroll,C=(0,d.Z)(w).isNavbarVisible,T=n.map(E),S=y(n),D=N(f,S,(0,m.be)()),x=_(S,v),B=l.length,I=Math.max.apply(Math,l.map((function(e){return e.split(/\s+/).length}))),R=[];l.forEach((function(e,t){e.split(/\s+/).forEach((function(e,n){e&&"."!==e&&(R[t+n*B]=e)}))}));for(var O=R.map((function(e){var t,n=T[e];if(n)return null!=(t=n.items[n.index++])?t:null})),L=[],P=null,M=0;M<B;M++){for(var U=[],H=0;H<I;H++){var A=O[M+H*B];U.push(A),A&&(P=A)}L.push(U)}return P.onKeyDown=function(e){"Tab"===e.key&&Z(!1)},(0,o.useEffect)((function(){C||Z(!1)}),[C]),(0,o.useEffect)((function(){var e=function(e){b.current&&!b.current.contains(e.target)&&Z(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[b]),o.createElement("div",{ref:b,className:(0,u.Z)("dropdown","dropdown--hoverable","dropdown--mega",{"dropdown--right":"right"===i,"dropdown--show":h}),onMouseLeave:function(){return Z(!1)}},o.createElement(s.O,(0,a.Z)({className:(0,u.Z)("navbar__item navbar__link",c,{"navbar__link--active":x})},D,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),Z(!h))},onMouseEnter:function(){return Z(!0)}}),null!=(t=f.children)?t:f.label),o.createElement("div",{className:"dropdown__container"},o.createElement("div",{className:"dropdown__menu"},L.map((function(e,t){return o.createElement("div",{className:"row row--no-gutters dropdown__row",key:t},e.map((function(e,t){return o.createElement("div",{className:"col margin-horiz--xs dropdown__col",key:t},e?o.createElement(k,e):null)})))})))))}function w(e){var t=e.items_,n=e.className,l=(0,r.Z)(e,b);delete l.position,delete l.layout;var i=(0,m.be)(),c=y(t),d=N(l,c,(0,m.be)()),f=_(c,i),v=(0,m.uR)({initialState:function(){return!f}}),p=v.collapsed,g=v.toggleCollapsed,h=v.setCollapsed;return(0,o.useEffect)((function(){f&&h(!f)}),[i,f]),o.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":p})},o.createElement(s.O,(0,a.Z)({role:"button",className:(0,u.Z)("menu__link menu__link--sublist",n)},l,{onClick:function(e){e.preventDefault(),g()}}),d),o.createElement(m.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:p},t.map((function(e,t){return o.createElement(R,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:l.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function C(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,g),l=n?w:Z;return o.createElement(l,a)}k.propTypes={className:i().string,to:i().string,href:i().string,label:i().string},Z.propTypes=Object.assign({items_:i().array,layout:i().arrayOf(i().string),position:i().string,className:i().string},s.O.propTypes),w.propTypes=Object.assign({items_:i().array,className:i().string},s.O.propTypes),C.propTypes={mobile:i().bool},C.defaultProps={mobile:!1};var T=C,S=n(39362),D=n(62437),x=["type","items","layout"],B={default:function(){return s.Z},localeDropdown:function(){return S.Z},search:function(){return D.Z},dropdown:function(){return c.Z},megaDropdown:function(){return T},docsVersion:function(){return n(39693).Z},docsVersionDropdown:function(){return n(74493).Z},doc:function(){return n(72907).Z}};function I(e){var t=e.type,n=e.items,l=e.layout,i=(0,r.Z)(e,x),s=function(e,t,n){return n?"megaDropdown":e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n,void 0!==l),c=function(e){var t=B[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(s);return o.createElement(c,(0,a.Z)({items:n,layout:l},i))}I.propTypes={type:i().string,items:i().array,layout:i().arrayOf(i().string)};var R=I},43101:function(e,t,n){var a=n(87462),r=n(63366),o=n(67294),l=n(73935),i=n(6832),s=n(76775),c=n(51402),u=n(88746),m=n(51300),d=n(53158),f=n(57052),v=n(64136),p=n(1649),b=n(11614),g=n(45697),h=n.n(g),_=["contextualSearch"],E=null;function k(e){var t=e.hit,n=e.children;return o.createElement(u.Z,{to:t.url},n)}function y(e){var t=e.state,n=e.onClose,a=(0,d.Z)().generateSearchPageLink;return o.createElement(u.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function N(e){var t,u,d=e.contextualSearch,g=(0,r.Z)(e,_),h=(0,i.Z)().siteMetadata,N=(0,p.Z)(),Z=null!=(t=null==(u=g.searchParameters)?void 0:u.facetFilters)?t:[],w=d?[].concat(N,Z):Z,C=Object.assign({},g.searchParameters,{facetFilters:w}),T=(0,c.C)().withBaseUrl,S=(0,s.k6)(),D=(0,o.useRef)(null),x=(0,o.useRef)(null),B=(0,o.useState)(!1),I=B[0],R=B[1],O=(0,o.useState)(null),L=O[0],P=O[1],M=(0,o.useCallback)((function(){return E?Promise.resolve():Promise.all([n.e(50831).then(n.bind(n,50831)),Promise.all([n.e(40532),n.e(46945)]).then(n.bind(n,46945)),Promise.all([n.e(40532),n.e(69393)]).then(n.bind(n,69393))]).then((function(e){var t=e[0].DocSearchModal;E=t}))}),[]),U=(0,o.useCallback)((function(){M().then((function(){D.current=document.createElement("div"),document.body.insertBefore(D.current,document.body.firstChild),R(!0)}))}),[M,R]),H=(0,o.useCallback)((function(){R(!1),D.current.remove()}),[R]),A=(0,o.useCallback)((function(e){M().then((function(){R(!0),P(e.key)}))}),[M,R,P]),F=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;S.push(t)}}).current,j=(0,o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:T(""+t.pathname+t.hash)})}))})).current,z=(0,o.useMemo)((function(){return function(e){return o.createElement(y,(0,a.Z)({},e,{onClose:H}))}}),[H]);z.displayName="resultsFooterComponent";var V=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",h.docusaurusVersion),e}),[h.docusaurusVersion]);(0,f.D)({isOpen:I,onOpen:U,onClose:H,onInput:A,searchButtonRef:x});var K=(0,b.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(m.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+g.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement("div",null,o.createElement(v.a,{onTouchStart:M,onFocus:M,onMouseOver:M,onClick:U,ref:x,translations:{buttonText:K,buttonAriaLabel:K}})),I&&(0,l.createPortal)(o.createElement(E,(0,a.Z)({onClose:H,initialScrollY:window.scrollY,initialQuery:L,navigator:F,transformItems:j,hitComponent:k,resultsFooterComponent:z,transformSearchClient:V},g,{searchParameters:C})),D.current))}k.propTypes={hit:h().node,children:h().node},y.propTypes={state:h().node,onClose:h().func},t.Z=function(){var e=(0,i.Z)().siteConfig;return o.createElement(N,e.themeConfig.algolia)}}}]);