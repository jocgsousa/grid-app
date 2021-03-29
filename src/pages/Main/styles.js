import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';
import { FaReact } from 'react-icons/fa';
import BaseAnimation from '../../styles/animations/baseAnimation';

const media = {
    width: () => `
        @media(min-width: 300px){
            width: 90%;
        }
        @media(min-width: 500px){
            width: 60%;
        }
        @media(min-width: 600px){
            width: 35%;
        }
        @media(max-width: 280px){
            width: 90%;
        }
        @media(max-width: 200px){
            width: 90%;
            opacity: 0;
        }
    `,
    size: () => `
        @media(max-width: 300px){
            font-size: 15px;
        }
    `,
};

const animations = {
    fadeInLeft: () => keyframes`
        from {opacity: 0; margin-left: -30px; margin-right: 30px;}
        to {opacity: 1; margin-left: 0px; margin-right: 0px;}
    `,
    rotate: () => keyframes`
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    `,
    shake: () => keyframes`
        0% { margin-right: 0px; margin-left: 0px;}
        15% {margin-right: -5px; margin-left: 5px;}
        25% {margin-right: 5px; margin-left: -5px;}
        35% {margin-right: -5px; margin-left: 5px;}

        45% {margin-right: -5px; margin-left: 5px;}
        55% {margin-right: 5px; margin-left: -5px;}
        65% {margin-right: -5px; margin-left: 5px;}

        75% {margin-right: -5px; margin-left: 5px;}
        85% {margin-right: 5px; margin-left: -5px;}
        95% {margin-right: -5px; margin-left: 5px;}

        100% {margin-right: 0px; margin-left: 0px}

    
    `,
    fadeOutRight: () => keyframes`
        from {opacity: 1; margin-left: 0px; margin-right: 0px;}
        to {opacity: 0; margin-left: 30px; margin-right: -30px; display: none}
    `,

    none: () => keyframes`
         from {opacity: 1; margin-left: 0px; margin-right: 0px;}
        to {opacity: 1; margin-left: 0px; margin-right: 0px;}
    `,
};

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
    margin-left: 4px;
    animation-duration: ${(props) => props.duration};
    animation-timing-function: ${(props) => props.timingFunction};
    animation-delay: ${(props) => props.delay};
    animation-iteration-count: ${(props) => props.iterationCount};
    animation-direction: ${(props) => props.direction};
    animation-fill-mode: ${(props) => props.fillMode};
    animation-play-state: ${(props) => props.playState};
    display: ${(props) => props.display};
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
