import React from "react";
import com_1 from "../images/company_1.png";
import com_2 from "../images/company_2.png";
import com_3 from "../images/company_3.png";
import com_4 from "../images/company_4.png";
import com_5 from "../images/company_5.png";
import com_6 from "../images/company_6.png";

function Business() {
  return (
    <section className="container mb-4">
      <div className="py-4 text-center mx-auto mt-8 max-w-5xl">
        <h4 className="text-sm font-thin my-2 md:my-4 text-gray-600 uppercase mb-6">
          Trusted by leading bussiness
        </h4>
        <ul className="flex justify-center items-center w-full flex-row flex-wrap">
          <li className="w-4/12 p-2 md:p-0 md:w-2/12">
            <img src={com_1} className="w-auto p-5 md:px-6" />
          </li>
          <li className="w-4/12 p-2 md:p-0 md:w-2/12">
            <img src={com_2} className="w-auto p-5 md:px-6" />
          </li>
          <li className="w-4/12 p-2 md:p-0 md:w-2/12">
            <img src={com_3} className="w-auto p-5 md:px-6" />
          </li>
          <li className="w-4/12 p-2 md:p-0 md:w-2/12">
            <img src={com_4} className="w-auto p-5 md:px-6" />
          </li>
          <li className="w-4/12 p-2 md:p-0 md:w-2/12">
            <img src={com_5} className="w-auto p-5 md:px-6" />
          </li>
          <li className="w-4/12 p-2 md:p-0 md:w-2/12">
            <img src={com_6} className="w-auto p-5 md:px-6" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Business;
