import { styled } from "styled-components"
import { useState } from "react"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import bannerBackground from './assets/banner.png'
import Galeria from "./componentes/Galeria"
import fotos from './componentes/fotos.json'
import Modal from "./componentes/Modal"



const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
width: 1440px;
margin: 0 auto;
max-width: 100%;
`

const MainContainer = styled.main`
display:flex;
gap: 24px;
`

const ConteudoGaleria = styled.div`
display:flex;
flex-direction:column;
flex-grow:1;`

const App = () => {
  const [fotoSelecionada, setfotoSelecionada]=useState(null)
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const aoAlternar = (foto) =>{
    if(foto.id === fotoSelecionada?.id){
      setfotoSelecionada({
        ...fotoSelecionada,
        favorita:!fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotosDaGaleria=>{
      return{
        ...fotosDaGaleria,
        favorita:fotosDaGaleria.id === foto.id ? !foto.favorita : fotosDaGaleria.favorita
      }
    }))
  }


  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria aoFotoSelecionada={foto=> setfotoSelecionada(foto)} aoAlternarFavorito={aoAlternar} fotos={fotosDaGaleria} />

          </ConteudoGaleria>

        </MainContainer>
      </AppContainer>
      <Modal foto={fotoSelecionada}  aoFechar={() => setfotoSelecionada(null)} aoAlternarFavorito={aoAlternar}></Modal>

    </FundoGradiente>
  )
}

export default App
