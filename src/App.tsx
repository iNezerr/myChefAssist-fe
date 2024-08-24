import About from './About'
import './App.css'
import LandingPage from './LandingPage'
// import Nav from './Nav'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Search from './Search'
import Recipe from './Recipe'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LandingPage />} >
      <Route path="recipe-details" element={<Recipe />} />
      <Route index element={<Search />} />
      <Route path="about" element={<About />} />
    </Route>
  )
)
function App() {

  return (
    <>
      <div className='bg-gray-100'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
