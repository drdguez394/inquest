import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext.jsx";

function protectedRoute() {

  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    <h1>Cargando...</h1>
  }

  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <Outlet />;

}

export default protectedRoute;