import React, {FC, ReactNode} from 'react'
import {NavLink} from 'react-router-dom'

interface Props {
  to?: string
  href?: string
  children?: ReactNode
  className?: string
}

export const Button: FC<Props> = ({to, href, className, children}) => {
  if (to) {
    return (
      <NavLink to={`${to || '/'}`} className={`navbar-link ${className || ''}`}>
        {children}
      </NavLink>
    )
  }
  if (href) {
    return (
      <a
        href={`${href || '/'}`}
        className={`navbar-link inline-block pt-1 ${className || ''}`}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    )
  }
}
