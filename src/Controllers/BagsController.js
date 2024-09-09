const { response } = require("express");
const Bags = require("../Models/BagsSchema");

//addbag
exports.addbag = async (req, res) => {
  try {
    const newbags = await Bags.create(req.body);
    res.status(200).json(newbags);
  } catch (error) {
    res.status(500).json(error);
  }
};

//allbags
exports.allbags = async (req, res) => {
  try {
    const getbags = await Bags.find();
    res.status(200).json(getbags);
  } catch (error) {
    res.status(500).json(error);
  }
};

//delete bags
exports.deleteBags = async (req, res) => {
  try {
    const result = await Bags.findByIdAndDelete({ _id: req.body.Bagsid });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};


//update bags
exports.updateBags = async (req, res) => {
  try {
    const result = await Bags.findByIdAndUpdate(
      req.body.bagsid,
      { BagsPrice: req.body.BagsPrice },
      { new: true }
    );
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
