import React from 'react'
import ShowCompSetting from './showCompSetting'


function ShowSettings(props) {
  let setts = props.setts
  return (
        <div>
            { setts ?
              setts.map((sett, i) =>   
                   <ShowCompSetting sett={sett} i={i} onChange={props.onChange}/>                
                  ) 
                  :  "..."
            }           
          </div>
    )    
  }

export default ShowSettings