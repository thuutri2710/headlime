import React from "react";
import Fig1 from "../images/fig_1.jpg";
import Fig2 from "../images/fig_2.jpg";

function Article() {
  return (
    <section className="w-full flex justify-center items-center mb-12">
      <article className="max-w-3xl mx-auto bg-gray-900 px-24 border-2 border-blue-700 py-10 text-white">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Have you ever had that moment where you stare at your screen, just
          trying to think of a good headline for your email, website or
          product... but nothing really happens? Wouldn’t it be great to just
          skip that?
        </h1>
        <p className="mb-4 text-gray-300">
          This problem is the reason I decided to create this tool. Headlime is
          a headline generator that makes creating titles for your product easy.
          You grab one of the hundreds of headlines, fill in the blanks and
          tada: your headline is ready.
        </p>
        <p className="mb-4 text-gray-300">
          This tool was initially a Google Spreadsheet I created for my own
          projects and clients. I was sick and tired of those days I kept
          looking at a blank screen, unable to come up with any headlines,
          titles or subject lines.
        </p>
        <p className="mb-4 text-gray-300">
          Then, one day, I decided to do something about it. It started with
          collecting all the headlines I ever used and researched which
          headlines resulted in the highest conversions possible. After many
          hours of brainstorming, researching and grinding my brain, the
          headlines in this tool were selected.
        </p>
        <p className="mb-4 text-gray-300">
          I A/B tested the new headlines on the websites of my clients and got
          amazing results. Some headlines even doubled the initial conversion
          rates!
        </p>
        <figure className="mb-4">
          <img src={Fig1} alt="Figure_1" className="w-full"/>
          <figcaption className="text-sm text-gray-500 font-normal italic">Screenshot of one of the experiments I performed with our new headlines.</figcaption>
        </figure>
        <p className="mb-4 text-gray-300">
          The headline on this landing page was obviously tested too with this
          title generator. The results were even better then expected.
        </p>
        <figure className="mb-4">
          <img src={Fig2} alt="Figure_2" className="w-full" />
          <figcaption className="text-sm text-gray-500 font-normal italic">The best headline had a 29% CTR and 13.5% conversion rate!</figcaption>
        </figure>
        <p className="mb-4 text-gray-300">
          Quickly, word spread around town, and a few co-workers asked me if I
          could share this “secret” collection of converting headlines with
          them. I did. They tested some of the headlines and saw some very
          positive results with these headlines as well. They were blown away by
          the massive impact a headline could make. This success inspired me to
          create this tool and make it available for everyone.
        </p>
        <p className="mb-4 text-gray-300">
          Why keep all those headline formulas for myself if any marketer could
          benefit from this? From now on, you can stop wasting time on writing
          headlines that don’t convert. Pick one of the headline formulas and
          give it a try! I&apos;m confident that your profit, sales, and number of
          customers will improve. That&apos;s why I even offer a money back guarantee
          if you don&apos;t see any positive results.
        </p>
      </article>
    </section>
  );
}

export default Article;
