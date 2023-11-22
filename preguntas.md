# Preguntas

## What is accessibility? How do you achieve it?

Accessibility is a set of tools, technologies, and web pages that are built to allow people 
with disabilities use them propperly.
It can be achieved mainly by oberving HTML tag and attrinutes semantics, and  WCAFG. Doing dedicated 
testing is also crucial to guarantee the desired result.

## What is the difference between session storage, local storage, and cookies?

They all are used for storing data on the client browser. It can be persistent data -local storage and cookies-  or session-specific data -session storage. But cookies can save smaller amount of data than the others.
Also, cookies are sent in the headers on every http request, and it supports cross domain accessing and the others don't. local storage is suitable for storing user preferences, some configurations, form data, caching data to achieve offline user interactions, etc. Session storage is suitable for storing specific data that's only
useful while the user is intercating with some specific process on the website, and that data gets removed as soon the user closes the tab or browser.

## Explain the javascript event loop (also may explain how promises or
## async await work in js these are basically all the same
## question/answer)

The javascript Event loop is a non-blocking process that runs on the browser or JS engine that is responsible for
executing the js code, collect and execute new events, execute queued callbacks -for timers- without blocking the process. We can say that it manages the asynchronous code in your application.
Promises are objects that represent a value that can be retrieved and used in the future, but you can define what to do with that value in advance. The event loop executes all the asynchronous code you provide on your promises callbacks.
async/await is syntatic sugar for the old then/catch promise api. With this feature you can avoid the callback hell and it improves the readability of your code. Promises also provide a rich api to deal with many aspects of the asynchronous tasks like paralellism, concurrency, race conditions, etc.

## If you are getting too many API calls being made from your hooks, what
## can you do to prevent this?

It's strongly recommended to use some libraries or solutions for fetching data that handle all the complexity related to caching, invalidation, retries, etc.
Also it's very important to avoid using the useEffect hook as much as you can. Prefer using event handlers to update your component's state when possible, and perform most calculations at render time. 
In some use cases you can use debouncing to minimize the number of api calls in compomnents like search boxes and thing like that. React provides the useDeferredValue for that.

## How do you manage the global state? And why in that way?

The global state can be managed by a centralized store which provides the updated data to all the components that subscribe to that repository changes. There also other old fashion methods like using global variables in the window object, but thismis not the best best way to manage global state. I believe the most robust solution is Redux which can integrate well to any React project. It provides you with an API to accompish all the tasks you need to perform on the central store.

## What is progressive rendering?
 
 Progressive Rendering is the technique of sequentially rendering portions of a webpage in the server and streaming it to the client in parts without waiting for the whole page to rendered.
 The browser starts to progressively render (paint) the HTML on the page as soon as a chunk for critical content is received. Non-critical content is then later rendered (paint) on the page when the browser receives it from the server.
