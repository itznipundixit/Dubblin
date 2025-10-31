"use client";

import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Play,
  X,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function InstagramReels() {
  const reels = [
    {
      id: 1,
      video: "/videos/reel1.mp4",
      title: "Dubblin Morning Routine",
      likes: "2.4K",
      comments: "142",
    },
    {
      id: 2,
      video: "/videos/reel2.mp4",
      title: "Coffee Brewing Tips",
      likes: "1.8K",
      comments: "89",
    },
    {
      id: 3,
      video: "/videos/reel3.mp4",
      title: "Weekend Cheers",
      likes: "3.2K",
      comments: "203",
    },
    {
      id: 4,
      video: "/videos/reel4.mp4",
      title: "Kitchen Hacks",
      likes: "900",
      comments: "41",
    },
    {
      id: 5,
      video: "/videos/reel5.mp4",
      title: "Smart Lunchbox",
      likes: "1.1K",
      comments: "76",
    },
  ];

  const [selectedReel, setSelectedReel] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const openModal = (index: number) => {
    setSelectedReel(index);
    setTimeout(() => {
      modalVideoRef.current?.play().catch(console.error);
    }, 300);
  };

  const closeModal = () => {
    modalVideoRef.current?.pause();
    setSelectedReel(null);
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.clientWidth; // full width of one card
    const newScroll =
      direction === "left"
        ? carouselRef.current.scrollLeft - cardWidth
        : carouselRef.current.scrollLeft + cardWidth;

    carouselRef.current.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.body.style.overflow = selectedReel !== null ? "hidden" : "unset";
  }, [selectedReel]);

  return (
    <section className="py-9 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-serif text-black mb-4 tracking-wide">
            #DUBBLINMOMENTS
          </h2>
          <p className="text-black">Follow us on Instagram @dubblin</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scrollCarousel("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-md"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Reel List */}
          <div
            ref={carouselRef}
            className="
              flex gap-4 overflow-x-scroll no-scrollbar scroll-smooth
              snap-x snap-mandatory px-6 sm:px-10
            "
          >
            {reels.map((reel, index) => (
              <div
                key={reel.id}
                onClick={() => openModal(index)}
                className="
                  relative flex-shrink-0 
                  w-[80vw] sm:w-[300px] md:w-[320px] 
                  h-[400px] rounded-xl overflow-hidden 
                  bg-gray-800 cursor-pointer group 
                  snap-center
                "
              >
                <video
                  src={reel.video}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 flex items-center justify-center transition-all">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30">
                    <Play size={28} className="text-white ml-1" />
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{reel.title}</h3>
                  <div className="flex gap-3 text-sm">
                    <span className="flex items-center gap-1">
                      <Heart size={16} fill="currentColor" /> {reel.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={16} /> {reel.comments}
                    </span>
                  </div>
                </div>

                {/* Instagram Label */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Instagram
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scrollCarousel("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-md"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/dubblinhomeware?igsh=a21vZXRrMW0zZTl1"
            target="_blank"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform"
          >
            <span>Follow on Instagram</span> →
          </a>
        </div>

        {/* ✅ Modal */}
        {selectedReel !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-20 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
            >
              <X size={24} />
            </button>

            {/* Mute */}
            <button
              onClick={() => {
                if (modalVideoRef.current) {
                  modalVideoRef.current.muted = !modalVideoRef.current.muted;
                  setIsMuted(modalVideoRef.current.muted);
                }
              }}
              className="absolute top-6 right-20 z-20 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>

            {/* Popup Box */}
            <div className="bg-black rounded-2xl p-4 shadow-xl max-w-md w-[90%] animate-scaleIn">
              <video
                ref={modalVideoRef}
                src={reels[selectedReel].video}
                className="rounded-lg w-full h-auto object-contain"
                muted={isMuted}
                loop
                playsInline
                autoPlay
              />
              <h3 className="text-white text-center mt-3 font-semibold text-lg">
                {reels[selectedReel].title}
              </h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
