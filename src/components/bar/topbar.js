import {GiShoppingCart} from"react-icons/gi";
import React,{useState} from "react";
import classNames from "classnames";
import "./bar.css";
import { Route } from "react-router-dom";

export default function Topb(){

  const [menuToggle, setMenuToggle] = useState(false);
   
  return(
        <nav className=" fixed top-0 w-full z-50 bg-white shadow-md">
          <div className="px-1 border-t-1 border-r-1 border-l-1 overflow-hidden"> 
            <div className="flex justify-between mx-auto items-center ">
              
               {/* mobile menu */}
               <div className="md:hidden md:justify-start flex flex-row justify-end">
               <button onClick={() => setMenuToggle(!menuToggle)}>
              {menuToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
                </div>
               
              {/* 메뉴 h:세로 = 3:10 비율 */} 
              <div className="flex justify-center items-center  ">
                  <a href="/" className="flex">
                    <h2 className="fon2 px-3 py-3">SHOPNAME</h2>
                  </a>
                <div className=" items-center max-h-11 overflow-hidden hover:bg-gray-500 hidden md:flex">
                  <a href="/newarrival" className="flex items-center py-5 px-2 text-gray-700">
                  <span className="px-2 py-auto bottom-1.5 text-xs">신상품 </span>
                  </a>
                </div>
                <div className="max-h-11 overflow-hidden hover:bg-gray-500 hidden md:flex">
                  <a href="/shop" className="flex items-center py-5 px-2 text-gray-700 ">
                  <span className="px-3 py-auto bottom-1.5 text-xs ">샵 </span>
                  </a>
                </div>
                <div className="max-h-11 overflow-hidden  hover:bg-gray-500 hidden md:flex">
                  <a href="/sale" className="flex items-center py-5 px-2 text-red-600 ">
                  <span className="px-3 py-auto bottom-1.5 text-xs ">세일 </span>
                  </a>
                </div>
              </div>
              <div className="flex-row justify-end  hidden md:flex">
                <div className="px-4  max-h-11 overflow-hidden ">
                    <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:bg-gray-500">
                        <span className="relative px-12 py-auto bottom-1.5 text-xs">로그인 </span>
                    </a>
                </div>
                <div className=" px-6 flex items-center max-h-11 hover:bg-gray-500">
                   <GiShoppingCart />
                </div>
              </div>
                 
            </div>
              {/* mobile menu items */}
              <div className={classNames("md:hidden", { hidden: !menuToggle })}>
                          <a href="#" className="fon1 block py-2 px-4 text-lg hover:bg-gray-200">
                            신상품
                          </a>
                          <a href="#" className="fon1 block py-2 px-4 text-lg hover:bg-gray-200">
                            샵
                          </a>
                          <a href="#" className="fon1 block py-2 px-4 text-lg text-red-600  hover:bg-gray-200">
                            세일
                          </a>
                        </div>
          </div>
        </nav>
    )
}