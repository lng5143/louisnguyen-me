import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col-reverse xl:flex-row gap-20 px-32">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Hi, I&apos;m Louis</h1>
        <p>I am a software developer turned solo entrepreneur.</p>
        <p>I studied economics and used to work in a venture capital firm in my early 20s. But every 2 years or so, I have a bout of massive urge to get into engineering and build something. Working in finance was unfulfilling.</p>
        <p>When I was 26, after a career break due to health issues, I decided to start over by learning programming. I quickly found a passion for it and haven&apos;t looked back since.</p>
        <p>I love engineering, learning new stuff, and building products.</p>
        <p>Now I work on my own projects full-time.</p>
        <div>
          <Link href="/projects"><u>Check out the projects I&apos;m working on</u></Link>
        </div>
      </div>
      <div className="min-w-[350px]">
        <Image className="rounded-xl" src="/main-pic-square.jpeg" alt="Louis Nguyen" width={350} height={350} />
      </div>
    </div>
  );
}
