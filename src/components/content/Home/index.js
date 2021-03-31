import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { Box } from './styles';
import { Row, Col } from '../../index';

export default function Home({ title, position, chartData, animation }) {
    return (
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
            <Row>
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
                            width={4}
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
    );
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
