import styled from 'styled-components'
import Figure from '../Galeria/Figure'

const Divs = styled.div`
background-color: rgba(0,0,0,0.7);
position:fixed;
top:0;
right: 0;
bottom: 0;
left: 0;
`

const Dialog = styled.dialog`
  position: absolute;
  top: 294px;`


const Modal = ({ foto }) => {
    return (

        <>
            {foto && <><Divs/> <Dialog open={!!foto}>
                <Figure foto = {foto} expandida={true} ></Figure>
                <form>
                    <button>ok</button>
                </form>
            </Dialog>
            </>}
        </>
    )
}
export default Modal