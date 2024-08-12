import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "components/pages/HomePage";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
