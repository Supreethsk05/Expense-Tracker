const mongoose =require('mongoose')
const bcrypt = require('bcryptjs');
const { use } = require('../routes/userRoutes');
const  transactionSchema=mongoose.Schema({
  
    name:{
        type : String,
        required:true,
    },
    method:{
        type:String,
        required:true
    },
    amount:{
        type: Number,
        required:true
    },

    description:{
        type:String,
        required:true
    },
   
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"



    },
},
{
    timestamps:true,
}
);
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports=Transaction;