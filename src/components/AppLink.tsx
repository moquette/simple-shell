import React from 'react'
import {NavLink} from 'react-router-dom'

export default function AppLink(props) {
  if (props.internal) {
    return (
      <NavLink to={props.internal} className={`navbar-link ...props.className`}>
        {props.children}
      </NavLink>
    )
  }
  if (props.external) {
    return (
      <a
        href={props.external}
        className={`navbar-link inline-block pt-1 ...props.className`}
        target="_blank"
        rel="noreferrer"
      >
        {props.children}
      </a>
    )
  }
}
