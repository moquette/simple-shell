import React from 'react'
import {NavLink} from 'react-router-dom'
import {RiLinkedinLine, RiGithubLine, RiMailLine} from 'react-icons/ri'

export default function Home() {
  return (
    <>
      <nav className="hidden w-full md:block">
        <ul className="flex flex-row justify-end space-x-3 text-sm">
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
          <NavLink to="/resume" className="navbar-link">
            Resume
          </NavLink>
          <NavLink to="/portfolio" className="navbar-link">
            Portfolio
          </NavLink>
          <a
            href="https://github.com/moquette/"
            target="_blank"
            className="navbar-link"
            rel="noreferrer"
          >
            <RiGithubLine className="inline-block mb-1" />
          </a>
          <a
            href="https://www.linkedin.com/in/jmoquette/"
            target="_blank"
            className="navbar-link"
            rel="noreferrer"
          >
            <RiLinkedinLine className="inline-block mb-1" />
          </a>
          <a
            href="mailto:Joaquin A. Moquette<joaquin@moquette.us>?subject=Let's talk"
            target="_blank"
            className="navbar-link"
            rel="noreferrer"
          >
            <RiMailLine className="inline-block mb-1" />
          </a>
        </ul>
      </nav>
      <div className="home">
        <p>
          Hello! I&apos;m Joaquin
          <br /> Developer &bull; Designer &bull; Minimalist
        </p>
      </div>
    </>
  )
}
