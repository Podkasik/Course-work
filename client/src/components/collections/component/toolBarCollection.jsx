import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {getSettings} from '../../actions/collection-func'

let arrSett=[]
let arrSett1=[]
class ToolBarCollection extends Component{
    constructor(){
        super()
        this.state={

        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onSubm = this.onSubm.bind(this)
        this.onSub = this.onSub.bind(this)
    }

async onSubmit(e) {
        e.preventDefault()

  arrSett=[]
  arrSett1=[]
  await getSettings(localStorage.getItem('collectionID')).then(res=>{
    let str = res.data.out.settings
    let number = str.split(',')
    const keys = []
    const types = []
    let obj = {}
    for (var i=0;i<number.length;i++){
        keys.push(number[i].split(':')[0])
        types.push(number[i].split(':')[1])
        obj={
          type:types[i],
          name:keys[i],
          value:''
          }
     arrSett1.push(obj)  
    }
    console.log(arrSett1)
   /* arrSett=[]
    for (var i=0;i<number.length;i++){
        if(number[i].split(':')[1]==="Дата"){
            types[i]="Date"
        }
        if(number[i].split(':')[1]==="Логический тип"){
            types[i]="Boolean"
        }
        if(number[i].split(':')[1]==="Число"){
            types[i]="Numeric"
        }
        if(number[i].split(':')[1]==="Строка"){
            types[i]="String"
        }
        obj={
            type:types[i],
            name:keys[i],
            value:''
            }
       arrSett.push(obj)
       //console.log(arrSett)
    }  */
  })
  console.log(arrSett)
  localStorage.setItem('curSettings1',JSON.stringify(arrSett1))
  //localStorage.setItem('curSettings',JSON.stringify(arrSett))
  this.props.history.push(`/create-item`)
      }

      onSubm(e) {
        e.preventDefault()
        this.props.history.push(`/change-collection`)
      }

      onSub(e) {
        e.preventDefault()
        //удалить все комментарии, айтемы и лайки, связанные с этой коллекцией
        //localStorage.removeItem('collectionID')
        //localStorage.removeItem('collectionName')
        //localStorage.removeItem('collectionDescription')
        //localStorage.removeItem('collectionImage')
      }

      render(){
          return(
            <div>
              <button onClick={this.onSubmit}>Добавить айтем</button>
              <button onClick={this.onSubm}>Изменить коллекцию</button>
              <button onClick={this.onSub}>Удалить коллекцию</button>
            </div>
          )
      }
}

export default withRouter(ToolBarCollection)