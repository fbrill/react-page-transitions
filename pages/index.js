import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Page Transition Examples</title>
        <meta
          name="description"
          content="Examples of page transitions in Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold">
          Page Transition examples in <a href="https://nextjs.org">Next.js</a>{" "}
          with <a href="https://www.framer.com/motion/">Framer Motion.</a>
        </h1>
      </main>

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
    </div>
  );
}
