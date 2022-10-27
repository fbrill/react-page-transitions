import Link from "next/link";
import Layout from "../components/Layout";
import { photos } from "../data/photos";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="bg-gradient-to-tr from-purple-600 to-indigo-600 p-8 flex rounded-2xl items-center">
          <h1 className="font-extrabold text-3xl xl:text-5xl text-indigo-200 leading-tight">
            Page Transitions in{" "}
            <a href="https://nextjs.org" className="text-white">
              Next.js
            </a>{" "}
            with{" "}
            <a href="https://www.framer.com/motion/" className="text-white">
              Framer Motion
              <span className="text-purple-300">.</span>
              <span className="text-purple-300/70">.</span>
              <span className="text-purple-300/40">.</span>
              <span className="text-purple-300/10">.</span>
            </a>
          </h1>
        </div>
        {photos.map((photo) => (
          <Link href={`/photo/${photo.id}`} scroll={false} key={photo.id}>
            <a className="overflow-hidden flex rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl hover:z-10 transition-all ease-in-out">
              <Image
                src={photo.src}
                alt={photo.title}
                placeholder="blur"
                blurDataURL={photo.placeholder}
                width={photo.width}
                height={photo.height}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </a>
          </Link>
        ))}
      </div>

      <footer>
        Made by{" "}
        <a
          href="https://nod.cards/fbrill"
          target="_blank"
          rel="noopener noreferrer"
        >
          Francois Brill
        </a>
      </footer>
    </Layout>
  );
}
