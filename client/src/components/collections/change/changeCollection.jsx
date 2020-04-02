import React,{Component} from 'react'
import { withRouter } from 'react-router-dom'
import {getOneCollection, updateCollection} from '../../actions/collection-func'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

function InputIsEmpty(fieldName, collectionParam){
    if (document.getElementsByName(fieldName)[0].value != ''){
        return document.getElementsByName(fieldName)[0].value
    }
    else return collectionParam
}

class ChangeCollectionPage extends Component{
    constructor(){
        super()
        this.state={
            titlecomp:'Изменить коллекцию:',
            name:'',
            description:'',
            image:''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onSubm = this.onSubm.bind(this)
    }

    onChange(e){
        this.setState({ 
            [e.target.name]: e.target.value 
        })
    }

//сохранить изменения
   async onSubmit(e){
        e.preventDefault()
        let collection
        
        await getOneCollection(localStorage.getItem('collectionID')).then(res=>{
            collection=res.data.out[0]
            let data = {
                collectionId:collection._id,
                userId:collection.userId,
                userName:collection.userName,
                name:InputIsEmpty('nameCollection',collection.name),
                description:InputIsEmpty('descriptionCollection',collection.description),
                subject:collection.subject,
                date:collection.date,
                image:InputIsEmpty('imageCollection',collection.image),
                settings:collection.settings
            }
            console.log(data)
            updateCollection(data).then(res=>{
                alert('Коллекция успешно изменена!')
                localStorage.setItem('collectionName',data.name)
                localStorage.setItem('collectionDescription',data.description)
                localStorage.setItem('collectionImage',data.image)
                this.props.history.push('/full-info-about-collection')
            })
        })
    }

//назад
    onSubm(e){
        e.preventDefault()
        this.props.history.push('/full-info-about-collection')
    }

    componentDidMount(){
        this.mounted =true
        this.setState({
            name:localStorage.getItem('collectionName'),
            description:localStorage.getItem('collectionDescription'),
            image:localStorage.getItem('collectionImage')
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <h1>{this.state.titlecomp}</h1>
                <hr/>
                <hr/>
                    <Paper>
                        <Typography variant="h6" component="h4" className='text-left'>
                            Название коллекции
                        </Typography>
                        <br/>
                        <Typography component="p">
                            <input
                                type="text"
                                className="form-control "
                                name="nameCollection"
                                placeholder={this.state.name}
                                onChange={this.onChange}
                            />
                        </Typography>
                    </Paper>
              <br/>
                    <Paper>
                        <Typography variant="h6" component="h4" className='text-left'>
                            Описание коллекции
                        </Typography>
                        <br/>
                        <Typography component="p">
                            <textarea
                                rows="4"
                                type="text"
                                className="form-control"
                                name="descriptionCollection"
                                placeholder={this.state.description}
                                onChange={this.onChange}
                            />
                        </Typography>
                    </Paper>
              <br/>
                    <Paper>
                        <Typography variant="h6" component="h4" className='text-left'>
                            Изображение коллекции
                        </Typography>
                        <br/>
                        <Typography component="p">
                            <textarea
                                rows="4"
                                type="text"
                                className="form-control"
                                name="imageCollection"
                                placeholder={this.state.image}
                                onChange={this.onChange}
                                
                            />
                        </Typography>
                    </Paper>
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Сохранить изменения</button>
                    <button type="submit"  className="btn  btn-primary" onClick={this.onSubm}>Назад</button>
                </form>
            </div>   
          )
    }
}

export default withRouter(ChangeCollectionPage)