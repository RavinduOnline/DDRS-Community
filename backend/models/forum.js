const mongoose = require("mongoose");

const forumSchema = new mongoose.Schema({
    Title:{
        type:String,
        required: true,
    },

    FCategory:{
        type:String,
        required: true,
    },

    Description:{
        type:String,
        required: true, 
    },
    
    Body:{
        type:String,
        required: true,
    },

    Created_at:{
        type:Date,
        default: Date.now()
    },

    user:Object,

    Comment_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments"
    },

},
{ timestamps: true }
);

module.exports=mongoose.model("Forum",forumSchema);