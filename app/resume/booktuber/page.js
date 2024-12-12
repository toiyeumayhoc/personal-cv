import { booktuberContent } from '../../content/en/booktuber';
import PageTransition from "../../components/PageTransition";
import Image from "next/image";
import Link from "next/link";
import TypeWriter from "../../components/TypeWriter";

export default function BooktuberJourney() {
  return (
    <PageTransition>
      <div className="max-w-2xl bg-white p-8 rounded-3xl border-4 border-black 
                    shadow-[8px_8px_0_rgba(0,0,0,1)]">
        
        {/* Achievement Badge */}
        <div className="inline-block -rotate-12 bg-yellow-400 px-6 py-3 
                      rounded-xl border-2 border-black mb-8
                      font-comic text-lg font-bold text-black
                      shadow-[4px_4px_0_rgba(0,0,0,1)]">
          {booktuberContent.period}
        </div>

        {/* BookTuber Journey */}
        <div className="relative mb-8">
          <div className="flex items-start mb-6">
            <h1 className="text-5xl font-bold
                         text-black filter drop-shadow-[4px_4px_0_rgba(255,200,0,1)]
                         leading-tight mr-1">
              {booktuberContent.title}
            </h1>
            <div className="animate-bounce-vertical ml-auto">
              <div className="relative">
                <Image
                  src="/coding.png"
                  alt={booktuberContent.imageAlt.developer}
                  width={120}
                  height={120}
                  className="transform animate-[fadeInOut_1.4s_ease-in-out_infinite]"
                />
                <Image
                  src="/youtuber.png"
                  alt={booktuberContent.imageAlt.booktuber}
                  width={120}
                  height={120}
                  className="transform absolute top-0 animate-[fadeOutIn_1.4s_ease-in-out_infinite]"
                />
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-700 font-comic leading-loose">
            {booktuberContent.channel.intro}<br/>
            <span className="font-bold text-2xl">{booktuberContent.channel.name}</span><br/>
            <span className="font-bold">{booktuberContent.channel.labels.role}:</span> {booktuberContent.channel.role}<br/>
            <span className="font-bold">{booktuberContent.channel.labels.project}:</span> {booktuberContent.channel.project}<br/>
            <span className="font-bold">{booktuberContent.channel.labels.techStack}:</span> {booktuberContent.channel.techStack}<br/>
            <span className="font-bold">{booktuberContent.channel.labels.achievement}:</span> {booktuberContent.channel.achievement}
          </p>

          {/* Project Details */}
          <div className="mt-6 p-6 bg-gray-50 rounded-xl border-2 border-black">
            <TypeWriter 
              text={booktuberContent.description}
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
            {booktuberContent.nextChapter}
            <Image
              src="/right-arrow.png"
              alt={booktuberContent.imageAlt.arrow}
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