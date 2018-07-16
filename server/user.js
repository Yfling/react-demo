const express = require('express')
const Router = express.Router()

Router.get('/list', function (req, res) {
  User.find({}, function(err, doc) {
    return res.json(doc)
  })
})

Router.get('/info', function (req, res) {
  // 用户没有cookie
  return res.json({code: 1})
})

module.exports = Router
