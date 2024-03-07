import React from 'react';
import Navabar from './Components/Navabar';

import ProductListingPage from './Pages/ProductListingPage';
import ProductPage from './Pages/ProductPage';

import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import Footer from './Components/Footor';
import Search from './Pages/Search';
import WishListPage from './Pages/WishListPage';
import AddtoCartPage from './Pages/AddtoCartPage';

function App() {
  return (
    <div className="App">
      <header>
        <Navabar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<ProductListingPage />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/AddtoCart" element={<AddtoCartPage />} />
        <Route path='/WishList' element={<WishListPage />} />
        <Route path="/Product/:id" element={<ProductPage />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
