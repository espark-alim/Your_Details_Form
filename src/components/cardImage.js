import React from 'react'
import { VStack, Image } from '@chakra-ui/react';
import side from "./banner.png";
const CardImage = () => {
    return (
        <VStack
            spacing={2}
            align={'center'}
            w={'full'}
            h={'full'}
            justifyContent={'center'}
        >
            <Image src={side} alt='Dan Abramov' objectFit='fit' boxSize='2xl' />
        </VStack>
    );
}
export default CardImage;