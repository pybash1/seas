import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full bg-[#10182b]">
      <Head>
        <title>Home - Seas</title>
      </Head>
      <header>
        <input
          type="checkbox"
          name="hbr"
          id="hbr"
          className="hbr peer"
          hidden
          aria-hidden="true"
        />
        <nav className="fixed z-10 w-full border-b border-[#10182b] bg-[#10182b] bg-opacity-70 backdrop-blur navbar peer-checked:navbar-active md:absolute md:bg-transparent">
          <div className="container m-auto px-2 md:px-12 lg:px-7">
            <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
              <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
                <a
                  href="#"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <div aria-hidden="true" className="flex space-x-1">
                    <div className="h-4 w-4 rounded-full bg-gray-900"></div>
                    <div className="h-6 w-2 bg-sky-500"></div>
                  </div>
                  <span className="text-base font-bold text-gray-400">Seas</span>
                </a>
                <label
                  htmlFor="hbr"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                  ></div>
                </label>
              </div>
              <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 mx-6 space-y-20 p-6 rounded-xl shadow-lg bg-[#10182b] lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none">
                <div className="text-gray-400 lg:pr-4">
                  <ul className="space-y-6 tracking-wide font-medium text-lg lg:text-sm lg:flex lg:space-y-0">
                    <li>
                      <Link href="/">
                        <a className="block md:px-4 transition hover:text-sky-300">
                          <span>Home</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="https://github.com/ax-a-dev/seas"
                        target="blank_"
                        rel="noopener noreferrer"
                        className="block md:px-4 transition hover:text-sky-300"
                      >
                        <span>GitHub</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="w-full space-y-2 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max">
                  {/* <button
                    type="button"
                    title="Join the wailist for Seas"
                    className="w-full py-2.5 px-5 text-center rounded-full transition active:bg-sky-200 focus:bg-sky-100 sm:w-max"
                  >
                    <span className="block text-sky-400 font-semibold lg:text-sm">
                      Sign up
                    </span>
                  </button> */}
                  <button
                    onClick={() => (window.location.href = "/waitlist")}
                    type="button"
                    title="Join the wailist for Seas"
                    className="w-full py-2.5 px-5 text-center rounded-full transition bg-gradient-to-b from-sky-400 to-cyan-300 active:from-sky-300 focus:from-cyan-400 sm:w-max"
                  >
                    <span className="block text-sky-900 font-semibold lg:text-sm">
                      Join Waitlist
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div>
        <div className="container px-8 md:px-12 xl:max-w-5xl mx-auto lg:px-7 xl:px-0">
          <div className="md:flex md:gap-12 pt-40 lg:py-56">
            <div className="md:w-6/12">
              <h1 className="text-gray-100 font-bold text-4xl xl:text-5xl">
                Bootstrap your side projects into{" "}
                <span className="text-sky-500">Startups.</span>
              </h1>
              <p className="mt-8 text-gray-300">
                Grow your startups big or bootstrap your side projects into
                startup and get more attention on Seas! Come with your boats,
                leave with ships!
              </p>
              <div className="md:-mr-32">
                <form action="" className="w-full mt-12">
                  <div className="relative flex items-center p-1 rounded-full bg-sky-900 border border-sky-700 shadow-md md:p-2">
                    <div className="pl-6 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 m-auto text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      placeholder="Your mail address"
                      className="w-full p-4 rounded-full placeholder-gray-400 bg-sky-900 text-gray-100"
                      type="email"
                    />
                    <button
                      onClick={() => (window.location.href = "/waitlist")}
                      type="button"
                      title="Join the wailist for Seas"
                      className="ml-auto py-3 px-4 rounded-full text-center transition bg-gradient-to-b from-sky-400 to-cyan-300 active:from-sky-300 focus:from-cyan-400 md:px-8"
                    >
                      <span className="hidden w-max text-sky-900 font-semibold md:block">
                        Join Waitlist
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mx-auto text-sky-900 md:hidden"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-12 h-56 mr-0 md:-mr-24 overflow-hidden sm:h-72 md:h-auto md:mt-0 lg:mr-0 lg:-mt-12 md:w-7/12">
              <img src="images/job_hunt.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
