const express =require("express")
const { getTransaction, CreateTransaction, getTransactionById, DeleteTransaction } = require("../controllers/transactioncontroller")
const {protect}=require("../middleware/authMiddleware")


const router=express.Router()

router.route('/').get(protect,getTransaction)
router.route('/create').post(protect,CreateTransaction)
router.route("/:id").get(protect,getTransactionById)
router.route("/:id").delete(protect,DeleteTransaction)
//.delete()
 module.exports=router;