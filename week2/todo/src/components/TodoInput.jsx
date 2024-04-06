import React, {useState} from 'react';
import styled from "styled-components";

const InputBox = styled.input`
    width: 50%;
    height: 3vw;
    margin-top: 1vw;
    border: 0.1vw solid #000000;
    background-color: white;
    font-style: italic;
    font-size: 1.2vw;
    color: #A19D9D;
    padding: 0.5vw;
    box-sizing: border-box;
    outline: none;
`

const TodoInput = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleAdd = (e) => {
        if (e.key === 'Enter' && text.trim() !== '') {
            addTodo(text.trim());
            setText('');
        }
    }

    return (
        <InputBox 
            type="text" 
            placeholder="UMC 스터디 계획을 작성해보세요!"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleAdd}
        />
    )
}

export default TodoInput;