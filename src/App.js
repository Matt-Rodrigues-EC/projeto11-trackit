import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import Today from "./Components/Today";
import Habits from "./Components/Habits";

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route exact path={`/`} element={<Login/>}/>
      <Route path={`/cadastro`} element={<Cadastro/>}/>
      <Route path={`/hoje`} element={<Today/>}/>
      <Route exact path={`/habitos`} element={<Habits/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
