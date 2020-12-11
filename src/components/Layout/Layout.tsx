import styled, { css } from 'styled-components'

import { TRenderProps } from '@typings/commonPropTypes'

import Body from './Body'
import Footer from './Footer'
import Header from './Header'

const LayoutGrid = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    height: 100%;
  `
)

const Layout = ({ children }: TRenderProps) => (
  <LayoutGrid>{children}</LayoutGrid>
)

Layout.Header = Header
Layout.Body = Body
Layout.Footer = Footer

export default Layout
