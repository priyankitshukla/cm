import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import ClassEightNine from "./pages/ClassEightNine";
import ClassTenTweleve from "./pages/ClassTenTweleve";
import Graduate from "./pages/Graduate";
import Home from "./pages/Home";
import Team from "./pages/Teams";
import ContactUs from "./pages/ContactUs";
import Footer from "./Footer";
import ApplyForJob from "./pages/ApplyForJob";
import ActuarialSciences from "./pages/ActuarialSciences";
import AnimationGraphics from "./pages/AnimationGraphics";
import AppliedArts from "./pages/AppliedArts";
import Architecture from "./pages/Architecture";
import Aviation from "./pages/Aviation";
import CabinCrew from "./pages/CabinCrew";
import CivilServices from "./pages/CivilServices";
import CommerceAccounts from "./pages/CommerceAccounts";
import ComputerApplicationIT from "./pages/ComputerApplicationIT";
import Defense from "./pages/Defense";
import Design from "./pages/Design";
import DistributionLogistics from "./pages/DistributionLogistics";
import Economics from "./pages/Economics";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/classeightnine" element={<ClassEightNine />} />
            <Route path="/classtentwelve" element={<ClassTenTweleve />} />
            <Route path="/graduate" element={<Graduate />} />
            <Route path="/team" element={<Team />} />
            <Route path="/applyforjob" element={<ApplyForJob />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/actuarialsciences" element={<ActuarialSciences />} />
            <Route path="/animationgraphics" element={<ActuarialSciences />} />
            <Route path="/appliedarts" element={<AppliedArts />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/aviation" element={<Aviation />} />
            <Route path="/cabincrew" element={<CabinCrew />} />
            <Route path="/civilservices" element={<CivilServices />} />
            <Route path="/commerceaccounts" element={<CommerceAccounts />} />
            <Route
              path="/computerapplicationit"
              element={<ComputerApplicationIT />}
            />
            <Route path="/defense" element={<Defense />} />
            <Route path="/design" element={<Design />} />
            <Route path="/economics" element={<Economics />} />


            Economics

            


            

            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
