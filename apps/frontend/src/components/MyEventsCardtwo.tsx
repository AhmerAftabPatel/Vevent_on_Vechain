import { Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text, Button, Badge, Grid, GridItem, List, ListItem, ListIcon, Progress } from '@chakra-ui/react'
import { InfoCard } from "./InfoCard";
import { Dropzone } from './Dropzone';
import { MdCheckCircle, MdSettings } from 'react-icons/md';
import { Footer } from './Footer';
import { color } from 'framer-motion';
import { useConnex, useWallet } from '@vechain/dapp-kit-react';
import { abi } from '@vechain/sdk-core';
import { useDisclosure } from '../hooks';
import { SubmissionModal } from './SubmissionModal';

const MyEventsCardTwo = () => {
    const { account } = useWallet();
    const connex = useConnex();
    const { onOpen } = useDisclosure();
    const contractAddr = "0x329340664F197b4B8E04173C48a96AF6FAcE7777";
    //const { account } = useWallet()
    //const connex = useConnex()
    const claimAbi = {
        "type": "function",
        "name": "claim",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    }

    const onClaim = async () => {
        const fragment = new abi.Function(claimAbi)
        const clause = {
            value: 0,
            data: fragment.encodeInput([]),
            to: contractAddr,
            abi: claimAbi
        }

        try {
            const result = await connex.vendor.sign("tx", [clause]).signer(account).request();
            console.log(result);
            onOpen()

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Card w={"full"} p={'10px'}>
            <SubmissionModal />

            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Grid templateColumns='repeat(5, 1fr)'>
                    <GridItem w="100%" colSpan={4} p={'10px'}>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F792464409%2F2189949020573%2F1%2Foriginal.20240619-115153?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C4000%2C2000&s=262f135d7441780bd993fb3cf92e98f3'
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='md'>Solar Business Expo 2024</Heading><Badge colorScheme='green'>Complete</Badge>

                                    <Text py='2'>
                                        Get ready to explore the latest trends and innovations in the solar business industry at Solar Business Expo!!
                                    </Text>
                                </CardBody>

                                <CardFooter>
                                    <Dropzone />
                                    {/* <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button> */}
                                </CardFooter>
                            </Stack>
                            <Progress hasStripe value={64} />
                        </Card>
                    </GridItem>
                    <GridItem colSpan={1} p={'10px'} w={'100%'}>
                        <Card w='full' bg={'inherit'} p={'10px'}
                            height={'100%'}
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'>
                            <List spacing={3} bg={'inherit'} width={'200px'}>
                                <ListItem>
                                    <ListIcon color='green.500' />
                                    Upload Pictures
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                    9 / 10 votes needed
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                    Verify NFT Drop
                                </ListItem>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <Button width={"full"} color={'white'} bg={'green'} onClick={onClaim}>Claim Reward</Button>
                            </List>
                            {/* <CardFooter> */}

                            {/* </CardFooter> */}
                        </Card>
                    </GridItem>
                </Grid>
            </Card>
        </Card>
    )
}

export default MyEventsCardTwo;