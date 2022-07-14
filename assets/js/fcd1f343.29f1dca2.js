"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5632],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?i.createElement(g,r(r({ref:n},u),{},{components:t})):i.createElement(g,r({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1911:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var i=t(7462),a=t(3366),o=(t(7294),t(3905)),r=["components"],l={slug:"conditional-rendering",title:"Conditional Rendering",authors:{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png"},tags:["React","React Docs(Beta) Personal Notes"]},s=void 0,c={permalink:"/blog/conditional-rendering",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-07-13-conditional-rendering/index.md",source:"@site/blog/2022-07-13-conditional-rendering/index.md",title:"Conditional Rendering",description:"This is my personal notes on React Docs(Beta) - Conditional Rendering.",date:"2022-07-13T00:00:00.000Z",formattedDate:"July 13, 2022",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"React Docs(Beta) Personal Notes",permalink:"/blog/tags/react-docs-beta-personal-notes"}],readingTime:3.315,truncated:!1,authors:[{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png",imageURL:"https://github.com/zwwang98.png"}],frontMatter:{slug:"conditional-rendering",title:"Conditional Rendering",authors:{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png",imageURL:"https://github.com/zwwang98.png"},tags:["React","React Docs(Beta) Personal Notes"]},nextItem:{title:"Rendering Lists",permalink:"/blog/rendering-lists"}},u={authorsImageUrls:[void 0]},d=[{value:"Conditionally returning JSX - plain JavaScript <code>if</code> and <code>else</code> statement",id:"conditionally-returning-jsx---plain-javascript-if-and-else-statement",level:2},{value:"Conditionally Retuning <code>null</code>",id:"conditionally-retuning-null",level:3},{value:"Conditionally including JSX - ternary operator, logic and operator and conditionally assignment",id:"conditionally-including-jsx---ternary-operator-logic-and-operator-and-conditionally-assignment",level:2},{value:"Ternary Operator <code>? : </code>",id:"ternary-operator---",level:3},{value:"Logic And Operator <code>&amp;&amp;</code>",id:"logic-and-operator-",level:3},{value:"Conditionally Assignment",id:"conditionally-assignment",level:3},{value:"Recap",id:"recap",level:2}],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is my personal notes on React Docs(Beta) - ",(0,o.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/conditional-rendering"},"Conditional Rendering"),"."),(0,o.kt)("p",null,"This doc introduces several ways of conditional rendering. Some of them may seems fancy at first glance, but down to earth they are all just JavaScript."),(0,o.kt)("h2",{id:"conditionally-returning-jsx---plain-javascript-if-and-else-statement"},"Conditionally returning JSX - plain JavaScript ",(0,o.kt)("inlineCode",{parentName:"h2"},"if")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"else")," statement"),(0,o.kt)("p",null,"Nothing fancy. Just use JavaScript's ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," statement to determine what JSX the function return."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'function Item({ name, isPacked }) {\n  if (isPacked) {\n    return <li className="item">{name} \u2714</li>;\n  }\n  return <li className="item">{name}</li>;\n}\n\nexport default function PackingList() {\n  return (\n    <section>\n      <h1>Sally Ride\'s Packing List</h1>\n      <ul>\n        <Item \n          isPacked={true} \n          name="Space suit" \n        />\n        <Item \n          isPacked={true} \n          name="Helmet with a golden leaf" \n        />\n        <Item \n          isPacked={false} \n          name="Photo of Tam" \n        />\n      </ul>\n    </section>\n  );\n}\n')),(0,o.kt)("h3",{id:"conditionally-retuning-null"},"Conditionally Retuning ",(0,o.kt)("inlineCode",{parentName:"h3"},"null")),(0,o.kt)("p",null,"In some situations, you won\u2019t want to render anything at all. For example, say you don\u2019t want to show packed items at all. A component must return something. In this case, you can return null:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'if (isPacked) {\n  return null;\n}\nreturn <li className="item">{name}</li>;\n')),(0,o.kt)("p",null,"In practice, returning null from a component isn\u2019t common because it might surprise a developer trying to render it. More often, you would conditionally include or exclude the component in the parent component\u2019s JSX. Here\u2019s how to do that!"),(0,o.kt)("h2",{id:"conditionally-including-jsx---ternary-operator-logic-and-operator-and-conditionally-assignment"},"Conditionally including JSX - ternary operator, logic and operator and conditionally assignment"),(0,o.kt)("p",null,'In the previous examples, there are some duplication. We could use some seemly "fancy" syntax to make code more ',(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"},"DRY")," including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ternary operator ",(0,o.kt)("inlineCode",{parentName:"li"},"? : ")),(0,o.kt)("li",{parentName:"ul"},"logic and operator ",(0,o.kt)("inlineCode",{parentName:"li"},"&&")),(0,o.kt)("li",{parentName:"ul"},"conditionally assignment")),(0,o.kt)("h3",{id:"ternary-operator---"},"Ternary Operator ",(0,o.kt)("inlineCode",{parentName:"h3"},"? : ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"return (\n  <li className=\"item\">\n    {isPacked ? name + ' \u2714' : name}\n  </li>\n);\n")),(0,o.kt)("p",null,"This style works well for simple conditions, but use it in moderation. If your components get messy with too much nested conditional markup, consider extracting child components to clean things up."),(0,o.kt)("h3",{id:"logic-and-operator-"},"Logic And Operator ",(0,o.kt)("inlineCode",{parentName:"h3"},"&&")),(0,o.kt)("p",null,"Inside React components, it often comes up when you want to render some JSX when the condition is true, or render nothing otherwise. With &&, you could conditionally render the checkmark only if isPacked is true:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"return (\n  <li className=\"item\">\n    {name} {isPacked && '\u2714'}\n  </li>\n);\n")),(0,o.kt)("p",null,"A JavaScript && expression returns the value of its right side (in our case, the checkmark) if the left side (our condition) is true. But if the condition is false, the whole expression becomes false. React considers false as a \u201chole\u201d in the JSX tree, just like null or undefined, and doesn\u2019t render anything in its place."),(0,o.kt)("h3",{id:"conditionally-assignment"},"Conditionally Assignment"),(0,o.kt)("p",null,"When previous shortcuts lead to a complex code, try using plain ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement again to modify variable's value.\nYou can reassign variables defined with let, so start by providing the default content you want to display in a ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," variable and reassign it in ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'function Item({ name, isPacked }) {\n  let itemContent = name;\n  if (isPacked) {\n    itemContent = name + " \u2714";\n  }\n  return (\n    <li className="item">\n      {itemContent}\n    </li>\n  );\n}\n\nexport default function PackingList() {\n  return (\n    <section>\n      <h1>Sally Ride\'s Packing List</h1>\n      <ul>\n        <Item \n          isPacked={true} \n          name="Space suit" \n        />\n        <Item \n          isPacked={true} \n          name="Helmet with a golden leaf" \n        />\n        <Item \n          isPacked={false} \n          name="Photo of Tam" \n        />\n      </ul>\n    </section>\n  );\n}\n\n')),(0,o.kt)("p",null,"This style is more verbose but it looks good to me, since this is just JavaScript reassigning variable. After all conditions checking, we insert the variable using curly braces into JSX. Period."),(0,o.kt)("h2",{id:"recap"},"Recap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In React, you control branching logic with JavaScript."),(0,o.kt)("li",{parentName:"ul"},"You can return a JSX expression conditionally with an if statement."),(0,o.kt)("li",{parentName:"ul"},"You can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces."),(0,o.kt)("li",{parentName:"ul"},"In JSX, ",(0,o.kt)("inlineCode",{parentName:"li"},"{cond ? <A /> : <B />}")," means \u201cif cond, render ",(0,o.kt)("inlineCode",{parentName:"li"},"<A />, otherwise <B />\u201d.")),(0,o.kt)("li",{parentName:"ul"},"In JSX, ",(0,o.kt)("inlineCode",{parentName:"li"},"{cond && <A />}")," means \u201cif cond, render ",(0,o.kt)("inlineCode",{parentName:"li"},"<A />"),", otherwise nothing\u201d."),(0,o.kt)("li",{parentName:"ul"},"The shortcuts are common, but you don\u2019t have to use them if you prefer plain ",(0,o.kt)("inlineCode",{parentName:"li"},"if"),".")))}m.isMDXComponent=!0}}]);