import { useState } from "react";

import {
  FaShoppingBag,
  FaCheck,
  FaStar,
  FaLeaf,
} from "react-icons/fa";

function ProductCard({ item, addToCart }) {
  const [selectedSize, setSelectedSize] = useState(item.sizes[0]);
  const [added, setAdded] = useState(false);
  const [caramelAdded, setCaramelAdded] = useState(false);

  const caramelCharge = caramelAdded ? 75 : 0;
  const finalPrice = Number(selectedSize.price) + caramelCharge;

  const handleAdd = () => {
    addToCart({
      ...item,
      selectedSize: selectedSize.label,
      caramelAdded,
      caramelCharge,
      originalPrice: Number(selectedSize.price),
      price: finalPrice,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#eadfd7] shadow-sm hover:shadow-lg duration-300 flex flex-col h-full">

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt=""
          className="w-full h-[180px] object-cover group-hover:scale-105 duration-500"
        />

        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">

          <div className="bg-white/95 backdrop-blur px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
            <FaStar className="text-yellow-500 text-[10px]" />
            <span className="text-[10px] font-bold text-[#4e342e]">
              Premium
            </span>
          </div>

          <div className="flex flex-col items-end gap-1.5">

            <div className="bg-white/95 border border-green-200 px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
              <FaLeaf className="text-green-600 text-[8px]" />
              <span className="text-[9px] font-bold text-green-700 tracking-wide">
                PURE VEG
              </span>
            </div>

            <div className="bg-[#4e342e]/95 px-2.5 py-1 rounded-full shadow-md">
              <span className="text-[9px] font-semibold text-white tracking-wide">
                SELF SERVICE
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col flex-1">

        {/* TITLE + PRICE */}
        <div className="flex justify-between items-start gap-3 min-h-[60px]">

          <div>

            <p className="text-[10px] uppercase tracking-[3px] text-[#8d6e63] font-semibold">
              {item.category}
            </p>

            <h2 className="text-[17px] font-extrabold text-[#3d2a22] leading-snug mt-1">
              {item.name}
            </h2>

          </div>

          <div className="bg-[#f8f4ee] border border-[#eee1d7] px-3 py-1.5 rounded-xl flex-shrink-0">

            <p className="text-[#4e342e] font-bold text-xs whitespace-nowrap">
              ₹{finalPrice}
            </p>

          </div>

        </div>

        {/* DESCRIPTION (IMPROVED PER YOUR REQUEST) */}
        <div className="mt-3 min-h-[65px]">

          <p className="text-[#6f5a50] text-[12px] leading-6">

            <span className="text-[13px] font-semibold text-[#3d2a22]">
              {item.desc}
            </span>

          </p>

        </div>

        {/* CARAMEL */}
        <div className="mt-3 min-h-[65px]">

          {item.caramelAddon && (

            <div>

              <button
                onClick={() => setCaramelAdded(!caramelAdded)}
                className={`w-full h-[36px] rounded-xl text-[11px] font-bold duration-300 border ${
                  caramelAdded
                    ? "bg-[#4e342e] text-white border-[#4e342e]"
                    : "bg-[#fff7f0] text-[#8b5e3c] border-[#f1d2b8]"
                }`}
              >
                {caramelAdded
                  ? "✓ Caramel Added (+₹75)"
                  : "+ Add Caramel (+₹75)"}
              </button>

              <p className="text-[10px] text-[#8d6e63] mt-1 text-center">
                Optional caramel add-on ₹75
              </p>

            </div>

          )}

        </div>

        {/* SIZES */}
        <div className="flex gap-1.5 flex-wrap mt-2 min-h-[36px]">

          {item.sizes.map((size, index) => (

            <button
              key={index}
              onClick={() => setSelectedSize(size)}
              className={`h-[30px] px-3 rounded-full text-[10px] font-bold duration-200 ${
                selectedSize.label === size.label
                  ? "bg-[#4e342e] text-white shadow"
                  : "bg-[#f3ece6] text-[#4e342e]"
              }`}
            >
              {size.label}
            </button>

          ))}

        </div>

        {/* BUTTON */}
        <div className="mt-auto pt-4">

          <button
            onClick={handleAdd}
            className={`w-full h-[42px] rounded-xl flex items-center justify-center gap-2 text-xs font-bold shadow-md duration-300 ${
              added
                ? "bg-green-500 text-white"
                : "bg-[#4e342e] hover:bg-[#5c4033] text-white"
            }`}
          >
            {added ? (
              <>
                <FaCheck /> Added
              </>
            ) : (
              <>
                <FaShoppingBag /> Add To Cart
              </>
            )}
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;