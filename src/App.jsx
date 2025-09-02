import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Components/Layout'
import Home from './Pages/Home'
import Result from './Pages/Result'
import { useState } from "react"
export default function App() {
   const [score,setScore] = useState(0);
   return (
      <BrowserRouter basename="/Rock-paper-scissors-master/">
         <Routes>
            <Route element={<Layout score={score} />}>
               <Route path="/" element={<Home />} />
               <Route path="/result/:id" element={<Result setScore={setScore} />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}