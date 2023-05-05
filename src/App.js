import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Screen from "./routes/Screen";


function App() {
  const baseUrl = `${process.env.PUBLIC_URL}/`
  return (
    <Router>
      <Routes>
        <Route path={baseUrl} element={<Home />} />
        <Route path={baseUrl + `/movie/:id`} element={<Screen />} />
      </Routes>
    </Router>
    );
}

export default App;
