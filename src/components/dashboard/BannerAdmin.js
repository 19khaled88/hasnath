import React, { useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import '../../css/dashboardBanner.css'
import axiosBaseUrl from '../../utils/postRequest'

const BannerAdmin = () => {
  const [image, setImage] = useState('')
  const textRef = useRef('')
  const [isSubmited, setIsSubmited] = useState(false)
  const [deleteId, setDeleteId] = useState('')
  // const imgRef = useRef('')

  const timestamp = new Date().getTime()
  const string = `public_id=${deleteId.pid}&timestamp=${timestamp}${process.env.API_Secret}`


  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://localhost:9000/api/v1/banner').then((res) => res.json()),
  )

  
  const showTableData = (input) => {
    return input.map((data, index) => (
      <tr key={index}>
        <th>1</th>
        <td>{data.title}</td>
        <td>
          {
            <img
              style={{ width: '50px', height: '50px' }}
              src={data?.banner}
              alt="No Image"
            />
          }
        </td>
        <td className="actionBtn">
          <label
            onClick={() => setDeleteId({ id: data._id, pid: data.publicid })}
            htmlFor="my-modal-4"
            className="btn inline-flex items-center px-2 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </label>
          <button className="inline-flex space-x-2 items-center px-2 py-2 bg-green-600 hover:bg-amber-600  text-white text-sm rounded-md drop-shadow-md">
            <svg
              className="fill-white"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
            >
              <path d="M 46.574219 3.425781 C 45.625 2.476563 44.378906 2 43.132813 2 C 41.886719 2 40.640625 2.476563 39.691406 3.425781 C 39.691406 3.425781 39.621094 3.492188 39.53125 3.585938 C 39.523438 3.59375 39.511719 3.597656 39.503906 3.605469 L 4.300781 38.804688 C 4.179688 38.929688 4.089844 39.082031 4.042969 39.253906 L 2.035156 46.742188 C 1.941406 47.085938 2.039063 47.453125 2.292969 47.707031 C 2.484375 47.898438 2.738281 48 3 48 C 3.085938 48 3.171875 47.988281 3.257813 47.964844 L 10.746094 45.957031 C 10.917969 45.910156 11.070313 45.820313 11.195313 45.695313 L 46.394531 10.5 C 46.40625 10.488281 46.410156 10.472656 46.417969 10.460938 C 46.507813 10.371094 46.570313 10.308594 46.570313 10.308594 C 48.476563 8.40625 48.476563 5.324219 46.574219 3.425781 Z M 45.160156 4.839844 C 46.277344 5.957031 46.277344 7.777344 45.160156 8.894531 C 44.828125 9.222656 44.546875 9.507813 44.304688 9.75 L 40.25 5.695313 C 40.710938 5.234375 41.105469 4.839844 41.105469 4.839844 C 41.644531 4.296875 42.367188 4 43.132813 4 C 43.898438 4 44.617188 4.300781 45.160156 4.839844 Z M 5.605469 41.152344 L 8.847656 44.394531 L 4.414063 45.585938 Z"></path>
            </svg>
          </button>
        </td>
      </tr>
    ))
  }

  const bannerSubmit = (event) => {
    event.preventDefault()
    const title = textRef.current?.value
    // console.log(imgRef.current?.files[0])

    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'llo5890n')
    data.append('cloud_name', 'daiigtpzk')
    fetch('  https://api.cloudinary.com/v1_1/daiigtpzk/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.url != null && data.public_id != null) {
          setIsSubmited(true)
          axiosBaseUrl
            .post('/banner', {
              title: title,
              banner: data.url,
              publicid: data.public_id,
            })
            .then((res) => {
              if (res.data.status === 'success') {
                toast('New Banner posted successfully!!! ')
                setIsSubmited(false)
              }
            })
        } else {
          toast('Data submit unsuccessful')
        }
      })
      .catch((err) => console.log(err))
  }

  const cleanField = () => {
    var allInputs = document.querySelectorAll('input')
    allInputs.forEach((singleInput) => (singleInput.value = ''))
  }

  const deleteHandler = async (id) => {
    await axiosBaseUrl
      .delete(`/banner-delete/${id}`)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
  }

  const deleteConfirmHandler = async () => {
    await axiosBaseUrl
      .delete(`/banner-delete/${deleteId.id}`)
      .then((res) => (
        
        res.deletedCount = 1 ? toast('deleted') : null,
        document.getElementById('my-modal-4').checked = false
        ))
      .catch((error) => console.log(error))
  }

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occured: ' + error.message

  return (
    <div className="bannerContainer">
      <div className="top">
        <span className="text-white bg-gradient-to-br from-purple-600  to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5  text-center">
          (Banner) admin actions
        </span>
        <label
          htmlFor="my-modal-3"
          className="inline-block rounded-full bg-info px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] float-right cursor-pointer"
        >
          Add Banner
        </label>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Short Text</th>
              <th>Banner</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{showTableData(data)}</tbody>
        </table>
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            onClick={() => cleanField()}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold py-5">Add new banner and Title!!</h3>

          <form
            onSubmit={bannerSubmit}
            className="submitForm"
            encType="multipart/form"
          >
            <label>Short text</label>
            <input
              ref={textRef}
              type="text"
              required
              placeholder="Type here"
              className="input input-bordered input-md w-full max-w-xs"
            />

            <label>Select banner</label>
            <input
              // ref={imgRef}
              required
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />

            <button disabled={isSubmited} className="btn btn-md btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <div className="p-6 text-center">
            <svg
              aria-hidden="true"
              className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this banner?
            </h3>
            <button
              data-modal-hide="popup-modal"
              onClick={() => deleteConfirmHandler()}
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Yes, I'm sure
            </button>
            <label
              data-modal-hide="popup-modal"
              htmlFor="my-modal-4"
              type="button"
              className="btn text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              No, cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerAdmin
