import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import CreateProductPage from './pages/CreateProductPage/CreateProductPage';
import EditProductPage from './pages/EditProductPage/EditProductPage';
import MainPage from './pages/MainPage/MainPage';
import ProductsDetailsPage from './pages/ProductsDetailsPage/ProductsDetailsPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/create" element={<CreateProductPage />} />
        <Route path="/products/:productId" element={<ProductsDetailsPage />} />
        <Route path="/products/:productId/edit" element={<EditProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
