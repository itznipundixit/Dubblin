export default function Sustainability() {
  const features = [
    {
      id: 1,
      icon: "https://api.dubblin.co.in/public/others/icon-1745414573549-690800356.png",
      text: "Wide-Mouth Bottles for Easy Cleaning",
    },
    {
      id: 2,
      icon: "https://api.dubblin.co.in/public/others/icon-1745414634564-654998765.png",
      text: "Versatile Sizes, Styles & Materials",
    },
    {
      id: 3,
      icon: "https://api.dubblin.co.in/public/others/icon-1745414685067-223013661.png",
      text: "Made with GEN-Tech Precision.",
    },
    {
      id: 4,
      icon: "https://api.dubblin.co.in/public/others/icon-1745414754144-34700464.png",
      text: "More Than Bottles — Thoughtful Homeware Essentials",
    },
    {
      id: 5,
      icon: "https://api.dubblin.co.in/public/others/icon-1745414836438-4951165.png",
      text: "Designed for Ease & Everyday Comfort",
    },
  ];

  const bottomFeatures = [
    {
      id: 1,
      icon: "https://api.dubblin.co.in/public/others/icon1-1739034518905-587971950.png",
      text: "Secure Payment",
    },
    {
      id: 2,
      icon: "https://api.dubblin.co.in/public/others/icon2-1739034518905-746330172.png",
      text: "Free Delivery",
    },
    {
      id: 3,
      icon: "https://api.dubblin.co.in/public/others/icon3-1739034518905-652358956.png",
      text: "Great value",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src="https://api.dubblin.co.in/public/images/main_image-1744620459200-78902962.webp"
              alt="Sustainability"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 tracking-wide">
              HEALTH, HAPPINESS, & SUSTAINIBILITY
            </h2>
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start gap-4">
                  <img
                    src={feature.icon}
                    alt=""
                    className="w-8 h-8 flex-shrink-0"
                  />
                  <p className="text-gray-700 text-lg">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200">
          {bottomFeatures.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center"
            >
              <img src={feature.icon} alt="" className="w-16 h-16 mb-4" />
              <p className="text-gray-800 font-medium text-lg">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
