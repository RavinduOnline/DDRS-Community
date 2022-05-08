const express = require("express");

const router = express.Router();
const Reply = require("../models/reply");




router.get('/reply' , (req, res)=>{

    res.send("Reply Verified")
  
 });


router.post('/replycreate',async (req,res) => {


    const { forum_id, reply, user } = req.body;

    try{

    newReply = new Reply({
        forum_id,
        reply,
        user,
    })

    const replyCreate = await  newReply.save();
    
    if(replyCreate){
        return res.status(201).json({ message: "Reply created successfully" });
    } 
}catch{
    return res.status(400).json({ error : "Reply not cerated"});
    }

})

module.exports = router;