import React, {FC, ReactNode} from 'react'

import {Nav} from '@/core'

interface Props {
  title?: string
  theme?: string
  description?: string
  children: ReactNode
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
      <title>{pageTitle}</title>
      <meta name="theme-color" content={pageTheme}></meta>
      <meta name="description" content={pageDescription} />
      <Nav />
      {children}
    </>
  )
}
