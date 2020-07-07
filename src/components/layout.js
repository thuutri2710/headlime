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
      <main>
        <section className="w-full flex justify-center mt-4">
          <div className="max-w-6xl flex">
            <div className="w-2/5 flex flex-col justify-center items-start">
              <h1 className="text-4xl text-white font-bold">
                Create Headlines Like Copywriting Experts, Without Writing Them
              </h1>
              <p className="text-gray-500 text-lg my-8">
                Get access to high converting headlines. Headlime generates
                hundreds of headlines for you, simply by answering a few
                questions.
              </p>
              <button className="bg-blue-400 w-7/12 h-12 rounded text-white font-semibold text-lg">Start generating headlines</button>
            </div>
            <div className="w-3/5">
              <Video src="http://headlime.io/_nuxt/videos/c644194.mp4" />
            </div>
          </div>
        </section>
        <Business />
        <Article />
        <ColCardList />
        <section className="w-full mb-12 mt-32">
          <div className="container grid grid-cols-2 gap-10 px-16 mx-auto">
            <div className="w-full flex items-center justify-center">
              <Video src="http://headlime.io/_nuxt/videos/4be468a.mp4" />
            </div>
            <div className="w-full flex items-center justify-center">
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
          <div className="container grid grid-cols-2 gap-10 px-16 mx-auto">
            <div className="w-full flex items-center justify-center">
              <Guide
                title="Export your titles or save them for later"
                content="Need a new headline for your next campaign? Get started in seconds by loading projects you worked on."
                list={[
                  `Reduce hours to minutes when writing your next headline`,
                  `Easy to reuse for your next campaign`,
                ]}
              />
            </div>
            <div className="w-full flex items-center justify-center">
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
        <section className="w-full flex justify-center mb-12 flex-col items-center mb-12">
          <p className="text-5xl text-white font-bold text-center w-7/12 leading-none mb-4 px-6">
            Get the power of a copywriter for life, without paying their $100
            hourly rate.
          </p>
          <p className="text-base text-gray-400 font-normal text-center w-6/12 px-6">
            For a very low, one time investment you can keep creating high
            converting headlines, time and time again.
          </p>
        </section>
        <Price />
        <section className="w-full">
          <p className="text-center text-white text-sm mt-6">
            Payments are safely processed by <strong>Chargebee</strong> and
            invoiced under the company name <strong>ConvertWell</strong>.
          </p>
        </section>
        <Business />
      </main>
      <footer className="w-full">
        <nav className="flex justify-between items-center max-w-5xl p-4 mx-auto mt-24 text-center w-full">
          <img src={headlime} className="w-32 opacity-50" data-v-2743b535="" />
          <p className="text-base text-gray-700 font-normal">
            A Landingfolio. Made by Tri. Copyright © 2020
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
