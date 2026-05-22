function PaymentModal({
  open,
  setOpen,
  total,
  cart,
}) {
  if (!open) return null;

  const message = cart
    .map((item) => `${item.name} - ₹${item.price}`)
    .join("%0A");

  const whatsappLink = `https://wa.me/919316972831?text=Hello,%20I%20want%20to%20order:%0A%0A${message}%0A%0ATotal:%20₹${total}`;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[999] px-5">
      <div className="bg-[#fffaf5] rounded-[40px] p-8 w-full max-w-xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-52 h-52 bg-[#e7d7c9] rounded-full blur-[120px]"></div>

        <h1 className="text-5xl font-black text-[#4e342e] text-center relative z-10">
          Checkout
        </h1>

        <div className="mt-10 max-h-60 overflow-auto space-y-4 relative z-10">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 flex justify-between items-center shadow-md"
            >
              <div>
                <h3 className="font-bold text-[#4e342e]">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  Premium Bakery Item
                </p>
              </div>

              <h3 className="font-bold text-[#8d6e63]">
                ₹{item.price}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8 text-2xl font-black text-[#4e342e] relative z-10">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <div className="mt-8 bg-white rounded-[30px] p-6 shadow-lg text-center relative z-10">
          <img
            src="/qr.png"
            alt=""
            className="w-72 mx-auto rounded-3xl"
          />

          <p className="mt-5 text-gray-500">
            Scan To Pay Using Any UPI App
          </p>

          <h3 className="mt-3 font-bold text-[#8d6e63]">
            jeeldchauhan2006@okhdfcbank
          </h3>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          className="block bg-green-500 hover:bg-green-600 duration-300 text-white py-5 rounded-full mt-8 text-lg text-center font-semibold relative z-10"
        >
          Confirm Order On WhatsApp
        </a>

        <button
          onClick={() => setOpen(false)}
          className="mt-5 text-center w-full text-red-500 relative z-10"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default PaymentModal;