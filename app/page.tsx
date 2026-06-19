import React from 'react';
import Home from './home/page';
import ScrollToTop from './components/ScrollToTop';
import CellBlobBackground from './components/CellBlobBackground';

export default function Page() {
  return (
    <div className="home-page min-h-screen max-w-screen mx-0">
      <CellBlobBackground />
      <div className="home-page-content relative">
        <ScrollToTop />
        <Home />
      </div>
    </div>
  );
}
