import React from 'react'
import {NavLink} from 'react-router-dom'

export const AppLink = (props) => {
  if (props.internal) {
    return (
      <NavLink to={props.internal} className={`navbar-link ${props.className}`}>
        {props.children}
      </NavLink>
    )
  }
  if (props.external) {
    return (
      <a
        href={props.external}
        className={`navbar-link ${props.className} inline-block pt-1`}
        target="_blank"
        rel="noreferrer"
      >
        {props.children}
      </a>
    )
  }
}
