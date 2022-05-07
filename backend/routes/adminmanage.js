const router = require("express").Router();
const mongoose = require('mongoose'); 
const User = mongoose.model('User');
const Forum = mongoose.model('Forum');

//Get User Count / Forum Count & Comment Count
router.get('/admindashboard/countdata', async (req, res)=>{

        try{
            const userCount = await User.countDocuments();
            const forumCount = await Forum.countDocuments();

            console.log(userCount)
            return res.status(200).json({ 
                userCount, 
                forumCount 
            });

        }catch{
            return res.status(400).json({ error: "Can't calculate the counting data" });
        }
  
 });


 router.get('/admindashboard/toptable', async (req,res)=>{
    
        try{
            //Display the date in descending order in using commenting count
            const forumData = await Forum.find().sort ( { "Body" : 1 } );
                
                return res.status(200).json({
                    success:true,
                    existingForum:forumData
                });

        }catch{
            return res.status(400).json({ error: "Can't Find the top forun data" });
        }

});



module.exports = router;