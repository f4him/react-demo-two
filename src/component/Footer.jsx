import { Text, Input, Box, Stack, VStack, HStack, Heading, Button} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p='16' color={'white'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={'full'} px='4' >
                <Heading size={'md'} textTransform={'uppercase'}>Subscribe to our newsletter</Heading>
                <HStack borderBottom={'2px solid'} py='2'>
                    <Input placeholder="Enter your email here...." border={"none"} borderRadius={"none"} outline={"none"} focusBorderColor={"none"}/>
                    <Button p={'0'} colorScheme="puple" vaiant={'ghost'} borderRadius={'0 20px 20px 0'}>

                    <AiOutlineSend size={20}/>
                    </Button>

                </HStack>
            </VStack>

            <VStack w={'full'}
            borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
                <Heading textAlign={'center'} textTransform={'uppercase'}>Video Hub</Heading>
                <Text>All rights reserved</Text>
            </VStack>
            <VStack w={'full'}>
                <Heading size='md' textTransform={'uppercase'}>Social Media</Heading>
                <Button variant={'link'} colorScheme='white'>
                    <a href="youtube.com" target='blank'>Youtube</a>
                </Button>
                <Button variant={'link'} colorScheme='white'>
                    <a href="instagram.com" target='blank'>Instagram</a>
                </Button>
                <Button variant={'link'} colorScheme='white'>
                    <a href="github.com" target='blank'>Github</a>
                </Button>
            </VStack>
        </Stack>
    </Box>
    )
}

export default Footer