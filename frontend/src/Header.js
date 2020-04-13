import React from 'react';

import LinkWrapper from './LinkWrapper';

const Header = () => {
    return (
        <nav>
            <div class="nav-wrapper light-blue darken-3">
                <a href="/" class="brand-logo">COPERFORTE</a>
                <ul class="right">
                    <li><LinkWrapper to='/cadastrar'>Cadastrar</LinkWrapper></li>
                    <li><LinkWrapper to='/inicial'>Inicial</LinkWrapper></li>
                    <li><LinkWrapper to='/sobre'>Sobre</LinkWrapper></li>
                </ul>
            </div>
        </nav>
    );
}
export default Header;