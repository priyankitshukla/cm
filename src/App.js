import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import ClassEightNine from "./pages/ClassEightNine";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Footer from './Footer'


export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<  Header />}>
          <Route index element={<Home />} />
          <Route path="/classeightnine" element={<ClassEightNine />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);