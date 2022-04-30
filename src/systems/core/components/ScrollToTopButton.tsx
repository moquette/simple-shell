import React from 'react'
import {RiArrowUpSLine} from 'react-icons/ri'

export const ScrollToTopButton = (props) => {
  return (
    <a
      href="#"
      rel="noreferrer"
      className="block py-6"
      onClick={(e) => {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }}
    >
      <RiArrowUpSLine className="min-w-full text-4xl text-gray-400" />
    </a>
  )
}
