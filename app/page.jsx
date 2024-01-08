import { Button } from "flowbite-react";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-around p-24 bg-medicine-background bg-cover">
      <div className="flex flex-col items-center">
        <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold text-center text-brand-900 drop-shadow-[0_10px_4px_rgba(0,0,0,0.25)]">
          MediGyaan
        </h1>
        <p className="text-xl text-center text-gray-700 mt-10">
          Know your medicines better
        </p>
      </div>
      <div>
        <Button
          className="bg-brand-700 text-white rounded-lg px-10 py-2 text-xl font-semibold"
          as={Link}
          href="/search"
        >
          Search
        </Button>
      </div>
    </main>
  );
}
