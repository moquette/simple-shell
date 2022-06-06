import Avatar from '@/assets/images/avatar.png'
import {IconBar} from '@/core'
import {Layout} from '@/core'
import React from 'react'

export default function Home() {
  return (
    <Layout title="Home">
      <div className="page home flex min-h-screen flex-col items-center justify-center text-center align-middle">
        <img
          src={Avatar}
          alt="Michael Anthony"
          className="mb-5 -mt-[15%] h-32 w-32 rounded-full md:-mt-[10%]"
        />
        <p className="block pb-1">Michael Anthony</p>
        <p className="pb-3">Developer &bull; Designer &bull; Minimalist</p>
        <IconBar />
      </div>
    </Layout>
  )
}
