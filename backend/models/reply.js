const mongoose = require("mongoose");

const replySchema = new mongoose.Schema({
        name:{
            type:String,
            trim: true,
            required:true,
        }
}
{ timestamps: true }

);
mongoose.model("Reply",replySchema)