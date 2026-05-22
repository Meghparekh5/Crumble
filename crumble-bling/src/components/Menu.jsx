import products from "../data/products";
import ProductCard from "./ProductCard";

function Menu({ addToCart }) {
  return (
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
            Freshly handcrafted cakes and desserts baked
            with premium ingredients for every special moment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-20">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;