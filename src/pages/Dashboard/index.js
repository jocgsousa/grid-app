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

// Import Components for render options
import Home from '../../components/content/Home';

// Import file styles
import {} from './styles';

export default class Dashboard extends Component {
    state = {
        logout: false,
        animate: 'fadeInLeft',
        option: 0,
        interation: 0,

        chartData: {
            labels: ['1', '2', '3', '4', '5', '6'],

            datasets: [
                // Primeira line
                {
                    label: ['Linha de dados '],
                    data: ['50', '70', '57', '59', '80', '60'],
                    fontColor: 'white',
                    backgroundColor: [
                        'rgba(123,23,12,0.1)',
                        'rgba(153,204,255,0.6)',
                        'rgba(193, 92, 212, 0.5)',
                        'rgba(255, 138, 76, 0.5)',
                        'rgba(76, 87, 255, 0.5)',
                        'rgba(76, 255, 79, 0.6)',
                    ],
                    borderWidth: '2',
                    borderColor: '#33ccff',
                    hoverBorderWidth: 3,
                    // eslint-disable-next-line no-dupe-keys
                    backgroundColor: 'rgba(153,204,255,0.0)',
                },
            ],
        },
    };

    componentDidMount() {
        this.setState({ option: 1 });
        const valor = 0;
        setInterval(() => {
            this.valor = +1;
            this.setState({ interation: valor });
            this.handleDataChart();
            this.handleContent();
        }, 3000);
    }

    handleDataChart = () => {
        const { chartData } = this.state;
        // Armazena a variavel chartData dentro de dataRest
        const dataRest = chartData;
        // Removes o label anterior
        dataRest.labels.splice(0, 1);
        // Removemos um dos datas do atributo data de datasets
        dataRest.datasets[0].data.splice(0, 1);
        // vamos adicionar um novo lavel
        dataRest.labels.push(`${Number(dataRest.labels[4]) + 1}`);
        // Criamos um valor aleatório para adicionarmos no data
        const altData = Math.floor(Math.random() * 100);
        // Adicionamos um novo data ao dataRest.datasets[0].data
        dataRest.datasets[0].data.push(`${altData}`);

        this.setState({ chartData: dataRest });
    };

    logout = () => {
        this.setState({ animate: 'fadeOutRight' });

        setTimeout(() => {
            this.setState({ logout: true });
        }, 1500);
    };

    // eslint-disable-next-line consistent-return
    handleContent = (data) => {
        const { option, chartData } = this.state;

        if (option === 1) {
            return <Home animation="" chartData={chartData} data={data} />;
        }
    };

    selectOption = (e) => {
        this.setState({ option: e });
    };

    render() {
        const { logout, animate, interation } = this.state;

        return (
            <Container
                height="100vh"
                animation={animate}
                delay="0.5s"
                duration="1s"
            >
                {logout && <Redirect to="/" />}
                <Row width="100%">
                    <Col
                        alignItems="left"
                        borderBottom="1px solid #ccc"
                        size={12}
                    >
                        <NavBar>
                            <ContainerLogo>
                                <h1>SYS - Interation: {interation}</h1>
                            </ContainerLogo>
                        </NavBar>
                    </Col>
                </Row>

                <Row>
                    <Col
                        justifyContent="top"
                        padding="10px"
                        size={1}
                        height="110vh"
                        grid="navbar"
                    >
                        <Button
                            onClick={() => this.selectOption(1)}
                            background="#5c5c96"
                            height="70px"
                            type="buttom"
                        >
                            <FaHome size={20} color="#FFF" /> Home
                        </Button>
                        <Button
                            onClick={() => this.selectOption(2)}
                            background="#5c5c96"
                            height="70px"
                            type="buttom"
                        >
                            <FaRegChartBar size={20} color="#FFF" /> Análise
                        </Button>
                        <Button
                            onClick={() => this.selectOption(3)}
                            background="#5c5c96"
                            height="70px"
                            type="buttom"
                        >
                            <FaKey size={20} color="#FFF" /> Token
                        </Button>
                        <Button
                            onClick={() => this.selectOption(4)}
                            background="#5c5c96"
                            height="70px"
                            type="buttom"
                        >
                            <FaChild size={20} color="#FFF" /> Usuário
                        </Button>
                        <Button
                            onClick={() => this.selectOption(5)}
                            background="#5c5c96"
                            height="70px"
                            type="buttom"
                        >
                            <FaHistory size={20} color="#FFF" /> Histórico
                        </Button>
                        <Button
                            background="#5c5c96"
                            height="70px"
                            type="buttom"
                            onClick={this.logout}
                        >
                            <FaSignOutAlt size={20} color="#FFF" /> Sair
                        </Button>
                    </Col>
                    {/* Segunda coluna */}
                    <Col background="dark" justifyContent="top" size={12}>
                        {this.handleContent()}
                    </Col>
                </Row>
            </Container>
        );
    }
}
