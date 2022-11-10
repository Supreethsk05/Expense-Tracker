const express = require("express"); //import package
const dotenv = require("dotenv");
const { get } = require("mongoose");
const userRoutes=require('./routes/userRoutes')
const transactionRoutes=require("./routes/transactionRoutes")
const app = express(); //object of the imported package
const connectDB = require("./config/database");
const users=require("./Data/users")
const { notFound, errorHandler } = require("./middleware/errormiddleware");


dotenv.config();
connectDB();
app.use(express.json())
app.get("/", (req, res) => {
  res.send("API is running. .");
});
app.get("/transactions",(req,res)=>{
  res.json({
transactions
  })
})
app.get("/transactions/:id",(req,res)=>{
  const transaction = transactions.find((u) => u._id === req.params.id);
  res.send(transaction)
}
)
app.get("/api/users",(req,res)=>{
  res.json({
users
  })
})


const PORT = process.env.PORT || 5000;
app.use('/api/users',userRoutes)
app.use('/api/transaction',transactionRoutes)

app.use(notFound)
app.use(errorHandler)
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));