import { Container, VStack, HStack, Button, Input } from '@chakra-ui/react'
import React from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
            <FaCloudUploadAlt size={"10vmax"}/>

            <form>
                <HStack>
                    <Input required type={"file"} css={{
                        "&::file-selector-button":{
                            border:"none",
                            width:"calc(100% + 36px)",
                            height:"100%",
                            marginLeft:"-18px",
                            color:"purple",
                            backgroundColor:"white",
                            cursor:"pointer"

                        }
                    }} />
                    <Button>Upload</Button>
                </HStack>

            </form>
        </VStack>


    </Container>
  )
}

export default Upload