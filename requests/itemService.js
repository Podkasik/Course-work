const express = require("express")
const router = express.Router()
const Item = require('../models/Item')
const cors = require('cors')
router.use(cors())


router.post('/postItem', (req, res) => {
    Item.create({
       name: req.body.name,
       tags: req.body.tags,
       settingsCollection: req.body.settingsCollection,
       createDate: new Date().toISOString().slice(0,10),
       id_collection: req.body.id_collection
    },)
    .then((post)=>{
      res.send(post)
      //res.json({ status: post + ' Айтем создан!' })     
    })
    .catch(err => {
        res.send('error: ' + err)
      })
    
})

router.get('/getoneitem', (req, res) =>{
  const itemId = req.query.itemId
  Item.find({_id:itemId}).then((post,err)=>{    
      if (post.length) {
          res.send({out:post})
        } 
        else {
          console.log(err)
          res.send('Такого айтема не существует')
        }
  })
})

router.get('/getItem', (req, res) =>{   
  const collectionId = req.query.collectionId   
  Item.find({id_collection:collectionId}).then((post,err)=>{        
      if (post.length) {
          res.send({out:post})
        } 
        else {
          console.log(err)
          res.send('Айтемы в коллекции отсутствуют')
        }
  })
})

router.put('/update-item', (req, res) =>{
  const itemId = req.body.params.data.itemId
  Item.updateOne({_id: itemId}, 
    {
      tags: req.body.params.data.tags,
      settingsCollection: req.body.params.data.settingsCollection,
      name: req.body.params.data.name  
    })
        .then(post =>{
            res.send(post);
        })
        .catch(err => {
          res.send('error: ' + err)
        })
})

router.get('/getallitems', (req, res) =>{
  Item.find().then((post,err)=>{      
      if (post.length) {
          res.send({out:post})
        } 
        else {
          console.log(err)
          res.send('Айтемы отсутствуют')
        }
  })
})

module.exports = router