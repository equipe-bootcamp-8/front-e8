import * as Styled from "./styles";

interface ButtonProps {
    text: string
}


const Button = ({text}: ButtonProps) => {
    return (
        <Styled.Button>{text}</Styled.Button>
    )
}

export default Button