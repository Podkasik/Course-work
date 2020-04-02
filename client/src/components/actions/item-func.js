import axios from 'axios'


export const createItem = newItem => {
      return axios
        .post('postItem', {
          name: newItem.name,
          tags: newItem.tags,
          settingsCollection: newItem.settingsCollection,
          createDate: newItem.createDate,
          id_collection: newItem.id_collection
        })
        .then(response => {     
          return response
        })
        .catch(err => {
          console.log(err)
        })
  }

export const getOneItem = async (itemId) => {
    let arr=[]
      await axios
        .get('getoneitem', { params: {
          itemId:itemId
        }})
        .then(response => {
          arr=response      
        })
        .catch(err => {
          console.log(err)
        })
        return arr
    }

    export const getItem = async (collectionId) => {
      let myVar = []
      await axios
        .get('getItem', { params: {
          collectionId:collectionId
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

    export const updateItem = (data) => {   
      return axios
        .put('update-item', { params: {
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

    export const getAllItems = async () => {
      let arr=[]
      await axios
         .get('getallitems')
         .then(response => {
           arr=response     
         })
         .catch(err => {
           console.log(err)      
         })
         return arr
     }