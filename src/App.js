import "./App.css";
import { addExpense } from "./redux/action/action";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Input from "./UI/Input";
import Expenses from "./components/Expenses";
import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
display:block;
position:relative; 
padding:24px;
padding:20px;
margin-left:auto;
margin-right:auto;
width:400px;
border: solid 1px #ccc;
border-radius: 25px;
`;

export const Button = styled.button`
display:block;
position:relative;
padding:24px;
margin-left:auto;
margin-right:auto;
margin-top: 20px;
width:100px;
border: solid 1px #ccc;
border-radius: 5px;
&:hover,
&:active{
  background-color: darkgreen;
  border-color:darkgreen;
  color:white
}
`
function App() {
  // const [isValid, setIsValid] = useState(null);
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense);
  const [data, setDate] = useState({
    title: "",
    price: "",
    date: "",
  });

  const inputHandler = (e) => {
    const value = e.target.value;
    setDate({
      ...data,
      [e.target.name]: value,
    });
  };

  let isValid = data.title.trim() !== '' && data.price.trim() !== '' && data.date.trim()!== ''
  const submitHandler = (e) => {
    e.preventDefault();
    

    dispatch(addExpense(data));

    setDate({
      title: "",
      price: "",
      date: "",
    });
  };

  return (
    <section>
      <Title>Redux Practice</Title>
      <Form onSubmit={submitHandler}>
        <div className="control">
          <Input
            type="text"
            value={data.title}
            name="title"
            placeholder="что купили..."
            onChange={inputHandler}
            label="Title"
          />
        </div>
        <div className="control">
          <Input
            value={data.price}
            type="number"
            name="price"
            onChange={inputHandler}
            label="Price"
            placeholder="сколько стоит..."
          />
        </div>
        <div className="control">
          <Input
            value={data.date}
            type="date"
            name="date"
            onChange={inputHandler}
            label="Date"
          />
        </div>
  <Button type='submit' disabled={!isValid}> Add</Button>
        {console.log(isValid)}
      </Form>
      <ul>
        <Expenses expenses={expenses} />
      </ul>
    </section>
  );
}

export default App;
