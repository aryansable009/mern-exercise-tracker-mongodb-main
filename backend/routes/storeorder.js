const router = require("express").Router();
const products = require("../models/product.model");
const Storeorder = require("../models/storeorder.model");

//find : Product
/* router.route("/").get((req, res) => {
  Product.find()
    .then((storeorder) => {
      res.json(storeorder);
    })
    .catch((err) => res.status(400).json("Error" + err));
});
 */

//populate : find storeorders and products on skuid or productid
/* router.route("/").get((req, res) => {
  Storeorder.find()
    .populate("productid")
    .then((storeorder) => {
      res.json(storeorder);
    })
    .catch((err) => res.status(400).json("Error" + err));
});
 */

//aggregate-PRODUCTS
//This code was fixed using mongoose debug
router.route("/").get((req, res) => {
  products
    .aggregate([
      {
        $lookup: {
          from: "storeorders",
          localField: "_id",
          foreignField: "productid",
          as: "StoreOrderDetails",
        },
      },
    ])
    .then((storeorder1) => {
      res.json(storeorder1);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

//aggregate-StoreOrder
/* router.route("/").get((req, res) => {
  Storeorder.aggregate([
    {
      $lookup: {
        from: "Product",
        localField: "productid",
        foreignField: "_id",
        as: "StoreOrderDetails",
      },
    },
  ])
    .then((storeorder1) => {
      res.json(storeorder1);
    })
    .catch((err) => res.status(400).json("Error" + err));
});
 */
router.route("/add").post((req, res) => {
  const productid = req.body.productid;
  const orSkuid = req.body.orSkuid;
  const currQty = req.body.currQty;
  const newQty = req.body.newQty;
  const appQty = req.body.appQty;
  const orderstatus = req.body.orderstatus;
  const subBy = req.body.subBy;
  const datetime = Date.parse(req.body.datetime);
  const storeName = req.body.storeName;
  const storeAddress = req.body.storeAddress;
  const cityName = req.body.cityName;

  const newStoreorder = new Storeorder({
    productid,
    orSkuid,
    currQty,
    newQty,
    appQty,
    orderstatus,
    subBy,
    datetime,
    storeName,
    storeAddress,
    cityName,
  });

  newStoreorder
    .save()
    .then(() => res.json("Storeorder added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Storeorder.findById(req.params.id)
    .then((storeorder) => {
      res.json(storeorder);
    })
    .catch((err) => res.status(404).json(err));
});

router.route("/:id").delete((req, res) => {
  Storeorder.findByIdAndDelete(req.params.id)
    .then((storeorder) => {
      res.json("Deleted Storeorder");
    })
    .catch((err) => res.status(404).json(err));
});

router.route("/update/:id").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = req.body.date;

  Storeorder.findByIdAndUpdate(
    req.params.id,
    {
      username: username,
      description: description,
      duration: duration,
      date: date,
    },
    (err) => {
      if (err) {
        res.status(400).json("Error", err);
      } else {
        res.json("Updated Storeorder");
      }
    }
  ).catch((err) => {
    res.status(400).json("Error", err);
  });
});

module.exports = router;
