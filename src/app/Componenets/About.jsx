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
              Hello, I&apos;m a self taught front-end developer who is in there
              sophomore year attending college of the desert, studying computer
              science. I have been coding since I was introduced to it during my
              senior year of high school, but really found my passion in web
              development during my fall semester of my freshman year. I have
              been learning and creating websites for about a year, and use
              frameworks such as NextJs, Tailwind, and Typescript. I also have
              learned photoshop to assist in creating user interfaces. I have a
              strong understanding in hardware and software, and keep up to date
              with new developments from frameworks to the use of AI.
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
