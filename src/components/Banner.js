import Carousel from 'nuka-carousel'
import React from 'react'
import ContentLoader from 'react-content-loader'
import { useQuery } from 'react-query'
import '../css/banner.css'
import axiosBaseUrl from '../utils/postRequest'
const Banner = () => {
  const showBanner = (input) => {
    return input.map((dt,index) => (
      <div className="content" key={index}>
        <img src={dt.banner} alt="No Image" />
        <p>{dt.title}</p>
      </div>
    ))
  }

  const { isLoading, error, data } = useQuery('repoDAta', () =>
    // fetch('https://photography-server-omega.vercel.app/api/v1/banner').then((res) => res.json()),
    axiosBaseUrl.get('/banner').then((res)=>res.data)
  )
  if (isLoading)
    return (
      <ContentLoader
        speed={2}
        width={400}
        height={400}
        viewBox="0 0 400 400"
        backgroundColor="#f4bebe"
        foregroundColor="#ecebeb"
      ></ContentLoader>
    )

  if (error) return 'An error has occured: ' + error.message
  return (
    <div className="App">
      <Carousel
        autoplay={true}
        autoplayInterval={7000}
        speed={1900}
        wrapAround={true}
        pauseOnHover={false}
        animation={'fade'}
        defaultControlsConfig={{
          pagingDotsStyle: { display: 'none' },
        }}
      >
        {showBanner(data)}
      </Carousel>
    </div>
  )
}

export default Banner
