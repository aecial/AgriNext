import { Avatar, Table, Input } from "@mui/joy";

const BiddingCard = () => {
  return (
    <div className="p-10 flex flex-col gap-4">
      <h1 className="text-4xl uppercase text-center font-bold">Carrots</h1>
      <h2 className="text-3xl text-emerald-700 font-bold">50</h2>
      <h3 className="text-xl">Bidding will end at: 11:59:00</h3>
      <h3 className="text-xl">Volume: 10kg</h3>
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl uppercase text-center font-bold">
          Top Bidders
        </h1>
        <div className="h-80 overflow-scroll">
          <Table>
            <th>Name</th>
            <th>Bid Amount</th>
            <th>Date</th>
            <tbody className="">
              <tr className="p-10">
                <td className="flex items-center gap-2">
                  <Avatar size="sm">TLP</Avatar>Teddy Pascual
                </td>
                <td>20</td>
                <td>10-29-23 1:14PM</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <form action="" className="flex flex-col gap-4">
          <Input
            variant="outlined"
            placeholder="Enter Bid"
            className="text-emerald-700 border border-emerald-700"
          />
          <button className="w-full text-xl bg-emerald-700 text-white rounded-md">
            Bid
          </button>
        </form>
      </div>
    </div>
  );
};

export default BiddingCard;
