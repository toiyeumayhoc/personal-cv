import { birthStoryContent } from '../../content/en/birth-story';
import PageTransition from "../../components/PageTransition";
import Image from "next/image";
import Link from "next/link";

export default function BirthStory() {
  return (
    <PageTransition>
      <div className="max-w-2xl bg-white p-8 rounded-3xl border-4 border-black 
                    shadow-[8px_8px_0_rgba(0,0,0,1)]">
        {/* Date stamp */}
        <div className="inline-block -rotate-12 bg-yellow-400 px-6 py-3 
                      rounded-xl border-2 border-black mb-8
                      font-comic text-lg font-bold text-black
                      shadow-[4px_4px_0_rgba(0,0,0,1)]">
          {birthStoryContent.date}
        </div>

        {/* Birth announcement */}
        <div className="relative mb-8">
          <div className="flex items-start mb-6">
            <h1 className="text-5xl font-bold
                         text-black filter drop-shadow-[4px_4px_0_rgba(255,200,0,1)]
                         leading-tight mr-4">
              {birthStoryContent.title}
            </h1>
            <div className="rotate-45 animate-bounce-gentle">
              <Image
                src="/baby.png"
                alt={birthStoryContent.imageAlt.baby}
                width={120}
                height={120}
                className="transform hover:scale-110 transition-transform duration-200"
              />
            </div>
          </div>
          <p className="text-xl text-gray-700 font-comic leading-loose">
            {birthStoryContent.announcement} <br/>
            <span className="font-bold">{birthStoryContent.profile.labels.name}:</span> {birthStoryContent.profile.name}<br/>
            <span className="font-bold">{birthStoryContent.profile.labels.class}:</span> {birthStoryContent.profile.class}<br/>
            <span className="font-bold">{birthStoryContent.profile.labels.location}:</span> {birthStoryContent.profile.location}<br/>
            <span className="font-bold">{birthStoryContent.profile.labels.stats}:</span> {birthStoryContent.profile.stats}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-12">
          <Link 
            href="/resume/student"
            className="inline-flex items-center px-8 py-3 bg-yellow-400 text-black 
                     rounded-xl border-4 border-black font-bold text-lg
                     shadow-[4px_4px_0_rgba(0,0,0,1)]
                     hover:shadow-[2px_2px_0_rgba(0,0,0,1)]
                     hover:translate-x-[2px] hover:translate-y-[2px]
                     transition-all duration-200"
          >
            {birthStoryContent.nextChapter}
            <Image
              src="/right-arrow.png"
              alt={birthStoryContent.imageAlt.arrow}
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