// components/BestSelling.tsx
export default function BestSelling() {
  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 tracking-wide">
            Best Selling
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 h-auto md:h-[600px]">
          {/* Left Image - Glassware */}
          <div className="md:col-span-2 h-64 md:h-full relative overflow-hidden rounded-lg group cursor-pointer">
            <img
              src="https://pintoogarments.com/cdn/shop/files/Trump-1000-Orange-05.jpg?v=1737636586&width=823"
              alt="Built to Cheers"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-xl font-bold uppercase tracking-wider">
                Built to Cheers
              </h3>
            </div>
          </div>

          {/* Middle Grid - FIXED LAYOUT */}
          <div className="md:col-span-3 grid grid-cols-2 grid-rows-2 gap-4 h-full">
            {/* Top Left - Meal Gear */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer row-span-1">
              <img
                src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop"
                alt="Meal Gear"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-base font-bold uppercase tracking-wider">
                  Meal Gear
                </h3>
              </div>
            </div>

            {/* Top Right - Small Products Grid - FIXED */}
            <div className="grid grid-cols-2 grid-rows-4 gap-2 row-span-2">
              {[
                "https://assets.giftalove.com/resources/common/giftimages/productimage2/dubblin-rugby-stainless-steel-mug_1.jpg",
                "https://ahujasonskhanmarket.com/cdn/shop/files/DUBBLINFrescoStainlessSteelTeaCoffeeMuG2.jpg?v=1725709850&width=823",
                "http://api.dubblin.co.in/public/images/image2-1745412792706-318665558.webp",
                "https://citybazaarstore.com/wp-content/uploads/2024/07/A27I7775_cfc8f79a-5bad-49b1-954b-01020ab6119f_2400x2400.webp",
                "http://api.dubblin.co.in/public/images/image3-1745412792710-325386663.webp",
                "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=200&h=100&fit=crop",
                "https://thegifttree.in/wp-content/uploads/2023/06/Dubblin-Frappe-Duro-Steel-Travel-Mug-300Ml-1-768x768.png",
                "https://5.imimg.com/data5/SELLER/Default/2024/5/417270834/EK/JN/HW/217265255/61lbmay27vl-sx569.jpg",
              ].map((src, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded group cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Bottom Left - Brew Blaze */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer row-span-1">
              <img
                src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=300&fit=crop"
                alt="Brew Blaze"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-base font-bold uppercase tracking-wider">
                  Brew Blaze
                </h3>
              </div>
            </div>
          </div>

          {/* Right Image - Active Hydrate */}
          <div className="md:col-span-2 h-64 md:h-full relative overflow-hidden rounded-lg group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=800&fit=crop"
              alt="Active Hydrate"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-xl font-bold uppercase tracking-wider">
                Active Hydrate
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//test
//test
