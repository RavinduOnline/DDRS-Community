const mongoose = require("mongoose");

const forumSchema = new mongoose.Schema({
    Title:{
        type:String,
        trim: true,
        required: true,
    },

    FCategory:{
        type:String,
        required: true,
    },

    Description:{
        type:String,
        trim: true,
        required: true, 
    },

    Body:{
        type:String,
        trim: true,
        required: true,
    },

    Comment_id:{
        type:String,
    },

},
{ timestamps: true }
);

module.exports=mongoose.model("Forum",forumSchema);