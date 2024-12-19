import { styled } from "styled-components"
import ItemNavegacao from "./itemNavegacao/index.jsx"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

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
                        iconeInativo="/Icones/mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="/Icones/mais-curtidas-ativo.png" 
                        iconeInativo="/Icones/mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="/Icones/novas-ativo.png" 
                        iconeInativo="/Icones/novas-inativo.png"
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="/Icones/surpreenda-me-ativo.png" 
                        iconeInativo="/Icones/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral