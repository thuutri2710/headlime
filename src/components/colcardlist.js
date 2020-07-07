import React from "react";
import Card from "./card";
import icon_1 from "../images/icon_1.svg";

function ColCardList() {
  return (
    <section className="w-full flex justify-center items-center mb-16">
      <div className="w-10/12 grid grid-cols-3 gap-3">
        <Card
          type="col"
          src={icon_1}
          header="Get access to hundreds of ready to use headline formulas"
          content="Start increasing your conversion rate with optimized headlines. Easy to implement with working examples."
        />
        <Card
          type="col"
          src={icon_1}
          header="Suitable for ads, email subject lines, blogposts & landing page headlines"
          content="All headlines are filtered by platform. You can use them for advertising, landing pages, emails or blogs posts."
        />
        <Card
          type="col"
          src={icon_1}
          header="Formulas based on well-known and proven psychology principles"
          content="The headlines are based on different psychology principles. Test which one works best for you audience."
        />
      </div>
    </section>
  );
}

export default ColCardList;
