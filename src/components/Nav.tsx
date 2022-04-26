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
      <nav
        className={`full-page hidden w-full md:block pt-3 ${props.className}`}
      >
        <ul className="flex flex-row justify-end space-x-3 text-sm">
          <AppLink internal="/">Home</AppLink>
          <AppLink internal="/resume">Resume</AppLink>
          <AppLink internal="/portfolio">Portfolio</AppLink>
          <AppLink external="https://github.com/moquette/">
            <RiGithubLine />
          </AppLink>
          <AppLink external="https://www.linkedin.com/in/jmoquette/">
            <RiLinkedinLine />
          </AppLink>
          <AppLink external="mailto:Joaquin A. Moquette<joaquin@moquette.us>?subject=Let's talk">
            <RiMailLine />
          </AppLink>
        </ul>
      </nav>
      <Popover className="popover">
        {({open}) => (
          <>
            <Popover.Overlay
              className={`${
                open
                  ? 'fixed inset-0 backdrop-filter backdrop-blur-sm bg-opacity-10'
                  : 'opacity-0'
              } bg-white`}
            />
            <Popover.Button
              className={`popover-button ${open ? `` : `rotate-90 transform `}`}
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
                    <Popover.Button as={NavLink} to="/" className="navbar-link">
                      <RiHome2Line className="inline-block ml-2 mr-5 text-3xl" />
                      Home
                    </Popover.Button>
                    <Popover.Button
                      as={NavLink}
                      to="/resume"
                      className="navbar-link"
                    >
                      <RiQuillPenLine className="inline-block ml-2 mr-5 text-3xl" />
                      Resume
                    </Popover.Button>
                    <Popover.Button
                      as={NavLink}
                      to="/portfolio"
                      className="navbar-link"
                    >
                      <RiLayoutTop2Line className="inline-block ml-2 mr-5 text-3xl" />
                      Portfolio
                    </Popover.Button>
                    <hr />
                    <a
                      href="https://github.com/moquette/"
                      target="_blank"
                      className="navbar-link"
                      rel="noreferrer"
                    >
                      <RiGithubLine className="inline-block ml-2 mr-5 text-3xl" />
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jmoquette/"
                      target="_blank"
                      className="navbar-link"
                      rel="noreferrer"
                    >
                      <RiLinkedinLine className="inline-block ml-2 mr-5 text-3xl" />
                      LinkedIn
                    </a>
                    <a
                      href="mailto:Joaquin A. Moquette<joaquin@moquette.us>?subject=Let's talk"
                      target="_blank"
                      className="navbar-link"
                      rel="noreferrer"
                    >
                      <RiMailLine className="inline-block ml-2 mr-5 text-3xl" />
                      Contact
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  )
}
