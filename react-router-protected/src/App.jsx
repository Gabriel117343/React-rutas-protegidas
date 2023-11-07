import { useState } from 'react'
import { Landing, Home, Dashboard, Analytics, Admin } from './pages/index'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
import './App.css'
export default function App() {

  const [user, setUser] = useState(null)
  const login = () => {
    // ___esto es solo para simular una peticion a un servidor backend en donde se obtiene el usuario logueado y sus permisos y roles 
    
    setUser({
      id: 1,
      name: "John Doe",
      permissions: ['analize'], // aqui podria ir el permiso ['analize'] para que se muestre el componente Analytics si esta en ['otro permiso'] no mostrar el componente
      roles: [] // aqui podria ir el rol ['admin'] para que se muestre el componente Admin, reemplazar por ese rol parar probar...
    })
  }
  const logout = () => setUser(null)
  return (
    <BrowserRouter>
      <Navigation />{/* Navegacion, deberia ir en un componente aparte ej: Navigation.jsx */}
      {
        user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )
      }
      <Routes>
        <Route index element={<Landing />} />
        
        <Route path="/landing" element={<Landing />} />
        <Route element={<ProtectedRoute isAllowed={user ? true:false} />}> {/* Proteger multiples rutas */}
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Route>
        
        <Route path='/analytics' element={
          <ProtectedRoute isAllowed={user?.permissions.includes('analize')} redirectTo='/home'>{/* user? verificara si user existe antes de verificar, evita el error de user undefined */}
            <Analytics />
          </ProtectedRoute>
        } />
        <Route path='/admin' element={
          <ProtectedRoute isAllowed={user?.roles.includes('admin')} redirectTo='/home'>{/**si en el usuario su rol incluye admin podra acceder al sitio de lo contrario se dirigira a la ruta /home */}
            <Admin />
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  )
}
export function Navigation () {
  return <nav>
    <ul>
      <li><Link className='link' to="/landing">Landing</Link></li>
      <li><Link className='link' to="/home">Home</Link></li>
      <li><Link className='link' to="/dashboard">Dashboard</Link></li>
      <li><Link className='link' to="/analytics">Analytics</Link></li>
      <li><Link className='link' to="/admin">Admin</Link></li>
    </ul>
  </nav>
}
