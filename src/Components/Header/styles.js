import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    padding: 0 30px;
    border-bottom: 1px solid #a2a8a3;
`;
export const Content = styled.div`
    height: 64px;
    /* max-width: 1120px;  Tamanho mínimo de exibição sem que os componentes fiquem deslocados*/
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;

        img {
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid #a2a8a3;
        }

        a {
            margin-right: 20px;
            padding-right: 20px;
            font-weight: bold;
            color: #a2a8a3;
        }
    }

    aside {
        display: flex;
        align-items: center;

        div {
            text-align: right;
            margin-right: 10px;

            strong {
                display: block;
                color: #333;
            }

            a {
                margin-top: 2px;
                font-size: 16px;
                color: #ff1414;
            }
        }
    }
`;
export const Profile = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;
`;
