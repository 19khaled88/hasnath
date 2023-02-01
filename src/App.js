import {RouterProvider} from 'react-router-dom'
import routes from './routes/routes'
// import Booking from './components/Booking'
// import Contact from './components/Contact'
// import Gallery from './components/Gallery'
// import LandingPage from './components/LandingPage'
// import Navbar from './components/Navbar'
// import Pricing from './components/Pricing'

function App() {
  return (
    <div className="App">
     <RouterProvider router={routes} />
    </div>
  )
}

export default App
