import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import DhanusPosters from './components/DhanusPosters/DhanusPosters';
import Footer from './components/Footer/Footer';
import TopBanner from './components/TopBanner/TopBanner';
import { TopBannerViewProvider } from './context/TopBannerViewContext';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';

function App() {
  return (
    <TopBannerViewProvider>
      <div className="App">
        <TopBanner />
        <Home />
        {/*<DhanusPosters />*/}
        <Events />
        <Footer />
      </div>
    </TopBannerViewProvider>
  );
}

export default App;