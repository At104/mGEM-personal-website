import React from 'react';
import Home from './home/page';
import ScrollToTop from './components/ScrollToTop';

export default function Page() {
  return (
    <div className='min-h-screen max-w-screen mx-0'>
      <ScrollToTop />
      <div>
        <Home />
      </div>
    </div>
  );
}
