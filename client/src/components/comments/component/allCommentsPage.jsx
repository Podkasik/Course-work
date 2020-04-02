import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import ShowOneComment from '../component/showOneComment'
import CreateCommentPage from '../create/createComment'
import {getCommentItem} from '../../actions/comments-func'



class AllCommentsPage extends Component{
    constructor(){
        super()
        this.state={
            titlecomp: 'Комментарии:',
            comments:[]
        }
                
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount(){
        this.mounted = true
        this.show()
    }
 
    show=async()=>{
    let resArr= []
        await getCommentItem(localStorage.itemID).then(res=>{
            if(res.data.out){
                resArr = res.data.out
            }
        })  
        console.log(resArr)             
        this.setState({
            comments:resArr
        })
    }

    render(){
        return(
            <div className="container">
          <div className="jumbotron mt-5 ">
            <div className='row'>
                <div className ='col-sm-9'>
                 <h1>{this.state.titlecomp}</h1>
                 <CreateCommentPage/>
                 <ShowOneComment  comments = {this.state.comments}/>
            </div>  
          </div>
      </div>
    </div>
        )
    }
}

export default withRouter(AllCommentsPage)