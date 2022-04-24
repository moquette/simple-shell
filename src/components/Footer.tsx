import React from 'react'

export default function Footer() {
  return (
    <p className="text-sm text-center pt-0 pb-10">
      <span className="font-bold text-center">Simple Shell</span>
      <br />
      <span className="text-gray-400">
        Copyright &copy;{new Date().getFullYear()} Joaquin A. Moquette
        <br />
        All Rights Reserved.
      </span>
    </p>
  )
}
