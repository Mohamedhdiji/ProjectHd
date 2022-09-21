const { Router } = require("express");
const express=require("express");
const {createCard}=require("../controllers/cart.controllers");

router=express.Router();
router.post("/cart/addItem",createCard);

module.exports=router;