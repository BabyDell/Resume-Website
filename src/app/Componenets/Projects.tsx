import Image from "next/image";

export default function Projects() {
  return (
    <div id="Projects" className="h-auto w-full bg-gray-900 pb-20">
      <span className="flex justify-center text-5xl font-serif pt-8 mb-16">
        Projects
      </span>
      <div className="w-full flex justify-center items-center">
        <div className="grid sm:grid-cols-2 gap-20 w-full mx-5 lg:w-3/4">
          <div className="mx-auto max-w-sm bg-gray-800 rounded-xl overflow-hidden shadow-lg border-8 border-gray-600">
            <Image
              className=""
              width={500}
              height={500}
              src="/NotionProject.png"
              alt="Notion Clone"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-neutral-200 text-xl mb-2">
                Notion Clone
              </div>
              <p className="text-gray-400 text-base">
                An application built using React, MongoDb, TypeScript, and
                Tailwind with another programmer. It is a documentation page
                where you can keep files such as to do list, calendars, and
                files. In Progress.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #NextJs
              </span>
              <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #TailWind
              </span>
              <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #MongoDB
              </span>
            </div>
          </div>

          <div className="mx-auto max-w-sm bg-gray-800 rounded-xl overflow-hidden shadow-lg border-8 border-gray-600">
            <Image
              className=""
              width={500}
              height={500}
              src="/Fashionista-Website.png"
              alt="Fashionista"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-neutral-200 text-xl mb-2">
                Fashionista
              </div>
              <p className="text-gray-400 text-base">
                A Website focusing on fashion posts. Implented authentication
                system using Convex and Clerk. People can find inpsirations for
                new outfits, accessories, or shoes. Built using NextJS,
                Tailwind, and React. Still in progress.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #NextJs
              </span>
              <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #TailWind
              </span>
              <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
