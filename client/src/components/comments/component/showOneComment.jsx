import React from 'react'


/*import { userById } from '../../actions/user-func'
import { getOneItem } from '../../actions/item-func'
import { getOneCollection } from '../../actions/collection-func'

async function ReturnUserName(userId){
    await userById(userId).then(res=>{
        console.log(res.data.out)
        return res.data.out.name
    })
    .catch(err=>{
        return console.log('Error')
    })
}

async function ReturnItemName(itemId){
    await getOneItem(itemId).then(res=>{
        return res.data.out.name
    })
}

async function GetOneCollection(id){
    await getOneCollection(id).then(response=>{
        return response.data.out.name
    })
}

async function ReturnCollectionName(itemId){
    await getOneItem(itemId).then(res=>{
        GetOneCollection(res.id_collection)
    })
}
*/



function ShowOneComment(props){

    var comments = props.comments
    return (
        <div>
            {comments ?
            comments.map((comment,i)=>
            <div clessName='comment-component' key={i}>
                <p>{comment.userName}: {comment.text}</p>
                <p>{comment.time} {comment.date} </p>
                <p>Айтем: {comment.itemName}</p>
                <hr/>
            </div>
            )
:'Здесь пока нет комментариев. Оставьте первый комментарий.'
            }
        </div>
    )
}

export default ShowOneComment