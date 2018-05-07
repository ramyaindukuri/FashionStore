const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

//Importing models
const Product = require("../models/product.model");

//Create Product
router.post("/", (req, res) => {
    const p=new Product({
        title:req.body.title,
        category:req.body.category,
        price:req.body.price,
        imageUrl:req.body.imageUrl
    });
    p.save()
    .then(p => res.status(200).json({ data: p }))
    .catch(err => res.status(500).json({ error: err }));
});

//Read all products
router.get("/", (req, res) => {
  Product.find()
    .exec()
    .then(p => res.status(200).json({ data: p }))
    .catch(err => res.status(500).json({ error: err }));
});

//Read single product
router.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .exec()
    .then(p => res.status(200).json({ data: p }))
    .catch(err => res.status(500).json({ error: err }));
});

//Update product
router.patch("/:id", (req, res) => {
  console.log(req.params.id);
  res.status(200).json({ success: "Product Updated" });
});

//Delete product
router.delete("/:id", (req, res) => {
  Product.remove({ _id: req.params.id })
    .exec()
    .then(p => res.status(200).json({ data: 'Product deleted'}))
    .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;
