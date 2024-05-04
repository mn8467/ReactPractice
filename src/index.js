import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ShopPage from './pages/shop';
import Topb from './components/bar/topbar';
import Footer from './components/bar/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <div className="grid grid-rows-3 grid-cols-12 gap-2 h-0">
          <Topb />
          <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<App />}></Route>   {/*main col 12*/}
                <Route exact path="/shop" element={<ShopPage />}></Route> {/* nav col 2 , main col 10 */}
              </Routes>
            </BrowserRouter>
          <footer className="row-span-3 col-span-12">
           {/*Information , customer service, social*/}
            <Footer /> {/* 회사 정보 */}
          </footer>
    </div>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
