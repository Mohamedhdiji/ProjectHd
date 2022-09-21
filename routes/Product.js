const express  = require("express");
const {addProduct,getAllProduct,getOneProduct,deleteProduct,updateProduct,getMenProducts,getKidsProducts,getWomenProducts}=require("controllers/product.controllers");
router=express.Router();
router.post("/addProduct", addProduct);
router.get("/getAllProduct", getAllProduct);
router.get("/getMenProducts", getMenProducts);
router.get("/getWomenProducts", getWomenProducts);
router.get("/getkidsProducts", getkidsProducts);
router.get("/getOneProduct/:_id", getOneProduct);
router.delete("/deleteOneProduct/:_id", deleteProduct);
router.put("/updateProduct/:_id", updateProduct);
 
module.exports=router;