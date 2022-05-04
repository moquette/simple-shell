import React from 'react'
import {Layout} from '@/core'
import {IconBar} from '@/core'
import Avatar from '@/assets/images/avatar.png'

export default function Home() {
  return (
    <Layout title="Home">
      <div className="page home flex flex-col min-h-screen items-center justify-center text-center align-middle">
        <img src={Avatar} alt="Joaquin A. Moquette" className="rounded-full h-32 w-32 mb-5 -mt-[15%] md:-mt-[10%]" />
        <p className="block pb-1">Joaquin A. Moquette</p>
        <p className="pb-2">Developer &bull; Designer &bull; Minimalist</p>
        <IconBar />
      </div>
    </Layout>
  )
}
