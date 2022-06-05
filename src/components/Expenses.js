import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteExpense } from "../redux/action/action";

const Li = styled.li`
isplay:block;
position:relative;
padding:24px;
padding:20px;
margin-left:auto;
margin-right:auto;
width:300px;
border: solid 1px #ccc;
border-radius: 5px;
list-style:none
`

const Title= styled.span`
isplay:block;
position:relative:
padding:24px;
padding:10px;
margin-left:auto;
margin-right:auto;
width:300px;
border: solid 1px #ccc;
border-radius: 5px;
list-style:none
`
const Expenses = (props) => {

    const dispatch = useDispatch()
    const deleteHandler = (id) =>{
dispatch(deleteExpense(id))
    }

  const expenses = props.expenses.map((item) => (
    <Li key={item.id}>
      <Title>{item.title} </Title>
      <span>{item.price} com</span>
      <span>{item.date}  </span>
      <button onClick={() => deleteHandler(item.id)}>delete</button>
    </Li>
  ));

  return (
    <ul>
        {expenses}
    </ul>
  );
};

export default Expenses;
