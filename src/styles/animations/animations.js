import styled, { keyframes, css } from 'styled-components';

// Aqui criamos nosso componente base
export const BaseAnimation = styled.div`
    animation-duration: ${(props) => props.duration};
    animation-timing-function: ${(props) => props.timingFunction};
    animation-delay: ${(props) => props.delay};
    animation-iteration-count: ${(props) => props.iterationCount};
    animation-direction: ${(props) => props.direction};
    animation-fill-mode: ${(props) => props.fillMode};
    animation-play-state: ${(props) => props.playState};
    display: ${(props) => props.display};
`;
// Atribuímos alguns valores por padrão
BaseAnimation.defaultProps = {
    duration: '1s',
    timingFunction: 'ease',
    delay: '0s',
    iterationCount: '1',
    direction: 'normal',
    fillMode: 'both',
    playState: 'running',
    display: 'block',
};
// Aqui vai algumas das animações básicas, podendo ser criadas novas pelo dev
export const animations = {
    fadeInLeft: () => keyframes`
        from {opacity: 0; margin-left: -30px; margin-right: 30px;}
        to {opacity: 1; margin-left: 0px; margin-right: 0px;}
    `,
    rotate: () => keyframes`
        from {transform: rotate(0deg)}
        to {transform: rotate(360deg)}
        
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
    // Adicone aqui novas animações! =)

    pular: () => keyframes`
        0%{margin-top: -5px; margin-bottom: 5px;}
        25%{margin-top: 5px; margin-bottom: -5px;}
        50%{margin-top: -5px; margin-bottom: 5px; }
        75%{margin-top: 5px; margin-bottom: -5px;}
        100%{margin-top: -5px; margin-bottom: 5px;}
    `,
};

// Configuração para manipular a reposnsividade do conteúdo
export const media = {
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

    grid: () => `
        @media(min-width: 600px){
            flex-direction: row;
        }
        @media(max-width: 700px){
            flex-direction: column;
        }
    `,
};

// Exporta configuração para aplicar animação em qualquer componente que receber
export const animateState = css`
    animation-duration: ${(props) => props.duration};
    animation-timing-function: ${(props) => props.timingFunction};
    animation-delay: ${(props) => props.delay};
    animation-iteration-count: ${(props) => props.iterationCount};
    animation-direction: ${(props) => props.direction};
    animation-fill-mode: ${(props) => props.fillMode};
    animation-play-state: ${(props) => props.playState};
    display: ${(props) => props.display};
`;

animateState.defaultProps = {
    duration: '1s',
    timingFunction: 'ease',
    delay: '0s',
    iterationCount: '1',
    direction: 'normal',
    fillMode: 'both',
    playState: 'running',
    display: 'block',
};
