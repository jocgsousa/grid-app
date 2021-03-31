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
        chartData: {
            labels: ['Jan', 'Fev', 'Mar', 'Abri', 'Mai', 'Jun'],

            datasets: [
                // Primeira line
                {
                    label: ['Linha de compra '],
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
                    borderWidth: '1',
                    borderColor: 'red',
                    hoverBorderWidth: 3,
                    // eslint-disable-next-line no-dupe-keys
                    backgroundColor: 'rgba(153,204,255,0.0)',
                },
                // segunda Line
                {
                    label: ['Linha de venda    '],
                    data: ['20', '40', '45', '54', '70', '49'],
                    backgroundColor: [
                        'rgba(123,23,12,0.1)',
                        'rgba(153,204,255,0.6)',
                        'rgba(193, 92, 212, 0.5)',
                        'rgba(255, 138, 76, 0.5)',
                        'rgba(76, 87, 255, 0.5)',
                        'rgba(76, 255, 79, 0.6)',
                    ],
                    borderWidth: '1',
                    borderColor: 'green',
                    hoverBorderWidth: 4,
                    // eslint-disable-next-line no-dupe-keys
                    backgroundColor: 'rgba(153,204,255,0.0)',
                },
                // Terceira Line
                {
                    label: ['Margem de perda'],
                    data: ['28', '48', '50', '78', '60', '56'],
                    backgroundColor: [
                        'rgba(123,23,12,0.1)',
                        'rgba(153,204,255,0.6)',
                        'rgba(193, 92, 212, 0.5)',
                        'rgba(255, 138, 76, 0.5)',
                        'rgba(76, 87, 255, 0.5)',
                        'rgba(76, 255, 79, 0.6)',
                    ],
                    borderWidth: '1',
                    borderColor: 'purple',
                    hoverBorderWidth: 4,
                    // eslint-disable-next-line no-dupe-keys
                    backgroundColor: 'rgba(153,204,255,0.0)',
                },
            ],
        },
    };

    componentDidMount() {
        this.setState({ option: 1 });
    }

    logout = () => {
        this.setState({ animate: 'fadeOutRight' });

        setTimeout(() => {
            this.setState({ logout: true });
        }, 1500);
    };

    // eslint-disable-next-line consistent-return
    handleContent = () => {
        const { option, chartData } = this.state;

        if (option === 1) {
            return <Home animation="fadeInLeft" chartData={chartData} />;
        }
    };

    selectOption = (e) => {
        this.setState({ option: e });
    };

    render() {
        const { logout, animate } = this.state;

        return (
            <Container
                height="100vh"
                animation={animate}
                delay="0.5s"
                duration="1s"
            >
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
                        height="110vh"
                    >
                        <Button
                            onClick={() => this.selectOption(1)}
                            background="#5c5c96"
                            height="70px"
                            type="buttom"
                        >
                            <FaHome size={20} color="#FFF" />
                        </Button>
                        <Button
                            onClick={() => this.selectOption(2)}
                            background="#5c5c96"
                            height="70px"
                            type="buttom"
                        >
                            <FaRegChartBar size={20} color="#FFF" />
                        </Button>
                        <Button
                            onClick={() => this.selectOption(3)}
                            background="#5c5c96"
                            height="70px"
                            type="buttom"
                        >
                            <FaKey size={20} color="#FFF" />
                        </Button>
                        <Button
                            onClick={() => this.selectOption(4)}
                            background="#5c5c96"
                            height="70px"
                            type="buttom"
                        >
                            <FaChild size={20} color="#FFF" />
                        </Button>
                        <Button
                            onClick={() => this.selectOption(5)}
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
                        {this.handleContent()}
                    </Col>
                </Row>
            </Container>
        );
    }
}
