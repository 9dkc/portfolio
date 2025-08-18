import { Project } from "@/components/project";
import { Social } from "@/components/social";
import Marquee from "react-fast-marquee";
import { siDiscord, siGithub } from "simple-icons";

export default function Home() {
  return (
    <main className="min-h-screen bg-background antialiased">
      <div className="px-6 sm:px-12 lg:px-16 pt-16">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            hi, i'm yusof.
          </h1>
          <h1 className="text-xl sm:text-2xl lg:text-3xl">
            i do{" "}
            <span className="text-accent font-sans font-bold">
              software development
            </span>
          </h1>
        </div>

        <div className="mt-4">
          <span className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
            hit me up at{" "}
            <Social
              href="https://discord.com/users/1257722365090205700"
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

      <div className="px-6 sm:px-12 lg:px-16 pt-12 flex flex-col gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          />
        </div>
      </div>
    </main>
  );
}
