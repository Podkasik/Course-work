import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'

class ToolBarCollection extends Component{
    constructor(){
        super()
        this.state={

        }
        this.onSubm = this.onSubm.bind(this)
        this.onSub = this.onSub.bind(this)
    }

      onSubm(e) {
        e.preventDefault()
        this.props.history.push(`/change-item`)
      }

      onSub(e) {
        e.preventDefault()
        //удалить все комментарии,и лайки, связанные с этим айтемом
        //localStorage.removeItem('collectionID')
        //localStorage.removeItem('collectionName')
        //localStorage.removeItem('collectionDescription')
        //localStorage.removeItem('collectionImage')
        //localStorage.removeItem('itemID')
      }

      render(){
          return(
            <div>
              <button onClick={this.onSubm}>Изменить айтем</button>
              <button onClick={this.onSub}>Удалить айтем</button>
            </div>
          )
      }
}

export default withRouter(ToolBarCollection)