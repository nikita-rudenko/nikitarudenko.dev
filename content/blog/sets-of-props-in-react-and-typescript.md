---
date_published: '2021-06-14T18:23:58Z'
tags:
  - react
  - typescript
title: Sets of props in React and Typescript
excerpt: A useful pattern for writing better props API
date: 2021-06-14T21:15:25.000+00:00
heroImage: https://res.cloudinary.com/nikita-rudenko/image/upload/v1623693129/nikita-rudenko.dev/sets-of-props-hero-image.jpg
isPublished: true
---

Sometimes when writing an app in React you might have a component that changes its look and logic dramatically depending on provided props. In addition, if a particular prop provided, the other props become either required or restricted. That **hidden prop relation** can be explained in documentation but if your project uses Typescript there is a great opportunity to utilize what I call "sets of props".

## Simple example

It's usually not the best idea to make buttons look like links and vice versa but let's ignore this for the sake of clarity. The code snippet below is so-called Clickable component which can be either a link or a button that shares the same style but has different behavior depending on props.

```jsx
import { ReactNode } from 'react'

interface BaseProps {
  children: ReactNode
}

interface AsButtonProps extends BaseProps {
  as: 'button'
  onClick: () => void
  href?: never
}

interface AsLinkProps extends BaseProps {
  as: 'a'
  href: string
  onClick?: never
}

type ClickableProps = AsButtonProps | AsLinkProps

const Clickable = ({ children, as, onClick, href }: ClickableProps) => {
  return (
    <>
      {as === 'a' && (
        <a href={href}>{children}</a>
      )}

      {as === 'button' && (
        <button onClick={onClick}>{children}</button>
      )}
    </>
  )
}

export default Clickable
```

The component has four props. `children` is required in any case so it's put under the `BaseProps` interface. Both `AsButtonProps` and `AsLinkProps` extended from `BaseProps` and represent two sets of props.
The active set depends on the value of the `as` prop while the type `never` for unused props makes sure that Typescript will **yell** if someone is using a prop which does nothing.

Here is a scheme that explains:

![Clickable set of props scheme.](https://res.cloudinary.com/nikita-rudenko/image/upload/v1623694683/nikita-rudenko.dev/sets-of-props-clickable-scheme.jpg "Clickable set of props scheme")


## Summary

This pattern is obviously not limited to props in React. It's widely used in the in the types for API of various npm packages. Now you can add it to your arsenal and build reusable components/utils with better API for you and your team.

### Links
- [TypeScript Deep Dive: Never Type](https://basarat.gitbook.io/typescript/type-system/never)
- [SyntaxFM: Episode 348. TypeScript Fundamentals — Getting a Bit Deeper](https://syntax.fm/show/348/typescript-fundamentals-getting-a-bit-deeper)
