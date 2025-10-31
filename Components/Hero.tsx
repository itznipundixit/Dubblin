// components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Remove the gradient background */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-8 tracking-tight leading-tight">
            Sip Bold.
            <br />
            <span className="font-normal">Live Mindfully.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Designed for today. Built for tomorrow
          </p>

          <div className="flex justify-center">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-4 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Shop Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
