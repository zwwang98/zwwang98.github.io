"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4919],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return h}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),l=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=l(t.components);return a.createElement(p.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),m=l(n),h=r,c=m["".concat(p,".").concat(h)]||m[h]||g[h]||o;return n?a.createElement(c,i(i({ref:e},s),{},{components:n})):a.createElement(c,i({ref:e},s))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},625:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return g}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],u={slug:"deploy-on-github-pages-without-repo-name",title:"How to deploy your website on github pages without repo name?",authors:{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png"},tags:["deploy on github"]},p=void 0,l={permalink:"/blog/deploy-on-github-pages-without-repo-name",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-06-22-DeployOnGithubPages/index.md",source:"@site/blog/2022-06-22-DeployOnGithubPages/index.md",title:"How to deploy your website on github pages without repo name?",description:"Situation",date:"2022-06-22T00:00:00.000Z",formattedDate:"June 22, 2022",tags:[{label:"deploy on github",permalink:"/blog/tags/deploy-on-github"}],readingTime:.86,truncated:!1,authors:[{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png",imageURL:"https://github.com/zwwang98.png"}],frontMatter:{slug:"deploy-on-github-pages-without-repo-name",title:"How to deploy your website on github pages without repo name?",authors:{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png",imageURL:"https://github.com/zwwang98.png"},tags:["deploy on github"]},prevItem:{title:"Useful Resources for Writting Blogs",permalink:"/blog/useful-resources-for-writting-blogs"},nextItem:{title:"mui",permalink:"/blog/2022/06/06/mui"}},s={authorsImageUrls:[void 0]},g=[{value:"Situation",id:"situation",level:3},{value:"Action",id:"action",level:3},{value:"Summary",id:"summary",level:3},{value:"Reference",id:"reference",level:3}],m={toc:g};function h(t){var e=t.components,u=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,u,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"situation"},"Situation"),(0,o.kt)("p",null,"When I was deploying my website on github pages, I found that the deployment url always containing my repo name. The whole url was '",(0,o.kt)("a",{parentName:"p",href:"https://zwwang98.github.io/blog'"},"https://zwwang98.github.io/blog'")," and I want it to be just '",(0,o.kt)("a",{parentName:"p",href:"https://zwwang98.github.io/'"},"https://zwwang98.github.io/'"),". Here's what I have done to solve this problem."),(0,o.kt)("h3",{id:"action"},"Action"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Changed my website's repo name into ",(0,o.kt)("inlineCode",{parentName:"p"},"<username>.github.io"),".",(0,o.kt)("br",{parentName:"p"}),"\n",'Say if your github user name is "user", then your repo for generating a github page without trailing repo name must be "user.github.io".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy it. In your repo:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"settings")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"pages")," -> choose the ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," and click ",(0,o.kt)("inlineCode",{parentName:"p"},"save")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"how to deploy on github",src:n(5581).Z,width:"2476",height:"1108"})))),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Based on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites"},"github docs"),",  "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"There are three types of GitHub Pages sites: project, user, and organization.")),(0,o.kt)("p",null,"Based on my understanding, the repo name constraints and the result github pages url are listed below:  "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Repo Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Result Site"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"project"),(0,o.kt)("td",{parentName:"tr",align:null},"any name you want"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"http(s)://<username>.github.io/<repository>"),"  or  ",(0,o.kt)("inlineCode",{parentName:"td"},"http(s)://<organization>.github.io/<repository>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"user"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<username>.github.io")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"http(s)://<username>.github.io"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"organization"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<organization>.github.io")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"http(s)://<organization>.github.io"))))),(0,o.kt)("h3",{id:"reference"},"Reference"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites"},"https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites")))}h.isMDXComponent=!0},5581:function(t,e,n){e.Z=n.p+"assets/images/how-to-deploy-on-github-c449f24618bff1ffae2428e88ddf1379.png"}}]);