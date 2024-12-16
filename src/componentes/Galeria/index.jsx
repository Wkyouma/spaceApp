import styled from 'styled-components'
import Tags from './tags/index'
import TituloEstilizado from './Titulo'
import Populares from './Populares'

const GaleriaContainer = styled.section`
display:flex;`

const Secao = styled.section`
flex-grow:1;`



const Galeria = () => {
    return (
        <>
            
            <Tags/>
            <GaleriaContainer>
                <Secao>
                <TituloEstilizado>Navegue pela nossa galeria</TituloEstilizado>
               
                </Secao>
                <Populares />
            </GaleriaContainer>
        </>)
}

export default Galeria