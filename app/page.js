import Image from "next/image";
import Link from "next/link";
import PageTransition from "./components/PageTransition";
import { homeContent } from './content/en/home';

export default function Home() {
  return (
    <PageTransition>
      <div className="text-center relative max-w-2xl">
        {/* Avatar with comic border and coin-flip animation */}
        <div className="relative w-48 h-48 mx-auto mb-12 z-10 perspective-container">
          <div className="absolute inset-0 border-4 border-black 
                        rounded-full transform scale-105
                        animate-coin-flip"></div>
          <Image
            src="/avatar.jpg"
            alt={homeContent.imageAlt.profile}
            fill
            className="rounded-full object-cover border-4 border-black 
                     shadow-[4px_4px_0_rgba(0,0,0,1)]
                     animate-coin-flip"
            priority
          />
        </div>

        {/* Speech bubble */}
        <div className="relative bg-white p-8 rounded-3xl border-4 border-black 
                      shadow-[8px_8px_0_rgba(0,0,0,1)]
                      animate-shake">
          {/* Speech bubble pointer */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <div className="w-8 h-8 bg-white border-t-4 border-l-4 border-black 
                          transform rotate-45"></div>
          </div>

          <h1 className="text-4xl font-bold mb-4 
                       text-black filter drop-shadow-[2px_2px_0_rgba(255,200,0,1)]">
            {homeContent.title}
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 font-comic">
            {homeContent.description}
          </p>

          {/* Action button with comic style */}
          <Link 
            href="resume/birth_story" 
            className="inline-flex items-center px-8 py-3 bg-yellow-400 text-black 
                     rounded-xl border-4 border-black font-bold text-lg
                     shadow-[4px_4px_0_rgba(0,0,0,1)]
                     hover:shadow-[2px_2px_0_rgba(0,0,0,1)]
                     hover:translate-x-[2px] hover:translate-y-[2px]
                     transition-all duration-200"
          >
            {homeContent.startButton}
            <Image
              src="/right-arrow.png"
              alt={homeContent.imageAlt.arrow}
              width={40}
              height={40}
              className="ml-2 inline-block"
            />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
