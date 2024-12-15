import styled from "styled-components";
import SearchIcon from "./search.png";

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const InputEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
`
const Search = styled.img`
    position:absolute;
    top: 12px;
    right: 25px;

`
const Input = (props) => {
  return (
    <ContainerEstilizado>
      <InputEstilizado type="text" placeholder="o que você procura" {...props} />
      <Search src={SearchIcon} alt=''></Search>
    </ContainerEstilizado>
  );
};

export default Input;
