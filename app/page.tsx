"use client"
import React, { useEffect, useState } from 'react';
import Home from './home/page';
import ScrollToTop from './components/ScrollToTop';


export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient && (
        <div className='min-h-screen max-w-screen mx-0'>
          
          <ScrollToTop />
          
          
          {/* Wrap the content based on the current path */}
          <div>
            {/* Home page */}
            <Home />
            {/* You can include other content based on current route here */}
          </div>
          
        </div>
      )}
    </div>
  );
}
