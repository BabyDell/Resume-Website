export default function Projects() {
  return (
    <div id="Projects" className="h-auto w-full bg-gray-900 pb-20">
      <span className="flex justify-center text-5xl font-serif pt-8 mb-16">
        Projects
      </span>
      <div className=" flex grid-cols-2 justify-center">
        <img src="/NotionProject.png" className="w-1/4 mr-16" />
        <div className="w-1/4 ml-16 text-xl font-serif">
          An application built using React, MongoDb, TypeScript, and Tailwind
          with another programmer. It is a doumentation page where you can keep
          files such as to do list, calenders, and files. 
        </div>
      </div>
    </div>
  );
}
