const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config();
const { Schema } = mongoose;
const productSchema = new Schema(
  {
    image: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("/product", productSchema);

app.get("/product", (req, res) => {
  Product.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  Product.findById(id, (err, ) => {
    if (!err) {
      if (doc) {
        res.status(200);
        res.send(doc);
      } else {
        res.status(404).json({ message: "404 Not Found" });
      }
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.post("/product", (req, res) => {
  let product = new Product({
    image: req.body.image,
    category: req.body.category,
    name: req.body.name,
    price: req.body.price,
  });
  product.save();
  res.send({ message: "SUCCESFULL" });
});

app.delete("/product/:id",  (req, res) => {
  const { id } = req.params;
   Product.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.send("DELETE");
    } else {
      res.status(500).json({ message: err });
    }
  });
});
const PORT = process.env.PORT;
const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD);
mongoose.connect(DB, (err) => {
 if (!err) {
  console.log("DB CONNECT");
  app.listen(PORT, () => {
    console.log(`Port ${PORT}`)
  });
 }
});