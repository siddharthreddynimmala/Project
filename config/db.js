const mongoose=require('mongoose')

const MONGO='mongodb+srv://mern123:mern123@mern-stack.advxfsa.mongodb.net/ACMDB?retryWrites=true&w=majority'
const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(MONGO);
        console.log(`MongoDB is connected successfully`)
    } catch (error) {
        console.log(`Error in connecting to MONGO`)
    }
}

module.exports=connectDB;