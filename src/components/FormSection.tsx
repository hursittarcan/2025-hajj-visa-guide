import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    RadioGroup,
    Radio,
    Stack,
    chakra,
    VStack,
    Text,
} from '@chakra-ui/react'
import { useState } from 'react'

// Form Section Component
const FormSection = () => {
    // Placeholder state to simulate form behavior
    const [radioValue, setRadioValue] = useState("option1")

    return (
        <Box as='section' pb={{ base: '0', md: '5rem' }} bg='gray.50'>
            <Container py='120px' maxW='1280px'>
                <Box maxW='760px' mx='auto' textAlign='center' mb='56px' position='relative'>
                    {/* Heading */}
                    <chakra.h1
                        style={{ color: "#00044F" }}
                        maxW='20ch'
                        mx='auto'
                        fontSize={{ base: '2.25rem', sm: '3rem', lg: '4rem' }}
                        fontFamily='heading'
                        letterSpacing='tighter'
                        fontWeight='extrabold'
                        mb='16px'
                        lineHeight='1.2'
                    >
                        Klaar om de <span style={{ color: "#801AFB" }}>volgende stap</span> te zetten?
                    </chakra.h1>

                    <Text
                        mx='auto'
                        color='gray.500'
                        _dark={{ color: 'gray.400' }}
                        fontSize={{ base: 'lg', lg: 'xl' }}
                        mt='6'
                    >
                        Neem contact met ons op en ontdek wat we voor jouw kunnen betekenen.
                    </Text>

                    {/* Form */}
                    <VStack spacing={4} mt={10} as="form">
                        <FormControl isRequired>
                            <FormLabel>Naam</FormLabel>
                            <Input placeholder="Jouw naam" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="Jouw email" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Telefoonnummer</FormLabel>
                            <Input type="tel" placeholder="Jouw telefoonnummer" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Vraag</FormLabel>
                            <Textarea placeholder="Stel je vraag" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Interesse</FormLabel>
                            <RadioGroup value={radioValue} onChange={setRadioValue}>
                                <Stack direction="row">
                                    <Radio value="option1">Consult</Radio>
                                    <Radio value="option2">Demo</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <Button colorScheme="teal" size="lg" mt={4}>
                            Verstuur
                        </Button>
                    </VStack>
                </Box>
            </Container>
        </Box>
    )
}

export default FormSection;
