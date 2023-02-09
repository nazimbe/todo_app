import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";

const WideContainer = styled.div`
  background-color: white;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const NameContainer = styled.div`
  color: black;
  background-color: white;
  width: 15%;
  display: flex;
  align-items: center;
`;

const DescriptionContainer1 = styled.div`
  color: black;
  background-color: white;
  width: 60%;
  display: flex;
  align-items: center;
  font-style: italic;
`;

const DateContainer1 = styled.div`
  color: black;
  background-color: white;
  font-size: 14px;
  width: 20%;
  display: flex;
  align-items: center;
`;

const CompletedContainer = styled.input`
  color: black;
  height: 30px;
  width: 30px;
`;

const StatusContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: center;
`;

const StatusLabel = styled.label`
  font-size: 12px;
  align-items: center;
`;

const ActiveOrCompleted = styled.label`
  font-size: 16px;
`;

const DeleteButton = styled.button`
  background-color: white;
  color: black;

  border: none;
`;

const Ul = styled.ul``;

const Li = styled.ul``;

function ToDoList(props) {
  return (
    <>
      <Ul>
        {props.filteredToDos.map((todo) => (
          <Li key={todo.id}>
            <WideContainer>
              <CompletedContainer
                onChange={() => props.completeToDo(todo.id)}
                type="checkbox"
                checked={todo.status ? true : false}
              />
              {!todo.editName ? (
                <NameContainer onDoubleClick={() => props.editingName(todo.id)}>
                  {" "}
                  {todo.name}{" "}
                </NameContainer>
              ) : (
                <input
                  type="text"
                  defaultValue={todo.name}
                  autoFocus
                  onBlur={(event) => props.updateToDoName(event, todo.id)}
                />
              )}

              {!todo.editDesc ? (
                <DescriptionContainer1
                  onDoubleClick={() => props.editingToDo(todo.id)}
                >
                  {todo.desc}
                </DescriptionContainer1>
              ) : (
                <input
                  type="text"
                  defaultValue={todo.desc}
                  autoFocus
                  onBlur={(event) => props.updateTodo(event, todo.id)}
                />
              )}

              {!todo.editDate ? (
                <DateContainer1
                  onDoubleClick={() => props.editingDate(todo.id)}
                >
                  {todo.date}
                </DateContainer1>
              ) : (
                <input
                  type="date"
                  defaultValue={todo.date}
                  autoFocus
                  onBlur={(event) => props.updateToDoDate(event, todo.id)}
                />
              )}

              <StatusContainer>
                <StatusLabel>Status:</StatusLabel>
                <ActiveOrCompleted>
                  {todo.status ? "Completed" : "Active"}
                </ActiveOrCompleted>
              </StatusContainer>
              <DeleteButton onClick={() => props.deleteToDo(todo.id)}>
                <AiOutlineDelete size={22} />
              </DeleteButton>
            </WideContainer>
          </Li>
        ))}
      </Ul>
    </>
  );
}

export default ToDoList;
