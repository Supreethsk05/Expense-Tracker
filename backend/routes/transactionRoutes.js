const express =require("express")
const { getTransaction, CreateTransaction } = require("../controllers/transactioncontroller")
const {protect}=require("../middleware/authMiddleware")


const router=express.Router()

router.route('/').get(protect,getTransaction)
router.route('/create').post(protect,CreateTransaction)
//router.route("/:id").get()
//.delete()
 module.exports=router;