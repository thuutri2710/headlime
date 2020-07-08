// import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import headlime from "../images/Headlime.png";

function Header() {
  // const { site } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <header className="flex flex-wrap items-center justify-between max-w-6xl mx-auto my-8 w-full">
      <img
        src={headlime}
        width="150"
        className="mx-auto md:mx-0"
        data-v-2743b535=""
      />
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=210221&amp;theme=dark"
        alt="Headlime - Create headlines like copywriting experts | Product Hunt Embed"
        width="250px"
        height="54px"
        style={{ width: "250px", height: "54px" }}
        data-v-2743b535=""
      />
    </header>
  );
}

export default Header;
