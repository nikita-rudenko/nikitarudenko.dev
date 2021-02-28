---
date: 2021-02-18T15:13:58.000+00:00
tags:
- javascript
title: 'Breaking down: debounce'
excerpt: Decomposing and explaining components of the debounce
hero-image: https://res.cloudinary.com/nikita-rudenko/image/upload/v1614519371/nikita-rudenko.dev/debounce-hero-image.png
heroImage: https://res.cloudinary.com/nikita-rudenko/image/upload/v1614521389/nikita-rudenko.dev/debounce-hero-image.jpg

---
Recently I have been asked to write a debounce function on a whiteboard. Even though I have used debounce quite often, this task made me feel confused. I had the necessary components in my mind but trouble putting them together quickly.

In this blog post, I will decompose my debounce implementation into components and try to explain them one-by-one. It can be useful for everyone who uses Javascript but can't call themselves advanced.

### What is the debounce?

Here is an explanation of the **debounce** in simple words:

> **A debounce function** is a rate limiter. It allows you to call a function as many times as you want knowing that it will only fire once after a given delay. You
> use them when you’re waiting for some event that may happen repeatedly, but you only care about the final state.

And here is a simple visual demo:
![Simple debounce demo.](https://res.cloudinary.com/nikita-rudenko/image/upload/v1613758959/nikita-rudenko.dev/simple-debounce-demo.gif)

Before opening the spoiler below, I encourage you to imagine what your version might look like.

<details>
<summary>Final version</summary>
<div>

```js
function debounce(func, delayMs) {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  }
}
```

[Open in CodeSandbox](https://codesandbox.io/s/simple-debounce-demo-nv5jd?file=src/index.js)

</div>
</details>

---

## Let's break it down

Here’s an example function we will debounce:

```js
function logCurrentTime() {
  console.log(new Date().toLocaleTimeString("en-GB"));
}
```

The debounce function must have two important pieces of functionality:

1. **Delayed call**: it must not call the function right away but schedule a call to a particular point in the future.
1. **Restartable delay**: if the delayed call is requested again, it must be able to restart the delay.

### Delayed call

Let's start with writing a `delay` function that will provide a convenient wrapper for delaying any function:

```js
function logCurrentTime() {
  console.log(new Date().toLocaleTimeString("en-GB"));
}

function delay(fn, delayMs) {
  function callLater() {
    setTimeout(fn, delayMs);
  }

  return callLater;
}

const delayedLogCurrentTime = delay(logCurrentTime, 2000);

logCurrentTime(); // logs time immediately
delayedLogCurrentTime(); // logs time 2 seconds later
```

The `delay` function accepts a function argument `fn`, bakes it in with delay functionality, and returns a reference to that functional wrapper. The returned reference can be stored in a variable (`delayedLogCurrentTime`) and used any time in the future.

Let's define the important parts:

1. The `delay` function is a perfect example of a [higher-order function](https://en.wikipedia.org/wiki/Higher-order_function). It does both things that higher-order functions do: takes functions as arguments and returns a function as its result.

2. The `fn` argument and the returned `callLater` function are [callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) meaning they are intended to be invoked later. Hence "call-back" or "call-later".

3. The `delay` function is a wrapper that can be used around any function. It enhances the functionality of the original function without modifying it. We can state that the `delay` function implements the [Decorator pattern](https://en.wikipedia.org/wiki/Decorator_pattern).

### Restartable delay

For creating a working debounce, our current implementation of the `delay` function must maintain control over the timeout across callback calls:

```js
  function logCurrentTime(locale = "en-GB") {
    console.log(new Date().toLocaleTimeString(locale));
  }

  function debounce(fn, delayMs) {
    let timeoutId;

    function callLater() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(fn, delayMs);
    }

    return callLater;
  }

const debouncedLogCurrentTime = debounce(logCurrentTime, 2000);
```

Here we have added the `timeoutId` variable inside of the `debounce` function. On every invocation of the `callLater` that returns from `debounce`, the last timeout will be cleared and a new ID will be assigned to `timeoutId` from the `setTimeout` call.

For persisting the state of the timeout, we use the scope of the `debounce` function which will be accessible inside the return function via [a closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures). In my opinion, closures are one of the easiest and hardest concepts to understand in JS.

A visual scheme of our code:
![Debounce function.](https://res.cloudinary.com/nikita-rudenko/image/upload/v1614457658/nikita-rudenko.dev/debounce-function.jpg)

On the image above you can see `timeoutId` variable highlighted in purple and three scopes:

- global (gray)
- `debounce` (orange)
- `callLater` (blue)

A closure is the combination of a **function** and its **lexical environment** (variables in outer scopes). Closures are created at the function creation time. In the case of the `callLater` function, it has the access to any variables located inside `debounce` (outer function's) and global scopes.


> <i>"Functions can be defined inside of other functions. The inner function has access to the vars and
> parameters of the outer function. If a reference to an inner function survives (for example, as a 
> callback function), the outer function's vars also survive."</i>
> <br/>
> <br/>
> Definition of **a closure** by [Douglas Crockford](https://www.crockford.com/javascript/survey.html)

Let's take a closer look at how we use `debounce`:

```js
const debouncedLogCurrentTime = debounce(logCurrentTime, 2000);
```

The `debounce` is called **only once** and creates **a single** `timeoutId` variable inside and exposes a function that can see and modify that variable.

A visual scheme of how `debounce` implementation maps to the usage:
![Debounce function usage.](https://res.cloudinary.com/nikita-rudenko/image/upload/v1614457658/nikita-rudenko.dev/debounce-function-and-usage.jpg)

> Think of closures as a localized global state. Its global state localized to the scope of the closure, rather than the actual scope. From the perspective of the returned callback, `timeoutId` is a global state. From the perspective of someone consuming our `debounce` function, `timeoutId` is a hidden state.

Also, it's important to understand that every `debounce` function invocation creates a new function instance with its own `timeoutId`. For example:

```js
const debouncedLogCurrentTime = debounce(logCurrentTime, 2000);
const debouncedLogSomething = debounce(logSomething, 2000);
```

`debouncedLogCurrentTime` and `debouncedLogSomething` will spawn independent `debounce` function instances with their own `timeoutId` variables.

### Improvements

The current `debounce` implementation works fine:

<details>
<summary>A version before improvements</summary>
<div>

```js
function debounce(func, delayMs) {
  let timeout;

  function callLater(...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  }

  return callLater;
}
```
</div>
</details>

However, I would like to make a few improvements, explain what problem they solve, and how it works. 

#### Providing original `this` and arguments

Due to the dynamic nature of how `this` works in JavaScript, it would be good to make sure that normal function invocation and debounced invocation will have the same `this` reference and arguments:

```js
function debounce(func, delayMs) {
  let timeout;

  function callLater(...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  }

  return callLater;
}

regularButton.addEventListener("click", runExpensiveTask);
debouncedButton.addEventListener("click", debounce(runExpensiveTask, 2000));
```

It has three changes:

1. Uses `apply` instead of simple invocation with parenthesis. `this` will now work as expected inside of the scope of applied function. For example, in this case, `this` will reference the button DOM element: 

```js
debouncedButton.addEventListener("click", debounce(runExpensiveTask, 2000));
```

2. `setTimeout` can "steal" `this` and set it to the `window` (or another global object). To avoid this behavior, we put an arrow function as the first argument. `this` now will be inherited from the `callLater` function.

3. As we use the `apply` method now, we need to forward the original arguments. Every function declared with a `function` keyword has access to a special `arguments` object. We explicitly get a list of all arguments by spreading `...args` and provide as the second argument to `apply`.

Recommended:

- [Scheduling: setTimeout and setInterval](https://javascript.info/settimeout-setinterval)
- [Decorators and forwarding, call/apply](https://javascript.info/call-apply-decorators)

#### Using an anonymous function

The `callLater` function has no other usages except the one with `return`. It can be easily turned into an anonymous function that gets returned inline:

```js
function debounce(func, delayMs) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  }
}
```

Note that we can't use an **arrow** anonymous function because it has neither access to the `arguments` object nor `this` bindings.

Recommended:

- [Arrow functions revisited](https://javascript.info/arrow-functions)

## Summary

Functions are the core of JavaScript and are not be as easy as they appear. This practical example with debounce makes use of many concepts in just 11 lines of code: higher-order function, callbacks, decorator, scope, closure, lexical environment, arguments, `this` binding, alternative invocation with `apply`, and types of functions. Identifying these components in code that you use every day can help to write better code.

<details>
<summary>Final version</summary>
<div>

```js
function debounce(func, delayMs) {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  }
}
```
</div>
</details>


## Further reading

- [Advanced working with functions](https://javascript.info/advanced-functions)
- [How do JavaScript closures work?](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work)
- [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Gentle Explanation of "this" in JavaScript](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)
- [Debounce Vs Throttle: Definitive Visual Guide](https://redd.one/blog/debounce-vs-throttle)

<br>

Special thanks to [@username_ZAYDEK](https://twitter.com/username_ZAYDEK) and [@nyxerys](https://twitter.com/nyxerys)