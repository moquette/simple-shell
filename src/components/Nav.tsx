import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'
import {Popover} from '@headlessui/react'

const pages = [
  {title: `Home`, href: `/`},
  {title: `Resume`, href: `/resume`},
  {title: `Portfolio`, href: `/portfolio`},
]

export default function Nav() {
  return (
    <Popover className="popover md:right-15 lg:right-20">
      {({open}) => (
        <>
          <Popover.Button
            className={`popover-button ${open ? `` : `rotate-90 transform`}`}
          >
            <svg width="24" height="24" fill="none" aria-hidden="true">
              <path
                d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                stroke="currentColor"
              />
            </svg>
          </Popover.Button>
          <Popover.Panel className="popover-panel">
            <div className="wrapper">
              <div>
                {pages.map((item) => (
                  <Popover.Button
                    as={NavLink}
                    to={item.href}
                    key={item.title}
                    className="navbar-link"
                  >
                    {item.title}
                  </Popover.Button>
                ))}
                <hr className="mt-3" />
                <a href="#" className="navbar-link">
                  GitHub
                </a>
                <a href="#" className="navbar-link">
                  LinkedIn
                </a>
                <a href="#" className="navbar-link">
                  Contact
                </a>
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}
