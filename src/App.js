 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Screens/NotFound/NotFound";
import Portfolio from "./Screens/Portfolio/Portfolio";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
