import React from 'react'
import {Layout} from '@/systems/core'
import IconBar from '@/systems/core/components/IconBar'

export default function Home() {
  return (
    <Layout title="Welcome">
      <div className="page home">
        <p className="block pb-1 md:hidden">Joaquin A. Moquette</p>
        <p className="pb-2">Developer &bull; Designer &bull; Minimalist</p>
        <IconBar />
      </div>
    </Layout>
  )
}
