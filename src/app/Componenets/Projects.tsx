export default function Projects() {
  return (
    <div id="Projects" className="h-auto w-full bg-gray-900 pb-20">
      <span className="flex justify-center text-5xl font-serif pt-8 mb-16">
        Projects
      </span>
      <div className="w-full flex justify-center items-center">
        <div className=" flex grid sm:grid-cols-2 gap-20 w-full mx-5 lg:w-3/4">
          <img src="/NotionProject.png" className="w-full" />
          <div className="w-auto text-center text-2xl font-serif">
            An application built using React, MongoDb, TypeScript, and Tailwind
            with another programmer. It is a documentation page where you can
            keep files such as to do list, calendars, and files. In Progress.
          </div>
          <img src="Fashionista-Website.png" />
          <div className="w-auto  text-2xl font-serif">
            A Website focusing on fashion posts. People can find inpsirations
            for new outfits, accessories, or shoes. Built using NextJS,
            Tailwind, and React. Still in progress.
          </div>
        </div>
      </div>
    </div>
  );
}
