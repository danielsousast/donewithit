import styled from 'styled-components/native';
import colors from '../../theme/colors';

export const Container = styled.View`
    flex:1;
    background:black;
`;

export const CloseIcon = styled.TouchableOpacity`
    width:50px;
    height:50px;
    background:${colors.primary};
    position:absolute;
    top:50px;
    left:15px;
`;

export const DeleteIcon = styled.TouchableOpacity`
    width:50px;
    height:50px;
    background:${colors.secondary};
    position:absolute;
    top:50px;
    right:15px;
`;

export const Image = styled.Image`
    width:100%;
    height:100%;
`;
