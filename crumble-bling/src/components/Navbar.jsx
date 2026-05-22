import { useState } from "react";

import {
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar({ cart, setOpenCart }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-[#eadfd7]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-[120px] h-[90px] flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt=""
              className="w-14 h-14 rounded-full object-cover border-2 border-[#8d6e63]"
            />

            <div>
              <h1 className="text-2xl font-black text-[#3d2a22]">
                The Crumble Bling
              </h1>
              <p className="text-xs text-[#8d6e63] mt-1">
                Premium Cakes & Desserts
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <a href="#" className="text-[#4e342e] font-semibold hover:text-[#8d6e63] duration-300">
              Home
            </a>

            <a href="#menu" className="text-[#4e342e] font-semibold hover:text-[#8d6e63] duration-300">
              Menu
            </a>

            {/* FIXED HERE */}
            <a href="#contact" className="text-[#4e342e] font-semibold hover:text-[#8d6e63] duration-300">
              Contact
            </a>
          </div>

          {/* Cart + Mobile */}
          <div className="flex items-center gap-4">

            <button
              onClick={() => setOpenCart(true)}
              className="relative w-14 h-14 rounded-full bg-[#4e342e] hover:bg-[#5c4033] duration-300 flex items-center justify-center text-white shadow-xl"
            >
              <FaShoppingBag className="text-lg" />

              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-[#4e342e] text-xs font-black w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                  {cart.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden w-12 h-12 rounded-full bg-[#f3ece6] flex items-center justify-center text-[#4e342e]"
            >
              {mobileMenu ? <FaTimes /> : <FaBars />}
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed top-[90px] left-0 w-full bg-white z-40 border-b border-[#eadfd7] lg:hidden">
          <div className="flex flex-col p-6 gap-6">

            <a href="#" onClick={() => setMobileMenu(false)} className="text-[#4e342e] font-semibold">
              Home
            </a>

            <a href="#menu" onClick={() => setMobileMenu(false)} className="text-[#4e342e] font-semibold">
              Menu
            </a>

            {/* FIXED HERE */}
            <a href="#contact" onClick={() => setMobileMenu(false)} className="text-[#4e342e] font-semibold">
              Contact
            </a>

          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;