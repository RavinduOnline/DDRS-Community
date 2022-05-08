const express = require("express");

const router = express.Router();
const ReplyDB = require("../models/reply");
const { param } = require("./reply");


router.post('/:id', async (req,res) => {
    try{
        await CommentDB.create({
            forum_id: req.params.id,
            comment: req.body.comment,
            user: req.body.user
        }).then((doc) => {
            res.status(201).send({
                status: true,
                message: "Comment added Successfully"
            });
        }).catch(() => {
            res.status(400).send({
                status:false,
                message: "error while adding comment"
            });
        });
    }catch (err){
        res.status.(500).send({
            status: false,
            message: "Error while adding comment"
        });
    }
});

