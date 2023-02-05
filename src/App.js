import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Headers from "./components/Header/Header";
import { CSSGeral } from "./components/Styles/CSSGeral";

function App() {
  return (
    <Router>
      <CSSGeral/>
      <Headers/>


      <Routes>
        <Route exact='true' path="/" element={<Home/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
