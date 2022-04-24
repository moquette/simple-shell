import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'
import {Popover, Transition} from '@headlessui/react'

const pages = [
  {path: `/`, title: `Home`},
  {path: `/resume`, title: `Resume`},
  {path: `/portfolio`, title: `Portfolio`},
]

export default function Nav() {
  return (
    <Popover className="fixed right-5 top-7  md:right-15 lg:right-20">
      {({open}) => (
        <>
          <Popover.Button
            className={`${open ? `` : `rotate-90 transform`}
               rounded-lg bg-white ring-1 ring-gray-300 p-2 transition  duration-150 ease-in-out focus:outline-none`}
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
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="popover-panel absolute left-full z-10 mt-4 w-screen max-w-xs -translate-x-full transform p-0 px-0">
              <div className="relative overflow-hidden rounded-lg  ring-1 ring-gray-200 ">
                <div className="relative grid gap-8 rounded-lg bg-white p-7">
                  {pages.map((item) => (
                    <Popover.Button
                      as={NavLink}
                      to={item.path}
                      key={item.title}
                      className="navbar-link w-full -mb-5 rounded-lg p-2 text-center font-bold transition duration-150 ease-in-out"
                    >
                      {item.title}
                    </Popover.Button>
                  ))}
                  <hr />
                  <a
                    href="#"
                    className="navbar-link  -m-3 rounded-lg p-2 text-center font-bold transition duration-150 ease-in-out"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="navbar-link  -m-3 rounded-lg p-2 text-center font-bold transition duration-150 ease-in-out"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="navbar-link  -m-3 rounded-lg p-2 text-center font-bold transition duration-150 ease-in-out"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
