import {Container, VStack, Heading, Input, Button, Text, Avatar} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
const Signup = () => {
  return (
    <Container maxW={'container.xl'} p={'16'}>


        <form>
            <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full','96']}
            m={'auto'}
            my={'16'}>
                <Heading> Site Name</Heading>
                <Avatar alignSelf={'center'} boxSize={'32'}></Avatar>
                <Input placeholder={'Name'} type='text' required focusBorderColor='purple.500'/>
                <Input placeholder={'email'} type='email' required focusBorderColor='purple.500'/>
                <Input placeholder={'password'} type='password' required focusBorderColor='purple.500'/>
                
                <Button type='submit' colorScheme='purple'>Sign Up</Button>
                <Text textAlign={'right'}>Existing User?{"   "}
                <Button variant={'link'} colorScheme='purple' alignSelf={'flex-end'}>
                <Link to={'/login'}>Login</Link>
                </Button>
                </Text>
            </VStack>
        </form>

    </Container>
  )
}

export default Signup