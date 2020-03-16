import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: #7159c1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    padding: 40px;
    height: 450px;
    width: 400px;
    text-align: center;
    background: #fff;

    p {
        margin-top: 20px;
        font-weight: bold;
        align-self: flex-start;
    }

    span {
        padding: 4px;
        border-radius: 4px;
        background: #e81010;
        color: #edcece;
        align-self: flex-start;
        margin: 0 0 5px;
        font-weight: bold;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }

    input {
        background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #000;
        margin: 0 0 10px;

        &::placeholder {
            color: rgba(0, 0, 0, 1);
        }
    }
    button {
        margin: 10px 0 0;
        height: 44px;
        background: #3b9eff;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
            background: ${darken(0.03, '#3b9eff')};
        }
    }
`;
