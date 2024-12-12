import { languagesContent } from '../../content/en/languages';
import PageTransition from "../../components/PageTransition";
import Image from "next/image";
import Link from "next/link";
import TypeWriter from "../../components/TypeWriter";

export default function LanguageJourney() {
  return (
    <PageTransition>
      <div className="max-w-2xl bg-white p-8 rounded-3xl border-4 border-black 
                    shadow-[8px_8px_0_rgba(0,0,0,1)]">
        
        {/* Achievement Badge */}
        <div className="inline-block -rotate-12 bg-yellow-400 px-6 py-3 
                      rounded-xl border-2 border-black mb-8
                      font-comic text-lg font-bold text-black
                      shadow-[4px_4px_0_rgba(0,0,0,1)]">
          {languagesContent.badge}
        </div>

        {/* Language Journey */}
        <div className="relative mb-8">
          <div className="flex items-start mb-6">
            <h1 className="text-5xl font-bold
                         text-black filter drop-shadow-[4px_4px_0_rgba(255,200,0,1)]
                         leading-tight mr-1">
              {languagesContent.title}
            </h1>
            <div className="animate-bounce-vertical ml-auto">
              <Image
                src="/languages.png"
                alt={languagesContent.imageAlt.languages}
                width={120}
                height={120}
                className="transform hover:scale-110 transition-transform duration-200"
              />
            </div>
          </div>

          {/* Language Grid */}
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(languagesContent.languages).map(([key, lang]) => (
              <div key={key} className="p-4 bg-gray-50 rounded-xl border-2 border-black">
                <div className="flex items-center space-x-4">
                  <Image
                    src={lang.flag}
                    alt={lang.name}
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="font-bold text-xl text-black">{lang.name}</h3>
                    <p className="text-gray-900">{lang.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Description */}
          <div className="mt-6 p-6 bg-gray-50 rounded-xl border-2 border-black">
            <TypeWriter 
              text={languagesContent.description}
              className="text-gray-800 font-comic leading-relaxed"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-12">
          <Link 
            href="/resume/final"
            className="inline-flex items-center px-8 py-3 bg-yellow-400 text-black 
                     rounded-xl border-4 border-black font-bold text-lg
                     shadow-[4px_4px_0_rgba(0,0,0,1)]
                     hover:shadow-[2px_2px_0_rgba(0,0,0,1)]
                     hover:translate-x-[2px] hover:translate-y-[2px]
                     transition-all duration-200"
          >
            {languagesContent.nextChapter}
            <Image
              src="/right-arrow.png"
              alt={languagesContent.imageAlt.arrow}
              width={32}
              height={32}
              className="ml-2"
            />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
} 