import { QueryClientProvider,QueryClient } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
// import Booking from './components/Booking'
// import Contact from './components/Contact'
// import Gallery from './components/Gallery'

// import Navbar from './components/Navbar'
// import Pricing from './components/Pricing'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </QueryClientProvider>
  )
}

export default App
