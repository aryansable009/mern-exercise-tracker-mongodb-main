const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storeorderSchema = new Schema(
  {
    //_id: Schema.Types.ObjectId,
    _id: Schema.Types.ObjectId,
    productid: { type: Schema.Types.ObjectId, ref: "Product" },
    orSkuid: { type: String, required: true },
    currQty: { type: Number, required: true },
    newQty: { type: Number, required: true },
    appQty: { type: Number, required: true },
    orderstatus: { type: String, required: true },
    subBy: { type: String, required: true },
    datetime: { type: Date, required: true },
    storeName: { type: String, required: true },
    storeAddress: { type: String, required: true },
    cityName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Storeorder =
  mongoose.models.Storeorder || mongoose.model("Storeorder", storeorderSchema);
module.exports = Storeorder;
