const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
// const { Patient } = require('../models/Patient');
const auth = require('../middleware/auth')


router.get('/all', auth, async (req, res) => {
  const users = await User.find()
  try {
    res.json({
      users
    })
  } catch (error) {
    res.json({
      error
    })
  }
})

router.get('/:id', auth, async (req, res) => {
  const id = req.params.id
  const user = await User.findById({ _id: id })
  try {
    res.json({
      user
    })
  } catch (error) {
    res.json({
      error
    })
  }
})

module.exports = router;


