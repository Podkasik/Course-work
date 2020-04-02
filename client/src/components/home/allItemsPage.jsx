import React, { Component } from 'react'
import {getAllItems} from '../actions/item-func'
import  ShowOneItem  from '../items/component/showOneItem'
import {withRouter} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { getUserId } from '../actions/collection-func'

class AllItemsPage extends Component {
  constructor(props) {
      super(props)
      this.state={
        titlecomp:'Список айтемов:',
        items:[]
      }

      this.onChange = this.onChange.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
      this.onClComm=this.onSubmit.bind(this)
      }


async onSubmit(e){
  e.preventDefault()
  let itId = ''
  e=e||window.event
  e=e.target||e.srcElement
  if(e.nodeName === "BUTTON"){
    itId = e.id
  }
  localStorage.setItem('itemID', itId)

  if(localStorage.getItem('usertoken')){
    let colUser=''
    let curUser = jwt_decode(localStorage.usertoken).id
    await getUserId(localStorage.getItem('collectionID')).then(res=>{
      colUser = res.data.out
    })
    if(colUser===curUser){
      this.props.history.push(`/full-info-about-item`)
    }
    else{
      this.props.history.push(`/short-info-about-item`)
    }
  }
  else {
    this.props.history.push(`/short-info-about-item`)
  }

}

  onChange(e) {
      this.setState({ [e.target.name]: e.target.value }
        )
  }
  
  componentDidMount() {
    this.mounted = true
    this.show()
  }
  
 show = async () => {   
      if(this.mounted){
      getAllItems(localStorage.getItem('collectionID')).then(res=>{
        console.log(res)
        this.setState({
          items: res.data.out
        }) 
      })
    }
  }    
  render() {
      return ( 
      <div className="container">
          <div className="jumbotron mt-5 ">
            <div className='row'>
                <div className ='col-sm-9'>
                 <h1>{this.state.titlecomp}</h1>
                 <ShowOneItem  items = {this.state.items} onSubmit={this.onSubmit} title='Показать'/>
            </div>  
          </div>
      </div>
    </div>
  )
}

}

export default withRouter(AllItemsPage)