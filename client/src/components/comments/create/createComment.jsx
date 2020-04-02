import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { createComment } from '../../actions/comments-func'

import { getOneItem } from '../../actions/item-func'

class CreateCommentPage extends Component{
    constructor(){
        super()
        this.state = {
            titlecomp:'Оставить комментарий',
            name:jwt_decode(localStorage.usertoken).name,
            text: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

        //по нажатию на кнопку ОПУБЛИКОВАТЬ
    async onClick(e){
        e.preventDefault()

        let itemName = ''
        await getOneItem(localStorage.getItem('itemID')).then(res=>{
            console.log(res.data.out[0])
            itemName = res.data.out[0].name
        })

        let data = {
            userId: jwt_decode(localStorage.usertoken).id,
            userName: jwt_decode(localStorage.usertoken).name,
            itemId:localStorage.getItem('itemID'),
            itemName: itemName,
            text:document.getElementsByName('commentText')[0].value
        }
        console.log(data)
        createComment(data).then(res=>{
            if(res.data){
                this.props.history.push('/short-info-aboit-item')
            }
            else {
                alert('Непредвиденная ошибка. Попробуйте снова')
            }
        })

        //перейти по ссылке обратно на форму просмотра айтема
    }

    render(){
        return(
        <div>
            {localStorage.usertoken ?
                <div className='container'>
                <label name="labelNameUser">{this.state.name}</label>
                <textarea rows='4' name='commentText' type="text" placeholder="Введите текст комментария" />
                <button onClick={this.onClick}>Опубликовать</button>
                </div>
            : 'Вы не можете оставить комментарий'
            }
        </div>
   
        )
    }
}

export default withRouter(CreateCommentPage) 