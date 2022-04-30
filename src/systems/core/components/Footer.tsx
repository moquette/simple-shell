import React from 'react'
import {NavLink} from 'react-router-dom'
import {ScrollToTopButton} from '@/systems/core'
import {
  RiHome2Line,
  RiQuillPenLine,
  RiLayoutTop2Line,
  RiLinkedinLine,
  RiGithubLine,
  RiMailLine,
  RiArrowUpSLine,
} from 'react-icons/ri'

const menuItems = [
  {label: 'Resume', path: '/resume', icon: <RiQuillPenLine />, internal: true},
  {
    label: 'Portfolio',
    path: '/portfolio',
    icon: <RiLayoutTop2Line />,
    internal: true,
  },
  {
    label: 'Contact',
    path: '/contact',
    icon: <RiMailLine />,
    internal: true,
  },
  {
    label: 'GitHub',
    path: 'https://github.com/moquette/',
    icon: <RiGithubLine />,
    internal: false,
  },
  {label: 'Home', path: '/', icon: <RiHome2Line />, internal: true},
  {
    label: 'LinkedIn',
    path: 'https://www.linkedin.com/in/jmoquette/',
    icon: <RiLinkedinLine />,
    internal: false,
  },
]
export const Footer = () => {
  return (
    <footer>
      <div className="icon-box">
        {menuItems.map(({label, icon, path, internal}) => {
          if (internal) {
            return (
              <div key={label}>
                <NavLink to={path}>
                  {icon}
                  {label}
                </NavLink>
              </div>
            )
          } else {
            return (
              <div key={label}>
                <a href={path} target="_blank" rel="noreferrer">
                  {icon}
                  {label}
                </a>
              </div>
            )
          }
        })}
      </div>
      <p className="p-0 text-center text-xs">
        Copyright &copy;{new Date().getFullYear()} &bull; All rights reserved.
      </p>
    </footer>
  )
}
