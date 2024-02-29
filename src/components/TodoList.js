import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';


const TodoListBlock = styled.div`
    flex : 1;
    padding : 20px 32px;
    padding-bottom : 48px;
    overflow-y : auto;
`;

function TodoList () {
    return (
    <TodoListBlock>
        <TodoItem text = "강아지 산책하기" done = {true} />
        <TodoItem text = "케이크 만들기" done = {true} />
        <TodoItem text = "공부하기" done = {false} />
        <TodoItem text = "끝내주게 잠자기" done ={false} /> 
    </TodoListBlock>
    );
}

export default TodoList;