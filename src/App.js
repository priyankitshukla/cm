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
import EducationTraining from "./pages/EducationTraining";
import Entrepreneurship from "./pages/Entrepreneurship";
import EthicalHacking from "./pages/EthicalHacking";
import FinanceBanking from "./pages/FinanceBanking";
import FoodAgriculture from "./pages/FoodAgriculture";
import HotelManagement from "./pages/HotelManagement";
import Law from "./pages/Law";
import LifeScienceEnvironment from "./pages/LifeScienceEnvironment";
import Management from "./pages/Management";
import MarkettingManagement from "./pages/MarkettingManagement";
import MathsStatistics from "./pages/MathsStatistics";
import Medicine from "./pages/Medicine";
import MarchantNavy from "./pages/MerchantNavy";
import NutritionFitness from "./pages/NutritionFitness";
import PerformingArts from "./pages/PerformingArts";
import Sales from "./pages/Sales";
import SocialSciencesHumanities from "./pages/SocialSciencesHumanities";
import PhysicalScience from "./pages/PhysicalScience";

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
            <Route
              path="/distributionLogistics"
              element={<DistributionLogistics />}
            ></Route>
            <Route path="/economics" element={<Economics />} />
            <Route path="/educationtraining" element={<EducationTraining />} />
            <Route path="/entrepreneurship" element={<Entrepreneurship />} />
            <Route path="/ethicalhacking" element={<EthicalHacking />} />
            <Route path="/financebanking" element={<FinanceBanking />} />
            <Route path="/foodagriculture" element={<FoodAgriculture />} />
            <Route path="/hotelmanagement" element={<HotelManagement/>} />
            <Route path="/law" element={<Law/>} />
            <Route path="/lifescienceenvironment" element={<LifeScienceEnvironment/>} />
            <Route path="/management" element={<Management/>} />
            <Route path="/markettingmanagement" element={<MarkettingManagement/>} />
            <Route path="/mathstatistics" element={<MathsStatistics/>} />
            <Route path="/medicine" element={<Medicine/>} />
            <Route path="/marchantnavy" element={<MarchantNavy/>} />
            <Route path="/nutritionfitness" element={<NutritionFitness/>} />
            <Route path="/performingarts" element={<PerformingArts/>} />
            <Route path="/sales" element={<Sales/>} />
            <Route path="/socialscienceshumanities" element={<SocialSciencesHumanities/>} />
            <Route path="/physicalscience" element={<PhysicalScience/>} />

            
            

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
