import React from 'react'

function ShowOneCollection(props) {
  var collects = props.collects
    return (
        <div>
            { collects ?
              collects.map((collect, i) =>             
                      <div className="collection-component" key={i}> 
                            <p>ID коллекции: {collect._id}</p>
                            <p>Название коллекции: {collect.name}</p>
                            <p>Описание: {collect.description}</p>
                            <p>Тип коллекции: {collect.subject}</p>
                            <p>ID пользователя: {collect.userId}</p>
                            <p>Имя пользователя: {collect.userName}</p>
                            <p>Дата создания: {collect.date}</p>
                            <p>
                              <button id = {collect._id} onClick={props.onSubmit} >
                                {props.title}
                              </button>
                            </p>
                            <hr/>                        
                      </div>
                  ) 
                  :  "Loading..."
            }           
          </div>
    )    
  }

export default ShowOneCollection