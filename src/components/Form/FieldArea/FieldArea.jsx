import styled from "styled-components";
const FieldAreaContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    textarea{
        resize: none;
        width: 100%;
        height: 150px;
        background: none;
        border: 1px solid var(--border-gray);
        padding: 0.4em;
        border-radius: 10px;
        color: var(--white);
    }
  `
export default function FieldArea({labelName, placeholder,value, setValue}) {

  const handleChange = (event) =>{
    setValue(event.target.value)
  }

  return (
    <>
      <FieldAreaContainer>
        <label>{labelName}</label>
        <textarea placeholder={placeholder} value={value} onChange={handleChange}></textarea>
      </FieldAreaContainer>
    </>
  );
}
