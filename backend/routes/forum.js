const express =require('express');
const mongoose=require('mongoose');
const router = express.Router();
const Forum = mongoose.model('Forum');

router.get('/forum', (req, res)=>{
    res.send("Hi I'm Forum Get Method")  
 });

// Create
router.post("/forumcreate", async (req, res) => {
    const {Title, FCategory, Description, Body } = req.body;
  try {
        if(!Title || !FCategory || !Description || !Body){
            return res.status(422).json({ error: "Please fill all the field" });
        }

        newForum = new Forum({
            Title,
            FCategory,
            Description,
            Body,
         });
        const forumCreated = await newForum.save()
        if(forumCreated){
            return res.status(201).json({ message: "User created successfully" });
        } 

    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: err.message });
  }
});

//retrieve
router.get("/forumget", async (req, res) => {
    const error = {
      message: "Error in retrieving Forum",
      error: "Bad request",
    };
  
    Forum.aggregate([
      {
        $lookup: {
          from: "comments",
          let: { forum_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$forum_id", "$$forum_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                // user_id: 1,
                comment: 1,
                created_at: 1,
                // forum_id: 1,
              },
            },
          ],
          as: "comments",
        },
      },
      {
        $lookup: {
          from: "reply",
          let: { forum_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$forum_id", "$$forum_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                // user_id: 1,
                // reply: 1,
                // created_at: 1,
                // forum_id: 1,
                // created_at: 1,
              },
            },
          ],    
          as: "replyDetails",
        },
      },
      // {
      //   $unwind: {
      //     path: "$answerDetails",
      //     preserveNullAndEmptyArrays: true,
      //   },
      // },
      {
        $project: {
          __v: 0,
          // _id: "$_id",
          // answerDetails: { $first: "$answerDetails" },
        },
      },
    ])
      .exec()
      .then((forumDetails) => {
        res.status(200).send(forumDetails);
      })
      .catch((e) => {
        console.log("Error: ", e);
        res.status(400).send(error);
      });
  });
  
  router.get("forumget/:id", async (req, res) => {
    try {
      // const question = await QuestionDB.findOne({ _id: req.params.id });
      // res.status(200).send(question);
      Forum.aggregate([
        {
          $match: { _id: mongoose.Types.ObjectId(req.params.id) },
        },
        {
          $lookup: {
            from: "reply",
            let: { forum_id: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$forum_id", "$$forum_id"],
                  },
                },
              },

              {
                $project: {
                  _id: 1,
                  user: 1,
                  reply: 1,
                  // created_at: 1,
                  forum_id: 1,
                  Created_at: 1,
                },
              },
            ],
            as: "replyDetails",
          },
        },
        {
          $lookup: {
            from: "comments",
            let: { forum_id: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$forum_id", "$$forum_id"],
                  },
                },
              },
              {
                $project: {
                  _id: 1,
                  forum_id: 1,
                  user: 1,
                  Comment: 1,
                  // created_at: 1,
                  // question_id: 1,
                  Created_at: 1,
                },
              },
            ],
            as: "comments",
          },
        },
        {
          $project: {
            __v: 0,
          },
        },
      ])
        .exec()
        .then((forumDetails) => {
          res.status(200).send(forumDetails);
        })
        .catch((e) => {
          console.log("Error: ", e);
          res.status(400).send(error);
        });
    } catch (err) {
        console.log(err)
      res.status(400).send({
        message: "Forum not found",
      });
    }
  });

module.exports = router;