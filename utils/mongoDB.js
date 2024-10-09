import mongoose from "mongoose";

const mongoDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{dbName:'punks'})
    }
    catch(e){
        console.log(e)
    }
}
export default mongoDB