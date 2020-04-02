import React from 'react'

function ovTags(tagsArr){
  let str = '#'
  tagsArr.forEach(v=>str+=v+" #")
  str = str.substr(0,str.length-2)
  return str
}

function ovSettings(settArr){
return(
  <div>
    {settArr.map((sett,i)=>
    <div key={i}>
      {sett.name}:{sett.value}      
    </div>
    )}
  </div>
)
}

function ShowOneItem(props) {
  var items = props.items
    return (
        <div>
            { items ?
              items.map((item, i) =>             
                      <div className="item-component" key={i}> 
                            <p>ID айтема: {item._id}</p>
                            <p>Название айтема: {item.name}</p>
                            <p>Тэги: {ovTags(item.tags)}</p>
                            <p>Дополнительные параметры: {ovSettings(item.settingsCollection)}</p>
                            <p>Дата создания: {item.createDate}</p>
                            <p>Название коллекции: {localStorage.getItem('collectionName')}</p>
                            <p>Имя пользователя: {localStorage.getItem('usNm')}</p>
                            <p>
                              <button id = {item._id} onClick={props.onSubmit} >
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

export default ShowOneItem