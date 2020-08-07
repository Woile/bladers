import Head from "next/head";
import Subscribe from "./Subscribe";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Bladers club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-rows-layout h-screen">
        <main
          className="grid place-center text-center bg-fixed bg-cover bg-center text-white"
          style={{ backgroundImage: "url(/images/inline.jpg)" }}
        >
          <div className="text-2xl	">
            <h1 className="text-5xl font-mono antialiased font-extrabold tracking-tight text-orange-500 transform -skew-y-6 m-4">
              Bladers Club
            </h1>
            <h2>Location: Amsterdam</h2>
            <p>Hang out with us and let's skate!</p>
          </div>

          <Subscribe />
          {/* <footer>
          <nav className="bg-gray-800 p-6 text-white">
            <ul className="flex items-center justify-evenly flex-wrap">
              <li>About</li>
              <li>Subscribe</li>
            </ul>
          </nav>
        </footer> */}
        </main>
      </div>
    </div>
  );
}
