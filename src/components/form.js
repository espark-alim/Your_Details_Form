import React from 'react'
import { Container, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react';
import CardImage from './cardImage';
import Card from './card';
import { Icon, path } from 'chakra-ui';
const LoginForm = () => {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("gray.50", "whiteAlpha.50")
    return (
        <>
            <Container
                maxW={"8xl"}
                maxH={'8xl'}
                // bg={"orange.50"}
                // backgroundImage={bg}
                backgroundRepeat="no-repeat"
                px={[2, 10, 20]}
            >
                <Flex
                    h={{ base: "auto", md: "100vh" }}
                    py={[0, 10, 20]}
                    direction={{
                        base: "column-reverse",
                        md: "row"
                    }}
                >
                    <CardImage />
                    <Card bgColor={bgColor} toggleButton={toggleColorMode} />
                </Flex>

            </Container>
        </>
    );
}

export default LoginForm;