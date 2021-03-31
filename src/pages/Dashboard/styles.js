import styled from 'styled-components';
import { darken } from 'polished';
import { BaseAnimation } from '../../styles/animations/animations';

export const Box = styled(BaseAnimation)`
    background-color: ${(props) =>
        props.background ? props.background : '#7159c1'};
    /* width: ${(props) => (props.width ? props.width : '300px')}; */
    flex: ${(props) => props.size && props.size};
    min-height: ${(props) => (props.height ? props.height : '90px')};
    padding: ${(props) => (props.padding ? props.padding : '10px')};
    margin: ${(props) => (props.margin ? props.margin : '10px')};
    /* default */
    border: ${(props) => (props.border ? props.border : 'none')};
    border-radius: ${(props) => (props.radius ? props.radius : '4px')};
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    color: ${(props) => (props.color ? props.color : 'white')};
    transition: all 0.5s;
    &:hover {
        background: ${(props) =>
            props.background
                ? darken(0.05, props.background)
                : darken(0.5, '#7159c1')};
    }

    h1 {
        text-align: left;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    hr {
        margin-top: 5px;
        margin-bottom: 5px;
        height: 2px;
        border-radius: 4px;
        background: #fff;
    }

    strong {
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;
