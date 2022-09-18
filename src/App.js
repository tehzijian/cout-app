import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cat, Detail } from "./Page/Cat";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cat />}>

        </Route>
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);