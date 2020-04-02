import React from 'react'

function IdInput(i){
    let str = 'input'+(i+1)
    return str
}

function AddTags(props){
    let tagsArr = props.tagsArr
        return( 
            <div>
                 {tagsArr ?
                 tagsArr.map((tag,i)=>
                    <div className='setting-compon' name='tagName' key={i} id={IdInput(i)}>
                        <input type="text" className="form-control " name="tagNames" onChange={props.onChange} placeholder={tag}/>
                        <div id={IdInput(i)}></div>
                    </div>
                 )
                 : '...'
                 }
            </div>
                 )
}

export default AddTags