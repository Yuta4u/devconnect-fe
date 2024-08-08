import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Homepage, Login, Profile, Register } from "./pages"

function App() {
  return (
    <div className="bg-[#fcfafa] w-full min-h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
