import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { PulseSpinner } from 'react-spinners-kit';
import api from '../../../services/api';
import { Box } from './styles';
import { Row, Col } from '../../index';

export default class Home extends Component {
    state = {
        loading: false,
    };

    async componentDidMount() {
        this.setState({ loading: true });
        try {
            const response = await api.get('/users/jocgsousa');
            console.log(response.data);
            this.setState({ loading: false });
        } catch (error) {
            this.setState({ loading: false });
            console.log(error.response.data.error);
        }
    }

    render() {
        const { loading } = this.state;
        const { animation, chartData, title, position } = this.props;
        return (
            <>
                {loading ? (
                    <Row background="transparent">
                        <Col
                            height="100vh"
                            size={12}
                            display="flex"
                            background="transparent"
                        >
                            <PulseSpinner
                                size={50}
                                color="#FFFF"
                                loading={loading}
                            />
                        </Col>
                    </Row>
                ) : (
                    <>
                        <Row animation={animation}>
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
                        <Row animation={animation}>
                            <Col radius="4px" margin="10px" size={12}>
                                <Box
                                    height="40%"
                                    justifyContent="top"
                                    minHeight="340px"
                                    background="transparent"
                                >
                                    <h1>Gastos mensais</h1>
                                    <hr />

                                    <Line
                                        width={10}
                                        height={3}
                                        data={chartData}
                                        options={{
                                            maintainAspectRatio: false,

                                            title: {
                                                display: false,
                                                text: '',
                                                fontSize: 10,
                                                fontColor: 'white',
                                            },
                                            legend: {
                                                display: title,
                                                position,
                                                labels: {
                                                    fontColor: 'white',
                                                },
                                            },
                                        }}
                                    />
                                    <hr />
                                </Box>
                            </Col>
                        </Row>
                    </>
                )}
            </>
        );
    }
}

Home.defaultProps = {
    title: true,
    position: 'bottom',
};
Home.propTypes = {
    title: PropTypes.string,
    position: PropTypes.func,
    chartData: PropTypes.func.isRequired,
    animation: PropTypes.func.isRequired,
};
