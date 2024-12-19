import styled from 'styled-components'
import Tags from './tags/index'
import TituloEstilizado from './Titulo'
import Populares from './Populares'
import Figure from './Figure'

const GaleriaContainer = styled.section`
display:flex;`

const Secao = styled.section`
flex-grow:1;`


const ImagemContainer = styled.section`
display: flex;
justify-content: space-between;
gap: 24px;
flex-wrap: wrap;
`



const Galeria = ({ fotos = [], setTag ,aoFotoSelecionada, aoAlternarFavorito }) => {
    return (
        <>

            <Tags setTag={setTag}/>
            <GaleriaContainer>
                <Secao>
                    <TituloEstilizado>Navegue pela nossa galeria</TituloEstilizado>
                    <ImagemContainer>
                        {fotos.map(foto => <Figure aoZoomSolicitado={aoFotoSelecionada} aoAlternarFavorito={aoAlternarFavorito} key={foto.id}
                            foto={foto} ></Figure>)}
                    </ImagemContainer>
                </Secao>
                <Populares />
            </GaleriaContainer>
        </>)
}

export default Galeria
