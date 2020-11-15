---
date: 2020-11-14T15:13:58Z
tags:
- tooling
- guide
title: Mastering VSCode
excerpt: Sharing my experience with the best code editor

---
VSCode is the ultimate multi-purpose code editor that can fit in any workflow. It has a lot of hidden features and a huge variety of extensions that can take your work experience to a new level. It’s hard to find and keep track of everything, so in this post I will share my experience. Even though this guide is a bit JavaScript/TypeScript-centric, I believe everyone can pick up something new.

## Shortcuts

I am sure you already know the basic shortcuts for editing, and I want to focus on the most interesting and useful ones. I will use **shortcut names** since the actual keybindings are different depending on your OS. You can open Keyboard Shortcuts in your VSCode instance by clicking on the cogwheel in the Activity Bar to look up the combination.

### Essentials

**Show All Commands** - the most powerful shortcut which opens a search through all commands. You can explore and execute any command from here.

**Go to file...** - opens a search through all files and paths in your workspace. Also, shows a list of recently opened files/tabs.

### Editing essentials

**Trigger Suggest** - invokes Intellisense. I love using it to discover possible props and destructible values from objects.

**Copy line up/down** - not just line as the name states! Also works for copying selections.

**Go to Bracket** - underrated shortcut for Javascript that helps to untangle parenthesis and brackets by jumping between matching brackets.

**Quick Fix...** - triggers suggestions for refactoring and fixing issues, if the lightbulb is shown next to the gutter.

**Format Document** - makes messy code look better.

### **Refactor Inspect**

**Go to Definition** - peek definition and its references.

**Rename Symbol** - rename value and all its occurrences.

**Find** - perform a search in the current file.

**Replace** - find and replace in the current file.

**File: Compare Active File with Saved** - open a diff of the last saved file state and unsaved changes.

### **Tab management**

**Switch tabs** - opens a list of currently opened tabs which is great for iterating between files you are working on.

**Reopen closed tab** - prevents your frustration after closing a tab you didn't want to.

### **History-based Navigation**

**Go back** - return to the last editing location or tab.

**Go forward** - undo for **Go back.**

**Go to Last Edit Location** - return to the place of your last edit after traveling through imports.

### **Quick access**

**View: Toggle Integrated Terminal** - focus, hide, or show the terminal inside VSCode.

**View: Show Search** - jump to the global search across all files in your workspace.

Additionally, there are [editing hacks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_editing-hacks) in the VSCode docs that worth learning.

![Laptop.](https://res.cloudinary.com/nikita-rudenko/image/upload/v1605476102/nikita-rudenko.dev/laptop.jpg "Photo by Blake Connally on Unsplash")

## Extensions

VSCode utilizes the addon-first approach. Even the basic features are based on extensions (search for "@builtin" in the extensions tab). It means that before starting to work with some new technology, you should consider looking up extensions for it first.

Sharing my list of the most useful and carefully selected extensions I use in my daily workflow:

[**IntelliCode**](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) - gives AI boost to Intellisense and tries to make suggestions more useful.

[**GitLens**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - an essential Swiss army knife for work with Git.

[**GitGraph**](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph "GitGraph") - adds a visual representation of the history of your Git repo.

[**Git Stash**](https://marketplace.visualstudio.com/items?itemName=arturock.gitstash) - used as an addition for GitLens to work with git stash, adds a stash explorer to the Source Control tab, and ability to see diffs.

[**Conventional Commits**](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) - awesome extension that allows writing [conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/) with ease and gitmojis.

[**Back & Forth** ](https://marketplace.visualstudio.com/items?itemName=nick-rudenko.back-n-forth)- navigate through recent files and edits using UI buttons. By the way, I am the author :)

[**Project Manager**](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager) - I find to work with VSCode workspaces confusing. This extension makes it easy to switch between projects.

[**EditorConfig**](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - support cross-editor formatting rules.

[**Live Server**](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - serve plain HTML website on localhost.

[**Live Share**](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) - a killer VSCode extension that takes pair programming to the highest level.

[**Resource Monitor**](https://marketplace.visualstudio.com/items?itemName=mutantdino.resourcemonitor) - a small dashboard with live stats of your machine.

[**Grammarly (unofficial)**](https://marketplace.visualstudio.com/items?itemName=znck.grammarly) - a popular grammar checker useful for Markdown.

[**Test Explorer UI** ](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer)- adds a tree of tests and can be extended with complementary extensions for various testing tools.

**Favorite themes:** [**OneDark Pro**](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme), [**GitHub theme**](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme), [**Secunda**](https://marketplace.visualstudio.com/items?itemName=ruj.secunda), [Kaia Theme](https://marketplace.visualstudio.com/items?itemName=ryan0x200.kaia-theme-vscode).

**Favorite icon themes:** [**Material Icon theme**](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme), [**Awoo**](https://marketplace.visualstudio.com/items?itemName=metalcanine.awoo)**.**

#### Front-end extensions:

[**ESLint**](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - essential static analysis tool that prevents huge amount of potential bugs. I can't imagine my life without ESLint.

[**Prettier**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - essential code formatter that helps keep codebase clean. Can be used in combination with ESLint so formatting errors are shown as lint errors ([guide](https://medium.com/@yaroslavberkut/prettier-eslint-for-react-how-to-kiss-f309789681a6)).

[**Quokka**](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode) - a Javascript runner used for creating and debugging algorithms

[**Debugger for Chrome**](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)  - run debugger right inside VSCode

[**Document This**](https://marketplace.visualstudio.com/items?itemName=oouo-diogo-perdigao.docthis) - a helper for writing JSDoc notations

[**Jest Runner**](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner) - easily run and debug Jest tests

## More tips

1. Use Emmet shortcuts everywhere ([guide](https://code.visualstudio.com/docs/editor/emmet))
2. Learn how to work Git in VSCode UI ([guide](https://code.visualstudio.com/docs/editor/versioncontrol))
3. Use Docker and Remote extension pack for remote development ([guide](https://code.visualstudio.com/docs/remote/containers))
4. Edit Markdown with ease in VSCode ([guide](https://code.visualstudio.com/docs/languages/markdown))
5. Learn more tricks at [vscodecandothat.com](https://www.vscodecandothat.com/)
