import {styled} from "styled-components"
import EstilosGlobais from "./componentes/estilosGlobais"
import Cabecalho from "./componentes/cabecalho/index"

import BarraLateral from "./componentes/BarraLateral"

const FundoGradient = styled.div `
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width:100%;
    min-height:100vh;
    `
    
  

function App() {


  return (

     <FundoGradient>
      <EstilosGlobais></EstilosGlobais>
      <Cabecalho/>
      <BarraLateral></BarraLateral>
     </FundoGradient>
  
  )
}

export default App
