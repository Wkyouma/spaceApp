import styled from "styled-components";
import ItemNavegacao from "./Item";
const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;



const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao
                        iconeAtivo="/Icones/home-ativo.png" 
                        iconeInativo="/Icones/home-inativo.png"
                        ativo={true}
                    >
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/Icones/mais-vistas-ativo.png" 
                        iconeInativo="Icones/mais-vistas-inativo.png"
                        ativo={false}
                    >
                        Mais vistos
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral;
