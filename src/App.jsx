import { createBrowserRouter, Outlet, RouterProvider, Navigate } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Profile from "./pages/Profil"


//verification de l'authentification
const isAuthenticated = () => !!localStorage.getItem('token')

//composant privateRoute
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to='/login' />
}

const router = createBrowserRouter([{
  path: '/',
  element: (
    <>
      <Navbar />
      <Outlet />
    </>
  ),
  children: [
    { path: '/', element: <Home /> },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path: '/profile', element: <PrivateRoute><Profile /></PrivateRoute> }
  ],
}])


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
