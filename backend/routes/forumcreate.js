const express =require('express');
const mongoose=require('mongoose');

const router = express.Router();
const ForumDB = require('../models/forum')

router.get('/',(req,res)=>{
    res.send('Welcome to stackflow clone tutorial')
})

router.use('/forum',forumRouter)

router.post('',async(req,res) =>{
    const forumData = new ForumDB({
        Title:req.body.title,
        FCategory:req.body.FCategory,
        Description:req.body.Description,
        body:req.body.Description,
        user:req.body.user,
        });

    await forumData
    .save()
    .then((doc)=>{
        res.status(201).send({
            status:true,
            data:doc,
        });
    })
    .catch((err)=>{
        res.status(400).send({
            status:false,
            message:"error addding forum",
        });
    });
    



});


module.exports = router;