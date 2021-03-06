---
slug: jsx
title: Writting Markup with JSX
authors:
  name: Ziwei Wang
  title: this website owner
  url: https://github.com/zwwang98
  image_url: https://github.com/zwwang98.png
tags: [React, React Docs(Beta) Personal Notes]
---

This is my personal notes on React Docs(Beta) - [Writting Markup with JSX](https://beta.reactjs.org/learn/writing-markup-with-jsx).  If interested, check whole series [here](https://zwwang98.github.io/blog/react-docs-beta-notes).

## What is JSX?
JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

## Why do we need JSX?
- The Web has been built on HTML(for content), CSS(for style or design) and JavaScript(for logic) and built on separate `.html`, `.css` and `.js` files. 
  However, all of them serve for the same purpose -- build something users see. 
  It makes more sense to put related things together. That is why JSX came out.
- In React, rendering logic and markup live together in the same place - component. 
  Based on my understanding, React chose to put HTML into JavaScript - that is what JSX looks like to me.
  As the [docs](https://beta.reactjs.org/learn/writing-markup-with-jsx) says:
  > Each React component is a JavaScript function that may contain some markup that React renders into the browser.
    React components use a syntax extension called JSX to represent that markup.
    JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information.
    The best way to understand this is to convert some HTML markup to JSX markup.

## Rules of JSX
1. Return a single root element
  - In a React function component, markup is returned at the end of the function.
  - We need to wrap all markup tags in one single parent tag. Usually the single parent tag will be `<div></div>` or `<></>`(called React Fragment).
  - This is because JSX looks like HTML in JavaScript, but under the hood it is transformed into plain JavaScript. 
    So in function component we are basically return something in a JavaScript function.
    JavaScript function doesn't allow multiple values unless you wrap them into an array or an object and return the array or the object.
2. Close all the tags
  > JSX requires tags to be explicitly closed: self-closing tags like `<img>` must become `<img />`, and wrapping tags like `<li>`oranges must be written as `<li>oranges</li>`.
3. camelCase most of the things
  - JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables.
  - But JavaScript has some limitations on variable names. For example, no dashes or reserved words allowed.

## Convert HTML to JSX markup
HTML and markup in React have different rules. Converting lots of things manually could be tedious.
Some [online converter](https://transform.tools/html-to-jsx) could be helpful especially when you have lots of HTML to be converted into React JSX.

## Recap
- React components group rendering logic together with markup because they are related.
- JSX is similar to HTML, with a few differences. You can use a converter if you need to.
- Error messages will often point you in the right direction to fixing your markup.




