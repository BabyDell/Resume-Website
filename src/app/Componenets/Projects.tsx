import Image from "next/image";

export default function Projects() {
  return (
    <div id="Projects" className="h-auto w-full bg-gray-900 pb-20">
      <span className="flex flex-col items-center justify-center  font-serif pt-8 mb-16">
        <span className="text-5xl">Projects</span>
        <span className="text-xl mt-2 text-zinc-300">
          Click on an Projects Image to View its Website
        </span>
      </span>
      <div className="w-full flex justify-center items-center">
        <div className="grid sm:grid-cols-2 gap-20 w-full mx-5 lg:w-3/4">
          <div className="mx-auto max-w-sm bg-gray-800 rounded-xl overflow-hidden shadow-lg border-8 border-gray-600">
            <a href="https://mg-real-estate.vercel.app/" target="_blank">
              <Image
                className=""
                width={500}
                height={500}
                src="/RealEstateWebsite.png"
                alt="Notion Clone"
              />
            </a>
            <div className="px-6 py-4">
              <div className="font-bold text-neutral-200 text-xl mb-2">
                Real Estate Website
              </div>
              <p className="text-gray-400 text-base">
                Website for a Real Estate Agent that showcases their agent's
                proffesional profile, provides a curated list of proprerty
                listings, and offers an easy way for potential clients to get in
                touch. Uses animations to make the navbar more interactive.
                Built using typescript, NextJs, and Tailwind.
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
                #TypeScript
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
                A Landing Page for a fictional clothing brand called
                Fashionista. Incooperates animations when the user first loads
                the page to make a more appealing expiernce. Implented user
                authentication through Convex and Clerk.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Convex
              </span>
              <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #TailWind
              </span>
              <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
