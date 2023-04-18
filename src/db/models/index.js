const mongoose = require("mongoose");
const ProductSchema = require("../schemas/product-schema");

exports.Product = mongoose.model("Product", ProductSchema);
