const express = require('express')
const router = express.Router()
const Prodcut = require('../models/product')


router.get('/', function(req, res, next) {
  var products = Prodcut.find((err,rows)=>{
    return err ? err : res.render('page/index', { title: 'Express',products:rows})
  })
})

router.get('/auth', function(req, res, next) {
    res.render('user/auth')
})


module.exports = router
