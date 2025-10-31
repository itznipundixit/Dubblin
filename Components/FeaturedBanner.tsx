export default function FeaturedBanner() {
  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=1600&h=600&fit=crop"
        alt="Featured Banner"
        className="w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-olive-800/70 to-olive-600/70"
        style={{ background: "rgba(107, 114, 76, 0.7)" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-white text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          YOUR SIDEKICK FOR THE
          <br />
          EVERYDAY HUSTLE
        </h2>
        <p className="text-white text-xl md:text-2xl mb-8">
          Strong, stylish, and made to handle life on the move
        </p>
      </div>
    </section>
  );
}
