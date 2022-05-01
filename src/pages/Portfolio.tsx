import React from 'react'
import {Layout} from '@/systems/core'

export default function Portfolio() {
  return (
    <Layout title="Portfolio">
      <div className="page portfolio pt-7">
        <h2>Portfolio</h2>
        <div className="grid gap-5 pt-2 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 shadow-md">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://picsum.photos/920/613"
                alt=""
              />
            </a>
            <div className="px-5 pt-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Demo 1
                </h5>
              </a>
              <p>
                Morbi tristique senectus et netus et malesuada. Vel orci porta
                non pulvinar neque.
              </p>
              <p className="text-right">
                <a href="#" className="button full">
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 shadow-md">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://picsum.photos/920/613"
                alt=""
              />
            </a>
            <div className="px-5 pt-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Demo 2
                </h5>
              </a>
              <p>
                Morbi tristique senectus et netus et malesuada. Vel orci porta
                non pulvinar neque.
              </p>
              <p className="text-right">
                <a href="#" className="button full">
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 shadow-md">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://picsum.photos/920/613"
                alt=""
              />
            </a>
            <div className="px-5 pt-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Demo 3
                </h5>
              </a>
              <p>
                Morbi tristique senectus et netus et malesuada. Vel orci porta
                non pulvinar neque.
              </p>
              <p className="text-right">
                <a href="#" className="button full">
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 shadow-md">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://picsum.photos/920/613"
                alt=""
              />
            </a>
            <div className="px-5 pt-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Demo 4
                </h5>
              </a>
              <p>
                Morbi tristique senectus et netus et malesuada. Vel orci porta
                non pulvinar neque.
              </p>
              <p className="text-right">
                <a href="#" className="button full">
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
