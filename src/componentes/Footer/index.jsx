import styled from "styled-components"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const FooterStyled = styled.footer`
    background-color: #04244F;
    padding: 24px;
    position: relative;
    bottom: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
`

const IconesContainer = styled.div`
    display: flex;
    gap: 24px;
    
    a {
        color: #FFFFFF;
        text-decoration: none;
        font-size: 24px;
        
        &:hover {
            color: #b4b4b4;
            transition: 0.3s;
        }
    }
`

const TextoContainer = styled.div`
    
    
    h2 {
        margin: 0;
    }
`

const Footer = () => {
    return (
        <FooterStyled>
            <IconesContainer>
                <a href="https://github.com/Wkyouma" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                </a>
                <a href="https://www.instagram.com/_t3rpl4k_/" target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram />
                </a>
                <a href="https://www.linkedin.com/in/igor-terplak/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin />
                </a>
            </IconesContainer>
       
                <h2>Desenvolvido por Igor Terplak</h2>
          
           
        </FooterStyled>
    )
}

export default Footer