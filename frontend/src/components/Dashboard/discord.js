import React from 'react';
import DiscordLogo from '../../assets/discord_logo.png';

const DiscordButton = () => {
    const discordUrl = 'https://discord.gg/2nN2VqwNaK';

    const handleDiscordButtonClick = () => {
        window.location.href = discordUrl;
    };

    return (
        <button
            style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
            }}
            onClick={handleDiscordButtonClick}
        >
            <img
                src={DiscordLogo}
                alt="Discord Logo"
                style={{
                    marginRight: '10px',
                    width: '70px',
                    height: '30px',
                }}
            />
        </button>
    );
};

export default DiscordButton;