import { styled } from "styled-components"
import { useState, useEffect } from "react"
import EstilosGlobais from "./componentes/estilosGlobais/index.jsx"
import Cabecalho from "./componentes/cabecalho/index.jsx"
import BarraLateral from "./componentes/BarraLateral/index.jsx"
import Banner from "./componentes/banner/index.jsx"
import bannerBackground from './assets/banner.png'
import Galeria from "./componentes/galeria/index.jsx"
import fotos from './componentes/fotos.json'
import Modal from "./componentes/modal/index.jsx"
import Footer from './componentes/footer/index.jsx'



const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
width: 1440px;
margin: 0 auto;
max-width: 100%;
margin-bottom: 2%;
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
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase().trim());
      return filtroPorTag && filtroPorTitulo;
    });
    setFotosDaGaleria(fotosFiltradas);
  }, [filtro, tag]);

  
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
        <Cabecalho filtro={filtro} setFiltro={setFiltro}/>
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria aoFotoSelecionada={foto=> setfotoSelecionada(foto)} aoAlternarFavorito={aoAlternar} fotos={fotosDaGaleria} setTag={setTag} />

          </ConteudoGaleria>

        </MainContainer>
      </AppContainer>
      <Footer/>
      <Modal foto={fotoSelecionada}  aoFechar={() => setfotoSelecionada(null)} aoAlternarFavorito={aoAlternar}></Modal>
    
    </FundoGradiente>
  )
}

export default App
