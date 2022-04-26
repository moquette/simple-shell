import React from 'react'
import AppLink from '@/components/AppLink'

import {
  RiHome2Line,
  RiQuillPenLine,
  RiLayoutTop2Line,
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
} from 'react-icons/ri'

export default function Home() {
  return (
    <div className="page home">
      <p className="pb-2 md:pb-20">
        <span className="block md:hidden pb-1">
          Joaquin A. Moquette
          <br />
        </span>
        Developer &bull; Designer &bull; Minimalist
      </p>
      <div>
        <ul className="flex space-x-4 text-2xl justify-center content-center md:hidden">
          <li>
            <AppLink internal="/resume">
              <RiQuillPenLine className="inline-block" />
            </AppLink>
          </li>
          <li>
            <AppLink internal="/portfolio">
              <RiLayoutTop2Line className="inline-block" />
            </AppLink>
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
      </div>
    </div>
  )
}
