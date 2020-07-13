import React from "react";
import Card from "./card";
import icon_2 from "../images/icon_2.svg";
import icon_3 from "../images/icon_3.svg";
import icon_4 from "../images/icon_4.svg";

function RowCardList() {
  return (
    <section className="container flex justify-center items-center flex-col mb-16 px-4 md:px-0">
      <h1 className="text-2xl md:text-4xl font-semibold text-white text-center mb-8">
        6 reasons why you should buy Headlime right now:
      </h1>
      <div className="flex flex-wrap">
        <Card
          type="row"
          src={icon_3}
          header="Your headline is the first thing your visitors see"
          content="Within a split-second, people decide if they close your site - or click and spend a few more seconds checking out what you have to offer. Your ad, landing page, article, or email could be so good, but if your headline sucks, people will leave and won’t even see your offer."
        />
        <Card
          type="row"
          src={icon_2}
          header="You will waste less time on creating headlines"
          content="Stop staring at your screen for hours every time you need a headline. Open the blueprint, navigate to the type of headline you need and choose the one which fits best. The Headline Formulas book will earn itself back by your first headline."
        />
        <Card
          type="row"
          src={icon_4}
          header="You will get more clicks, sales and conversions"
          content="Our proven headlines are optimized and a/b tested for increased conversion and open-rates. We’ve tested them and saw stunning results, some even doubling their conversion rates. You will notice the results right away after implementing."
        />
        <Card
          type="row"
          src={icon_4}
          header="Master the skill of writing converting headlines"
          content="As a marketer, it’s critical to master the skill of writing attention-grabbing headlines. Great headlines create curiosity, excitement, and enthusiasm to click or continue. A headline can literally make - or break - your business. You only have one shot to succeed."
        />
        <Card
          type="row"
          src={icon_2}
          header="Headline formulas for all marketing channels"
          content="You can use the headline formulas in all your marketing channels. The book contains headlines suitable for blogs, social media, landing pages, emails, advertising and more. Easily find a suitable headline with the filter options in the excel sheet."
        />
        <Card
          type="row"
          src={icon_3}
          header="Lifetime money back guarantee"
          content="We are 100% certain that the headline formulas will help you increase your conversion rates and click throughs. If for some reason you don’t see any positive results, you will get your money back. No deadline, I'm that certain."
        />
      </div>
    </section>
  );
}

export default RowCardList;
