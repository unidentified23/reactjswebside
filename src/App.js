
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Contacts } from "./Pages/Contacts";
import { Programs } from "./Pages/Programs";
import { Facilities } from "./Pages/Facilities";
import { RuleBook } from "./Pages/RuleBook";
import { TeacherStatistics } from "./Pages/TeacherStatistics";
import { OverallPerformance } from "./Pages/OverallPerformance";
import { MetrixStatistics } from "./Pages/MetrixStatistics";
import { SchoolStatistics } from "./Pages/SchoolStatistics";
import { UniformAndPayment } from "./Pages/UniformAndPayment";
import { TopNavbar } from "./componets/TopNavbar";
import { Vaccancies } from "./Pages/Vaccancies";

export default function App() {
  return (     
                                                                                                             
    <BrowserRouter>
    <TopNavbar/>
      <Routes>
        
        <Route path="/" element={<Home />}/>
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contacts />} />
        <Route path="/Programs" element={<Programs />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/RuleBook" element={<RuleBook />} />
        <Route path="/TeacherStatistics" element={<TeacherStatistics />} />
        <Route path="/OverallPerformance" element={<OverallPerformance />} />
        <Route path="/MetrixStatistics" element={<MetrixStatistics />} />
        <Route path="/SchoolStatistics" element={<SchoolStatistics />} />
        <Route path="/UniformAndPayment" element={<UniformAndPayment />} />
        <Route path="/Vaccancies" element={<Vaccancies />} />
      </Routes>
    </BrowserRouter>
  );
}
