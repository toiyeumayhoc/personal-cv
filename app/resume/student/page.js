import { studentContent } from '../../content/en/student';
import PageTransition from "../../components/PageTransition";
import Image from "next/image";
import Link from "next/link";

export default function StudyJourney() {
  return (
    <PageTransition>
      <div className="max-w-2xl bg-white p-8 rounded-3xl border-4 border-black 
                    shadow-[8px_8px_0_rgba(0,0,0,1)]">
        
        {/* Achievement Badge */}
        <div className="inline-block -rotate-12 bg-yellow-400 px-6 py-3 
                      rounded-xl border-2 border-black mb-8
                      font-comic text-lg font-bold text-black
                      shadow-[4px_4px_0_rgba(0,0,0,1)]">
          {studentContent.period}
        </div>

        {/* University Journey */}
        <div className="relative mb-8">
          <div className="flex items-start mb-6">
            <h1 className="text-5xl font-bold
                         text-black filter drop-shadow-[4px_4px_0_rgba(255,200,0,1)]
                         leading-tight mr-4">
              {studentContent.title}
            </h1>
            <div className="animate-bounce-vertical">
              <Image
                src="/student.png"
                alt={studentContent.imageAlt.student}
                width={120}
                height={120}
                className="transform hover:scale-110 transition-transform duration-200"
              />
            </div>
          </div>
          <p className="text-xl text-gray-700 font-comic leading-loose">
            {studentContent.university.intro}<br/>
            <span className="font-bold text-2xl">{studentContent.university.name}</span><br/>
            <span className="font-bold">Location:</span> {studentContent.university.location}<br/>
            <span className="font-bold">Class:</span> {studentContent.university.class}<br/>
            <span className="font-bold">Major:</span> {studentContent.university.major}<br/>
            <span className="font-bold">Achievement:</span> {studentContent.university.achievement}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-12">
          <Link 
            href="/resume/bosch"
            className="inline-flex items-center px-8 py-3 bg-yellow-400 text-black 
                     rounded-xl border-4 border-black font-bold text-lg
                     shadow-[4px_4px_0_rgba(0,0,0,1)]
                     hover:shadow-[2px_2px_0_rgba(0,0,0,1)]
                     hover:translate-x-[2px] hover:translate-y-[2px]
                     transition-all duration-200"
          >
            {studentContent.nextChapter}
            <Image
              src="/right-arrow.png"
              alt={studentContent.imageAlt.arrow}
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