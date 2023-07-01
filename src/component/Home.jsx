import { Box, Heading, Image, Container, Stack, Text } from '@chakra-ui/react';
import {Carousel} from 'react-responsive-carousel';

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (

    <Box>

    <MyCarousel top={10}/>
  
    <Container maxW={"container.xl"} minH={'100vh'} p='16'>
        <Heading textTransform={'upperCase'} py='2' w='fit-content' m='auto' borderBottom={'2px solid'}> Services</Heading>
        <Stack
        h={'full'}
        p={'4'}
        alignItems={'center'}
        direction={['column','row']}>
            <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg'}/>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus inventore eaque quis reiciendis nobis ratione enim autem perspiciatis vitae dolorem voluptatem tenetur consequuntur cumque, quibusdam iure aliquid. Temporibus, accusantium quas.</Text>
        </Stack>
    </Container>
    
  
    </Box>
  ) 
}
const headingOptions = {
    pos:'absolute',
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)',
    textTransform:'uppercase',
    p:'4'

}
const MyCarousel = () => {
    return (
    
    
    <Carousel 
    showThumbs={false}
    autoPlay 
    infiniteLoop 
    interval={'2000'}>
        <Box w={'full'} h={'100vh'}>
            <Image src={img1}/>
            <Heading bgColor={'whiteAlpha.400'} color='white' {...headingOptions}>All new keyboards</Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img2}/>
            <Heading bgColor={'whiteAlpha.400'} color='white' {...headingOptions}>Gaming with consoles</Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img3}/>
            <Heading bgColor={'whiteAlpha.700'} color='black' {...headingOptions}>Your dream setup</Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img4}/>
            <Heading 
            bgColor={'whiteAlpha.800'} color='black' {...headingOptions}>High Definition rendering</Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img5}/>
            <Heading bgColor={'whiteAlpha.400'} color='white' {...headingOptions}>New model hardwares</Heading>
        </Box>



    </Carousel>
)
}
export default Home