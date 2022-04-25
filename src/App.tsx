import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import Home from '@/pages/Home'
import Resume from '@/pages/Resume'
import Portfolio from '@/pages/Portfolio'
import PageNotFound from '@/pages/PageNotFound'

export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, {passive: true})
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  setTimeout(() => {
    if (
      window.innerHeight + Math.ceil(window.pageYOffset) + 200 >=
      document.body.offsetHeight
    ) {
      // Trigger the animation
      document.querySelector('.main').classList.add('end-of-page')
    } else {
      document.querySelector('.main').classList.remove('end-of-page')
    }
  }, 0)
  return (
    <Router>
      <ScrollToTop>
        <main className="main">
          <div className="container mx-auto p-5 sm:px-2">
            <Routes>
              <Route path="*" element={<PageNotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
        </main>
        <Footer />
        <Nav />
      </ScrollToTop>
    </Router>
  )
}
