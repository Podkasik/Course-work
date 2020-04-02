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

function ShowCompSetting (props){
    let sett = props.sett
    let i = props.i
    return (
        <div className="setting-component" key={i}> 
                    <label>{sett.name}</label>
                    <br/>
                    <label>{sett.value}</label>
                    <br/>
                    <input
                        id= {i}
                        type={CheckType(sett.type)}
                        className="form-control "
                        name="nameSetting"
                        placeholder={sett.value}
                        onChange={props.onChange}
                    />
                    <hr/>                        
        </div>
    )
   
}

export default ShowCompSetting