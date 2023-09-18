import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import '../../css/dashboardlayout.css'
import Header from './Header'
import Sidebar from './Sidebar'

const DashboardLayout = () => {
  const [showNav, setShowNav] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const location = useLocation()

  

  function handleResize() {
    if (window.innerWidth <= 640) {
      setShowNav(false)
      setIsMobile(true)
    } else {
      setShowNav(true)
      setIsMobile(false)
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      window.addEventListener('resize', handleResize)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  return (
    <div>
      <Header />
      <main
        className="flex gap-4 px-1"
        // className="dashboard-main flex h-[p0vh] items-center justify-center w-[85vw] my-10 rounded-xl overflow-hidden"
      >
        <div className=" border border-indigo-600">
          <Sidebar showNav={showNav} setShowNav={setShowNav} />
        </div>
        <div className="grow border border-indigo-600 p-3">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout
