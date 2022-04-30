import React, {FC} from 'react'
import {Helmet} from 'react-helmet'
import {Nav} from '@/systems/core'

interface Props {
  title?: string
  theme?: string
  description?: string
  children: JSX.Element
}

export const Layout: FC<Props> = ({title, theme, description, children}) => {
  const pageTitle = title
    ? `${title} | Joaquin A. Moquette`
    : 'Joaquin A. Moquette'
  const pageTheme = theme || '#ffffff'
  const pageDescription =
    description || 'Joaquin A. Moquette resume and portfolio.'
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="theme-color" content={pageTheme}></meta>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <Nav />
      {children}
    </>
  )
}
