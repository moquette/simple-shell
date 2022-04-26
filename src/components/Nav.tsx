import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'
import {Popover, Transition} from '@headlessui/react'
import AppLink from '@/components/AppLink'
import {
  RiHome2Line,
  RiQuillPenLine,
  RiLayoutTop2Line,
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
} from 'react-icons/ri'

export interface IAppProps {
  className?: string
}
export default function Nav(props: IAppProps) {
  return (
    <>
      <nav className={`${props.className} full-page  w-full pt-3 md:block`}>
        <div className="flex flex-row justify-between">
          <AppLink internal="/">Joaquin A. Moquette</AppLink>

          <ul className=" space-x-3 md:inline-flex hidden">
            <li>
              <AppLink internal="/resume">Resume</AppLink>
            </li>
            <li>
              <AppLink internal="/portfolio">Portfolio</AppLink>
            </li>
            <li>
              <AppLink external="https://github.com/moquette/">
                <RiGithubLine />
              </AppLink>
            </li>
            <li>
              <AppLink external="https://www.linkedin.com/in/jmoquette/">
                <RiLinkedinLine />
              </AppLink>
            </li>
            <li>
              <AppLink external="mailto:Joaquin A. Moquette<joaquin@moquette.us>?subject=Let's talk">
                <RiMailLine />
              </AppLink>
            </li>
          </ul>
          <Popover className="popover">
            {({open}) => (
              <>
                <Popover.Button
                  className={`popover-button ${
                    open ? `` : `rotate-90 transform `
                  }`}
                >
                  <svg width="24" height="24" fill="none" aria-hidden="true">
                    <path
                      d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                      stroke="currentColor"
                    />
                  </svg>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-250"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-250"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="popover-panel">
                    <div className="wrapper">
                      <div>
                        <Popover.Button
                          as={NavLink}
                          to="/"
                          className="navbar-link"
                        >
                          <RiHome2Line className="ml-2 mr-5 inline-block text-3xl" />
                          Home
                        </Popover.Button>
                        <Popover.Button
                          as={NavLink}
                          to="/resume"
                          className="navbar-link"
                        >
                          <RiQuillPenLine className="ml-2 mr-5 inline-block text-3xl" />
                          Resume
                        </Popover.Button>
                        <Popover.Button
                          as={NavLink}
                          to="/portfolio"
                          className="navbar-link"
                        >
                          <RiLayoutTop2Line className="ml-2 mr-5 inline-block text-3xl" />
                          Portfolio
                        </Popover.Button>
                        <hr />
                        <a
                          href="https://github.com/moquette/"
                          target="_blank"
                          className="navbar-link"
                          rel="noreferrer"
                        >
                          <RiGithubLine className="ml-2 mr-5 inline-block text-3xl" />
                          GitHub
                        </a>
                        <a
                          href="https://www.linkedin.com/in/jmoquette/"
                          target="_blank"
                          className="navbar-link"
                          rel="noreferrer"
                        >
                          <RiLinkedinLine className="ml-2 mr-5 inline-block text-3xl" />
                          LinkedIn
                        </a>
                        <a
                          href="mailto:Joaquin A. Moquette<joaquin@moquette.us>?subject=Let's talk"
                          target="_blank"
                          className="navbar-link"
                          rel="noreferrer"
                        >
                          <RiMailLine className="ml-2 mr-5 inline-block text-3xl" />
                          Contact
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </nav>
    </>
  )
}
