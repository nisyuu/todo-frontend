import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import getToDoList, { postCreateTodo, patchCheckTodo, deleteTodo } from '../../common/api/todo';

const useStyles = makeStyles(theme => ({
  todoTextField: {
    marginRight: theme.spacing(1)
  }
}));

const Top = () => {
  const classes = useStyles();
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    (async () => {
      const list = await getToDoList();
      setTodoList(list);
    })();
  }, []);

  const handleCreate = async () => {
    if ( todo === '' || todoList.some( value => todo === value.name ) ) return;
    const createTodoResponse = await postCreateTodo(todo);
    setTodoList(todoList.concat(createTodoResponse));
  };

  const handleSetTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleCheck = (e) => {
    const todoId = e.target.value;
    const checked = e.target.checked;
    const list = todoList.map( (value, index) => {
      if (value.id.toString() === todoId) {
        todoList[index].checked = checked;
      }
      return todoList[index];
    });
    setTodoList(list)
    patchCheckTodo(todoId, checked);
  }

  const handleDelete = (e) => {
    const todoId = e.currentTarget.dataset.id;
    const list = todoList.filter( value => value['id'].toString() !== todoId);
    setTodoList(list);
    deleteTodo(todoId);
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" justifyContent="space-between" mt={4} mb={4}>
        <TextField className={classes.todoTextField} label="やること" variant="outlined" size="small" onChange={handleSetTodo} />
        <Button variant="contained" color="primary" onClick={handleCreate}>作成</Button>
      </Box>
      <FormGroup>
        {todoList.map((todo, index) => {
          return (
            <Box key={index} display="flex" justifyContent="space-between" mb={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={todo.checked}
                    onChange={handleCheck}
                    value={todo.id}
                    color="primary"
                  />
                }
                label={todo.name}
              />
              <Button variant="contained" color="secondary" data-id={todo.id} onClick={handleDelete}>削除</Button>
            </Box>
          )
        })}
      </FormGroup>
    </Container>
  )
};
export default Top;