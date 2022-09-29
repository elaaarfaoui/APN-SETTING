console.clear();

const express = require("express");
const router = express.Router();
const controllers= require("../controllers/user")


//test
router.get("/", (req,res)=> {
res.send("Hello APN-Setting")
})


//get all Subscriber's IMSI
router.get("/IMSI", controllers.getIMSI);

// Register point of sale
// router.post("/register", registerRules(), validation, controllers.register);



module.exports = router;
