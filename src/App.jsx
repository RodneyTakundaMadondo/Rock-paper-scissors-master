import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Components/Layout'
import Home from './Pages/Home'
import Result from './Pages/Result'
import { useEffect, useState } from "react";

export default function App() {
   const choices = ["rock", "paper", "scissors"];
   const [randomItem, setRandomItem] = useState(null);
   const [score, setScore] = useState(() => {
      const savedScore = localStorage.getItem("gameScore");

      return savedScore !== null? Number(savedScore) : 0;
   });

   function generateRandomItem() {
      const randomIndex = Math.floor(Math.random() * choices.length);
      setRandomItem(choices[randomIndex]);
   }

   console.log(score)
   useEffect(() => {
      localStorage.setItem("gameScore", score)
   }, [score])

   return (
      <BrowserRouter basename="/Rock-paper-scissors-master/">
         <Routes>
            <Route element={<Layout score={score} />}>
               <Route path="/" element={<Home onReturn={generateRandomItem} />} />
               <Route path="/result/:playerChoice" element={<Result score={score} setScore={setScore} randomItem={randomItem} />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}