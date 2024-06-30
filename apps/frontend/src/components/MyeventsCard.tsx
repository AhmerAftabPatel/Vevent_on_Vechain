import { Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text, Button, Badge, Grid, GridItem, List, ListItem, ListIcon, Progress } from '@chakra-ui/react'
import { InfoCard } from "./InfoCard";
import { Dropzone } from './Dropzone';
import { MdCheckCircle, MdSettings } from 'react-icons/md';

const MyEventsCard = () => {
    return (
        <Card w={"full"} p={'10px'}>
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
                                src='https://assets.weforum.org/article/image/responsive_big_webp_-yoSdWSOtRObTs36WEqkcUQOB65PKf173Kf3wdJbUv8.webp'
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='md'>Say no to single-use plastic!</Heading><Badge colorScheme='red'>On Going</Badge>

                                    <Text py='2'>
                                        Caffè latte is a coffee beverage of Italian origin made with espresso
                                        and steamed milk.
                                    </Text>
                                </CardBody>

                                <CardFooter>
                                    {/* <Dropzone /> */}
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
                                    <ListIcon color='red.500' />
                                    Upload Pictures
                                </ListItem>
                                <ListItem>
                                    <ListIcon color='red.500' />
                                    9 / 10 votes needed
                                </ListItem>
                            </List>
                        </Card>
                    </GridItem>
                </Grid>
            </Card>
        </Card>
    )
}

export default MyEventsCard;