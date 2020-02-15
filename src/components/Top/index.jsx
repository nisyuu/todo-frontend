import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  todoTextField: {
    marginRight: theme.spacing(1)
  }
}));

const Top = () => {
  const classes = useStyles();
  const [todoList, setTodoList] = useState(['洗濯', '掃除', '食器洗い']);
  const [todo, setTodo] = useState('');

  const handleCreate = () => {
    if (todo === '' || todoList.indexOf(todo) !== -1) return;
    setTodoList(todoList.concat(todo));
  };

  const handleSetTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleDelete = (todo) => {
    const newArray = todoList.filter(value => value !== todo);
    setTodoList(newArray);
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
                    value={todo}
                    color="primary"
                  />
                }
                label={todo}
              />
              <Button variant="contained" color="secondary" onClick={() => handleDelete(todo)}>削除</Button>
            </Box>
          )
        })}
      </FormGroup>
    </Container>
  )
};
export default Top;