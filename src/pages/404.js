import React from "react";

import Form from "../components/form";

// function handleOnClick(){
//   console.log("click");
// }

function handleOnChange(event) {
  console.log(event.target.value);
}

function NotFoundPage() {
  return (
    <div className="w-full bg-blue-100 bg-opacity-25">
      <div className="grid grid-cols-2 gap-20 w-8/12 mx-auto h-screen">
        <Form onClick="" onChange={handleOnChange} />
      </div>
    </div>
  );
}

export default NotFoundPage;
