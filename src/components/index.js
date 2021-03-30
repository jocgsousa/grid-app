import styled from 'styled-components';
import { darken } from 'polished';
// Para novos components 'div' utilize o BaseAnimation
// Para componentes diferentes de 'div' use o animateState
import {
    // animateState,
    animations,
    BaseAnimation,
    media,
} from '../styles/animations/animations';

export const Container = styled(BaseAnimation)`
    animation-name: ${(props) =>
        props.animation && animations[props.animation]};
`;

export const Grid = styled.div``;

export const Row = styled.div`
    display: flex;
    padding: ${(props) => props.padding && props.padding};
    ${media.grid}
`;

export const Col = styled.div`
    flex: ${(props) => props.size && props.size};
    min-height: 40px;
    display: flex;
    width: ${(props) => props.width && props.width};
    justify-content: ${(props) =>
        props.justifyContent ? props.justifyContent : 'center'};
    align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
    flex-direction: ${(props) =>
        props.flexDirection ? props.flexDirection : 'column'};
    margin: ${(props) => props.margin && props.margin};
    margin-bottom: ${(props) => props.bottom && props.bottom};
    background-color: ${(props) =>
        props.background ? props.background : '#2d3b52'};
    height: ${(props) => props.height && props.height};
    border: ${(props) => props.border && props.border};
    border-left: ${(props) => props.borderLeft && props.borderLeft};
    border-right: ${(props) => props.borderRight && props.borderRight};
    border-top: ${(props) => props.borderTop && props.borderTop};
    border-bottom: ${(props) => props.borderBottom && props.borderBottom};
    padding: 5px;
    border-radius: ${(props) => props.radius && props.radius};
    transition: all 0.5s;
`;

export const NavBar = styled.nav`
    display: flex;
    ${media.grid}
    align-items: center;
    padding: 20px;
    h1 {
        color: #ffffff;
        font-size: 25px;
    }
`;

export const ContainerLogo = styled.div`
    float: left;
`;

export const Button = styled.button.attrs({
    type: 'button',
})`
    background-color: ${(props) =>
        props.background ? props.background : '#7159c1'};
    width: ${(props) => (props.width ? props.width : '80px')};
    height: ${(props) => (props.height ? props.height : '40px')};
    padding: ${(props) => (props.padding ? props.padding : '5px')};
    margin: ${(props) => (props.margin ? props.margin : '10px')};
    /* default */
    border: ${(props) => (props.border ? props.border : 'none')};
    border-radius: ${(props) => (props.radius ? props.radius : '4px')};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.color ? props.color : 'white')};
    transition: all 0.5s;
    &:hover {
        background: ${(props) =>
            props.background
                ? darken(0.05, props.background)
                : darken(0.5, '#7159c1')};
    }
`;

export const Box = styled(BaseAnimation)`
    background-color: ${(props) =>
        props.background ? props.background : '#7159c1'};
    width: ${(props) => (props.width ? props.width : '200px')};
    height: ${(props) => (props.height ? props.height : '40px')};
    padding: ${(props) => (props.padding ? props.padding : '5px')};
    margin: ${(props) => (props.margin ? props.margin : '10px')};
    /* default */
    border: ${(props) => (props.border ? props.border : 'none')};
    border-radius: ${(props) => (props.radius ? props.radius : '4px')};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.color ? props.color : 'white')};
    transition: all 0.5s;
    &:hover {
        background: ${(props) =>
            props.background
                ? darken(0.05, props.background)
                : darken(0.5, '#7159c1')};
    }
`;
