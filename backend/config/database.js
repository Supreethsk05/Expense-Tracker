const mongoose =require("mongoose")
const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };
  
 const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {  useNewUrlParser: true,
  useUnifiedTopology: true, });
        console.log(`MongoDB Connected : ${conn.connection.host}`)
    }
    catch (error){
        console.error(`Error : ${error}`)
    }
};
module.exports = connectDB;