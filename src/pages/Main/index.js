import React, { Component } from 'react';
import { BallSpinner } from 'react-spinners-kit';

import api from '../../services/api';

import {
    Container,
    Form,
    NickInput,
    PasswordInput,
    IconReact,
    ButtonLogin,
    ButtonLoginText,
} from './styles';

export default class Main extends Component {
    state = {
        animate: 'fadeInLeft',
        user: '',
        auth: false,
        loading: false,
    };

    handleInput = (e) => {
        this.setState({ user: e.target.value });
    };

    handleLogin = async (e) => {
        e.preventDefault();
        this.setState({ animate: 'none', loading: true });
        const { user } = this.state;
        try {
            const response = await api.get(`/users/${user}`);
            console.log(response.data);
            this.setState({
                auth: true,
                animate: 'fadeOutRight',
                loading: false,
            });
        } catch (error) {
            console.log(error.response.data.error);
            this.setState({ auth: true, animate: 'shake', loading: false });
        }
    };

    render() {
        const { animate, auth, user, loading } = this.state;
        return (
            <Container
                animation={animate}
                delay={auth ? '0s' : '1s'}
                duration={auth ? '0.5s' : '1s'}
            >
                <Form onSubmit={this.handleLogin}>
                    <h2>
                        ENTRAR - SIAS{' '}
                        <IconReact
                            animation="rotate"
                            duration="5s"
                            iterationCount="infinite"
                            timingFunction="linear"
                        />
                    </h2>
                    <NickInput onChange={this.handleInput} value={user} />
                    <PasswordInput />
                    <ButtonLogin>
                        <ButtonLoginText>
                            {loading ? (
                                <BallSpinner
                                    size={30}
                                    color="#FFFF"
                                    loading={loading}
                                />
                            ) : (
                                'ENTRAR'
                            )}
                        </ButtonLoginText>
                    </ButtonLogin>
                </Form>
            </Container>
        );
    }
}
