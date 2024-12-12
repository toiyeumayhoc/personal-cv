import { zalopayContent } from '../../content/en/zalopay';
import PageTransition from "../../components/PageTransition";
import Image from "next/image";
import Link from "next/link";
import TypeWriter from "../../components/TypeWriter";

export default function ZaloPayJourney() {
  return (
    <PageTransition>
      <div className="max-w-2xl bg-white p-8 rounded-3xl border-4 border-black 
                    shadow-[8px_8px_0_rgba(0,0,0,1)]">
        
        {/* Company Badge */}
        <div className="inline-block -rotate-12 bg-yellow-400 px-6 py-3 
                      rounded-xl border-2 border-black mb-8
                      font-comic text-lg font-bold text-black
                      shadow-[4px_4px_0_rgba(0,0,0,1)]">
          {zalopayContent.period}
        </div>

        {/* Career Journey */}
        <div className="relative mb-8">
          <div className="flex items-start mb-6">
            <h1 className="text-5xl font-bold
                         text-black filter drop-shadow-[4px_4px_0_rgba(255,200,0,1)]
                         leading-tight mr-4">
              {zalopayContent.title}
            </h1>
            <div className="animate-bounce-vertical">
              <Image
                src="/coding.png"
                alt={zalopayContent.imageAlt.developer}
                width={120}
                height={120}
                className="transform hover:scale-110 transition-transform duration-200"
              />
            </div>
          </div>
          <p className="text-xl text-gray-700 font-comic leading-loose">
            {zalopayContent.company.intro}<br/>
            <span className="font-bold text-2xl">{zalopayContent.company.name}</span><br/>
            <span className="font-bold">{zalopayContent.company.labels.role}:</span> {zalopayContent.company.role}<br/>
            <span className="font-bold">{zalopayContent.company.labels.project}:</span> {zalopayContent.company.project}<br/>
            <span className="font-bold">{zalopayContent.company.labels.techStack}:</span> {zalopayContent.company.techStack}<br/>
            <span className="font-bold">{zalopayContent.company.labels.achievement}:</span> {zalopayContent.company.achievement}
          </p>

          {/* Project Details */}
          <div className="mt-6 p-6 bg-gray-50 rounded-xl border-2 border-black">
            <TypeWriter 
              text={zalopayContent.description}
              className="text-gray-800 font-comic leading-relaxed"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-12">
          <Link 
            href="/resume/wego"
            className="inline-flex items-center px-8 py-3 bg-yellow-400 text-black 
                     rounded-xl border-4 border-black font-bold text-lg
                     shadow-[4px_4px_0_rgba(0,0,0,1)]
                     hover:shadow-[2px_2px_0_rgba(0,0,0,1)]
                     hover:translate-x-[2px] hover:translate-y-[2px]
                     transition-all duration-200"
          >
            {zalopayContent.nextChapter}
            <Image
              src="/right-arrow.png"
              alt={zalopayContent.imageAlt.arrow}
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
