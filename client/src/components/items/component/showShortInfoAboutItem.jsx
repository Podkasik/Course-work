import React, { Component } from 'react'
import {getOneItem} from '../../actions/item-func'
import ShowOneItem from './showOneItem'
import {withRouter} from 'react-router-dom'
import AllCommentsPage from '../../comments/component/allCommentsPage'

class ShortInfoAboutItem extends Component {
  constructor(props) {
      super(props)
      this.state={
        titlecomp : 'Информация об айтеме:',
        items:[]
      }
      this.onChange = this.onChange.bind(this)
      this.onClick=this.onClick.bind(this)
  }

  onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
  }
  onClick(e){
    e.preventDefault()
    this.props.history.push(`/short-info-about-collection`)
  }
  
  componentDidMount() {
    this.mounted = true
    this.func()
  }

  func = async () => {   
    let itemId=localStorage.getItem('itemID')
    if(this.mounted){
    getOneItem(itemId).then(res=>{
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
                <hr/>
                <hr/>
                  <ShowOneItem  items = {this.state.items} onSubmit={this.onClick} title='Назад'/>                 
                  <AllCommentsPage/>
            </div>  
          </div>
      </div>
    </div>
  )}
}

export default withRouter(ShortInfoAboutItem)