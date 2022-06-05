import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteExpense } from "../redux/action/action";

const Ul = styled.ul`
`

const Li = styled.li`
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  border: solid 1px #ccc;
  border-radius: 5px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background: #eee;
  font-size: 18px;
  color: #023020;

`;

const Title = styled.li`
  list-style-type: space-counter;
  padding: 15px;
`;

const Date = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Btn = styled.button`
width: 60px;
height: 30px;
&:hover,
&:focus{
  background-color: red;
  border: 1px solid red;
  color: white;
}
`
const Expenses = (props) => {
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteExpense(id));
  };

  const expenses = props.expenses.map((item) => (
    <Li key={item.id}>
      <Title>{item.title}</Title>
      {item.price + " com "}
      <Date> {item.date}</Date>
      <Btn onClick={() => deleteHandler(item.id)}>delete</Btn>
    </Li>
  ));

  return <Ul >{expenses}</Ul>;
};

export default Expenses;
