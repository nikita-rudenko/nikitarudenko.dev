import React from 'react'

import { TRenderProps } from '@typings/commonPropTypes'

import Body from './Body'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, ...props }: TRenderProps) => (
  <div {...props}>{children}</div>
)

Layout.Header = Header
Layout.Body = Body
Layout.Footer = Footer

export default Layout
