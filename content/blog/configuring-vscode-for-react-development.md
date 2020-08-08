---
date_published: '2020-03-04T18:31:09Z'
tags:
- tooling
- vscode
- react
title: Configuring VSCode for React development
excerpt: The best possibilities in VSCode that will simplify and enhance your productivity
cover_image: "/uploads/vscode.jpeg"
cover: "/uploads/vscode.jpeg"
date: 2020-08-04T20:15:00.000+00:00

---
***

### Extensions

#### VSCode React Refactor 🛠

![](https://cdn-images-1.medium.com/max/800/1*VGH6EvG59Cu_QBz53hbfbw.gif)Recomposing with VS Code React Refactor

This simple extension will help you to split your code into different components faster. It also handles Hooks API, key attributes and function bindings. Give it a try!

[**VSCode React Refactor — Visual Studio Marketplace**  
marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=planbcoding.vscode-react-refactor "https://marketplace.visualstudio.com/items?itemName=planbcoding.vscode-react-refactor")

***

#### React Snippets ♻

Snippet extensions save a lot of time on typing common code constructions in React like creating a new component or connecting Redux.

![](https://cdn-images-1.medium.com/max/800/1*Rj_kVmthlszsTngEHzug5A.gif)Readable React Snippets in action

You may already use popular ones like [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets) or [ES7 React/Redux.. snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets), they are pretty similar.   
Alternatively, you can try the extension I created for myself called [Readable React Snippets](https://marketplace.visualstudio.com/items?itemName=nick-rudenko.readable-react-snippets), I would be happy 😁

***

#### Bracket Pair Colorizer 2 🌈

It’s easy to get lost into brackets and parentheses in JavaScript. This extension helps to untangle your code by colorizing matching brackets.

[**Bracket Pair Colorizer 2 — Visual Studio Marketplace**  
 marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2 "https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2")

***

#### Import Cost 🧐

![](https://cdn-images-1.medium.com/max/800/1*LbfI4D9XXiZYS1Slwsys5g.gif)68 kb saved!

Import Cost keeps an eye on the package size you importing. Simple and extremely useful.

[**Import Cost — Visual Studio Marketplace**  
marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost "https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost")

***

#### ES6 Import Formatter 📐

![](https://cdn-images-1.medium.com/max/800/1*0zQiPWcZ9aR3omFHDLIQnQ.gif)Sorting imports easily

Sorts imports alphabetically in the following order:  
1\. `Built-ins and modules from third parties`   
2\. `Modules from the current project`   
3\. `Stylesheets or other assets`

Alternatively, you can use the default alphabetical import sorting in VSCode:   
`Select imports > Source action… > Organize imports`

[**ES6 Import Formatter — Visual Studio Marketplace**  
marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=henry-li.vscode-import-formatter "https://marketplace.visualstudio.com/items?itemName=henry-li.vscode-import-formatter")

***

#### css2react 🎨

![](https://cdn-images-1.medium.com/max/800/1*yz0Vik2LYg9mo_XYKb3AEw.gif)css2react conversion

If you work with styles in React you may find this useful. It converts CSS to React inline syntax and vice versa. Select your styles and press _`Ctrl+Alt+C`_ (_`Cmd+Option+C`_).

[**css2react — Visual Studio Marketplace**  
marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=gottfired.css2react "https://marketplace.visualstudio.com/items?itemName=gottfired.css2react")

***

#### vscode-styled-components 💅

![](https://cdn-images-1.medium.com/max/800/1*VrAXILOO58GOd2hEbCPfdA.jpeg)Without and with vscode-styled-components

Syntax highlighting and IntelliSense for styled-components 👀

[**vscode-styled-components — Visual Studio Marketplace**  
marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components "https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components")

***

### Tools 🛠

#### ESLint + Prettier🔥🔥🔥

I am sure that these two need no introduction. You may already have some config running. If not yet, here are some best guides for you:

1. [Setup with Git Hooks](https://medium.com/@yaroslavberkut/prettier-eslint-for-react-how-to-kiss-f309789681a6) by Yaroslav Berkut.
2. An [advanced setup](https://www.youtube.com/watch?v=lHAeK8t94as) by Wes Bos.

***

#### Debugging 🔧

You can debug your React app with Chrome. Here is the simplest instruction on how to start the debugging process:

1. Install the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension.
2. Press `F5` and select Chrome. In the root directory, this will create a folder `.vscode` with `launch.json` inside.
3. Open `launch.json` and make sure that `url` has the correct port specified. This is where your app will be served. It is often[`http://localhost:3000`](http://localhost:3000).

    “configurations”: [{  “type”: “chrome”,  “request”: “launch”,  “name”: “Launch Chrome against localhost”,  “url”: “http://localhost:3000",  “webRoot”: “${workspaceFolder}”}]

4\. Set a breakpoint by clicking 🔴 on the left of the line numbers or include the `debugger` keyword in your code.

5\. Start your app by running `npm start` in the terminal.

6\. Press `F5` in VSCode and happy debugging 🔧

More information:  
[Debugging React](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial#_debugging-react)  
[Debugging](https://code.visualstudio.com/docs/editor/debugging)

***

### Hidden features ✨

#### Save without formatting 🙅

Sometimes you don’t want to run the autoformatting on save. Instead of pressing familiar _`Ctrl+S` (`Cmd+S`),_ press _`Ctrl+K, then S` (`Cmd+K, then S`)._

***

#### Editing hacks 😎

Fast and efficient editing is as useful as using snippets. I highly recommend you to learn them from the official documentation 👉 [Editing Hacks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_editing-hacks)

***

#### Breadcrumbs 🍞

![](https://cdn-images-1.medium.com/max/800/1*QsRlg7pNoZbbuFYCGJPu_g.gif)Using Breadcrumbs

The breadcrumbs navigation lets you jump between files and code faster. To enable this feature simply add `”breadcrumbs.enabled”: true` to your `settings.json`.

***

#### Emmet in JSX ☄

It is possible to enable Emmet abbreviations for JSX. And yeah, it will automatically write `className` instead of `class`. Add the following lines to your `settings.json`:

    "emmet.includeLanguages": {  "javascript": "javascriptreact"}

***

#### Absolute path imports 🤖

You can clean up your imports by using an absolute path instead of a relative one.

![](https://cdn-images-1.medium.com/max/800/1*NZq4EoQMuhPc6XOPaI05pA.jpeg)Relative path (‘../../’) vs absolute path

1. Create a `.env` file in the root of your project and define `NODE_PATH=src/` inside.
2. (Optional) For Intellisense auto imports to work properly, create `jsconfig.json` in the root folder and add the following lines:

    {  “compilerOptions”: {    “target”: “ES6”,    “module”: “commonjs”,    “allowSyntheticDefaultImports”: true,    “baseUrl”: “./src/”,    “paths”: {       “*”: [“*”]    }  },  “exclude”: [“node_modules”, “**/node_modules/*”]}

***

#### npm scripts explorer 🔎

![](https://cdn-images-1.medium.com/max/800/1*uUu8ObJcCAEfV6RN0nxCkg.gif)Starting the app, not from terminal

This will simply gather all your npm scripts in a little section of the sidebar for easier access. Add `“npm.enableScriptExplorer”: true` to your `settings.json`.

***

I hope you liked the list and picked up something for yourself. If I missed something cool, please, share it in the comments. I’d love to know 🙂

#### Links:

[VS Code Can Do That?](https://vscodecandothat.com/)  
[VS Code Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)  
[Using React in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)  
[Editing Hacks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_editing-hacks)  
[Setting Up Your Editor](https://facebook.github.io/create-react-app/docs/setting-up-your-editor)  
[Prettier + ESLint for React. How to KISS](https://medium.com/@yaroslavberkut/prettier-eslint-for-react-how-to-kiss-f309789681a6)  
[ESLint + Prettier + VS Code — The Perfect Setup](https://www.youtube.com/watch?v=lHAeK8t94as)