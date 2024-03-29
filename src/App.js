
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SchedulePage from './pages/SchedulePage';
import InspectionPage from './pages/InspectionPage';
import ForSalePage from './pages/ForSalePage'
import Header from './components/Header';
import Footer from './components/Footer';
import ForSaleDetailsPage from './pages/ForSaleDetailsPage';





function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='contactPage' element={<ContactPage />} />
          <Route path='aboutPage' element={<AboutPage />} />
          <Route path='schedulePage' element={<SchedulePage />} />
          <Route path='inspectionPage' element={<InspectionPage />} />
          <Route path='forSalePage' element={<ForSalePage />} />
          <Route path='/forSalePage/:itemId' element={<ForSaleDetailsPage />} />
        </Routes>          
      <Footer />
    </div>
  )
}

export default App;
