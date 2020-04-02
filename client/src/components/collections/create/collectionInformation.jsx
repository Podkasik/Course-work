import React, {Component} from 'react'
import {create} from '../../actions/collection-func'
import jwt_decode from 'jwt-decode'
import FormGeneral from './formGeneralInfo'
import {withRouter} from 'react-router-dom'


class General extends Component{  
    constructor() {  
        super()
        this.state = {
          name: '',
          description: '',
          subject: '',
          image:'',
          date:'',
          userId:'',
          userName: '',
          settings:''
        }       
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onSub = this.onSub.bind(this)    
    }
     
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value }
          )
    }
    
    onSubmit(e) {
        e.preventDefault()
        const token = localStorage.usertoken
        const decoded = jwt_decode(token);
        
        let settingString = ''
        let str1 = []
        let str2=[]
        document.getElementsByName('settingName').forEach(v=>str1.push(v.value))
        document.getElementsByName('settingType').forEach(v=>str2.push(v.value))
        for (var i=0;i<str1.length;i++){
          settingString += str1[i]+":"+str2[i]
          if(i!==str1.length-1){
            settingString+=","
          }
        }

        const newCollection = {
            name: this.state.name,
            description: this.state.description,
            subject: this.state.subject,
            image: this.state.image,
            date: this.state.date,
            userId: decoded.id,
            userName: decoded.name,
            settings: settingString
        }
        
        create(newCollection).then(res => {
          if (res) {            
            alert('Коллекция создана. Можете добавлять айтемы')
            this.props.history.push('/profile')
          }
        else{
          alert('Возникла ошибка. Попробуйте снова.')
        }}
        )
    }

    onSub(e) {
      e.preventDefault()
      this.props.history.push(`/profile`)
    }

    render(){
        return (
          <div>
            <FormGeneral data={this.state.name} onSubmit={this.onSubmit} onSub={this.onSub} onChange={this.onChange}/>
          </div>
        )
    }
}

export default withRouter(General)