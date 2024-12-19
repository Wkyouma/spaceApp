import styled from "styled-components"
import BotaoIcone from "../../botaoIcone"

const Figure = styled.figure`
   width: ${props => props.$expandida ? '90%' : '460px'};
   max-width: 100%;
   
   margin: 0;
   display: flex;
   flex-direction: column;
   background-color: #001634;
   border-radius: 20px;
   
   & > img {
       width: 100%;
       height: ${props => props.$expandida ? 'auto' : '256px'};
       max-height: ${props => props.$expandida ? '600px' : 'none'};
       object-fit: ${props => props.$expandida ? 'contain' : 'cover'};
       border-radius: 20px 20px 0 0;
   }
   
   figcaption {
       background-color: #001634;
       
       border-radius: 0px 0px 20px 20px;
       color: white;
       box-sizing: border-box;
       padding: 12px;
       
       h3 {
           font-family: 'GandhiSansBold';
           margin: 0;
           font-size: ${props => props.$expandida ? '24px' : '16px'};
       }
       h4 {
           flex-grow: 1;
           margin: 0;
           font-size: ${props => props.$expandida ? '20px' : '16px'};
       }
   }
   `
const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {
    const iconeFavorito = foto.favorita ? './Icones/favorito-ativo.png' : './Icones/favorito.png'
    return (<Figure $expandida={expandida} id={`foto-${foto.id}`}>
        <img src={foto.path} alt={foto.alt} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Rodape>
                <h4>{foto.fonte}</h4>
                <BotaoIcone onClick={()=>aoAlternarFavorito(foto)}>
                    <img src={iconeFavorito} alt="Icone de favorito" />
                </BotaoIcone>
                {!expandida && <BotaoIcone aria-hidden={expandida}  onClick = { () => aoZoomSolicitado(foto)} >
                    <img src="/Icones/expandir.png" alt="Icone de expandir" />
                </BotaoIcone>}
            </Rodape>
        </figcaption>
    </Figure>)
}

export default Imagem