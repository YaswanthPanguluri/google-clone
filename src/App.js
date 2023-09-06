import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/search"
            element={<SearchPage />}
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
