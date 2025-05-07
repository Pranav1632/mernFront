import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FarmerForm from "./pages/FarmerForm";
import MerchantForm from "./pages/MerchantForm";
import CompanyForm from "./pages/CompanyForm";
import FarmerSuccess from "./pages/SuccessPages/FarmerSuccess";
import MerchantSuccess from "./pages/SuccessPages/MerchantSuccess";
import CompanySuccess from "./pages/SuccessPages/CompanySuccess";
import AboutPage from "./pages/AboutPage";
import SmoothPlatform from './pages/roles/SmoothPlatform';
import ExcellingMarket from './pages/roles/ExcellingMarket';
import BuildingRelationships from './pages/roles/BuildingRelationships';
import EconomicBoost from './pages/roles/EconomicBoost';
import EmpoweringFarmer from './pages/roles/EmpoweringFarmer';
import QualityEnsuring from './pages/roles/QualityEnsuring';
import SignupSuccess from './pages/SuccessPages/SignupSuccess';
import ContactPage from './components/ContactPage'; // adjust path if needed



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/farmer-form" element={<FarmerForm />} />
      <Route path="/merchant-form" element={<MerchantForm />} />
      <Route path="/company-form" element={<CompanyForm />} />
      <Route path="/farmer-success" element={<FarmerSuccess />} />
      <Route path="/merchant-success" element={<MerchantSuccess />} />
      <Route path="/company-success" element={<CompanySuccess />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/roles/smooth-platform" element={<SmoothPlatform />} />
      <Route path="/roles/excelling-market" element={<ExcellingMarket />} />
      <Route path="/roles/building-relationships" element={<BuildingRelationships />} />
      <Route path="/roles/economic-boost" element={<EconomicBoost />} />
      <Route path="/roles/empowering-farmer" element={<EmpoweringFarmer />} />
      <Route path="/roles/quality-ensuring" element={<QualityEnsuring />} />
      <Route path="/signup-success" element={<SignupSuccess />} />
      <Route path="/contact" element={<ContactPage />} />


     

    </Routes>
  );
}

export default App;
