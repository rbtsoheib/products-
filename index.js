const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let products = [
  {
    id: 1,
    name: "iphone",
    price: "129.99$",
    description: "it's not worth it do not buy it.",
  },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
});


app.post("/api/products", (req, res) => {
  const newproduct = { id: products.length + 1, ...req.body };
  products.push(newproduct);
  res.json(newproduct);
});

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
