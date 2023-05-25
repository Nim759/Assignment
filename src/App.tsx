import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import List from "./pages/list";
import View from "./pages/view"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<List/>}/>
      <Route path="/view" element={<View/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
