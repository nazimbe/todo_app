import React, { useEffect } from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;

const DatesContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 10px;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 50%;
  padding-top: 30px;
  padding-bottom: 30px;

  gap: 10px;
`;

const Button = styled.button`
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

const DateLabel = styled.label`
  text-align: center;
`;

const ToDoFilters = (props) => {
  return (
    <>
      <FiltersContainer>
        <ButtonContainer>
          <Button value={"All"} onClick={props.onFilter}>
            All
          </Button>
          <Button value={"Active"} onClick={props.onFilter}>
            Active
          </Button>
          <Button value={"Completed"} onClick={props.onFilter}>
            Completed
          </Button>
        </ButtonContainer>
        <DatesContainer>
          <DateContainer>
            <DateLabel>Start date:</DateLabel>
            <input
              type="date"
              value={props.startDate}
              onChange={props.startingDate}
            />
          </DateContainer>
          <DateContainer>
            <DateLabel>End date:</DateLabel>
            <input
              type="date"
              value={props.endDate}
              onChange={props.endingDate}
            />
          </DateContainer>
        </DatesContainer>
      </FiltersContainer>
    </>
  );
};

export default ToDoFilters;
