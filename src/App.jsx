import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loadingGif = 'https://media1.tenor.com/m/whis5JX19ycAAAAC/loading-load.gif'; 

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 2000);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <img
            src={loadingGif}
            alt="Loading..."
            style={{
              width: '100px', 
              height: '100px', 
              objectFit: 'contain', 
            }}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="flex-grow">
            <div className="mx-auto max-w-screen-xl px-4">
              <Carousel />
            </div>
            <NewsList />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
