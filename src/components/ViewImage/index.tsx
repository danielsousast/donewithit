import React from 'react';
import { CloseIcon, Container, Image,DeleteIcon } from './styles';

const ViewImage: React.FC = () => {
       return (
           <Container>
               <CloseIcon></CloseIcon>
               <DeleteIcon></DeleteIcon>
                <Image 
                    resizeMode="contain"
                    source={require('../../../assets/chair.jpg')}
                />
           </Container>
       )
}

export default ViewImage;