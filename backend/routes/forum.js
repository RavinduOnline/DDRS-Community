const express =require('express');
const mongoose=require('mongoose');
const router = express.Router();
const Forum = mongoose.model('Forum');

router.get('/forumget',(req,res)=>{
    res.send('Welcome to stackflow clone tutorial');
})


    router.post("/forumcreate", async (req, res) => {


    const { Title, FCategory, Description,Body } = req.body;
    try {
        if(!Title || !FCategory || !Description || !Body ){
            return res.status(422).json({ error: "Please fill all the field" });
        }

        newForum = new Forum({
            Title,
            FCategory,
            Description,
            Body,
         });
        const newForumCreate = await newForum.save()
        if(newForumCreate){
            return res.status(201).json({ message: "forum created successfully" });
        } 
        else{
            return res.status(201).json({ message: "forum created err" });
        }

    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: err.message });
  }
});


module.exports = router;