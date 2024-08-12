import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import RollDice from "./pages/RollDice";
import App2 from "./pages/App2";
import App1 from "./pages/App1";
// import App from "./App";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/App2" element={<App2 />} />
          <Route path="/App1" element={<App1 />} />
     
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);