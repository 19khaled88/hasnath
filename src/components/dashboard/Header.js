import React from 'react'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {
  return (
    <div className="bg-[#f0f5f5] w-full py-6 items-center justify-between flex px-12">
      <div className="w-full lg:flex hidden space-x-4 items-center justify-start py-2">
        <input
          type="text"
          placeholder="Search anything..."
          className="bg-transparent outline-none"
        />
      </div>
      <ToastContainer />
    </div>
  )
}

export default Header
