import React from 'react'
import { GrFormAdd } from "react-icons/gr";
import {
    Flex,
    FormLabel,
    GridItem,
    HStack,
    Heading,
    Input,
    SimpleGrid,
    Text,
    VStack,
    FormControl,
    Select,
    Checkbox,
    Button,
    Icon,
    IconButton,
    Switch,
} from '@chakra-ui/react';
const Card = ({ bgColor, toggleButton }) => {
    return (
        <VStack
            w={'full'}
            h={'full'}
            p={10}
            spacing={10}
            align='center'
            justifyContent={'center'}
            bg={bgColor}

        >
            <SimpleGrid
                column={3}
                columnGap={3}
                rowGap={5}
            >
                <HStack justifyContent={'flex-end'}><Text>Change Theme</Text><Switch onChange={toggleButton} size='md' /></HStack>
                <GridItem colSpan={1} my={2}>
                    <VStack spacing={2} align={'flex-start'}>
                        <Heading>
                            Your Details
                        </Heading>
                        <Text>
                            If you alresdy have an account, click here to log in.
                        </Text>
                    </VStack>
                </GridItem>
                <HStack>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>
                                First Name:
                            </FormLabel>
                            <Input placeholder='Enter...' />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>
                                Last Name:
                            </FormLabel>
                            <Input placeholder='Enter...' />
                        </FormControl>
                    </GridItem>
                </HStack>
                <GridItem>
                    <FormControl>
                        <FormLabel>
                            Address
                        </FormLabel>
                        <Input placeholder='Enter Address' />
                    </FormControl>
                </GridItem>

                <Flex gap={'2'}>
                    <GridItem colSpan={1} w={'full'}>
                        <FormControl>
                            <FormLabel>
                                City
                            </FormLabel>
                            <Input placeholder='Enter Address' />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1} w={'full'}>
                        <FormControl>
                            <FormLabel>
                                Country
                            </FormLabel>
                            <Select >
                                <option value={"Pakistan"}>
                                    Pakistan
                                </option>
                                <option value={"USA"}>
                                    USA
                                </option>
                            </Select>
                        </FormControl>
                    </GridItem>
                </Flex>
                <GridItem colSpan={1} my={'2'}>
                    <FormControl>
                        <Checkbox>Ship to the billing address.</Checkbox>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <Button w={'full'} size={'lg'}>Place Order</Button>
                    </FormControl>
                </GridItem>
            </SimpleGrid>
        </VStack>
    );
}

export default Card;