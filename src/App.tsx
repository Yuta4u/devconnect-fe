import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Homepage, Login, Profile, Register } from "./pages"
import ProtectdRoute from "./lib/ProtectedRoute"

function App() {
  return (
    <div className="bg-[#fcfafa] w-full min-h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectdRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
