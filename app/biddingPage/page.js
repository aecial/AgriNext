import AuctionCard from "@/components/AuctionCard";
import BiddingCard from "@/components/BiddingCard";
import React from "react";

const page = () => {
  return (
    <div className="content-height grid grid-cols-1 lg:grid-cols-2">
      <AuctionCard />
      <BiddingCard />
    </div>
  );
};

export default page;
