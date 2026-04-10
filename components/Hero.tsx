import ChatWidget from "@/components/ChatWidget";
import type { CarResult } from "@/components/SearchResults";

const CAR_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBQWY9EKhRchN847UqwhtvBHD8ntxSLqy6vAb7Qs-tj5EwVnHMQ7NCri9ggwXJWmZb-5zBjiZ6XfKtFcl1v5posUDe3zwcFsDDpNQ-SFZdYlp-BW9QrMLVLdf35atbOvhwp6orVE_mYrjOQBrheEZNUYj014zfMdg0y58lBT5MkbeEJ87OPnZJwUccrA-QwNk-GFcDg9DwKSLJ6Ud6IvOVseO7gSWpI13Hszw96ox0ryFXwuW3G36cH0ilwafSrVvMg_RVH9NJWBcg";

interface Props {
  onResults: (cars: CarResult[]) => void;
}

export default function Hero({ onResults }: Props) {
  return (
    <header className="relative min-h-screen pt-32 pb-20 px-6 hero-bg overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: headline */}
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-buddy-green/20 text-green-700 font-bold text-sm mb-6">
            ✨ Friendly Car Sourcing
          </span>
          <h1 className="font-headline font-bold text-5xl md:text-7xl leading-[1.1] text-ocean-deep mb-8">
            Buying a car <br />
            <span className="text-green-500">just got easy.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
            I&apos;m your personal car concierge. I help you find the best
            deals on Auto1, verify everything, and handle the boring paperwork.
            All for one tiny, transparent fee.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CAR_IMAGE}
                alt="Expert"
                className="w-12 h-12 rounded-full border-4 border-white object-cover"
              />
              <div className="w-12 h-12 rounded-full border-4 border-white bg-sky-200 flex items-center justify-center text-ocean-deep font-bold text-sm">
                +50
              </div>
            </div>
            <p className="text-sm font-medium text-slate-400">
              Trusted by hundreds of <br />
              happy casual buyers
            </p>
          </div>
        </div>

        {/* Right: live chat bot */}
        <ChatWidget onResults={onResults} />
      </div>
    </header>
  );
}
