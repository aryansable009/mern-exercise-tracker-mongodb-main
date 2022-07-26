const router = require("express").Router();
//const Exercise = require("../models/exercise.model");
const Product = require("../models/product.model");

router.route("/").get((req, res) => {
  Product.find()
    .then((product) => {
      res.json(product);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  //  _id
  const skuid = req.body.skuid;
  const product = req.body.product;
  const origin = req.body.origin;
  // -----Omkar  convert into Number
  const price = Number(req.body.price);
  const uom = req.body.uom;
  const isActive = req.body.isActive;
  const datetime = Date.parse(req.body.datetime);

  /* const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
 */
  const newProduct = new Product({
    skuid,
    product,
    origin,
    price,
    uom,
    isActive,
    datetime,
  });

  newProduct
    .save()
    .then(() => res.json("Product added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => res.status(404).json(err));
});

router.route("/:id").delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((product) => {
      res.json("Deleted Product");
    })
    .catch((err) => res.status(404).json(err));
});

router.route("/update/:id").post((req, res) => {
  const skuid = req.body.skuid;
  const product = req.body.product;
  const origin = req.body.origin;
  const price = req.body.price;
  const uom = req.body.uom;
  const isActive = req.body.isActive;
  const datetime = Date.parse(req.body.datetime);

  Product.findByIdAndUpdate(
    req.params.id,
    {
      skuid: skuid,
      product: product,
      origin: origin,
      price: price,
      uom: uom,
      isActive: isActive,
      datetime: datetime,
    },

    (err) => {
      if (err) {
        res.status(400).json("Error", err);
      } else {
        res.json("Updated Exercise");
      }
    }
  ).catch((err) => {
    res.status(400).json("Error", err);
  });
});

module.exports = router;
