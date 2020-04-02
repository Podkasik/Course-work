import React, {Component} from 'react'
import {createItem} from '../../actions/item-func'
import FormGeneral from './formGeneralInfoItem'
import {withRouter} from 'react-router-dom'

class General extends Component{  
    constructor() {  
        super()
        this.state = {
          name: '',
          tags: [],
          settingsCollection: [],
          createDate:'',
          idCollection:'' 
        }       
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onSub = this.onSub.bind(this)   
    }
     
onChange(e) {
        this.setState({ [e.target.name]: e.target.value }
          )
    }

async onSubmit(e) {
        e.preventDefault()  

        let arrTags = []        
        document.getElementsByName('tagName').forEach(v=>{
          if(v.value!=''){
            arrTags.push(v.value)
          }
        })

        let sett = JSON.parse(localStorage.getItem('curSettings1'))
        for (var i =0;i<sett.length;i++){
            sett[i].value = document.getElementsByName('nameSetting')[i].value
            if(sett[i].type=="Логический тип"){
              if(document.getElementsByName('nameSetting')[i].checked==true){
                sett[i].value = 'Да'
              }else{
                sett[i].value = 'Нет'
              }
            }        
        }
        console.log(sett)
        const newItem = {
            name: document.getElementsByName('nameItem')[0].value,
            tags:arrTags,
            settingsCollection: sett,
            createDate: '/',
            id_collection:localStorage.getItem('collectionID')
        }    
        await createItem(newItem).then(res => {
          if (res.data.createDate) {
            alert('Айтем создан.')
            console.log(res)
            localStorage.removeItem('curSettings')
            this.props.history.push('/full-info-about-collection')
          }
        else{
          alert('Возникла ошибка. Попробуйте снова.')
          console.log(res)
        }}
        )        
    }

    onSub(e) {
      e.preventDefault()
      this.props.history.push('/full-info-about-collection')
    }
    render(){
        return (
          <div>
            <FormGeneral  data={this.state.name} onSubmit={this.onSubmit} onSub={this.onSub} onChange={this.onChange}/>
          </div>
        )
    }
}

export default withRouter(General)