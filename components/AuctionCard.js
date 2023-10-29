import { Avatar, Divider } from "@mui/joy";

const AuctionCard = () => {
  return (
    <div className="p-10 flex flex-col gap-4">
      <div className="flex justify-center items-center gap-4">
        <Avatar
          variant="outlined"
          size="lg"
          className="bg-emerald-700 text-white"
        >
          TLP
        </Avatar>
        <h2 className="text-xl">Teddy Pascual</h2>
        <Divider orientation="vertical" className="text-black" />
        <h2 className="text-xl">Auction Id: 1234</h2>
      </div>
      <img
        src="https://images.pexels.com/photos/73640/pexels-photo-73640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Carrots"
        className="w-full h-[75%]"
      />
      <div className="flex items-center justify-center gap-4">
        <h2 className="text-xl">Base Bid Price: 20</h2>
        <Divider orientation="vertical" className="text-black" />
        <h2 className="text-xl">Latest Bid Price: 50</h2>
      </div>
    </div>
  );
};

export default AuctionCard;
