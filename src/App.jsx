import { BrowserRouter, Routes, Route } from "react-router-dom";



import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Types from "./pages/Types";
import Trending from "./pages/Trending";
import SecurityTips from "./pages/SecurityTips";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import Navbar from "./componants/Navbar";
import ProtectedRoute from "./componants/ProtectedRoute";
import CrimeDetails from "./pages/CrimeDetails";
import ScamDetails from "./pages/ScamDetails";



function App() {
  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>

        {/* Public Routes */}
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />


        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/types"
          element={
            <ProtectedRoute>
              <Types/>
            </ProtectedRoute>
          }
        />
        <Route
  path="/types/:slug"
  element={
    <ProtectedRoute>
      <CrimeDetails/>
    </ProtectedRoute>
  }
/>

        <Route
          path="/trending"
          element={
            <ProtectedRoute>
              <Trending/>
            </ProtectedRoute>
          }
        />
        <Route
  path="/trending/:slug"
  element={
    <ProtectedRoute>
      <ScamDetails/>
    </ProtectedRoute>
  }
/>

        <Route
          path="/security-tips"
          element={
            <ProtectedRoute>
              <SecurityTips/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About/>
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;