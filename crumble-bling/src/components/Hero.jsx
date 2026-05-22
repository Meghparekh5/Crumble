import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { GiCakeSlice } from "react-icons/gi";

function Hero() {
  return (
    <section
      className="min-h-screen relative flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#f5ede5]/95 via-[#f5ede5]/75 to-transparent"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-[120px] w-full pt-[180px] pb-[140px]">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[10px] text-[#8d6e63] font-semibold text-sm"
          >
            Premium Bakery Experience
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-[#3d2a22] leading-tight mt-6"
          >
            Crafted With Passion,
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-6xl lg:text-7xl italic font-light text-[#8d6e63] mt-3"
          >
            Baked to Perfection
          </motion.h2>

          <div className="w-32 h-[3px] bg-[#8d6e63] mt-10 rounded-full"></div>

          <p className="mt-10 text-lg md:text-2xl text-[#4e342e] leading-10 max-w-2xl font-medium">
            Indulge in handcrafted cakes, pastries and desserts
            designed for unforgettable celebrations and luxury moments.
          </p>

          <div className="flex flex-wrap gap-6 mt-14">
            <a
              href="#menu"
              className="bg-[#8d6e63] hover:bg-[#5c4033] duration-300 text-white px-10 py-5 rounded-full text-lg flex items-center gap-3 shadow-2xl"
            >
              <GiCakeSlice className="text-2xl" />
              Explore Menu
            </a>

            <a
              href="https://wa.me/919316972831"
              target="_blank"
              className="border-2 border-[#8d6e63] text-[#5c4033] hover:bg-[#8d6e63] hover:text-white duration-300 px-10 py-5 rounded-full text-lg flex items-center gap-3 bg-white/50 backdrop-blur-md shadow-lg"
            >
              <FaWhatsapp className="text-2xl" />
              WhatsApp Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;