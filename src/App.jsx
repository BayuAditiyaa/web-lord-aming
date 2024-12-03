import { Route, Routes } from "react-router";

import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Pengertian from "./pages/Pengertian";
import TentangKami from "./pages/TentangKami";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pengertian" element={<Pengertian />}></Route>
          <Route path="/tentang-kami" element={<TentangKami />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
