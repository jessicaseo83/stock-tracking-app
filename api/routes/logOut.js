const express = require('express');
const router = express.Router();

module.exports = () => {
  router.post("/logout",(req,res) => {

    req.session=null
    res.status(200).end()
  })
  return router;
};