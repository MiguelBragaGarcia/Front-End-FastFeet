import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo.png';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="FastFeet" />
                    <Link to="/encomendas">ENCOMENDAS</Link>
                    <Link to="/entregadores">ENTREGADORES</Link>
                    <Link to="/destinataios">DESTINATÁRIOS</Link>
                    <Link to="/problemas">PROBLEMAS</Link>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <strong>Admin FastFeet</strong>
                            <Link to="/">sair do sistema</Link>
                        </div>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
