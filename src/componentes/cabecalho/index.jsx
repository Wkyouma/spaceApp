import {styled} from "styled-components";
import Input from '../CampoTexto/index';

const HeaderEstilizado = styled.header`
padding:60px;
display:flex;
justify-content:space-between; 
img{
      max-width: 212px;
    }`
const cabecalho = () => {
    return(
    <HeaderEstilizado>
        <img src="./Imagens/logo.png" alt=" "></img>
        <Input/>
    </HeaderEstilizado>)
}


export default cabecalho;