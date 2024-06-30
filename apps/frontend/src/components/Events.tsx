import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Input, List, ListIcon, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";


const events = [
    {
        icon: "https://assets.weforum.org/article/image/responsive_big_webp_-yoSdWSOtRObTs36WEqkcUQOB65PKf173Kf3wdJbUv8.webp",
        title: "Say no to single-use plastic!",
        description: "Buy products that are eco-friendly and sustainable.",
    },
    {
        icon: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F790364399%2F237923021966%2F1%2Foriginal.20240615-215814?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=630fa1dfbb67d861fd20dd18aa6e7d71",
        title: "Eco-Bay Market",
        description: "Get ready for a fun-filled night at Eco-Bay Market, where you can shop for eco-friendly products and support local women owned businesses!",
    },
    {
        icon: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F792464409%2F2189949020573%2F1%2Foriginal.20240619-115153?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C4000%2C2000&s=262f135d7441780bd993fb3cf92e98f3",
        title: "Solar Business Expo 2024",
        description: "Get ready to explore the latest trends and innovations in the solar business industry at Solar Business Expo!!",
    },
];

export const Events = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    function BasicUsage() {
        const [counter, setCounter] = useState(0)
        return (
            <>
                {/* <Button onClick={onOpen}>Open Modal</Button> */}

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Say no to single-use plastic!</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Image src="./Vechainimage.png" width={"100%"} height={"270px"} />
                            {/* <Lorem count={2} /> */}
                            <br/>
                            <p>Replace plastic spoons and straws with bamboo-based ones. You can even use compostable plant-based straws. Best of all, go straw-free and drink straight from the cup!</p><br />
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                    Thursday, 7:00 PM
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                    Earn upto 5 B3TR Token
                                </ListItem>
                            </List>
                        </ModalBody>
                        <Box textAlign={'center'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'2'}>
                            <Button onClick={() => setCounter(counter - 1)}>-</Button> <Box width={'50px'}><Input type="number" onChange={(e: any) => setCounter(e.target.value)} value={counter} placeholder='Basic usage' /></Box> <Button onClick={() => setCounter(counter + 1)}>+</Button>
                        </Box>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Link to={'/my-events'}><Button variant='ghost'>Register Now</Button></Link>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        )
    }

    function ShareReward() {
        return (
            <>
                {/* <Button onClick={onOpen}>Open Modal</Button> */}

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Say no to single-use plastic!</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Image src="./Vechainimage.png" width={"100%"} height={"270px"} />
                            {/* <Lorem count={2} /> */}
                            <br/>
                            <p>Replace plastic spoons and straws with bamboo-based ones. You can even use compostable plant-based straws. Best of all, go straw-free and drink straight from the cup!</p><br />
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                    Thursday, 7:00 PM
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                    Earn upto 5 B3TR Token
                                </ListItem>
                            </List>
                        </ModalBody>
                        <Box textAlign={'center'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'2'}>
                            
                        </Box>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Link to={'/my-events'}><Button variant='ghost'>Share Now</Button></Link>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        )
    }
    return (
        <Card mt={3} w={"full"}>
            <BasicUsage />
            {/* <ShareReward/> */}
            <Flex
                p={{ base: 4 }}
                w="100%"
                direction={{ base: "column", md: "row" }}
            >
                <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
                    {events.map((event) => {
                        return (
                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                            >
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '200px' }}
                                    src={event.icon}
                                    alt='Caffe Latte'
                                />

                                <Stack>
                                    <CardBody>
                                        <Heading size='md'>{event.title}</Heading>

                                        <Text py='2'>
                                            {event.description}
                                        </Text>
                                        <List spacing={3}>
                                            <ListItem>
                                                <ListIcon as={MdCheckCircle} color='green.500' />
                                                Thursday, 7:00 PM
                                            </ListItem>
                                            <ListItem>
                                                <ListIcon as={MdCheckCircle} color='green.500' />
                                                Earn upto 5 B3TR Token
                                            </ListItem>
                                        </List>
                                    </CardBody>

                                    <CardFooter gap={2}>
                                        <Button variant='solid' onClick={onOpen} colorScheme='blue'>
                                            Register
                                        </Button>
                                        <Button variant='solid' colorScheme='blue'>
                                            Share
                                        </Button>

                                    </CardFooter>
                                </Stack>
                            </Card>
                        )
                    })}
                </SimpleGrid>
            </Flex>
        </Card>
    );
};
