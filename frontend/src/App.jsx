import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";
import HomePage from "./pages/homePage.jsx";
import LoginPage from "./pages/auth/loginPage.jsx";
import RegisterPage from "./pages/auth/registerPage.jsx";
import ProfilePage from "./pages/auth/profilePage.jsx";
import InquestPage from "./pages/inquest/inquestPage.jsx";
import InquestFormPage from "./pages/inquest/inquestFormPage.jsx";

import ProtectedRoute from "./protectedRoute.jsx";
import {InquestProvider} from "./context/inquestContext.jsx";

function App() {
  return (
    <AuthProvider>
      <InquestProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/inquest' element={<InquestPage />} />
              <Route path='/inquest/create' element={<InquestFormPage />} />
              <Route path='/inquest/:id' element={<InquestFormPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </InquestProvider>
    </AuthProvider>
  )
}

export default App