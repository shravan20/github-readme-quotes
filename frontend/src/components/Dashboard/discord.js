import React from "react";
import DiscordLogo from "../../assets/discord_logo.png";

const DiscordButton = () => {
  const discordUrl = "https://discord.gg/2nN2VqwNaK";

  const handleDiscordButtonClick = () => {
    window.location.href = discordUrl;
  };

  return (
    <button
      style={{
        backgroundColor: "white",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        maxHeight: "48px",
      }}
      onClick={handleDiscordButtonClick}>
      <img
        src={DiscordLogo}
        alt="Discord Logo"
        style={{
          marginRight: "5px",
          width: "75px",
          height: "20px",
        }}
      />
    </button>
  );
};

export default DiscordButton;
