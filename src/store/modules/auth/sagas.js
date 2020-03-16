import { takeLatest, call, put, all, take } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';
import { signInSucess } from './actions';

export function* signIn({ payload }) {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
        email,
        password,
    });
    const { token, user } = response.data;
    yield put(signInSucess(token, user));

    history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
