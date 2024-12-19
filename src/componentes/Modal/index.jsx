import styled from 'styled-components'
import Figure from '../Galeria/Figure'
import BotaoIcone from '../BotaoIcone'

const Divs = styled.div`
background-color: rgba(0,0,0,0.7);
position:fixed;
top:0;
right: 0;
bottom: 0;
left: 0;

`

const Dialog = styled.dialog`
border: none;
background: transparent;
  width: 956px;
  position: absolute;
  top: 294px;
  max-height:740px;
  form{
    button{
        position: absolute;
        top: 30px;
        right: 130px;

        
    }
  }
  
  
  `



const Modal = ({ foto, aoFechar, aoAlternarFavorito }) => {
    return (

        <>
            {foto && <><Divs /> <Dialog open={!!foto} onClose={aoFechar}>
                <Figure foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito} ></Figure>
                <form method='dialog'>
                    <BotaoIcone formMethod='dialog'><img src='/Icones/fechar.png' alt="Icone de fechar"></img></BotaoIcone>
                </form>
            </Dialog>
            </>}
        </>
    )
}
export default Modal