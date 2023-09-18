import Booking from '../components/Booking'
import Contact from '../components/Contact'
// import Dashboard from "../components/dashboard/Dashboard";

import DashboardLayout from '../components/dashboard/DashboardLayout'
import Gallery from '../components/Gallery'
import Layout from '../Layout/Layout'
import Home from '../pages/Home'
import Price from '../pages/Pricing'
import BannerAdmin from '../components/dashboard/BannerAdmin'
import GalleryAdmin from '../components/dashboard/GalleryAdmin'
import HomePageAdmin from '../components/dashboard/HomeAdmin'
import PricingAdmin from '../components/dashboard/PricingAdmin'
import ContactAdmin from '../components/dashboard/ContactAdmin'

const { createBrowserRouter } = require('react-router-dom')

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/pricing',
        element: <Price />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/booking',
        element: <Booking />,
      },
     
      {
        path: '/contactus',
        element: <Contact />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard/home',
        element: <HomePageAdmin />,
      },
      {
        path: '/dashboard/banner',
        element: <BannerAdmin />,
      },
      {
        path: '/dashboard/gallery',
        element: <GalleryAdmin />,
      },
      {
        path: '/dashboard/pricing',
        element: <PricingAdmin />,
      },
      {
        path: '/dashboard/contactus',
        element: <ContactAdmin />,
      },
    
      
    ],
  },
])

export default routes
