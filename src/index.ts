import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();
const port = 4000;
const Dish = [
  {
    id: 1,
    name: "Betroot and orange salad",
    price: "12.99",
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    url: "image.png",
  },
];
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.json(Dish);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
