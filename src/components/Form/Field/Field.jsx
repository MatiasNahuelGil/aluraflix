import styled from "styled-components";

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  flex-direction: column;
  label{

    margin-bottom: 0.3em;
  }
  input{
    padding: 0.8em;
    width: 100%;
    background: none;
    border-radius: 0.7em;
    border: 1px solid var(--border-gray);
    color: var(--white);
  }

  @media (max-width: 650px){
    label{
      margin-top: 10px;
    }
    input{
      width: 100%;
    }
  }
`;

export default function Field({labelName, placeholder,value, setValue}) {

  const handleChange = (event) =>{
    setValue(event.target.value)
}

  return (
    <>
      <FieldContainer>
        <label>{labelName}</label>
        <input type="text" placeholder={placeholder} value={value} onChange={handleChange} required/>
      </FieldContainer>
    </>
  );
}
