import axios from 'axios'
//import { json } from 'body-parser'


export const create = newCollection => {
      return axios
        .post('post', {
          name: newCollection.name,
          description: newCollection.description,
          subject: newCollection.subject,
          image: newCollection.image,
          date: newCollection.date,
          userId: newCollection.userId,
          userName: newCollection.userName,
          settings: newCollection.settings
        })
        .then(response => {         
          return response.data
        })
        .catch(err => {
          console.log(err)
        })
  }

export const getCollection = async (userId) => {
    let myVar = []
    await axios
      .get('get', { params: {
        userId:userId
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

export const getAllCollections = async () => {
   let arr=[]
   await axios
      .get('getall')
      .then(response => {
        arr=response     
      })
      .catch(err => {
        console.log(err)      
      })
      return arr
  }

export const deleteCollection = collectionId => {
    return axios
      .get('delete', { params: {
        collectionId:collectionId
      }
      })
      .then(response => {
        return response.data       
      })
      .catch(err => {
        console.log(err)
      })
  }

export const getOneCollection = async (collectionId) => {
  let arr=[]
    await axios
      .get('getone', { params: {
        collectionId:collectionId
      }})
      .then(response => {
        arr=response      
      })
      .catch(err => {
        console.log(err)
      })
      return arr
  }

export const updateCollection = (data) => {   
  return axios
    .put('update-collection', { params: {
      data:data
    } 
  })
    .then(response => {
      return response.data
      
    })
    .catch(err => {
      console.log(err)
    })
}

export const getSettings = async (collectionId) =>{
  let settings
  await axios
  .get('/getsettings',{params:{
    collectionId:collectionId
  }})
  .then(response =>{
    settings = response
  })
  .catch(err =>{
    console.log(err)
  })
  return settings
}

export const getUserId = async (collectionId) =>{
  let userId
  await axios
  .get('/getuserid',{params:{
    collectionId:collectionId
  }})
  .then(response =>{
    userId = response
  })
  .catch(err =>{
    console.log(err)
  })
  return userId
}