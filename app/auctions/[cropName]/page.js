import React from "react";

const cropNamePage = ({ params }) => {
  return (
    <div>
      <h1>Welcom to the {params.cropName} auctions</h1>
    </div>
  );
};

export default cropNamePage;
