import React, { useState } from 'react'
import '../../css/dashboardContact.css'

import { BsCheckLg } from 'react-icons/bs'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const ContactAdmin = () => {
  const [show, setShow] = useState(true)
  const [isEditable, setIsEditable] = useState(false)

  const ifEditable = () => {
    setIsEditable(!isEditable)
  }
  return (
    <div className="contactContainer">
      <div className="top pb-2">
        <span className="text-white bg-gradient-to-br from-purple-600  to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5  text-center">
          (Contact) admin actions
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="">
            <tr className="flex w-full">
              <th className="w-1/12"></th>

              <th className="w-9/12">Text</th>
              <th className="w-2/12">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="flex w-full">
              <th className="w-1/12 m-1 p-1">1</th>
              <td className='w-9/12 m-1 p-1'>
                {' '}
                {isEditable ? (
                  <input
                    type="text"
                    defaultValue="Edit this field"
                    style={{ border: '1px solid gray' }}
                    className="py-1 px-1 rounded-md"
                  />
                ) : (
                  'Marriage'
                )}
              </td>

              <td className="actionBtn w-2/12 m-1 p-1">
                <button
                  onClick={() => setShow(!show)}
                  className={`px-2 py-2 rounded-md ${
                    show === true ? 'bg-blue-500' : 'bg-blue-300'
                  }`}
                >
                  {show ? (
                    <FiEye style={{ width: '25', height: '25' }} />
                  ) : (
                    <FiEyeOff style={{ width: '25', height: '25' }} />
                  )}
                </button>
                {isEditable ? (
                  <button
                    className="inline-flex space-x-2 items-center px-2 py-1.5 bg-green-600 hover:bg-amber-600  text-white text-sm rounded-md drop-shadow-md"
                    onClick={() => ifEditable()}
                  >
                    <BsCheckLg style={{ width: '25', height: '25' }} />
                  </button>
                ) : (
                  <button
                    onClick={() => ifEditable()}
                    className="inline-flex space-x-2 items-center px-2 py-1.5 bg-green-600 hover:bg-amber-600  text-white text-sm rounded-md drop-shadow-md"
                  >
                    <svg
                      className="fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 46.574219 3.425781 C 45.625 2.476563 44.378906 2 43.132813 2 C 41.886719 2 40.640625 2.476563 39.691406 3.425781 C 39.691406 3.425781 39.621094 3.492188 39.53125 3.585938 C 39.523438 3.59375 39.511719 3.597656 39.503906 3.605469 L 4.300781 38.804688 C 4.179688 38.929688 4.089844 39.082031 4.042969 39.253906 L 2.035156 46.742188 C 1.941406 47.085938 2.039063 47.453125 2.292969 47.707031 C 2.484375 47.898438 2.738281 48 3 48 C 3.085938 48 3.171875 47.988281 3.257813 47.964844 L 10.746094 45.957031 C 10.917969 45.910156 11.070313 45.820313 11.195313 45.695313 L 46.394531 10.5 C 46.40625 10.488281 46.410156 10.472656 46.417969 10.460938 C 46.507813 10.371094 46.570313 10.308594 46.570313 10.308594 C 48.476563 8.40625 48.476563 5.324219 46.574219 3.425781 Z M 45.160156 4.839844 C 46.277344 5.957031 46.277344 7.777344 45.160156 8.894531 C 44.828125 9.222656 44.546875 9.507813 44.304688 9.75 L 40.25 5.695313 C 40.710938 5.234375 41.105469 4.839844 41.105469 4.839844 C 41.644531 4.296875 42.367188 4 43.132813 4 C 43.898438 4 44.617188 4.300781 45.160156 4.839844 Z M 5.605469 41.152344 L 8.847656 44.394531 L 4.414063 45.585938 Z"></path>
                    </svg>
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ContactAdmin
