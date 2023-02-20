import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Mypage from './pages/Mypage/Mypage';
import Pay from './pages/Pay/Pay';
import Productlist from './pages/Productlist/Productlist';
import Signup from './pages/Signup/Signup';
import Container from './components/Container/Container';
import ProductDetail from './pages/Productdetail/Productdetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/productlist" element={<Productlist />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
