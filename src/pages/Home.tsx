import React from 'react'
import {Layout} from '@/core'
import {IconBar} from '@/core'

export default function Home() {
  return (
    <Layout title="Home">
      <div className="page home">
        <p className="-mt-[15%] block pb-1">Joaquin A. Moquette</p>
        <p className="pb-2">Developer &bull; Designer &bull; Minimalist</p>
        <IconBar />
      </div>
    </Layout>
  )
}
