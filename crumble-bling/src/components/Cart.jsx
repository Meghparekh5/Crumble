import {
  FaShoppingBag,
  FaTimes,
  FaPlus,
  FaMinus,
  FaTrash,
} from "react-icons/fa";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

function Cart({
  cart,
  setCart,
  openCart,
  setOpenCart,
}) {

  const increaseQty = (index) => {
    const updated = [...cart];

    updated[index].quantity += 1;

    setCart(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cart];

    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;

      setCart(updated);
    }
  };

  const removeItem = (index) => {
    const updated = [...cart];

    updated.splice(index, 1);

    setCart(updated);
  };

  /* Toggle caramel */
  const toggleCaramel = (index) => {

    const updated = [...cart];

    const item = updated[index];

    if (item.caramelAdded) {

      item.caramelAdded = false;

      item.price =
        Number(item.price) - 75;

    } else {

      item.caramelAdded = true;

      item.price =
        Number(item.price) + 75;
    }

    setCart(updated);
  };

  const total = cart.reduce(
    (acc, item) => {
      return (
        acc +
        Number(item.price) *
          item.quantity
      );
    },
    0
  );

  const caramelTotal =
    cart.reduce((acc, item) => {
      return (
        acc +
        (item.caramelAdded
          ? 75 *
            item.quantity
          : 0)
      );
    }, 0);

  const whatsappMessage = cart
    .map((item) => {
      return `${item.name} (${item.selectedSize})${
        item.caramelAdded
          ? " + Caramel"
          : ""
      } x${item.quantity} - ₹${
        item.price *
        item.quantity
      }`;
    })
    .join("%0A");

  return (
    <AnimatePresence>
      {openCart && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setOpenCart(false)
            }
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]"
          />

          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{
              duration: 0.3,
            }}
            className="fixed top-0 right-0 h-screen w-full sm:w-[430px] bg-[#fffaf5] z-[1000] shadow-2xl flex flex-col"
          >

            {/* Header */}
            <div className="p-5 border-b border-[#eadfd7] flex justify-between items-center">

              <div>
                <h2 className="text-3xl font-black text-[#4e342e]">
                  Your Cart
                </h2>

                <p className="text-[#8d6e63] mt-1 text-sm">
                  Freshly Baked Orders
                </p>
              </div>

              <button
                onClick={() =>
                  setOpenCart(false)
                }
                className="w-11 h-11 rounded-full bg-[#f3ece6] flex items-center justify-center text-[#4e342e]"
              >
                <FaTimes />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">

              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">

                  <div className="w-24 h-24 rounded-full bg-[#f3ece6] flex items-center justify-center">
                    <FaShoppingBag className="text-4xl text-[#8d6e63]" />
                  </div>

                  <h3 className="text-2xl font-black text-[#4e342e] mt-6">
                    Cart is Empty
                  </h3>

                  <p className="text-[#8d6e63] mt-3 leading-7 text-sm">
                    Add delicious cakes,
                    brownies and desserts
                    to continue.
                  </p>
                </div>
              ) : (
                cart.map(
                  (item, index) => (

                    <div
                      key={index}
                      className="bg-white rounded-3xl p-4 shadow-md border border-[#f1e5db]"
                    >

                      <div className="flex gap-4">

                        {/* Image */}
                        <img
                          src={item.image}
                          alt=""
                          className="w-24 h-24 rounded-2xl object-cover"
                        />

                        {/* Content */}
                        <div className="flex-1">

                          <div className="flex justify-between gap-2">

                            <div>
                              <h3 className="text-[17px] font-black text-[#4e342e] leading-tight">
                                {item.name}
                              </h3>

                              <p className="text-sm text-[#8d6e63] mt-1">
                                {item.selectedSize}
                              </p>

                              {/* Caramel Button */}
                              <button
                                onClick={() =>
                                  toggleCaramel(
                                    index
                                  )
                                }
                                className={`mt-2 h-[30px] px-3 rounded-full text-[10px] font-bold duration-300 ${
                                  item.caramelAdded
                                    ? "bg-[#4e342e] text-white"
                                    : "bg-[#fff1e6] text-[#b26a3c]"
                                }`}
                              >
                                {item.caramelAdded
                                  ? "Remove Caramel"
                                  : "+ Add Caramel ₹75"}
                              </button>
                            </div>

                            <button
                              onClick={() =>
                                removeItem(
                                  index
                                )
                              }
                              className="text-red-400 hover:text-red-500"
                            >
                              <FaTrash />
                            </button>
                          </div>

                          {/* Bottom */}
                          <div className="flex justify-between items-center mt-4">

                            {/* Qty */}
                            <div className="flex items-center gap-3 bg-[#f5ede5] rounded-full px-3 py-2">

                              <button
                                onClick={() =>
                                  decreaseQty(
                                    index
                                  )
                                }
                                className="text-[#4e342e]"
                              >
                                <FaMinus />
                              </button>

                              <span className="font-bold text-[#4e342e] min-w-[20px] text-center">
                                {
                                  item.quantity
                                }
                              </span>

                              <button
                                onClick={() =>
                                  increaseQty(
                                    index
                                  )
                                }
                                className="text-[#4e342e]"
                              >
                                <FaPlus />
                              </button>
                            </div>

                            {/* Price */}
                            <div className="text-right">

                              {item.caramelAdded && (
                                <p className="text-[10px] text-[#8d6e63]">
                                  Includes ₹75 caramel
                                </p>
                              )}

                              <h4 className="text-2xl font-black text-[#4e342e]">
                                ₹
                                {item.price *
                                  item.quantity}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-[#eadfd7] bg-white">

                <div className="flex justify-between items-center">

                  <div>
                    <p className="text-[#8d6e63] text-sm">
                      Total Amount
                    </p>

                    {caramelTotal >
                      0 && (
                      <p className="text-[11px] text-[#b26a3c] font-semibold mt-1">
                        Includes ₹
                        {
                          caramelTotal
                        } caramel charges
                      </p>
                    )}

                    <h2 className="text-4xl font-black text-[#4e342e] mt-1">
                      ₹{total}
                    </h2>
                  </div>

                  <div className="bg-[#f5ede5] px-5 py-3 rounded-2xl text-center">

                    <p className="text-sm text-[#8d6e63]">
                      Items
                    </p>

                    <h3 className="text-2xl font-black text-[#4e342e]">
                      {cart.length}
                    </h3>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/919316972831?text=Hello,%20I%20want%20to%20order:%0A%0A${whatsappMessage}%0A%0ATotal:%20₹${total}`}
                  target="_blank"
                  className="block text-center mt-6 bg-[#8d6e63] hover:bg-[#5c4033] duration-300 text-white py-4 rounded-full text-base font-semibold shadow-lg"
                >
                  Place Order On WhatsApp
                </a>

                <p className="text-center text-xs text-[#8d6e63] mt-4">
                  Pure Veg • Self Service • Freshly Baked
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Cart;