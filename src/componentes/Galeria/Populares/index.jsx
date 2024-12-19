import styled from "styled-components"

import TituloEstilizado from "../titulo/index.jsx"
import Fotos from './fotosPop.json'
const Imagem = styled.img`
 max-width: 212px;
 border-radius: 20px;
 height: 100%;
 cursor: pointer;

`

const ContainerPop = styled.section`
    margin: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    
`


const embaralharFotos = (fotos) => {
    return fotos
        .map((foto) => ({ ...foto, ordem: Math.random() })) 
        .sort((a, b) => a.ordem - b.ordem) 
        .map(({ ordem, ...foto }) => foto); 
};

const Populares = (expandida = false, aoZoomSolicitado) => {
    // Fotos embaralhadas
    const fotosRandomizadas = embaralharFotos(Fotos);

    return (
        <>
            <ContainerPop>
                <TituloEstilizado $alinhamento="center">
                    Populares
                </TituloEstilizado>
            
                {fotosRandomizadas.map((foto) => (
                    <Imagem
                  
                        key={foto.id} 
                        src={foto.path} 
                        alt={foto.titulo} 
                        onClick={() => aoZoomSolicitado(foto)}
                    />
                ))}
            </ContainerPop>
            
        </>
    );
};

export default Populares;
