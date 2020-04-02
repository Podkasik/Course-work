import React,{Component} from 'react'
import { withRouter } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ShowSetting from './showSetting'
import { getOneItem, updateItem } from '../../actions/item-func'
import AddTags from './showTags'

let x=0
function addNewField(){
    let k =10-document.getElementsByClassName('setting-compon').length
    if(x<k){
        var str = '<input type="text" className="form-control " name="tagNames" onChange={this.onChange} placeholder="Введите название тега"/> '
        str = str + '<div id="input' + (x + 1) + '"></div>'
        document.getElementById('input' + x).innerHTML = str
        x++
    }
    else{
        alert('Прекратите создавать теги! Уже создано их максимальное количество.')
    }
}

function TagsIsEmpty(itemParam){
    let arr=[]
    let myarr=[]
    document.getElementsByName('tagNames').forEach(v=>myarr.push(v.value))
    let num = myarr.length-itemParam.length
    let arrParam = myarr.slice(num)
    let arrVal = myarr.slice(0,num)
    console.log(arrParam)

    arrVal.forEach((v,i)=>{
        if(v!==''){
            arr.push(v)
        }
    })
    arrParam.forEach((v,i)=>{
        if(v ===''){
            arr.push(itemParam[i])
        }
        else arr.push(v)
    })
    return arr
}

function NameIsEmpty(itemParam){
    if(document.getElementsByName('nameItem')[0].value===''){
        return itemParam
    }else {
        return document.getElementsByName('nameItem')[0].value
    }
}

function SettIsEmpty(itemParam){
    document.getElementsByName('nameSetting').forEach((v,i)=>{
        if(v.value!==''){
            itemParam[i].value = v.value
        }
        if(v.type=='checkbox'){
            if(v.checked==true){
                itemParam[i].value='Да'
            }
            else{
                itemParam[i].value='Нет'
            }
        }
    })
    return itemParam
}

class ChangeItemPage extends Component {
    constructor(){
        super()
        this.state={
            titlecomp:'Изменить айтем',
            name:'',
            tags:[],
            settingsCollection:[]
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onSubm = this.onSubm.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value }
          )
    }

    //сохранить изменения
    async onSubmit(e){
        e.preventDefault()
        let item

        await getOneItem(localStorage.getItem('itemID')).then(res=>{
            item = res.data.out[0]
            let data = {
                itemId: item._id,
                tags:TagsIsEmpty(item.tags),
                settingsCollection:SettIsEmpty(item.settingsCollection),
                name:NameIsEmpty(item.name),
                createDate:item.createDate,
                id_collection:item.id_collection
            }
            console.log(data)
            updateItem(data).then(res=>{
                alert('Айтем успешно изменен!')
                this.props.history.push('full-info-about-item')
            })
        })

        //прочитать получившийся документ
        //получить из БД item по itemID
        //обновить в бд измененные поля и записать уже имевшиеся
        //updateItem()
        //getOneItem(itemID)
        //проверить, если поле пустое, то не изменять его значение в бд и оставить предыдущее
    }
//назад
    onSubm(e){
        e.preventDefault()
        //????  определиться, какой путь пушить  ????
        this.props.history.push('/full-info-about-item')
    }

    async componentDidMount(){
        this.mounted = true
        let item = {}
        await getOneItem(localStorage.getItem('itemID')).then(res=>{
            item= res.data.out[0]
            console.log(item)
        })
        this.setState({
            name:item.name,
            tags:item.tags,
            settingsCollection:item.settingsCollection
        })
    }

    render(){
        {x=0}
        return (
            <div>
        <form noValidate onSubmit={this.onSubmit}>
            <Paper>
                <Typography variant="h6" component="h4" className='text-left'>
                    Название айтема
                </Typography>
                <br/>
                <Typography component="p">
                    <input
                        type="text"
                        className="form-control "
                        name="nameItem"
                        placeholder={this.state.name}
                        onChange={this.onChange}
                    />
                </Typography>
            </Paper>
      <br/>
            <Paper>
                <Typography variant="h6" component="h4" className='text-left'>
                    Теги
                </Typography>
                <br/>
                <Typography component="p">                  
                        <div className="sett" id="input0"></div>
                        <AddTags tagsArr={this.state.tags} onChange={this.onChange}/>
                    <div className='add' onClick={addNewField}>Добавить тег</div>                   
                </Typography>
            </Paper>
            <br/>
            <Paper>
                <Typography variant="h6" component="h4" className='text-left'>
                        Дополнительные поля
                    </Typography>
                    <br/>
                    <Typography component="p">
                        <ShowSetting setts={this.state.settingsCollection} onChange={this.onChange.bind(this)}/>
                    </Typography>
            </Paper>
            <button type="submit" className="btn btn-primary " onClick={this.onSubmit}> Сохранить изменения </button>
            <button type="submit"  className="btn  btn-primary " onClick={ this.onSubm}>   Назад  </button>
        </form>
    </div>   
        )
    }
}

export default withRouter(ChangeItemPage)

