import React from 'react'

function CheckType(type){
  let tp = 'text'
  if(type==='Логический тип'){
    tp = "checkbox"
    return tp
  }
  if(type==='Дата'){
    tp = "date"
    return tp
  }
  if(type==='Число'){
    tp = "number"
    return tp
  }
  return tp
}

function ShowOneSetting(props) {
  let setts = JSON.parse(localStorage.getItem('curSettings1'))
    return (
        <div>
            { setts ?
              setts.map((sett, i) =>             
                      <div className="setting-component" key={i}> 
                      <label>{sett.name}</label>
                      <input
                        type={CheckType(sett.type)}
                        className="form-control "
                        name="nameSetting"
                        placeholder={sett.type}
                        id= {i}
                        onChange={props.onChange}
                    />
                      <hr/>                        
                      </div>
                  ) 
                  :  "..."
            }           
          </div>
    )    
  }

export default ShowOneSetting