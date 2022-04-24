import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from '@/components/Nav'
import Home from '@/pages/Home'
import Resume from '@/pages/Resume'
import Portfolio from '@/pages/Portfolio'
import PageNotFound from '@/pages/PageNotFound'

export default function App() {
  return (
    <>
      <div className="container mx-auto p-5 sm:px-2">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
