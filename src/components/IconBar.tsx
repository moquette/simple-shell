import React from 'react'
import Link from '@/components/AppLink'

import {
  RiHome2Line,
  RiQuillPenLine,
  RiLayoutTop2Line,
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
} from 'react-icons/ri'

export default function IconBar(props) {
  return (
    <ul className="flex space-x-4 text-2xl justify-center content-center md:hidden">
      <li>
        <Link internal="/resume">
          <RiQuillPenLine className="inline-block" />
        </Link>
      </li>
      <li>
        <Link internal="/portfolio">
          <RiLayoutTop2Line className="inline-block" />
        </Link>
      </li>
      <li>
        <Link external="https://github.com/moquette/">
          <RiGithubLine />
        </Link>
      </li>
      <li>
        <Link external="https://www.linkedin.com/in/jmoquette/">
          <RiLinkedinLine />
        </Link>
      </li>
      <li>
        <Link external="mailto:Joaquin A. Moquette<joaquin@moquette.us>?subject=Let's talk">
          <RiMailLine />
        </Link>
      </li>
    </ul>
  )
}
