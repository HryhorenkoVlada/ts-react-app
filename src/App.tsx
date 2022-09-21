import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import MainPage from './pages/MainPage/MainPage';
import ProductsDetailsPage from './pages/ProductsDetailsPage/ProductsDetailsPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductsDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
