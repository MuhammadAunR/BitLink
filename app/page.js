import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section className="md:grid md:grid-cols-2 my-20 lg:max-w-[1500px] mx-auto">
          <div className="flex flex-col gap-7 items-center justify-center p-10">
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className="text-4xl font-bold text-center">The best URL Shortener in Market</h1>
              <p className="text-xl font-semibold text-center">BitLink makes your long, messy URLs short, simple, and easy to share. Fast, secure, and reliable link shortening at your fingertips</p>
            </div>
            <Button />
          </div>

          <div className="relative h-[70vh]">
            <Image alt="shared workspace" src={'/group.gif'} unoptimized={true} fill={true} className="p-10" />
          </div>

        </section>
      </main>
    </>
  );
}
