import Head from "next/head";
import Subscribe from "./Subscribe";
import Information from "./Information";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bladers club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-rows-layout h-screen">
        <main
          className="grid place-center text-center bg-fixed bg-cover bg-center text-white pt-20"
          style={{ backgroundImage: "url(/images/inline.jpg)" }}
        >
          <div className="text-2xl">
            <h1
              className="text-8xl bg-gray-100 bg-opacity-80 p-4 font-mono antialiased font-extrabold tracking-tight text-yellow-600 transform -skew-y-6 m-4"
              style={{ WebkitTextStroke: "2px black" }}
            >
              Bladers Club
            </h1>
            <h2>Location: Amsterdam</h2>
            <p>Hang out with us and let's skate!</p>
            <p>Join our Whatsapp group</p>
            <div className="w-full text-center flex justify-center">
              <a
                className="has-tooltip mx-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://chat.whatsapp.com/B5CoRWUGkthA5lZ64d364H"
              ><span className="tooltip bg-gray-100 text-orange-500 rounded-lg p-2">Don't forget to say "Hello!" after get into the group</span>
                <img width="100" src="./images/wa2.png" alt="Whatsapp group" />
              </a>
              <a
                className="mx-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/Bladersclub-109550558016362"
              >
                <img width="100" src="./images/facebook-icon.png" alt="Bladers' Facebook Page" />
              </a>
              <a
                className="mx-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/bladers.club/"
              >
                <img width="100" src="./images/instagram-icon.png" alt="Bladers' Instagram" />
              </a>
            </div>
          </div>
          <Information />
          {/* <Subscribe /> */}
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
