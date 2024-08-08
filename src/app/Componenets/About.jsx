import Image from "next/image";

export default function About() {
  return (
    <div id="About" className=" h-auto pb-10 w-full ">
      <div className="mx-auto flex md:grid grid-cols-2 justify-center w-5/6 md:w-3/4 mt-20">
        <div>
          <Image
            src="/Picture.png"
            width={300}
            height={100}
            className="rounded-full m-auto hidden md:block"
            alt="Maria"
          />
        </div>
        <div>
          <div className="text-3xl mb-10 underline">Biography</div>
          <div clasName=" text-xl text-center text-gray-200 font-serif">
            <div className="">
              Second year college student at College of the Desert majoring in
              Computer Science. Began coding during my senior year of high
              school creating programs using Java, and learned C++ in freshman
              year of college. It was during my freshman year of college though
              where I found my true passion in programming websites. For 8
              months I&apos;ve been learning and creating websites and seeking an
              internship to further my learning. My skills range from Tailwind,
              NextJs, and JavaScript. I value clean and readable code. I also
              use photoshopping tools to assist in my UI/UX. I have a strong
              understanding of software and hardware, and keep up to new
              developments from frameworks to AI.
            </div>
            <div className="mt-8">
              While I&apos;m not creating websites I love fashion, basketball,
              and spending time with family.
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-20 m-auto h-px  max-w-7xl bg-gray-600 border-0 text-center" />
    </div>
  );
}
