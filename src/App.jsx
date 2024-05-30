import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import { useState } from 'react'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home expenses={expenses} setExpenses={setExpenses} />}
          />
          <Route
            path='/detail'
            element={<div>여기는 지출 디테일 페이지입니다.</div>}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
