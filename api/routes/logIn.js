const express = require('express');
const router = express.Router();


module.exports = ({getUserByEmail}) => {
  router.post("/login", (req, res) => {
    const { email, password }=req.body;
    getUserByEmail(email)
    .then(user => {
      req.session["userId"] = user.id;
      res.status(200)
    })
    .then(user => {
      res.redirect("/portfolio")
    })
    .catch(err => res.status(err.status).send(err.message))
  });

  return router;
}