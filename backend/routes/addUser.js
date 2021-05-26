const router = require('express').Router();
let User = require('../models/userModel');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.route('/').get((req, res) => {
    User.find()
        .then(users =>res.json(users))
        .catch(err => res.status(400).json('Error: ' +err));
});

/* router.route('/add').post((req, res) => {
    const user = req.body.user;
    const number = req.body.number;
    const email = req.body.email;
    const pass = req.body.pass;

    const newUser = new User({
        user,
        number,
        email,
        pass,
    });

    newUser.save()
        .then(() => res.json('User Added'))
        .catch(err => res.status(400).json('Error: ' +err));
}); */

router.post("/add", async (req, res) => {
    try {
      let { email, user, number, pass, passCheck } = req.body;
  
      // validate
  
      if (!email || !pass || !user || !number || !passCheck)
        return res.status(400).json({ msg: "Not all fields have been entered." });
      if (pass.length < 6)
        return res
          .status(400)
          .json({ msg: "The password needs to be at least 6 characters long." }); 

      if (pass !== passCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });
  
      const existingUser = await User.findOne({ email: email });
      if (existingUser)
        return res
          .status(400)
          .json({ msg: "An account with this email already exists." }); 
  
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(pass, salt);
  
      const newUser = new User({
          user,
          number,
          email,
          pass: passwordHash 
         
      });
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


router.post("/login", async (req, res) => {
    try{
    const email = req.body.email;
    const pass = req.body.pass;

    if (!email || !pass)
        return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await User.findOne({ email: email });
    if (!user)
    return res
        .status(400)
        .json({ msg: "No account with this email has been registered." }); 
  
      const isMatch = await bcrypt.compareSync(pass, user.pass);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      console.log("token",token);
      res.json({
        token,
        user: {
          id: user._id,
          user: user.user,
        },
      });
    }
    catch (err) {
    res.status(500).json({ error: err.message });
  }

}); 
router.route('/:id').get((req, res)=>{
    User.findById(req.params.id)
        .then(tran =>res.json(tran))
        .catch(err => res.status(400).json('Error: ' + err))
});
router.route('/:id').delete((req, res)=>{
    User.findByIdAndDelete(req.params.id)
        .then(() =>res.json('User Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;