import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/search"
            element={<h1>This is the search page</h1>}
          ></Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
        {/* Home page the one with search on*/}
        {/* Search PAge (The result page) */}
      </BrowserRouter>
    </div>
  );
}

export default App;
