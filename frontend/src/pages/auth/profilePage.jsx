import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";

function profilePage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  // verificamos que el usuario este registrado
  useEffect (() => {
    if (isAuthenticated) {
      navigate('/inquest');
    }
  }, [isAuthenticated]);

  return (
    <div>profilePage</div>
  )
}

export default profilePage