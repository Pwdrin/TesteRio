import Home from "../pages/Home";

import Service from "../pages/Service";
import Contact from "../pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
   
        {/* <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
