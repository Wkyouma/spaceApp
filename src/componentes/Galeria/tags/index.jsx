import styled from 'styled-components'
import tags from './tags.json'

const ListaEstilizada = styled.div`
display: flex;
flex-wrap: wrap;
margin: 16px 0;
width: 100%;
color: white;
`

const ButtonStyled = styled.button`
margin: 1%;
font-size: 24px;
color: #FFFFFF;
background: rgba(217, 217, 217, 0.3);
border-radius: 10px;
cursor: pointer;
transition: background-color 0.3s ease;
padding: 12px;
box-sizing: border-box;
border: 2px solid transparent;
&:hover {
  border-color: #C98CF1;
}
`

const Tags = ({setTag }) => {


  return (
    <ListaEstilizada>
      <h2>Busque por tags</h2>
      {tags.map(tag => <ButtonStyled  key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</ButtonStyled>)}
    </ListaEstilizada>)
}
export default Tags
