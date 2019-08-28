import React from 'react';

import '../assets/style/Header.css';

function Header() {
    return (
        <header>
            <div className="content">
                <div className="header">
                    <h2>rocketbook</h2>
                    <div className="profile">
                        <strong>Meu perfil </strong>
                        <img src="https://api.adorable.io/avatars/49/abott@adorable.png" />
                    </div>
                </div>

            </div>
        </header>

    );
}

export default Header;