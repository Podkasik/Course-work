import React, { Component } from 'react'
import {getOneCollection} from '../../actions/collection-func'
import ShowOneCollection from './showOneCollection'
import ToolBarCollection from './toolBarCollection'
import PageItemCollection from './../pageItemCollection'
import {withRouter} from 'react-router-dom'
import jwt_decode from 'jwt-decode'

class FullInfoAboutCollection extends Component {
  constructor(props) {
      super(props)
      this.state={
        titlecomp:'Иформация о коллекции:',
        collects:[]
      }
      this.onChange = this.onChange.bind(this)
      this.onClick=this.onClick.bind(this)
  }

  onChange(e) {
      this.setState({ [e.target.name]: e.target.value }
        )
  }
  onClick(e){
    e.preventDefault()
    let colUser = ''
    let curUser = jwt_decode(localStorage.usertoken).id
    let collectionId=localStorage.getItem('collectionID')
    getOneCollection(collectionId).then(res=>{
      console.log(res.data.out[0].userId)
      colUser=res.data.out[0].userId
      if(curUser===colUser)
      {
        this.props.history.push(`/collections-current-user`)
      }
      else{
        this.props.history.push(`/home`)
      }
    })
  }
  componentDidMount() {
    this.mounted = true
    this.populatePosts()
  }

  populatePosts = async () => {   
    let collectionId=localStorage.getItem('collectionID')
    if(this.mounted){
    getOneCollection(collectionId).then(res=>{
      console.log(res)
      this.setState({
        collects: res.data.out,
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
                  <ToolBarCollection/>
                  <ShowOneCollection  collects = {this.state.collects} onSubmit={this.onClick} title='Назад'/>
                  <PageItemCollection/>
            </div>  
          </div>
      </div>
    </div>
  )}
}

export default withRouter(FullInfoAboutCollection)