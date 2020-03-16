import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insita um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
    const dispatch = useDispatch();

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }

    return (
        <>
            <img src={logo} alt="FastFeet" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <p>Seu Email</p>
                <Input
                    name="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                />
                <p>Sua senha</p>
                <Input
                    name="password"
                    type="password"
                    placeholder="Digite sua senha"
                />
                <button type="submit">Acessar</button>
            </Form>
        </>
    );
}
