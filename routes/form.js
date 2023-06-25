const express = require('express');
const router = express.Router();
const Student = require('../models/Form')
const { body, validationResult } = require('express-validator');
/////////create a user : Post"/api/form/createuser"/////////////
router.post('/createuser', [
  body('fristname', 'please enter your first name').isLength({ min: 1,max:50 }),
  body('lastname', 'please enter your last name').isLength({ min: 1,max:50 }),
  body('phoneno', "your phone number is short").isLength({ min: 11 }),
  body('email', 'please enter the valid email').isEmail(),
  body('address', 'please enter your address').isLength({ min: 1,max:50 }),
  body('workexperience', 'please enter your experience').isLength({ min: 1 }),
  body('city', 'please select city').isLength({ min: 1 }),
  body('country', 'please select country').isLength({ min: 1 }),
  body('degree', 'please select degreelevel').isLength({ min: 1 }),
  body('online', 'please select online/physical').isLength({ min: 1 }),
  body('course', 'please select course').isLength({ min: 1 }),
  body('education', 'please select education level').isLength({ min: 1 }), 
  body('photo', 'please upload the screenshot of payment').isLength({min:2})
], async (req, res) => {
  let success=false;
  const errors = validationResult(req);
  const err=errors.array();
  const messages = err.map(obj => obj.msg);
  if (!errors.isEmpty()) {
    
      return res.status(400).json({success, messages, errors: errors.array() });
  
  
  }
  try {
    const admin='talha'
    const student = await Student.create({
      fristname: req.body.fristname,
      lastname: req.body.lastname,
      phoneno: req.body.phoneno,
      email: req.body.email,
      address:req.body.address,
      workexperience:req.body.workexperience,
      city:req.body.city,
      country:req.body.country,
      course:req.body.course,
      online:req.body.online,
      education:req.body.education,
      photo:req.body.photo,
      degree:req.body.degree,
      admin:admin


    })
    success=true;
    res.json({ success,student});
  } catch (error) {
    res.status(500).json({error,success})
}
}

)
router.get('/getuser', async (req,res)=>{

  const admin=req.header('admin');
  const online=req.header('online');
  let success=false;
  try {
      const data=await Student.find({admin,online});
      success=true;
      res.json({data,success});
  } catch (error) {
      res.json({error,success});
  }
})


router.get('/totalonline', async (req,res)=>{

 
  let success=false;
  try {
      const data=await Student.countDocuments({online:'online'})
      success=true;
      res.json({data,success});
  } catch (error) {
      res.json({error,success});
  }
})
router.get('/totalphysical', async (req,res)=>{

 const online='physical'
  let success=false;
  try {
      const data=await Student.countDocuments({online});
      success=true;
      res.json({data,success});
  } catch (error) {
      res.json({error,success});
  }
})
module.exports = router;
