import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/auth/registerPage";
import LoginPage from "./pages/auth/loginPage";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>HOME</h1>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/inquest' element={<h1>ENCUESTAS</h1>} />
          <Route path='/inquest-add' element={<h1>CREAR ENCUESTA</h1>} />
          <Route path='/inquest/:id' element={<h1>ACTUALIZAR ENCUESTA</h1>} />
          <Route path='/profile' element={<h1>PERFIL</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App