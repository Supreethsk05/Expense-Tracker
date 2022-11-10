const asyncHandler = require("express-async-handler");
const Transaction=require("../Models/transactionModel")
// @desc    Get logged in user notes
// @route   GET /api/notes
// @access  Private
const getTransaction = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({ user: req.user._id });
  res.json(transactions);
});

//@description     Fetch single Note
//@route           GET /api/notes/:id
//@access          Public
const getTransactionById = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);

  if (transaction) {
    res.json(transaction);
  } else {
    res.status(404).json({ message: "Note not found" });
  }

  res.json(transaction);
});

//@description     Create single Note
//@route           GET /api/notes/create
//@access          Private
const CreateTransaction = asyncHandler(async (req, res) => {
  const { name,method,amount,description} = req.body;

  if (!name || !method || !amount|| !description) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const transaction = new Transaction({ user: req.user._id, name,method,amount,description });

    const createdTransaction = await transaction.save();
    if(!createdTransaction){
        res.json("HELLO")
    }

    res.status(201).json(createdTransaction);
  }
});

//@description     Delete single Note
//@route           GET /api/notes/:id
//@access          Private
const DeleteTransaction = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);

  if (transaction.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (transaction) {
    await transaction.remove();
    res.json({ message: "Note Removed" });
  } else {
    res.status(404);
    throw new Error("Note not Found");
  }
});


  


module.exports={getTransaction,getTransactionById,CreateTransaction,DeleteTransaction}