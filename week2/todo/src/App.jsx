import React, { useState } from 'react';
import styled from "styled-components";
import TodoInput from './components/TodoInput';
import ListLeft from './components/list/list-left';
import ListRight from './components/list/list-right';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TodoTitle = styled.p`
  font-size: 1.6vw;
  font-weight: 700;
  color: #000000;
  margin-top: 4vw;
`

const Bar = styled.div`
  width: 80%;
  height: 0.1vw;
  background-color: #B5D2ED;
  border: none;
  margin-top: 4vw;
`

const List = styled.div`
  margin-top: 1vw;
  width: 50%;
  display: flex;
`

const SubTitle = styled.p`
  font-size: 1vw;
  font-weight: 700;
  color: #000000;
  text-decoration: underline;
  text-decoration-color: #B5D2ED;
  text-underline-offset: 0.4vw;
  margin-bottom: 2vw;
`

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);

  // 할 일 추가 -> id 체크해서 중복된 id 만들어지지 않도록
  const addTodo = (content) => {
    let newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

    while (todos.some(todo => todo.id === newId)) {
        newId++;
    }

    const newTodo = {
        id: newId,
        content,
        isDone: false
    };
    setTodos([...todos, newTodo]);
}

  // 완료된 항목 이동 -> true로 변화
  const moveItemToRight = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isDone: true } : todo
    );
    setTodos(updatedTodos);
  };

  // 삭제 -> 전달받은 id와 같지 않은 것만 남기기
  const removeItem = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <AppContainer>
      <TodoTitle>Study Plan</TodoTitle>
      <Bar/>

      <TodoInput addTodo={addTodo}/>

      <List>
        <div className="left" style={{width: "50%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SubTitle>해야 할 일</SubTitle>
          <ListLeft data={todos.filter(todo => !todo.isDone)} moveItemToRight={moveItemToRight}/>
        </div>
        <div className="right" style={{width: "50%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SubTitle>해낸 일</SubTitle>
          <ListRight data={todos.filter(todo => todo.isDone)} removeItem={removeItem}/>
        </div>
      </List>

    </AppContainer>
  )
}

export default App;
