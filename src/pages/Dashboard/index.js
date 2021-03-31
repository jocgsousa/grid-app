import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
    FaHome,
    FaRegChartBar,
    FaKey,
    FaChild,
    FaHistory,
    FaSignOutAlt,
} from 'react-icons/fa';
import {
    Container,
    Row,
    Col,
    NavBar,
    ContainerLogo,
    Button,
} from '../../components';

import { Box } from './styles';

export default class Dashboard extends Component {
    state = {
        logout: false,
        animate: 'fadeInLeft',
    };

    logout = () => {
        this.setState({ animate: 'fadeOutRight' });

        setTimeout(() => {
            this.setState({ logout: true });
        }, 1500);
    };

    render() {
        const { logout, animate } = this.state;

        return (
            <Container animation={animate} delay="0.5s" duration="1s">
                {logout && <Redirect to="/" />}
                <Row>
                    <Col
                        alignItems="left"
                        borderBottom="1px solid #ccc"
                        size={12}
                    >
                        <NavBar>
                            <ContainerLogo>
                                <h1>User - GIT</h1>
                            </ContainerLogo>
                        </NavBar>
                    </Col>
                </Row>

                <Row>
                    <Col
                        justifyContent="top"
                        padding="10px"
                        size={1}
                        height="100vh"
                    >
                        <Button
                            background="#5c5c96"
                            height="70px"
                            type="buttom"
                        >
                            <FaHome size={20} color="#FFF" />
                        </Button>
                        <Button
                            background="#5c5c96"
                            height="70px"
                            type="buttom"
                        >
                            <FaRegChartBar size={20} color="#FFF" />
                        </Button>
                        <Button
                            background="#5c5c96"
                            height="70px"
                            type="buttom"
                        >
                            <FaKey size={20} color="#FFF" />
                        </Button>
                        <Button
                            background="#5c5c96"
                            height="70px"
                            type="buttom"
                        >
                            <FaChild size={20} color="#FFF" />
                        </Button>
                        <Button
                            background="#5c5c96"
                            height="70px"
                            type="buttom"
                        >
                            <FaHistory size={20} color="#FFF" />
                        </Button>
                        <Button
                            background="#5c5c96"
                            height="70px"
                            type="buttom"
                            onClick={this.logout}
                        >
                            <FaSignOutAlt size={20} color="#FFF" />
                        </Button>
                    </Col>
                    {/* Segunda coluna */}
                    <Col background="dark" justifyContent="top" size={12}>
                        <Row>
                            <Col radius="4px" margin="10px" size={12}>
                                <Box background="transparent">
                                    <h1>Serviços</h1>
                                    <hr />
                                    <strong>Ativos: 5</strong>
                                    <strong>Desativados: 10</strong>
                                    <strong>Desenvolvidos: 10</strong>
                                    <hr />
                                </Box>
                            </Col>
                            <Col radius="4px" margin="10px" size={12}>
                                <Box background="transparent">
                                    <h1>Processos</h1>
                                    <hr />
                                    <strong>Entrada: 5</strong>
                                    <strong>Encaminhados: 10</strong>
                                    <strong>Revisão: 12</strong>
                                    <hr />
                                </Box>
                            </Col>
                            <Col radius="4px" margin="10px" size={12}>
                                <Box background="transparent">
                                    <h1>Encaminhamentos</h1>
                                    <hr />
                                    <strong>SEASPAC: 5</strong>
                                    <strong>CT: 10</strong>
                                    <strong>CREAS: 12</strong>
                                    <hr />
                                </Box>
                            </Col>
                        </Row>
                        <Row>
                            <Col radius="4px" margin="10px" size={12}>
                                <Box background="transparent">
                                    <h1>Gastos mensais</h1>
                                    <hr />
                                    <strong>SEASPAC: 5</strong>
                                    <strong>CT: 10</strong>
                                    <strong>CREAS: 12</strong>
                                    <hr />
                                </Box>
                            </Col>
                        </Row>
                        <Row>
                            <Col radius="4px" margin="10px" size={12}>
                                <Box background="transparent">Item 1</Box>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
