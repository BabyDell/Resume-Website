import Image from "next/image";

export default function Skills() {
  return (
    <div id="Skills" className=" h-auto pb-10 w-full">
      
      <div className="mx-auto grid grid-cols-2 justify-center w-full md:w-3/4 mt-20">
        <div>
          <Image
            src="/Picture.png"
            width={300}
            height={100}
            className="rounded-full m-auto"
            alt="Maria"
          />
        </div>
        <div>
          <div className="text-3xl mb-10 underline">Biography</div>
          <div clasName=" text-xl text-center text-gray-200 font-serif">
            <div className="">
              Hello, my name is Andy Felix. I am a Computer Science student at
              College of the Desert from Palm Desert, California. I love to
              program anything, but specialize in creating websites. My coding
              journey begun during my senior year of high school for my AP
              Computer Science Class. From then, I decided to major in Computer
              Science where I learned C++. It felt like I wasn&apos;t learning
              enough so I decided to start learning on my own. Full Stack
              Development intrigued me so I decided to start on focusing on the
              front-end first. I started by learning JavaScript followed by html
              and css. Then started creating websites using frameworks such as
              React, Tailwind, and NextJs. Currently I am looking for an
              internship to improve and get hands on work epxierence, but until
              that time I am working on projects continuing enhancing my skills.
            </div>
            <div className="mt-8">
              While I&apos;m not creating websites, I love to go to the gym,
              play basketball, or anything that involves being outside.
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-20 m-auto h-px  max-w-7xl bg-gray-600 border-0 text-center" />

    </div>
  );
}
