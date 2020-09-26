import styled from 'styled-components/native';
import colors from '../../theme/colors';

interface ContainerProps {
   color:'primary'|'secondary';
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width:100%;
  height:70px;
  background:${({color}) => colors[color]};
`;
