const express = require("express")
const router = express.Router()
const Comment = require('../models/Comment')
const cors = require('cors')
router.use(cors())

router.get('/getCommentItem', (req, res) =>{   
    const itemId = req.query.itemId   
    Comment.find({itemId:itemId}).then((post,err)=>{        
        if (post.length) {
            res.send({out:post})
          } 
          else {
            console.log(err)
            res.send('К этому айтему нет комментариев')
          }
    })
  })

router.post('/postComment',(req,res)=>{
let time = new Date()
    Comment.create({
      userId:req.body.userId,
      userName:req.body.userName,
      itemId:req.body.itemId,
      itemName:req.body.itemName,
      date:new Date().toISOString().slice(0,10),
      time:time.getHours()+":"+time.getMinutes()+":"+time.getSeconds(),
      text:req.body.text
    })
    .then((post)=>{
      res.send(post)
    })
    .catch(err =>{
      res.send('error: '+ err)
    })
  })

module.exports = router