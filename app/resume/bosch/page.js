import { boschContent } from '../../content/en/bosch';
import PageTransition from "../../components/PageTransition";
import Image from "next/image";
import Link from "next/link";
import TypeWriter from "../../components/TypeWriter";

export default function CareerJourney() {
  return (
    <PageTransition>
      <div className="max-w-2xl bg-white p-8 rounded-3xl border-4 border-black 
                    shadow-[8px_8px_0_rgba(0,0,0,1)]">
        
        {/* Company Badge */}
        <div className="inline-block -rotate-12 bg-yellow-400 px-6 py-3 
                      rounded-xl border-2 border-black mb-8
                      font-comic text-lg font-bold text-black
                      shadow-[4px_4px_0_rgba(0,0,0,1)]">
          {boschContent.period}
        </div>

        {/* Career Journey */}
        <div className="relative mb-8">
          <div className="flex items-start mb-6">
            <h1 className="text-5xl font-bold
                         text-black filter drop-shadow-[4px_4px_0_rgba(255,200,0,1)]
                         leading-tight mr-4">
              {boschContent.title}
            </h1>
            <div className="animate-bounce-vertical">
              <Image
                src="/developer.png"
                alt={boschContent.imageAlt.developer}
                width={120}
                height={120}
                className="transform hover:scale-110 transition-transform duration-200"
              />
            </div>
          </div>
          <p className="text-xl text-gray-700 font-comic leading-loose">
            {boschContent.company.intro}<br/>
            <span className="font-bold text-2xl">{boschContent.company.name}</span><br/>
            <span className="font-bold">{boschContent.company.labels.role}:</span> {boschContent.company.role}<br/>
            <span className="font-bold">{boschContent.company.labels.project}:</span> {boschContent.company.project}<br/>
            <span className="font-bold">{boschContent.company.labels.techStack}:</span> {boschContent.company.techStack}<br/>
            <span className="font-bold">{boschContent.company.labels.achievement}:</span> {boschContent.company.achievement}
          </p>

          {/* Project Details */}
          <div className="mt-6 p-6 bg-gray-50 rounded-xl border-2 border-black">
            <TypeWriter 
              text={boschContent.description}
              className="text-gray-800 font-comic leading-relaxed"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-12">
          <Link 
            href="/resume/opswat"
            className="inline-flex items-center px-8 py-3 bg-yellow-400 text-black 
                     rounded-xl border-4 border-black font-bold text-lg
                     shadow-[4px_4px_0_rgba(0,0,0,1)]
                     hover:shadow-[2px_2px_0_rgba(0,0,0,1)]
                     hover:translate-x-[2px] hover:translate-y-[2px]
                     transition-all duration-200"
          >
            {boschContent.nextChapter}
            <Image
              src="/right-arrow.png"
              alt={boschContent.imageAlt.arrow}
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
