import React from 'react'
import Link from '@/components/AppLink'

import {
  RiQuillPenLine,
  RiLayoutTop2Line,
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
} from 'react-icons/ri'

export default function IconBar() {
  return (
    <ul className="flex content-center justify-center space-x-4 text-2xl md:hidden">
      <li>
        <Link internal="/resume" className="hover:text-black">
          <RiQuillPenLine className="inline-block" />
        </Link>
      </li>
      <li>
        <Link internal="/portfolio" className="hover:text-black">
          <RiLayoutTop2Line className="inline-block" />
        </Link>
      </li>
      <li>
        <Link internal="/contact" className="hover:text-black">
          <RiMailLine className="inline-block" />
        </Link>
      </li>
    </ul>
  )
}
