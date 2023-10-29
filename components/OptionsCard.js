import { Button, Card, CardActions } from "@mui/joy";
import { CardContent, Typography } from "@mui/material";
const OptionsCard = ({ imageSrc, imageAlt, cropType }) => {
  return (
    <Card className=" w-72 h-76 mx-auto">
      <div className="w-full h-40 overflow-hidden">
        <img
          src={imageSrc}
          loading="lazy"
          alt={imageAlt}
          className="object-fill mx-auto"
        />
      </div>
      <h3 className="text-center text-2xl font-bold">Sitaw</h3>
      <CardActions className="flex justify-center items-center">
        <Button
          component="a"
          href={`/auctions/${cropType}`}
          color="success"
          className="bg-emerald-500"
          variant="solid"
        >
          View Auctions
        </Button>
      </CardActions>
    </Card>
  );
};

export default OptionsCard;
