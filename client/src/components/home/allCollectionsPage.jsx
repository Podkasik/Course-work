import React, { Component } from 'react'
import {getAllCollections, getOneCollection} from '../actions/collection-func'
import ShowOneCollection from '../collections/component/showOneCollection'
import {withRouter} from 'react-router-dom'
import jwt_decode from 'jwt-decode'

class AllCollectionsPage extends Component {
  constructor(props) {
      super(props)
      this.state={
        titlecomp:'Все коллекции:',
        collects:[]
      }
      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
  }

onSubmit(e){
  e.preventDefault()
  let colId = ''
  let currentCollectionIDUser=''
  e=e||window.event
  e=e.target||e.srcElement
  if(e.nodeName === "BUTTON"){
    colId = e.id
  }  
 getOneCollection(colId).then(res=>{
    console.log(res.data.out)
    localStorage.setItem('collectionID', colId)
    getOneCollection(colId).then(res=>{
      console.log(res.data.out)
      localStorage.setItem('collectionName', res.data.out[0].name)
      localStorage.setItem('collectionDescription', res.data.out[0].description)
      localStorage.setItem('collectionImage', res.data.out[0].image)
      localStorage.setItem('usNm',res.data.out[0].userName)
    })
    currentCollectionIDUser=res.data.out[0].userId
    if(localStorage.getItem('usertoken')){
      const decoded = jwt_decode(localStorage.usertoken)
      if((currentCollectionIDUser===decoded.id)||(decoded.role==='ADMIN')){
      console.log('full info')
      this.props.history.push(`/full-info-about-collection`)
    }    else{
      console.log('short info')
      this.props.history.push(`/short-info-about-collection`)
    }
    }
    else{
      console.log('short info')
      this.props.history.push(`/short-info-about-collection`)
    }

  })
}

  onChange(e) {
      this.setState({ [e.target.name]: e.target.value }
        )
  }
  
  componentDidMount() {
    this.mounted = true
    this.populatePosts()
  }
  
 populatePosts = async () => {   
      if(this.mounted){
        getAllCollections().then(res=>{
        console.log(res)
        this.setState({
          collects: res.data.out
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
                <ShowOneCollection  collects = {this.state.collects} onSubmit={this.onSubmit} title='Показать'/>
            </div>  
          </div>
      </div>
    </div>
  )}
}

export default withRouter(AllCollectionsPage)