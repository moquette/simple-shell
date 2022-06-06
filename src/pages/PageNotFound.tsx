import React from 'react'
import {Layout} from '@/core'

export default function PageNotFound() {
  return (
    <Layout title="404">
      <div className="page portfolio flex min-h-screen flex-col justify-center pt-7 text-center">
        <p className="mb-10">
          <span className="font-semibold">404</span> | This page could not
          found.
        </p>
      </div>
    </Layout>
  )
}
