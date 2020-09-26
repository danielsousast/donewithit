import React from 'react';
import { Container } from './styles';

interface ComponentProps {
    color: 'primary' | 'secondary';
}

const WelcomeButton: React.FC<ComponentProps> = ({color}) => {
       return <Container activeOpacity={0.8} color={color}/>;
}

export default WelcomeButton;