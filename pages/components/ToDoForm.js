import React, { useState } from "react";

import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  align-items: center;
  height: auto;
`;

const UpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  margin-top: 30px;
`;

const NameInput = styled.input`
  width: 20%;
  border: none;
  padding: 6px;
  font-size: 16px;
  height: 100%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  outline: none;
`;

const DescriptionInput = styled.input`
  width: 50%;
  border: none;
  padding: 14px;
  font-size: 16px;
  height: 100%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  outline: none;
`;

const DateInput = styled.input`
  width: 30%;
  border: none;
  padding: 14px;
  font-size: 16px;
  height: 100%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  outline: none;
`;

const Button = styled.button`
  background: white;
  color: black;
  width: 30%;
  border: none;
  padding: 14px;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  :active {
    border: 1px solid lightgray;
  }
  :hover {
    border: 1px solid lightgray;
  }
`;

function ToDoForm(props) {
  const [todoInput, setTodoInput] = useState("");
  const [name, updateName] = useState("");
  const [formDate, updateDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  function handleNameInput(event) {
    updateName(event.target.value);
  }

  function handleToDoInput(event) {
    setTodoInput(event.target.value);
  }

  function dateInput(event) {
    updateDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (todoInput.trim().length === 0 || name.trim().length === 0) {
      return;
    }
    props.createToDoEvent(name, todoInput, formDate);
    setTodoInput("");
    updateName("");
  }

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <FormContainer>
          <UpperContainer>
            <NameInput
              placeholder="Name"
              onChange={handleNameInput}
              value={name}
            ></NameInput>
            <DescriptionInput
              placeholder="Enter a task"
              onChange={handleToDoInput}
              value={todoInput}
            ></DescriptionInput>
            <DateInput
              type="date"
              autoComplete="off"
              value={formDate}
              onChange={dateInput}
            ></DateInput>
          </UpperContainer>
          <Button type="submit">Add a task</Button>
        </FormContainer>
      </form>
    </>
  );
}

export default ToDoForm;
