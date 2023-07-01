import {Container, VStack, Heading, Input, Button, Text} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>


        <form >
            <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full','96']}
            m={'auto'}
            my={'16'}>
                <Heading> Welcome Back!</Heading>

                <Input placeholder={'email'} type='email' required focusBorderColor='purple.500'/>
                <Input placeholder={'password'} type='password' required focusBorderColor='purple.500'/>
                <Button variant={'link'} colorScheme='purple' alignSelf={'flex-end'}>
                    <Link to={'/forgotpassword'}>Forgot password?</Link>
                    </Button>
                <Button type='submit' colorScheme='purple'>Log In</Button>
                <Text textAlign={'right'}>New User?{"   "}
                <Button variant={'link'} colorScheme='purple' alignSelf={'flex-end'}>
                <Link to={'/signup'}>Sign Up</Link>
                </Button>
                </Text>
            </VStack>
        </form>

    </Container>
  )
}

export default Login