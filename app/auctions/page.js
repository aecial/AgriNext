import { Card, CardActions, Button } from "@mui/joy";
const auctions = () => {
  return (
    <div className="content-height flex justify-center items-center">
      <Card className=" w-72 h-64 mx-auto">
        <img
          src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
          srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
          loading="lazy"
          className=" object-contain"
          alt=""
        />
        <CardActions>
          <Button
            component="a"
            href="/auctions"
            color="success"
            className="bg-emerald-500"
            variant="solid"
          >
            Bid
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default auctions;
