import express, { Application, Request, Response } from "express";
import cors from "cors";
import { nanoid } from "nanoid";

const app: Application = express();
const port = 3001;

const Dish = [
  {
    id: "1",
    name: "Betroot and orange salad",
    price: "12.99",
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    url: "image.png",
  },
  {
    id: "2",
    name: " salad",
    price: "12.99",
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    url: "image.png",
  },
  {
    id: "2",
    name: " salad",
    price: "12.99",
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    url: "image.png",
  },
];
app.use(cors());
app.use(express.json());
// app.get("/", (req: Request, res: Response) => {
//   res.send("hi~ it's me ");
// });
app.post("/", (req: Request, res: Response) => {
  const { name } = req.body;
  const { price } = req.body;
  const { ingredients } = req.body;
  const { url } = req.body;
  const id = nanoid();
  Dish.push({
    id,
    name,
    price,
    ingredients,
    url,
  });
  res.send([]);
});

app.get("/", (req: Request, res: Response) => {
  res.json(Dish);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
