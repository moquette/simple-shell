import React from 'react'
import {NavLink} from 'react-router-dom'
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
  {
    label: 'LinkedIn',
    path: 'https://www.linkedin.com/in/jmoquette/',
    icon: <RiLinkedinLine />,
    internal: false,
  },
  {label: 'Home', path: '/', icon: <RiHome2Line />, internal: true},
]
export default function Footer() {
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
        <div>
          <a
            href="#"
            rel="noreferrer"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo(0, 0)
            }}
          >
            <RiArrowUpSLine />
            Top
          </a>
        </div>
      </div>
      <p className="p-0 text-center text-[10px]">
        Copyright &copy;{new Date().getFullYear()} &bull; All rights reserved.
      </p>
    </footer>
  )
}