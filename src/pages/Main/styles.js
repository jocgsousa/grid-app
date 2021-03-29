// Importamos a lib utilizada para manipular o css dentro do JavaScript - https://styled-components.com/docs
import styled from 'styled-components';
// Importamos uma lib utilizada para manipular cores e stados do css - https://polished.js.org/docs/
import { darken } from 'polished';
// Importamos um icone da lib react-icons - https://react-icons.github.io/react-icons/
import { FaReact } from 'react-icons/fa';
// importamos as configurações do arquivo  animations.js
import {
    animations,
    media,
    animateState,
} from '../../styles/animations/animations';

import BaseAnimation from '../../styles/animations/baseAnimation';

export const Container = styled(BaseAnimation)`
    display: flex;

    align-items: center;
    justify-content: center;
    /* padding: 10px; */
    margin-left: 2%;
    margin-right: 2%;
    animation-name: ${(props) =>
        props.animation && animations[props.animation]};
`;

export const Form = styled.form`
    ${media.width}
    height: 350px;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 1px 1px 3px 1px #000;
    display: flex;
    position: absolute;
    flex-direction: column;
    margin-top: 500px;
    padding-top: 5%;
    transition: all 0.5s;
    input {
        margin-top: 25px;
        margin-left: 4%;
        margin-right: 4%;
    }
    h2 {
        text-align: center;
        color: #666;
        ${media.size}
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-left: 4%;
        margin-right: 4%;
    }
`;

export const NickInput = styled.input.attrs({
    placeholder: 'Nick',
    type: 'text',
})`
    border: 1px solid #ddd;
    height: 40px;
    border-radius: 4px;
    box-shadow: 1px 1px 3px 1px #ddd;
    padding-left: 8px;
`;

export const PasswordInput = styled.input.attrs({
    placeholder: 'Password',
    type: 'password',
})`
    border: 1px solid #ddd;
    height: 40px;
    border-radius: 4px;
    box-shadow: 1px 1px 3px 1px #ddd;
    padding-left: 8px;
`;

export const IconReact = styled(FaReact).attrs({
    size: '25',
})`
    ${animateState}
    animation-name: ${(props) =>
        props.animation && animations[props.animation]};
`;

export const ButtonLogin = styled.button.attrs({
    type: 'submit',
})`
    border: 1px solid #ddd;
    background-color: #7159c1;
    height: 40px;
    border-radius: 4px;
    box-shadow: 1px 1px 3px 1px #ddd;
    color: #ffffff;
    margin-top: 25px;
    margin-left: 4%;
    margin-right: 4%;
    &:hover {
        background: ${darken(0.05, '#7159c1')};
    }
    transition: all 0.2s;
`;

export const ButtonLoginText = styled.span``;
