const express = require("express");

const router = express.Router();
const ReplyDB = require("../models/reply");




router.get('/reply' , (req, res)=>{

    res.send("Reply Verified")
  
 });


router.post('/replycreate',async (req,res) => {
    const replyData = new ReplyDB({
        forum_id: req.body.forum_id,
        reply: req.body.reply,
        user: req.body.user
    })


    await replyData.save().then((doc) =>{
        res.status(201).send({
            status: true,
            data: doc
        })
    }).catch((err) => {
        res.status(400).send({
            status: false,
            message: "Error while adding reply"
        })
    })
})

module.exports = router;