import styled from "styled-components";

const InputField = styled.input`
display:block;
position:relative:
padding:24px;
padding:20px;
margin-left:auto;
margin-right:auto;
width:300px;
border: solid 1px #ccc;
border-radius: 5px;

`;

function Input({ value, label, name, placeholder, type, onChange }) {
  return (
    <div>
      {label && <label htmlFor="input">{label}</label>}<br/>
      <InputField
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      //  disabled={disabled}
      />
    </div>
  );
}
export default Input;
