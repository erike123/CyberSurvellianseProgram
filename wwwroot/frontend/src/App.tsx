import Aboutus from './components/common/About/Aboutus';
import Home from './components/common/Home/Home';
import Card from './components/shared/Cards/Cards';
import './index.css';  
import Path from './Paths';
import AnalysisComponent from './sections/AudiPage/AnalysisComponent';
import AuditComponent from './sections/AudiPage/AuditComponent';
import AuditPage from './sections/AudiPage/AuditComponent';
import SignalReportPage from './sections/AudiPage/SignalReportPage';

import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Navigation from './sections/Navigation/Navigation';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <main className="relative bg-color-gradient">
      <Navigation />
        <Routes >
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Aboutus} element={<Aboutus />} />
          <Route path={Path.Audit} element={<AuditComponent />} />
          <Route path={Path.Analysis} element={<AnalysisComponent />} />
          <Route path={Path.SignalReportPage} element={<SignalReportPage />} />

        </Routes>
    
      <Footer />
    </main>
  )
}