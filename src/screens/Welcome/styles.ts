import styled from 'styled-components/native';
import colors from '../../theme/colors';

export const ImageBackground = styled.ImageBackground`
    flex:1;
    justify-content:flex-end;
    align-items:center;
`;

export const LogoContainer = styled.View`
    justify-content:center;
    align-items:center;
    position:absolute;
    top:70px;
`;

export const Logo = styled.Image`
    width:100px;
    height:100px;
`;

export const Text = styled.Text`
    margin-top:15px;
`;