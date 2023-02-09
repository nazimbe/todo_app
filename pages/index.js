import React, { useState, useEffect } from "react";

import styled from "styled-components";
import ToDoFilters from "./components/ToDoFilters";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const ToDoContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: #f3f4f6;
  padding: 20px 40px;
`;

const ToDoApp = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  color: #374151;
  border-radius: 0.25rem;
  background: white;
  max-width: 36rem;
  margin: auto;
`;

const ToDoAppLabel = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid lightgrey;
  gap: 10px;
`;

const SortByName = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 14px;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  :active {
    border: 1px solid lightgray;
  }
  :hover {
    border: 1px solid lightgray;
  }
`;

const NoToDos = styled.img`
  width: 100%;
  height: 400px;
  background-position: center;
`;

export default function Home() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "John",
      desc: "I have to study for 3 hours",
      date: "2023-02-07",
      status: Boolean(false),
      editName: Boolean(false),
      editDesc: Boolean(false),
      editDate: Boolean(false),
    },
    {
      id: 2,
      name: "Max",
      desc: "I have to make breakfast",
      date: "2023-02-07",
      status: Boolean(false),
      editName: Boolean(false),
      editDesc: Boolean(false),
      editDate: Boolean(false),
    },
    {
      id: 3,
      name: "Harari",
      desc: "I should read the book",
      date: "2023-02-07",
      status: Boolean(false),
      editName: Boolean(false),
      editDesc: Boolean(false),
      editDate: Boolean(false),
    },
  ]);

  const [idToDo, setIdToDo] = useState(4);
  const [filterStatus, setFilterStatus] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [order, setOrder] = useState("ascending");

  function createToDoEvent(todo1, todo2, todo3) {
    setTodos([
      ...todos,
      {
        id: idToDo,
        name: todo1,
        desc: todo2,
        date: todo3,
        status: false,
      },
    ]);

    setIdToDo(() => idToDo + 1);
  }

  function deleteToDo(id) {
    setTodos([...todos].filter((todo) => todo.id !== id));
  }

  function completeToDo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function editingToDo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.editDesc = !todo.editDesc;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function editingName(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.editName = !todo.editName;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function editingDate(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.editDate = !todo.editDate;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function updateTodo(event, id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (event.target.value.trim().length === 0) {
          todo.editDesc = false;
          return;
        }
        todo.desc = event.target.value;
        todo.editDesc = false;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function updateToDoName(event, id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (event.target.value.trim().length === 0) {
          todo.editName = false;
          return;
        }
        todo.name = event.target.value;
        todo.editName = false;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function updateToDoDate(event, id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // if (event.target.value.trim().length === 0) {
        //   todo.editName = false;
        //   return;
        // }
        todo.date = event.target.value;
        todo.editDate = false;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  let filteredToDos = todos
    .filter((todo) => {
      if (filterStatus === "Active") {
        return todo.status == false;
      } else if (filterStatus === "Completed") {
        return todo.status === true;
      } else {
        return todo;
      }
    })
    .filter((todo) => {
      if (!startDate && !endDate) {
        return todo;
      } else {
        return todo.date >= startDate && todo.date <= endDate;
      }
    });

  function onFilter(event) {
    setFilterStatus(event.target.value);
  }

  function startingDate(event) {
    setStartDate(event.target.value);
  }

  function endingDate(event) {
    setEndDate(event.target.value);
  }

  function sorting(column) {
    if (order === "ascending") {
      const sorted = [...todos].sort((a, b) =>
        a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
      );
      setTodos(sorted);
      setOrder("descending");
    }
    if (order === "descending") {
      const sorted = [...todos].sort((a, b) =>
        a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1
      );
      setTodos(sorted);
      setOrder("ascending");
    }
  }

  return (
    <>
      <ToDoContainer>
        <ToDoApp>
          <ToDoAppLabel>Todo App</ToDoAppLabel>
          <ToDoForm createToDoEvent={createToDoEvent} />

          <ToDoFilters
            onFilter={onFilter}
            startingDate={startingDate}
            endingDate={endingDate}
            startDate={startDate}
            endDate={endDate}
          />

          <ButtonContainer>
            <SortByName onClick={() => sorting("name")}>
              Sort By Name
            </SortByName>

            <SortByName onClick={() => sorting("desc")}>
              Sort By Description
            </SortByName>

            <SortByName onClick={() => sorting("date")}>
              Sort By Date
            </SortByName>
          </ButtonContainer>

          {todos.length > 0 ? (
            <ToDoList
              filteredToDos={filteredToDos}
              updateToDoDate={updateToDoDate}
              updateToDoName={updateToDoName}
              updateTodo={updateTodo}
              editingToDo={editingToDo}
              editingName={editingName}
              editingDate={editingDate}
              completeToDo={completeToDo}
              deleteToDo={deleteToDo}
            />
          ) : (
            <NoToDos src="NOTODO.png" />
          )}
        </ToDoApp>
      </ToDoContainer>
    </>
  );
}
