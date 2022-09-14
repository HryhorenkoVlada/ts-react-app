import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          {/* <Route path=":personId" element={<ProfilePage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
