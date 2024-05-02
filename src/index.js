import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ShopPage from './pages/shop';
import Topb from './components/bar/topbar';
import Lowbotbar from './components/bar/lowbotbar';
import Footer from './components/bar/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Topb />

    <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<App />}></Route>
          <Route exact path="/shop" element={<ShopPage />}></Route>
        </Routes>
      </BrowserRouter>
    
    <Lowbotbar /> {/*Information , customer service, social*/}
    <Footer /> {/* 회사 정보 */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
