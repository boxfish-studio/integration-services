"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3089,9514,6237],{37542:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(63366),r=a(67294),l=a(86010),o=a(69075),i=a(88746),s="sidebar_2ahu",c="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",p=a(11614);function b(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=["sidebar","toc","children"];var f=function(e){var t=e.sidebar,a=e.toc,i=e.children,s=(0,n.Z)(e,v),c=t&&t.items.length>0;return r.createElement(o.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},c&&r.createElement("aside",{className:"col col--3"},r.createElement(b,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&r.createElement("div",{className:"col col--2"},a))))}},9410:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(67294),r=a(6832),l=a(37542),o=a(23579),i=a(88746),s=a(11614);var c=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(i.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(i.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(86881);var u=function(e){var t=e.metadata,a=e.items,i=e.sidebar,s=(0,r.Z)().siteConfig.title,u=t.blogDescription,d=t.blogTitle,g="/"===t.permalink?s:d;return n.createElement(l.Z,{title:g,description:u,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:i},a.map((function(e){var t=e.content;return n.createElement(o.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(c,{metadata:t}))}},63865:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(86010),l=a(88746),o="tag_1Okp",i="tagRegular_3MiF",s="tagWithCount_1HU1";var c=function(e){var t,a=e.permalink,c=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(o,(t={},t[i]=!m,t[s]=m,t))},c,m&&n.createElement("span",null,m))}},41921:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(86010),l=a(11614),o=a(63865),i="tags_2ga9",s="tag_11ep";function c(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(i,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:s},n.createElement(o.Z,{name:t,permalink:a}))}))))}},8311:function(e,t,a){a.d(t,{Z:function(){return r}});var n=[{name:"Youtube",icon:"\ue907"},{name:"GitHub",icon:"\ue902"},{name:"Discord",icon:"\ue900"},{name:"Twitter",icon:"\ue906"},{name:"Reddit",icon:"\ue905"},{name:"LinkedIn",icon:"\ue904"},{name:"Instagram",icon:"\ue903"},{name:"Facebook",icon:"\ue901"}];function r(e){for(var t=0;t<n.length;t++)if(e.toLowerCase().includes(n[t].name.toLowerCase()))return n[t];return null}},23579:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(67294),r=a(45697),l=a.n(r),o=a(86010),i=a(3905),s=a(11614),c=a(88746),m=a(51402),u=a(86881),d=a(27365),g=a(80098),p={blogHeader:"blogHeader_11Jz",blogPostTitle:"blogPostTitle_nmLu",blogPost__body:"blogPost__body_1F6N",blogPostData:"blogPostData_3WzT",blogPostDetailsFull:"blogPostDetailsFull_3bEF",blogPostDataContainer:"blogPostDataContainer_1pWc"},b=a(41921),v="image_1yU8";var f=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,o=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},o&&n.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:v,src:o,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(c.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},h="authorCol_1R69";function _(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var r;return n.createElement("div",{className:(0,o.Z)("col col--6",h),key:t},n.createElement(f,{author:Object.assign({},e,{imageURL:null!=(r=a.authorsImageUrls[t])?r:e.imageURL})}))})))}function E(e){var t,a,r,l,v=(r=(0,u.c2)().selectMessage,function(e){var t=Math.ceil(e);return r(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=(0,m.C)().withBaseUrl,h=e.children,E=e.frontMatter,N=e.assets,k=e.metadata,Z=e.truncated,y=e.isBlogPostPage,w=void 0!==y&&y,T=k.date,C=k.formattedDate,P=k.permalink,S=k.tags,D=k.readingTime,x=k.title,R=k.editUrl,B=k.authors,I=null!=(t=N.image)?t:E.image,L=E.url;return n.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(l=w?"h1":"h2",n.createElement("header",{className:p.blogHeader},n.createElement(l,{className:p.blogPostTitle,itemProp:"headline"},w?x:n.createElement(c.Z,{itemProp:"url",to:L||P},x)),n.createElement("div",{className:"row row--no-gutters"},n.createElement("div",{className:"col"},n.createElement(_,{authors:B,assets:N})),n.createElement("div",{className:(0,o.Z)(p.blogPostData,"margin-vert--md","col")},n.createElement("div",{className:p.blogPostDataContainer},n.createElement("time",{dateTime:T,itemProp:"datePublished"},C),void 0!==D&&n.createElement(n.Fragment,null," \xb7 ",v(D))))))),I&&n.createElement("meta",{itemProp:"image",content:f(I,{absolute:!0})}),n.createElement("div",{className:(0,o.Z)("markdown",[p.blogPost__body]),itemProp:"articleBody"},n.createElement(i.Zo,{components:d.Z},h)),(S.length>0||Z)&&n.createElement("footer",{className:(0,o.Z)("row docusaurus-mt-lg",(a={},a[p.blogPostDetailsFull]=w,a))},S.length>0&&n.createElement("div",{className:(0,o.Z)("col",{"col--9":!w})},n.createElement("div",{className:p.tagsList},n.createElement(b.Z,{tags:S}))),w&&R&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(g.Z,{editUrl:R})),!w&&Z&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(c.Z,{to:k.permalink,"aria-label":"Read more about "+x},n.createElement("b",null,n.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}E.propTypes={children:l().node,frontMatter:l().object,assets:l().object,metadata:l().shape({date:l().string,formattedDate:l().string,permalink:l().string,tags:l().arrayOf(l().object),readingTime:l().string,title:l().string,editUrl:l().string,authors:l().arrayOf(l().object)}),truncated:l().bool,isBlogPostPage:l().bool},E.defaultProps={isBlogPostPage:!1};var N=E},80098:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(67294),r=a(11614),l=a(87462),o=a(63366),i=a(86010),s="iconEdit_2_ui",c=["className"],m=function(e){var t=e.className,a=(0,o.Z)(e,c);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(76775),d=a(51402),g=a(52426),p=a(57617);function b(e){var t=e.editUrl,a=(0,u.TH)().pathname,l=(0,p.gA)(),o=(0,g.usePluginData)("docusaurus-plugin-docs-editor"),i=function(){if(l){var e=a;return a.startsWith("/")&&(e=e.slice(1)),"/"+o.route+"/"+e}}();return n.createElement(n.Fragment,null,i&&n.createElement(n.Fragment,null,n.createElement("a",{href:(0,d.Z)(i),target:"_blank",rel:"noreferrer noopener"},"Open in editor"),n.createElement("span",{className:"margin-horiz--sm"},"|")),n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Open on GitHub")))}var v=a(45697),f=a.n(v);function h(e){var t=e.editUrl,a=function(e){var t=new RegExp("external/[^/]*/","i");return e.replace(t,"")}(t);return n.createElement(n.Fragment,null,function(e){return new RegExp("external/[^/]*/","i").test(e)}(t)?n.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page")):n.createElement(b,{editUrl:t}))}h.propTypes={editUrl:f().string};var _=h},81602:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(87462),r=a(63366),l=a(67294),o=a(86010),i=a(88746),s=a(86881),c=a(51402),m=a(45697),u=a.n(m),d=a(92603),g=a(8311);function p(e){var t=e.url,a=e.backgroundColor,n=(0,g.Z)(t);return l.createElement("a",{className:"social__link padding-horiz--sm padding-vert--md",style:{backgroundColor:a},href:t},l.createElement("div",{className:"social__font social__icon"},n.icon),l.createElement("div",{className:"social__title"},n.name))}p.propTypes={url:u().string,backgroundColor:u().string};var b=function(){var e=(0,s.LU)().socials;return l.createElement("div",{className:"social"},e&&e.map((function(e,t){return l.createElement(p,(0,n.Z)({key:t},e))})))},v=["to","href","label","prependBaseUrlToHref"];function f(e){var t=e.to,a=e.href,o=e.label,s=e.prependBaseUrlToHref,m=(0,r.Z)(e,v),u=(0,c.Z)(t),d=(0,c.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(i.Z,(0,n.Z)({className:"footer__link-item"},a?{href:s?d:a}:{to:u},m),o)}f.propTypes={to:u().string,href:u().string,label:u().string,prependBaseUrlToHref:u().bool};var h=function(e){var t=e.sources,a=e.alt;return l.createElement(d.Z,{className:"footer__logo",alt:a,sources:t})};h.propTypes={sources:u().shape({light:u().string,dark:u().string}),alt:u().string};var _=function(){var e=(0,s.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,m=t.logo,u=void 0===m?{}:m,d={light:(0,c.Z)(u.src),dark:(0,c.Z)(u.srcDark||u.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer","padding--none",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links padding-vert--xl"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(f,e))}))):null)}))),(u||a)&&l.createElement("div",{className:"footer__bottom padding-bottom--xl"},u&&(u.src||u.srcDark)&&l.createElement("div",null,u.href?l.createElement(i.Z,{href:u.href},l.createElement(h,{alt:u.alt,sources:d})):l.createElement(h,{alt:u.alt,sources:d})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null)),l.createElement(b,null)):null}},94288:function(e,t,a){a.d(t,{Z:function(){return S}});var n=a(87462),r=a(67294),l=a(86010),o=a(11614),i=a(43101),s=a(45697),c=a.n(s),m=a(86881),u=a(5730),d=(0,r.memo)((function(e){var t=e.className,a=e.styles,n=e.icons,o=e.checked,i=e.disabled,s=e.onChange,c=(0,r.useState)(o),m=c[0],u=c[1],d=(0,r.useState)(!1),g=d[0],p=d[1],b=(0,r.useRef)(null);return r.createElement("div",{className:(0,l.Z)("toggle",t,{"toggle--checked":m,"toggle--focused":g,"toggle--disabled":i}),role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=b.current)?void 0:e.click()}},r.createElement("div",{className:"toggle__icon toggle__icon--unchecked",style:a.unchecked},n.unchecked),r.createElement("div",{className:"toggle__icon toggle__icon--checked",style:a.checked},n.checked),r.createElement("input",{ref:b,checked:m,type:"checkbox",className:"toggle__screenreader-only","aria-label":"Switch between dark and light mode",onChange:s,onClick:function(){return u(!m)},onFocus:function(){return p(!0)},onBlur:function(){return p(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=b.current)||t.click())}}))}));function g(e){var t=(0,m.LU)().colorMode.switchConfig,a=t.darkIcon,l=t.darkIconStyle,o=t.lightIcon,i=t.lightIconStyle,s=(0,u.Z)();return r.createElement(d,(0,n.Z)({disabled:!s,styles:{unchecked:i,checked:l},icons:{unchecked:o,checked:a}},e))}d.displayName="ToggleMemo",d.propTypes={className:c().string,styles:c().shape({unchecked:c().any,checked:c().any}),icons:c().shape({unchecked:c().string,checked:c().string}),checked:c().bool,disabled:c().bool,onChange:c().func};var p=a(26266),b=a(98565),v=a(74909),f=a(27213),h=a(57617),_=a(64408),E=a(90974),N=a(3089),k=a(45962),Z={toggle:"toggle_2xs0",navbarHideable:"navbarHideable_1VR7",navbarHidden:"navbarHidden_1FmO",navbarSidebarToggle:"navbarSidebarToggle_nWi-"},y="right";function w(){return(0,m.LU)().navbar.items}function T(){var e=(0,m.LU)().colorMode.disableSwitch,t=(0,p.Z)(),a=t.isDarkTheme,n=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:a,toggle:(0,r.useCallback)((function(e){return e.target.checked?l():n()}),[n,l]),disabled:e}}function C(e){var t,a=e.sidebarShown,n=e.toggleSidebar,l=null==(t=(0,m.g8)())?void 0:t({toggleSidebar:n}),o=(0,m.D9)(l),i=(0,r.useState)((function(){return!1})),s=i[0],c=i[1];(0,r.useEffect)((function(){l&&!o&&c(!0)}),[l,o]);var u=!!l;return(0,r.useEffect)((function(){u?a||c(!0):c(!1)}),[a,u]),{shown:s,hide:(0,r.useCallback)((function(){c(!1)}),[]),content:l}}function P(e){var t=e.sidebarShown,a=e.toggleSidebar;(0,v.Z)(t);var i=w(),s=T(),c=C({sidebarShown:t,toggleSidebar:a});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(E.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&r.createElement(g,{className:Z.navbarSidebarToggle,checked:s.isDarkTheme,onChange:s.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:a},r.createElement(k.Z,{color:"var(--ifm-color-emphasis-600)",className:Z.navbarSidebarCloseSvg}))),r.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":c.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},i.map((function(e,t){return r.createElement(_.Z,(0,n.Z)({mobile:!0},e,{onClick:a,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},i.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:c.hide},r.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),c.content)))}C.propTypes={sidebarShown:c().bool,toggleSidebar:c().bool},P.propTypes={sidebarShown:c().bool,toggleSidebar:c().func};var S=function(){var e,t=(0,m.LU)().navbar,a=t.hideOnScroll,o=t.style,s=function(){var e=(0,f.Z)(),t="mobile"===e,a=(0,r.useState)(!1),n=a[0],l=a[1];(0,m.Rb)((function(){if(n)return l(!1),!1}));var o=(0,r.useCallback)((function(){l((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&l(!1)}),[e]),{shouldRender:t,toggle:o,shown:n}}(),c=T(),u=(0,h.gA)(),d=(0,b.Z)(a),p=d.navbarRef,v=d.isNavbarVisible,k=w(),C=k.some((function(e){return"search"===e.type})),S=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:y)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:y)}))}}(k),D=S.leftItems,x=S.rightItems;return r.createElement("nav",{ref:p,className:(0,l.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":s.shown},e[Z.navbarHideable]=a,e[Z.navbarHidden]=a&&!v,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},r.createElement(E.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),D.map((function(e,t){return r.createElement(_.Z,(0,n.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},x.map((function(e,t){return r.createElement(_.Z,(0,n.Z)({},e,{key:t}))})),r.createElement("div",{className:"navbar__item navbar__item--dock"},!c.disabled&&r.createElement(g,{className:Z.toggle,checked:c.isDarkTheme,onChange:c.toggle}),!C&&r.createElement(i.Z,null),((null==k?void 0:k.length)>0||u)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:s.toggle,onKeyDown:s.toggle},r.createElement(N.Z,null))))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:s.toggle}),s.shouldRender&&r.createElement(P,{sidebarShown:s.shown,toggleSidebar:s.toggle}))}},78358:function(e,t,a){a.d(t,{O:function(){return f}});var n=a(87462),r=a(63366),l=a(67294),o=a(86010),i=a(45697),s=a.n(i),c=a(88746),m=a(51402),u=a(13617),d=a(71699),g=["activeBasePath","activeBaseRegex","to","href","label","sublabel","icon","activeClassName","prependBaseUrlToHref"],p=["className","isDropdownItem"],b=["className"],v=["mobile","to","label"];function f(e){var t=e.activeBasePath,a=e.activeBaseRegex,o=e.to,i=e.href,s=e.label,p=e.sublabel,b=e.icon,v=e.activeClassName,f=void 0===v?"navbar__link--active":v,h=e.prependBaseUrlToHref,_=(0,r.Z)(e,g),E=(0,m.Z)(o),N=(0,m.Z)(t),k=(0,m.Z)(i,{forcePrependBaseUrl:!0}),Z=s&&i&&!(0,d.Z)(i),y="dropdown__link--active"===f;return l.createElement(c.Z,(0,n.Z)({},i?{href:h?k:i}:Object.assign({isNavLink:!0,activeClassName:f,to:E},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(N)}}:null),_),l.createElement("div",{className:"link"},b&&l.createElement("div",{className:"link__icon"},b),l.createElement("div",{className:"link__body"},l.createElement("div",{className:"link__label"},Z?l.createElement("span",null,s,l.createElement(u.Z,y&&{width:12,height:12})):s),p&&l.createElement("div",{className:"link__sublabel"},p))))}function h(e){var t=e.className,a=e.isDropdownItem,i=void 0!==a&&a,s=(0,r.Z)(e,p),c=l.createElement(f,(0,n.Z)({className:(0,o.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},s));return i?l.createElement("li",null,c):c}function _(e){var t=e.className,a=(0,r.Z)(e,b);return delete a.isDropdownItem,l.createElement("li",{className:"menu__list-item"},l.createElement(f,(0,n.Z)({className:(0,o.Z)("menu__link",t)},a)))}function E(e){var t=e.mobile,a=void 0!==t&&t,o=e.to,i=e.label,s=(0,r.Z)(e,v);if(delete s.position,"category-header"===o){return l.createElement("li",{style:{fontSize:"10px",color:"var(--ifm-color-emphasis-600)",paddingTop:"10px"}},i)}var c=a?_:h;return l.createElement(c,(0,n.Z)({to:o,label:i},s))}f.propTypes={activeBasePath:s().string,activeBaseRegex:s().string,to:s().string,href:s().string,label:s().string,sublabel:s().string,icon:s().string,activeClassName:s().string,prependBaseUrlToHref:s().bool},f.defaultProps={activeClassName:"navbar__link--active"},h.propTypes={className:s().string,isDropdownItem:s().bool},h.defaultProps={isDropdownItem:!1},_.propTypes={className:s().string},E.propTypes={mobile:s().bool,to:s().string,label:s().string},E.defaultProps={mobile:!1},t.Z=E},61142:function(e,t,a){var n=a(87462),r=a(63366),l=a(67294),o=a(86010),i=a(45697),s=a.n(i),c=a(86881),m=a(78358),u=a(64408),d=["items","position","className"],g=["items","className"],p=["mobile"];function b(e,t){return!!(0,c.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function v(e){var t,a=e.items,i=e.position,s=e.className,g=(0,r.Z)(e,d),p=(0,l.useRef)(null),v=(0,l.useRef)(null),f=(0,l.useState)(!1),h=f[0],_=f[1],E=function(e,t,a){var n=t.filter((function(e){return b(e,a)}));return n.length?Object.assign({},n[0],{label:e.label+" > "+n[0].label}):e}(g,a,(0,c.be)());return(0,l.useEffect)((function(){var e=function(e){p.current&&!p.current.contains(e.target)&&_(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[p]),l.createElement("div",{ref:p,className:(0,o.Z)("dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":h})},l.createElement(m.O,(0,n.Z)({className:(0,o.Z)("navbar__item navbar__link",s)},E,{onClick:g.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),_(!h))}}),null!=(t=g.children)?t:g.label),l.createElement("ul",{ref:v,className:"dropdown__menu"},a.map((function(e,t){return l.createElement(u.Z,(0,n.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===a.length-1&&"Tab"===e.key){e.preventDefault(),_(!1);var n=p.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function f(e){var t,a=e.items,i=e.className,s=(0,r.Z)(e,g);delete s.position;var d=(0,c.be)(),p=function(e,t){return e.some((function(e){return b(e,t)}))}(a,d),v=(0,c.uR)({initialState:function(){return!p}}),f=v.collapsed,h=v.toggleCollapsed,_=v.setCollapsed;return(0,l.useEffect)((function(){p&&_(!p)}),[d,p]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":f})},l.createElement(m.O,(0,n.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",i)},s,{onClick:function(e){e.preventDefault(),h()}}),null!=(t=s.children)?t:s.label),l.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},a.map((function(e,t){return l.createElement(u.Z,(0,n.Z)({mobile:!0,isDropdownItem:!0,onClick:s.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function h(e){var t=e.mobile,a=void 0!==t&&t,n=(0,r.Z)(e,p);delete n.isDropdownItem;var o=a?f:v;return l.createElement(o,n)}v.propTypes=Object.assign({items:s().array,position:s().string,className:s().string},m.O.propTypes),f.propTypes=Object.assign({items:s().array,className:s().string},m.O.propTypes),h.propTypes={mobile:s().bool},h.defaultProps={mobile:!1},t.Z=h},64408:function(e,t,a){a.d(t,{Z:function(){return B}});var n=a(87462),r=a(63366),l=a(67294),o=a(45697),i=a.n(o),s=a(78358),c=a(61142),m=a(86010),u=a(86881),d=a(98565),g=["items","label","className"],p=["className","to","href","label"],b=["items_","layout","position","className"],v=["items_","className"],f=["mobile"];function h(e,t){return!!(0,u.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||e.activeBasePath&&t.startsWith(e.activeBasePath))}function _(e,t){return e.some((function(e){return h(e,t)}))}function E(e){var t,a=e.items,n=e.label,l=e.className,o=(0,r.Z)(e,g),i={items:[],index:0};a?(n&&i.items.push({label:n,className:l}),(t=i.items).push.apply(t,a)):i.items.push(Object.assign({label:n,className:l},o));return i}function N(e){var t=e.className,a=e.to,o=e.href,i=e.label,c=(0,r.Z)(e,p);if(a||o)return l.createElement(s.O,(0,n.Z)({className:(0,m.Z)("dropdown__link",t),activeClassName:"dropdown__link--active",to:a,href:o,label:i},c));if(i)return l.createElement("div",{className:"dropdown__label"},i);throw"Mega dropdown item must be a link or a category header."}function k(e){var t=[];return e.map((function(e){e.items.map((function(e){t.push(e)}))})),t}function Z(e,t,a){var n=t.filter((function(e){return h(e,a)}));return n.length?{activeBaseRegex:n[0].activeBaseRegex,label:e.label+" | "+n[0].label}:e}function y(e){var t,a=e.items_,o=e.layout,i=e.position,c=e.className,g=(0,r.Z)(e,b),p=(0,u.be)(),v=(0,l.useRef)(null),f=(0,l.useState)(!1),h=f[0],y=f[1],w=(0,u.LU)().navbar.hideOnScroll,T=(0,d.Z)(w).isNavbarVisible,C=a.map(E),P=k(a),S=Z(g,P,(0,u.be)()),D=_(P,p),x=o.length,R=Math.max.apply(Math,o.map((function(e){return e.split(/\s+/).length}))),B=[];o.forEach((function(e,t){e.split(/\s+/).forEach((function(e,a){e&&"."!==e&&(B[t+a*x]=e)}))}));for(var I=B.map((function(e){var t,a=C[e];if(a)return null!=(t=a.items[a.index++])?t:null})),L=[],O=null,U=0;U<x;U++){for(var M=[],F=0;F<R;F++){var H=I[U+F*x];M.push(H),H&&(O=H)}L.push(M)}return O.onKeyDown=function(e){"Tab"===e.key&&y(!1)},(0,l.useEffect)((function(){T||y(!1)}),[T]),(0,l.useEffect)((function(){var e=function(e){v.current&&!v.current.contains(e.target)&&y(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[v]),l.createElement("div",{ref:v,className:(0,m.Z)("dropdown","dropdown--hoverable","dropdown--mega",{"dropdown--right":"right"===i,"dropdown--show":h}),onMouseLeave:function(){return y(!1)}},l.createElement(s.O,(0,n.Z)({className:(0,m.Z)("navbar__item navbar__link",c,{"navbar__link--active":D})},S,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),y(!h))},onMouseEnter:function(){return y(!0)}}),null!=(t=g.children)?t:g.label),l.createElement("div",{className:"dropdown__container"},l.createElement("div",{className:"dropdown__menu"},L.map((function(e,t){return l.createElement("div",{className:"row row--no-gutters dropdown__row",key:t},e.map((function(e,t){return l.createElement("div",{className:"col margin-horiz--xs dropdown__col",key:t},e?l.createElement(N,e):null)})))})))))}function w(e){var t=e.items_,a=e.className,o=(0,r.Z)(e,v);delete o.position,delete o.layout;var i=(0,u.be)(),c=k(t),d=Z(o,c,(0,u.be)()),g=_(c,i),p=(0,u.uR)({initialState:function(){return!g}}),b=p.collapsed,f=p.toggleCollapsed,h=p.setCollapsed;return(0,l.useEffect)((function(){g&&h(!g)}),[i,g]),l.createElement("li",{className:(0,m.Z)("menu__list-item",{"menu__list-item--collapsed":b})},l.createElement(s.O,(0,n.Z)({role:"button",className:(0,m.Z)("menu__link menu__link--sublist",a)},o,{onClick:function(e){e.preventDefault(),f()}}),d),l.createElement(u.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},t.map((function(e,t){return l.createElement(B,(0,n.Z)({mobile:!0,isDropdownItem:!0,onClick:o.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function T(e){var t=e.mobile,a=void 0!==t&&t,n=(0,r.Z)(e,f),o=a?w:y;return l.createElement(o,n)}N.propTypes={className:i().string,to:i().string,href:i().string,label:i().string},y.propTypes=Object.assign({items_:i().array,layout:i().arrayOf(i().string),position:i().string,className:i().string},s.O.propTypes),w.propTypes=Object.assign({items_:i().array,className:i().string},s.O.propTypes),T.propTypes={mobile:i().bool},T.defaultProps={mobile:!1};var C=T,P=a(39362),S=a(62437),D=["type","items","layout"],x={default:function(){return s.Z},localeDropdown:function(){return P.Z},search:function(){return S.Z},dropdown:function(){return c.Z},megaDropdown:function(){return C},docsVersion:function(){return a(39693).Z},docsVersionDropdown:function(){return a(74493).Z},doc:function(){return a(72907).Z}};function R(e){var t=e.type,a=e.items,o=e.layout,i=(0,r.Z)(e,D),s=function(e,t,a){return a?"megaDropdown":e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==a,void 0!==o),c=function(e){var t=x[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(s);return l.createElement(c,(0,n.Z)({items:a,layout:o},i))}R.propTypes={type:i().string,items:i().array,layout:i().arrayOf(i().string)};var B=R},43101:function(e,t,a){var n=a(87462),r=a(63366),l=a(67294),o=a(73935),i=a(6832),s=a(76775),c=a(51402),m=a(88746),u=a(51300),d=a(53158),g=a(57052),p=a(64136),b=a(1649),v=a(11614),f=a(45697),h=a.n(f),_=["contextualSearch"],E=null;function N(e){var t=e.hit,a=e.children;return l.createElement(m.Z,{to:t.url},a)}function k(e){var t=e.state,a=e.onClose,n=(0,d.Z)().generateSearchPageLink;return l.createElement(m.Z,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function Z(e){var t,m,d=e.contextualSearch,f=(0,r.Z)(e,_),h=(0,i.Z)().siteMetadata,Z=(0,b.Z)(),y=null!=(t=null==(m=f.searchParameters)?void 0:m.facetFilters)?t:[],w=d?[].concat(Z,y):y,T=Object.assign({},f.searchParameters,{facetFilters:w}),C=(0,c.C)().withBaseUrl,P=(0,s.k6)(),S=(0,l.useRef)(null),D=(0,l.useRef)(null),x=(0,l.useState)(!1),R=x[0],B=x[1],I=(0,l.useState)(null),L=I[0],O=I[1],U=(0,l.useCallback)((function(){return E?Promise.resolve():Promise.all([a.e(831).then(a.bind(a,50831)),Promise.all([a.e(532),a.e(6945)]).then(a.bind(a,46945)),Promise.all([a.e(532),a.e(9393)]).then(a.bind(a,69393))]).then((function(e){var t=e[0].DocSearchModal;E=t}))}),[]),M=(0,l.useCallback)((function(){U().then((function(){S.current=document.createElement("div"),document.body.insertBefore(S.current,document.body.firstChild),B(!0)}))}),[U,B]),F=(0,l.useCallback)((function(){B(!1),S.current.remove()}),[B]),H=(0,l.useCallback)((function(e){U().then((function(){B(!0),O(e.key)}))}),[U,B,O]),A=(0,l.useRef)({navigate:function(e){var t=e.itemUrl;P.push(t)}}).current,j=(0,l.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:C(""+t.pathname+t.hash)})}))})).current,z=(0,l.useMemo)((function(){return function(e){return l.createElement(k,(0,n.Z)({},e,{onClose:F}))}}),[F]);z.displayName="resultsFooterComponent";var V=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",h.docusaurusVersion),e}),[h.docusaurusVersion]);(0,g.D)({isOpen:R,onOpen:M,onClose:F,onInput:H,searchButtonRef:D});var W=(0,v.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(u.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+f.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement("div",null,l.createElement(p.a,{onTouchStart:U,onFocus:U,onMouseOver:U,onClick:M,ref:D,translations:{buttonText:W,buttonAriaLabel:W}})),R&&(0,o.createPortal)(l.createElement(E,(0,n.Z)({onClose:F,initialScrollY:window.scrollY,initialQuery:L,navigator:A,transformItems:j,hitComponent:N,resultsFooterComponent:z,transformSearchClient:V},f,{searchParameters:T})),S.current))}N.propTypes={hit:h().node,children:h().node},k.propTypes={state:h().node,onClose:h().func},t.Z=function(){var e=(0,i.Z)().siteConfig;return l.createElement(Z,e.themeConfig.algolia)}}}]);