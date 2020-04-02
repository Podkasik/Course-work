import axios from 'axios'

export const getCommentItem = async (itemId) => {
    let myVar = []
    await axios
      .get('getCommentItem', { params: {
        itemId:itemId
      }
      })
      .then(response => {
        myVar = response   
      })
      .catch(err => {
        console.log(err)
      })
      return myVar
  }

  export const createComment = async newComment =>{
    return axios
    .post('postComment',{
      userId:newComment.userId,
      userName:newComment.userName,
      itemId:newComment.itemId,
      itemName:newComment.itemName,
      text:newComment.text
    })
    .then(response=>{
      return response
    })
    .catch(err =>{
      console.log(err)
    })
  }