import { Navigate, Outlet } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ isAllowed, children, redirectTo }) => {
  // aqui se verificara si el usuario tiene permisos para acceder a la ruta
  console.log(isAllowed)
  if (!isAllowed) {
    return <Navigate to={redirectTo} /> // se dirigira a la ruta de redireccion si no tiene permisos
  }
  // si hay un children sera lo primero que se mostrar y si no hay children se mostrara el componente Outlet
  return children ? children : <Outlet />
}