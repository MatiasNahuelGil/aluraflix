import styled from "styled-components";

const OptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
 
  select{
    padding: 0.8em;
    width: 100%;
    background: none;
    border-radius: 0.7em;
    color: var(--border-gray);
    border: 1px solid var(--border-gray);
    cursor: pointer;
    option{
        border: 1px solid white;
        &:hover{
            background-color: var(--blue);
        }
    }
  }

`

export default function OptionList({labelName,teams,value, setValue}) {
 
   const handleChange = (e) => {
      setValue(e.target.value)
   }

  return (
    <>
    <OptionContainer>
        <label>{labelName}</label>
        <select value={value} onChange={handleChange} required>
             <option value="" disabled defaultValue="" hidden>Seleccione una categoría</option>
             {teams.map((team) => {
  return (
    <option key={team.id} value={team.title}>
      {team.title}
    </option>
  );
})}
        </select>
    </OptionContainer>
  </>
  )
  
}
