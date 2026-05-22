import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

import products from "../data/products";

import {
  FaWhatsapp,
  FaSearch,
  FaStar,
} from "react-icons/fa";

function Home() {
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  useEffect(() => {
    const savedCart =
      localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const addToCart = (item) => {

    const existingIndex =
      cart.findIndex(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedSize ===
            item.selectedSize
      );

    if (existingIndex !== -1) {

      const updated = [...cart];

      const existingItem =
        updated[existingIndex];

      /* If caramel added later */
      if (
        item.caramelAdded &&
        !existingItem.caramelAdded
      ) {

        existingItem.caramelAdded =
          true;

        existingItem.price =
          Number(
            existingItem.price
          ) + 75;

        existingItem.caramelCharge =
          75;
      }

      existingItem.quantity += 1;

      setCart(updated);

    } else {

      setCart([
        ...cart,
        {
          ...item,
          quantity: 1,
        },
      ]);
    }
  };

  const filteredProducts =
    products.filter((item) => {

      const matchesSearch =
        item.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category === "All"
          ? true
          : item.category ===
            category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (
    <>
      <Navbar
        cart={cart}
        setOpenCart={setOpenCart}
      />

      <Hero />

      <section
        id="menu"
        className="bg-[#f8f4ee] py-[120px]"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-[120px]">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[8px] text-[#8d6e63] font-semibold text-sm">
              Luxury Bakery Collection
            </p>

            <h1 className="text-4xl md:text-6xl font-black text-[#3d2a22] mt-5">
              Signature Cakes
            </h1>

            <p className="text-[#8d6e63] text-lg mt-6 leading-8">
              Pure veg handcrafted cakes
              and desserts made with
              premium ingredients.
            </p>
          </div>

          {/* Search */}
          <div className="flex flex-col lg:flex-row gap-5 justify-between mt-16">

            <div className="relative w-full lg:w-[380px]">
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8d6e63]" />

              <input
                type="text"
                placeholder="Search cakes..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="w-full bg-white border border-[#eadfd7] rounded-full h-[58px] pl-14 pr-5 outline-none text-[#4e342e] shadow-md"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-3 flex-wrap">
              {[
                "All",
                "Cakes",
                "Desserts",
              ].map(
                (item, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setCategory(item)
                    }
                    className={`px-6 h-[52px] rounded-full font-semibold duration-300 ${
                      category === item
                        ? "bg-[#4e342e] text-white shadow-xl"
                        : "bg-white text-[#4e342e] border border-[#eadfd7]"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Products */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-20">
            {filteredProducts.map(
              (item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  addToCart={addToCart}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* Reviews */}
{/* Reviews */}
<section className="bg-white py-[120px]">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-[120px]">

    <div className="text-center">
      <p className="uppercase tracking-[8px] text-[#8d6e63] font-semibold text-sm">
        Customer Love
      </p>

      <h1 className="text-4xl md:text-6xl font-black text-[#3d2a22] mt-5">
        Reviews & Ratings
      </h1>

      <p className="text-[#8d6e63] text-lg mt-6 leading-8 max-w-2xl mx-auto">
        Genuine feedback from happy customers who enjoyed our premium bakery desserts.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-7 mt-20">

      {[
        {
          name: "Riya Patel",
          img: "https://ui-avatars.com/api/?name=Riya+Patel&background=4e342e&color=fff",
          rating: 5,
          time: "2 days ago",
          product: "Chocolate Truffle Cake (1kg)",
          review:
            "Absolutely loved it! The cake was super fresh, soft, and perfectly balanced sweetness. Everyone at the party asked where I ordered from.",
        },
        {
          name: "Aarav Shah",
          img: "https://ui-avatars.com/api/?name=Aarav+Shah&background=6d4c41&color=fff",
          rating: 5,
          time: "1 week ago",
          product: "Nutella Cake + Caramel Add-on",
          review:
            "One of the best cakes I’ve had in Surat. The caramel upgrade made it even better. Delivery was smooth and packaging was premium.",
        },
        {
          name: "Meera Jain",
          img: "https://ui-avatars.com/api/?name=Meera+Jain&background=8d6e63&color=fff",
          rating: 5,
          time: "3 weeks ago",
          product: "Brownies Box (6 pcs)",
          review:
            "So rich and fudgy! The brownies literally melt in the mouth. Perfect for gifting as well, presentation was beautiful.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-[#f8f4ee] rounded-[30px] p-8 border border-[#f1e5db] shadow-md hover:shadow-xl duration-300"
        >

          {/* Stars + time */}
          <div className="flex items-center justify-between">

            <div className="flex gap-1 text-yellow-500">
              {Array.from({ length: item.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <span className="text-xs text-[#8d6e63]">
              {item.time}
            </span>
          </div>

          {/* Review text */}
          <p className="text-[#6d4c41] mt-6 leading-8 text-[15px] min-h-[120px]">
            "{item.review}"
          </p>

          {/* Product */}
          <p className="text-xs text-[#8d6e63] mt-4">
            Ordered: <span className="font-semibold">{item.product}</span>
          </p>

          {/* User */}
          <div className="mt-8 flex items-center gap-4">

            <img
              src={item.img}
              alt={item.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-[#e0d3c8]"
            />

            <div>
              <h3 className="text-lg font-black text-[#4e342e]">
                {item.name}
              </h3>

              <div className="flex items-center gap-2">
                <p className="text-sm text-[#8d6e63]">
                  Verified Customer
                </p>

                <span className="text-green-600 text-xs font-bold">
                  ●
                </span>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  </div>
</section>

      <Footer />

      <Cart
        cart={cart}
        setCart={setCart}
        openCart={openCart}
        setOpenCart={setOpenCart}
      />

      {/* WhatsApp */}
      <a
        href="https://wa.me/919316972831"
        target="_blank"
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 duration-300 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </>
  );
}

export default Home;