import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Exercises from "./pages/Exercises/Exercises";
import ExerciseDetail from "./pages/ExcerciseDetail/ExcerciseDetail";
import Caculator from "./pages/Calculator/Caculator";
import Nutrition from "./pages/Nutrition/Nutrition";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exercises" element={<Exercises />}></Route>
        <Route path="/exercises/:id" element={<ExerciseDetail />}></Route>
        <Route path="/calculator" element={<Caculator />}></Route>
        <Route path="/nutrition" element={<Nutrition />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
