import { styled } from "styled-components"
import CampoTexto from "../campoTexto/index.jsx"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Cabecalho = ({filtro, setFiltro}) => {
    return (<HeaderEstilizado>
        <img src="/Imagens/logo.png" alt="" />
        <CampoTexto setFiltro={setFiltro} />
    </HeaderEstilizado>)
}

export default Cabecalho