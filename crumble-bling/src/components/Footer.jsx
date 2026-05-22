import {
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="bg-[#3d2a22] text-white pt-12 pb-6">

      <div className="max-w-[1400px] mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 pb-10 border-b border-[#5c4033]">

          {/* Brand */}
          <div className="space-y-5">
            <div>
              <h2 className="text-3xl font-black tracking-wide">
                Food Corner
              </h2>

              <p className="text-[#d7ccc8] text-sm leading-7 mt-3 max-w-[320px]">
                Delicious pure veg food with premium taste and hygienic preparation for every customer.
              </p>
            </div>

            <div className="flex items-center gap-4">

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="w-11 h-11 rounded-full bg-[#4e342e] hover:bg-green-600 duration-300 flex items-center justify-center"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="https://www.instagram.com/thecrumblebling?igsh=ZDltdGl3eHc0YmJj"
                target="_blank"
                className="w-11 h-11 rounded-full bg-[#4e342e] hover:bg-pink-600 duration-300 flex items-center justify-center"
              >
                <FaInstagram size={18} />
              </a>

            </div>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold">Contact Info</h3>

            <div className="flex flex-col gap-5 text-sm text-[#efebe9]">

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="flex items-center gap-4 hover:text-green-400 duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#4e342e] flex items-center justify-center">
                  <FaPhoneAlt size={14} />
                </div>
                <span className="text-[15px]">+91 98765 43210</span>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4e342e] flex items-center justify-center mt-1">
                  <FaMapMarkerAlt size={15} />
                </div>

                <span className="text-[15px] leading-7">
                  Rajhans Wings, opp New LP Savani School, Palanpur, Surat - 395009
                </span>
              </div>

            </div>
          </div>

          {/* Service Info */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold">Service Info</h3>

            <div className="flex flex-col gap-4 text-sm text-[#efebe9]">

              <div className="flex items-center gap-3">
                <span>🌱</span>
                <p className="text-[15px]">100% Pure Veg</p>
              </div>

              <div className="flex items-center gap-3">
                <span>🛎️</span>
                <p className="text-[15px]">Self Service Available</p>
              </div>

              <div className="flex items-center gap-3">
                <span>🍽️</span>
                <p className="text-[15px]">Freshly Prepared Food</p>
              </div>

              <div className="flex items-center gap-3">
                <span>✨</span>
                <p className="text-[15px]">Clean & Hygienic Kitchen</p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center text-[#bcaaa4] text-sm pt-6">
          © 2026 Food Corner. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;