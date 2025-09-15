import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Components/Layout'
import Home from './Pages/Home'
import Result from './Pages/Result'
import { useEffect, useState } from "react";

export default function App() {
 
   const [randomItem, setRandomItem] = useState(null);
   const [advancedMode,setAdvancedMode] = useState(false);
     const choices = advancedMode? ["rock", "paper", "scissors","lizard","spock"]: ["rock", "paper", "scissors"];
   const [score, setScore] = useState(() => {
      const savedScore = localStorage.getItem("gameScore");

      return savedScore !== null? Number(savedScore) : 0;
   });

   function generateRandomItem() {
      const randomIndex = Math.floor(Math.random() * choices.length);
      setRandomItem(choices[randomIndex]);
   }
  
   useEffect(() => {
      localStorage.setItem("gameScore", score)
   }, [score])

   return (
      <BrowserRouter basename="/Rock-paper-scissors-master/">
         <Routes>
            <Route element={<Layout score={score} advancedMode={advancedMode} setAdvancedMode={setAdvancedMode} />}>
               <Route path="/" element={<Home advancedMode={advancedMode} onReturn={generateRandomItem} />} />
               <Route path="/result/:playerChoice" element={<Result score={score} setScore={setScore} randomItem={randomItem} />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}