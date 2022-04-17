const router = require("express").Router();
const mongoose = require('mongoose'); 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = mongoose.model('Admin');

router.get('/protected', (req, res)=>{

    res.send("Hello User")
  
  });

// Register Admin
router.post("/adminsignup", async (req, res) => {
    const {fName, lName, email, password } = req.body;
  try {
        if(!fName || !lName || !email || !password){
            return res.status(422).json({ error: "Please fill all the field" });
        }
        let admin = await Admin.findOne({ email:email });
        if (admin) {
          return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        newUser = new Admin({
            fName,
            lName,
            email,
            password:hashedPassword,
         });
        const adminCreated = await newUser.save()
        if(adminCreated){
            return res.status(201).json({ message: "User created successfully" });
        } 

    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: err.message });
  }
});

module.exports = router;