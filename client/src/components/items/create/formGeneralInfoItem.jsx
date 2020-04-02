import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ShowOneSetting from '../create/showOneSetting'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  }
}))

let x=0
function addNewField(){
    if(x<10){
        var str = '<input type="text" className="form-control " name="tagName" placeholder="Введите название тега"/> '
        str = str + '<div id="input' + (x + 1) + '"></div>'
        document.getElementById('input' + x).innerHTML = str
        x++
    }
    else{
        alert('Прекратите создавать теги! Уже создано их максимальное количество.')
    }
}

function FormGeneral(props) {
  const classes = useStyles()
  {x=0}
  return (
    <div>
        <form noValidate onSubmit={props.onSubmit.bind(this)}>
            <Paper className={classes.root}>
                <Typography variant="h6" component="h4" className='text-left'>
                    Название айтема
                </Typography>
                <br/>
                <Typography component="p">
                    <input
                        type="text"
                        className="form-control "
                        name="nameItem"
                        placeholder="Введите название айтема"
                        onChange={props.onChange.bind(this)}
                    />
                </Typography>
            </Paper>
      <br/>
            <Paper className={classes.root}>
                <Typography variant="h6" component="h4" className='text-left'>
                    Теги
                </Typography>
                <br/>
                <Typography component="p">
                    <div className="sett" id="input0"></div>
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
                        <ShowOneSetting onChange={props.onChange}/>
                    </Typography>
            </Paper>
            <button type="submit" className="btn btn-primary "> Создать </button>
            <button type="submit"  className="btn  btn-primary " onClick={ props.onSub.bind(this)}>   Назад  </button>
        </form>
    </div>   
  )
}

 export default FormGeneral