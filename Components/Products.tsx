// components/Products.tsx
export default function Products() {
  const products = [
    {
      id: 1,
      name: "Classic Dubblin Bottle",
      price: "₹1,299",
      image: "https://phukuli.com/wp-content/uploads/2022/01/rugby-2.jpg",
      badge: "BEST SELLING",
    },
    {
      id: 2,
      name: "Travel Mug",
      price: "₹1,099",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop",
      badge: "MEG. GGA",
    },
    {
      id: 3,
      name: "Active Hydration",
      price: "₹1,599",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
      badge: "ACTIVE HYDRATION",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our carefully crafted collection designed for modern living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id} className="group text-center">
              {/* Product Image Container */}
              <div className="relative bg-gray-50 rounded-2xl overflow-hidden aspect-square mb-6 p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition duration-300"
                />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold tracking-wide">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="text-2xl font-light text-gray-900 tracking-wide">
                  {product.name}
                </h3>
                <p className="text-2xl font-medium text-gray-900">
                  {product.price}
                </p>
                <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
