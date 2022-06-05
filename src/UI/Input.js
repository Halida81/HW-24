import styled from "styled-components";

const InputField = styled.input`
display:block;
position:relative;
padding:24px;
margin-left:auto;
margin-right:auto;
width:300px;
border: solid 1px #ccc;
border-radius: 5px;

`;

const Label = styled.label`
color:#023020;
display:flex;
justify-content:center;
margin-top:10px;
`

function Input({ value, label, name, placeholder, type, onChange }) {
  return (
    <div>
      {label && <Label  htmlFor="input">{label}</Label>}<br/>
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
