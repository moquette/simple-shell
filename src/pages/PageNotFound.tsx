import React from 'react'

export default function PageNotFound() {
  return (
    <main>
      <h2>
        <span className="font-semibold">404</span> | This page could not found.
        Return{' '}
        <a href="/" className="underline">
          home
        </a>
        .
      </h2>
    </main>
  )
}
