import React, {FC} from 'react'
import {Helmet} from 'react-helmet'
import {Nav} from '@/systems/core'

interface Props {
  head?: string
  title?: string
  children: JSX.Element
}

export const Layout: FC<Props> = ({head, children, title}) => {
  return (
    <>
      <Helmet>
        <title>{title} | Joaquin A. Moquette</title>
        <meta
          name="description"
          content="Joaquin A. Moquette resume and portfolio."
        />
        {head}
      </Helmet>
      <Nav />
      {children}
    </>
  )
}
