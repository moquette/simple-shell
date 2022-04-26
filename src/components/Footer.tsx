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
  {label: 'Home', path: '/', icon: <RiHome2Line />, internal: true},
  {label: 'Resume', path: '/resume', icon: <RiQuillPenLine />, internal: true},
  {
    label: 'Portfolio',
    path: '/portfolio',
    icon: <RiLayoutTop2Line />,
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
  {
    label: 'Contact',
    path: "mailto:Joaquin A. Moquette<joaquin@moquette.us>?subject=Let's talk",
    icon: <RiMailLine />,
    internal: false,
  },
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
            href="#root"
            rel="noreferrer"
            onClick={() => {
              window.scrollTo(0, 0)
            }}
          >
            <RiArrowUpSLine />
            Top
          </a>
        </div>
      </div>
      <p className="p-0 text-center text-[10px]">
        Copyright &copy;{new Date().getFullYear()} J. A. Moquette
      </p>
    </footer>
  )
}
