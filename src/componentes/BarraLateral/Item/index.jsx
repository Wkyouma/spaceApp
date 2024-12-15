import styled from "styled-components"

const ItemEstilizado = styled.li`
` 
const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo = false}) => {
    return <ItemEstilizado>
    <img src={ativo === true ? iconeAtivo : iconeInativo}alt=" "></img>
    {children}
    </ItemEstilizado>

}
export default ItemNavegacao