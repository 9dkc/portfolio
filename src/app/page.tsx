import { Project } from "@/components/project";
import { Social } from "@/components/social";
import Marquee from "react-fast-marquee";
import { siDiscord, siGithub } from "simple-icons";

export default function Home() {
  return (
    <main className="min-h-screen bg-background antialiased">
      <div className="px-[85px] pt-[85px]">
        <div>
          <h1>hi, i'm yusof.</h1>
          <h1>
            i do{" "}
            <span className="text-accent font-sans font-bold">
              {" "}
              software development
            </span>
          </h1>
        </div>
        <div>
          <span className="flex items-center gap-1">
            hit me up at{" "}
            <Social
              href="https://discord.com/users/"
              name="9dkc"
              icon={siDiscord}
            />
            , check out my projects at{" "}
            <Social
              href="https://github.com/9dkc"
              name="9dkc"
              icon={siGithub}
            />
            .
          </span>
        </div>
      </div>
      <div className="px-[85px] pt-[55px] flex flex-col gap-4">
        <h1>Projects</h1>
        <div className="grid grid-cols-2 grid-rows-3 gap-3">
          <Project
            icon="/icons/aviation.png"
            name="aviation"
            description="selfhostable file host for lazy people"
            href="https://aviation.wtf"
          />
          <Project
            icon="/icon.png"
            name="portfolio"
            description="my portfolio/resume"
            href="https://github.com/9dkc/portfolio"
          ></Project>
        </div>
      </div>
    </main>
  );
}
