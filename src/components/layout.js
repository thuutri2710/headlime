import React from "react";
import headlime from "../images/Headlime.png";
import avatar from "../images/avatar.png";
import Header from "./header";
import SEO from "../components/seo";
import Business from "../components/business";
import Price from "../components/price";
import Quote from "../components/quote";
import Article from "../components/article";
import ColCardList from "../components/colcardlist";
import RowCardList from "../components/rowcardlist";
import Guide from "../components/guide";
import Video from "../components/video";

function Layout() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen font-sans text-gray-900 bg-black w-full">
      <Header />
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <main className="container">
        <section className="container flex justify-center mt-8 md:mt-4 ">
          <div className="max-w-6xl flex flex-col content-center items-center md:flex-row md:text-left px-8 xl:px-0">
            <div className="w-full md:w-2/5 flex flex-col justify-center items-center mb-6 md:mt-0 md:items-start">
              <h1 className="text-2xl xl:text-4xl text-white font-semibold md:font-bold text-center md:text-left">
                Create Headlines{" "}
                <span className="font-thin md:font-semibold">Like</span>{" "}
                Copywriting Experts,{" "}
                <span className="font-thin md:font-semibold">Without</span>{" "}
                Writing Them
              </h1>
              <p className="text-gray-500 text-xs md:text-lg my-8 text-center md:text-left">
                Get access to high converting headlines. Headlime generates
                hundreds of headlines for you, simply by answering a few
                questions.
              </p>
              <button className="bg-blue-400 w-10/12 md:w-7/12 h-12 rounded text-white font-semibold text-lg">
                Start generating headlines
              </button>
            </div>
            <div className="w-full md:w-3/5">
              <Video src="http://headlime.io/_nuxt/videos/c644194.mp4" />
            </div>
          </div>
        </section>
        <Business />
        <Article />
        <ColCardList />
        <section className="w-full mb-12 mt-32">
          <div className="container flex flex-col md:flex-row px-4 md:px-16 mx-auto">
            <div className="w-full md:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
              <Video src="http://headlime.io/_nuxt/videos/4be468a.mp4" />
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center px-2 md:px-0">
              <Guide
                title="Easily generate hundreds of headlines"
                content="Copy the title that fits best, insert your details and go live. It’s that easy!"
                list={[
                  `Usable for your email, landing page, ads and site`,
                  `Split tested by ourselves to test the effectiveness`,
                ]}
              />
            </div>
          </div>
        </section>
        <section className="w-full mb-20">
          <div className="container flex flex-col-reverse md:flex-row px-4 md:px-16 mx-auto">
            <div className="w-full md:w-1/2 flex items-center justify-center px-2 md:px-0">
              <Guide
                title="Export your titles or save them for later"
                content="Need a new headline for your next campaign? Get started in seconds by loading projects you worked on."
                list={[
                  `Reduce hours to minutes when writing your next headline`,
                  `Easy to reuse for your next campaign`,
                ]}
              />
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
              <Video src="http://headlime.io/_nuxt/videos/4be468a.mp4" />
            </div>
          </div>
        </section>
        <Quote
          src={avatar}
          quote={
            "This is like a secret weapon. It's an awesome resource and it gives me great ideas and inspirations for different headline testing. I like the structure and examples."
          }
          author="Michaela, Havas Media"
        />
        <RowCardList />
        <section className="container flex justify-center mb-12 flex-col items-center mb-12 px-4">
          <p className="text-2xl md:text-5xl text-white font-extrabold md:font-bold text-center max-w-3xl">
            Get the power of a copywriter for life, without paying their $100
            hourly rate.
          </p>
          <p className="text-base text-gray-400 font-normal text-center max-w-2xl mx-auto my-4">
            For a very low, one time investment you can keep creating high
            converting headlines, time and time again.
          </p>
        </section>
        <Price />
        <section className="container px-4">
          <p className="text-center text-white text-sm mt-6 pb-8">
            Payments are safely processed by <strong>Chargebee</strong> and
            invoiced under the company name <strong>ConvertWell</strong>.
          </p>
        </section>
        <Business />
      </main>
      <footer className="w-full">
        <nav className="flex justify-between flex-col md:flex-row items-center max-w-5xl p-4 md:pt-8 mx-auto mt-24 text-center w-full">
          <img src={headlime} className="w-32 opacity-50" data-v-2743b535="" />
          <p className="text-sm text-gray-600 font-normal my-4 lg:my-0">
            A Landingfolio.
            <br className="md:hidden" />
            Made by Tri.
            <br className="md:hidden" />
            Copyright © 2020
          </p>
          <button className="btn text-gray-200 px-4 py-2 bg-gray-800 font-semibold text-sm rounded">
            LogIn
          </button>
        </nav>
      </footer>
    </div>
  );
}

export default Layout;
