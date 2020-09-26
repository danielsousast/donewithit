import React from "react";
import WelcomeButton from "../../components/WelcomeButton";
import {
  ImageBackground,
  Logo,
  LogoContainer,
	Text,
} from "./styles";

const Welcome: React.FC = () => {
  return (
    <ImageBackground source={require("../../../assets/background.jpg")}>
      <LogoContainer>
        <Logo source={require("../../../assets/logo-red.png")} />
				<Text>Sell What You Don't Need</Text>
      </LogoContainer>
      <WelcomeButton color="primary" />
      <WelcomeButton color="secondary" />
    </ImageBackground>
  );
};

export default Welcome;
